const nav = {
  text: '学习Vim(VSCode)',
  link: '/Vim-in-VSCode/0',
  activeMatch: '/Vim-in-VSCode/'
}

const getNum = (() => {
  let num = 0
  return () => num++ + '. '
})()

const sidebar = {
  '/Vim-in-VSCode/': {
    base: '/Vim-in-VSCode/',
    items: [
      {
        text: 'Foreword',
        items: [
          {
            text: getNum() + `前言`,
            link: '0'
          }
        ]
      },
      {
        text: 'Vim',
        items: [
          {
            text: getNum() + `介绍`,
            link: '1'
          },
          {
            text: getNum() + `Hello, Vim`,
            link: '2'
          },
          {
            text: getNum() + `快速移动`,
            link: '3'
          },
          {
            text: getNum() + `快速移动(2)`,
            link: '4'
          },
          {
            text: getNum() + `操作`,
            link: '5'
          },
          {
            text: getNum() + `文本对象`,
            link: '6'
          },
          {
            text: getNum() + `Insert mode`,
            link: '7'
          },
          {
            text: getNum() + `Visual mode`,
            link: '8'
          },
          {
            text: getNum() + `Command-line mode`,
            link: '9'
          },
          {
            text: getNum() + `自定义 mapping`,
            link: '13'
          },
          {
            text: getNum() + `文件跳转`,
            link: '20'
          },
          {
            text: getNum() + `寄存器`,
            link: '10'
          },
          {
            text: getNum() + `宏操作`,
            link: '16'
          },
          {
            text: getNum() + `vim-surround`,
            link: '12'
          },
          {
            text: getNum() + `vim-sneak`,
            link: '14'
          },
          {
            text: getNum() + `vim-easymotion`,
            link: '15'
          },
          {
            text: getNum() + `vim-indent-object`,
            link: '21'
          }
        ]
      },
      {
        text: 'VSCode',
        items: [
          {
            text: getNum() + `窗口操作`,
            link: '11'
          },
          {
            text: getNum() + `文件操作`,
            link: '19'
          },
          {
            text: getNum() + `常用小技巧`,
            link: '22'
          }
        ]
      },
      {
        text: 'Appendix',
        items: [
          {
            text: getNum() + `VSCode 配置`,
            link: '17'
          },
          {
            text: getNum() + `我的键盘`,
            link: '18'
          }
        ]
      }
    ]
  }
}

export { nav, sidebar }
