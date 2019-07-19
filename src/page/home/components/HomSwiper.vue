<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if='swiperList.length'>
      <swiper-slide v-for='item of swiperList' :key="item.id">
        <img class="swiperImage" :src='item.imgUrl' alt="图片路径出错">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name:'HomSwiper',
  props:{
    swiperList:Array
  },
  data(){
    return{
      swiperOption:{
          //分页器挂载到swiper-pagination类对应的元素上
        pagination: '.swiper-pagination', 
        //开启轮播图前后循环模式
        loop: true  
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
    background:#fff
  .swiper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:31.25%
    .swiperImage
      width:100%

</style>




