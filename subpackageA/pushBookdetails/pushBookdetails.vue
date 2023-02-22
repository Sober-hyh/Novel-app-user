<template>
	<view style="padding-bottom: 50px;">
		<view class="title_h padding-left-xs">
			<view class="grid col-1">
				<view>
					<text class="t_text padding-left-xs">有没有开局就是无敌</text>
				</view>
				<u-gap height="10" bgColor="#ffffff"></u-gap>
				<view class="flex justify-between">
					<view class="tz padding-left-xs">
						查看全部100个帖子>
					</view>
					<view class="padding-right-xs">
						<button class="ts">去推书</button>
					</view>
				</view>
			</view>
			
		</view>
		<view>
			<u-gap height="10" bgColor="#f7f7f7"></u-gap>
		</view>
		<view style="width: 95%;margin: 0 auto;">
			<u-gap height="20" bgColor="#ffffff"></u-gap>
			<view class="flex" style="height: 40px;">
				<u-avatar :src="src"></u-avatar>
				<view class="grid col-1 margin-left-xs">
					<view>
						<text style="color: #494949;font-weight: bold;">我是小姐姐</text>	
					</view>
					<view>
						<text style="color: #949494;">2022-09-18</text>
					</view>
					
				</view>
			</view>
			<u-gap height="10" bgColor="#ffffff"></u-gap>
			<view>
				<u--text :bold="true" size="13" text="我用十年青春,赴你最后之约我用十年青春,赴你最后之约我用十年青春,赴你最后之约我用十年青春,赴你最后之约我用十年青春,赴你最后之约"></u--text>
			</view>
			<u-gap height="10" bgColor="#ffffff"></u-gap>
			<view v-for="item in 10">
				<view class="flex margin-left-xs padding-bottom-xs padding-top-xs" style="background-color: #f7f7f7;">
					<view>
						<img class="img-book-1 " src="https://bookcover.yuewen.com/qdbimg/349573/1035938472/90" alt="">
					</view>
					<view class="grid col-1" style="width: 80%;">
						<!-- 书名 -->
						<view class="flex justify-between padding-left-xs padding-top-xs" style="font-size: 28rpx;">
							<text style="font-weight: bold;">在下剑客斩仙在下剑客斩仙</text>
							<text style="font-weight: bold;color: red;">8.8分</text>
						</view>
						<view class="padding-left-xs padding-bottom-xs" style="color: #bababa;">
							玄幻
						</view>
					</view>
				</view>
				<u-gap height="10" bgColor="#ffffff"></u-gap>
			</view>
		</view>
		<view class="margin-bottom-lg">
			<view style="width: 95%;margin: 0 auto;">
				<view>
					<text v-if="test1>0" class="t1">全部评论•1</text>
					<text v-else class="t1">全部评论</text>
				</view>
				<u-gap height="20" bgColor="#ffffff"></u-gap>
				<!-- //每个人评论 -->
				<view v-if="test1>1">
					<view v-for="item1 in test1" >
						<view class="flex" style="min-height: 40px;">
							<u-avatar :src="src"></u-avatar>
							<view class="grid col-1 margin-left-xs">
								<view>
									<text style="color: #494949;">我是小姐姐</text>	
								</view>
								<view>
									<text style="color: #949494;">2022-09-18</text>
								</view>
								<view class="margin-top-xs" style="color: #494949;font-weight: bolder;font-size: 30rpx;letter-spacing: 2px;">
									<text>我是小姐姐我是小姐姐我是小姐姐我是小姐姐我是小姐姐我是小姐姐我是小姐姐我是小姐姐我是小姐姐我是小姐姐我是小姐姐我是小姐姐</text>
								</view>
								<u-gap height="10" bgColor="#ffffff"></u-gap>
								<block v-for="(item,index) in test">
									<view class="hf">
										<view style="width: 35%;">
											<text style="padding-left: 5rpx;float: right;">爱吃水啊是果：</text>
										</view>
										<view style="width: 90%;margin: 0 auto;" class="flex">
											<mote-lines-divide :dt="content" :line="1" expandText="展开" foldHint="收起"/>
											
										</view>
										
									</view>
									<u-gap height="20" bgColor="#ffffff"></u-gap>
								</block>
								
								
								<view>
									<text @click="moreReplies()" style="text-align: center;margin-left: 30%;">查看更多回复</text>
								</view>
								<!-- <u-icon color="red" name="heart-fill"></u-icon> -->
							</view>
						</view>
						<u-gap height="10" bgColor="#ffffff"></u-gap>
						<u-line></u-line>
						<u-gap height="10" bgColor="#ffffff"></u-gap>
					</view>
				</view>
				<!-- <view v-else class="comment_empty">
					<text>期待你的第一条评论</text>
				</view> -->
			</view>
		</view>
		<!-- <u-gap height="50" bgColor="#ffffff"></u-gap> -->
		<view class="footer">
			<view class="flex" style="margin-top: 20rpx;">
				<view :class="[dzshow ? 'footer_content_1':'footer_content_2']">
					<view class="comment_input">
						<u-textarea 
							v-model="value1"
							placeholder="发表评论...." 
							autoHeight
							:adjustPosition="true"
							:height="10"
							:customStyle="inputStyle"
							@focus="click_textarea"
							@blur="textarea_blur"
							:showConfirmBar="false"
							:cursorSpacing="10"
						></u-textarea>
					</view>
				</view>
				<view v-show="dzshow" style="width: 30%;" class="flex">
					<view class="flex">
						<u-icon size="28" name="heart"></u-icon>
						<text style="font-size: 30rpx;line-height: 30px;color: #666666;">12</text>
					</view>
					<view class="flex padding-left-xs">
						<u-icon size="28" name="chat"></u-icon>
						<text style="font-size: 30rpx;line-height: 30px;color: #666666;">12</text>
					</view>
					
				</view>
				
			</view>
			<view v-show="dzshow==false" style="width: 90%;margin: 0 auto;" class="padding-top-xs">
				<button class="ts" style="float: right;">发表</button>
			</view>
		</view>
	</view>


