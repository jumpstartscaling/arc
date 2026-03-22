import { api } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export default async function LeadsPage() {
  let leads: Awaited<ReturnType<typeof api.leads>> = [];
  try {
    leads = await api.leads();
  } catch {
    // API may not be running
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Leads</h1>
      <p className="mt-2 text-gray-600">Lead management</p>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Source</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                  No leads yet
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="px-4 py-2">{lead.name ?? "-"}</td>
                  <td className="px-4 py-2">{lead.email ?? "-"}</td>
                  <td className="px-4 py-2">{lead.source ?? "-"}</td>
                  <td className="px-4 py-2">{formatDate(lead.created_at)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
