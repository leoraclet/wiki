import { defineConfig, UserConfig } from 'vitepress';
import { withI18n } from 'vitepress-i18n';
import { generateSidebar } from 'vitepress-sidebar';

// !FIXME: Language change
const defaultLocale: string = 'fr';
const langs: string[] = [defaultLocale, 'en'];

const commonSidebarConfig = {
  manualSortFileNameByPriority: ['introduction.md', 'guide', 'advanced-usage'],
  excludeFiles: ['changelog.md'],
  hyphenToSpace: true,
  underscoreToSpace: true,
  collapsed: true,
  collapseDepth: 1,
  capitalizeFirst: true,
  useFolderLinkFromIndexFile: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByName: true,
  sortFolderTo: 'bottom' as 'bottom' | 'top' | null | undefined,
  includeEmptyFolder: true,
  folderLinkNotIncludesFileName: true,
};

// !FIXME: Language change
const vitePressI18nConfig = {
  locales: langs,
  rootLocale: defaultLocale,
  description: {
    fr: 'Le Wiki des Hackers',
    en: 'The Hackers Wiki',
  },
  title: {
    fr: 'Hack&Learn',
    en: 'Hack&Learn',
  },
  themeConfig: {
    fr: {
      nav: [
        { text: 'Accueil', link: '/' },
        { text: 'A propos', link: '/about' },
        { text: 'Pour commencer', link: '/getting-started' },
      ],
    },
    en: {
      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'About', link: '/en/about' },
        { text: 'Getting Started', link: '/en/getting-started' },
      ],
    },
  },
};

// https://vitepress.dev/reference/site-config
const vitePressConfig: UserConfig = {
  themeConfig: {
    sidebar: generateSidebar([
      ...langs.map((lang) => {
        return {
          ...commonSidebarConfig,
          documentRootPath: `/wiki/${lang}`,
          resolvePath: defaultLocale === lang ? '/' : `/${lang}/`,
          ...(defaultLocale === lang ? {} : { basePath: `/${lang}/` })
        };
      })
    ]),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/leoraclet' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/leoraclet/' },
      { icon: 'discord', link: 'https://discordapp.com/users/454935749767200768' },
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/leoraclet">N£utr0nys</a>'
    },
    logo: { src: '/favicon-32x32.png', width: 24, height: 24 },
    editLink: {
      pattern: 'https://github.com/leoraclet/wiki/edit/main/wiki/:path',
    }
  },
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
    lineNumbers: true,
    math: true,
    toc: {
      level: [1, 2, 3, 4, 5, 6]
    },
    headers: {
      level: [1, 2, 3, 4, 5, 6],
    },
  },
  sitemap: {
    hostname: 'https://leoraclet.github.io/wiki'
  },
  lastUpdated: true,
  base: '/wiki/',
  cleanUrls: true,
  titleTemplate: 'Hack&Learn | :title',
  metaChunk: true,
  rewrites: {
    'fr/:rest*': ':rest*' // !FIXME: Language change
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/wiki/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/wiki/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/wiki/favicon.ico' }],
    ['link', { rel: 'shortcut icon', href: '/wiki/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'HackingWiki | A simple Wiki for CTF players and Hackers' }],
    ['meta', { property: 'og:site_name', content: 'HackingWiki' }],
    ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://leoraclet.github.io/wiki/' }],
  ],
};

export default defineConfig(withI18n(vitePressConfig, vitePressI18nConfig));