<template>
	<view style="width: 90%; margin: 0 auto;">
		<view>
			<u-popup :show="PopUpBooks" :round="10" :closeable="true" :duration="500" mode="bottom"  @close="closePopUpBooks" @open="openPopUpBooks">
		        <view :style="{height:popHeight+'px'}" class="pop">
					<view class="pop1">
						<text class="poptext">添加书籍</text>
					</view>
		            <view class="pop2">
		            	<text v-if="selectBooks.length > 0" class="poptext">已选择{{selectBooks.length}}/4</text>
		            </view>
					<view class="cu-bar search bg-white margin-top-xs" >
						<view class="search-form " style="background-color: white; border-radius: 5px;">
							<text class="cuIcon-search"></text>
							<input style="background-color: #f5f4f0;" @input="enterBooks" @blur="enterBooks" :adjust-position="false" type="text" placeholder="搜索书架里的书籍" confirm-type="search"></input>
						</view>
						<view class="action">
							<!-- <button class="cu-btn bg-green shadow-blur round">搜索</button> -->
						</view>
					</view>
					<u-gap height="20" bgColor="#ffffff"></u-gap>
					<view>
						<block v-for="(item1,index) in currentSearchBooks">
							<view class="c_book_3 padding-top-xs">
								<view class="flex margin-left-lg" style="position: relative;">
									<view>
										<img class="img-book-1" src="https://bookcover.yuewen.com/qdbimg/349573/1035938472/90" alt="">
									</view>
									<view class="grid col-1" style="width: 75%;height: 70px; grid-row-gap: 0px;display: block;">
										<!-- 书名 -->
										<view class="flex justify-between padding-left-xs padding-top-xs" style="font-size: 32rpx;height: 30px;">
											<text style="font-weight: bold;">{{item1.title}}</text>
											<text style="font-weight: bold;color: red;">{{item1.score}}分</text>
										</view>
										<view class="padding-left-xs padding-bottom-xs" style="text-align: left;">
											{{item1.bookTag}}
										</view>
									</view>
									<view @click="pickbook(item1,index)" style="width: 20%;color: black;position: relative;">
										<view style="float: right;" class="padding-right-lg">
											<u-icon size="24" v-if="!item1.ifselect" top="12" name="checkmark-circle"></u-icon>
											<u-icon size="24" v-if="item1.ifselect" top="12" name="checkmark-circle-fill"></u-icon>
										</view>
										
									</view>
								</view>
							</view>
							<u-gap height="10" bgColor="#ffffff"></u-gap>
						</block>
					</view>
		        </view>
			</u-popup>
		</view>
		<u-gap height="10" bgColor="#ffffff"></u-gap>
		<view style="min-height: 100px;">
			<u--textarea
			 v-model="tuishu_content"
			  autoHeight  
			  placeholder="推荐符合要求的书籍,变身推书达人..."
			  border="none"
			  :adjustPosition="true"
			  :height="50"
			  :showConfirmBar="false"
			  :cursorSpacing="10"
			  :count="true"
			  :maxlength="300"
			  @input="tuishu_input"
			  ></u--textarea>
		</view>
		
		<u-gap height="10" bgColor="#ffffff"></u-gap>
		<block v-if="selectBooks" v-for="(item,index) in selectBooks">
			<view class="c_book_3 padding-top-xs">
				<view class="flex margin-left-lg" style="position: relative;">
					<view>
						<img class="img-book-1" src="https://bookcover.yuewen.com/qdbimg/349573/1035938472/90" alt="">
					</view>
					<view class="grid col-1" style="width: 75%;height: 70px; grid-row-gap: 0px;display: block;">
						<!-- 书名 -->
						<view class="flex justify-between padding-left-xs padding-top-xs" style="font-size: 32rpx;height: 30px;">
							<text style="font-weight: bold;">{{item.title}}</text>
							<text style="font-weight: bold;color: red;">{{item.score}}分</text>
						</view>
						<view class="padding-left-xs padding-bottom-xs" style="text-align: left;">
							{{item.bookTag}}
						</view>
					</view>
					<view @click="delid(item,index)" style="position: absolute;right: 20rpx;top: 0;">
						×
					</view>
				</view>
			</view>
			<u-gap height="10" bgColor="#ffffff"></u-gap>
		</block>
		
		<view v-if="selectBooks.length<4" @click="openPopUpBooks" class="c_book_2 c_book_1">
			<text>+添加推荐书籍</text>
		</view>
		<u-gap height="10" bgColor="#ffffff"></u-gap>
		<view class="padding-top-xs" style="height: 30px;">
			<button class="ts ts_1" @click="published()" style="float: right;">发表</button>
		</view>
		
		
		
	
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				tuishu_content:"",
				tj:false,
				booklist:[
					{
						id:0,
						title:"哈哈哈哈1",
						imgsrc:"https://bookcover.yuewen.com/qdbimg/349573/1035938472/90",
						bookTag:"玄幻",
						score:9
					},
					{
						id:1,
						title:"哈哈哈哈2",
						mgsrc:"https://bookcover.yuewen.com/qdbimg/349573/1035938472/90",
						bookTag:"玄幻",
						score:8.8
					},
					{
						id:2,
						title:"哈哈哈哈3",
						mgsrc:"https://bookcover.yuewen.com/qdbimg/349573/1035938472/90",
						bookTag:"玄幻",
						score:9.8
					},
					{
						id:3,
						title:"哈哈哈哈4",
						mgsrc:"https://bookcover.yuewen.com/qdbimg/349573/1035938472/90",
						bookTag:"玄幻",
						score:7.9
					},
				],
				PopUpBooks:false,
				popHeight:0,
				books_title:"",
				currentSearchBooks:[
					{
						id:0,
						title:"哈哈哈哈4",
						mgsrc:"https://bookcover.yuewen.com/qdbimg/349573/1035938472/90",
						bookTag:"玄幻",
						score:7.9,
						ifselect:false
					},
					{
						id:1,
						title:"哈哈哈哈4",
						mgsrc:"https://bookcover.yuewen.com/qdbimg/349573/1035938472/90",
						bookTag:"玄幻",
						score:8.9,
						ifselect:false
					},
					{
						id:2,
						title:"哈哈哈哈4",
						mgsrc:"https://bookcover.yuewen.com/qdbimg/349573/1035938472/90",
						bookTag:"玄幻",
						score:9.9,
						ifselect:false
					},
					{
						id:3,
						title:"哈哈哈哈4",
						mgsrc:"https://bookcover.yuewen.com/qdbimg/349573/1035938472/90",
						bookTag:"玄幻",
						score:7.1
					}
				],
				selectBooks:[
					
				]
			}
		},
		onLoad(){
			_this = this;
			uni.setNavigationBarTitle({
				title: '@我用十年青春,赴你最后之约我用十年青春,赴你最后之约我用十年青春,赴你最后之约',
			});
			uni.getSystemInfo({
				success:function (res){
					console.log()
					_this.popHeight = res.windowHeight - uni.getMenuButtonBoundingClientRect().top
				}
			})
		
		},
		methods:{
			published(){
				if(!_this.tj){
					return
				}
			},
			tuishu_input(){
				
			},
			delid(item,index){
				
				let bid = _this.currentSearchBooks.findIndex(x => x.id === item.id)
				_this.selectBooks.splice(index,1)
				console.log(bid)
				
				_this.currentSearchBooks[bid].ifselect = false
			
				
			},
			closePopUpBooks(){
				_this.PopUpBooks = false
			},
			openPopUpBooks(){
				console.log(1)
				_this.PopUpBooks = true
			},
			enterBooks(){
				//触发搜索 填充数据 关闭弹窗时清除搜索数据
				
			},
			onblurbook(){
				
			},
			pickbook(item,index){
				console.log(item)
				// 通过添加的书籍是否选中属性来判断选择状态
				if(item.ifselect){
					let bid = _this.selectBooks.findIndex(x => x.id === item.id)
					_this.selectBooks.splice(bid,1)
					_this.currentSearchBooks[index].ifselect = false
				}else{
					_this.currentSearchBooks[index].ifselect = true
					_this.selectBooks.push(item)
					
				}
				
			}
		},
	}
