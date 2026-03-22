import { headers } from "next/headers";
import Link from "next/link";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type NavItem = { label: string; href: string };

type TenantSlugResponse = {
  site: {
    domain: string;
    palette: string;
    navigation: { items?: NavItem[] };
    footer: { text?: string };
    site_name: string | null;
  };
  page: {
    title: string | null;
    meta_description: string | null;
    body_content: string | null;
    slug: string;
    content_type: string;
  } | null;
};

const paletteBorder: Record<string, string> = {
  emerald: "border-emerald-500",
  sky: "border-sky-500",
  violet: "border-violet-500",
};

async function fetchTenantPage(
  host: string,
  slugPath: string
): Promise<TenantSlugResponse | null> {
  const url = `${API_BASE}/api/v1/site-contents/page?host=${encodeURIComponent(host)}&slug=${encodeURIComponent(slugPath)}`;
  const res = await fetch(url, { next: { revalidate: 0 } });
  if (res.status === 404) return null;
  if (!res.ok) return null;
  return res.json() as Promise<TenantSlugResponse>;
}

export default async function DynamicPseoPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const slugPath = slug?.join("/") ?? "";
  const h = await headers();
  const raw = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";

  const data = await fetchTenantPage(raw, slugPath);

  if (!data) {
    return (
      <main className="min-h-screen p-8">
        <h1 className="text-2xl font-bold">Unknown host</h1>
        <p className="mt-2 text-gray-600">
          No <code>site_displays</code> row for this Host. Add a row with{" "}
          <code>domain</code> matching your URL.
        </p>
        <p className="mt-4 text-sm text-gray-500">Slug requested: {slugPath}</p>
      </main>
    );
  }

  const { site, page } = data;
  const border = paletteBorder[site.palette] ?? "border-gray-300";
  const items = site.navigation?.items ?? [];

  return (
    <div className={`min-h-screen flex flex-col border-t-4 ${border}`}>
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="font-semibold text-gray-900 hover:underline">
            {site.site_name ?? site.domain}
          </Link>
          <nav className="flex flex-wrap gap-4 text-sm">
            {items.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="text-emerald-700 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        {!page ? (
          <>
            <h1 className="text-2xl font-bold text-gray-900">No page in DB</h1>
            <p className="mt-2 text-gray-600">
              Tenant <code>{site.domain}</code> exists, but there is no published{" "}
              <code>site_contents</code> row with{" "}
              <code>slug = &quot;{slugPath}&quot;</code>.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Add a row (content_type <code>page</code> or <code>pseo_row</code>) or run{" "}
              <code>schema/011_seed_preview_slug.sql</code> for <code>/preview</code>.
            </p>
          </>
        ) : (
          <>
            {page.title && (
              <h1 className="text-3xl font-bold text-gray-900">{page.title}</h1>
            )}
            {page.meta_description && (
              <p className="mt-2 text-gray-600">{page.meta_description}</p>
            )}
            {page.body_content && (
              <div
                className="prose prose-gray mt-8 max-w-none"
                dangerouslySetInnerHTML={{ __html: page.body_content }}
              />
            )}
            <p className="mt-10 text-xs text-gray-400">
              slug: <code>{page.slug}</code> · type:{" "}
              <code>{page.content_type}</code>
            </p>
          </>
        )}
      </main>

      <footer className="border-t bg-gray-50 py-6 text-center text-sm text-gray-600">
        {site.footer?.text ?? ""}
      </footer>
    </div>
  );
}
