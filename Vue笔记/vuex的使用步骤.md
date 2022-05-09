#### vuex的使用步骤

1. 下载vuex的依赖npm i vuex@3.6.2

2. 在main.js中的new Vue中加上store属性

3. 新建store文件夹创建index.js来管理vuex的相关配置（也可在index.js中通过model导入js文件来进行，模块化相关配置）

4. 在main.js中引入store下的index.js文件

5. 在定义属性的页面中eg:isCollapse的computed中定义属性来返回index中的state属性

6. isCollapse(){

   ​    return this.$store.state.tab.isCollapse

      }

   7.在需要绑定属性的页面中定义方法并通过this.$store.commit('mutations中定义的值')来拿到相应的值

