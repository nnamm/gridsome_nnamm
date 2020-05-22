// Tailwind CSS用
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}

module.exports = {
  siteName: 'nnamm.work',
  siteUrl: 'https://nnamm.work/',
  titleTemplate: '%s',

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
          './src/assets/**/*.scss',
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.md',
          './node_modules/prismjs/**/*.js'
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
        host: 'https://nnamm.work',
        sitemap: 'https://nnamm.work/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/'
          }
        ]
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/exclude-me'],
        config: {
          '/posts/*': {
            changefreq: 'weekly'
          },
          '/about': {
            changefreq: 'monthly'
          }
        }
      }
    }
  ],

  templates: {
    Post: [
      {
        path: '/posts/:slug',
        component: './src/templates/Post.vue'
      }
    ]
  }
}
