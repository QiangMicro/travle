<template>
  <div class="container" @click="hadClickImg">
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <swiper-slide v-for='(item,index) of imgs' :key="index" >
          <img class="gallaryImage" 
            :src='item' 
            alt="图片路径出错"
          >
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name:"CommonGallary",
  props:{
    imgs:{
      type:Array,
      default(){
        return []
      }
    }
    
  },
  methods:{
    hadClickImg(){
      this.$emit('hadClick')
    }
  },
  data(){
    return{
      swiperOption:{
        // 分页器挂载的DOM节点
        pagination: '.swiper-pagination', 
        // 分页器样式
        paginationType:'fraction',
        // 左右拖动
        loop: true,
        // 父组件发生变化时swiper组件跟着变化
        observeParents:true,
        observer:true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position  fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallaryImage
        width 100%
      .swiper-pagination
        color #ffffff
        bottom -1rem
</style>


