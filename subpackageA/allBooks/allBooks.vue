<template>
	<view>
		
	
	<view class="all" style="background: white;z-index: 999;">
		<view class="u-page__tag-item wall">
			<!-- 搜索，取消事件 -->
			<u-search v-model="value5" :clearabled="true"></u-search>
		</view>
		<view class="wall">
			<u-sticky bgColor="#fff">
		    <u-tabs :list="list1" ></u-tabs>
			</u-sticky>
		</view>
		<!-- <view class="wall">
			<u-sticky bgColor="#fff">
		    <u-tabs :list="readjd"></u-tabs>
			</u-sticky>
		</view> -->
		<view class="wall">
			<u-sticky bgColor="#fff">
		    <u-tabs :list="bookzt"></u-tabs>
			</u-sticky>
		</view>
		<view class="wall">
			<u-sticky bgColor="#fff">
		    <u-tabs :list="bookhot"></u-tabs>
			</u-sticky>
		</view>
	</view>
	<u-gap height="210" bgColor="#ffffff"></u-gap>
	<block v-for="(item,index) in 10">
	<view class="flex padding-top-lg" style="width: 90%;margin: auto;">
		<view :class="[index <= 2 ? 'tetred' : '']" style="text-align: center;color: white;" class="tet"></view>
		<view class="flex" >
			
		
			<view class="imga basis-xs">
				<img src="https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg" alt="">
			</view>
			<view class="basis-xl padding-bottom-sm">
				<u-skeleton
					rows="3"
					title
					:loading="switch2"
					rowsHeight="14"
				>
					<!-- 需要在外部多嵌套一层占位view，否则在nvue下会导致样式失效 -->
					<view>
						<view class="u-skeleton-slot" style="padding-top: 10.5px;">
					
							<view class="u-skeleton-slot__content">
								<u--text
									text="利剑出鞘,一统江湖利剑出鞘,一统江湖利剑出鞘,一统江湖利剑出鞘,一统江湖利剑出鞘"
									type="main"
									size="15"
									:bold="true"
									:lines='1'
								></u--text>
								<u--text
									type="tips"
									size="12"
									customStyle="margin-top: 2px"
									text="不吃西红柿"
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

	</block>
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
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
							name:"完结",
							id:2
						},
						{
							name:"连载",
							id:1
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
							name:"最新"
						},
						{
							name:"热门"
						}
					],
			}
		},
		onLoad(op) {
			_this = this;
			_this.value5 = op.text;
			_this.getclass()
		},
		methods: {
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
</style>