</script>

<style lang="scss">
	page{
		background-color: white;
	}
	.ts{
		
		border: none;
		border-radius: 40rpx;
		color: white;
		height: 50rpx;
		font-size: 24rpx;
		line-height: 50rpx;
		min-width: 130rpx;
	}
	.ts_1{
		background-color: #f96825;
	}
	.ts_2{
		background-color: #ffd2bf;
	}
	.c_book_2{
		background-color: #f0f0f0;
		border-radius: 30rpx;
		height: 80px;
		line-height: 80px;
		text-align: center;
	}
	.c_book_3{
		background-color: #f0f0f0;
		border-radius: 30rpx;
		text-align: center;
		height: 70px;
	}
	.c_book_1 text{
		font-size: 32rpx;
		color: #c0c0c0;
	}
	.img-book-1{
		width: 80rpx;
		height: 110rpx;
		border-radius: 10rpx;
	}
	.pop{
		// height: 90%;
		width: 100%;
		background-color: white;
	}
	.poptext{
		
		font-size: 1.1rem;
		font-weight: bold;
	}
	.pop1{
		width: 100%;
		text-align: center;
		height: 50px;
		line-height: 50px;
		
	}
	.pop2{
		width: 100%;
		text-align: center;
		height: 20px;
		line-height: 20px;
		
	}
	.pop2 .poptext{
		font-size: 0.8rem;
	}

</style>
