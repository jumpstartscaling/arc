-- Example DB-driven marketing slug: /preview
INSERT INTO site_contents (site_id, slug, content_type, title, meta_description, body_content, is_published, sort_order)
VALUES
  (
    'a0000001-0000-4000-8000-000000000001'::uuid,
    'preview',
    'page',
    'Preview — DB-driven route',
    'site_contents.slug = preview for app.jumpstartscaling.com',
    '<p>This page is <strong>/preview</strong> loaded from <code>site_contents</code>.</p><p>Routing uses <strong>site_displays.domain</strong> (your Host header) + <strong>site_contents.slug</strong>.</p><p>The legacy <code>sites</code> table (<code>url</code> column) is for older campaign/article flows — not this Next.js tenant router.</p>',
    true,
    0
  )
ON CONFLICT (site_id, slug, content_type) DO UPDATE SET
  title = EXCLUDED.title,
  meta_description = EXCLUDED.meta_description,
  body_content = EXCLUDED.body_content,
  updated_at = CURRENT_TIMESTAMP;
