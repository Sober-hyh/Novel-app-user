<template>
	<view :style="{paddingTop: phit+'px'}">
		<!-- 吸顶菜单 -->
		<view style="height: 30px;">
			
		</view>
		<!-- 头像昵称 -->
		<u-gap height="20" bgColor="#fafafa"></u-gap>
		<view class="my_comment">
			<view class="flex" @click="jumpmyDetails" style="height: 60px;width: 100%;">
				<view class="my_avatar">
					<!-- <u-avatar size="24" :src="src"></u-avatar> -->
					<img :src="userinfo.Himg" alt="">
				</view>
				<view class="grid col-1 margin-left-xs padding-top-xs">
					<view>
						<text style="color: #494949;font-size: 40rpx;font-weight: bold;">{{userinfo.nickname}}</text>	
					</view>
					<view>
						<u-text size="12" :text="userinfo.Signature" :lines="1" color="#9e9e9e"></u-text>
						
					</view>
					
				</view>
				<view class="tp_my">
					<view class="" style="line-height: 60px;height: 60px;">
						<u-icon top="12" name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<u-gap height="20" bgColor="#fafafa"></u-gap>
		<!-- 功能菜单 -->
		<view class="theFunctionMenu">
			
			        <u-grid
			                :border="false"
			                col="3"
							
			        >
			            <u-grid-item
			                    v-for="(listItem,listIndex) in list"
			                    :key="listIndex"
								@click="click(listItem)"
			            >
			                <u-icon
			                        :customStyle="{paddingTop:30+'rpx'}"
			                        :name="listItem.name"
			                        :size="22"
									
			                ></u-icon>
			                <text class="grid-text">{{listItem.title}}</text>
			            </u-grid-item>
			        </u-grid>
			        <u-toast ref="uToast" />
			    
		</view>
		
	</view>
</template>

<script>
	let _this;
	let ph;
	export default {
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				phit:0,
				// 功能菜单
				list: [
					{
						name: 'clock',
						title: '浏览历史',
						url:"asdasdasdas"
					},
					{
						name: 'email',
						title: '我的消息',
						url:"asdasdasdas"
					},
					{
						name: 'man-add',
						title: '作家中心',
						url:"asdasdasdas"
					},
					{
						name: 'lock',
						title: '隐私设置',
						url:"asdasdasdas"
					},
					{
						name: 'server-man',
						title: '反馈与帮助',
						url:"asdasdasdas"
					},
					{
						name: 'setting',
						title: '设置',
						url:"asdasdasdas"
					},
					
				],userinfo:{}																					
			}
		},
		onLoad() {
			_this = this;
			let ip = uni.getStorageSync('serverIp')
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			_this.phit = menuButtonInfo.top;
			_this.userinfo = uni.getStorageSync('userinfo')
			if(_this.userinfo.Himg.length<=30){
				_this.userinfo.Himg =  ip+'/'+ _this.userinfo.Himg
			}
		},
		methods: {
			 click(e) {
					console.log(e.url)
					uni.showToast({
						title: '功能未开放',
						duration: 2000,
						icon:'error'
					});
				},
			jumpmyDetails(){
				uni.navigateTo({
					url: '../../subpackageA/myDetails/myDetails'
				})
			},
			testtips(){
				uni.showToast({
					title: '功能未开放',
					duration: 2000,
					icon:'error'
				});
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #fafafa;
		
	}
	.my_avatar img{
		width: 120rpx;
		height: 120rpx;
		border-radius: 120rpx;
	}
	.my_comment{
		width: 90%;
		margin: 0 auto;
		background-color: #fafafa;
	}
	.tp_my{
		color: #9e9e9e;
		height: 60px;
		line-height: 60px;
		text-align: center;
	}
	.theFunctionMenu{
		border-radius: 30rpx;
		width: 90%;
		margin: 0 auto;
		background-color: white;
		padding-top: 10rpx;
		padding-bottom: 40rpx;
	}
</style>
