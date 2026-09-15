import {
  SITE_URL,
  GOOGLE_SITE_VERIFICATION,
  BING_SITE_VERIFICATION,
} from 'astro:env/server';
import { SITE_NAME, THEME_COLOR } from './branding';
import { SITE_URL_FALLBACK } from './site-url';
import i18nConfig, { type I18nConfig } from './i18n.config';

export { i18nConfig };
export type { I18nConfig };

export interface SiteConfig {
  name: string;
  description: string;
  tagline?: string;
  footerNote?: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  header?: {
    showSocialLinks?: boolean;
  };
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  authorImage?: string;
  blogImageOverlay?: boolean;
  effects?: {
    cursorTrail?: boolean;
  };
  articleFeatures?: {
    toc?: {
      enabled: boolean;
      layout?: 'inline' | 'sidebar' | 'auto';
      sidebarPosition?: 'left' | 'right';
      minHeadings?: number;
      maxDepth?: 2 | 3 | 4;
    };
    comments?: {
      enabled: boolean;
      provider?: 'giscus' | 'cusdis' | 'artalk';
      giscus?: {
        repo: `${string}/${string}`;
        repoId: string;
        category: string;
        categoryId: string;
        mapping?: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
        strict?: boolean;
        reactionsEnabled?: boolean;
        emitMetadata?: boolean;
        inputPosition?: 'top' | 'bottom';
        theme?: string;
        lang?: string;
      };
      cusdis?: {
        appId: string;
        host?: string;
        theme?: '' | 'light' | 'dark' | 'auto';
        lang?: string;
      };
      artalk?: {
        server: string;
        site: string;
        jsUrl?: string;
        cssUrl?: string;
        darkMode?: boolean | 'auto';
        locale?: string;
      };
    };
  };
  newsletter?: {
    enabled: boolean;
  };
  blog?: {
    postsPerPage?: number;
    tagCloudLimit?: number;
  };
  projects?: {
    perPage?: number;
    tagCloudLimit?: number;
  };
  i18n?: I18nConfig;
  branding: {
    logo: {
      alt: string;
      image?: string;
      imageUrl?: string;
    };
    favicon: {
      svg: string;
    };
    colors: {
      themeColor: string;
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'Kaunain Ahmad',
  description:
    'Java developer focused on reliable backend systems, enterprise debugging, and AI-assisted software development.',
  tagline: 'Java developer focused on reliable backend systems and AI-assisted software development',
  footerNote: 'Built with Astro Rocket',
  url: SITE_URL || 'https://kaunain.dev',
  ogImage: '/og/default.png',
  author: 'Kaunain Ahmad',
  email: 'hello@kaunain.dev',
  address: {
    street: '',
    city: 'Eindhoven',
    state: '',
    zip: '',
    country: 'the Netherlands',
  },
  socialLinks: [
    'https://github.com/kaunain',
    'https://www.linkedin.com/in/kaunain-ahmad',
    'https://x.com/kaunainahmad',
  ],
  header: {
    showSocialLinks: true,
  },
  twitter: {
    site: 'https://x.com/kaunainahmad',
    creator: '@kaunainahmad',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  blogImageOverlay: true,
  effects: {
    cursorTrail: true,
  },
  articleFeatures: {
    toc: {
      enabled: true,
      layout: 'auto',
      sidebarPosition: 'right',
      minHeadings: 3,
      maxDepth: 3,
    },
    comments: {
      enabled: false,
      provider: 'giscus',
      giscus: {
        repo: 'owner/repo',
        repoId: '',
        category: 'General',
        categoryId: '',
        mapping: 'pathname',
        strict: false,
        reactionsEnabled: true,
        emitMetadata: false,
        inputPosition: 'bottom',
        theme: '',
        lang: '',
      },
      cusdis: {
        appId: '',
        host: 'https://cusdis.com',
        theme: '',
        lang: '',
      },
      artalk: {
        server: '',
        site: '',
      },
    },
  },
  newsletter: {
    enabled: false,
  },
  blog: {
    postsPerPage: 12,
    tagCloudLimit: 10,
  },
  projects: {
    perPage: 12,
    tagCloudLimit: 10,
  },
  i18n: i18nConfig,
  branding: {
    logo: {
      alt: 'Kaunain Ahmad',
      imageUrl: '/favicon.svg',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: THEME_COLOR,
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
