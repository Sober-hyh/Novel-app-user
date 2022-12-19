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
	

	vm.$u.utils = {
		getMobileInfo
	}
}
export default{
	install
}