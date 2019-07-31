<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name:'List'
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl';
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top:1.66rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .34rem
      text-align center
      color $bgColor
</style>

