import { Pool } from 'pg';

const isProd = process.env.NODE_ENV === 'production';
const dbUrl = process.env.DATABASE_URL || '';

// If we are connecting to the production DB on 5434, it might not support SSL
const useSsl = isProd && !dbUrl.includes(':5434');

const pool = new Pool({
  connectionString: dbUrl,
  ssl: useSsl ? { rejectUnauthorized: false } : false,
});

export default pool;

export async function query(text: string, params: any[]) {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('Executed query', { text, duration, rows: res.rowCount });
  return res;
}
