<template>
	<view>
		<view style="position: relative;height: 450px;">
				
			
			<view class="my-content-bg padding-top-lg" >
				<view class="flex justify-between align-center" style="z-index: 10;height: 60px; padding:0 30rpx;">
					<view style="width: 50%;">
						<u-image :height="60" :width="60" src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle"></u-image>
					</view>
					<view style="width: 50%;">
						<button @click="tpEdit()" class="btn1">编辑资料</button>
						
					</view>
				</view>
				<view class="my-name-text flex">
					<text>爱吃水果的h</text>
					<u-icon name="man" color="#00aaff"></u-icon>
					<u-icon name="woman" color="#ff557f"></u-icon>
				</view>
				<view class="my-gq-text">
					<text>加油加藤鹰加油加油,加油，交友</text>
				</view>
				<view class="my-read-time">
					<text>阅读100本书•11时1分</text>
				</view>
			</view>
			<view class="my-book">
				<view class="flex justify-between">
					<view class="my-book-1">
						<text  class="a1">书架</text>
						<text>12</text>
					</view>
					<view class="my-book-2">
						<text>
							查看书架>
						</text>
						
					</view>
				</view>
				<view class="flex padding-top-lg" style="width: 95%;margin: 0 auto;">
					<view class="grid col-1" v-for="itembook in 4">
						<view class="my-book-img-1">
							<img src="https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg" alt="">
						</view>
						<view style="width: 130rpx;">
							<u--text :lines="2" text="我用十年青春,赴你最后之约"></u--text>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<view>
			<view style="width: 100%;height: 20px;">
				<u-tabs :list="list1" @click="clicktab"></u-tabs>
			</view>
		</view>
		
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				  list1: [{
							name: '话题',
						}]
			}
		},
		onLoad() {
			_this = this
		},
		methods: {
			tpEdit(){
				uni.navigateTo({
					url: '../../subpackageA/editMyData/editMyData'
				})
			}
		}
	}
</script>

<style lang="scss">
	.my-content-bg{
		width: 100%;
		height: 250px;
		background-image:linear-gradient(120deg,#cab1d9 0%, #5da68b 100%)
		
	}
	.btn1{
		width: 160rpx;
		background-color: white;
		border-radius: 50rpx;
		// padding: 15rpx;
		height: 30px;
		line-height: 30px;
		font-size: 24rpx;
		color: #e67238;
		float: right;
	}
	.my-name-text,
	.my-gq-text,
	.my-read-time{
		color: white;
		padding-left: 30rpx;
		
	}
	.my-gq-text,
	.my-read-time{
		font-size: 0.8rem;
		letter-spacing: 1.5px;
		color: #cedde6;
	}
	.my-name-text{
		letter-spacing: 1px;
		font-size: 1.2rem;
		font-weight: bold;
		padding-top: 30rpx;
	}
	.my-gq-text{
		letter-spacing: 1.7px;
		
	}
	.my-read-time{
		padding-top: 30rpx;
	}
	.my-book{
		 width: 100%;
		 min-height: 200px;
		 background-color: white;
		 border-radius: 30rpx 30rpx 0 0;
		position: absolute;
		bottom: 10px;
		padding: 30rpx 30rpx;
	}
	.my-book-1 .a1{
		font-weight: bold;
		font-size: 1rem;
	}
	.my-book-2 text{
		color: #a7a7a7;
	}
	.my-book-img-1 img{
		border-radius: 20rpx;
		width: 130rpx;
		height: 90px;
	}
</style>
