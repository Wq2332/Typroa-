#### Vue3新特性

1. setup函数：setup函数的执行时机，在传统vue2生命周期之前

2. 只有在setup里定义的数据并且被return挂在才能被访问到

3. 定义响应式的数据需要使用ref（基本数据类型）和reactive（对象）来使数据变成响应式

4. vue2与vue3的响应式原理对比！！！

   1. vue2中

      1. 对象是通过defineProperty对对象已有属性值的读取和修改进行劫持 
      2. 数组是通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持   
         Object.defineProperty（data,'count'，{

      ​		get(){}

      ​		set(){}	
      }）

   2. 问题

      1. 对象直接添加属性或者删除已有属性，界面不会自动更新，因为只有get与set方法
      2. 直接通过下标替换元素或者更新长度，界面不会自动更新

   3. vue3

      1. 通过const proxy = new proxy(target:目标对象,{

         ###### 	//获取目标对象的某个属性值

         ​				get(target,prop){

         ​				console.log('get方法调用')

         ​				return Reflect.get(target,prop)

         }

         ###### 	//修改或添加目标对象的属性值

         ​				set(target, prop, value){

         ​				console.log('调用了set方法');

            		     return Reflect.set(target, prop, value)

         }

         ###### 	//删除目标对象的某个属性值

         ​				deleteProperty(target, prop) {

         ​       		 console.log('调用了deleteProperty方法');

         ​     		   return Reflect.deleteProperty(target, prop)

         ​      }})函数，来获取目标对象的属性值，但是最后需要加入Reflect.get(target,prop)来返回获取到的属性值，否则的话获取不到返回的是undefined

   4. 因为set up(){}是在实例创建之前就存在的，所以setup中的this是undefined

   5. setup(){}中有两个参数，props与context，`setup` 函数中的第一个参数是 `props`。正如在一个标准组件中所期望的那样，`setup` 函数中的 `props` 是响应式的，当传入新的 prop 时，它将被更新。

      传递给 `setup` 函数的第二个参数是 `context`。`context` 是一个普通的 JavaScript 对象，它暴露三个组件的 property：attrs，slots，emit
