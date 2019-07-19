<template>
  <div class="icons" >
    <swiper :options="swiperOption" v-if='iconList.length' >
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
  props:{
    iconList:Array
  },
  data(){
    return{
      swiperOption:{
        //开启轮播图前后循环模式
        loop: true  
      }
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


