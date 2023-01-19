<template>
	
	<view style="position: relative;">
		<!-- <z-paging ref="paging" v-model="listtest" @query="queryList()"> -->
		
		
		<u-gap height="30" bgColor="#f1f1f1"></u-gap>
		<view class="text-left text-xl text-black text-bold padding-left-xl" :style="{paddingTop: ttop+'px'}">
			快乐小说
		</view>
		<view class="cu-bar search bg-white margin-top-xs" style="background-color: #f5f4f0;">
			<view class="search-form " style="background-color: white; border-radius: 5px;">
				<text class="cuIcon-search"></text>
				<input class="bg-white" @click="InputFocus" :disabled="true" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索小说、作者、话题" confirm-type="search"></input>
			</view>
			<view class="action">
				<!-- <button class="cu-btn bg-green shadow-blur round">搜索</button> -->
			</view>
		</view>
		<view class="contenta">
			<u-gap height="15" bgColor="#ffffff"></u-gap>
			<view class="flex justify-between align-center tabs">
				<u-tabs
				        :list="list4"
				        lineWidth="30"
						@click="clickTabs"
				        lineColor="#f56c6c"
				        :activeStyle="{
				            color: '#000000',
				            fontWeight: '900',
							fontsize:'16',
				            transform: 'scale(1.05)'
				        }"
				        :inactiveStyle="{
				            color: '#949494',
				            transform: 'scale(1)'
				        }"
				        itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
				    >
				    </u-tabs>
					<view class="flex text-bold" @click="tpallist" style="z-index: 999;">
						<view class="bd">完整榜单</view>
						<u-icon :bold="true" :size="10" name="arrow-right"></u-icon>
					</view>
					
			</view>
			<view style="height: 30px;" class="tag">
				<u-tabs 
				:list="list1" 
				@click="clitag"
				lineColor="#ffffff"
				:activeStyle="{
				    color: '#ffffff',
					background:'#fb6c2b'
				}"
				:inactiveStyle="{
				    color: '#a9a9a9',
					background:'#f0f0f0'
				}"
				></u-tabs>
			</view>
			<view class="margin-left-xs" style="overflow: auto;position: relative;">
				<view class="flex" style="min-width: 1200px;min-height: 300px;">
					<div v-show="showbook" class="loader">
					  <div class="outer"></div>
					  <div class="middle"></div>
					  <div class="inner"></div>
					</div>
					<view v-show="showbook == false" class="gc grid col-1" v-for="item in 5">
						<view class="flex ones padding-right-xs" v-for="item1 in 4" @click="clibook(item1)">
							<img class="simg" src="https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg" alt="">
							<view class="flex padding-top-xs padding-left-xs padding-right-xs">
								<text v-if="item==0" :class="[item1+1<=3 && 'stext']">{{item1+1}}</text>
								<text v-if="item==1" class="">{{item1+1+4}}</text>
								<text v-if="item==2" class="">{{item1+1+8}}</text>
								<text v-if="item==3" class="">{{item1+1+12}}</text>
								<text v-if="item==4" class="">{{item1+1+16}}</text>
								<view class="margin-left-xs smface">
									<view class="flex" style="width: 100%;">
										<span class="cuIcon-hotfill" :class="[item1+1<=3 && item==0 ? 'hotr':'hotw']">
										</span>
										<u--text :lines="2" :size="13" :bold="true" text="我用十年青春,赴你最后之约1"></u--text>
									</view>
									<view class="text-sm padding-top-xs smhot padding-left-sm">
										9999万阅读/热度
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- <view class="gc">2</view>
					<view class="gc">3</view>
					<view class="gc">4</view>
					<view class="gc">5</view> -->
				</view>
				
			</view>
			<u-gap height="15" bgColor="#f6f6f6"></u-gap>
			<view class="contentb">
				<view class="" style="background-color: white;font-weight: bold;color: black;width: 100%;">
					<u-cell
						    title="书荒广场"
						    
						    url=""
							value="更多"
						></u-cell>
				</view>
				<view style="overflow: auto;position: relative;min-height: 100px;" class="padding-top-xs">
					<view style="min-width: 1200px;">
						<view class="flex">
							<div v-show="showht" class="loader" style="z-index: 999;">
							  <div class="outer"></div>
							  <div class="middle"></div>
							  <div class="inner"></div>
							</div>
							<view v-show="showht==false" class="grid col-1" v-for="item in 5">
								<view class="flex" v-for="item1 in 3" @click="cliht(item1)">
									<u-icon name="chat-fill" color="#fd601a" size="22"></u-icon>
									<view @click="tpht(id)" class="text-bold httext text-df text-cut" style="width: 200px;padding: 15rpx 0;">开局就无敌，满级大号，单女主</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-gap height="15" bgColor="#f6f6f6"></u-gap>
		<view class="contentc">
			<swiper class="screen-swiper":class="square-dot" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image style="border-radius: 10px;" :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				</swiper-item>
			</swiper>
		</view>
		<u-gap height="15" bgColor="#f6f6f6"></u-gap>
		<view class="contentd">
			<view>
				<u-cell
					    title="猜你喜欢"
					></u-cell>
			</view>
			<view class="grid col-2 booka">
				<view class="onebook padding-top-xl" v-for="item in aa" :class="[item%2==0  ? 'rbor' : 'lbor']">
					<view class="onebookbg">
						<view class="pf">9.5分</view>
						<img src="https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg" alt="">
						<div class="ws">
							<view class="onetext">
								<u--text :lines="2" :size="15"  text="我用十年青春,赴你最后之约.我用十年青春,赴你最后之约"></u--text>
								<text style="color: #b1b1b1;font-weight: 600;" class="padding-bottom-xs">111人在读</text>
							</view>
						</div>
					</view>
				</view>
				
			</view>
		</view>
		<u-gap height="90" bgColor="#f6f6f6"></u-gap>
		<view v-show="showd" class="db">
			<div class="loadera">
			  <div class="outer"></div>
			  <div class="middle"></div>
			  <div class="inner"></div>
			</div>
		</view>
		<view>
			<u-back-top :scroll-top="scrollTop"></u-back-top>
		</view>
	</view>
