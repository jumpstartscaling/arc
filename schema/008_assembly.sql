-- God Mode pSEO Factory - ASSEMBLY LINE: Usage tracking, auto-rotation

CREATE TABLE IF NOT EXISTS article_usage (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    article_id UUID NOT NULL REFERENCES generated_articles(id) ON DELETE CASCADE,
    component_type VARCHAR(50) NOT NULL,
    component_id TEXT NOT NULL,
    slot INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_article_usage_article ON article_usage(article_id);
CREATE INDEX IF NOT EXISTS idx_article_usage_component ON article_usage(component_type, component_id);

CREATE TABLE IF NOT EXISTS content_refresh_schedule (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    campaign_id UUID REFERENCES campaign_masters(id) ON DELETE CASCADE,
    schedule_cron VARCHAR(100) NOT NULL,
    refresh_mode VARCHAR(50) DEFAULT 'light',
    min_age_days INTEGER DEFAULT 90,
    last_run_at TIMESTAMP,
    next_run_at TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
