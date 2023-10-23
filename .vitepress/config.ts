import { defineConfig } from 'vitepress'
import { nav as VimNav, sidebar as VimSidebar } from '../Vim-in-VSCode'
import { nav as othersNav, sidebar as othersSidebar } from '../others'
import { nav as dailyNav, sidebar as dailySidebar } from '../daily'

export default defineConfig({
  lang: 'en-US',
  title: "Kyrie890514's Blog",
  base: '/blog/',
  description: "Kyrie890514's Blog",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/nana.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: "Kyrie890514's Blog" }]
  ],
  themeConfig: {
    logo: { src: '/nana.png', width: 24, height: 24 },
    nav: [VimNav, dailyNav, othersNav],
    sidebar: {
      ...VimSidebar,
      ...dailySidebar,
      ...othersSidebar
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/Kyrie890514/blog/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Kyrie890514/blog'
      }
    ]
  }
})
