// .vuepress/config.js
module.exports = {
  plugins: [
    '@vuepress/back-to-top', 
    '@vuepress/pwa', 
    {
      serviceWorker: true,
      updatePopup: true
    },
    ,
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }]
  ],
  port: 8084,
  base: '/dis-edu/',
  theme: 'cool',
  // dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel :'stylesheet'}],
    
  ],
  themeConfig: {
    // logo: './myAvatar.png',
    sidebar: [
    {
      title: 'Вступ',
      path:"/intro/",
      children:[
        '/intro/10.distributed--information-system',
      ]
    },
    {
      title: 'Архітетура розподілених інформаційних систем',
      path:"/arch/",
      children:[
        '/arch/11.arch',
      ]
    },

    {
      title: 'Реалізація взаємодії компонентів розподіленої інформаційної системи',
      path:"/components-interaction/",
      children:[
        '/components-interaction/01.express',
        '/components-interaction/03.restfull-services',
        '/components-interaction/04.graphql',
        '/components-interaction/05.sse',
        '/components-interaction/06.scripted-query'
         
      ]
    },

    {
      title: 'Прикладний програмний інтерфейс сервісів',
      path:"/swagger/",
      children:[
        '/swagger/12.api' 
      ]
    },

    {
      title: 'Реалізація взаємодії компонентів в EDA',
      path:"/eda/",
      children:[
        '/eda/13.rabbitmq'
      ]
    },

    {
      title: 'Реалізація взаємодії сервісів в MSA',
      path:"/msa/",
      children:[
        '/msa/14.msa'
      ]
    }
  ],
    sidebarDepth: 2,
    displayAllHeaders: true, // Default: false


    nav: [
      { text: 'Вступ', link: '/' },
    ],
    lastUpdated: 'Last Updated', // string | boolean
      // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://github.com/boldak/dis-edu',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Github',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'boldak/dis-edu',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Ви можете покращити цю сторінку'

  },
  title: 'Розподілені інформаційні системи',
  description: 'Курс лекцій',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../img'
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    }
  }
}