<template>
  <div class="icons" >
    <swiper :options="swiperOption" >
      <swiper-slide v-for='(page,index) of pages' :key="index" >
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgURL">
          </div>
          <p class="icon-desc">{{item.title}}</p>
        </div>
      </swiper-slide>
     </swiper>
  </div>
</template>
<script>
export default {
  name:'HomeIcon',
  data(){
    return{
      swiperOption:{
        //开启轮播图前后循环模式
        loop: true  
      },
      iconList:[
        {
          id:'01',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title:'酒店(布丁酒店、桔子酒店等)'
        },
        {
          id:'02',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
          title:'机票'
        },
        {
          id:'03',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
          title:'度假'
        },
         {
          id:'04',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/train.png',
          title:'火车票'
        },
         {
          id:'05',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
          title:'景点门票'
        },
         {
          id:'06',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/group.png',
          title:'特惠酒店'
        },
         {
          id:'07',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/bargainflight.png',
          title:'低价机票'
        },
         {
          id:'08',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/inn.png',
          title:'客栈'
        },
         {
          id:'09',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/haiwai.png',
          title:'海外酒店'
        },
         {
          id:'10',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/kezhan.png',
          title:'民宿'
        },
         {
          id:'11',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/bus.png',
          title:'汽车票船票'
        },
         {
          id:'12',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/tuan.png',
          title:'旅游团购'
        },
         {
          id:'13',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/freeTravel.png',
          title:'自由行'
        },
         {
          id:'14',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/car.png',
          title:'专车自驾'
        },
         {
          id:'15',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png',
          title:'周边短途'
        },
         {
          id:'16',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/jr.png',
          title:'金融理财'
        },
         {
          id:'17',
          imgURL:'//s.qunarzz.com/homenode/images/touchheader/card.png',
          title:'保险车险'
        }
      ]
    }
  },
  computed:{
    pages () {
      const pages=[]
      this.iconList.forEach((item,index)=>{
        const page=Math.floor(index/8)
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
 @import '~@/assets/style/varibles.styl';
 @import '~@/assets/style/mixins.styl';
  .icons >>> .swiper-slide
    height:0
    padding-bottom:55%
  .icon
    overflow:hidden
    position relative
    float:left
    width:25%
    height:0
    padding-bottom:25%
    .icon-img
      position absolute
      top:0
      left:0
      right:0
      bottom:.44rem
      box-sizing:border-box
      padding: .1rem
      .icon-img-content
        height 100%
        display:block
        margin: 0 auto
    .icon-desc
      position:absolute
      left:0
      right 0
      bottom:0
      height:.44rem
      line-height:.44rem
      margin:0 auto
      text-align:center
      color:$textColor
      ellipsis()
</style>


