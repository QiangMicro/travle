<template>
  <div>
    <div class="recommend-title ">
      周末去那儿
    </div>
    <ul>
      <li class="item border-bottom" v-for='item of Weeklist' :key='item.id'>
        <div class="item-img-wrapper">
          <img class="item-img" 
            :src="item.imgURL"
            :alt="item.title" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
      <div class="all-button">查看所有产品</div>
    </ul>
  </div>
</template>
<script>
export default {
  name:'HomeRecommended',
  props:{
    Weeklist:Array
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
  .item-img-wrapper
    overflow:hidden
    height:0
    padding-bottom: 33.9%
  .item-img
    width 100%
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      overflow: hidden;
      padding-right: 1.4rem;
      color: #212121;
      font-size: .28rem;
      line-height: .48rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      ellipsis()
    .item-desc
      overflow: hidden;
      padding-right: 1.4rem;
      color: #616161;
      font-size: .24rem;
      line-height: .42rem;
      white-space: nowrap;
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


