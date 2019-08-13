vue项目总结

一、目录总结

  1、main.js：项目入口文件

  2、以.vue为后缀是单文件组件，包括：template、script与style

二、路由：根据不同网址显示不同页面

  router-view 当前路由地址所对应的内容

三、多页应用与单面应用

  1、多页应用通过返回HTML来显示不同页面，优点：首屏显示快、seo效果好；缺点：页面间切换慢

  2、单页应用通过动态js来显示不同页面，优点：页面间切换快，缺点：首屏显示慢、seo效果差

  针对多页应用与单页应用的不同，vue提倡使用单页应用来编写

四、css预处理器：定义了一种新的语言将Css作为目标生成文件，有less、Sass以及styl, stylus书写如下：

  <style lang='stylus' scoped></style> scoped为了避免样式被复用

五、安装轮播图插件vue-awesome-swiper   具体使用方法见链接：https://blog.csdn.net/u014027876/article/details/81663080

六、BetterScroll第三方模块的使用

七、Vuex使用：单向数据流

八、keep-alive:是vue抽象组件，用来对组件进行缓存，节省性能，不会形成真实Dom渲染到页面上 activated,deactivated

九、递归组件：组件自身调用其组件，适用于二级菜单

十、动态获取ID，{params:{d:this.$route.params.id}}

十一、前后端联调：使用proxyTable: {
      '/api':{
        target:'http://localhost:8080'
      }
      target后写IP地址或是域名

十二、打包上线：npm run build对原代码进行编辑，生成能被浏览器运行并且是压缩过后的代码  Build complete.提示打包成功，生成dis文件夹，将dis文件夹放到后台根目录即可

十三、异步组件：需要什么组件加载什么组件，app组件过大时再使用异步组件

真机调式：查看本机IP地址，修改package.json文件即可实现要当手机与项目在同一wifi内实现真机调式

注意：
  
  1、轮播显示隐藏后在计算宽度时会出现问题，需要做出修改：observeParents:true,observer:true
