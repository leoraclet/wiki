/**
 * @see https://theme-plume.vuejs.press/config/navigation/
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const enNavbar = defineNavbarConfig([
  { text: 'Blog', link: '/blog/', icon: 'tabler:ballpen-filled' },
  { text: 'Tags', link: '/blog/tags/', icon: 'tabler:tag-filled' },
  { text: 'Archives', link: '/blog/archives/', icon: 'tabler:archive-filled' },
  {
    text: 'Wiki',
    link: '/notes/wiki/',
    icon: 'tabler:book-filled'
  },
])

export const frNavbar = defineNavbarConfig([
  { text: 'Blog', link: '/fr/blog/', icon: 'tabler:ballpen-filled' },
  { text: 'Étiquettes', link: '/fr/blog/tags/', icon: 'tabler:tag-filled' },
  { text: 'Archives', link: '/fr/blog/archives/', icon: 'tabler:archive-filled' },
  {
    text: 'Wiki',
    link: '/fr/notes/wiki/',
    icon: 'tabler:book-filled'
  },
])

