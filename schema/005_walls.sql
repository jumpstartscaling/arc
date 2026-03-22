-- God Mode pSEO Factory - WALLS: Depend on sites or campaign_masters

CREATE TABLE IF NOT EXISTS campaign_masters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    status VARCHAR(50) DEFAULT 'active',
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    headline_spintax_root TEXT,
    target_word_count INTEGER DEFAULT 1500,
    niche_variables JSONB,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS generation_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    status VARCHAR(50) DEFAULT 'pending',
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    campaign_id UUID REFERENCES campaign_masters(id) ON DELETE SET NULL,
    target_quantity INTEGER DEFAULT 10,
    progress INTEGER DEFAULT 0,
    filters JSONB,
    current_offset INTEGER DEFAULT 0,
    source_type VARCHAR(20) DEFAULT 'new',
    source_article_ids JSONB,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS generated_articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    status VARCHAR(50) DEFAULT 'queued',
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    campaign_id UUID REFERENCES campaign_masters(id) ON DELETE SET NULL,
    title VARCHAR(255),
    slug VARCHAR(255),
    content TEXT,
    html_content TEXT,
    meta_title VARCHAR(255),
    meta_description TEXT,
    og_title VARCHAR(255),
    og_description TEXT,
    og_image VARCHAR(500),
    canonical_url TEXT,
    schema_json JSONB,
    generation_hash VARCHAR(255),
    readability_score DECIMAL(5,2),
    uniqueness_score DECIMAL(5,2),
    is_published BOOLEAN DEFAULT FALSE,
    sync_status VARCHAR(50),
    sitemap_status VARCHAR(50),
    last_refreshed_at TIMESTAMP,
    refresh_count INTEGER DEFAULT 0,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE generated_articles ADD COLUMN IF NOT EXISTS category TEXT;

CREATE TABLE IF NOT EXISTS posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    status VARCHAR(50) DEFAULT 'published',
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    title VARCHAR(255),
    slug VARCHAR(255),
    content TEXT,
    excerpt TEXT,
    schema_json JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    published_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS headline_inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    status VARCHAR(50) DEFAULT 'active',
    campaign_id UUID REFERENCES campaign_masters(id) ON DELETE CASCADE,
    final_title_text TEXT,
    headline_text VARCHAR(500),
    used_on_article UUID REFERENCES generated_articles(id) ON DELETE SET NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS content_fragments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    status VARCHAR(50) DEFAULT 'active',
    campaign_id UUID REFERENCES campaign_masters(id) ON DELETE CASCADE,
    fragment_type VARCHAR(100),
    content_body TEXT,
    fragment_text TEXT,
    word_count INTEGER,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
