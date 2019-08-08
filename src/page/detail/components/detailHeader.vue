<template>
  <div>
    <router-link 
      tag='div' 
      to='/' 
      class="header-abs"
      v-show='showAbc'
    >
      <i class="iconfont header-abs-back">&#xe606;</i>
    </router-link>
    <div 
      class="header-fixed" 
      v-show='!showAbc'
    >
      景点详情
      <router-link to='/'>
        <div class="iconfont header-fixed-back">&#xe606;</div>
      </router-link>
    </div>

  </div>
</template>
<script>
export default {
  name:'DetailHeader',
  data(){
    return{
      showAbc:true
    }
  },
  methods:{
    hadleScroll(){
      console.log(document.documentElement.scrollTop)
    }
  },
  activated(){
    window.addEventListener('scroll',this.hadleScroll)
  }
}
</script>
<style lang="stylus" scoped>
 @import '~@/assets/style/varibles.styl';
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    line-height .8rem
    text-align center
    background rgba(0,0,0,.5)
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header-fixed
    position fixed 
    top 0
    left 0
    right 0
    height: $headerHeit
    line-height: $headerHeit
    background:$bgColor
    color:#fff
    text-align:center
    font-size:.32rem
    box-sizing:border-box
    .header-fixed-back
      position:absolute
      top:0
      widows 0.64rem
      text-align:center
      font-size:.4rem
      color:#ffffff
    
</style>


