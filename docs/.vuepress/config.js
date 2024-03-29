const utils = require('./utils')

module.exports = {
  title: 'books',
  description: '个人收藏夹',
  base: '/books/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '库',
        link: '/repository/'
      },
      {
        text: 'gitcommit',
        link: '/gitcommit/'
      },
      {
        text: 'uniapp开发实践',
        link: '/uniapp/'
      },
      {
        text: 'TypeScript',
        link: '/typeScript/'
      },
      {
        text: '杂项',
        link: '/misc/'
      },
      {
        text: '网站',
        link: '/website/'
      },
      {
        text: '文章',
        link: '/article/'
      },
      {
        text: '面试',
        link: '/interview/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'yuguaa/books',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1',
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
