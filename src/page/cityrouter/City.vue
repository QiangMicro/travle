<template>
  <div>
    <CityHeader></CityHeader>
    <CitySwitch></CitySwitch>
    <CityList :hotCities='hotCities' :cities='cities' :letter='letter' ></CityList>
    <List :cities='cities' @change="hadChegeItem"></List>
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
  // 子组件里的数据必须是函数，
  data(){
    return{
      // 热门城市
      hotCities:[],
      // 按字母分城市
      cities:{},
      // 点击字母到指定区域
      letter:""
    }
  },
  components:{
    CityHeader,
    CitySwitch,
    CityList,
    List
  },
  methods:{
    getCityAxios(){
      axios.get('/api/city.json')
        .then(this.getAxiosRes)
    },
    getAxiosRes(res){
      res=res.data
      if(res.ret && res.data){
        this.cities=res.data.cities,
        this.hotCities=res.data.hotCities
      }  
    },
    // letter为子组件传过来的值
    hadChegeItem(letter){
      this.letter=letter
    }
    
  },
  mounted(){
    this.getCityAxios()
  }
}
</script>
<style lang="stylus" scoped>

</style>


