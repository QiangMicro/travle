<template>
  <div class="swiper">
    <swiper :options="swiperOption" >
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
  data(){
    return{
      swiperOption:{
          //分页器挂载到swiper-pagination类对应的元素上
        pagination: '.swiper-pagination', 
        //开启轮播图前后循环模式
        loop: true  
      },
      swiperList:[{
        id:"0001",
        imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg"
        },{
        id:"0002",
        imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
      },{
        id:"0003",
        imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
      },{
        id:"0004",
        imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/31a76f3cf484757a14406d63b9a7c595.jpg_750x200_f89ca7f8.jpg"
      },{
        id:"0005",
        imgUrl:" https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/1f69b3ab28f9962158c798a8a3f5b4b3.jpg_750x200_fb4bf7c4.jpg"
      }
      ]
     
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




