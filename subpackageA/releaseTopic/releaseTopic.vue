<template>
	<view style="padding-bottom: 30px;">
		<view style="height: 30px;">
			<!-- <view style="float: left;" class="padding-left-xs">
				<h1>全部</h1>
			</view> -->
			<view style="float: right;" class="padding-right-xs">
				<u-icon size="32" name="search"></u-icon>
			</view>
			
		</view>
		<u-gap height="15" bgColor="#f6f6f6"></u-gap>
		<block v-for="(item,index) in 10">
			<view class="listTopics_item ">
				<view class="grid col-1">
					<view>
						<u--text size="15" :bold="true" :lines="2" text="我用十年青春,赴你最后之约我用十年青春,赴你最后之约我用十年青春,赴你最后之约"></u--text>
					</view>
					<view>
						<u--text color="#8f8f8f" :lines="1" text="111个帖子"></u--text>
					</view>
				</view>
			</view>
			<u-gap height="10" bgColor="#f6f6f6"></u-gap>
		</block>
		<view class="footer">
			<view class="fbtn">
				<button class="flex"><u-icon color="#ffffff" size="32" name="edit-pen"></u-icon>发求书话题</button>
			</view>
		</view>
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				phit:0
			}
		},
		onLoad() {
			_this = this
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			_this.phit = menuButtonInfo.top;
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f6f6f6;
	}
	.listTopics_item{
		width: 90%;
		margin: 0 auto;
		background-color: white;
		padding: 30rpx;
		border-radius: 20rpx;
		letter-spacing: 1px;
	}
	.footer{
		position: fixed;
		left: 0px;
		bottom: 0px;
		width: 100%;
	
		min-height: 50px;
		background-color: transparent;
		z-index: 9999;
	}
	.fbtn{
		width: 40%;
		margin: 0 auto;
		border-radius: 40px;
		overflow: hidden;
	
	}
	.fbtn button{
		border:none;
		font-size: 30rpx;
		height: 40px;
		line-height: 40px;
		background-color: #f7894a;
		color: white;
	}
</style>
