<template>
  <div>
    <div class="recommend-title ">周末去那儿</div>
    <ul>
      <li class="item border-bottom" v-for='item of Weeklist ' :key='item.id'>
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
  data (){
    return {
      Weeklist:[
        {
          id:'001',
          imgURL:'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title:'京城周末撒欢',
          desc:'在帝都过周末，不仅仅是城中游！'
        },
          {
          id:'002',
          imgURL:'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
          title:"京城溜娃必去",
          desc:'德智体美劳全面发展的亲子日，这些地方该去看看…'
        },
        {
          id:'003',
          imgURL:'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title:"帝都必打卡",
          desc:'来北京必去的景点非这些地方莫属'
        },
         {
          id:'004',
          imgURL:'https://imgs.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          title:"漂流勇进，烧烤露营",
          desc:'轻松水上漂，任我乐逍遥'
        },
        {
          id:'005',
          imgURL:'https://imgs.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          title:"北京清凉避暑胜地",
          desc:'到大自然中享受“天然空调”的清凉'
        },
      ]
    }
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


