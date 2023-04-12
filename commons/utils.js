const install =(Vue,vm)=>{

	const getMobileInfo = ()=>{
	
		      // 胶囊按钮信息
		      const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
		      // 手机信息
		      const mobileInfo = uni.getSystemInfoSync();
		      /* 注
		       * screenHeight是指手机屏的高度：对应图中1
		       * windowHeight是指页面可用高度
		       * 图中导航栏是自定义的，windowHeight = screenHeight - tabbar高度：对应图中2
		       * 若导航栏不是自定义的，则windowHeight = screenHeight- tabbar高度 - 导航栏高度
		       * 如页面没有tabbar， 则windowHeight = screenHeight- 导航栏高度
		       */
		      // 按钮与手机状态栏之间的间隙： 对应图中3
		      const menuButtonMaginTopBottom =
		        menuButtonInfo.top - mobileInfo.statusBarHeight;
		      // 按钮的border
		      const border = 1;
		      // 包含分享按钮的容器高度：图中蓝色区域部分
		      const menuButtonContainerHeight =
		        menuButtonInfo.height + border * 2 + menuButtonMaginTopBottom * 2;
		      //页面头的高度（包含手机状态栏）：图中绿色区域+蓝色区域部分
		      const pageHeaderHeight =
		        mobileInfo.statusBarHeight + menuButtonContainerHeight;
		      return  {
		        // 按钮右侧距离手机屏右侧距离，图中用于设置自定义导航栏的宽；这里注意menuButtonInfo.right是指按钮右边界距离手机屏左侧的位置
				a:'按钮右侧距离手机屏右侧距离',
		        menuButtonRight: mobileInfo.windowWidth - menuButtonInfo.right,
		        // 按钮左侧距离手机屏左侧距离
		        menuButtonLeft: '按钮左侧距离手机屏左侧距离' + menuButtonInfo.left,
		        // 按钮宽
				b:'按钮宽',
		        menuButtonWidth: menuButtonInfo.width,
		        // 屏幕宽
		        windowWidth: mobileInfo.windowWidth,
		        // 高度相关
		        statusBarHeight: mobileInfo.statusBarHeight,
		        menuButtonContainerHeight,
		        pageHeaderHeight,
		        windowHeightWhennoBar: mobileInfo.screenHeight - pageHeaderHeight,
		     }
	}
	const isLogin = ()=>{
		const userinfo = uni.getStorageSync('userinfo');
		// console.log(getCurrentPages());
		if(userinfo.name == "" || userinfo == null || userinfo == undefined || userinfo == ""){
			return false
		}else{
			return true;
		}
		
	}
	const UnixToDate = (unixTime, isFull, timeZone) =>{
            if (typeof (timeZone) == 'number') {
                unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
            }
            var time = new Date(unixTime * 1000);
            var ymdhis = "";
            ymdhis += time.getUTCFullYear() + "-";
            ymdhis += (time.getUTCMonth() + 1) < 10 ? '0' + (time.getUTCMonth() + 1) + "-" : (time.getUTCMonth() + 1) + "-";
            ymdhis += time.getUTCDate() < 10 ? '0' + time.getUTCDate() : time.getUTCDate();
            if (isFull === true) {
                ymdhis += " " + time.getUTCHours() < 10 ? ' 0' + time.getUTCHours() + ":" : " " + time.getUTCHours() + ":";
                ymdhis += time.getUTCMinutes() < 10 ? '0' + time.getUTCMinutes() + ":" : time.getUTCMinutes() + ":";
                ymdhis += time.getUTCSeconds() < 10 ? '0' + time.getUTCSeconds() : time.getUTCSeconds();
            }
            return ymdhis;
        }
      
	const shiftTimeStamp = (time) => {
        // time /= 1000; 如果传进来的是 毫秒 形式，则在这里除1000将其转为 秒 形式
   		function f_m_dispose(min, sec) { // 分秒处理函数
			if (min < 10 && sec < 10) {
				return "0" + min + "分" + "0" + sec + '秒'; // 如果分和秒都小于10，则前面都加入0
			} else if (min < 10 && sec >= 10) {
				return "0" + min + "分" + sec + '秒'; // 如果分小于10，秒大于10，则给分前面加0
			} else if (min >= 10 && sec < 10) {
				return min + "分" + "0" + sec + '秒'; // 如果分大于10，秒小于10，则给秒前面加0
			} else {
				return min + "分" + sec + '秒'; // 如果分秒都大于10，则直接return 
			}
		}
		let hour = Number.parseInt(time / 3600); // 获取总的小时
        let min = Number.parseInt((time - hour * 3600) / 60); // 获取总分钟
        let sec = time - (hour * 3600) - (min * 60); // 减去总 分 后剩余的分秒数
        if (!hour) { // 小时为0时
	        return f_m_dispose(min, sec);
        } else { // 小时大于0的处理
	        if (!min) { // 分为0时
			    // 如果秒也小于10，则返回 例1:00:07
				return sec < 10 ? hour + "时"  + "0" + sec : hour + "时"  + sec + '秒';
			} else { // 有分钟时的处理
				return hour + "时" + f_m_dispose(min, sec); // 返回总小时加上处理好的分秒数
			}
        }

	}

	vm.$u.utils = {
		getMobileInfo,
		isLogin,
		UnixToDate,
		shiftTimeStamp
	}
}
export default{
	install
}