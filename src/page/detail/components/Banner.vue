<template>
  <div class="banner">
    <img 
      class="banner-imge"
      src="//img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg" 
      alt="北京欢乐谷"
    >
    <div class="banner-info">
      <div class="banner-tittle">北京欢乐谷(AAAA景区)</div>
      <div class="banner-number"><i class="iconfont banner-icon">&#xe617;</i>27</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Banner'
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-imge
      width 100%
    .banner-info
      position  absolute
      display flex
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-tittle  
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        padding  0 .4rem
        line-height .4rem
        height .32rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .24rem

</style>


