"use server";

import pool from "@/lib/db";

export async function submitLead(data: any) {
  try {
    const { name, email, phone, industry, revenue, team, bottleneck, utm_source, utm_medium, utm_campaign, utm_content, utm_term, page_url } = data;

    const query = `
      INSERT INTO leads (
        name, email, phone, industry, revenue, team, bottleneck, 
        utm_source, utm_medium, utm_campaign, utm_content, utm_term, 
        page_url, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW())
      RETURNING id
    `;

    const values = [
      name, email, phone, industry, revenue, team, bottleneck,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      page_url
    ];

    const result = await pool.query(query, values);
    console.log('Lead saved to DB, ID:', result.rows[0].id);

    return { success: true, id: result.rows[0].id };
  } catch (error) {
    console.error('Error saving lead to DB:', error);
    return { success: false, error: 'Database insertion failed' };
  }
}
