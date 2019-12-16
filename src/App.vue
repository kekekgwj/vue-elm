<template>
  <div id="app">
    <Vheader></Vheader>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>

  </div>
</template>

<script>

import Vheader from './components/header/header'

export default {
  components: {
    Vheader
  }
}

</script>

<style lang="stylus">
  #app
    .tab
      display:flex
      width: 100%
      height: 40px
      line-height :40px
      .tab-item
        flex:1
        text-align :center

</style>
