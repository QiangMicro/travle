<template>
  <div>
    <div class="recommend-title ">
      <i class="iconfont banner-icon">&#xe663;</i>
      猜你喜欢
    </div>
    <ul>
      <router-link 
        tag='li' 
        class="item border-bottom" 
        v-for='item of Recommendlist' 
        :key='item.id'
        :to="'/detail/'+ item.id"
      >
        <img class="item-img" 
          :src="item.imgURL"
          :alt="item.title" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
      <div class="all-button">查看所有产品</div>
    </ul>
  </div>
</template>
<script>
export default {
  name:'HomeRecommended',
  props:{
    Recommendlist:Array
  }
}
</script>
<style lang="stylus" scoped>
 @import '~@/assets/style/mixins.styl';
 @import '~@/assets/style/varibles.styl';
  .recommend-title
    line-height .8rem
    background $bgTtitle
    text-text-indent .2rem
    color: #212121;
    font-size: .32rem;
    padding 0 .1rem
    .banner-icon
      color red
  .item
    overflow:hidden
    display:flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #cccccc
        ellipsis()
      .item-button
        margin-top .2rem
        background #ff9300
        padding .06rem
        border-radius .06rem
        color #ffffff
  .all-button
    display: block;
    padding: .2rem 0;
    color: #00afc7;
    font-size: .28rem;
    line-height: .4rem;
    text-align: center;
    margin 0 auto
</style>


