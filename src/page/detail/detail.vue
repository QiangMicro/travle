<template>
  <div>
    <Banner 
      :sightName='sightName'
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'
    ></Banner>
    <DetailHeader ></DetailHeader>
    <div class="contnet">
      <DetailList :list='list'></DetailList>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner'
import DetailHeader from './components/detailHeader'
import DetailList from './components/list'
import axios from 'axios'
export default {
  name:'Detail',
  components:{
    Banner,
    DetailHeader,
    DetailList
  },
  data(){
    return{
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list:[]
    }
  },
  methods:{
    getDetailAxios(){
      // axios.get('/api/detail.json?id='+'this.$route.params.id')
      axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      })
        .then(this.getStade)
    },
    getStade(res){
      res=res.data
      if(res.ret&&res.data){
        this.sightName=res.data.sightName,
        this.bannerImg=res.data.bannerImg,
        this.gallaryImgs=res.data.gallaryImgs,
        this.list=res.data.categoryList
      }
    }
  },
  mounted(){
    this.getDetailAxios()
  }
}
</script>
<style lang="stylus" scoped>
  .contnet
    height 50rem
</style>


