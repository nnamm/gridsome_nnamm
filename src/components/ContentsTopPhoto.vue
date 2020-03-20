<template>
  <!-- コンテンツ部 -->
  <div class="container mx-auto px-8 py-16 sm:px-12 sm:py-20 lg:px-32 lg:py-40">
    <div class="grid grid-cols-2 gap-6 lg:grid-rows-4 lg:grid-cols-4 grid-flow-row">
      <!-- 1st:大きいサイズ -->
      <div class="row-span-1 col-span-1 lg:row-span-2 lg:col-span-2">
        <div class="square hover-parent">
          <router-link :to="$static.allPost.edges[1].node.path">
            <g-image :src="$static.allPost.edges[1].node.image" width="300" class="hover-child hover:opacity-50" />
          </router-link>
        </div>
      </div>
      <div class="row-span-1 col-span-1 ">
        <div class="square hover-parent">
          <g-image :src="$static.allPost.edges[0].node.image" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="noimg" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="noimg" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="noimg" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="noimg" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="noimg" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <!-- 8th:大きいサイズ -->
      <div class="row-span-1 col-span-1 lg:row-span-2 lg:col-span-2">
        <div class="square hover-parent">
          <g-image :src="noimg" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="noimg" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
      <div class="row-span-1 col-span-1">
        <div class="square hover-parent">
          <g-image :src="noimg" width="300" class="hover-child hover:opacity-50" />
        </div>
      </div>
    </div>
    <!--  TODO: "+10のようなand more" ボタンを作る  -->
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      noimg: require('@/assets/images/not_published.png')
    }
  }
}
</script>

<static-query>
query ($page: Int) {
  allPost (perPage: 10, page: $page, filter: { type: { eq: "photo" }}) {
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
</style>
