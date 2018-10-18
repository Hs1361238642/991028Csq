import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import {Button} from 'mint-ui'
import VueScroller from 'vue-scroller'
import 'swiper/dist/css/swiper.min.css'
import App from './App.vue'
import Split from "./components/Split/Split.vue"
import router from './router'
import store from './store'
import './filters'
import './mock/mockServer'  // 加载这个模块即可
import loading from './common/imgs/loading.gif'
import CartControl from './components/CartControl/CartControl.vue'

Vue.use(VueResource) // 所有组件对象都多了一个属性: $http(发送ajax请求)
Vue.use(VueLazyload, { // 内部会定义一个全局的指令: lazy
  loading
})
Vue.use(VueScroller) // 内部定义了一个全局的组件标签<scroller>

// 注册全局组件(映射成标签)
Vue.component("Split", Split)
Vue.component(Button.name, Button)
Vue.component('CartControl', CartControl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store
})
Vue.store = store
