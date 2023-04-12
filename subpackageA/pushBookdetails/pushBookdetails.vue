<template>
	<view style="padding-bottom: 50px;">
		<view class="title_h padding-left-xs">
			<view class="grid col-1">
				<view>
					<text class="t_text padding-left-xs">{{topic.t_name}}</text>
				</view>
				<u-gap height="10" bgColor="#ffffff"></u-gap>
				<view class="flex justify-between">
					<view class="tz padding-left-xs" @click="back()">
						查看全部{{topic.t_numberpost}}个帖子>
					</view>
					<view class="padding-right-xs">
						<button @click="tp()" class="ts">去推书</button>
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
				<u-avatar :src="post.Himg"></u-avatar>
				<view class="grid col-1 margin-left-xs">
					<view>
						<text style="color: #494949;font-weight: bold;">{{post.nickname}}</text>	
					</view>
					<view>
						<text style="color: #949494;">{{post.post_tme}}</text>
					</view>
					
				</view>
			</view>
			<u-gap height="10" bgColor="#ffffff"></u-gap>
			<view style="padding-left: 20rpx;">
				<u--text :bold="true" size="13" :text="post.post_introduce"></u--text>
			</view>
			<u-gap height="10" bgColor="#ffffff"></u-gap>
			<view v-for="item in post.books">
				<view class="flex margin-left-xs padding-bottom-xs padding-top-xs" style="background-color: #f7f7f7;">
					<view>
						<img class="img-book-1 " :src="item[0].bookimg" alt="">
					</view>
					<view class="grid col-1" style="width: 80%;">
						<!-- 书名 -->
						<view class="flex justify-between padding-left-xs padding-top-xs" style="font-size: 28rpx;">
							<text style="font-weight: bold;">{{item[0].bookname}}</text>
							<text style="font-weight: bold;color: red;">{{item[0].bookRating}}分</text>
						</view>
						<view class="padding-left-xs padding-bottom-xs" style="color: #bababa;">
							{{item[0].class_name}}
						</view>
					</view>
				</view>
				<u-gap height="10" bgColor="#ffffff"></u-gap>
			</view>
		</view>
		<view class="margin-bottom-lg">
			<view style="width: 95%;margin: 0 auto;">
				<view>
					<text v-if="post.pl>0" class="t1">全部评论•1</text>
					<text v-else class="t1">全部评论</text>
				</view>
				<u-gap height="20" bgColor="#ffffff"></u-gap>
				<!-- //每个人评论 -->
				<view v-if="post.pl>1">
					<view v-for="(item1,index1) in comment" >
						<view class="flex" style="min-height: 40px;">
							<u-avatar :src="item1.Himg"></u-avatar>
							<view class="grid col-1 margin-left-xs">
								<view>
									<text style="color: #494949;">{{item1.nickname}}</text>	
								</view>
								<view>
									<text style="color: #949494;">{{item1.comment1_time}}</text>
								</view>
								<view @click="res(item1.comment1_id)" class="margin-top-xs" style="color: #494949;font-weight: bolder;font-size: 30rpx;letter-spacing: 2px;margin-bottom: 20rpx;">
									<text>{{item1.comment1_content}}</text>
								</view>
								<u-gap height="10" bgColor="#ffffff"></u-gap>
								<block v-for="(item,index) in item1.rescomment.data" v-if=" item1.rescomment.flog>=index">
									<view class="hf">
										<view style="width: 40%;">
											<text style="padding-left: 5rpx;float: right;">{{item.nickname}}：</text>
										</view>
										<view style="width: 90%;margin: 0 auto;" class="flex">
											<mote-lines-divide :dt="item.comment2_content" :line="1" expandText="展开" foldHint="收起"/>
											
										</view>
										
									</view>
									<u-gap height="20" bgColor="#ffffff"></u-gap>
								</block>
								
								
								<view>
									<text v-if="item1.rescomment.data.length > 3 && item1.rescomment.flog!==item1.rescomment.data.length" @click="moreReplies(index,index1)" style="text-align: center;margin-left: 30%;">查看更多回复</text>
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
						<u-icon  v-if="post.ifdz==false" @click="dz(post.post_id,post.ifdz)"  size="28" name="heart"></u-icon>
						<u-icon v-if="post.ifdz==true" @click="dz(post.post_id,post.ifdz)" color="red" size="28" name="heart-fill"></u-icon>
						<text style="font-size: 30rpx;line-height: 30px;color: #666666;">{{post.dz}}</text>
					</view>
					<view class="flex padding-left-xs">
						<u-icon @click="dz()" size="28" name="chat"></u-icon>
						<text style="font-size: 30rpx;line-height: 30px;color: #666666;">{{post.pl}}</text>
					</view>
					
				</view>
				
			</view>
			<view v-show="dzshow==false" style="width: 90%;margin: 0 auto;" class="padding-top-xs">
				<button @click="sub" class="ts" style="float: right;">发表</button>
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
				test1:5,
				uid:0,
				tid:0,
				pid:0,
				topic:{},
				post:[],
				comment:[],
				restype:0,
				resid:0
			}
		},
		onLoad(op){
			_this = this
			_this.tid = op.tid
			_this.pid = op.pid
			const userinfo = uni.getStorageSync('userinfo')
			_this.uid = userinfo.uid
			this.gettopic(op.tid)
			this.getPost(op.pid)
			this.getcomment(op.pid)
			
		},
		methods:{
			dz(pid,zt,i){
				this.request({
				url:'/api.php?action=topicPostLikes',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					uid:_this.uid,
					pid:_this.pid
				}
				}).then(res=>{
					if(_this.post.ifdz){
						this.post.dz -=1
					}else{
						this.post.dz +=1
					}
					
					this.post.ifdz = !zt
					
					console.log(res)
					})
			},
			tp(){
				uni.navigateTo({
					url: '../recommendBook/recommendBook?tid=' +_this.tid
				})
			},
			sub(id){
				if(_this.restype==0){
					this.request({
					url:'/api.php?action=addFirstLevelCommentOnPost',
					header:{'content-type' : "application/x-www-form-urlencoded"},
					method:'post',
					data:{
						userid:_this.uid,
						content:_this.value1,
						post_id:_this.pid
					}
					}).then(res=>{
					
						console.log(res)
						
					
					})
				}else{
					this.request({
					url:'/api.php?action=addSecondLevelCommentOnPost',
					header:{'content-type' : "application/x-www-form-urlencoded"},
					method:'post',
					data:{
						content:_this.value1,
						userid:_this.uid,
						post_id:_this.pid,
						reid:_this.resid
					}
					}).then(res=>{
			
						console.log(res)

					
					})
				}
				_this.restype = 0
				_this.value1 = ""
				uni.setStorageSync('comment_content',"");
				uni.redirectTo({
					url: '../pushBookdetails/pushBookdetails?pid='+_this.pid +'&tid=' + _this.tid
				})
			},
			res(id){
				_this.restype = 1
				_this.resid = id
				_this.click_textarea()
			},
			back(){
				uni.navigateBack()
			},
			moreReplies(index,index1){
				_this.comment[index1].rescomment.flog += 3
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
				_this.restype = 0
				
			},
			gettopic(tid){
				this.request({
				url:'/api.php?action=getTopicDetails',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					uid:_this.uid,
					topicid:tid
				}
				}).then(res=>{
					console.log(111)
					console.log(res.data)
					_this.topic = res.data

				})
			},
			getPost(pid){
				this.request({
				url:'/api.php?action=getthisPost',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					uid:_this.uid,
					postid:pid
				}
				}).then(res=>{
					console.log(res)
					if(res.data[0].Himg.length<30){
						let ip = uni.getStorageSync('serverIp')
						res.data[0].Himg = ip + '/' + res.data[0].Himg
					}
					for(let j=0;j<res.data[0].books.length;j++){
						if(res.data[0].books[j][0].bookimg.length<30){
						let ip = uni.getStorageSync('serverIp')
						res.data[0].books[j][0].bookimg = ip + '/' + res.data[0].books[j][0].bookimg
					}
					}
					
					res.data[0].post_tme = uni.$u.utils.UnixToDate(res.data[0].post_tme,false,8)
					_this.post = res.data[0]
				})
				
			},
			getcomment(pid){
				this.request({
				url:'/api.php?action=getPostComments',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					postid:pid
				}
				}).then(res=>{
					console.log(res.data)
					for(let i=0;i<res.data.length;i++){
						let a = res.data[i]
						if(res.data[i].Himg.length<30){
							let ip = uni.getStorageSync('serverIp')
							a.Himg = ip + '/' + res.data[i].Himg
							
						}
							a.comment1_time = uni.$u.utils.UnixToDate(a.comment1_time,false,8)
						
						for(let j=0;j<a.rescomment.data.length;j++){
								if(a.rescomment.data[j].Himg.length<30){
									let ip = uni.getStorageSync('serverIp')
									a.rescomment.data[j].Himg = ip + '/' + a.rescomment.data[j].Himg
									
								}
								a.rescomment.flog = 2
							}
						
						_this.comment.push(a)
					}
				
				})
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