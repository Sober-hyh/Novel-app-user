// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		/* config 为默认全局配置*/
		config.baseURL = 'http://localhost:80'; /* 根域名 */
		config.header ={"content-type":'application/x-www-form-urlencoded'};
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
		config.data = config.data || {}
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		// if (config?.custom?.auth) {
		// 	// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
		// 	config.header.token = vm.$store.state.userInfo.token
		// }
		uni.showLoading({
			title: '加载中'
		})
		return config
	}, config => { // 可使用async await 做异步操作
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		/* 响应成功*/
		//状态小于300
		uni.hideLoading();
		const data = response.data
		return data;
	}, (response) => {
		// 响应错误做点什么 （statusCode !== 200）
		//状态码大于300
		//判断常用的错误情况，并分别进行处理		
		uni.hideLoading();
		const {
			data,
			statusCode
		} = response; //解构数据
		if (statusCode == 401) {
			//表示未授权，需要重新登录
			if(data.mesage="Unauthorized"){
				uni.$u.toast('用户名或密码错误');
				uni.clearStorageSync();	
			}
			else{
				uni.$u.toast('当前用户未授权，请登录');
				setTimeout(() => {
					uni.$u.route({
						type: 'redirect',
						url: '/pages/login/login'
					})
				}, 1500)
			}			
		} else if (statusCode == 408) {
			uni.$u.toast(' 请求超时');
		}else if(statusCode == 422){
			uni.$u.toast('请求参数未通过验证。' + JSON.stringify(data.errors));
		}
		else {
			uni.$u.toast(data.message);			
		}
		return false;
		//return Promise.reject(response)
	})
}
