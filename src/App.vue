<template>
  <div id="app">
    <Vheader></Vheader>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>

      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import Vheader from './components/header/header'
const axios = require('axios').default
export default {
  data () {
    return {
      seller: {

      }
    }
  },
  created () {
    axios.get('/api/seller')
      .then(function (response) {
        response = response.json()
        if(response.errno === 0){

        }
      })
  },
  components: {
    Vheader
  }
}

</script>

<style lang="stylus">
  @import "./common/stylus/index.styl"
  #app
    .tab
      display:flex
      width: 100%
      height: 40px
      line-height :40px
      //border-bottom: 1px  solid rgba(7,17, 27, 0.1)
      //border-1px(rgba(7,17, 27, 0.1))
      .tab-item
        flex:1
        text-align :center
        & > a
           display : block
           text-decoration : none
           font-size : 14px
           color: rgb(77, 85, 93)
           &.router-link-active
              color: red

</style>
