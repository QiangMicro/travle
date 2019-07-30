<template>
  <div>
    <CityHeader></CityHeader>
    <CitySwitch></CitySwitch>
    <CityList></CityList>
  </div>
</template>
<script>
import CityHeader from '../cityrouter/components/CityHeader'
import CitySwitch from '../cityrouter/components/CitySwitch'
import CityList from '../cityrouter/components/CityList'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySwitch,
    CityList
  }
}
</script>
<style lang="stylus" scoped>

</style>


