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
import axios from 'axios'
export default {
  name:'Home',
  components:{
    HomeHeader,
    HomSwiper,
    HomeIcon,
    HomeRecommended,
    HomeWeeked
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/Homedata.json')
        .then(this.getHomeJson)
        .catch(()=>{console.log('数据请求失败')})
    },
    getHomeJson(res){
      console.log(res)
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
