<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomSwiper :swiperList='swiperList'></HomSwiper>
    <HomeIcon :iconList='iconList'></HomeIcon>
    <HomeRecommended :Recommendlist='Recommendlist'></HomeRecommended>
    <HomeWeeked :Weeklist='Weeklist'></HomeWeeked>
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
  data(){
    return{
      swiperList:[],
      iconList:[],
      Recommendlist:[],
      Weeklist:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/Homedata.json')
        .then(this.getHomeJson)
        .catch(()=>{console.log('数据请求失败')})
    },
    getHomeJson(res){
      res=res.data
      console.log(res)
      // 判断城市显示与否   判断res是否请求成功，并且数据里有city属性
      if(res.rest ){
        this.swiperList=res.data.swiperList,
        this.iconList=res.data.iconList,
        this.Recommendlist=res.data.Recommendlist,
        this.Weeklist=res.data.Weeklist
      }
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
