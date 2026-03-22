-- God Mode pSEO Factory - SYSTEM

CREATE TABLE IF NOT EXISTS scheduled_tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    campaign_id UUID REFERENCES campaign_masters(id) ON DELETE SET NULL,
    task_type VARCHAR(100),
    scheduled_at TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pending',
    payload JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS work_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES sites(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(100),
    entity_id UUID,
    details JSONB,
    level VARCHAR(20) DEFAULT 'info',
    status VARCHAR(100),
    user_id UUID,
    timestamp TIMESTAMP DEFAULT NOW()
);
