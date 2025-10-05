/**
 * - @see https://theme-plume.vuejs.press/config/intro/
 * - @see https://theme-plume.vuejs.press/config/theme/
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/wiki/',
  lang: 'en-US',
  locales: {
    '/': {
      title: 'Hack&Learn',
      lang: 'en-US',
      description: 'An educational wiki for learning and security enthusiasts.',
    },
    '/fr/': {
      title: 'Hack&Learn',
      lang: 'fr-FR',
      description: "Un wiki pour les passionnés d'apprentissage et de sécurité informatique",
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({
    hostname: 'https://leoraclet.github.io/wiki',
    docsRepo: 'https://github.com/leoraclet/wiki',
    docsDir: 'docs',
    docsBranch: 'main',
    editLink: true,
    changelog: { maxCount: 10 },
    contributors: { mode: 'inline' },
    lastUpdated: { formatOptions: { dateStyle: 'long', timeStyle: 'long' } },

    /**
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    blog: {
      postList: true,
      tags: true,
      archives: true,
      categories: true,
      postCover: 'right',
      pagination: 15,
    },

    article: '/article/',

    /**
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    // cache: false,

    /**
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,
      createTime: true,
      title: true,
    },

    search: { provider: 'local' },

    /**
     * Algolia DocSearch
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },

    /*
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    codeHighlighter: {
      twoslash: false,
      whitespace: true,
      lineNumbers: true,
    },

    // readingTime: true,

    /**
      * markdown
      * @see https://theme-plume.vuejs.press/config/markdown/
      */
    markdown: {
      codeTree: true,
      field: true,
      timeline: true,
      collapse: true,
      abbr: true,
      annotation: true,
      pdf: true,
      caniuse: true,
      plot: true,
      bilibili: true,
      youtube: true,
      artPlayer: true,
      audioReader: true,
      icon: { provider: 'iconify' },
      table: true,
      codepen: true,
      replit: true,
      codeSandbox: true,
      jsfiddle: true,
      npmTo: true,
      demo: true,
      repl: {
        go: true,
        rust: true,
        kotlin: true,
        python: true,
      },
      math: {
        type: 'katex',
      },
      chartjs: true,
      echarts: true,
      mermaid: true,
      flowchart: true,
      plantuml: true,
      image: {
        figure: true,
        lazyload: true,
        mark: true,
        size: true,
      },
      imageSize: 'local',
    },

    /**
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    watermark: false,

    /**
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    comment: {
      provider: "Giscus",
      comment: true,
      repo: 'leoraclet/wiki',
      repoId: 'R_kgDOO2HezQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOO2Hezc4Crpwa',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
    },

    /**
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',

    /**
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  }),
})
