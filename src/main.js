import BaseLayout from '~/layouts/BaseLayout.vue'

import '@/assets/css/tailwind.css'
import '@/assets/css/style.scss'
import 'prismjs/themes/prism-okaidia.css' 

export default function (Vue, { router, head, isClient, appOptions }) {
  // デフォルトレイアウトのグローバル設定
  Vue.component('Layout', BaseLayout)

  // サイトのhead設定
  head.htmlAttrs = { lang: 'ja', prefix: 'og: http://ogp.me/ns#' }
  // OGP(Facebook)
  head.meta.push({
    property: 'article:publisher',
    content: 'https://www.facebook.com/t.hanamura.photography/'
  })
  head.meta.push({
    property: 'fb:app_id',
    content: '652239472256159'
  })
  // OGP(Twitter)
  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image'
  })
  head.meta.push({
    name: 'twitter:site',
    content: '@nnammg'
  })
  // Search Console用
  head.meta.push({
    name: 'google-site-verification',
    content: '3imfnbuFT-u71lkwikCpydyZl3XjMEFGDWyVxOGLHOg'
  })
}
