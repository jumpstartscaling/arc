import { Metadata } from 'next';

const DOMAIN = 'https://jumpstartscaling.com';

interface SchemaConfig {
  type: 'Organization' | 'WebSite' | 'Article' | 'SoftwareApplication' | 'Service' | 'BreadcrumbList';
  data: any;
}

export function generateSchema(config: SchemaConfig) {
  return {
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': config.type,
      ...config.data,
    }),
  };
}

export function getOrganizationSchema() {
  return generateSchema({
    type: 'Organization',
    data: {
      name: 'Jumpstart Scaling',
      url: DOMAIN,
      logo: `${DOMAIN}/logo-gold.svg`,
      sameAs: [
        'https://twitter.com/jumpstartscaling',
        'https://linkedin.com/company/jumpstartscaling',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-555-5555',
        contactType: 'customer service',
      },
    },
  });
}

export function getWebsiteSchema() {
  return generateSchema({
    type: 'WebSite',
    data: {
      name: 'Jumpstart Scaling',
      url: DOMAIN,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${DOMAIN}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  });
}

export function getArticleSchema(article: { title: string; excerpt?: string; slug: string; date?: string; image?: string }) {
  return generateSchema({
    type: 'Article',
    data: {
      headline: article.title,
      description: article.excerpt,
      image: article.image || `${DOMAIN}/og-default.png`,
      datePublished: article.date || new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: 'Chris Amaya',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Jumpstart Scaling',
        logo: {
          '@type': 'ImageObject',
          url: `${DOMAIN}/logo-gold.svg`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${DOMAIN}/intel/${article.slug}`,
      },
    },
  });
}

export function getToolSchema(tool: { title: string; description: string; slug: string }) {
  return generateSchema({
    type: 'SoftwareApplication',
    data: {
      name: tool.title,
      operatingSystem: 'Any',
      applicationCategory: 'BusinessApplication',
      browserRequirements: 'Requires JavaScript',
      description: tool.description,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      url: `${DOMAIN}/tools/${tool.slug}`,
    },
  });
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return generateSchema({
    type: 'BreadcrumbList',
    data: {
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${DOMAIN}${item.item}`,
      })),
    },
  });
}
