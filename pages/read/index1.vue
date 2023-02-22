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
					<img style="height: 150px;border-radius: 20rpx;width: 100%;" src="https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg" alt="">
				</view>
				<view style="width: 80%;margin: 0 auto;font-weight: 700;padding-top: 20rpx;">
					<u--text :lines="2" size="20" text="夺舍魔教教主的我只想做个好人"></u--text>
				</view>
				<view style="width: 80%;margin: 0 auto;text-align: center;">
					<text>作者</text>
				</view>
			</view>
		<view style="width: 85%;margin: 0 auto;" class="padding-top-xs">
				<u-line color="#a69a83"></u-line>
		</view>
		<view class="flex margin-top-xs" style="text-align: center;">
			<view class="grid col-1 txx">
				<view style="font-weight: bold;">
					9.1分
				</view>
				<view>
					1条评论
				</view>
			</view>
			<view class="grid col-1 txx">
				<view style="font-weight: bold;">
					3454人
				</view>
				<view>
					正在阅读
				</view>
			</view>
			<view class="grid col-1 txx">
				<view style="font-weight: bold;" >
					12312万字
				</view>
				<view>
					完结
				</view>
			</view>
		</view>
		<view style="width: 85%;margin: 0 auto;" class="padding-top-xs">
				<u-line color="#a69a83"></u-line>
		</view>
		<view style="width:85%; margin: 0 auto;padding-top: 10rpx;">
			<view class="flex justify-between">
				<text style="font-weight: bold;font-size: 40rpx;">简介</text>
				<text>更多</text>
			</view>
			<view style="height: 120px;">
				<u--text :lines="5" size="13" color="#696344" text="夺舍魔教教主的我只想做个好人夺舍魔教教主的我只想做个好人夺舍魔教教主的我只想做个好人夺舍魔教教主的我只想做个好人夺舍魔教教主的我只想做个好人夺舍魔教教主的我只想做个好人夺舍魔教教主的我只想做个好人夺舍魔教教主的我只想做个好人夺舍魔教教主的我只想做个好人夺舍魔教教主的我只想做个好人夺舍魔教教主的我只想做个好人"></u--text>
			</view>
	
		</view>
		<u-gap height="15" bgColor="#d8d3c0"></u-gap>
		<view style="width:85%; margin: 0 auto;padding-top: 10rpx;padding-top: 10rpx;">
			<view class="flex justify-between">
				<text style="font-weight: bold;font-size: 40rpx;">书评</text>
				<text>更多</text>
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
					<view style="width: 30%;color: black;display: none;" >
						<u-button color="#00aa7f" shape="circle" icon="plus" text="加入书架"></u-button>
					</view>
					<view style="width: 30%;color: black;" >
						<u-button color="#00aa7f" shape="circle" icon="minus" text="移出书架"></u-button>
					</view>
				<view style="width: 30%;">
					<u-button @click="tpread(id)" color="#0ab99c" icon="play-right" shape="circle" text="开始阅读"></u-button>
				</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				ttop:0,
				r:0,
				
			}
		},
		onLoad(){
			_this = this;
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			 _this.ttop = menuButtonInfo.top + 5
			  _this.r = menuButtonInfo.width
		},
		methods:{
			tpread(id){
				uni.navigateTo({
					url: '/pages/read/read'
				})
			},
			pageback(){
				uni.navigateBack({
					
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