</template>

<script>
	let _this;
	import lsSkeleton from '@/components/ls-skeleton/ls-skeleton.nvue';
	export default {
		components: {
		        lsSkeleton
		    },
		data() {
			return {
				scrollTop: 0,
				//测试数据
				aa:8,
				listtest:[],
				//距离顶部计算距离
				ttop:0,
				//一级tab数据
				list4: [{
						name: '推荐榜'
					}, {
						name: '完本榜',
					}, {
						name: '评分榜',
					}],
				//二级标签数据
				list1: [{
						name: '全部',
					}, {
						name: '都市玄幻',
					}, {
						name: '都市'
					}, {
						name: '科技'
					}, {
						name: '游戏'
					}, {
						name: '悬疑'
					}, {
						name: '恐怖'
					}, {
						name: '言情'
					}, {
						name: '手工'
					}],
				//showbook 书籍loading动画是否显示
				showbook:true,
				//话题加载loading
				showht:true,
				showd:false,
				//轮播图数据
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}]
			}
		},
		onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
		onPullDownRefresh() {
				console.log('refresh');
				setTimeout(() => {
					_this.aa = 8
					 uni.stopPullDownRefresh()
				}, 1000)
				
			},
		onReachBottom() {
			console.log('上拉')
			_this.showd = true
			setTimeout(() => {
				 //模拟加载书籍
				 _this.aa = _this.aa + 4
				 _this.showd = false
			}, 2000)
		},
		onLoad() {
			_this = this;
			console.log(uni.$u.utils.getMobileInfo())
			console.log('刷新')
			 let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			 _this.ttop = menuButtonInfo.top - menuButtonInfo.height
			 console.log(menuButtonInfo)
			 setTimeout(() => {
				 //模拟加载书籍
				 this.showbook = false;
				 this.showht = false;
			 }, 1000)
		},
		methods: {
			tpht(id){
				uni.navigateTo({
					url: '../../subpackageA/topicDetails/topicDetails'
				})
			},
			tpallist(){
				console.log(1)
				uni.navigateTo({
					url: '../../subpackageA/allLists/allLists'
				})
			},
			ll(){
				uni.switchTab({
						url: '/pages/index/index'
					});
			},
			 queryList(pageNo, pageSize) {
					
					this.$refs.paging.complete([1,2,3,4,5,6,7]);
					 // this.$refs.paging.reload()	
				},
			read() {
				uni.navigateTo({
					url: '/pages/read/read'
				})
			},
			InputFocus(){
				console.log('点击了输入框/焦点,此处跳转')
				uni.navigateTo({
					url: '../../subpackageA/searchRes/searchRes'
				});
			},
			InputBlur(){
				console.log('移出输入框')
			},
			//点击tab
			clickTabs(item){
				console.log(item.index)
			},
			//点击书本
			clibook(i){
				console.log(i)
				uni.navigateTo({
					url: '/pages/read/read'
				})
			},
			//点击tag标签
			clitag(item){
				console.log(item)
			},
			//点击话题
			cliht(item){
				console.log(item)
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		padding-left:15rpx;
	}
	.contenta{
		width: 88.4%;
		background-color: white;
		min-height: 300px;
		margin: 0 30rpx;
		padding-bottom: 50rpx;
		border-radius: 5px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		// overflow: auto;
	}
	.contentb{
		width: 88.4%;
		background-color: white;
		min-height: 110px;
		margin: 0 30rpx;
		border-radius: 5px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		// overflow: auto;
	}
	.contentc{
		width: 88.4%;
		background-color: white;
		// height: 260rpx;
		margin: 0 30rpx;
		border-radius: 5px;
		}
	.contentd{
		width: 88.4%;
		background-color: white;
		min-height: 110px;
		margin: 0 30rpx;
		border-radius: 5px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		// overflow: auto;
	}
	.bd{
		color: black;
	}
	.tabs{
		// margin-top: 40rpx;
	}
	.gc{
		// background-color: aqua;
		min-height: 250px;
		width: 300px;
	}
	.ske{
		width: 100%;
	}
	.simg{
		min-width: 50px;
		max-width: 120rpx;
		height: 150rpx;
		
	}
	.ske_text{
		width: 70%;
	}
	.stext{
		color: #d9ac79;
		font-size: 36rpx;
	}
	.smface{
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.smhot{
		color: #b1b1b1;
	}
	.ones{
		margin-top: 10px;
	}
	.tag .thistag{
			// background-color: #fd6324;
			border-radius: 20px;
			min-width: 90rpx;
			height: 50rpx;
			text-align: center;
			line-height: 50rpx;
			padding-left: 10rpx;
			padding-right: 10rpx;
		}
		
	.u-tabs__wrapper__nav__item.data-v-48634e29{
		padding: 0 8px;
	}
	.tag{
		margin-bottom: 30rpx;
		padding-top:8rpx;
	}
	.hotw{
		color: white;
	}
	.hotr{
		color: red;
	}
	.loader {
	  position: absolute;
	  left: 0; 
	  top: 0; 
	  right: 0; 
	  bottom: 0;
	  margin: auto;
	}
	
	.outer,
	.middle,
	.inner {
	  border: 3px solid transparent;
	  border-top-color: #3cefff;
	  border-right-color: #3cefff;
	  border-radius: 50%;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	}
	
	.outer {
	  width: 3.5em;
	  height: 3.5em;
	  margin-left: -1.75em;
	  margin-top: -1.75em;
	  animation: spin 2s linear infinite;
	}
	
	.middle {
	  width: 2.1em;
	  height: 2.1em;
	  margin-left: -1.05em;
	  margin-top: -1.05em;
	  animation: spin 1.75s linear reverse infinite;
	}
	
	.inner {
	  width: 0.8em;
	  height: 0.8em;
	  margin-left: -0.4em;
	  margin-top: -0.4em;
	  animation: spin 1.5s linear infinite;
	}
	
	@keyframes spin {
	  to {
	    transform: rotate(360deg);
	  }
	}

	.httext{
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.onebook{
		height: 480rpx;
		
	}
	
	.onebookbg{
		width: 100%;
		height: 100%;
		position: relative;
		// background-color: #3cefff;
		background-image:linear-gradient(120deg,#f6d365 0%, #fda085 100%);
		border-radius: 10px;
	}
	.onebookbg img{
		position: absolute;
		width: 55%;
		height: 65%;
		left:0;
		right: 0;
		top: 30rpx;
		bottom: 0;
		margin:0 auto;
	}
	.ws{
		position: absolute;
		bottom: 0;
		margin: 0 auto;
		width: 100%;
		height: 42%;
		background: #ffffff;
		border-radius: 95% 0% 0% 0% / 70% 70% 50% 50%;
	}
	.pf{
		position: absolute;
		left: 10rpx;
		top: 10rpx;
	}
	.booka{
		background-color: #f6f6f6;
		// grid-column-gap: 20rpx;
	}
	.rbor{
		border-right: 8rpx white solid;
	}
	.lbor{
		border-left: 8rpx white solid;
	}
	.onetext{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 90%;
		padding-bottom: 10rpx;
		padding-left: 5rpx;
	}
	.db{
		width: 100%;
		height: 100px;
		position: absolute;
		bottom: 0;
	}
	.loadera{
		
	}
	
</style>
