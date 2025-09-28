/**
 * @see https://theme-plume.vuejs.press/guide/document/ 查看文档了解配置详情。
 *
 * Notes 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Notes，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Notes，然后在与 Note 相关的 Markdown 文件中，自动生成 permalink。
 *
 * 如果你发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 note 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `note.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineNoteConfig` 是用于定义单个 note 配置的帮助函数
 * - `defineNotesConfig` 是用于定义 notes 集合的帮助函数
 *
 * 通过 `defineNoteConfig` 定义的 note 配置，应该填入 `defineNotesConfig` 的 notes 数组中
 */
import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'wiki',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/wiki/',
  // 手动配置侧边栏结构
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
      text: "🎓 School",
      collapsed: false,
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
    {
      text: "🤖 Robotics",
      collapsed: false,
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
    }
  ],
})

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （enDemoNote 为参考示例，如果不需要它，请删除）
 */
export const enNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [enDemoNote],

})

/* =================== locale: fr-FR ======================= */

const frDemoNote = defineNoteConfig({
  dir: 'wiki',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/wiki/',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: "📚 CTF",
      collapsed: false,
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
      text: "🎓 Cours",
      collapsed: false,
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
    {
      text: "🤖 Robotique",
      collapsed: false,
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
    }
  ],
})

/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （zhDemoNote 为参考示例，如果不需要它，请删除）
 */
export const frNotes = defineNotesConfig({
  dir: 'fr/notes',
  link: '/fr/',
  notes: [frDemoNote],
})

