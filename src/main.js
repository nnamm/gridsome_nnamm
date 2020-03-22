import BaseLayout from '~/layouts/BaseLayout.vue'

import '@/assets/css/tailwind.css'
import '@/assets/css/style.scss'
import 'prismjs/themes/prism-okaidia.css' 

export default function (Vue, { router, head, isClient, appOptions }) {
  // デフォルトレイアウトのグローバル設定
  Vue.component('Layout', BaseLayout)

  // サイトのhead設定
  head.htmlAttrs = { lang: 'ja', prefix: 'og: http://ogp.me/ns#' }
  head.meta.push({
    name: 'description',
    content: '空気感フォトグラファーのポートフォリオサイトです。Gridsomeで作りました。写真、グラフィック、ブログなどの作品を掲載しています。'
  })
  // OGP
  head.meta.push({
    property: 'og:title',
    content: 'nnamm works'
  })
  head.meta.push({
    property: 'og:type',
    content: 'Website'
  })
  head.meta.push({
    property: 'og:url',
    content: 'https://portfolio.nnamm.com'
  })
  head.meta.push({
    property: 'og:image',
    content: 'https://portfolio.nnamm.com/_gallery/default-ogp.jpg'
  })
  head.meta.push({
    property: 'og:site_name',
    content: 'nnamm works'
  })
  head.meta.push({
    property: 'og:description',
    content: '空気感フォトグラファーのポートフォリオサイトです。Gridsomeで作りました。写真、グラフィック、ブログなどの作品を掲載しています。'
  })
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
}
