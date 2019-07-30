<template>
  <div class="switch">
    <div class="mp-tab-com">
      <ul >
        <li class="active" >境内</li>
        <li>境外·港澳台</li>
      </ul>
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
      color: #fff
      ul
        border: 1px solid #fff;
        border-radius: .03rem;
        zoom: 1;
        overflow: hidden
        li
          width: 50%;
          float: left;
          text-align: center;
          background-color: #00bcd4;
          font-size: .28rem;
          color: #fff;
        .active
          background-color: #fff;
          color: #00bcd4;
</style>

