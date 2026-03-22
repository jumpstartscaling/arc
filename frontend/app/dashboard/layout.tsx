export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-gray-50 p-4">
        <nav className="space-y-2">
          <a href="/dashboard" className="block text-blue-600">Dashboard</a>
          <a href="/dashboard/leads" className="block">Leads</a>
          <a href="/dashboard/sites" className="block">Sites</a>
          <a href="/dashboard/campaigns" className="block">Campaigns</a>
          <a href="/dashboard/content" className="block">Content</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
