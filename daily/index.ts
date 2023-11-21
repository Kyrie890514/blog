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
        text: 'todo',
        link: '1'
      }
    ]
  }
}

export { nav, sidebar }
