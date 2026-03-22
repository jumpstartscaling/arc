/** Fetch wrapper for FastAPI backend */
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

async function fetchApi<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

export const api = {
  get: <T>(path: string) => fetchApi<T>(path),
  post: <T>(path: string, body: unknown) =>
    fetchApi<T>(path, { method: "POST", body: JSON.stringify(body) }),
  put: <T>(path: string, body: unknown) =>
    fetchApi<T>(path, { method: "PUT", body: JSON.stringify(body) }),
  delete: <T>(path: string) => fetchApi<T>(path, { method: "DELETE" }),

  leads: (skip = 0, limit = 20) =>
    fetchApi<import("@/lib/types").Lead[]>(`/api/v1/leads?skip=${skip}&limit=${limit}`),
  locations: (skip = 0, limit = 20) =>
    fetchApi<import("@/lib/types").Location[]>(`/api/v1/locations?skip=${skip}&limit=${limit}`),
  siteDisplays: (skip = 0, limit = 20) =>
    fetchApi<import("@/lib/types").SiteDisplay[]>(
      `/api/v1/site-displays?skip=${skip}&limit=${limit}`
    ),
  siteContents: (skip = 0, limit = 20) =>
    fetchApi<import("@/lib/types").SiteContent[]>(
      `/api/v1/site-contents?skip=${skip}&limit=${limit}`
    ),
  campaigns: (skip = 0, limit = 20) =>
    fetchApi<import("@/lib/types").CampaignMaster[]>(
      `/api/v1/campaigns?skip=${skip}&limit=${limit}`
    ),
  generatedArticles: (skip = 0, limit = 20) =>
    fetchApi<import("@/lib/types").GeneratedArticle[]>(
      `/api/v1/generated-articles?skip=${skip}&limit=${limit}`
    ),
  analytics: () =>
    fetchApi<import("@/lib/types").AnalyticsOverview>("/api/v1/analytics"),
  cawContent: (skip = 0, limit = 20) =>
    fetchApi<import("@/lib/types").CawContentItem[]>(
      `/api/v1/caw/content?skip=${skip}&limit=${limit}`
    ),
  cawArticles: (skip = 0, limit = 20) =>
    fetchApi<import("@/lib/types").CawArticleItem[]>(
      `/api/v1/caw/articles?skip=${skip}&limit=${limit}`
    ),
};
