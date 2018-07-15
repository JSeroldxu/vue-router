import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
//声明使用router插件
Vue.use(VueRouter);
//内部定义并注册了两个组件标签(router-link/router-view)
export default new VueRouter({
  //注册应用中所有的路由
  routes:[
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Message
        },
        {
          path:'',
          redirect:'/home/news'
        },
      ]
    },
    {//这里是重定向，指定第一次打开默认显示页面
      path:'/',
      redirect:'/about'   //重定向请求about
    }
  ]
})
