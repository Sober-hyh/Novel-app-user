const getBattery = function(callback) {
	uni.getSystemInfo({
		success(res) {
			//#ifdef APP-PLUS
			if (res.platform === 'ios') {
				let UIDevice = plus.ios.import('UIDevice')
				let dev = UIDevice.currentDevice()
				if (!dev.isBatteryMonitoringEnabled()) {
					dev.setBatteryMonitoringEnabled(true)
				}
				let level = dev.batteryLevel() * 100 // 获取苹果手机电量  电量要*100
				let status = dev.batteryState()
				callback(level)
			} else if (res.platform === 'android') {
				let main = plus.android.runtimeMainActivity()
				let Intent = plus.android.importClass('android.content.Intent')
				let recevier = plus.android.implements(
					'io.dcloud.feature.internal.reflect.BroadcastReceiver', {
						onReceive: function(context, intent) {
							console.log('intent', intent)
							let action = intent.getAction()
							if (action == Intent.ACTION_BATTERY_CHANGED) {
								let level = intent.getIntExtra('level', -1) // 电量
								let status = intent.getIntExtra('status', -1) // 充电状态  状态为2代表充电
								callback(level)
							}
						}
					}
				)
			}
			//#endif

			//#ifdef H5
			navigator.getBattery().then(function(battery) {
				battery.addEventListener('chargingchange', function() {
					console(battery.charging ? '在充电' : '没在充电') //是否在充电
				})
				battery.addEventListener('dischargingtimechange', function(info) {
					console.log(info) //电池剩余时间改变时触发该事件
				})
				battery.addEventListener('levelchange', function(info) {
					console.log(info) //在电池电量水平改变时触发
				})
				callback(battery.level*100)
			})
			//#endif

			//#ifdef MP-WEIXIN
				wx.getBatteryInfoSync({
					success(ret){
						callback(ret.level)
						console.log('是否正在充电：', res.isCharging)
					}
				})
			//#endif
			
			//#ifdef MP-BAIDU
				swan.getBatteryInfo({
					success(ret){
						callback(ret.level)
						console.log('是否正在充电：', res.isCharging)
					}
				})
			//#endif
			
			//#ifdef MP-ALIPAY
				my.getBatteryInfo({
					success(ret){
						callback(ret.level)
						console.log('是否正在充电：', res.isCharging)
					}
				})
			//#endif
			
			
			//#ifdef MP-QQ
				qq.getBatteryInfoSync({
					success(ret){
						callback(ret.level)
						console.log('是否正在充电：', res.isCharging)
					}
				})
			//#endif
		}
	})
}

export default {
	getBattery
}
