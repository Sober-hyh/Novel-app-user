const BASE_URL = 'http://localhost:80'
// const BASE_URL = 'http://192.168.137.1:80'
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

