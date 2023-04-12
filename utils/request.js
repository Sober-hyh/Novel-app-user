// const BASE_URL = 'http://localhost:80'
const BASE_URL = 'http://123.60.144.177'
// const BASE_URL = 'https://4s20r88048.zicp.fun'

export const request = (options => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			header: {
				token: uni.getStorageSync('token') ? uni.getStorageSync('user').token : '',
				"content-type" : "application/x-www-form-urlencoded"
			},
			data: options.data || {},
			success: (res) => {
				const data = res.data
				
				resolve(data)
			},
			fail:(error)=>{
				console.log(error)
				reject(error)
			}
		})
	})
})
const uploadRequest=(options)=>{
 return new Promise((resolve,reject)=>{
  uni.uploadFile({
   url:Base.BASE_URL+options.url,
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
export default{
	uploadRequest
}
