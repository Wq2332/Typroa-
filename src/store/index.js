import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    isCollapse: false,
    tabsList: [{
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'home'
    }],
    currentMenu: null,
    menu:[{
      path:'/',
      name:'home',
      label:'首页',
      icon:'s-home',
      url:'Home/Home'
    },{
       path:'/mall',
      name:'mall',
      label:'配置明细',
      icon:'video-play',
      url:'MallManage/MallManage'
    },{
       path:'/user',
      name:'user',
      label:'用户管理',
      icon:'user',
      url:'UserManage/UserManage'
    },{
      label:'其他',
      icon:'location',
      children:[
        {
          path:'/page1',
          name:'page1',
          label:'页面1',
          icon:'setting',
          url:'Other/PageOne'
        },{
           path:'/page2',
          name:'page2',
          label:'页面2',
          icon:'setting',
          url:'Other/PageTwo'
        }
      ]
      }, {
        path: '/setting',
        name: 'setting',
        label: '个人中心',
        icon: 'setting',
        url: 'Setting/Setting'
      }]
  },
  getters: {
  },
  mutations: {
    setToken(state, val) {
      state.token = val
      Cookie.set('token', val)
  },
  clearToken(state) {
  },
  getToken(state) {
  },
  collapseMenu(state) {
    state.isCollapse = !state.isCollapse
},
selectMenu(state, val) {
    if (val.name !== 'home') {
        state.currentMenu = val
        const result = state.tabsList.findIndex(item => item.name === val.name)
        if (result === -1) {
            state.tabsList.push(val)
        }
    } else {
        state.collapseMenu = null
    }
},
closeTag(state, val) {
    const result = state.tabsList.findIndex(item => item.name === val.name)
    state.tabsList.splice(result, 1)
},
setMenu(state, val) {
    state.menu = val
    Cookie.set('menu', JSON.stringify(val))
},
clearMenu(state) {
    state.menu = []
    Cookie.remove('menu')
},
addMenu(state, router) {
    if (!Cookie.get('menu')) {
        return
    }
    const menu = JSON.parse(Cookie.get('menu'))
    state.menu = menu
    const menuArray = []
    menu.forEach(item => {
        if (item.children) {
            item.children = item.children.map(item => {
                item.component = () =>
                    import (`@/views/${item.url}`)
                return item
            })
            menuArray.push(...item.children)
        } else {
            item.component = () =>
                import (`@/views/${item.url}`)
            menuArray.push(item)
        }
    });
    //动态路由添加
    menuArray.forEach(item => {
        router.addRoute('Main', item)
    })
}
  },
  actions: {
  },
  modules: {
  }
})
