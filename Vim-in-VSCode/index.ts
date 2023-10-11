const nav = {
  text: '学习Vim(VSCode)',
  link: '/Vim-in-VSCode/0',
  activeMatch: '/Vim-in-VSCode/'
}

const sidebar = {
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
            text: '10. 自定义 mapping',
            link: '13'
          },
          {
            text: '11. 寄存器',
            link: '10'
          },
          {
            text: '12. vim-surround',
            link: '12'
          },
          {
            text: '13. vim-sneak',
            link: '14'
          }
        ]
      },
      {
        text: 'VSCode',
        items: [
          {
            text: '12. 窗口与文件',
            link: '11'
          }
        ]
      }
    ]
  }
}

export { nav, sidebar }
