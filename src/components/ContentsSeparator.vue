<template>
  <!-- ななめ背景部 -->
  <div class="bg-gray-200 h-40 lg:h-56 hoverflow-hidden">
    <div :class="tiltClass + '-parent'" class="h-40 lg:h-56">
      <div :class="tiltClass + '-child'" class="h-40 lg:h-56 text-center pt-12 lg:pt-16">
        <h2 class="separator-title text-sm lg:text-base">{{ contentsTitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    contentsTitle: String,
    tiltMode: String        // left:左下がり、right:右下がり、左記以外:
 },
 computed: {
    tiltClass: function () {
      if (this.tiltMode === 'left') {
        return 'tilt-mode1'
      } else if (this.tiltMode === 'right') {
        return 'tilt-mode2'
      } else {
        return 'tilt-mode1'
      }
    }
  }
}
</script>

<style>
.tilt-mode1-parent {
  @apply bg-gray-200 transform origin-top-right -skew-y-3;
}

.tilt-mode1-child {
  @apply transform skew-y-3;
}

.tilt-mode2-parent {
  @apply bg-gray-200 transform origin-top-left skew-y-3;
}

.tilt-mode2-child {
  @apply transform -skew-y-3;
}

.separator-title {
  @apply relative inline-block py-0 px-20;
  @apply text-gray-600 tracking-widest;
}

.separator-title::before, .separator-title::after {
  @apply absolute inline-block bg-gray-600 w-12;
  content: '';
  top: 50%;
  height: 1px;
}

.separator-title::before {
  @apply left-0;
}

.separator-title::after {
  @apply right-0
}
</style>
