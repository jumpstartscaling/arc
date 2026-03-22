import { query } from './db';

export interface ContentPage {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  blocks: any;
  palette?: string;
  nav?: any;
  footer?: any;
  local_seo?: any;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  author?: string;
  published_at: string;
}

export async function getContentBySlug(slug: string): Promise<ContentPage | null> {
  const res = await query('SELECT * FROM jss_content WHERE slug = $1', [slug]);
  return res.rows[0] || null;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const res = await query('SELECT * FROM jss_articles WHERE slug = $1', [slug]);
  return res.rows[0] || null;
}

export async function getAllContentSlugs(): Promise<string[]> {
  const res = await query('SELECT slug FROM jss_content', []);
  return res.rows.map(r => r.slug);
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const res = await query('SELECT slug FROM jss_articles', []);
  return res.rows.map(r => r.slug);
}
