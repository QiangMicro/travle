<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomSwiper></HomSwiper>
    <HomeIcon></HomeIcon>
    <HomeRecommended></HomeRecommended>
    <HomeWeeked></HomeWeeked>
  </div>

</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomSwiper from './components/HomSwiper'
import HomeIcon from './components/HomeIcon'
import HomeRecommended from './components/Recommended'
import  HomeWeeked from './components/weeked'
export default {
  name:'Home',
  components:{
    HomeHeader,
    HomSwiper,
    HomeIcon,
    HomeRecommended,
    HomeWeeked
  }
}
</script>

<style>

</style>
