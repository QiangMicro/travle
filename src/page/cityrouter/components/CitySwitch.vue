<template>
  <div class="switch">
    <div class="mp-tab-com">
      <input type="text" placeholder="城市搜索" class="inputs">
    </div>
    
  </div>
</template>
<script>
export default {
  name:'CitySwitch',
  data:function(){
    return{
      show:true
    }
  }
}
</script>
<style lang="stylus" scoped>
 @import '~@/assets/style/varibles.styl';
  .switch
    display:block
    height 0.76rem
    background:$bgColor
    text-align:center
    .mp-tab-com
      height: .4rem;
      line-height: .4rem;
      background-color: #00bcd4;
      padding: .2rem 1rem;
      color: #666
      .inputs
        padding .05rem 
        display block
        width 90%
</style>

