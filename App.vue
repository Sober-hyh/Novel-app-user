<script>
	import Vue from 'vue'
	// import $rjapi from './js/rg.js'
	export default {
		onLaunch: function() {
			  uni.getSystemInfo({
			    success: function(e) {
			      // #ifndef MP
			      Vue.prototype.StatusBar = e.statusBarHeight;
			      if (e.platform == 'android') {
			        Vue.prototype.CustomBar = e.statusBarHeight + 50;
			      } else {
			        Vue.prototype.CustomBar = e.statusBarHeight + 45;
			      };
			      // #endif
			      // #ifdef MP-WEIXIN
			      Vue.prototype.StatusBar = e.statusBarHeight;
			      let custom = wx.getMenuButtonBoundingClientRect();
			      Vue.prototype.Custom = custom;
			      Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
			      // #endif		
			      // #ifdef MP-ALIPAY
			      Vue.prototype.StatusBar = e.statusBarHeight;
			      Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
			      // #endif
			    }
			  })
			  uni.getSystemInfo({
			  	success(res) {
			  		Vue.prototype.winWidth=res.screenWidth
			  		Vue.prototype.winHeight=res.screenHeight
			  	}
			  })
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style lang="scss">
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "/uni_modules/uview-ui/index.scss";
	/*每个页面公共css */
	@import url("./static/css/animate.min.css");
	@import url("./static/css/iconfont.css");
	
	/*每个页面公共css */
	
	@font-face {
		  font-family: 'iconfont' ;  /* project id 1997429 */
		  src: url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.eot');
		  src: url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.eot?#iefix') format('embedded-opentype'),
		  url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.woff2') format('woff2'),
		  url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.woff') format('woff'),
		  url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.ttf') format('truetype'),
		  url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
		font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
	}
	*,view{
		box-sizing: border-box;
	}
	
</style>
