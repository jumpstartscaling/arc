/** TS types mirroring Pydantic schemas */

export interface Lead {
  id: number;
  source?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  website?: string | null;
  revenue?: string | null;
  budget?: string | null;
  problem?: string | null;
  form_type?: string | null;
  data_json?: Record<string, unknown> | null;
  created_at?: string | null;
}

export interface Location {
  id: number;
  city: string;
  state: string;
  zip?: string | null;
  neighborhood?: string | null;
  slug?: string | null;
  created_at?: string | null;
}

export interface SiteDisplay {
  id: string;
  domain: string;
  palette: string;
  navigation: Record<string, unknown>;
  footer: Record<string, unknown>;
  scripts: unknown[];
  cdn_config: Record<string, unknown>;
  local_seo: Record<string, unknown>;
  site_name?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface SiteContent {
  id: string;
  site_id?: string | null;
  slug: string;
  content_type: string;
  title?: string | null;
  meta_description?: string | null;
  body_content?: string | null;
  blocks_json: unknown[];
  attributes: Record<string, unknown>;
  is_published: boolean;
  sort_order: number;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface CampaignMaster {
  id: string;
  status: string;
  site_id?: string | null;
  name: string;
  headline_spintax_root?: string | null;
  target_word_count: number;
  niche_variables?: Record<string, unknown> | null;
  date_created?: string | null;
  date_updated?: string | null;
}

export interface GeneratedArticle {
  id: string;
  status: string;
  site_id?: string | null;
  campaign_id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  html_content?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  is_published: boolean;
  category?: string | null;
  readability_score?: number | null;
  uniqueness_score?: number | null;
  date_created?: string | null;
  date_updated?: string | null;
}

export interface AnalyticsOverview {
  events: number;
  pageviews: number;
  conversions: number;
}

export interface CawContentItem {
  slug: string;
  title: string;
  palette: string;
}

export interface CawArticleItem {
  id: string;
  slug: string;
  title: string;
  is_published: boolean;
}
