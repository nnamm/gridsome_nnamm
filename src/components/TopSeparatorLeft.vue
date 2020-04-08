<template>
  <!-- ななめ背景部 -->
  <div class="h-48 lg:h-64 bg-gray-200 hoverflow-hidden">
    <div class="h-48 lg:h-64 bg-gray-200 transform origin-top-left skew-y-3">
      <div class="h-48 lg:h-64 pt-16 lg:pt-20 text-center transform -skew-y-3">
        <h2 class="separator-title text-sm lg:text-base">{{ contentsTitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeparatorLeft",
  props: { 
    contentsTitle: String
  }
}
</script>

<style>
.separator-title {
  @apply relative inline-block py-0 px-20;
  @apply text-gray-600 tracking-widest;
}

.separator-title::before, .separator-title::after {
  @apply absolute inline-block bg-gray-600 w-12;
  content: '';
  top: 50%;
  height: calc(1px + 0.015rem);
}

.separator-title::before {
  @apply left-0;
}

.separator-title::after {
  @apply right-0
}
</style>
