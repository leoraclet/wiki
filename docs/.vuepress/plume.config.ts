/**
 * - @see https://theme-plume.vuejs.press/config/intro/
 * - @see https://theme-plume.vuejs.press/config/theme/
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, frNavbar } from './navbar'
import { enNotes, frNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/leoraclet' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/leoraclet/' },
    { icon: 'discord', link: 'https://discordapp.com/users/454935749767200768' },
  ],
  navbarSocialInclude: ['github', 'linkedin', 'discord'],
  aside: true,
  outline: [2, 5],

  sidebarScrollbar: true,
  /**
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: true,

  prevPage: true,
  nextPage: true,
  createTime: true,

  footer: {
    message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    copyright: '2025 - Present © Léo Raclet',
  },

  /* @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,
    postList: true,
    appearance: 'fade',
  },

  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'Hack&Learn',
        description: 'Student, Hacker and lifelong learner',
        location: 'Your Location',
        organization: 'Your Organization',
        circle: false,
      },

      navbar: enNavbar,
      notes: enNotes,
    },
    '/fr/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'Hack&Learn',
        description: '',
        location: 'Ma Localisation',
        organization: 'Mon Organisation',
        circle: false,
      },

      navbar: frNavbar,
      notes: frNotes,
      tagText: "Étiquettes",
      categoryText: "Catégories",
    },
  },
})
