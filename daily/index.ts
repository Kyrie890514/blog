const nav = {
  text: 'daily',
  link: '/daily/1',
  activeMatch: '/daily/'
}

const sidebar = {
  '/daily/': {
    base: '/daily/',
    items: [
      {
        text: '如何写出优雅的代码',
        link: '1'
      }
    ]
  }
}

export { nav, sidebar }
