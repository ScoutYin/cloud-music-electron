<template lang="pug">
.home-wrapper
  MainFrame
    router-view
</template>

<script>
import MainFrame from '~/layout'

export default {
  name: 'Home',
  components: {
    MainFrame
  }
}
</script>

<style lang="scss">
.home-wrapper {
  height: 100%;
}
</style>
