<template>
  <div class="header">
    城市选择   
      <router-link to='/'>
        <div class="iconfont header-back">&#xe606;</div>
      </router-link>
    </div>    
    
  </div>
</template>
<script>
export default {
  name:"CityHeader"
}
</script>
<style lang="stylus" scoped>
 @import '~@/assets/style/varibles.styl';
  .header 
    position relative
    overflow hidden
    height: $headerHeit
    line-height: $headerHeit
    background:$bgColor
    color:#fff
    text-align:center
    font-size:.32rem
    padding: 0 .2rem
    box-sizing:border-box
    .header-back
      position:absolute
      top:0
      widows 0.64rem
      text-align:center
      font-size:.4rem
      color:#ffffff
</style>


