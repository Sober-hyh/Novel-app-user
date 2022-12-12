<template>
	<view>
		<view class="flex bg-white sec">
			<!-- #ifndef MP-WEIXIN -->
			<u-icon @click="back()" name="arrow-left" size="28"></u-icon>
			<!-- #endif -->
			<view class="cu-bar search bg-white" style="width: 100%;">
				<view class="search-form round" style="width: 80%;">
					<text class="cuIcon-search"></text>
					<input  @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" @input="secinput()" v-model="secvalue" :placeholder="pla" confirm-type="search"></input>
				</view>
				<view class="action">
					<button @click="clisec()" class="cu-btn bg-green shadow-blur round">搜索</button>
				</view>
			</view>
		</view>
		<view style="margin-top: 80px;" v-show="showsearch == false">
		<view v-show="sealianxiang" class="sealianxiang text-bold text-xl">
			<u-list
						@scrolltolower="scrolltolower"
					>
						<u-list-item
							v-for="(item, index) in 10"
							:key="index"
						>
							<u-cell
								:title="secvalue"
								@click="cliseclist(secvalue)"
							>
							<u-icon slot="icon" size="32" name="search"></u-icon>
							</u-cell>
						</u-list-item>
				</u-list>
		</view>
		
		<view v-show="ifshowxiabufen">
		
		<view style="width: 100%;" v-if="ifshowseahistroy">
			<u-gap height="20" bgColor="#ffffff"></u-gap>
			<view class="flex justify-between ls">
				<text class="text-bold">搜索历史</text>
				<u-icon @click="deljl()" name="trash" size="24"></u-icon>
			</view>
			<view class="flex jl" >
				<view class="grid col-1" style="width: 50%;" v-for="(item,index1) in 2">
					<text v-for="(item1,index) in sealist" @click="cliseclist(item1.title)" class="text-cut text-bold padding-top-xs margin-top-xs" style="width: 300rpx;" v-if="index<=1 && index1==0">{{item1.title}}</text>
					<text v-for="(item1,index) in sealist" @click="cliseclist(item1.title)" class="text-cut text-bold padding-top-xs margin-top-xs" style="width: 300rpx;" v-if="index>1 && index1==1">{{item1.title}}</text>
					<!-- <text class="text-cut text-bold padding-top-xs margin-top-xs" style="width: 300rpx;">{{item.title}}</text> -->
				</view>
			</view>
		</view>
		
		<u-gap height="20" bgColor="#ffffff"></u-gap>
		<view class="flex justify-between ls">
			<text class="text-bold">搜索推荐</text>
			<!-- <u-icon name="" size="24"></u-icon> -->
		</view>
		<view class="flex jl">
			<view class="grid col-1" style="width: 50%;" v-for="item in 2">
				<text class="text-cut text-bold padding-top-xs margin-top-xs" style="width: 300rpx;">怒萨芬几哈舒服哦啊肺静哦啊肺静哦啊肺静哦啊肺</text>
				<text class="text-cut text-bold padding-top-xs margin-top-xs" style="width: 300rpx;">怒萨芬几哈舒服哦啊肺静</text>
			</view>
		</view>	
		</view>
		<u-modal
			:show="ifshowdelpop"
			title="是否删除历史记录"
			showCancelButton
			buttonReverse
			@confirm="delok()"
			@cancel="() => ifshowdelpop = false"
		></u-modal>
	</view>
	<view v-show="showsearch"  class="secjiegou">
		<u-gap height="70" bgColor="#ffffff"></u-gap>
		<view>
			 <u-tabs @click="clitab()" :list="secjglist"></u-tabs>
		</view>
		<u-gap height="20" bgColor="#ffffff"></u-gap>
		<span style="display: none;">搜索结果</span>
		<!-- 搜索显示综合 -->
		<view v-show="showzh" class="flex seclist margin-bottom-xs" v-for="item in indexList">
			<view>
				<u-avatar
				slot="icon"
				shape="square"
				size="120"
				:src="item.url"
				customStyle="margin: -3px 5px -3px 0;max-width:90px;max-height:110px"
				></u-avatar>
			</view>
			<view>
				<view class="text-lg text-bold">我用十年青春,赴你最后之约我用十年青春</view>
				<view>我是作者</view>
				<view>我用十年青春,赴你最后之约介绍介绍我用十年青春</view>
			</view>
		</view>
		<!-- 搜索显示话题 -->
		<view v-show="showht" class="flex seclist margin-bottom-xs" v-for="item in indexList">
			<view>
				<u-avatar
				slot="icon"
				shape="square"
				size="120"
				:src="item.url"
				customStyle="margin: -3px 5px -3px 0;max-width:90px;max-height:110px"
				></u-avatar>
			</view>
			<view>
				<view class="text-lg text-bold">我用十年青春,赴你最后之约我用十年青春</view>
				<view style="font-size: 0.9rem;">我用十年青春,赴你最后之约介绍介绍我用十年青春</view>
				<view>22个帖子</view>
			</view>
		</view>
		<!-- 书籍 -->
		<view v-show="showbook" class="flex seclist margin-bottom-xs" v-for="item in indexList">
			<view>
				<u-avatar
				slot="icon"
				shape="square"
				size="120"
				:src="item.url"
				customStyle="margin: -3px 5px -3px 0;max-width:90px;max-height:110px"
				></u-avatar>
			</view>
			<view>
				<view class="text-lg text-bold">我用十年青春,赴你最后之约我用十年青春</view>
				<view>我是作者</view>
				<view>我用十年青春,赴你最后之约介绍介绍我用十年青春</view>
			</view>
		</view>
		<!-- 用户 -->
		<view v-show="showuser" class="flex seclist1 margin-bottom-xs" v-for="item in indexList">
			<view>
				<u-avatar
				slot="icon"
				shape="circle"
				size="50"
				:src="item.url"
				customStyle="margin: -3px 5px -3px 0;max-width:90px;max-height:110px"
				></u-avatar>
			</view>
			<view class="padding-left-sm">
				<view class="text-lg text-bold">不爱香菜的小李</view>
				<view>阅读1本书</view>
			</view>
		</view>
		<!-- 加载动画 -->
		<view v-show="showload" class="seclist1 margin-bottom-xs" v-for="item in indexList">
			<div class="loadera">
			  <div class="outer"></div>
			  <div class="middle"></div>
			  <div class="inner"></div>
			</div>
		</view>
	</view>
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				secjglist: [{
						name: '综合',
					}, {
						name: '书籍',
					}, {
						name: '话题'
					}, {
						name: '用户'
					}],
				pla:"搜索作者、书名、话题",
				ifindex:1,
				//搜索历史
				sealist:[
					{
						title:"阿U盾挥洒一"
					},
					{
						title:"阿U盾挥洒一"
					},
					{
						title:"阿U盾挥洒一"
					},
				],
				secvalue:"",
				value1:"",
				//是否显示历史记录
				ifshowseahistroy: 1,
				//是否显示删除记录模态窗
				ifshowdelpop:false,
				//显示搜索结果还是搜索界面
				showsearch:false,
				ifshowxiabufen:true,
				sealianxiang:false,
				indexList: [
					{
						url:'https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg'
					},
					{
						url:'https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg'
					},
					{
						url:'https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg'
					},
					{
						url:'https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg'
					},
					{
						url:'https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg'
					},
					{
						url:'https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg'
					},
					{
						url:'https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg'
					},
					{
						url:'https://p3-tt.byteimg.com/img/pgc-image/4a43885803954ec1b49550bd1327050f~180x234.jpg'
					},
				],
				//键盘高度
				keyheight:0,
				//显示综合搜索结果
				showzh:true,
				//显示话题
				showht:false,
				//显示书籍
				showbook:false,
				//显示用户
				showuser:false,
				showload:false,
			}
		},
		onLoad(op) {
			_this = this;
			if(op.text){
				_this.ifindex = 0
				_this.showsearch = true
				_this.secvalue = op.text
			}
			_this.pla = op.text
			uni.onKeyboardHeightChange(res => {
			  console.log(res.height)
			})
		},
		methods: {
			clitab(e){
				
				_this.showzh = false;
				_this.showbook = false;
				_this.showht = false;
				_this.showuser = false;
				_this.showload = true;
				console.log(e.index)
				switch(e.index){
					case 0:
						_this.showzh = true;
						break
					case 1:
						_this.showbook = true;
						break
					case 2:
						_this.showht = true;
						break
					case 3:
						_this.showuser = true;
						break
				}
				setTimeout(() => {
					_this.showload = false;
				}, 1000)
				
			},
			back(){
				//返回
				try{
					uni.navigateBack()
				}catch(e){
					//TODO handle the exception
					if(_this.ifindex){
						uni.switchTab({
							url: '../../pages/index/index'
						});
					}else{
						uni.switchTab({
							url: '../../pages/Category/Category'
						});
					}
				}
				
			},
			//删除记录
			delok(){
				console.log('删除记录')
				_this.sealist=[{}]
				_this.ifshowseahistroy = 0
				_this.ifshowdelpop = false
			},
			//删除记录模态窗弹出
			deljl(){
			_this.ifshowdelpop = true	
			},
			//点击输入框触发  联想列表显示，历史推荐消失
			InputFocus(){
				if(_this.secvalue!=""){
					_this.sealianxiang =  true
					_this.ifshowxiabufen = false;
				}
			},
			InputBlur(){
				console.log(_this.secvalue)
				_this.sealianxiang =  false
				_this.ifshowxiabufen = true;
				
				
				
			},
			//搜索框输入事件
			secinput(){
				console.log(_this.secvalue)
				if(_this.secvalue !== ""){
					_this.sealianxiang =  true
					_this.ifshowxiabufen = false;
					_this.showsearch = false
				}
				
			},
			//点击搜索联想列表
			cliseclist(text){
				uni.redirectTo({
					url: '../../subpackageA/searchRes/searchRes?text='+text
				});
			},
			//搜索按钮
			clisec(){
				if(_this.secvalue==""){
					uni.showToast({
						icon: 'error',
						title: "搜索内容为空"
					})
					return
				}
				uni.redirectTo({
					url: '../../subpackageA/searchRes/searchRes?text='+_this.secvalue
				});
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: white;
	}
	.ls{
		width: 90%;
		margin: auto;
	}
	.jl{
		width: 90%;
		margin: auto;
	}
	.ls text{
		font-size: 35rpx;
	}
	.sealianxiang{
		width: 90%;
		margin: auto;
		z-index: 2;
		background-color: white;
		min-height: 500px;
	}
	.u-avatar__image--square{
		width: 140rpx;
		height: 100rpx;
	}
	.seclist{
		max-height: 250rpx;
		min-height: 250rpx;
	}
	.seclist1{
		max-height: 250rpx;
		min-height: 140rpx;
	}
	.u-cell-text {
			font-size: 32px;

		}
		
	.secjiegou{
		width: 90%;
		margin: auto;
	}
	.sec{
		width: 100%;
		height: 80px;
		position: fixed;
		top: 0;
		z-index: 999;
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
