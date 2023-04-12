<template>
	<view style="position: relative;">
		
	
	<view class="all" style="background: white;z-index: 999;">
		<view class="u-page__tag-item wall">
			<!-- 搜索，取消事件 -->
			<u-search v-model="value5" :clearabled="true"></u-search>
		</view>
		<view class="wall">
			<u-sticky bgColor="#fff">
		    <u-tabs @click="cliclass()" :list="list1" ></u-tabs>
			</u-sticky>
		</view>
		<!-- <view class="wall">
			<u-sticky bgColor="#fff">
		    <u-tabs :list="readjd"></u-tabs>
			</u-sticky>
		</view> -->
		<view class="wall">
			<u-sticky bgColor="#fff">
		    <u-tabs @click="clist()" :list="bookzt"></u-tabs>
			</u-sticky>
		</view>
		<view class="wall">
			<u-sticky bgColor="#fff">
		    <u-tabs @click="clilist()" :list="bookhot"></u-tabs>
			</u-sticky>
		</view>
	</view>
	<u-gap height="180" bgColor="#ffffff"></u-gap>
	<block v-for="(item,index) in booklist">
	<view class="flex padding-top-lg" style="width: 90%;margin: auto;" @click="clibook(item.bookid)">
		<view :class="[index <= 2 ? 'tetred' : '']" style="text-align: center;color: white;" class="tet"></view>
		<view class="flex" style="width: 100%;">
			
		
			<view class="imga basis-xs">
				<img :src="item.bookimg" alt="">
			</view>
			<view class="basis-xl padding-bottom-sm">
				<u-skeleton
					rows="3"
					title
					:loading="switch2"
					rowsHeight="14"
				>
					<!-- 需要在外部多嵌套一层占位view，否则在nvue下会导致样式失效 -->
					<view style="width: 100%;">
						<view  class="u-skeleton-slot" style="padding-top: 10.5px;width: 100%;">
					
							<view class="u-skeleton-slot__content">
								<u--text
									:text="item.bookname"
									type="main"
									size="15"
									:bold="true"
									:lines='1'
								></u--text>
								<u--text
									type="tips"
									size="12"
									customStyle="margin-top: 2px"
									:text="item.bookauthor"
									:lines='1'
								></u--text>
								<u--text
									type="tips"
									size="10"
									customStyle="margin-top: 2px"
									:text="item.class_name + '•' +item.bookState + '•' + item.bookHeat + '万人气'"
									:lines='1'
								></u--text>
							</view>
						</view>
					</view>
				</u-skeleton>
			</view>
		</view>
		
	</view>

	</block>
	<u-gap v-show="showloading" height="50" bgColor="#f1f1f1"></u-gap>
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
				showloading:false,
				thisclassid:0,
				thislist:0,
				thisstate:0,
				value5:'',
				booklist:[],
				list1: [{
						name: '全部',
						id:0
					}],

					//书本状态列表
					bookzt:[
						{
							name:"全部",
							id:0
						},
						
						{
							name:"连载",
							id:1
						},
						{
							name:"完结",
							id:2
						},
						{
							name:"断更",
							id:3
						}
					],
					bookhot:[
						{
							name:"综合",
							id:0
						},
						{
							name:"最新",
							id:1
						},
						{
							name:"热门",
							id:2
						}
					],
					thispage:0
			}
		},
		onLoad(op) {
			_this = this;
			_this.value5 = op.text;
			_this.getclass()
			_this.getBooks(0,0,0)
		},
		onReachBottom() {
			console.log('上拉')
			_this.showloading = true;
			setTimeout(() => {
				 //模拟加载书籍
				 this.getBooks(_this.thisclassid,_this.thisclassid,_this.thislist)
			}, 1000)
			
			// _this.showd = true

			// setTimeout(() => {
			// 	 //模拟加载书籍
				 
			// }, 2000)
		},
		methods: {
			clibook(i){
				uni.navigateTo({
					url: '/pages/read/index1?bid=' + i,
				
				})
			},
			getbooks(){
				_this.showload = true;
					_this.booklist = []
					this.request({
							url:'/api.php?action=getLeaderboardBooks',
							method:'post',
							header:{'content-type' : "application/x-www-form-urlencoded"},
							data:{
								listType:list,
								class_id:classid,
								maxnum:30
							},
							}).then(res=>{
								console.log(res)
								for(let i=0;i<res.data.length;i++){
									let a = {
										name:res.data[i].bookname,
										id:res.data[i].bookid,
										bookstate:res.data[i].bookState==2? '完结':'连载',
										bookHeat:res.data[i].bookHeat
									}
									_this.booklist.push(a)
								}
								
								_this.showload = false
						})
				},
				getclass(){
					this.request({
							url:'/api.php?action=getBookclassification',
							method:'post',
							header:{'content-type' : "application/x-www-form-urlencoded"},
				
							}).then(res=>{
								console.log(res)
								for(let i=0;i<res.length;i++){
									let a = {
										name:res[i].class_name,
										id:res[i].class_id
									}
									_this.list1.push(a)
								}
								
								
								
								
						})
				},
				getBooks(classid,bookstate,listtype){
					this.request({
							url:'/api.php?action=getListBooksByPage',
							method:'post',
							header:{'content-type' : "application/x-www-form-urlencoded"},
							data:{
								classid:classid,
								bookstate:bookstate,
								listtype:listtype,
								page:_this.thispage,
								pagenum:20
							},
							}).then(res=>{
								console.log(res)
								for(let i=0;i<res.data.length;i++){
									
									let a = res.data[i]
									switch(a.bookState){
										case '1':
											a.bookState = "连载"
											break
										case '2':
											a.bookState = "完结"
											break
										case '3':
											a.bookState = "断更"
											break
										default:
											a.bookState = "连载"
											break
									}
									if(a.bookimg.length<=30){
										let ip = uni.getStorageSync('serverIp')
										
											a.bookimg = ip+'/'+a.bookimg
										
									}
									_this.booklist.push(a)
								}
								_this.thispage += 1
								_this.showloading = false
								if(res.sum == 0){
									uni.showToast({
										title: '没有更多内容了',
										duration: 2000,
										icon:'error'
									});
									return
								}
								
						})
				},
				cliclass(e){
					_this.booklist = []
					_this.thispage = 0
					console.log(e.id)
					_this.thisclassid = e.id
					_this.getBooks(e.id,_this.thisstate,_this.thislist)
				},
				clist(e){
					_this.booklist = []
					_this.thispage = 0
					console.log(e.id)
					_this.thisstate = e.id
					_this.getBooks(_this.thisclassid,_this.thisstate,e.id)
				},
				clilist(e){
					_this.booklist = []
					_this.thispage = 0
					console.log(e.id)
					_this.thislist = e.id
					_this.getBooks(_this.thisclassid,_this.thisstate,e.id)
				}
			
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: white;
		height: 100%;
	}
	.wall{
		width: 90%;
		margin: auto;
	}
.bangdanthis{
		color: black;
	}
	.imga img{
		width: 80%;
		height: 140rpx;
	}
	.tet{
		width: 20rpx;
		line-height: 130rpx;
	}
	.all{
		position: fixed;
		top: 0;
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
