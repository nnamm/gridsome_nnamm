<template>
  <!-- フッター最下部設置用の設定 -->
  <!-- TODO: 画面の最下部に固定するよう調整する -->
  <div class="min-h-full relative box-border pb-20 base-text">

    <!-- ヘッダー -->
    <header>
      <slot name="header" />
    </header>

    <!-- サイトトップ用のプロフコンポーネント配置位置 -->
    <div>
      <slot name="about_top" />
    </div>

    <!-- コンテンツ -->
    <main>
      <slot name="main-contents" />
    </main>

    <!-- 各ポスト用のプロフコンポーネント配置位置 -->
    <div>
      <slot name="about_in_post" />
    </div>

    <!-- フッター最下部設置用の設定 -->
    <footer class="w-full absolute bottom-0">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from '~/components/TheFooter.vue'

export default {
  name: "BaseLayout",
  components: {
    Footer
  }
}
</script>

<style scoped>
.base-text {
  @apply text-gray-800;
  @apply leading-relaxed;
  @apply subpixel-antialiased;
  @apply break-words;
  letter-spacing: 0.05em;
}
</style>
