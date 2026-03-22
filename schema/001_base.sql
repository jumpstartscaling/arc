-- God Mode pSEO Factory - Base tables
-- Harris Matrix: Foundation

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leads (contact forms, audit survey, n8n form, etc.)
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    source TEXT,
    name TEXT,
    email TEXT,
    phone TEXT,
    website TEXT,
    revenue TEXT,
    budget TEXT,
    problem TEXT,
    form_type TEXT,
    data_json JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Scaling survey (Moat Audit, detailed survey)
CREATE TABLE IF NOT EXISTS scaling_survey_submissions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    role TEXT,
    current_revenue TEXT,
    target_revenue TEXT,
    team_size TEXT,
    industry TEXT,
    challenges JSONB,
    marketing_spend TEXT,
    channels JSONB,
    biggest_goal TEXT,
    raw_data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Request logging (optional, for debugging)
CREATE TABLE IF NOT EXISTS api_logs (
    id SERIAL PRIMARY KEY,
    endpoint TEXT,
    method TEXT,
    status INTEGER,
    payload JSONB,
    response JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
