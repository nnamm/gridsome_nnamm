<template>
  <Layout>
    <template v-slot:header>
      <div class="relative bg-center bg-no-repeat bg-cover h-screen" :style="{ backgroundImage: 'url(' + headerImgFiles[headerImgIndex] + ')' }">
        <NavMenu class="absolute top-0 left-0" />
      </div>
    </template>

    <template v-slot:about_top>
      <Profile />
    </template>

    <template v-slot:main-contents>
      <SeparatorR contents-title="Photography" />
      <TopPhoto />
      <SeparatorL contents-title="Graphics" />
      <TopGraphic />
      <SeparatorR contents-title="Blog" />
      <TopBlog />
    </template>
  </Layout>
</template>

<script>
import NavMenu from '~/components/TheNavMenu.vue'
import Profile from '~/components/Profile.vue'
import TopBlog from '~/components/TopContentsBlog.vue'
import TopGraphic from '~/components/TopContentsGraphic.vue'
// import TopMaterial from '~/components/TopContentsMaterial.vue'
import TopPhoto from '~/components/TopContentsPhoto.vue'
import SeparatorL from '~/components/TopSeparatorLeft.vue'
import SeparatorR from '~/components/TopSeparatorRight.vue'

export default {
  components: {
    NavMenu,
    Profile,
    SeparatorL,
    SeparatorR,
    TopBlog,
    TopGraphic,
    // ContentsTopMaterial,
    TopPhoto
  },
  metaInfo: {
    title: 'Home'
  },
  data: () => {
    return {
      // ヘッダー画像
      headerImgFiles: [
        require('@/assets/images/top1.jpg'),
        require('@/assets/images/top2.jpg'),
        require('@/assets/images/top3.jpg'),
        require('@/assets/images/top4.jpg'),
        require('@/assets/images/top5.jpg')
      ]
    }
  },
  computed: {
    // サイト読み込みのたびヘッダー画像をランダム選択
    headerImgIndex: () => {
      return Math.floor(Math.random() * 5)
    }
  }
}
</script>
