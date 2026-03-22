-- God Mode pSEO Factory - ANALYTICS (depend on sites)

CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    event_name VARCHAR(255) NOT NULL,
    page_path VARCHAR(500),
    session_id VARCHAR(255),
    user_agent TEXT,
    timestamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pageviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    page_path VARCHAR(500),
    session_id VARCHAR(255),
    referrer VARCHAR(500),
    user_agent TEXT,
    timestamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS conversions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    lead_id INT REFERENCES leads(id) ON DELETE SET NULL,
    conversion_type VARCHAR(100),
    value DECIMAL(10,2),
    source VARCHAR(255),
    timestamp TIMESTAMP DEFAULT NOW()
);
