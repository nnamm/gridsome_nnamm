<template>
  <Layout>
    <template v-slot:header>
      <NavMenu />
    </template>

    <template v-slot:main-contents>
      <Profile class="mt-20" /> <!-- TODO: アーカイブページタスクまでの暫定処置 -->
    </template>
  </Layout>
</template>

<script>
import NavMenu from '~/components/TheNavMenu.vue'
import Profile from '~/components/Profile.vue'

export default {
  components: {
    NavMenu,
    Profile,
  },
  metaInfo: {
    title: 'About Me'
  }
}
</script>
