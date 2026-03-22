# Which tables power the live site?

The schema has **many** tables (Harris Matrix: leads, campaigns, generated articles, analytics, legacy `sites`, etc.). For **app.jumpstartscaling.com** marketing URLs, only two matter:

| Table | Role |
|-------|------|
| **`site_displays`** | One row per **domain** (`domain` = Host, e.g. `app.jumpstartscaling.com`). Nav, footer, palette, `site_name`. |
| **`site_contents`** | Pages / pSEO rows: **`slug`** matches the URL path (`/preview` → `slug = preview`). |

## Legacy `sites` table

`sites` + `sites.url` is **older** stack (campaigns, `generated_articles`, etc.). The Next.js app does **not** read `sites.url` for routing. Putting a URL there will not change what `/preview` shows.

To fix “it doesn’t work”: add or update rows in **`site_displays`** (domain) and **`site_contents`** (slug, body).

## API

- Home: `GET /api/v1/site-displays/resolve?host=app.jumpstartscaling.com`
- Any path: `GET /api/v1/site-contents/page?host=app.jumpstartscaling.com&slug=preview`  
  (nested paths: `slug=austin/plumber`)
