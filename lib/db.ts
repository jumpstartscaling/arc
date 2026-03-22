import { Pool } from 'pg';

const isProd = process.env.NODE_ENV === 'production';
const dbUrl = process.env.DATABASE_URL || '';

// If we are connecting to the production DB on 5434, it might not support SSL
const useSsl = isProd && !dbUrl.includes(':5434');

const pool = new Pool({
  connectionString: dbUrl,
  ssl: useSsl ? { rejectUnauthorized: false } : false,
  max: 5, // Limit concurrent connections to avoid hitting DB limits during parallel build workers
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

export default pool;

export async function query(text: string, params: any[], retries = 3) {
  const start = Date.now();
  let lastError;

  for (let i = 0; i < retries; i++) {
    try {
      const res = await pool.query(text, params);
      const duration = Date.now() - start;
      console.log('Executed query', { text, duration, rows: res.rowCount });
      return res;
    } catch (error: any) {
      lastError = error;
      if (error.code === 'ECONNRESET' || error.code === '57P01') { // 57P01 is admin shutdown or connection kill
        console.warn(`Database connection reset (attempt ${i + 1}/${retries}), retrying...`);
        // Wait bit before retry
        await new Promise(resolve => setTimeout(resolve, 500 * (i + 1)));
        continue;
      }
      throw error;
    }
  }
  throw lastError;
}
