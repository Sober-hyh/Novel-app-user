<template>
	<view style="position: relative;">
		<!-- //编辑界面脚 -->
		<u-modal
			:show="ifshowdelpop"
			title="是否移出书架"
			showCancelButton
			buttonReverse
			@confirm="delok()"
			@cancel="() => ifshowdelpop = false"
		></u-modal>
		<view v-if="checkboxValue1.length > 0" class="editf flex justify-end">
			<view class="e1 grid col-1" @click="delpop">
				<u-icon size="30" name="trash"></u-icon>
				<text>删除</text>
			</view>
		</view>
		<!-- 上半部分固定 -->
		<view>
			<view v-if="editshow == false" class="flex justify-between" style="position: relative;" :style="{marginTop: phit+'px',paddingRight: rwit+'px'}" >
				<!-- 导航 -->
				<view >
					 <u-tabs
						:list="list4"
						lineWidth="20"
						lineColor="#f56c6c"
						@click="clitab()"
						:activeStyle="{
							color: '#303133',
							fontWeight: 'bold',
							fontSize:'24px',
							transform: 'scale(1.05)'
						}"
						:inactiveStyle="{
							color: '#606266',
							transform: 'scale(1)'
						}"
						itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
					>
					</u-tabs>
				</view>
				<!-- 气泡菜单 -->
				<view v-if="editshow == false" style="width: 40rpx;">
					<view style="position: absolute;bottom: 10rpx;">
						<u-icon @click="cliys()" :bold="true" name="list" size="24" labelPos="bottom"></u-icon>
					</view>
					
					<chunLei-popups v-model="value" :popData="data1" @tapPopup="tapPopup" :x="x" :y="y" placement="top-end">
						</chunLei-popups>
				</view>
			</view>
			<!-- 编辑界面头 -->
			<!-- <u-gap v-if="editshow" :height="phit" bgColor="#ffffff"></u-gap> -->
			<view v-if="editshow" class="flex editfi" :style="{paddingTop: y+'px',height:y+30+'px'}" style="overflow: hidden;z-index: 999;background-color: white;">
				<view class="edita text-bold text-xl" style="" @click="selectAll()">{{ifselall ?  '全不选' : '全选'}}</view>
				<view class="edita text-bold text-xl" style="text-align: center;">已选择{{checkboxValue1.length}}本书</view>
				<view class="edita text-bold text-xl" style="text-align: right;" @click="editok()">完成</view>
			</view>
			<u-gap v-if="editshow" :height="phit+40" bgColor="#ffffff"></u-gap>
			
			<view v-if="bookshekf==true">
				
			
			<!-- 阅读分钟+编辑 -->
			<u-gap v-if="editshow == false" height="20" bgColor="#ffffff"></u-gap>
			<view v-if="editshow == false" class="flex justify-between padding-left-xl padding-right-xs">
				<view class="readtime">累计阅读9999分钟</view>
				<view class="edit padding-right-xs flex">
					<view class="padding-right-xs" @click="tapPopup1()">{{modetext}}</view>
					<view>|</view>
					<view class="padding-left-xs" @click="editbook()">编辑</view>
				</view>
				
			</view>
			<!-- <u-gap v-if="editshow == false" height="20" bgColor="#ffffff"></u-gap> -->
			<!-- 筛选和标签展示 -->
			<view v-if="editshow == false" class="flex justify-between">
				<view class="tag flex padding-left-xl justify-around" style="max-width: 90%;">
					<block v-for="(item,index) in taglist">
						<u-tag :text="item.name" type="warning" closable :show="item.show" @close="taglist[index].show = false"></u-tag>
					</block>
					
				</view>
				<view class="Filter flex padding-right-xs" style="height: 100%;margin-top: 20rpx;" @click="tagpopshow = true">
					<view class="cuIcon-filter" style="font-size: 1rem;text-align: center;height: 60rpx;line-height: 60rpx;"></view>
					<view class="sx padding-right-xs">筛选</view>
				</view>
			</view>
			</view>
		</view>
		<!-- 筛选弹出层 -->
		<view style="width: 100%;">
			<u-popup :show="tagpopshow" mode="bottom"  @close="closepop" @open="openpop">
				<u-gap height="20" bgColor="#ffffff"></u-gap>
				<view class="flex">
					<text class="padding-left-xs padding-right-xs" style="line-height: 26px;">已选标签：</text>
					<block v-for="(item,index) in taglist">
						<u-tag :text="item.name" type="warning"></u-tag>
					</block>
				</view>
			        <view>
			             <u-tabs 
						 :list="readjd" 
						 @click="clickjd"
						 lineWidth="0"
						 :activeStyle="{
							 color: '#e88f65',
							 transform: 'scale(1.05)'
						 }"
						 ></u-tabs>
			        </view>
					<view>
					     <u-tabs 
						 :list="bookzt" 
						 @click="clickzt"
						 lineWidth="0"
						 :activeStyle="{
							 color: '#e88f65',
							 transform: 'scale(1.05)'
						 }"
						 ></u-tabs>
					</view>
					<view>
					     <u-tabs 
						 :list="booktag" 
						 @click="clicksxtag"
						 lineWidth="0"
						 :activeStyle="{
							 color: '#e88f65',
							 transform: 'scale(1.05)'
						 }"
						 ></u-tabs>
					</view>
				</u-popup>
		</view>
		<!-- 宫格布局 -->
		<view v-if="mode == 'grid'" class=" padding-left-xl ggg">
						   <u-checkbox-group
			           v-model="checkboxValue1"
			           placement="column"
			           @change="checkboxChange"
			       >
				<view class="grid col-3">
					    
				   
				<view class="sj" v-for="(item,index) in 10">
					<text class="text-xl text-bold" v-if="index==0 && bookshekf == false">今天</text>
					<text class="text-xl text-bold" v-if="index==6 && bookshekf == false">前天</text>
					<text class="text-xl text-bold" v-if="index==9 && bookshekf == false">更早之前</text>
					<text class="text-xl text-bold" v-show="bookshekf == false" v-else style="color: white;">更早之前</text>
					<img src="https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg" alt="">
					<view style="width: 170rpx;" class="text-bold">
						<view v-if="editshow">
							<u-checkbox
												:customStyle="{}"
												:key="index"
												:label="index"
												:name="index"
												size="20px"
												labelColor="#ffffff"
												labelSize="0px"
												>
												</u-checkbox>
						</view>
						<u--text :lines="2" text="我用十年青春,赴你最后之约"></u--text>
						
						</view>
					<view style="color: #cdcdcd">100章未读</view>
				</view>  
				<view class="sj" v-if="10%3 != 0" v-for="item in (3-1)"></view>
				</view>
				 </u-checkbox-group> 
				   
			
			

			
			
		</view>
		<!-- 列表布局 -->
		<view v-if="mode == 'list'">
			<u-gap height="20" bgColor="#ffffff"></u-gap>
			<u-checkbox-group
			    v-model="checkboxValue1"
			    placement="column"
			    @change="checkboxChange"
			>
			<block v-for="(item,index) in 10">
				<text class="text-xl text-bold padding-left-xs" v-if="index==0 && bookshekf == false">今天</text>
				<text class="text-xl text-bold padding-left-xs" v-if="index==6 && bookshekf == false">前天</text>
				<text class="text-xl text-bold padding-left-xs" v-if="index==9 && bookshekf == false">更早之前</text>
				<text class="text-xl text-bold padding-left-xs" v-show="bookshekf == false" v-else style="color: white;">更早之前</text>
			
			<view class="flex seclist margin-bottom-xl" >
				<view>
					<img class="imglist" src="https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg" alt="">
				</view>
				<view class="flex">
					<view>
						<view class="text-bold">我用十年青春,赴你最后之约我用十年青春</view>
						<view>我是作者</view>
						<view  style="color: #cdcdcd">100章未读</view>
					</view>
					<view v-if="editshow" style="margin-top:40rpx;">
						<u-checkbox
											:customStyle="{}"
											:key="index"
											:label="index"
											:name="index"
											size="20px"
											labelColor="#ffffff"
											labelSize="0px"
											>
											</u-checkbox>
					</view>
					
				</view>
			</view>
			</block>
			</u-checkbox-group> 
		</view>
	</view>
