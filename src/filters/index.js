/*
自定义过滤器模块
 */
import moment from 'moment'
import Vue from 'vue'

Vue.filter('date-format', function (value, format='YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(format)
})
