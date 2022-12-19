import Vue from 'vue'
import store from './store'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// require("@/commons/request.js")(app);
// //导入utils小工具
import utils from "commons/utils.js";
Vue.use(utils,app);
// Vue.prototype.staticServer = "http://hyh-demo.top/";
// Vue.prototype.checkLogin = function(backpage, backtype){
// 	var SUID  = uni.getStorageSync('SUID');
// 	var SRAND = uni.getStorageSync('SRAND');
// 	var SNAME = uni.getStorageSync('SNAME');
// 	var SFACE = uni.getStorageSync('SFACE');
// 	if(SUID == '' || SRAND == '' || SFACE == ''){
// 		uni.redirectTo({url:'../login/login?backpage='+backpage+'&backtype='+backtype});
// 		return false;
// 	}
// 	return [SUID, SRAND, SNAME, SFACE];
// }