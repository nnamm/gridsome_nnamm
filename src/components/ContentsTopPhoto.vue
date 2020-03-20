<template>
  <!-- コンテンツ全体 -->
  <div class="container mx-auto my-16 lg:my-32 px-8 py-16 sm:px-12 sm:py-20 lg:px-24">
    <!-- メイン -->
    <div class="grid grid-cols-2 gap-4 lg:grid-rows-3 lg:grid-cols-4 grid-flow-row">
      <div class="row-span-1 col-span-1 lg:row-span-2 lg:col-span-2">
        <div class="square hover-parent">
          <router-link :to="postWorkEdges[0].node.path">
            <g-image :src="postWorkEdges[0].node.image" width="300"
                     class="hover-child hover:opacity-50" />
          </router-link>
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
<!--          <router-link :to="postWorkEdges[1].node.path">-->
<!--            <g-image :src="postWorkEdges[1].node.image" width="300"-->
<!--                     class="hover-child hover:opacity-50" />-->
<!--          </router-link>-->
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
<!--          <router-link :to="postWorkEdges[2].node.path">-->
<!--            <g-image :src="postWorkEdges[2].node.image" width="300"-->
<!--                     class="hover-child hover:opacity-50" />-->
<!--          </router-link>          -->
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
<!--          <router-link :to="postWorkEdges[3].node.path">-->
<!--            <g-image :src="postWorkEdges[3].node.image" width="300"-->
<!--                     class="hover-child hover:opacity-50" />-->
<!--          </router-link>          -->
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
<!--          <router-link :to="postWorkEdges[4].node.path">-->
<!--            <g-image :src="postWorkEdges[4].node.image" width="300"-->
<!--                     class="hover-child hover:opacity-50" />-->
<!--          </router-link>          -->
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
<!--          <router-link :to="postWorkEdges[5].node.path">-->
<!--            <g-image :src="postWorkEdges[5].node.image" width="300"-->
<!--                     class="hover-child hover:opacity-50" />-->
<!--          </router-link>          -->
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
<!--          <router-link :to="postWorkEdges[6].node.path">-->
<!--            <g-image :src="postWorkEdges[6].node.image" width="300"-->
<!--                     class="hover-child hover:opacity-50" />-->
<!--          </router-link>          -->
        </div>
      </div>
      <div class="row-span-1 col-span-1 lg:row-span-1 lg:col-span-1">
        <div class="square hover-parent">
<!--          <router-link :to="postWorkEdges[7].node.path">-->
<!--            <g-image :src="postWorkEdges[7].node.image" width="300"-->
<!--                     class="hover-child hover:opacity-50" />-->
<!--          </router-link>          -->
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-num-parent">
          <div class="hover-num-child hover:opacity-50">
            <p class="text-gray-400 text-4xl">+{{ remainingCount }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      workCount: 8,  // トップページに作品を掲載する数
      noimg: require('@/assets/images/not_published.png')
    }
  },
  computed: {
    // TODO: 作品数が9を超えたら下記ロジックを全開放
    // 作品掲載データ
    postWorkEdges: function () {
      // return this.$static.photos.edges(0, this.workCount)
      return this.$static.photos.edges.slice(0, 1)
    },
    // トップページ掲載数を除いた作品数
    remainingCount: function () {
      // return this.workCount - this.$static.photos.edges.length
      return 0
    }
  }
}
</script>

<static-query>
query ($page: Int) {
  photos: allPost (page: $page, filter: { type: { eq: "photo" }}) {
    edges {
      node {
        id
        path(to:"photo")
        title
        createdAt (format: "YYYY.MM.DD")
        updatedAt (format: "YYYY.MM.DD")
        description
        image
        category
        type
      }
    }
  }
}
</static-query>

<style scoped>
.square {
  @apply h-0;
  padding-bottom: 100%;
}

.hover-parent {
  @apply relative bg-gray-900;
  @apply transition duration-300 ease-in-out;
}

.hover-child {
  @apply absolute w-full h-full top-0 right-0 bottom-0 left-0 m-auto object-cover;
  @apply transition duration-300 ease-in-out;
}

.hover-num-parent {
  @apply relative bg-gray-800;
  @apply transition duration-300 ease-in-out;
}

.hover-num-child {
  @apply absolute w-full h-full flex items-center justify-center;
  @apply transition duration-300 ease-in-out;
}
</style>
