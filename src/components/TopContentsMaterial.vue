<template>
  <!-- コンテンツ部 -->
  <div class="container mx-auto px-8 py-16 sm:px-12 sm:py-20 lg:py-40">
    <div class="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
      <div class="square hover-parent">
        <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
      </div>
      <div class="square hover-parent">
        <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
      </div>
      <div class="square hover-parent">
        <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
      </div>
      <div class="square hover-parent">
        <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
      </div>
      <div class="square hover-parent">
        <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
      </div>
      <div class="square hover-parent">
        <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
      </div>
      <div class="square hover-parent">
        <g-image :src="img" width="300" class="hover-child hover:opacity-50" />
      </div>
      <div class="square bg-gray-200 relative">
        <div class="absolute bottom-0 right-0 pr-2 text-sm">and more...</div>
      </div>
    </div>
    <!--  TODO: "and more..." ボタンを作る  -->
  </div>
</template>

<script>
export default {
  name: "TopMaterial",
  props: { 'contentsTitle': String },
  data: () => {
    return {
      img: require('@/assets/images/not_published.png')
    }
  }
}
</script>

<static-query>
</static-query>

<style scoped>
.square {
  height: 0;
  padding-bottom: 100%;
}

.hover-parent {
  @apply transition;
  @apply duration-300;
  @apply ease-in-out;
  @apply bg-gray-900;
}

.hover-child {
  @apply transition;
  @apply duration-300;
  @apply ease-in-out;
}
</style>
