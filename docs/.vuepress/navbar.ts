/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const enNavbar = defineNavbarConfig([
  { text: 'Blog', link: '/blog/', icon: 'tabler:ballpen-filled' },
  { text: 'Tags', link: '/blog/tags/', icon: 'tabler:tag-filled' },
  { text: 'Archives', link: '/blog/archives/', icon: 'tabler:archive-filled' },
  {
    text: 'Wiki',
    link: '/notes/wiki/README.md',
    icon: 'tabler:book-filled'
  },
])

export const frNavbar = defineNavbarConfig([
  { text: 'Blog', link: '/fr/blog/', icon: 'tabler:ballpen-filled' },
  { text: 'Tags', link: '/fr/blog/tags/', icon: 'tabler:tag-filled' },
  { text: 'Archives', link: '/fr/blog/archives/', icon: 'tabler:archive-filled' },
  {
    text: 'Wiki',
    link: '/fr/notes/wiki/README.md',
    icon: 'tabler:book-filled'
  },
])

