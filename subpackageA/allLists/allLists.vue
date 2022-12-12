<template>
	<view>
		<!-- tab -->
		<view class="flex" style="border-bottom: 0.5rpx solid #cfcfcf;position: fixed;z-index: 99999;">
			<view class="basis-sm bg-white">
				
			</view>
			<view>
				<u-sticky bgColor="#fff">
			    <u-tabs :list="list1"></u-tabs>
				</u-sticky>
			</view>
			
		</view>
		<!-- 下面导航和内容 -->
		<view class="flex" style="width: 100%;position: relative;">
			<!-- 导航 -->
			<view class="basis-xs bg-white padding-bottom-xs" style="border-right: 0.5rpx solid #cfcfcf;position: fixed;left: 0rpx;top: 48px;width: 20%;" >
				<view :class="[thisbd == index ? 'bangdanthis' : '']" class="bangdan padding-bottom-xs margin-top-xs" @click="clibdtab(index)" v-for="(item,index) in bdlist">{{item.name}}</view>
			</view>
			<!-- 内容 -->
			<view class="basis-xl padding-right-xs" style="width: 80%;position: absolute;right: 0;top: 48px;">
				<view>
					<block v-for="(item,index) in 10">
					<view class="flex padding-top-lg" >
						<view :class="[index <= 2 ? 'tetred' : '']" style="text-align: center;" class="tet">{{index+1}}</view>
						<view class="flex" >
							
						
							<view class="imga basis-xs">
								<img src="https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg" alt="">
							</view>
							<view class="basis-xl padding-bottom-sm">
								<u-skeleton
									rows="2"
									title
									:loading="switch2"
									rowsHeight="14"
								>
									<!-- 需要在外部多嵌套一层占位view，否则在nvue下会导致样式失效 -->
									<view>
										<view class="u-skeleton-slot" style="padding-top: 17.5px;">
									
											<view class="u-skeleton-slot__content">
												<u--text
													text="利剑出鞘,一统江湖利剑出鞘,一统江湖利剑出鞘,一统江湖利剑出鞘,一统江湖利剑出鞘"
													type="main"
													size="13"
													:bold="true"
													:lines='1'
												></u--text>
												<u--text
													type="tips"
													size="10"
													customStyle="margin-top: 2px"
													text="玄幻•完结•20万人气"
													:lines='1'
												></u--text>
											</view>
										</view>
									</view>
								</u-skeleton>
							</view>
						</view>
						
					</view>
					<view style="width: 100%;" class="padding-top-sm margin-bottom-sm" v-if="index==9">
							<u--text
								text="查看更多书籍"
								type="main"
								size="13"
								:bold="true"
								:lines='1'
								align="center"
								@click="allbook"
							></u--text>
						</view>
					</block>
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
					thisbd:0,
					bdlist:[
						{
							name:'完结榜',
							id:0
						},
						{
							name:'完结榜',
							id:1
						},
						{
							name:'完结榜',
							id:2
						},
						{
							name:'完结榜',
							id:3
						},
						{
							name:'完结榜',
							id:4
						},
						{
							name:'完结榜',
							id:5
						},
						{
							name:'完结榜',
							id:6
						}
					]
			}
		},
		onLoad() {
			_this = this;
		},
		methods: {
			clibdtab(i){
				_this.thisbd = i
			},
			allbook(){
				console.log(1)
				uni.navigateTo({
					url: '../../subpackageA/allBooks/allBooks'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.bangdan{
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 0.9rem;
		font-weight: bold;
	}
	.bangdanthis{
		color: black;
	}
	.imga img{
		width: 80%;
		height: 130rpx;
	}
	.tet{
		width: 100rpx;
		line-height: 130rpx;
	}
	.tetred{
		color: red;
	}
</style>
