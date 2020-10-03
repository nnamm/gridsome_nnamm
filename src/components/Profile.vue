<template>
  <div class="w-full mx-auto my-0 sm:my-20 px-8 py-20 sm:py-4 bg-white max-w-screen-lg
              lg:flex lg:w-3/5 lg:my-40 lg:px-10 lg:py-8 lg:border lg:border-gray-300 lg:rounded-lg">
    <img :src="profile.img" :alt="profile.desc"
         class="w-48 h-48 mx-auto my-4 rounded-full lg:my-auto lg:mr-10">
    <div class="lg:mx-4 my-4">
      <p class="text-pink-600 text-sm text-center pb-3">
        {{ profile.title }}
      </p>
      <p class="text-2xl text-center font-medium pt-3 pb-2">
        {{ profile.nameJa }}
      </p>
      <p class="text-xs text-center py-1">
        {{ profile.nameEn }}
      </p>
      <p class="text-left px-2 lg:px-0 py-6 leading-loose" style="font-size: .94rem">
        {{ profile.intro.t1 }}<br>{{ profile.intro.t2 }}
      </p>
      <!-- Social -->
      <div class="flex flex-wrap justify-center text-center pt-2 px-4 lg:px-0">
        <a v-for="s in social" :key="s.text" :href="s.link" target="_blank"
          class="mr-2 mb-2 px-2 py-1 text-xs bg-gray-200 rounded-full">
          <img :src="s.icon" :alt="s.text" class="w-4 h-4 mr-1 inline-block" style="vertical-align: -0.2rem" /><span>{{ s.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileItem",
  data: () => {
    return {
      // プロフィール情報
      profile: {
        img: require('@/assets/images/profile.jpg'),
        title: 'Software Engineer & Photographer',
        nameJa: '花村貴史',
        nameEn: 'Takashi Q. Hanamura',
        // nickname: '（なむ）',
        intro: {
          t1: '個人ではPython/Golang/JSを使い、オシゴトではWeb系システムを開発しつつ、週末は撮られ慣れてない方の笑顔や空気感をそっとすくい撮っています。',
          t2: '横浜育ち38年。脱サラ→信州移住2年半。2018年春から関西在住。翌年秋から夫婦生活スタート。関西に来てよかったことは京都が近くなったこと。',
        },
        desc: '花村貴史のアイコン画像'
      },
      social: [
        {
          link: 'https://nnamm.com',
          icon: require('@/assets/svg/line/wordpress.svg'),
          text: 'Web'
        },
        {
          link: 'https://note.com/tnnamm',
          icon: require('@/assets/svg/line/safari.svg'),
          text: 'note'
        },
        {
          link: 'https://web-challenge.nnamm.com',
          icon: require('@/assets/svg/line/safari.svg'),
          text: '100 Web-challenge'
        },
        {
          link: 'https://www.facebook.com/t.hanamura.photography/',
          icon: require('@/assets/svg/line/facebook.svg'),
          text: 'Facebook'
        },
        {
          link: 'https://twitter.com/nnammg',
          icon: require('@/assets/svg/line/twitter.svg'),
          text: 'Twitter'
        },
        {
          link: 'https://github.com/nnamm',
          icon: require('@/assets/svg/line/github.svg'),
          text: 'GitHub'
        },
        {
          link: 'https://www.behance.net/nnamm',
          icon: require('@/assets/svg/line/behance.svg'),
          text: 'Behance'
        },
        {
          link: 'https://www.youtube.com/channel/UCvXy78MlFBKnNDMcSrqnOnA',
          icon: require('@/assets/svg/line/youtube.svg'),
          text: 'YouTube'
        },
      ]
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
