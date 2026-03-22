import { headers } from "next/headers";
import Link from "next/link";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type NavItem = { label: string; href: string };

type ResolveResponse = {
  site: {
    id: string;
    domain: string;
    palette: string;
    navigation: { items?: NavItem[] };
    footer: { text?: string };
    site_name: string | null;
  };
  home: {
    title: string | null;
    meta_description: string | null;
    body_content: string | null;
  } | null;
};

const paletteBorder: Record<string, string> = {
  emerald: "border-emerald-500",
  sky: "border-sky-500",
  violet: "border-violet-500",
};

async function resolveTenant(host: string): Promise<ResolveResponse | null> {
  const url = `${API_BASE}/api/v1/site-displays/resolve?host=${encodeURIComponent(host)}`;
  const res = await fetch(url, { next: { revalidate: 0 } });
  if (res.status === 404) return null;
  if (!res.ok) return null;
  return res.json() as Promise<ResolveResponse>;
}

export default async function HomePage() {
  const h = await headers();
  const raw =
    h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const host = raw.split(":")[0];

  const resolved = await resolveTenant(raw);

  if (resolved) {
    const { site, home } = resolved;
    const border = paletteBorder[site.palette] ?? "border-gray-300";
    const items = site.navigation?.items ?? [];

    return (
      <div className={`min-h-screen flex flex-col border-t-4 ${border}`}>
        <header className="border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
            <span className="font-semibold text-gray-900">
              {site.site_name ?? site.domain}
            </span>
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
          {home?.title && (
            <h1 className="text-3xl font-bold text-gray-900">{home.title}</h1>
          )}
          {home?.meta_description && (
            <p className="mt-2 text-gray-600">{home.meta_description}</p>
          )}
          {home?.body_content && (
            <div
              className="prose prose-gray mt-8 max-w-none"
              dangerouslySetInnerHTML={{ __html: home.body_content }}
            />
          )}
          <p className="mt-10 text-xs text-gray-400">
            Tenant domain: <code>{site.domain}</code> · palette:{" "}
            <code>{site.palette}</code>
          </p>
        </main>

        <footer className="border-t bg-gray-50 py-6 text-center text-sm text-gray-600">
          {site.footer?.text ?? ""}
        </footer>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">God Mode pSEO Factory</h1>
      <p className="mt-2 text-gray-600">
        No tenant row for <code className="rounded bg-gray-100 px-1">{host}</code>.
        Run{" "}
        <code className="rounded bg-gray-100 px-1">
          schema/010_seed_demo_tenants.sql
        </code>{" "}
        on PostgreSQL, then reload.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Seeded hosts: app.jumpstartscaling.com, demo.jumpstartscaling.com,
        acme.jumpstartscaling.com
      </p>
      <Link href="/dashboard" className="mt-6 inline-block text-emerald-700 underline">
        Dashboard
      </Link>
    </main>
  );
}
