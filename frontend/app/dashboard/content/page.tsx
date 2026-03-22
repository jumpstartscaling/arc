import { api } from "@/lib/api";

export default async function ContentPage() {
  let articles: Awaited<ReturnType<typeof api.generatedArticles>> = [];
  try {
    articles = await api.generatedArticles();
  } catch {
    // API may not be running
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Content</h1>
      <p className="mt-2 text-gray-600">Generated articles</p>
      <div className="mt-6 space-y-2">
        {articles.length === 0 ? (
          <p className="text-gray-500">No articles yet</p>
        ) : (
          articles.map((a) => (
            <div key={a.id} className="rounded-lg border p-4">
              <div className="font-medium">{a.title ?? a.slug ?? "Untitled"}</div>
              <div className="text-sm text-gray-500">
                {a.slug} | {a.status} | {a.is_published ? "Published" : "Draft"}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
