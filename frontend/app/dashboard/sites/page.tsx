import { api } from "@/lib/api";

export default async function SitesPage() {
  let sites: Awaited<ReturnType<typeof api.siteDisplays>> = [];
  try {
    sites = await api.siteDisplays();
  } catch {
    // API may not be running
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Sites</h1>
      <p className="mt-2 text-gray-600">Site display management</p>
      <div className="mt-6 space-y-2">
        {sites.length === 0 ? (
          <p className="text-gray-500">No sites yet</p>
        ) : (
          sites.map((site) => (
            <div
              key={site.id}
              className="rounded-lg border p-4"
            >
              <div className="font-medium">{site.domain}</div>
              <div className="text-sm text-gray-500">{site.site_name ?? site.palette}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
