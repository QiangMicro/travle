<template>
  <div>
    <CityHeader></CityHeader>
    <CitySwitch></CitySwitch>
    <CityList></CityList>
    <List></List>
  </div>
</template>
<script>
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
  }
}
</script>
<style lang="stylus" scoped>

</style>


