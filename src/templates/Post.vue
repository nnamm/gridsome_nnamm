<template>
  <Layout>
    <template v-slot:header>
      <NavMenu />
      <PageTopButton />
    </template>

    <template v-slot:main-contents>
      <div class="w-full mx-auto m-10 py-10 bg-white sm:w-9/12 lg:w-7/12">
        <!-- タイトル -->
        <h1 class="px-4 lg:px-8 py-4 text-xl sm:text-2xl lg:text-3xl text-center">{{ $page.article.title }}</h1>
        <!-- 投稿日 -->
        <div class="pt-4 pb-3 text-xs text-center text-gray-600">
          <time :datetime="$page.article.createdAt">{{ $page.article.createdAt }}</time>
          <!-- 登校日と更新日が異なる場合は更新日も表示する -->
          <span v-if="$page.article.createdAt !== $page.article.updatedAt">
            <svg class="w-2 mx-2 inline-block" style="vertical-align: .025rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"></path></svg>
            <time :datetime="$page.article.updatedAt">{{ $page.article.updatedAt }}</time>
          </span>
        </div>
        <!-- カテゴリ -->
        <div class="flex items-center justify-center py-4">
          <div class="text-xs tracking-wider text-white bg-gray-600 rounded-full border border-gray-600 px-3 py-1">
            {{ $page.article.category }}
          </div>
        </div>

        <!-- アイキャッチ -->
        <div class="py-10">
          <g-image :src="$page.article.image"/>
        </div>

        <!-- 本文 -->
        <div class="px-5 sm:px-6 lg:px-8 blog-content" v-html="$page.article.content" />

        <!-- タグ -->
        <div class="pt-8 text-sm tracking-wider text-center text-gray-600">
          <span v-for="tag in tags" :key="tag" v-text="`#${tag}`" class="mr-2" />
<!--          <span v-for="tag in $page.article.tags.split(' ')" :key="tag" v-text="`#${tag}`" class="mr-2" />-->
        </div>
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
        { property: 'og:url', content: 'https://portfolio.nnamm.com/posts/' + this.$page.article.slug + '/' },
        { property: 'og:image', content: 'https://portfolio.nnamm.com' + this.$page.article.image },
        { property: 'og:site_name', content: 'nnamm works' },
        { property: 'og:description', content: this.$page.article.description }
      ]
    }
  },
  computed: {
    tags: function () {
      return this.$page.article.tags.split(' ');
    }
  }
}
</script>

<page-query>
query Post ($path: String!) {
  article: post (path: $path) {
    id
    title
    createdAt (format: "YYYY.MM.DD")
    updatedAt (format: "YYYY.MM.DD")
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
/* 見出し */
.blog-content > h2 {
  @apply text-2xl mt-12 p-1;
  border-bottom: 1px solid #F687B3;
}
.blog-content > h3 {
  @apply mt-10 pl-3 pr-1;
  font-size: 1.2rem;
  border-left: 4px solid #F687B3;
}

/* テキスト */
.blog-content > p {
  @apply my-8 pb-1 leading-loose;
}
.blog-content > p > a:link, a:visited {
  @apply underline;
  text-underline-position: under;
}
.blog-content > p > a::after {
  content: url('/svg/new-window.svg');
  @apply w-6 h-6 inline-block align-middle;
  margin-left: -.1rem;
  margin-right: -.2rem;
}

/* リスト */
.blog-content > ul, ol {
  @apply pl-6 pr-2;
}
.blog-content > ul li {
  @apply list-disc list-outside;
  padding-top: .15rem;
  padding-bottom: .15rem;
}
.blog-content > ul > li > ul  {
  @apply list-disc list-outside pl-6;
  padding-top: .15rem;
  padding-bottom: .15rem;
}
.blog-content > ol > li {
  @apply list-decimal list-outside;
  padding-top: .15rem;
  padding-bottom: .15rem;
}
.blog-content > ol > li > ol  {
  @apply list-decimal list-outside pl-6;
  padding-top: .15rem;
  padding-bottom: .15rem;
}

/* 抜粋 */
.blog-content > blockquote {
  @apply m-6 p-8 text-sm text-gray-700 bg-gray-200 rounded;
}

/* コードハイライト（Prism.jsベース） */
.blog-content > pre {
  @apply my-6 p-6 leading-snug;
}
.blog-content > pre > code {
  font-family: "SourceHanCodeJP-Normal", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace";
  font-size: 0.8rem;
}
</style>
