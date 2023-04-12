<template>
	<view style="padding-bottom: 30px;position: relative;">
		<view style="height: 0px;">
			<!-- <view style="float: left;" class="padding-left-xs">
				<h1>全部</h1>
			</view> -->
			<!-- <view style="float: right;" class="padding-right-xs">
				<u-icon size="32" name="search"></u-icon>
			</view> -->
			
		</view>
		<u-gap height="15" bgColor="#f6f6f6"></u-gap>
		<block v-for="(item,index) in topicList" :key="item.tid">
			<view class="listTopics_item " @click="tp(item.tid)">
				<view class="grid col-1">
					<view>
						<u--text size="15" :bold="true" :lines="2" :text="item.t_name"></u--text>
					</view>
					<view>
						<u--text color="#8f8f8f" :lines="1" :text="item.t_numberpost + '个帖子'"></u--text>
					</view>
				</view>
			</view>
			<u-gap height="10" bgColor="#f6f6f6"></u-gap>
		</block>
		<view class="footer">
			<view class="fbtn">
				<button @click="tp_restp" class="flex"><u-icon color="#ffffff" size="32" name="edit-pen"></u-icon>发求书话题</button>
			</view>
		</view>
		<u-gap v-show="showloading" height="50" bgColor="#f6f6f6"></u-gap>
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
	export default {
		data() {
			return {
				phit:0,
				topicList:[],
				page:0,
				showloading:false
			}
		},
		
		onLoad() {
			_this = this
			_this.page = 0
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			_this.phit = menuButtonInfo.top;
			this.getTopiclist()
		},
		onReachBottom() {
			console.log('上拉')
			_this.showloading = true;
			setTimeout(() => {
				 //模拟加载书籍
				 this.getTopiclist()
			}, 1000)

		},
		methods: {
			tp(tid){
				uni.navigateTo({
					url: '../topicDetails/topicDetails?tid=' + tid,

				}
				)
			},
			tp_restp(){
				uni.navigateTo({
					url: '../releaseTopic/releaseTopic'
				})
			},
			getTopiclist(page,pagenum){
				if(_this.page==0){
					_this.topicList = []
				}
				
				this.request({
				url:'/api.php?action=getTopiclist',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					page:_this.page,
					pagenum:15
				}
				}).then(res=>{
					console.log(res)
					if(res.sum == 0){
						uni.showToast({
							title: '没有更多内容了',
							duration: 2000,
							icon:'error'
						});
						return
					}
					for(let i=0;i<res.data.length;i++){
						let a = res.data[i]
				
						_this.topicList.push(a)
						// console.log(res[i])
					}
					
					_this.page+=1
					_this.showloading = false
				})
			}
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
