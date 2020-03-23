// Tailwind CSS用
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

module.exports = {
  siteName: 'nnamm works',
  siteUrl: 'https://portfolio.nnamm.com/',
  titleTemplate: '%s | nnamm works',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: []
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'static/posts/**/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: ['@gridsome/remark-prismjs']
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        shouldPurge: false
      }
    },
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        content: [
          './src/assets/**/*.css',
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.md',
          'node_modules/prismjs/**/*.js'
        ],
        extractor: TailwindExtractor,
        extensions: ['vue', 'js', 'md']
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-161525241-1'
      }
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://portfolio.nnamm.com',
        sitemap: 'https://portfolio.nnamm.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/exclude-me'],
        config: {
          '/posts/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/photos/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/graphics/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    }
  ],

  templates: {
    Post: [
      // ブログ記事用
      {
        path: '/posts/:slug',
        component: './src/templates/Post.vue'
      },
      // 写真作品用
      {
        name: 'photo',
        path: '/photos/:slug',
        component: './src/templates/Photo.vue'
      },
      // グラフィック作品用
      {
        name: 'graphic',
        path: '/graphics/:slug',
        component: './src/templates/Graphic.vue'
      }
    ]
  }
}
