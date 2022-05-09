# 小程序hover-class点击态效果实现

​	微信小程序设置 hover-class，实现点击态效果

**增强小程序触感，提高用户交互感知度**

概念及注意事项

微信小程序中，可以用 hover-class 属性来指定元素的点击态效果。但是在在使用中要注意，大部分组件是不支持该属性的。

- 目前支持 hover-class 属性的组件有三个：view、button、navigator。
- 不支持 hover-class 属性的组件，同时也不支持 hover-stop-propagation、hover-start-time、hover-stay-time 这三个属性。
- 当 hover-class 的值为 none 时，组件上不会有任何点击态效果。

![clipboard.png](https://img.jbzj.com/file_images/article/201902/2019022610092810.png)

注意事项

- hover-class样式显示的原理是 点击时把样式加到class的样式中，冲突时，谁在后面就显示谁!
- 当组件中没有任何指定的类时，直接使用 hover-class 就会起到相应的作用，但是当组件中已经指定了其他可能与 hover-class 冲突的类时，hover-class 无效
- 将 hover-class 指定的类放在对应 wss 文件的最末尾，这样就不会被其他类所覆盖
- 通常，当一个 view 组件中包含 image 等不支持 hover-class 的组件，但又需要在该组件上使用 hover-stop-propagation 属性的作用时，需要将不支持 hover-class 的组件用view、button 或 navigator 包裹起来

**使用场景**

**1.列表页——详情页（点击跳转）**

以新闻资讯为例，大部分应该都是这样的

![clipboard.png](https://img.jbzj.com/file_images/article/201902/2019022610092811.png)

点击效果如下图

![clipboard.png](https://img.jbzj.com/file_images/article/201902/2019022610092912.png)

**2.展示类表格列表（不触发跳转）**

可设置hover-stay-time属性，突出显示触摸行或列

![clipboard.png](https://img.jbzj.com/file_images/article/201902/2019022610092913.png)

**3.提交类按钮**

1种样式往往不能满足，各种形状的按钮，暂提供以下2种参考

![clipboard.png](https://img.jbzj.com/file_images/article/201902/2019022610092914.gif)

![clipboard.png](https://img.jbzj.com/file_images/article/201902/2019022610093015.gif)

上图以长矩形按钮为例，采用scale整体缩放效果显然不佳

![clipboard.png](https://img.jbzj.com/file_images/article/201902/2019022610093016.gif)

圆形按钮显然更合适对于同页面等待请求返回的按钮，配合 disabled 属性，使用加载中按钮的方案更为合理

**4.有待考量的场景**

选择类按钮，特指点击切换某些状态，会有及时的状态切换响应的，如遮罩层、active类导航图标类，首页的图标导航我认为以上无需添加hover类