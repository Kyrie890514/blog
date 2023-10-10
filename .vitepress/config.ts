import { defineConfig } from 'vitepress'

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
    nav: [
      {
        text: 'Vim(VSCode)',
        link: '/Vim-in-VSCode/1',
        activeMatch: '/Vim-in-VSCode/'
      }
    ],
    sidebar: {
      '/Vim-in-VSCode/': {
        base: '/Vim-in-VSCode/',
        items: [
          {
            text: 'Foreword',
            items: [
              {
                text: '0. 前言',
                link: '0'
              }
            ]
          },
          {
            text: 'Vim',
            items: [
              {
                text: '1. 介绍',
                link: '1'
              },
              {
                text: '2. Hello, Vim',
                link: '2'
              },
              {
                text: '3. 快速移动',
                link: '3'
              },
              {
                text: '4. 快速移动(2)',
                link: '4'
              },
              {
                text: '5. 操作',
                link: '5'
              },
              {
                text: '6. 文本对象',
                link: '6'
              },
              {
                text: '7. Insert mode',
                link: '7'
              },
              {
                text: '8. Visual mode',
                link: '8'
              },
              {
                text: '9. Command-line mode',
                link: '9'
              },
              {
                text: '10. 寄存器',
                link: '10'
              }
            ]
          },
          {
            text: 'VSCode',
            items: [
              {
                text: '1. 文件与窗口',
                link: '11'
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
