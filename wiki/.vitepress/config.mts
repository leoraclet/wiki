import { defineConfig, UserConfig } from 'vitepress';
import { withI18n } from 'vitepress-i18n';
import { generateSidebar } from 'vitepress-sidebar';

const defaultLocale: string = 'en';
const langs: string[] = [defaultLocale, 'fr'];

const commonSidebarConfig = {
  manualSortFileNameByPriority: ['introduction.md', 'guide', 'advanced-usage'],
  excludeFiles: ['changelog.md'],
  hyphenToSpace: true,
  underscoreToSpace: true,
  collapsed: true,
  collapseDepth: 2,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByName: true,
  sortFolderTo: 'bottom' as 'bottom' | 'top' | null | undefined,
  includeEmptyFolder: true,
};

const vitePressI18nConfig = {
  locales: langs,
  rootLocale: defaultLocale,
  description: {
    en: 'Le WiKi des Hackers',
    fr: 'The Hackers Wiki'
  },
  title: {
    en: 'The Hacking WiKi',
    fr: 'The Hacking WiKi'
  },
  themeConfig: {
    en: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { Text: 'Getting Started', link: '/getting-started' },
      ],
    },
    fr: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'A propos', link: '/about' },
        { Text: 'Pour commencer', link: '/pour-commencer' },
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
      { icon: 'github', link: 'https://github.com/leoraclet' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024 <a href="https://github.com/leoraclet">N£utr0nys</a>'
    },
    logo: { src: '/logo-32.png', width: 24, height: 24 },
  },
  markdown: {
    lineNumbers: true,
    math: false,
  },
  lastUpdated: true,
  base: '/wiki/',
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    'en/:rest*': ':rest*'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo-16.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'HackingWiki | A simple Wiki for CTF players and Hackers' }],
    ['meta', { property: 'og:site_name', content: 'HackingWiki' }],
    ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
  ],
};

export default defineConfig(withI18n(vitePressConfig, vitePressI18nConfig));