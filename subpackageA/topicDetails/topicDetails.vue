<template>
	<view style="padding-bottom: 30px;position: relative;">
		<view class="head">
			<view class="flex margin-left-xs padding-top-xs">
				<view>
					<u-icon color="#ffffff" name="chat-fill" size="28"></u-icon>
				</view>
				<view class="padding-right-xs" >
					<u--text :lines="2"  size="18" color="#ffffff" :bold="true" :text="topic.t_name"></u--text>
				</view>
				<view class="margin-right-lg">
					<button @click="sc(topic.tid)" class="scbtn" :class="[ifsc=='已收藏' && 'ifsc']">{{ifsc}}</button>
				</view>
			</view>
			<view style="color: #c8d2eb;width: 90%;margin: 0 auto;">
					<mote-lines-divide :dt="topic.t_introduce" :line="3" expandText="展开" foldHint="收起"/>
			</view>
		</view>	
			<!-- 推荐显示 -->
		<u-gap height="20" bgColor="#ffffff"></u-gap>
		<!-- <block v-for="(item,index) in booktest">
			
		</block> -->
		<view v-if="tiezilist.length==0">
			<u-empty
			        mode="data"
			        icon="http://cdn.uviewui.com/uview/empty/data.png"
			>
			</u-empty>
		</view>
		<view v-if="tiezilist.length>0" class="content-topic" style="width: 90%;margin: 0 auto;" v-for="(item,index) in tiezilist" :key="item.post_id">

			<view class="flex" style="height: 40px;">
				<u-avatar :src="item.Himg"></u-avatar>
				<view class="grid col-1 margin-left-xs">
					<view>
						<text style="color: #494949;">{{item.nickname}}</text>	
					</view>
					<view>
						<text style="color: #949494;">{{item.post_tme}}</text>
					</view>
					
				</view>
			<!-- 	<view style="height: 40px;">
					<u-icon @click="cliys()" name="more-dot-fill"></u-icon>
					<chunLei-popups v-model="value" :popData="data1" @tapPopup="tapPopup" :x="x" :y="y" placement="top-end">
						</chunLei-popups>
				</view> -->
			</view>
			<view  class="margin-top-xs margin-bottom-xs" style="padding-left: 40rpx;">
				<mote-lines-divide :dt="item.post_introduce" :line="3" expandText="展开" foldHint="收起"/>
			</view>
		
			<view>
				<!-- 多本书显示 -->
				<view v-if="item.books.length > 1" class="book-content-1 padding-bottom-lg">
					<view class="padding-left-lg padding-bottom-xs padding-top-xs flex justify-between">
						<view>
							<text style="color: #b0b0b1;">共推荐{{item.books.length}}本书</text>
						</view>
						<view @click="jump(item.post_id)" style="color: #b0b0b1;" class="padding-right-xs">
							全部>
						</view>
					</view>
					<view style="width: 95%;margin: 0 auto;">
						<u-line></u-line>
					</view>
					<view>
						<view class="flex margin-left-lg margin-top-xs" style="">
							<view class="grid col-1" v-for="item1 in item.books">
								<!-- 书封面 -->
								<view>
									<img @click="tpbook(item1[0].bookid)" class="img-book" :src="item1[0].bookimg" alt="">
								</view>
								<!-- 书名 -->
								<view style="width: 80%;">
									<u--text :lines="2" :text="item1[0].bookauthor"></u--text>
								</view>
							</view>
							<view class="grid col-1" v-if="item.books.length!=4" v-for="item5 in (4-item.books.length)">
								<!-- 书封面 -->
								<view>
									<img  class="img-book" src="" alt="">
								</view>
								<!-- 书名 -->
								<view style="width: 80%;">
									<text></text>
								</view>
							</view>
						</view>
						
					</view>
					
				</view>
				<!-- 单本书显示 -->
				<view  v-if="item.books.length == 1" class="book-content-2 padding-top-xs" style="margin-bottom: 60rpx;min-height: 120px;">
					<view class="padding-left-lg padding-bottom-xs padding-top-xs flex justify-between">
						<view>
							<text style="color: #b0b0b1;"></text>
						</view>
						<view @click="jump(item.post_id)" style="color: #b0b0b1;" class="padding-right-xs">
							详情>
						</view>
					</view>
					<view style="width: 95%;margin: 0 auto;">
						<u-line></u-line>
					</view>
					<view class="flex margin-left-lg" style="margin-top: 20rpx;">
						<view>
							<img class="img-book-1" :src="item.books[0][0].bookimg" alt="">
						</view>
						<view class="grid col-1" style="width: 75%;">
							<!-- 书名 -->
							<view class="flex justify-between padding-left-xs padding-top-xs" style="font-size: 32rpx;">
								<text style="font-weight: bold;">{{item.books[0][0].bookname}}</text>
								<text style="font-weight: bold;color: red;">{{item.books[0][0].bookRating}}分</text>
							</view>
							<view class="padding-left-xs padding-bottom-xs">
								{{item.books[0][0].class_name}}
							</view>
						</view>
					</view>
					
				</view>
				<!-- 互动 -->
				<view class="flex justify-between margin-bottom-xs margin-top-xs">
					<!-- 评论 -->
					<view style="width: 50%;">
						<view class="flex hd1">
							<u-icon @click="pl(item.post_id)" size="24" name="chat"></u-icon>
							<text style="font-size: 24rpx;line-height: 30px;">{{item.pl}}</text>
						</view>
						
					</view>
					<!-- 点赞 -->
					<view style="width: 50%;">
						<view class="flex hd1">
							<u-icon v-if="item.ifdz==true" @click="dz(item.post_id,item.ifdz,index)" color="red" size="24" name="heart-fill"></u-icon>
							<u-icon v-if="item.ifdz==false" @click="dz(item.post_id,item.ifdz,index)" size="24" name="heart"></u-icon>
							<text style="font-size: 24rpx;line-height: 30px;">{{item.dz}}</text>
						</view>
						
						
					</view>
				</view>
				<view style="width:100%;margin: 0 auto;">
					<u-line></u-line>
				</view>
			</view>
			<u-gap height="20" bgColor="#ffffff"></u-gap>
		</view>
		
		<view class="footer">
			<view class="fbtn">
				<button @click="tp()" class="flex"><u-icon color="#ffffff" size="32" name="edit-pen"></u-icon>推荐好书</button>
			</view>
		</view>
		<u-gap v-show="showloading" height="50" bgColor="#ffffff"></u-gap>
		<view class="all_loading" v-show="showloading">
			<div class="loadera">
			  <div class="outer"></div>
			  <div class="middle"></div>
			  <div class="inner"></div>
			</div>
		</view>
	</view>


