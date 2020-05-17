<template>
  <transition name="fade">
    <button class="to-top-button" v-show="positionY > 1000" @click="moveToTop">
      <img :src="buttonImg" class="to-top-button-back" alt="Move to Top" />
    </button>
  </transition>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'

export default {
  name: "MovePageTop",
  data: () => {
    return {
      buttonImg: require('@/assets/svg/color/move-to-top.svg'),
      positionY: 0
    }
  },
  mounted() {
    // scrollToのポリフィル対応
    smoothscroll.polyfill()
    // スクロール位置を取得するイベントを設定
    window.addEventListener('scroll', this.getScrollY)
  },
  methods: {
    getScrollY: function () {
      this.positionY = window.scrollY
    },
    moveToTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
}
</script>

<style scoped>
.to-top-button {
  @apply fixed right-0 bottom-0 w-12 h-12 mr-2 mb-3 z-10;
}
.to-top-button-back {
  @apply bg-gray-200 rounded-full;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
