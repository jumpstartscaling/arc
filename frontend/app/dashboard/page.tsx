import { api } from "@/lib/api";

export default async function DashboardPage() {
  let analytics = { events: 0, pageviews: 0, conversions: 0 };
  try {
    analytics = await api.analytics();
  } catch {
    // API may not be running
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Overview</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-4">
          <div className="text-sm text-gray-500">Events</div>
          <div className="text-2xl font-semibold">{analytics.events}</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-gray-500">Pageviews</div>
          <div className="text-2xl font-semibold">{analytics.pageviews}</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-gray-500">Conversions</div>
          <div className="text-2xl font-semibold">{analytics.conversions}</div>
        </div>
      </div>
    </div>
  );
}