</template>

<script>
	let _this;
import MoteLinesDivide from "@/components/mote-lines-divide/mote-lines-divide"
	export default {
		components: {
			    MoteLinesDivide
			},
		data() {
			
			return {
				showloading:false,
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
				],
				uid:0,
				topic:{},
				tid:0,
				page:0,
				tiezilist:[]
			}
		},
		onReachBottom() {
			console.log('上拉')
			_this.showloading = true;
			setTimeout(() => {
				 //模拟加载书籍
				 this.getTiezi(_this.topic.tid,_this.page)
			}, 1000)
		
		},
		onLoad(op){
			_this = this;
			const userinfo = uni.getStorageSync('userinfo')
			_this.uid = userinfo.uid
			if(op.tid){
				_this.tid = op.tid
				this.getTopic(op.tid)
				this.getTiezi(op.tid,_this.page)
			}else{
				uni.showToast({
					title: '数据错误',
					duration: 2000,
					icon:'error'
				});
				uni.navigateBack()
			}
			
		},
		methods:{
			jump(id){
				console.log(1)
				uni.navigateTo({
					url: '../pushBookdetails/pushBookdetails?pid='+id +'&tid=' + _this.tid
				})
			},
			dz(pid,zt,i){
				this.request({
				url:'/api.php?action=topicPostLikes',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					uid:_this.uid,
					pid:pid
				}
				}).then(res=>{
					if(_this.tiezilist[i].ifdz){
						_this.tiezilist[i].dz -=1
					}else{
						_this.tiezilist[i].dz +=1
					}
					
					_this.tiezilist[i].ifdz = !zt
					
					console.log(res)
					})
			},
			sc(tid){
				this.request({
				url:'/api.php?action=scTopic',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					uid:_this.uid,
					tid:tid
				}
				}).then(res=>{
					
					console.log(res)
					if(res){
						uni.showToast({
							title: '更新成功',
							duration: 2000,
							icon:'success'
						});
						_this.topic.ifsc = _this.topic.ifsc ? false:true
						_this.ifsc = _this.topic.ifsc==true ? '已收藏':'收藏'
					}else{
						uni.showToast({
							title: '网络错误',
							duration: 2000,
							icon:'error'
						});
					}
				// 	for(let i=0;i<res.data.length;i++){
				// 		let a = res.data[i]
				
				// 		_this.topicList.push(a)
				// 		// console.log(res[i])
				// 	}
				
				})
			},
			tp(){
				uni.navigateTo({
					url: '../recommendBook/recommendBook?tid=' +_this.tid
				})
			},
			getTopic(tid){
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
					_this.ifsc = _this.topic.ifsc==true ? '已收藏':'收藏'
				// 	for(let i=0;i<res.data.length;i++){
				// 		let a = res.data[i]
				
				// 		_this.topicList.push(a)
				// 		// console.log(res[i])
				// 	}
				
				})
			},
			getTiezi(tid,page){
				_this.showloading =true
				if(page==0){
					_this.tiezilist = []
				}
				this.request({
				url:'/api.php?action=getAllPostsOnTopics',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					tid:tid,
					page:page,
					pagenum:10,
					uid:_this.uid
				}
				}).then(res=>{
					console.log(111)
					console.log(res.data)
				
					for(let i=0;i<res.data.length;i++){
						let a = res.data[i]
						if(a.Himg.length<30){
							let ip = uni.getStorageSync('serverIp')
							a.Himg = ip + '/' + a.Himg
						}
						for(let j=0;j<a.books.length;j++){
							if(a.books[j][0].bookimg.length<30){
							let ip = uni.getStorageSync('serverIp')
							a.books[j][0].bookimg = ip + '/' + a.books[j][0].bookimg
						}
						}
						
						a.post_tme = uni.$u.utils.UnixToDate(a.post_tme,false,8)
						_this.tiezilist.push(a)
						// console.log(res[i])
					}
					if(res.sum==0){
						uni.showToast({
							title: '没有更多内容了',
							duration: 2000,
							icon:'error'
						});
						_this.showloading = false
						return
					}
				_this.showloading = false
				_this.page+=1
				})
			}
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
		width: 36%;
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
		text-align: center;
	}
	
	.all_loading{
			position: absolute;
			height: 10px;
			width: 100%;
			bottom: 20px;
		}
	.loader {
		  position: absolute;
		  left: 0; 
		  top: 0; 
		  right: 0; 
		  bottom: 0;
		  margin: auto;
		}
		
		.outer,
		.middle,
		.inner {
		  border: 3px solid transparent;
		  border-top-color: #3cefff;
		  border-right-color: #3cefff;
		  border-radius: 50%;
		  position: absolute;
		  top: 50%;
		  left: 50%;
		}
		
		.outer {
		  width: 3.5em;
		  height: 3.5em;
		  margin-left: -1.75em;
		  margin-top: -1.75em;
		  animation: spin 2s linear infinite;
		}
		
		.middle {
		  width: 2.1em;
		  height: 2.1em;
		  margin-left: -1.05em;
		  margin-top: -1.05em;
		  animation: spin 1.75s linear reverse infinite;
		}
		
		.inner {
		  width: 0.8em;
		  height: 0.8em;
		  margin-left: -0.4em;
		  margin-top: -0.4em;
		  animation: spin 1.5s linear infinite;
		}
		
		@keyframes spin {
		  to {
		    transform: rotate(360deg);
		  }
		}
</style>