<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomSwiper></HomSwiper>
    <HomeIcon></HomeIcon>
  </div>

</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomSwiper from './components/HomSwiper'
import HomeIcon from './components/HomeIcon'
export default {
  name:'Home',
  components:{
    HomeHeader,
    HomSwiper,
    HomeIcon
  }
}
</script>

<style>

</style>
