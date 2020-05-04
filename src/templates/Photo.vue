<!--20.0504〜未使用-->
<template>
  <Layout>
    <template v-slot:header>
      <NavMenu />
      <PageTopButton />
    </template>

    <template v-slot:main-contents>
      <div class="w-full mx-auto m-10 bg-white lg:w-11/12">
        <!-- タイトル部 -->
        <div class="relative w-11/12 mt-0 mb-10 md:mt-4 md:mb-20 lg:mt-10 mr-0 ml-auto bg-black z-0 rounded-bl-lg">
          <div class="absolute pl-4 lg:pl-8 z-10" style="top: 20%;">
            <!-- カテゴリ -->
            <div class="text-md sm:text-xl md:text-2xl lg:text-3xl tracking-wider text-gray-200">
              {{ $page.article.category }}
            </div>
            <!-- タイトル -->
            <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-200">
              {{ $page.article.title }}
            </h1>
          </div>
          <!-- タイトル背景画像 -->
          <g-image :src="$page.article.image" class="rounded-bl-lg opacity-50" />
        </div>
        <!-- 本文 -->
        <div class="photo-content" v-html="$page.article.content" />
      </div>
    </template>

    <template v-slot:about_in_post>
      <Profile />
    </template>
  </Layout>
</template>

<script>
import NavMenu from '~/components/TheNavMenu.vue'
import PageTopButton from '~/components/PageTopButton'
import Profile from '~/components/Profile.vue'

export default {
  components: {
    NavMenu,
    PageTopButton,
    Profile
  },
  metaInfo: function () {
    return {
      title: this.$page.article.title,
      meta: [
        { name: 'description', content: this.$page.article.description },
        { property: 'og:title', content: this.$page.article.title },
        { property: 'og:type', content: 'Website' },
        { property: 'og:url', content: 'https://portfolio.nnamm.com/photos/' + this.$page.article.slug + '/' },
        { property: 'og:image', content: 'https://portfolio.nnamm.com' + this.$page.article.image },
        { property: 'og:site_name', content: 'nnamm works' },
        { property: 'og:description', content: this.$page.article.description }
      ]
    }
  }
}
</script>

<page-query>
query Post ($path: String!) {
  article: post (path: $path) {
    id
    title
    description
    content
    image
    slug
    category
    tags
  }
}
</page-query>

<style>
/* テキスト */
.photo-content {
  @apply w-full m-0;
  font-size: .9rem;
}
</style>
