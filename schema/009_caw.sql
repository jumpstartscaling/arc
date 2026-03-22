-- God Mode pSEO Factory - SITE-SPECIFIC TEMPLATES (CHRISAMAYA.WORK / CAW)

CREATE TABLE IF NOT EXISTS caw_seed (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL
);

CREATE TABLE IF NOT EXISTS caw_content (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    blocks JSONB NOT NULL DEFAULT '[]',
    palette TEXT NOT NULL DEFAULT 'emerald',
    nav JSONB,
    footer JSONB,
    local_seo JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS caw_articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    html_content TEXT,
    meta_description TEXT,
    category TEXT,
    tags JSONB DEFAULT '[]',
    attributes JSONB DEFAULT '{}',
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_caw_content_slug ON caw_content(slug);
CREATE INDEX IF NOT EXISTS idx_caw_articles_slug ON caw_articles(slug);
