<template>
  <div>
    <Banner></Banner>
    <DetailHeader></DetailHeader>
    <div class="contnet"></div>
  </div>
</template>
<script>
import Banner from './components/Banner'
import DetailHeader from './components/detailHeader'
export default {
  name:'Detail',
  components:{
    Banner,
    DetailHeader
  }
}
</script>
<style lang="stylus" scoped>
  .contnet
    height 50rem
</style>


