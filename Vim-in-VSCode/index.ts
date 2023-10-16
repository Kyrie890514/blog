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
          }
        ]
      },
      {
        text: 'VSCode',
        items: [
          {
            text: getNum() + `窗口与文件`,
            link: '11'
          }
        ]
      },
      {
        text: 'Afterword',
        items: [
          {
            text: getNum() + `后记`,
            link: '19'
          },
          {
            text: getNum() + `我的配置`,
            link: '18'
          },
          {
            text: getNum() + `我的键盘`,
            link: '17'
          }
        ]
      }
    ]
  }
}

export { nav, sidebar }
