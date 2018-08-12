<template lang="pug">
.main-frame
  .block.header-block
    Header
  .block.middle-block
    Aside.middle-block-aside
    Main.middle-block-main
      slot
  .block.footer-block
    Footer
  
</template>

<script>
import Header from './header'
import Footer from './footer'
import Aside from './aside'
import Main from './main'

export default {
  name: 'MainFrame',
  components: {
    Header,
    Footer,
    Aside,
    Main
  }
}
</script>

<style lang="scss">
.main-frame {
  display: flex;
  flex-direction: column;
  height: 100%;

  .header-block {
    height: 50px;
  }
  .middle-block {
    flex: 1;
    display: flex;
    
    .middle-block-aside {
      width: 200px;
    }
    .middle-block-mian {
      flex: 1;
    }
  }
  .footer-block {
    height: 50px;
  }
}
</style>
