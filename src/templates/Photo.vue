<template>
  <Layout>
    <template v-slot:header>
      <NavMenu />
    </template>

    <template v-slot:main-contents>
      <div class="w-screen mx-auto m-10 py-10 bg-white lg:w-11/12">
        <!-- タイトル -->
        <h1 class="p-4 text-3xl font-bold text-center">{{ $page.article.title }}</h1>
        <!-- カテゴリ -->
        <div class="flex items-center justify-center pt-3 pb-4">
          <div class="text-sm tracking-wider text-white bg-gray-600 rounded-full border border-gray-600 px-3 py-1">
            {{ $page.article.category }}
          </div>
        </div>

        <!-- アイキャッチ -->
        <div class="py-10">
          <g-image :src="$page.article.image"/>
        </div>

        <!-- 本文 -->
        <div class="px-5 sm:px-8 blog-content" v-html="$page.article.content" />
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
        { key: 'description', name: 'description', content: this.$page.article.description }
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
    category
  }
}
</page-query>
