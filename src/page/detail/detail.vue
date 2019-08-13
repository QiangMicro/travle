<template>
  <div>
    <Banner></Banner>
    <DetailHeader></DetailHeader>
    <div class="contnet">
      <DetailList :list='list'></DetailList>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner'
import DetailHeader from './components/detailHeader'
import DetailList from './components/list'
export default {
  name:'Detail',
  components:{
    Banner,
    DetailHeader,
    DetailList
  },
  data(){
    return{
      list:[{
        title:'成人票',
        children:[
          {
            title:'成人三馆联票',
             children:[
               {title:'成人三馆联票——北京连锁店'}
             ]
          },{
            title:'成人五馆联票'
          },
        ]
      },{
        title:'学生票'
      },{
        title:'儿童票'
      },{
        title:'特惠票'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .contnet
    height 50rem
</style>


