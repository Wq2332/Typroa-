<template>
    <el-row class="home" :gutter="20">
      <el-col :span="8" style="margin-top:20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src=userImg>
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间: <span>2022-4-20</span></p>
            <p>上次登陆地点: <span>武汉</span></p>
          </div>
        </el-card> 
          <el-card style="margin-top:20px;height:440px">
                <el-table :data="tableData">
                  <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val">
                  </el-table-column>
                </el-table>
          </el-card>
       </el-col> 
       <el-col :span="16" style="margin-top:20px">
            <div class="num">
              <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                <i class="icon" :class="`el-icon-${item.icon} `" :style="{background: item.color}"></i>
                <div class="detail">
                  <p class="num">￥{{item.value}}</p>
                  <p class="txt">￥{{item.name}}</p>
                </div>
              </el-card>
            </div>
            <el-card style="height:260px">
                <div style="height:280px" ref="echarts"></div>
            </el-card>
            <div class="graph"> 
              <el-card style="height:260px" >
                <div style="height:240px;" ref="userEcharts"></div>
              </el-card>
              <el-card style="height:260px" >
                <div style="height:240px" ref="videoEcharts"></div>
              </el-card>
            </div>
       </el-col>
      </el-row>
</template>

<script>
// import { getData} from '@/api/data.js'
import *  as echarts from 'echarts'
export default {
  data() {
    return {
      userImg:require('@/assets/images/logo.jpg'),
      tableData: [],
      userData:[],
        tableLabel:{
          name:'品牌',
          todayBuy:'今日销售',
          monthBuy:'本月销售',
          totalBuy:'总销售'
        },
        countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],

    };
  },
  methods: {
    
  },
//   mounted(){
//     // getData().then(res =>{
//     //   console.log(res);
//     //  const {code, data} =res
//     //  if (code === 20000) {
//     //    this.tableData= data.tableData
//     //    this.userData =data.userData
//     //    const order = data.orderData
//     //    const keyArray = Object.keys(order.data[0])
//     //    const series =[]
//     //    keyArray.forEach(key=>{
//     //      series.push({
//     //        name:key,
//     //        data:order.data.map(item=>item[key]),//key是键，给item传入键返回value值
//     //        type:'line',
           
//     //      })
//     //    })
//       const option = {
//           tooltip: {
//           trigger: 'axis'
//         },
//          xAxis:{
//            data:order.date
//          },
//          yAxis:{
//             type:'value'
          
//          },
//          legend:{
//            data:keyArray
//          },
//          series
//        }
//         const E = echarts.init(this.$refs.echarts)
//         E.setOption(option)

//       const option0 = {
//      legend:{
//       textStyle:{
//         color:'#333'
//       }
//     },
//     grid:{
//       left:'20%'
//     },
//     tooltip:{
//       trigger:'axis'
//     },
//     xAxis: {
//     type: 'category',
//     data: data.userData.map(item => item.date),
//     axisLine:{
//       lineStyle:{
//         color:'#17b3a3'
//       }
//     },
//     axisLabel:{
//       interval:0,
//     color:'#333'
//     }
//   },
//   yAxis: {
//     type: 'value',
//     axisLine:{
//       lineStyle:{
//         color:'#17b3a3'
//       }
//     }
//   },
//   color:["#2ec7c9" ,"#b6a2de"],
//   series: [
//     {
//       name:'新增用户',
//       data: data.userData.map(item => item.new) ,
//       type: 'bar'
//     },
//     {
//       name:'活跃用户',
//       data:data.userData.map(item => item.active),
//       type:'bar'
//     }
//   ]
// };
//        const  E0 = echarts.init(this.$refs.userEcharts)
//        E0.setOption(option0)

//        const videoOption ={
//            tooltip: {
//             trigger: "item",
//           },
//           color: [
//             "#0f78f4",
//             "#dd536b",
//             "#9462e5",
//             "#a6a6a6",
//             "#e1bb22",
//             "#39c362",
//             "#3ed1cf",
//           ],
//           series: [
//             {
//               data:data.videoData,
//               type:'pie',
//             }
//           ],
//        }
//       const V = echarts.init(this.$refs.videoEcharts)
//       V.setOption(videoOption)
//      }
//     })
//   }
}
</script>

<style>

</style>