</template>

<script>
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	
	let _this;
	export default {
		components:{
			chunLeiPopups
			},
		data() {
			return {
				//tab列表
				list4:[
					{
						name: '书架'
					},
					{
						name: '浏览历史'
					}
				],
				x:0,
				y:0,
				//tab距离
				phit:0,
				rwit:0,
				value:false,
				data1:[
					{
						title:'切换列表模式',
						icon:'https://hyh-images.oss-cn-chengdu.aliyuncs.com/Graduate/icon/Default/list.png',
						mode:'grid'
					},
					{
						title:'隐私设置',
						icon:'https://hyh-images.oss-cn-chengdu.aliyuncs.com/Graduate/icon/Default/ys.png',
						mode:'ys'
					}
				],
				//排列模式 list 列表 grid 宫格  
				mode:'grid',
				modetext:'列表',
				//选择标签列表
				taglist:[
					
				],
				//已选择选择标签列表
				seltaglist:[
					
					
				],
				//标签筛选弹出层
				tagpopshow:false,
				//tab阅读进度列表
				readjd:[
					{
						name:"全部"
					},
					{
						name:"未读过"
					},
					{
						name:"未读50章以上"
					},
					{
						name:"未读300章以上"
					},
					{
						name:"已读完"
					}
				],
				//书本状态列表
				bookzt:[
					{
						name:"全部"
					},
					{
						name:"完结"
					},
					{
						name:"连载"
					},
					{
						name:"断更"
					}
				],
				//大tag标签
				booktag:[
					{
						name:"全部"
					},
					{
						name:"玄幻"
					},
					{
						name:"都市"
					},
					{
						name:"系统"
					},
					{
						name:"游戏"
					},
					{
						name:"科幻"
					},
					{
						name:"穿越"
					},
					{
						name:"重生"
					},
					{
						name:"仙侠"
					},
					{
						name:"历史"
					}
				],
				//显示编辑
				editshow:false,
				 checkboxValue1:[
					 
				 ],
				// 基本案列数据
				checkboxList1: [{
						name: '苹果',
						disabled: false
					},
					{
						name: '香蕉',
						disabled: false
					},
					{
						name: '橙子',
						disabled: false
					}
				],
				//显示书城还是历史
				bookshekf:true,
				//全部选择是否
				ifselall:false,
				//删除模态框
				ifshowdelpop:false
			}
		},
		onLoad() {
			_this = this;
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			_this.phit = menuButtonInfo.top;
			_this.rwit = menuButtonInfo.width+20
			_this.x = menuButtonInfo.left - 20
			_this.y = menuButtonInfo.bottom
		},
		methods: {
			checkboxChange(n) {
				console.log('change', n);
				_this.checkboxValue1 = n
				console.log(_this.checkboxValue1)
			    },
			//书架tab点击
			clitab(e){
				console.log(e)
				if(e.index==1){
					_this.bookshekf = false
				}else{
					_this.bookshekf = true
				}
			},
			//设置点击
			cliys(){
				_this.value = true
			},
			//切换列表
			tapPopup(e){
				console.log(e)
				if(e.mode == 'list'){
					_this.data1[0].mode = 'grid'
					_this.data1[0].title = '切换列表模式'
					_this.data1[0].icon = 'https://hyh-images.oss-cn-chengdu.aliyuncs.com/Graduate/icon/Default/list.png'
					_this.mode = 'grid'
				}
				if(e.mode == 'grid'){
					_this.data1[0].mode = 'list'
					_this.data1[0].title = '切换宫格模式'
					_this.data1[0].icon = 'https://hyh-images.oss-cn-chengdu.aliyuncs.com/Graduate/icon/Default/grid.png'
					_this.mode = 'list'
				}
				_this.modetext = _this.mode ==  'list' ? '宫格' : '列表'
			},
			tapPopup1(){
				console.log(1,_this.mode)
				if( _this.mode == 'list'){
					_this.data1[0].mode = 'grid'
					_this.data1[0].title = '切换列表模式'
					_this.data1[0].icon = 'https://hyh-images.oss-cn-chengdu.aliyuncs.com/Graduate/icon/Default/list.png'
					_this.mode = 'grid'
					_this.modetext = _this.mode ==  'list' ? '宫格' : '列表'
					console.log('变为宫格')
					return
				}
				if( _this.mode == 'grid'){
					_this.data1[0].mode = 'list'
					_this.data1[0].title = '切换宫格模式'
					_this.data1[0].icon = 'https://hyh-images.oss-cn-chengdu.aliyuncs.com/Graduate/icon/Default/grid.png'
					_this.mode = 'list'
					_this.modetext = _this.mode ==  'list' ? '宫格' : '列表'
					console.log('变为列表')
					return
				}
				
			},
			//打开关闭标签筛选
			closepop(){
				_this.tagpopshow = false
			},
			openpop(){
				_this.tagpopshow = true
			},
			//点击筛选阅读进度
			clickjd(e){
				console.log(e)
				let a = {
					show:true,
					name:e.name
				}
				if(_this.taglist[0]){
					_this.taglist[0].name = e.name
				}else{
					_this.taglist.push(a)
				}
				
			},
			//点击书本状态
			clickzt(e){
				console.log(e)
				let a = {
					show:true,
					name:e.name
				}
				if(_this.taglist[1]){
					_this.taglist[1].name = e.name
				}else{
					_this.taglist.push(a)
				}
			},
			//点击书本标签筛选
			clicksxtag(e){
				console.log(e)
				let a = {
					show:true,
					name:e.name
				}
				if(_this.taglist[2]){
					_this.taglist[2].name = e.name
				}else{
					_this.taglist.push(a)
				}
			},
			//编辑书本
			editbook(){
				_this.editshow = true
			},
			selectAll(){
				if(_this.ifselall){
					_this.checkboxValue1 = []
					_this.ifselall = false
				}else{
					_this.checkboxValue1 = []
					for(let i = 0;i<10;i++){
						_this.checkboxValue1.push(i)
					}
					_this.ifselall = true
				}
				
				
			},
			editok(){
				_this.editshow=false
				_this.checkboxValue1 = []
			},
			delpop(){
				console.log(11)
				_this.ifshowdelpop = true
			},
			delok(i){
				// _this.checkboxValue1.splice(i,1)
				_this.ifshowdelpop = false
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: white;
		// overflow-x: hidden;
	}
	.readtime{
		min-width: 200rpx;
		height: 70rpx;
		text-align: center;
		line-height: 70rpx;
		background-color: #aaffff;
		border-radius: 15rpx;
		padding: 0 20rpx;
	}
	.edit{
		height: 70rpx;
		line-height: 70rpx;
		font-size: 1rem;
		font-weight: bold;
	}
	.sx{
		font-size: 1rem;
		height: 60rpx;
		line-height: 60rpx;
	}
	.tagaa{
		margin-right: 20rpx;
	}
	.sj{
		width: 170rpx;
		margin: auto;
		
	}
	.imglist{
		width: 140rpx;
		height: 190rpx;
		border-radius: 15rpx;
		margin-left: 10rpx;
		margin-right: 20rpx;
	}
	.sj img{
		width: 170rpx;
		height: 240rpx;
		border-radius: 15rpx;
		margin-top: 40rpx;
	}
	.ggg{
		
	}
	.editfi{
		position: fixed;
		height: 30px;
		width: 100%;
	}
	.edita{
		width: 33%;
	}
	.editf{
		width: 100%;
		height: 110rpx;
		background-color: white;
		position: fixed;
		bottom: 0px;
		z-index: 999;
		color: #e88f65;
	}
	.e1{
		// width: 25%;
		// height: 100%;
	}
</style>
