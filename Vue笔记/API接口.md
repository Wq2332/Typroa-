#### API接口

实现步骤

1.搭建项目基本结构

2.创建基本的服务器

3.创建db数据库操作模块

4.创建user_ctrl业务模块

5.创建user_router路由模块

1. 启用ES6模块化支持（搭建基本结构）
   1. 在package.json中声明“type”：“moudel”
   2. 安装依赖包： npm i express@4.17.1 mysql2@2.2.5

 2. 创建基本服务器

    1. 新建app.js，写入

       import express from 'express'

       const app = express()

    2. app.listen(80,() => {

       ​	console.log('server running at http://127.0.0.1')

       })

 3. 创建db数据库模块

    1. db/index.js

       import mysql fron 'mysql2'

       const pool = mysql.createPool({

       ​		host:'127.0.0.1'

       ​		port:3006

       ​		database:'my_db_01'			//要操作的数据库名称

       ​		user:'root'								//登录数据库的用户名

       ​		password:'123456'				//登录数据库的密码

       })

       export default pool.promise()				//默认导出一个支持Promise API的pool

 4. 创建user_crtl模块

    1. 新建controller/user_crtl.js

       import  db from '../db/index.js'

       export async function getAllUser(req, res) {

       //		db.query函数的返回值是promise的实例对象，因此使用async/await进行简化

       ​		const [rows]  =await  db.query('select id , username , nickname from ev_users')

       ​		res.send({

       ​			status:0,

       ​			message:'获取用户列表数据成功！‘

       ​			data:rows

       ​			})

       }

 5. 创建并使用user_router路由模块

    1. 新建router/user_router.js

       import express from 'express'

       import {getAllUser} from '../controller/user_ctrl.js'   		//从user_ctrl.js中导入getAllUser函数

       //创建路由对象
       const router = new express.Router()

       //路由挂载规则
       router.get('/user',getAllUser)

       //使用ES6导出语法，将路由对象共享
       export default router

 6. 在之前创建的服务器app.js中挂载路由

    1. import userRouter from './router/user_router.js'

       app.use('/api',userRouter)