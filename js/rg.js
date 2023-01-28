import  Base  from "./config.js"
const RJrequest = (options)=>{
		return new Promise((resolve,reject)=>{
			uni.request({				
						// url: Base.BASE_URL+"user"+"/"+options.url+"/"+options.parm,
						url:Base.BASE_URL+options.url+options.parm,
						// url:"http://127.0.0.1:8282/socialcoco/user/enroll",
			      // 默认值GET，如果有需要改动，在options中设定其他的method值
						data:JSON.stringify(options.data),
						method: options.method || 'GET',
						header:{
							token:options.token
						},
						
						success: (res) => {
							console.log(res);// 控制台显示数据信息
							if(res.data.status==401){
								uni.showToast({
									icon:"loading",
									title:"登录已失效，请重新登录",
									success(res) {
										setTimeout(()=>{
										uni.redirectTo({
											url:"../login/index"
										})
										},2000)
									}
								})
								
							}
							resolve(res)
						},
						fail: (err) =>{
							// 页面中弹框显示失败
							uni.showToast({
								icon:'error',
								title: '请求接口失败'
							})
							// 返回错误消息
							reject(err)
							console.log()
						},
						catch:(e)=>{
							console.log(e);
						}
					})
		})
}
const uploadRequest=(options)=>{
 return new Promise((resolve,reject)=>{
  uni.uploadFile({
   url:Base.BASE_URL+options.url+options.parm,
   // files:,
   filePath: options.paths,
   name:'file',
     //后台接收字段名
   formData:{
    "id":'',
    "employeeId":options.employeeId,
    "text": options.text,
    "url":'',
    "createTime":'',
    "updateTime":''
    
   },
   header:{
    token:options.token
   },
   success: (res) => {
   console.log(res);// 控制台显示数据信息
   resolve(res)
   
    
   },
   fail:(err)=>{
    console.log('请求失败_______________',err)
    reject(err)
   }
  })
 })
}
const diaryRequest=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			method:"get"
		})
	})
}
const getToken=(options)=> {
  const token = uni.getStorageSync("token");
  if (token == "" || token == null) {
		uni.showToast({
			icon:"loading",
			title:"请登录",
			
		})
  }
  return token;
}
const setToken=(token)=> {
  uni.setStorageSync("token", token);
}
const like=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:Base.BASE_URL+"user/"+options.url,
			method:'POST',
			data:{
				"uid":options.uid,
				"dzid":options.dzid,
			},
			header:{
				token:options.token
			},
			success: (res) => {
				console.log(res);// 控制台显示数据信息
				resolve(res)
			},
			fail: (err) =>{
				// 页面中弹框显示失败
				uni.showToast({
					title: '请求接口失败'
				})
				// 返回错误消息
				reject(err)
			},
			catch:(e)=>{
				console.log(e);
			}
		})
	})
}
export default{
	RJrequest,
	uploadRequest,
	setToken,
	getToken,
	like
}



