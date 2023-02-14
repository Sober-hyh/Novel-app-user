<template>
	<view>
		<!-- tab -->
		<view class="flex" style="border-bottom: 0.5rpx solid #cfcfcf;position: fixed;z-index: 99999;">
			<view class="basis-sm bg-white">
				
			</view>
			<view>
				<u-sticky bgColor="#fff">
			    <u-tabs @click="clicclass()" :list="list1"></u-tabs>
				</u-sticky>
			</view>
			
		</view>
		<!-- 下面导航和内容 -->
		<view class="flex" style="width: 100%;position: relative;">
			<!-- 导航 -->
			<view class="basis-xs bg-white padding-bottom-xs" style="border-right: 0.5rpx solid #cfcfcf;position: fixed;left: 0rpx;top: 46px;width: 20%;" >
				<view :class="[thisbd == index ? 'bangdanthis' : '']" class="bangdan padding-bottom-xs margin-top-xs" @click="clibdtab(item.id)" v-for="(item,index) in bdlist">{{item.name}}</view>
			</view>
			<!-- 内容 -->
			<view class="basis-xl padding-right-xs" style="width: 80%;position: absolute;right: 0;top: 48px;">
				
				<view>
					<view v-if="booklist.length==0">
						<u-empty
						        mode="data"
						        icon="http://cdn.uviewui.com/uview/empty/data.png"
								text="无筛选结果"
						>
						</u-empty>
					</view>
					<view v-if="showload" class="db">
						<div class="loadera">
						  <div class="outer"></div>
						  <div class="middle"></div>
						  <div class="inner"></div>
						</div>
					</view>
					<block v-for="(item,index) in booklist">
					<view class="flex padding-top-lg" >
						<view :class="[index <= 2 ? 'tetred' : '']" style="text-align: center;" class="tet">{{index+1}}</view>
						<view class="flex" style="width: 100%;">
							
						
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
													:text="item.name"
													type="main"
													size="13"
													:bold="true"
													:lines='1'
												></u--text>
												<u--text
													type="tips"
													size="10"
													customStyle="margin-top: 2px"
													:text="item.bookstate + '•' + item.bookHeat +'万人气'"
													:lines='1'
												></u--text>
											</view>
										</view>
									</view>
								</u-skeleton>
							</view>
						</view>
						
					</view>
					<view style="width: 100%;" class="padding-top-sm margin-bottom-sm" v-if="index==booklist.length-1">
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
				 list1: [],
					thisbd:0,
					class_id:1,
					bdlist:[

					],
					booklist:[],
					showload:false
			}
		},
		onLoad() {
			_this = this;
			this.getList()
			this.getclass()
			this.getbooks(1,1)
		},
		methods: {
			clibdtab(e){
				console.log(e)
				
				_this.thisbd = e -1
				this.getbooks(e,_this.class_id)
			},
			allbook(){
				console.log(1)
				uni.navigateTo({
					url: '../../subpackageA/allBooks/allBooks'
				})
			},
			getList(){
				
				this.request({
						url:'/api.php?action=getList',
						method:'post',
						header:{'content-type' : "application/x-www-form-urlencoded"},

						}).then(res=>{
							for(let i=0;i<res.data.length;i++){
								let a = {
									name:res.data[i].listname,
									id:res.data[i].listid
								}
								_this.bdlist.push(a)
							}
							
							
							
							
					})
			},
			clicclass(e){
				console.log(e.id)
				_this.class_id = e.id
				this.getbooks(_this.thisbd+1,e.id)
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
			getbooks(list,classid){
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
			}
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
	.db{
		width: 100%;
		height: 100px;
		position: absolute;
		bottom: 0;
	}
</style>
