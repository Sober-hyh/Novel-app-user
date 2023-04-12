<template>
	<view>
		<view class="flex bg-white sec">
			<!-- #ifndef MP-WEIXIN -->
			<u-icon @click="back()" name="arrow-left" size="28"></u-icon>
			<!-- #endif -->
			<view class="cu-bar search bg-white" style="width: 100%;">
				<view class="search-form round" style="width: 80%;">
					<text class="cuIcon-search"></text>
					<input  @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" @input="secinput()" v-model="secvalue" :placeholder="pla" maxlength="8" confirm-type="search"></input>
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
							v-for="(item, index) in lianxianglist"
							
						>
							<u-cell
								:title="item.text"
								@click="cliseclist(item.text)"
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
					<text v-for="(item1,index) in sechistory" @click="cliseclist(item1.sh_content)" class="text-cut text-bold padding-top-xs margin-top-xs" style="width: 300rpx;" v-if="index<=2 && index1==0">{{item1.sh_content}}</text>
					<text v-for="(item1,index) in sechistory" @click="cliseclist(item1.sh_content)" class="text-cut text-bold padding-top-xs margin-top-xs" style="width: 300rpx;min-height: 24px;" v-if="index>2 && index1==1">{{item1.sh_content}}</text>
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
			<view class="grid col-1" style="width: 50%;" v-for="(item,index1) in 2">
				<text v-for="(item1,index) in secre" @click="cliseclist(item1.sh_content)" class="text-cut text-bold padding-top-xs margin-top-xs" style="width: 300rpx;"  v-if="index<=1 && index1==0">{{item1.sh_content}}</text>
				<text v-for="(item1,index) in secre" @click="cliseclist(item1.sh_content)" class="text-cut text-bold padding-top-xs margin-top-xs" style="width: 300rpx;"  v-if="index>1 && index1==1">{{item1.sh_content}}</text>

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
	<!-- 显示tabs -->
	<view v-show="showsearch"  class="secjiegou">
		<u-gap height="70" bgColor="#ffffff"></u-gap>
		<view class="flex justify-between">
			<view>
				<u-tabs @click="clitab()" :list="secjglist"></u-tabs>
			</view>
			<view v-show="showbook" @click="opensx()" style="padding-top: 14rpx;" class="flex">
				<view style="padding-top: 8rpx;">
					<text v-if="selectedTag>0">标签<text style="color: orange;">{{selectedTag}}</text></text>
				</view>
				<view style="padding-top: 4rpx;">
					<u-icon name="arrow-down" size="26"></u-icon>
				</view>
				
			</view>
		</view>
		
		<u-gap height="20" bgColor="#ffffff"></u-gap>
		<span style="display: none;">搜索结果</span>
		<view v-if="seachlist.length==0" style="width: 100%;">
			<u-empty
			        mode="search"
			        icon="http://cdn.uviewui.com/uview/empty/search.png"
			>
			</u-empty>
		</view>
		<!-- 搜索显示综合 -->
		<view v-if="showzh && item.bookid" class="flex seclist margin-bottom-xs" v-for="item in seachlist" @click="clibook(item.bookid)">
			<view>
				<u-avatar
				slot="icon"
				shape="square"
				size="120"
				:src="item.bookimg"
				customStyle="margin: -3px 5px -3px 0;max-width:90px;max-height:110px"
				></u-avatar>
			</view>
			<view>
				<view class="text-lg text-bold" style="font-size: 40rpx;">{{item.bookname}}</view>
				<view>{{item.bookauthor}}</view>
				<view><u--text :lines=2 :text="item.bookIntroduction"></u--text></view>
			</view>
		</view>
		<!-- 搜索显示话题 -->
		<view v-if="showht && item.t_name" class="flex seclist margin-bottom-xs" v-for="item in seachlist">
			<!-- <view>
				<u-avatar
				slot="icon"
				shape="square"
				size="120"
				:src="item.url"
				customStyle="margin: -3px 5px -3px 0;max-width:90px;max-height:110px"
				></u-avatar>
			</view> -->
			<view>
				<view class="text-lg text-bold" style="font-size: 40rpx;">{{item.t_name}}</view>
				
				<view><u--text :lines=2 :text="item.t_introduce"></u--text></view>
				<view>{{item.t_numberpost}}个帖子</view>
			</view>
		</view>
		<!-- 书籍 -->
		<view v-show="showbook" class="flex seclist margin-bottom-xs" v-for="item in seachlist" @click="clibook(item.bookid)">
			<view>
				<u-avatar
				slot="icon"
				shape="square"
				size="120"
				:src="item.bookimg"
				customStyle="margin: -3px 5px -3px 0;max-width:90px;max-height:110px"
				></u-avatar>
			</view>
			<view>
				<view class="text-lg text-bold" style="font-size: 40rpx;">{{item.bookname}}</view>
				<view>{{item.bookauthor}}</view>
				<view><u--text :lines=2 :text="item.bookIntroduction"></u--text></view>
			</view>
		</view>
		<!-- 用户 -->
		<view v-if="showuser && item.nickname" class="flex seclist1 margin-bottom-xs" v-for="item in seachlist">
			<view>
				<u-avatar
				slot="icon"
				shape="circle"
				size="50"
				:src="item.Himg"
				customStyle="margin: -3px 5px -3px 0;max-width:90px;max-height:110px"
				></u-avatar>
			</view>
			<view class="padding-left-sm">
				<view class="text-lg text-bold">{{item.nickname}}</view>
				<view>阅读{{item.readnum}}本书</view>
			</view>
		</view>
		<u-popup :show="showxs" :round="10" mode="bottom" @close="closesx" @open="opensx">
		            <view class="pop">
		               <view class="flex padding-left-lg padding-top-lg padding-bottom-xs">
						   <view style="width: 40%;" @click="closesx">
							   <u-icon name="arrow-down" size="26"></u-icon>
						   </view>
						   <view style="width: 60%;" class="flex justify-between">
							   <text style="font-size: 18px; font-weight: bold;">分类</text>
							   <text style="font-size: 14px; font-weight: bold;text-align: center;line-height: 26px;" class="padding-right-xs">已选择{{selectedTag}}/3</text>
						   </view>
					   </view>
					   <view style="min-height: 40px;width: 100%;">
						  <view class="flex" style="flex-wrap: wrap;">
							  <view v-for="(item,index) in list1" style="width: 20%;margin-left: 4%;margin-top: 10rpx; text-align: center;">
								  <u-tag style="width: 180rpx;height: 57rpx;" :text="item.name" :plain="!item.checked" type="warning" :name="index"
									@click="checkboxClick(item.name,index)"></u-tag></view>
				
						  </view>
						    <!-- <view class="grid col-1" v-for="(item,index1) in 4">
								<view class="aa" v-for="(item, index) in list1" >
									<view v-if="index1 == 0 &&index < tagnum" class="padding-left-xs padding-right-xs margin-tb-xs">
									<u-tag style="width: 180rpx;height: 57rpx;" :text="item.name" :plain="!item.checked" type="warning" :name="index"
									@click="checkboxClick"></u-tag>
									</view>
									<view v-if="index1 == 1 && index < tagnum*2 && index >= tagnum" class="padding-left-xs padding-right-xs margin-tb-xs">
									<u-tag style="width: 180rpx;height: 57rpx;" :text="item.name" :plain="!item.checked" type="warning" :name="index"
									@click="checkboxClick"></u-tag>
									</view>
									<view v-if="index1 == 2 &&index < tagnum*3 && index >= tagnum*2" class="padding-left-xs padding-right-xs margin-tb-xs">
									<u-tag style="width: 180rpx;height: 57rpx;" :text="item.name" :plain="!item.checked" type="warning" :name="index"
									@click="checkboxClick"></u-tag>
									</view>
									<view v-if="index1 == 3 &&index < tagnum*4 && index >= tagnum*3" class="padding-left-xs padding-right-xs margin-tb-xs">
										<u-tag :plainFill="false" :disabled="false" borderColor="#ffffff" v-if="item.display==false" style="width: 180rpx;height: 57rpx;" :text="item.name" :plain="!item.checked" type="warning" :name="index"
										></u-tag>
										
										<u-tag v-else style="width: 180rpx;height: 57rpx;" :text="item.name" :plain="!item.checked" type="warning" :name="index"
										@click="checkboxClick"></u-tag>
									</view>
									<!-- <view :class="[item.display == false && 'displayhid']" v-if="index1 == 3 &&index < tagnum*4 && index >= tagnum*3" class="padding-left-xs padding-right-xs margin-tb-xs">
										<u-tag v-if="item.name" style="width: 180rpx;height: 57rpx;" :text="item.name" :plain="!item.checked" type="warning" :name="index"
										@click="checkboxClick"></u-tag>
									</view> -->
								<!-- </view> -->
							   
							<!-- </view> --> 
					   </view>
		            </view>
				</u-popup>
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
				col: 0,
				// 筛选显示
				showxs:false,
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
				snull:false,
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
				checkboxs: [{
							name:"玄幻",
							checked: false
						},
						{
							name:"玄幻",
							checked: false
						},
						{
							name:"玄幻",
							checked: false
						},
						{
							name:"玄幻",
							checked: false
						},
						{
							name:"玄幻",
							checked: false,
							display:false
						},
					],
					list1:[],
					tagnum:0,
					selectedTag:0,
					//搜索联想列表
					lianxianglist:[],
					userid:1,
					//搜索历史
					sechistory:[],
					//搜索推荐
					secre:[],
					//搜索结果列表
					seachlist:[]
			}
		},
		onLoad(op) {
			_this = this;
			_this.sechistory = []
			if(op.text){
				// this.addsechis(op.text)
				this.search(op.text,0,0,1)
				_this.ifindex = 0
				_this.showsearch = true
				_this.secvalue = op.text
				
			}else{
				console.log(123)
				this.getSearchhistory()
			}
			_this.pla = op.text
			uni.onKeyboardHeightChange(res => {
			  console.log(res.height)
			})
			// this.getSearchhistory()
			this.getclass()
			this.getsecr()
			// for(let i =0;i<10;i++){
			// 	let a = {
			// 				name:"玄幻",
			// 				checked: false
			// 			}
			// 	_this.list1.push(a)
			// }
			//计算便签数量每列数
			
			// for(let i = 0;i<100;i++){
			// 	if(_this.list1.length % _this.tagnum !== 0){
			// 		let a = {
			// 					name:"",
			// 					checked: false,
			// 					display:false
			// 				}
			// 		_this.list1.push(a)
			// 	}else{
			// 		continue
			// 	}
			// }
			
			
		},
		methods: {
			clibook(i){
				uni.navigateTo({
					url: '/pages/read/index1?bid=' + i,
				
				})
			},
			checkboxClick(name,index) {
				let a = [];
				if(this.list1[index].checked==true){
					_this.selectedTag--
					this.list1[index].checked = !this.list1[index].checked
					for(let i =0;i<_this.list1.length;i++){
						if(_this.list1[i].checked == true){
							a.push(_this.list1[i].id)
						}
						}
						console.log(a)
				}else{
					if(_this.selectedTag==3){
						wx.showToast({
						  title: '最多选择三个标签',
						  icon: 'none',
						  duration: 2000
						})
						return
					}else{
						this.list1[index].checked = !this.list1[index].checked
						console.log('选择标签')
						_this.selectedTag++
						_this.seachlist=[]

						
						for(let i =0;i<_this.list1.length;i++){
							if(_this.list1[i].checked == true){
								a.push(_this.list1[i].id)
							}
								
							
							}
							console.log(a)
					}
					
				}
				
				let id1 = a[0] ? a[0] : 0
				let id2 = a[1] ? a[1] : 0
				let id3 = a[2] ? a[2] : 0
				console.log(id1,id2,id3)
				_this.seachlist = []
				this.request({
						url:'/api.php?action=appletFederatedSearch',
						method:'post',
						header:{'content-type' : "application/x-www-form-urlencoded"},
						data:{
							text:_this.secvalue,
							classid:id1,
							classid1:id2,
							classid2:id3,
							category:1
						},
						}).then(res=>{
							console.log('返回分类搜索数据')
							console.log(res)
							for(let i=0;i<res.data.length;i++){
								let a = res.data[i];
							
								_this.seachlist.push(a)
							}
				
						console.log(_this.seachlist.length)
							
						})
						
						
						_this.showsearch = true

				console.log(name)
			},
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
				_this.search(_this.secvalue,e.index,0,0)
				setTimeout(() => {
					_this.showload = false;
				}, 100)
				
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
				
				_this.sechistory = []
				_this.ifshowseahistroy = 0
				_this.ifshowdelpop = false
				this.request({
						url:'/api.php?action=searchHistoryDel',
						method:'post',
						header:{'content-type' : "application/x-www-form-urlencoded"},
						data:{
							userid:_this.userid
						},
						}).then(res=>{
							if(res==true){
								uni.showToast({
									icon: 'success',
									title: "删除成功"
								})
							}
							
							
						})
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
					_this.showsearch = false
				}else{
					_this.showsearch = false
				}
			},
			InputBlur(){
				console.log('失去焦点')
				if(_this.secvalue == " "){
					
					_this.seachlist = []
					_this.showsearch = false
				}
				
				console.log(_this.secvalue)
				_this.sealianxiang =  false
				_this.ifshowxiabufen = true;
				_this.sechistory = []
				_this.getSearchhistory()
				
				
			},
			//搜索框输入事件
			secinput(){
				console.log(_this.secvalue)
				if(_this.secvalue !== ""){
					_this.getlianxiang(_this.secvalue)
					_this.sealianxiang =  true
					_this.ifshowxiabufen = false;
					_this.showsearch = false
					_this.snull = false
				}else{
					_this.snull = true
					_this.sealianxiang =  false
					_this.pla = ""
				}
				
			},
			//获取搜索联想词
			getlianxiang(text){
				_this.lianxianglist = [];
				this.request({
						url:'/api.php?action=getlenovoSearch',
						method:'post',
						header:{'content-type' : "application/x-www-form-urlencoded"},
						data:{
							text:text
						},
						}).then(res=>{
							
							for(let i=0;i<res.data.length;i++){
								let a = {
									text:res.data[i].bookname
								}
								_this.lianxianglist.push(a)
							}
							
						})
			},
			//获取搜索历史
			getSearchhistory(){
				console.log('获取历史')
				_this.sechistory =[]
				
					this.request({
						url:'/api.php?action=getSearchHistory',
						method:'post',
						header:{'content-type' : "application/x-www-form-urlencoded"},
						data:{
							userid:_this.userid
						},
						}).then(res=>{
							
							if(res.sum == 0){
								_this.ifshowseahistroy = 0;
							}else{
								_this.ifshowseahistroy = 1;
								for(let i=0;i<res.data.length;i++){
								let a = {
									sh_id:res.data[i].sh_id,
									sh_time:res.data[i].sh_time,
									sh_content:res.data[i].sh_content
								}
								_this.sechistory.push(a)
							}
								for(let i=0;i<3;i++){
									if(_this.sechistory.length%3!=0){
									let a ={
										a:0
									}
									
									_this.sechistory.push(a)
								}
								}
							}
							
							
							
						})
				
				
			},
			//获取分类
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
									id:res[i].class_id,
									checked:false
								}
								_this.list1.push(a)
							}
							_this.col = Math.ceil(_this.list1.length / 4) 
							
							
							
					})
			},
			//获取搜索推荐
			getsecr(){
				_this.secre = []
				this.request({
						url:'/api.php?action=getSearchRecommendations',
						method:'post',
						header:{'content-type' : "application/x-www-form-urlencoded"},
						data:{
							userid:_this.userid
						},
						}).then(res=>{
							console.log(res)
							
						
							if(res.sum==0){
								this.request({
										url:'/api.php?action=get4BooksRandom',
										method:'post',
										header:{'content-type' : "application/x-www-form-urlencoded"},
										}).then(res=>{
											
											for(let i=0;i<res.data.length;i++){
												let a = {
													sh_content:res.data[i].bookname
												}
												_this.secre.push(a)
											}
											
										})
							}else{
								for(let i=0;i<res.data.length;i++){
								let a = {
									sh_content:res.data[i].sh_content
								}
								_this.secre.push(a)
								}
							}


							
						})
			},
			//搜索
			search(text,category,classid,type){
				if(category==0&&classid==0&&type == 1){
					_this.addsechis(text)
					_this.getSearchhistory()
				}
				_this.seachlist=[]
				this.request({
						url:'/api.php?action=appletFederatedSearch',
						method:'post',
						header:{'content-type' : "application/x-www-form-urlencoded"},
						data:{
							text:text,
							classid:classid,
							category:category
						},
						}).then(res=>{
							console.log(res)
							for(let i=0;i<res.data.length;i++){
								let a = res.data[i];
								if(res.data[i].Himg){
									_this.showuser = true
								}
								if(res.data[i].t_name){
									_this.showht = true
								}
								_this.seachlist.push(a)
							}
				
						console.log(_this.seachlist.length)
							
						})
						
						
						_this.showsearch = true
			},
			addsechis(text){
				//添加历史
				this.request({
						url:'/api.php?action=searchHistoryAdd',
						method:'post',
						header:{'content-type' : "application/x-www-form-urlencoded"},
						data:{
							content:text,
							userid:_this.userid

						},
						}).then(res=>{
							// _this.sechistory = []
							// this.getSearchhistory()
							
						})
			},
			//点击搜索联想列表
			cliseclist(text){
				// this.search(text,0,0)
				_this.secvalue = text
				uni.redirectTo({
					url: '../../subpackageA/searchRes/searchRes?text='+text
				});
			},
			//搜索按钮
			clisec(){
		
				if(_this.snull){
					uni.showToast({
						icon: 'error',
						title: "搜索内容为空"
					})
					return
				}else{
					uni.redirectTo({
						url: '../../subpackageA/searchRes/searchRes?text='+_this.secvalue
					});
				}
				
			},
			closesx(){
				_this.showxs = false
			},
			opensx(){
				_this.showxs = true
			}
			
		},
	
		        computed: {
		          // 兼容小程序
		          gridItemWidth() {

		            return 100 / this.col + '%'
					
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
	.pop{
		height: 1200rpx;
	}
	.bb{
		height: 0;
	}
	.dispalyhid{
		visibility:hidden;
	}
	.btagtext{
		// padding-left: 20%;
	}
</style>
