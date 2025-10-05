/**
 * @see https://theme-plume.vuejs.press/guide/document/
 */
import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'wiki',
  link: '/wiki/',
  sidebar: [
    {
      text: "📚 CTF",
      collapsed: false,
      link: 'ctf/',
      prefix: 'ctf/',
      items: [
        {
          text: '🚩 2022',
          prefix: '2022/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🚩 2024',
          prefix: '2024/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🚩 2025',
          prefix: '2025/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🏳️ Try Hack Me',
          prefix: 'thm/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🏴 Hack The Box',
          prefix: 'htb/',
          collapsed: true,
          items: 'auto'
        },
      ]
    },
    {
      text: "🤖 Robotics",
      collapsed: false,
      link: 'robotics/',
      prefix: 'robotics/',
      items: [
        {
          text: '🔋 Electronics',
          prefix: 'electronics/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🔧 Mechanics',
          prefix: 'mechanics/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🖥️ Programming',
          prefix: 'programming/',
          collapsed: true,
          items: 'auto'
        },
      ]
    },
    {
      text: "🎓 School",
      collapsed: false,
      link: 'school/',
      prefix: 'school/',
      items: [
        {
          text: '🔋 Electronics',
          prefix: 'elec/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🔉 Telecommunications',
          prefix: 'telecom/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🖥️ Computer Science',
          prefix: 'computer/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '➗ Mathematics',
          prefix: 'math/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🚀 Physics',
          prefix: 'physics/',
          collapsed: true,
          items: 'auto'
        },
      ]
    },
    {
      text: "🛡️ Cybersecurity",
      collapsed: false,
      link: 'cyber/',
      prefix: 'cyber/',
      items: [
        {
          text: '🔗 Blockchain',
          prefix: 'blockchain/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🔒 Cryptography',
          prefix: 'cryptography/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '⛏️ Forensic',
          prefix: 'forensic/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '⚙️ Hardware',
          prefix: 'hardware/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '👁️ A.I',
          prefix: 'ia/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🐧 Linux',
          prefix: 'linux/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🍏 MacOS',
          prefix: 'macos/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '📱 Mobile',
          prefix: 'mobile/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🌎 OSINT',
          prefix: 'osint/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🖥️ Programming',
          prefix: 'programming/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🎯 Binary Exploitation',
          prefix: 'pwn/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '⚛️ Quantum',
          prefix: 'quantum/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🔩 Reverse Engineering',
          prefix: 'reverse/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🔬 Steganography',
          prefix: 'steganography/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🌐 Web',
          prefix: 'web/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '📡 Wifi & Radio',
          prefix: 'wifi/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🪟 Windows',
          prefix: 'windows/',
          collapsed: true,
          items: 'auto'
        },
      ]
    },
  ],
})

export const enNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [enDemoNote],

})

/* =================== locale: fr-FR ======================= */

const frDemoNote = defineNoteConfig({
  dir: 'wiki',
  link: '/wiki/',
  sidebar: [
    {
      text: "📚 CTF",
      collapsed: false,
      link: 'ctf/',
      prefix: 'ctf/',
      items: [
        {
          text: '🚩 2022',
          prefix: '2022/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🚩 2024',
          prefix: '2024/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🚩 2025',
          prefix: '2025/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🏳️ Try Hack Me',
          prefix: 'thm/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🏴 Hack The Box',
          prefix: 'htb/',
          collapsed: true,
          items: 'auto'
        },
      ]
    },
    {
      text: "🤖 Robotique",
      collapsed: false,
      link: 'robotics/',
      prefix: 'robotics/',
      items: [
        {
          text: '🔋 Eléctronique',
          prefix: 'electronics/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🔧 Mécanique',
          prefix: 'mechanics/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🖥️ Informatique',
          prefix: 'programming/',
          collapsed: true,
          items: 'auto'
        },
      ]
    },
    {
      text: "🎓 Cours",
      collapsed: false,
      link: 'school/',
      prefix: 'school/',
      items: [
        {
          text: '🔋 Electronique',
          prefix: 'elec/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🔉 Telecommunications',
          prefix: 'telecom/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🖥️ Informatique',
          prefix: 'computer/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '➗ Mathematiques',
          prefix: 'math/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🚀 Physique',
          prefix: 'physics/',
          collapsed: true,
          items: 'auto'
        },
      ]
    },
    {
      text: "🛡️ Cybersecurité",
      collapsed: false,
      link: 'cyber/',
      prefix: 'cyber/',
      items: [
        {
          text: '🔗 Blockchain',
          prefix: 'blockchain/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🔒 Cryptanalyse',
          prefix: 'cryptography/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '⛏️ Forensique',
          prefix: 'forensic/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '⚙️ Sécurité Matérielle',
          prefix: 'hardware/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '👁️ I.A',
          prefix: 'ia/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🐧 Linux',
          prefix: 'linux/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🍏 MacOS',
          prefix: 'macos/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '📱 Mobile',
          prefix: 'mobile/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🌎 OSINT',
          prefix: 'osint/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🖥️ Programmation',
          prefix: 'programming/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🎯 Exploitation Binaire',
          prefix: 'pwn/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '⚛️ Quantique',
          prefix: 'quantum/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🔩 Rétro-Ingénierie',
          prefix: 'reverse/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🔬 Steganographie',
          prefix: 'steganography/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🌐 Web',
          prefix: 'web/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '📡 Wifi & Radio',
          prefix: 'wifi/',
          collapsed: true,
          items: 'auto'
        },
        {
          text: '🪟 Windows',
          prefix: 'windows/',
          collapsed: true,
          items: 'auto'
        },
      ]
    },
  ],
})

export const frNotes = defineNotesConfig({
  dir: 'fr/notes',
  link: '/fr/',
  notes: [frDemoNote],
})

