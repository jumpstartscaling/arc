-- Demo tenant sites (run after 003_site_display.sql)
-- Idempotent: safe to re-run

INSERT INTO site_displays (id, domain, palette, navigation, footer, site_name)
VALUES
  (
    'a0000001-0000-4000-8000-000000000001'::uuid,
    'app.jumpstartscaling.com',
    'emerald',
    '{"items":[{"label":"Home","href":"/"},{"label":"Dashboard","href":"/dashboard"}]}'::jsonb,
    '{"text":"© Jumpstart Scaling — data from PostgreSQL site_displays"}'::jsonb,
    'Jumpstart Scaling (App)'
  ),
  (
    'a0000001-0000-4000-8000-000000000002'::uuid,
    'demo.jumpstartscaling.com',
    'sky',
    '{"items":[{"label":"Home","href":"/"},{"label":"Pricing","href":"/pricing"}]}'::jsonb,
    '{"text":"© Demo Tenant — second seeded site"}'::jsonb,
    'Demo Tenant Co.'
  ),
  (
    'a0000001-0000-4000-8000-000000000003'::uuid,
    'acme.jumpstartscaling.com',
    'violet',
    '{"items":[{"label":"Home","href":"/"},{"label":"Contact","href":"/contact"}]}'::jsonb,
    '{"text":"© ACME — third seeded tenant"}'::jsonb,
    'ACME Example LLC'
  )
ON CONFLICT (domain) DO UPDATE SET
  site_name = EXCLUDED.site_name,
  palette = EXCLUDED.palette,
  navigation = EXCLUDED.navigation,
  footer = EXCLUDED.footer,
  updated_at = CURRENT_TIMESTAMP;

INSERT INTO site_contents (site_id, slug, content_type, title, meta_description, body_content, is_published, sort_order)
VALUES
  (
    'a0000001-0000-4000-8000-000000000001'::uuid,
    'home',
    'page',
    'Welcome — App tenant',
    'Seeded home for app.jumpstartscaling.com',
    '<p>This page is served from <strong>site_contents</strong> in PostgreSQL.</p><p>Host <code>app.jumpstartscaling.com</code> maps to tenant <em>Jumpstart Scaling (App)</em>.</p><p><a href="/dashboard">Open dashboard</a></p>',
    true,
    0
  ),
  (
    'a0000001-0000-4000-8000-000000000002'::uuid,
    'home',
    'page',
    'Welcome — Demo tenant',
    'Seeded home for demo.jumpstartscaling.com',
    '<p>You are viewing the <strong>demo.jumpstartscaling.com</strong> tenant.</p><p>Same Next.js app, different row in <code>site_displays</code>.</p>',
    true,
    0
  ),
  (
    'a0000001-0000-4000-8000-000000000003'::uuid,
    'home',
    'page',
    'Welcome — ACME tenant',
    'Seeded home for acme.jumpstartscaling.com',
    '<p>Third seeded tenant: <strong>acme.jumpstartscaling.com</strong>.</p><p>Add DNS + Coolify domain to reach this host in production.</p>',
    true,
    0
  )
ON CONFLICT (site_id, slug, content_type) DO UPDATE SET
  title = EXCLUDED.title,
  meta_description = EXCLUDED.meta_description,
  body_content = EXCLUDED.body_content,
  updated_at = CURRENT_TIMESTAMP;
