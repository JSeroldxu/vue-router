//入口js
import Vue from 'vue'
import App from './App'
import router from './router' //默认index

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({//配置对象属性名都是一些确定的名称，不能随意修改
  el: '#app',
  components: { App },
  template: '<App/>',
  router  //注册路由器

})
