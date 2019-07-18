<template>
  <div>
    <div class="recommend-title ">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for='item of Recommendlist ' :key='item.id'>
        <img class="item-img" 
          :src="item.imgURL"
          :alt="item.title" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
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
      Recommendlist:[
        {
          id:'001',
          imgURL:'https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title:'北京欢乐谷',
          desc:'国家4A级景区、新北京十六景、北京文化创意产业基地——北京欢乐谷'
        },
          {
          id:'002',
          imgURL:'https://imgs.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg',
          title:"古北水镇",
          desc:'古北水镇位于北京市密云区古北口镇，坐落在司马台长城脚下，有着北京后花园的美誉，青山碧水，天然氧吧！'
        },
        {
          id:'003',
          imgURL:'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title:"故宫",
          desc:'故宫博物院，是一座特殊的博物馆。成立于1925年的故宫博物院，建立在明清两朝皇宫——紫禁城的基础上。历经五百年兴衰荣辱，帝王宫殿的大门终于向公众敞开。故宫博物院绝无仅有的独特藏品，是世界上规模最大、保存最完整的紫禁城木结构宫殿建筑群。'
        },
         {
          id:'004',
          imgURL:'https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
          title:"八达岭长城",
          desc:'八达岭长城，位于北京市延庆区军都山关沟古道北口。是中国古代伟大的防御工程万里长城的重要组成部分，是明长城的一个隘口。八达岭长城为居庸关的重要前哨，古称“居庸之险不在关而在八达岭”。'
        },
        {
          id:'005',
          imgURL:'https://imgs.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
          title:"金海湖风景区",
          desc:'金海湖旅游度假区位于平谷区城东18公里处金海湖镇上宅村南，距北京85公里，水域面积6.5平方公里，位于北京、天津、唐山交界处的三角地带，素有“小北戴河”之称。'
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


