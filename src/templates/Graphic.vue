<template>
  <Layout>
    <template v-slot:header>
      <NavMenu />
    </template>

    <template v-slot:main-contents>
      <div class="w-screen mx-auto m-10 bg-white lg:w-11/12">
        <!-- タイトル部 -->
        <div class="relative mt-0 mb-10 md:mt-4 md:mb-20 lg:mt-10 mr-0 ml-auto bg-black z-0">
          <div class="absolute w-full z-10" style="top: 30%;">
            <!-- カテゴリ -->
            <div class="text-md sm:text-xl md:text-2xl lg:text-3xl tracking-wider text-gray-200 text-center">
              {{ $page.article.category }}
            </div>
            <!-- タイトル -->
            <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gray-200">
              {{ $page.article.title }}
            </h1>
            <!-- タグ -->
<!--            <div class="mt-4 text-sm sm:text-md tracking-wider text-gray-200 text-center">-->
<!--              <span v-for="tag in $page.article.tags.split(' ')" :key="tag" v-text="`#${tag}`" class="mr-2" />-->
<!--            </div>-->
          </div>
          <!-- タイトル背景画像 -->
          <g-image :src="$page.article.image" class="opacity-50" />
        </div>
        <!-- 本文 -->
        <div class="graphic-content" v-html="$page.article.content" />
      </div>
    </template>

    <template v-slot:about_in_post>
      <Profile />
    </template>
  </Layout>
</template>

<script>
import NavMenu from '~/components/TheNavMenu.vue'
import Profile from '~/components/Profile.vue'

export default {
  components: {
    NavMenu,
    Profile
  },
  metaInfo: function () {
    return {
      title: this.$page.article.title,
      meta: [
        { name: 'description', content: this.$page.article.description },
        { property: 'og:title', content: this.$page.article.title },
        { property: 'og:type', content: 'Website' },
        { property: 'og:url', content: 'https://portfolio.nnamm.com/graphics/' + this.$page.article.slug + '/' },
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
.graphic-content {
  @apply w-full m-0;
  font-size: .9rem;
}
</style>
