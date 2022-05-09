#### ES6总结

1. ES6模块化语法
   1. 默认导出：export default
   2. 默认导入：import  xxx from 'xxx'
   3. 按需导出：export  xxx
   4. 按需导入：import {xxx} from 'xxx'
2. 使用Promise解决回调地狱
   1. promise.then()：通过此方法指定成功和失败的回调函数
   2. promise.catch()：通过此方法来捕获promise所产生的错误
3. 使用async/await简化Promise的调用
   1. 方法中用到了await则必须使用async来修饰，使用后不需要通过promise.then来获取结果
4. 描述EventLoop
   1. EventLoop示意图
5. 了解宏任务与微任务
   1. 在执行下一个宏任务之前先检查是否有待执行的微任务，如果有先执行微任务