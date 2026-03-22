import { api } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export default async function CampaignsPage() {
  let campaigns: Awaited<ReturnType<typeof api.campaigns>> = [];
  try {
    campaigns = await api.campaigns();
  } catch {
    // API may not be running
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Campaigns</h1>
      <p className="mt-2 text-gray-600">Campaign management</p>
      <div className="mt-6 space-y-2">
        {campaigns.length === 0 ? (
          <p className="text-gray-500">No campaigns yet</p>
        ) : (
          campaigns.map((c) => (
            <div key={c.id} className="rounded-lg border p-4">
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-gray-500">
                Status: {c.status} | Target: {c.target_word_count} words | {formatDate(c.date_created)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
