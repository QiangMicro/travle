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
