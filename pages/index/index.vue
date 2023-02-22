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
				:list="classList" 
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
						<view class="flex ones padding-right-xs" v-for="(item1,index) in listBooks[item]" @click="clibook(item1)">
							<img v-if="item1 && item1.bookid" class="simg" :src="item1.img" alt="">
							<view v-if="item1.bookid" class="flex padding-top-xs padding-left-xs padding-right-xs">
								<text v-if="item==0" :class="[index+1<=3 && 'stext']">{{index+1}}</text>
								<text v-if="item==1" class="">{{index+1+4}}</text>
								<text v-if="item==2" class="">{{index+1+8}}</text>
								<text v-if="item==3" class="">{{index+1+12}}</text>
								<text v-if="item==4" class="">{{index+1+16}}</text>
								<view class="margin-left-xs smface">
									<view class="flex" style="width: 100%;">
										<span class="cuIcon-hotfill" :class="[index+1<=3 && item==0 ? 'hotr':'hotw']">
										</span>
										<u--text :lines="2" :size="13" :bold="true" :text="item1.title"></u--text>
									</view>
									<view class="text-sm padding-top-xs smhot padding-left-sm">
										{{item1.hot}}/热度
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
						    url="../../subpackageA/listTopics/listTopics"
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
			<!-- <view class="grid col-2 booka">
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
				
			</view> -->
			<view v-for="item in youlike">
				<view class="bg-white flex">
					<view style="width: 20%;">
						<img class="cimg" :src="item.bookimg" alt="">
					</view>
					<view style="width: 80%;padding: 15rpx;">
						<view class="flex">
							<view style="color: black;width: 80%;">
								<u--text :lines="1" :size="16" color="#000000" :text="item.bookname"></u--text>
							</view>
							
						</view>
						<view style="width: 80%;">
							<u--text :lines="3" :size="12" :text="item.bookIntroduction"></u--text>
						</view>
						<view style="text-align: left;color: red;width: 100%;">
								{{item.bookRating}}分
							</view>
					</view>
					
				</view>
				<u-gap height="12" bgColor="#f6f6f6"></u-gap>
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
				aa:0,
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
				classList: [{
						class_id:0,
						name: '全部'
					}],
				//showbook 书籍loading动画是否显示
				showbook:true,
				//话题加载loading
				showht:true,
				showd:false,
				//轮播图数据
				swiperList: [],
				//榜单书籍数据
				listBooks:[
					
					
				],
				//当前分类
				thisClass:0,
				//当前榜单
				thisList:1,
				//猜你喜欢当前页
				likethispage:0,
				youlike:[
					
				]
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
			_this.getyoulike(_this.likethispage,4)
			
			// setTimeout(() => {
			// 	 //模拟加载书籍
				 
			// }, 2000)
		},
		onLoad() {
			_this = this;
			// this.request({
			// 	url:'/api.php?action=login',
			// 	method:'post',
			// 	data:this.form
			// 	}).then(res=>{
			// 		console.log(res)
			// 	})
			
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
			 //ff
			 //获取所有分类
			 this.getAllCategories()
			 //获取书籍
			 this.getBooks(1,0)
			 //获取banner
			 this.getbanner()
			 //猜你喜欢
			 this.getyoulike(_this.likethispage,4)
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
				_this.thisList = item.index + 1
				_this.getBooks(_this.thisList,_this.thisClass)
			},
			//点击书本
			clibook(i){
				console.log(i)
				uni.navigateTo({
					url: '/pages/read/index1',
					 success: function(res) {
					    // 通过eventChannel向被打开页面传送数据
					  
					  },fail(err) {
					  	console.log(err)
					  }
				})
				
			},
			//点击tag标签
			clitag(item){
				console.log(item)
				_this.thisClass = item.class_id
				_this.getBooks(_this.thisList,_this.thisClass)
			},
			//点击话题
			cliht(item){
				console.log(item)
			},
			//获取所有分类
			getAllCategories(){
				this.request({
				url:'/api.php?action=getBookclassification',
				method:'post',
				}).then(res=>{
					
					for(let i=0;i<res.length;i++){
						let item = {
							class_id:Number(res[i].class_id),
							name:res[i].class_name
						}
				
						_this.classList.push(item)
						// console.log(res[i])
					}
				})
			},
			//获取书籍
			getBooks(listType,class_id){
				_this.showbook = true
				_this.listBooks = []
				this.request({
				url:'/api.php?action=getLeaderboardBooks',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				data:{
					listType:listType,
					class_id:class_id
				},
				method:'post',
				}).then(res=>{
					console.log(res)
					if(res.sum == 0){
						console.log('空')
						_this.showbook = false
						return
					}
					
					let flog = 0;
					let flog1 = 0;
					
					for(let i =0;i<20;i++){
						flog ++
						if(flog%4 == 0){
							let a = []
							if(res.data.length > flog1){
								
							
							
							for(let j = flog1;j<flog1+4;j++){
								if(res.data[j]){
									let item ={
									bookid:res.data[j].bookid,
									img:res.data[j].bookimg,
									title:res.data[j].bookname,
									hot:res.data[j].bookHeat
									}
									a.push(item)
								}
								
								// console.log(a)
								// console.log(res.data[0].bookid)
								
							}
							_this.listBooks.push(a)
							}flog1+=4
							// console.log(299)
							
							// console.log(_this.listBooks)
						}
						// console.log(i)
					}
					console.log()
					for(let iy=0;iy<4;iy++){
						if(_this.listBooks[_this.listBooks.length-1].length!=4){
							let a = {}
							_this.listBooks[_this.listBooks.length-1].push(a)
						}else{
							continue
						}
					}
					_this.showbook = false
				})
			},
			getbanner(){
				this.request({
				url:'/api.php?action=getFirstPageBanner',
				method:'post',
				}).then(res=>{
					console.log(res.data[0].b_img)
			
					for(let i=0;i<res.data.length;i++){
						let a = {
							id: i,
							type: 'image',
							url: res.data[i].b_img
						}
						_this.swiperList.push(a)
					}
					
					
				})
			},
			getyoulike(page,pagenum){
				this.request({
				url:'/api.php?action=guessYouLike',
				method:'post',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				data:{
					userid:1,
					page:page,
					pagenum:pagenum
				},
				}).then(res=>{
					console.log(res.data)
					if(res.data.length==0 || res.data.length<4){
						uni.showToast({
							title: '没有更多内容了',
							duration: 2000,
							icon:'error'
						});
						_this.showd = false
						return
					}
					for(let i=0;i<res.data.length;i++){
						let a = {
							id: i,
							bookRating: res.data[i].bookRating,
							bookid: res.data[i].bookid,
							bookimg: res.data[i].bookimg,
							bookname: res.data[i].bookname,
							bookreadnum: res.data[i].bookreadnum,
							bookIntroduction:res.data[i].bookIntroduction
						}
						_this.youlike.push(a)
					}
					_this.likethispage = _this.likethispage+1
					_this.aa = _this.aa + pagenum
					_this.showd = false
					
				})
				
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
	.cimg{
		// width: 30rpx;
		// width: 70%;
		height: 180rpx;
		padding: 15rpx;
	}
</style>
