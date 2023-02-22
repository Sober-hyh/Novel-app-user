<template>
	<view class="margin-top-lg">
			<text>上传新的头像</text>
			<view class="grid col-4 grid-square flex-sub" >
				<view style="border-radius: 40rpx;" class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage"
					:data-url="imgList[index]">
					<image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag" style="padding: 0;" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view style="border-radius: 40rpx;" class="solids" @tap="ChooseImage" v-if="imgList.length<1">
					<text style="border-radius: 180rpx;background-color: #d8d8d8;" class='cuIcon-cameraadd'></text>
				</view>
			</view>
			<view style="width: 95%;margin: 0 auto;">
				<u-line></u-line>
			</view>
			<view class="margin-top-xs">
				<text>昵称</text>
				 <u--input
				    placeholder="请输入内容"
				    border="bottom"
				    v-model="info.name"
				    @change="change"
					
				  ></u--input>
			</view>
			<view>
				<text>签名</text>
				 <u--input
				    placeholder="请输入内容"
				    border="bottom"
				    v-model="info.sign"
				    @change="change"
				  ></u--input>
			</view>
			
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				src:"https://tnuiimage.tnkjapp.com/avatar/xiaomai4.jpg",
				fileList6: [],
				imgList: [],
				
				info:{
					name:"",
					sr:"",
					sign:""
				}
			}
		},
		onLoad(){
			_this = this;

		},
		methods:{
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						console.log(res.tempFilePaths[0])
						this.imgList = res.tempFilePaths
			
					},
					fail(err) {
						console.log(err.tempFilePaths[0])
					}
				});
				console.log(_this.imgList)
			},
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除这张照片吗？',
					cancelText: '取消',
					confirmText: '删除',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		},
	}
</script>

<style lang="scss">
	page{
		width: 90%;
		margin: 0 auto;
	}
</style>