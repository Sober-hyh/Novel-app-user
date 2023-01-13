<template>
	<view>
		<view class="head">
			<view class="flex">
				<view class="taga margin-left-xs margin-right-xs">
				#
				</view>
				<view class="padding-right-xs">
					<u--text :lines="2" size="18" :bold="true" text="求那种开局无敌修为就是修为到天花板的那种"></u--text>
				</view>
				<view class="margin-right-lg">
					<button class="scbtn">收藏</button>
				</view>
			</view>
			<view>
					<u-read-more closeText="展开" :shadowStyle="shadowStyle" showHeight="40" :toggle="true">
						<rich-text :nodes="content"></rich-text>
					</u-read-more>
			</view>
		</view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
				shadowStyle: {
									// backgroundImage: "none",
									backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 50%)",
									paddingTop: "0",
									marginTop: "0rpx"
								}
			}
		},
		onLoad(){

		},
		methods:{
			
		},
	}
</script>

<style>
	page{
		background-color: white;
	}
	.head{
		background-color: antiquewhite;
		width: 100%;
		height: 400rpx;
	}
	.taga{
		background-color: white;
		height: 40rpx;
		width: 40rpx;
		border-radius: 40rpx;
		text-align: center;
		line-height: 40rpx;
	}
	.scbtn{
		width: 120rpx;
		height: 50rpx;
		border-radius: 120rpx;
		line-height: 50rpx;
		text-align: center;
		border: none;
		font-size: 28rpx;
	}
</style>