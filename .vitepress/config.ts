import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'course documents',
  base: '/course-documents/',
  description: "Kyrie890514's course documents",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/nana.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    [
      'meta',
      { name: 'og:site_name', content: "Kyrie890514's Course Documents" }
    ]
  ],
  themeConfig: {
    logo: { src: '/nana.png', width: 24, height: 24 },
    nav: [
      {
        text: '从零开始学习Vim(VSCode)',
        link: '/Vim-in-VSCode/1',
        activeMatch: '/Vim-in-VSCode/'
      }
    ],
    sidebar: {
      '/Vim-in-VSCode/': {
        base: '/Vim-in-VSCode/',
        items: [
          {
            text: 'Vim',
            items: [
              {
                text: '1. introduction',
                link: '1'
              },
              {
                text: '2. introduction',
                link: '2'
              }
            ]
          },
          {
            text: 'VSCode',
            items: [
              {
                text: '3. introduction',
                link: '3'
              }
            ]
          }
        ]
      }
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern:
        'https://github.com/Kyrie890514/course-documents/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Kyrie890514/course-documents'
      }
    ]
  }
})
