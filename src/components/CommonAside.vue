<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :default-active="activeIndex"
  >
    <h3>{{isCollapse ? '后台' : '通用后台管理系统'}}</h3>
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :key="item.path"
      :index="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu :index="item.path + ''" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group >
        <el-menu-item @click="clickMenu(subItem)"  v-for="subItem in item.children" :key="subItem.path" :index ="subItem.path">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
      activeIndex:"/"
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.activeIndex = item.path
      this.$router.push({
        name: item.name
      });
      this.$store.commit("selectMenu", item);
    }
  },
  computed: {
    noChildren() {
      return this.asyncMenu.filter(item => !item.children);
    },
    hasChildren() {
      return this.asyncMenu.filter(item => item.children);
    },
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    asyncMenu() {
      return this.$store.state.menu;
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
}
</style>