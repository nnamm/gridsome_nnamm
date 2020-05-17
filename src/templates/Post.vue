<template>
  <Layout>
    <template v-slot:header>
      <NavMenu />
      <PageTopButton />
    </template>

    <template v-slot:main-contents>
      <!-- ■■■■■  投稿タイプ：Blog  ■■■■■ -->
      <div v-if="postType === 'b'" class="w-full sm:w-11/12 mx-auto m-10 py-16 bg-white max-w-screen-2xl">
        <div class="w-full sm:w-4/5 lg:w-3/5 xl:w-6/12 mx-auto">
          <!-- タイトル -->
          <h1 class="mx-3 sm:mx-1 text-2xl sm:text-3xl lg:text-4xl">{{ $page.article.title }}</h1>
          <!-- メタデータ -->
          <div class="flex items-center ml-4 sm:ml-2 mt-10 divide-x divide-gray-400">
            <!-- 投稿者 -->
            <div class="flex-initial pr-3">
              <img :src="profile.img" :alt="profile.desc" class="w-8 h-8 rounded-full float-left">
              <p class="text-gray-600 text-xs tracking-wider text-gray-600 pl-10 py-2 hidden sm:block">
                {{ profile.nameJa }}
              </p>
            </div>
            <!-- カテゴリ  -->
            <div class="flex-initial text-gray-600 text-xs tracking-wider text-gray-600 px-3">
              {{ $page.article.category }}
            </div>
            <!-- 投稿日 -->
            <div class="flex-initial text-xs text-gray-600 px-3">
              <time :datetime="$page.article.createdAt">{{ $page.article.createdAt }}</time>
              <!-- 登校日と更新日が異なる場合は更新日も表示する -->
              <span v-if="$page.article.createdAt !== $page.article.updatedAt">
                <svg class="w-2 mx-2 inline-block" style="vertical-align: .025rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"></path></svg>
                <time :datetime="$page.article.updatedAt">{{ $page.article.updatedAt }}</time>
              </span>
            </div>
          </div>
          <!-- アイキャッチ -->
          <div class="my-4">
            <g-image :src="$page.article.image"/>
          </div>
          <!-- 本文 -->
          <div class="mx-3 sm:mx-1 blog-content" v-html="$page.article.content" />
          <!-- タグ -->
          <div class="mt-8 text-xs tracking-wider text-center text-gray-600">
            <span v-for="tag in tags" :key="tag" v-text="`#${tag}`" class="mr-2" />
<!--        <span v-for="tag in $page.article.tags.split(' ')" :key="tag" v-text="`#${tag}`" class="mr-2" />-->
          </div>
        </div>
      </div>

      <!-- ■■■■■  投稿タイプ：Graphic  ■■■■■ -->
      <div v-else-if="postType === 'g'" class="w-full lg:w-11/12 mx-auto m-10 bg-white max-w-screen-xl">
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

      <!-- ■■■■■  投稿タイプ：Photo  ■■■■■ -->
      <div v-else class="w-full lg:w-11/12 mx-auto m-10 bg-white max-w-screen-xl">
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
      titleTemplate: '%s | nnamm.work',
      meta: [
        { name: 'description', content: this.$page.article.description },
        { property: 'og:title', content: this.$page.article.title },
        { property: 'og:type', content: 'Website' },
        { property: 'og:url', content: 'https://portfolio.nnamm.com/posts/' + this.$page.article.slug + '/' },
        { property: 'og:image', content: 'https://portfolio.nnamm.com' + this.$page.article.image },
        { property: 'og:site_name', content: 'nnamm.work' },
        { property: 'og:description', content: this.$page.article.description }
      ]
    }
  },
  data: function () {
    return {
      profile: {
        img: require('@/assets/images/profile.jpg'),
        nameJa: '花村貴史',
        desc: '花村貴史のアイコン画像'
      }
    }
  },
  computed: {
    tags: function () {
      return this.$page.article.tags.split(' ')
    },
    postType: function () {
      return this.$page.article.slug.substr(0, 1)
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

<style lang="scss">
@import "src/assets/css/style.scss";

/* 投稿タイプ：Blog */
$b-font-base-size: .92rem;
$b-elements-base-space: 1.5rem;
$b-space: .15rem;

.blog-content {
  > h2 {
    @apply text-xl mt-16 px-1 pb-1 font-bold;
    border-bottom: 1px solid #A0AEC0;
  }

  > h3 {
    @apply text-lg mt-12 px-1 pb-1 font-bold;
  }

  > p {
    margin-top: $b-elements-base-space;
    font-size: $b-font-base-size;
    line-height: 1.75rem;
  }

  > p, ul, ol, blockquote {
    a:link, a:visited {
      @apply text-pink-600;
    }
    a:hover {
      @apply text-pink-500;
    }
  }

  > ul {
    @apply py-6 pl-10 pr-2 bg-gray-100;
    margin-top: $b-elements-base-space;
    font-size: $b-font-base-size;

    li, p {
      @apply list-outside;
      list-style-type: disc;
      padding-top: $b-space;
      padding-bottom: $b-space;

      ul {
        @apply pl-6;

        li {
          @apply list-outside;
          list-style-type: circle;
          padding-top: $b-space;
          padding-bottom: $b-space;
        }
      }
    }
  }

  > ol {
    @apply py-6 pl-10 pr-2 bg-gray-100;
    margin-top: $b-elements-base-space;
    font-size: $b-font-base-size;
    counter-reset: section;

    li, p {
      @apply list-outside;
      list-style-type: decimal;
      padding-top: $b-space;
      padding-bottom: $b-space;

      ol {
        @apply pl-6;

        li {
          @apply list-outside;
          list-style-type: decimal;
          padding-top: $b-space;
          padding-bottom: $b-space;
        }
      }

      ul {
        @apply pl-6;

        li {
          @apply list-outside;
          list-style-type: disc;
          padding-top: $b-space;
          padding-bottom: $b-space;
        }
      }
    }
  }

  > blockquote {
    @apply m-4 px-8 py-6 text-sm text-gray-700 bg-gray-200 rounded;
  }

  > pre {
    @apply my-6 p-6 leading-snug;

    code {
      font-family: $font-mono;
      font-size: 0.8rem;
    }
  }

  > table {
    @apply mx-auto table-auto border-collapse border border-gray-400;
    margin-top: $b-elements-base-space;
    font-size: $b-font-base-size - 0.04rem;

    th {
      @apply px-4 py-1 border border-gray-400 bg-gray-200 font-normal;
    }

    tr:nth-child(even) {
      @apply bg-gray-100;
    }

    td {
      @apply px-4 py-1 border border-gray-400;
    }
  }
}

/*
.blog-content > p a::after {
  content: url('/svg/new-window.svg');
  @apply w-6 h-6 inline-block align-middle;
  margin-left: -.1rem;
  margin-right: -.2rem;
}*/

/* 投稿タイプ：Graphic */
.graphic-content {
  @apply w-full m-0;
  font-size: .9rem;
}

/* 投稿タイプ：Photo */
.photo-content {
  @apply w-full m-0;
  font-size: .9rem;
}
</style>
