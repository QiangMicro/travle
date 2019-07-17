<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomSwiper></HomSwiper>
    <HomeIcon></HomeIcon>
    <HomeRecommended></HomeRecommended>
  </div>

</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomSwiper from './components/HomSwiper'
import HomeIcon from './components/HomeIcon'
import HomeRecommended from './components/Recommended'
export default {
  name:'Home',
  components:{
    HomeHeader,
    HomSwiper,
    HomeIcon,
    HomeRecommended
  }
}
</script>

<style>

</style>
