<template>
  <div class="header">
    <div class="header-left"><i class="iconfont">&#xe606;</i></div>
    <div class="header-input">
      <i class="iconfont">&#xe617;</i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <i class="iconfont arr-icon">&#xe688;</i>
    </div>
  </div>
</template>
<script>
export default {
  name:'HomeHeader'
}
</script>
<style lang='stylus' scoped>
  @import '~@/assets/style/varibles.styl';
  .header 
    display:flex
    line-height: .86rem
    background:$bgColor
    color:#fff
    .header-left
      width:0.64rem
      float:left
      margin-left:.2rem
    .header-input
      flex:1
      height 0.64rem
      line-height 0.64rem
      margin:.12rem 0
      margin-left:.2rem
      background:#ffffff
      border-radius:.1rem
      color:#ccc
      padding:0 .3rem
      box-sizing:border-box
    .header-right
      width:1.24rem
      float:right
      text-align:center
      .arr-icon
        margin-left:-.04rem
        font-size:.24rem
</style>


