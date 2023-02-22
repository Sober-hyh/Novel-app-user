<template>
	<view>
		<view style="width: 80%;" class="text-left text-xl text-black text-bold padding-left-xl flex" :style="{paddingTop: hit+'px'}">
			<text>分类</text>
			<view class="padding-left-xs">
				<u-icon size="30" name="search"></u-icon>
			</view>
		</view>
		<!-- <u-gap :height="hit" bgColor="#f1f1f1"></u-gap> -->
		<view class="VerticalBox" >
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 224upx)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 224upx);"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" style="border-radius: 10px;" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text> {{item.name}}
							</view>
					</view>
					<view class="cu-list menu-avatar  padding-bottom-xs padding-top-xs" style="color: white;">
						<view style="width: 100%;background-color: white;min-height: 30px;" class="flex flex-wrap" >
							<view class="bq" v-for="(item1,index1) in item.tag" :key="item1.sid">
								<u-tag @click="clibq(item1.name)" :text="item1.tagname" size="large" type="warning" shape="circle" icon="https://cdn.uviewui.com/uview/example/tag.png"></u-tag>
							</view>
							<!-- <view class="bq">
								<u-tag :text="item1.tagname" size="large" type="warning" shape="circle" icon="https://cdn.uviewui.com/uview/example/tag.png"></u-tag>
							</view> -->
							<!-- <view class="bq">
								<u-tag text="标签" type="warning" shape="circle" icon="https://cdn.uviewui.com/uview/example/tag.png"></u-tag>
							</view> -->
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				hgg:0,
				hit:0,
				// list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				list: [],
			};
		},
		onLoad() {
			_this = this;
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			_this.hit = menuButtonInfo.bottom;
			let y  = uni.getSystemInfoSync().screenHeight;
			// y = y-menuButtonInfo.bottom-60
			this.hgg = y -60 -menuButtonInfo.bottom
			console.log(this.hgg)
			// console.log(hgg)
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			_this.getclass()
			// let list = [{}];
			// for (let i = 0; i < 26; i++) {
			// for (let i = 0; i < 26; i++) {
			// 	list[i] = {};
			// 	list[i].name = String.fromCharCode(65 + i);
			// 	list[i].id = i;
			// }
			// console.log(list)
			this.listCur = _this.list[0];
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			//点击标签
			clibq(item){
				console.log(item)
				uni.navigateTo({
					url: '../../subpackageA/searchRes/searchRes?text='+item
				});
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						// console.log(scrollTop)
						return false
					}
				}
			},
			//获取分类
			getclass(){
				this.request({
						url:'/api.php?action=getBookclassification',
						method:'post',
						header:{'content-type' : "application/x-www-form-urlencoded"},
			
						}).then(res=>{
							console.log(res)
							for(let i=0;i<res.length;i++){
								let a = {
									name:res[i].class_name,
									id:res[i].class_id,
									tag:[]
								}
								_this.list.push(a)
							}
							_this.col = Math.ceil(_this.list.length / 4) 
							_this.getClassTag()
							
							
					})
			},
			getClassTag(){
				this.request({
						url:'/api.php?action=getClasstag',
						method:'post',
						header:{'content-type' : "application/x-www-form-urlencoded"},
							
						}).then(res=>{
							console.log(res.data)
							for(let i=0;i<res.data.length;i++){
								let a = {
									name:res.data[i].tagname,
									sid:res.data[i].sid,
									
								}
								for(let j=0;j<_this.list.length;j++){
									if(res.data[i].class_id == _this.list[j].id){
										console.log(res.data[i].class_id)
										_this.list[j].tag.push(res.data[i])
									}
								}
								
								
							}
							
							
							
							
					})
				
			}
		},
	}
</script>

<style lang="scss">
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
	.bq{
		margin-left: 24rpx;
		margin-top: 12rpx;
		margin-bottom: 12rpx;
		width: 200rpx;
	}


</style>
