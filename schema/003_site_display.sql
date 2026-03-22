-- God Mode pSEO Factory - V5 CONSOLIDATED SCHEMA (Master Plan)

-- site_displays (Global configuration: nav, footer, palette)
CREATE TABLE IF NOT EXISTS site_displays (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    domain TEXT UNIQUE NOT NULL,
    palette TEXT DEFAULT 'emerald',
    navigation JSONB DEFAULT '{}',
    footer JSONB DEFAULT '{}',
    scripts JSONB DEFAULT '[]',
    cdn_config JSONB DEFAULT '{}',
    local_seo JSONB DEFAULT '{}',
    site_name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- site_contents (Master content: pages, blocks, posts, articles, pseo_rows)
CREATE TABLE IF NOT EXISTS site_contents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES site_displays(id) ON DELETE CASCADE,
    slug TEXT NOT NULL,
    content_type TEXT NOT NULL,
    title TEXT,
    meta_description TEXT,
    body_content TEXT,
    blocks_json JSONB DEFAULT '[]',
    attributes JSONB DEFAULT '{}',
    is_published BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(site_id, slug, content_type)
);