</template>

<script>
	let _this;
	export default {
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
				test:3,
				inputStyle:{
					'border':'none'
				},
				value1:"",
				dzshow:true,
				test1:5
			}
		},
		onLoad(){
			_this = this;
		},
		methods:{
			moreReplies(){
				_this.test++
			},
			click_textarea(){
				// 点击输入框判断缓存是否有之前没发出的评论,有就填充
				const comment_content = uni.getStorageSync('comment_content');
				if(comment_content){
					_this.value1 = comment_content
				}
				_this.dzshow = false
			},
			textarea_blur(){
				// 输入框失去焦点检测输入框是否有评论,如果有,就存入缓存,成功评论后删除缓存，后改对象存储单独每一个评论缓存
				console.log('失去焦点')
				_this.dzshow = true
				if(_this.value1){
					uni.setStorageSync('comment_content',_this.value1);
				}
				_this.value1 = ""
				
			}
		},
	}
</script>

<style lang="scss">
	page{
		background-color: white;
	}
	.title_h{
		height: 70px;
		width: 100%;
		
	}
	.t_text{
		font-size: 1.1rem;
		font-weight: bold;
	}
	.tz{
		line-height: 26px;
		font-size: 24rpx;
		color: #b4b4b4;
	}
	.ts{
		background-color: #f96825;
		border: none;
		border-radius: 40rpx;
		color: white;
		height: 50rpx;
		font-size: 24rpx;
		line-height: 50rpx;
		min-width: 130rpx;
	}
	.img-book-1{
		width: 80rpx;
		height: 110rpx;
		border-radius: 10rpx;
	}
	.t1{
		font-weight: bold;
		font-size: 38rpx;
	}
	.hf{
		background-color: #f7f7f7;
		min-height: 40px;
		line-height: 20px;
		border-radius: 10rpx;
	}
	.p1{
		padding-left: 5rpx;
		padding-right: 5rpx;
	}
	.footer{
		position: fixed;
		left: 0px;
		bottom: 0px;
		width: 100%;
		min-height: 50px;
		background-color: #fafafa;
		padding-bottom: 20rpx;
		z-index: 9999;
	}
	.comment_input{
		width: 90%;
		min-height: 30px;
		margin:0 auto;
	}
	.footer_content_1{
		width: 70%;
	}
	.footer_content_2{
		width: 100%;
	}
	.comment_empty{
		width: 100%;
		height: 100px;
		text-align: center;
	}
	.comment_empty text{
		text-align: center;
		line-height: 100px;
		color: #a3a3a3;
	}
</style>