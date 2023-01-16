<template>
	<view>
		<view class="head">
			<view class="flex margin-left-xs padding-top-xs">
				<view>
					<u-icon color="#ffffff" name="chat-fill" size="28"></u-icon>
				</view>
				<view class="padding-right-xs" >
					<u--text :lines="2"  size="18" color="#ffffff" :bold="true" text="求那种开局无敌修为就是修为到天花板的那种"></u--text>
				</view>
				<view class="margin-right-lg">
					<button class="scbtn" :class="[ifsc=='已收藏' && 'ifsc']">{{ifsc}}</button>
				</view>
			</view>
			<view style="color: #c8d2eb;width: 90%;margin: 0 auto;">
					<mote-lines-divide :dt="content" :line="3" expandText="展开" foldHint="收起"/>
			</view>
		</view>	
			<!-- 推荐显示 -->
		<u-gap height="20" bgColor="#ffffff"></u-gap>
		<!-- <block v-for="(item,index) in booktest">
			
		</block> -->
		<view class="content-topic" style="width: 90%;margin: 0 auto;" v-for="item in booktest">

			<view class="flex" style="height: 40px;">
				<u-avatar :src="src"></u-avatar>
				<view class="grid col-1 margin-left-xs">
					<view>
						<text style="color: #494949;">我是小姐姐</text>	
					</view>
					<view>
						<text style="color: #949494;">2022-09-18</text>
					</view>
					
				</view>
			<!-- 	<view style="height: 40px;">
					<u-icon @click="cliys()" name="more-dot-fill"></u-icon>
					<chunLei-popups v-model="value" :popData="data1" @tapPopup="tapPopup" :x="x" :y="y" placement="top-end">
						</chunLei-popups>
				</view> -->
			</view>
			<view class="margin-top-xs margin-bottom-xs">
				<mote-lines-divide :dt="content" :line="3" expandText="展开" foldHint="收起"/>
			</view>
		
			<view>
				<!-- 多本书显示 -->
				<view v-if="item.books" class="book-content-1 padding-bottom-lg">
					<view class="padding-left-lg padding-bottom-xs padding-top-xs flex justify-between">
						<view>
							<text style="color: #b0b0b1;">共推荐2本书</text>
						</view>
						<view style="color: #b0b0b1;" class="padding-right-xs">
							全部>
						</view>
					</view>
					<view style="width: 95%;margin: 0 auto;">
						<u-line></u-line>
					</view>
					<view>
						<view class="flex margin-left-lg margin-top-xs" style="">
							<view class="grid col-1" v-for="item1 in 3">
								<!-- 书封面 -->
								<view>
									<img class="img-book" src="https://bookcover.yuewen.com/qdbimg/349573/1035938472/90" alt="">
								</view>
								<!-- 书名 -->
								<view>
									<u--text :lines="2" text="发撒佛奥是佛撒大声地分公司个发送"></u--text>
								</view>
							</view>
						</view>
					</view>
					
				</view>
				<!-- 单本书显示 -->
				<view v-if="item.books==false" class="book-content-2 padding-top-xs">
					<view class="flex margin-left-lg">
						<view>
							<img class="img-book-1" src="https://bookcover.yuewen.com/qdbimg/349573/1035938472/90" alt="">
						</view>
						<view class="grid col-1" style="width: 75%;">
							<!-- 书名 -->
							<view class="flex justify-between padding-left-xs padding-top-xs" style="font-size: 32rpx;">
								<text style="font-weight: bold;">在下剑客斩仙</text>
								<text style="font-weight: bold;color: red;">8.8分</text>
							</view>
							<view class="padding-left-xs padding-bottom-xs">
								玄幻
							</view>
						</view>
					</view>
					
				</view>
				<!-- 互动 -->
				<view class="flex justify-between margin-bottom-xs margin-top-xs">
					<!-- 评论 -->
					<view style="width: 50%;">
						<view class="flex hd1">
							<u-icon size="24" name="chat"></u-icon>
							<text style="font-size: 24rpx;line-height: 30px;">12</text>
						</view>
						
					</view>
					<!-- 点赞 -->
					<view style="width: 50%;">
						<view class="flex hd1">
							<u-icon size="24" name="heart"></u-icon>
							<text style="font-size: 24rpx;line-height: 30px;">12</text>
						</view>
						
						<!-- <u-icon color="red" name="heart-fill"></u-icon> -->
					</view>
				</view>
				<view style="width:100%;margin: 0 auto;">
					<u-line></u-line>
				</view>
			</view>
			<u-gap height="20" bgColor="#ffffff"></u-gap>
		</view>
	</view>


</template>

<script>
import MoteLinesDivide from "@/components/mote-lines-divide/mote-lines-divide"
	export default {
		components: {
			    MoteLinesDivide
			},
		data() {
			
			return {
				content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
				shadowStyle: {
									backgroundImage: "none",
									// backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 50%)",
									paddingTop: "0",
									marginTop: "0rpx",
									color:"#c8d2eb"
								},
				ifsc:"收藏",
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				booknum:false,
				booktest:[
					{
						books:false,
						booknum:1
					},
					{
						books:true,
						booknum:3
					},
					{
						books:true,
						booknum:2
					},
					{
						books:false,
						booknum:1
					},
					{
						books:true,
						booknum:2
					},
				]

			}
		},
		onLoad(){

		},
		methods:{

		},
	}
</script>

<style lang="scss">
	page{
		background-color: white;
	}
	.head{
		background-color: #6778a6;
		width: 100%;
		height: 400rpx;
		color: white;
		border-radius:0 0 30rpx 30rpx ;
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
		width: 130rpx;
		height: 50rpx;
		border-radius: 120rpx;
		line-height: 50rpx;
		text-align: center;
		border: none;
		font-size: 24rpx;
		color: orange;
	}
	.ifsc{
		color: #c8d2eb;
		background-color: #94a1c1;
	}
	.content-topic{
		
		width: 100%;
		max-height: 440px;
		// min-height: 70px;
		// background-color: #94a1c1;
		// margin-top: -10px;
	}
	.uicon-more-dot-fill{
		padding-top: 20rpx;
	} 
	.book-content-1{
		border-radius: 40rpx;
		height: 200px;
		background-color: #f7f7f7;
	}
	.book-content-2{
		border-radius: 40rpx;
		height: 70px;
		background-color: #f7f7f7;
	}
	.img-book{
		width: 140rpx;
		height: 100px;
		border-radius: 10rpx;
	}
	.img-book-1{
		width: 80rpx;
		height: 110rpx;
		border-radius: 10rpx;
	}
	.hd1{
		height: 30px;
		width: 10%; 
		margin: 0 auto;
	}
	
</style>