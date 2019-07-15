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
        imgUrl:"//h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg"
        },{
        id:"0002",
        imgUrl:"//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg"
      },{
        id:"0003",
        imgUrl:"//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0677c297245b8a489ee12ab9b165c928.jpg_945x288_600cb364.jpg"
      }]
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




