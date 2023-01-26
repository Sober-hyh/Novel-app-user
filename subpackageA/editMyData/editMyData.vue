<template>
	<view>
		
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
			<view>
				<u--form
									labelPosition="left"
									:model="model1"
									ref="form1"
								>
									<u-form-item
										label="姓名"
										prop="userInfo.name"
										borderBottom
										ref="item1"
									>
										<u--input
											v-model="model1.userInfo.name"
											border="none"
											placeholder="姓名,只能为中文"
										></u--input>
									</u-form-item>
									<u-form-item
										label="性别"
										prop="userInfo.sex"
										borderBottom
										@click="showSex = true; hideKeyboard()"
										ref="item1"
									>
										<u--input
											v-model="model1.userInfo.sex"
											disabled
											disabledColor="#ffffff"
											placeholder="请选择性别"
											border="none"
										></u--input>
										<u-icon
											slot="right"
											name="arrow-right"
										></u-icon>
									</u-form-item>
									
									
									<u-form-item
										label="简介"
										prop="intro"
										borderBottom
										ref="item3"
									>
										<u--textarea
											placeholder="不低于3个字"
											v-model="model1.intro"
											count
										></u--textarea>
									</u-form-item>

									
									<u-form-item
										label="生日"
										prop="userInfo.birthday"
										borderBottom
										@click="showBirthday = true; hideKeyboard()"
										ref="item1"
									>
										<u--input
											v-model="model1.userInfo.birthday"
											disabled
											disabledColor="#ffffff"
											placeholder="请选择生日"
											border="none"
										></u--input>
										<u-icon
											slot="right"
											name="arrow-right"
										></u-icon>
									</u-form-item>
								</u--form>
								
								
								<u-action-sheet
									:show="showSex"
									:actions="actions"
									title="请选择性别"
									description="如果选择保密会报错"
									@close="showSex = false"
									@select="sexSelect"
								>
								</u-action-sheet>
							
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

<style>
</style>