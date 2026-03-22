"use server";

import pool from "@/lib/db";

export async function submitLead(data: any) {
  try {
    const { name, email, phone, industry, revenue, bottleneck, utm_source, utm_medium, utm_campaign, utm_content, utm_term, page_url, form_type = 'contact' } = data;

    // Mapping to the actual 'leads' table schema in port 5434
    const query = `
      INSERT INTO leads (
        source, name, email, phone, website, revenue, problem, form_type, data_json, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())
      RETURNING id
    `;

    const data_json = {
      industry,
      bottleneck,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      page_url,
      team: data.team
    };

    const values = [
      utm_source || 'nextjs-migration',
      name,
      email,
      phone,
      industry, // mapping industry to website for now as it's the closest field
      revenue,
      bottleneck, // mapping bottleneck to problem
      form_type,
      JSON.stringify(data_json)
    ];

    const result = await pool.query(query, values);
    console.log('Lead saved to DB, ID:', result.rows[0].id);

    return { success: true, id: result.rows[0].id };
  } catch (error) {
    console.error('Error saving lead to DB:', error);
    return { success: false, error: 'Database insertion failed' };
  }
}

export async function submitSurvey(data: any) {
  try {
    const { 
      name, email, company, role, current_revenue, target_revenue, 
      team_size, industry, challenges, marketing_spend, channels, biggest_goal 
    } = data;

    const query = `
      INSERT INTO scaling_survey_submissions (
        name, email, company, role, current_revenue, target_revenue, 
        team_size, industry, challenges, marketing_spend, channels, biggest_goal, raw_data, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW())
      RETURNING id
    `;

    const values = [
      name, email, company, role, current_revenue, target_revenue,
      team_size, industry, 
      JSON.stringify(challenges), 
      marketing_spend, 
      JSON.stringify(channels), 
      biggest_goal,
      JSON.stringify(data)
    ];

    const result = await pool.query(query, values);
    console.log('Survey saved to DB, ID:', result.rows[0].id);

    return { success: true, id: result.rows[0].id };
  } catch (error) {
    console.error('Error saving survey to DB:', error);
    return { success: false, error: 'Database insertion failed' };
  }
}
export async function captureLead(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  // Add metadata
  const enrichedData = {
    ...data,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    form_type: data.form_type || 'offer'
  };
  return submitLead(enrichedData);
}
