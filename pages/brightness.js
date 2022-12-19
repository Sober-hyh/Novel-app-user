let Brightness=null

const getBrigthness = function(callbck) {
	uni.getScreenBrightness({ 
		success: res => {
			Brightness=res.value
			callbck(res.value*100)
		}
	})
}
const setBrigthness = function(data,type,callbck) {
	uni.setScreenBrightness({ 
		value:type?Brightness:data/100,
		success: res => {
			if(type){
				callbck(Brightness*100)
			}else{
				callbck(data)
			}
		}
	})
}

export default {
	getBrigthness,
	setBrigthness
}
