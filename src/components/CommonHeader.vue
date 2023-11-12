<template>
<header>
    <div class="l-content">
    <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
    <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{path:item.path}" v-for="item in tags" :key="item.path">{{item.label}}</el-breadcrumb-item>
</el-breadcrumb>  
  </div>
  <div class="r-content">
      <el-dropdown szie="mini" trigger="click">
        <span>
          <img :src="userImg" class="user">
        </span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="returnhome">个人中心</el-dropdown-item>
        <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
  </el-dropdown-menu>
      </el-dropdown>
  </div>  
</header>

</template>

<script>
import {mapState} from 'vuex'
export default {
      data() {
        return {
          userImg:require('@/assets/images/logo.jpg')
        }
      },
      methods:{
        handleMenu(){
          this.$store.commit('collapseMenu')
        },
        logOut(){
          // this.$store.commit('clearToken')
          // this.$store.commit('clearMenu')
          this.$router.push('/login')
          localStorage.clear()
        },
        returnhome(){
           this.$router.replace('/setting')
           
          
        }
      },
      computed:{
        ...mapState({
          tags: state =>state.tabsList
        })
      }
}
</script>

<style lang="less" scoped>
 header{
   display: flex;
   height: 100%;
   justify-content: space-between;//均匀排列每个元素首个元素放置于起点，末尾元素放置于终点 
   align-items: center;//水平居中对齐弹性盒的各项 <div> 元素：
 }
 .l-content{
   display: flex;
   align-items: center;
   .el-button{
     margin-right: 20px;
   }
 }
 .r-content{
   .user{
     width: 40px;
     height: 40px;
     border-radius: 50%;//使图片变为圆形
   }
 }
</style>