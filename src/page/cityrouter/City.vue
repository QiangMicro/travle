<template>
  <div>
    <CityHeader></CityHeader>
    <CitySwitch></CitySwitch>
    <CityList :hotCities='hotCities' :cities='cities'></CityList>
    <List :cities='cities'></List>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from '../cityrouter/components/CityHeader'
import CitySwitch from '../cityrouter/components/CitySwitch'
import CityList from '../cityrouter/components/CityList'
import List from '../cityrouter/components/list'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySwitch,
    CityList,
    List
  },
  data(){
    return{
      // 城市
      hotCities:[],
      // 字母区分
      cities:{}
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json')
        .then(this.getCitydate)
    },
    getCitydate(res){
      res=res.data
      if(res.data && res.ret){
        this.hotCities=res.data.hotCities,
        this.cities=res.data.cities
      }
    }
  },
  mounted(){
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>

</style>


