<template>
	<view class="p" :style="{paddingTop: ttop+'px'}">
		
			
		
		<!-- 头部 -->
		<view class="flex justify-between" style="width: 100%;">
			<view>
				<u-icon @click="pageback" name="arrow-left" size="30"></u-icon>
			</view>
			<view :style="{paddingRight: r+'px'}">
				<u-icon name="share-square" size="30"></u-icon>
			</view>
		</view>
		<view class="pp">
			<view class="bookcontent grid col-1" style="width: 100%;padding-top: 50rpx;">
				<view style="width: 30%;margin: 0 auto;">
					<img style="height: 150px;border-radius: 20rpx;width: 100%;" :src="book.bookimg" alt="">
				</view>
				<view style="width: 80%;margin: 0 auto;font-weight: 700;padding-top: 20rpx;">
					<u--text :lines="2" size="20" align="center" :text="book.bookname"></u--text>
				</view>
				<view style="width: 80%;margin: 0 auto;text-align: center;">
					<text>{{book.nickname}}</text>
				</view>
			</view>
		<view style="width: 85%;margin: 0 auto;" class="padding-top-xs">
				<u-line color="#a69a83"></u-line>
		</view>
		<view class="flex margin-top-xs" style="text-align: center;">
			<view class="grid col-1 txx">
				<view style="font-weight: bold;">
					{{book.bookRating}}分
				</view>
				<view>
					推荐阅读
				</view>
			</view>
			<view class="grid col-1 txx">
				<view style="font-weight: bold;">
					{{book.bookreadnum}}人
				</view>
				<view>
					正在阅读
				</view>
			</view>
			<view class="grid col-1 txx">
				<view style="font-weight: bold;" >
					{{book.bookcount}}万字
				</view>
				<view>
					{{book.s}}
				</view>
			</view>
		</view>
		<view style="width: 85%;margin: 0 auto;" class="padding-top-xs">
				<u-line color="#a69a83"></u-line>
		</view>
		<view style="width:85%; margin: 0 auto;padding-top: 10rpx;">
			<view class="flex justify-between">
				<text style="font-weight: bold;font-size: 40rpx;">简介</text>
				<text @click="open1()" >更多</text>
			</view>
			<view style="height: 120px;">
				<u--text :lines="line" size="13" color="#696344" :text="book.bookIntroduction"></u--text>
			</view>
	
		</view>
		<u-gap height="15" bgColor="#d8d3c0"></u-gap>
		<view style="width:85%; margin: 0 auto;padding-top: 10rpx;padding-top: 10rpx;display: none;">
			<view class="flex justify-between">
				<text style="font-weight: bold;font-size: 40rpx;">书评</text>
				<text @click="open1()" >更多</text>
			</view>
			
			<view style="height: 120px;">
				<view class="margin-top-xs">
					<view class="flex">
						<text class="black">爱吃水果的h:</text><u--text :lines="1" size="13" color="#151515" text="内容很好看"></u--text>
					</view>
		
					
					<u-line color="#a69a83"></u-line>
				</view>
				<view class="margin-top-xs">
				<view class="flex">
					<text class="black">爱吃水果的h:</text><u--text :lines="1" size="13" color="#151515" text="内容很好看"></u--text>
				</view>
				<u-line color="#a69a83"></u-line>
				</view>
				<view class="margin-top-xs">
				<view class="flex">
					<text class="black">爱吃水果的h:</text><u--text :lines="1" size="13" color="#151515" text="内容很好看"></u--text>
				</view>
					<u-line color="#a69a83"></u-line>
				</view>
				
				
			</view>
		</view>
		<!-- //按钮 -->
			<view style="position: absolute;bottom: 10rpx;width: 100%;">
				<view  class="flex justify-around" >
					<view v-if="book.ifsj==false" style="width: 30%;color: black;" >
						<u-button color="#00aa7f" @click="sj(book.ifsj)" shape="circle" icon="plus" text="加入书架"></u-button>
					</view>
					<view v-if="book.ifsj==true" @click="sj(book.ifsj)" style="width: 30%;color: black;" >
						<u-button color="#00aa7f" shape="circle" icon="minus" text="移出书架"></u-button>
					</view>
				<view style="width: 30%;">
					<u-button @click="tpread(id)" color="#0ab99c" icon="play-right" shape="circle" text="开始阅读"></u-button>
				</view>
				</view>
				
			</view>
		</view>
		<u-popup :customStyle="customStyle" :show="show" round :closeOnClickOverlay="true" @close="close" @open="open1" mode="center">
			<view>
				<view style="height: 100px;max-width: 300px;background-color: #d8d3c0;padding: 10rpx;">
				<text>出淤泥而不染，濯清涟而不妖出淤泥而不染，濯清涟而不妖出淤泥而不染，濯清涟而不妖</text>
				</view>
			</view>
			
		</u-popup>
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				ttop:0,
				r:0,
				bid:0,
				book:{},
				show:false,
				line:5,
				customStyle:{
					'backgroundColor':'#d8d3c0'
				},
				uid:0
			}
		},
		onLoad(op){
			_this = this;
			_this.bid = op.bid
			
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			 _this.ttop = menuButtonInfo.top + 5
			  _this.r = menuButtonInfo.width
	
			  const userinfo = uni.getStorageSync('userinfo')
			  _this.uid = userinfo.uid
			  this.getbook()
			  this.addSee(op.bid)
		},
		methods:{
			sj(bl){
				this.request({
				url:'/api.php?action=addBooksToBookshelves',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					userid:_this.uid,
					bookid:_this.book.bookid
				}
				}).then(res=>{
					_this.book.ifsj = !_this.book.ifsj
					})
			},
			open1(){
				console.log(1)
				_this.line =  _this.line == 5 ? 10:5
			},
			close() {
				_this.show = false
			},
			tpread(id){
				uni.navigateTo({
					url: '/pages/read/read?bid=' + _this.bid
				})
			},
			pageback(){
				uni.navigateBack({
					
				})
				
			},
			getbook(){
				this.request({
				url:'/api.php?action=getBookDetails',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					bookid:_this.bid,
					uid:_this.uid
				}
				}).then(res=>{
					console.log(res)
					_this.book = res.data
					let ip = uni.getStorageSync('serverIp')
					if(_this.book.bookState==1){
						_this.book.s = '连载'
					}
					if(_this.book.bookState==2){
						_this.book.s = '完结'
					}
					if(_this.book.bookState==3){
						_this.book.s = '断更'
					}
					if(_this.booimg.length<=30){
						_this.bookimg = ip+'/'+userinfo.Himg
					}
				})
				
				
				
			},
			addSee(id){
				this.request({
				url:'/api.php?action=addBrowsingHistory',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					uid:_this.uid,
					bookid:id
				}
				}).then(res=>{
					console.log('添加浏览记录')
					})
			}
		},
	}
</script>

<style lang="scss">
	.p{
		width: 90%;
		margin: 0 auto;
		position: relative;
	}
	.pp{
		border: 1px solid #cdc3ab;
		margin-top: 20rpx;
		border-radius: 10px;
		min-height: 700px;
		position: relative;
	}
	page{
		background-color: #d8d3c0;
	}
	.txx{
		width: 33%;
	}
</style>