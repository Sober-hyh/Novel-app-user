<template>
	<view class="margin-top-lg">
			<text>更新您的头像</text>
			<view class="grid col-4 grid-square flex-sub" >
				<view style="border-radius: 40rpx;" class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage"
					:data-url="imgList[index]">
					<image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag" style="padding: 0;" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close' style="background-color: white;padding-right: 10rpx;"></text>
					</view>
				</view>
				<view style="border-radius: 40rpx;" class="solids" @tap="ChooseImage" v-if="imgList.length<1">
					<text style="border-radius: 180rpx;background-color: #a3a3a3;" class='cuIcon-cameraadd'></text>
				</view>
			</view>
			<view style="width: 95%;margin: 0 auto;">
				<u-line></u-line>
			</view>
			<view class="margin-top-xs">
				<text>昵称</text>
				 <u--input
				    placeholder="请输入昵称"
				    border="bottom"
				    v-model="info.name"
				    @change="change1"
					
				  ></u--input>
			</view>
			<view>
				<text>签名</text>
				 <u--input
				    placeholder="请输入签名"
				    border="bottom"
				    v-model="info.sign"
				    @change="change2"
				  ></u--input>
			</view>
			<view style="width: 95%;margin: 0 auto;">
				<u-line></u-line>
			</view>
			<view>
				<u-button @click="save()" type="primary" text="保存"></u-button>
			</view>
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				src:"",
				dsrc:"",
				fileList6: [],
				imgList: [
					
				],
				
				info:{
					name:"",
					src:"",
					sign:""
				},
				uid:0
			}
		},
		onLoad(e){
			_this = this;
			let ip = uni.getStorageSync('serverIp')
			const userinfo = uni.getStorageSync('userinfo')
			console.log(userinfo)
			if(userinfo.Himg.length<=30){
				_this.imgList.push(ip+'/'+userinfo.Himg)
			}else{
				_this.imgList.push(userinfo.Himg)
			}
			
			 _this.info.name = userinfo.nickname
			 _this.info.sign = userinfo.Signature
			 _this.src = ip+'/'+userinfo.Himg
			 _this.dsrc = userinfo.Himg
			 _this.uid = userinfo.uid
			if(e.type == 1){
				console.log(222)
				console.log(userinfo.Himg)
				// _this.imgList.push(userinfo.Himg)
				 
				 
			}
			
		},
		methods:{
			change1(e){
				console.log(e)
				_this.info.name = e
			},
			change2(e){
				console.log(e)
				_this.info.sign = e
			},
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
			getImgurl(){
				console.log(_this.imgList)
				console.log(_this.imgList[0])
				
			let ip = uni.getStorageSync('serverIp')
			console.log('ip',ip)
			
			_this.info.src = _this.dsrc
			if(_this.src !== _this.imgList[0]){
				 uni.uploadFile({
						url: ip +'/api.php?action=uploadImg', //请求的路径
						filePath: _this.imgList[0], //上传的图片
						name: 'file', //后台接受图片的字段
						// formData: this.formdata, //和图片一起上传的字段
						header: {
							"Content-Type": "multipart/form-data" //设置multipart/form-data格式
						},
						success: (res) => {
								console.log(JSON.parse(res.data).data)
								
								_this.info.src = JSON.parse(res.data).data
								 
									this.request({
										url:'/api.php?action=upUserInfo',
										method:'post',
										data:{
											uid:_this.uid,
											name:_this.info.name,
											img:_this.info.src,
											sign:_this.info.sign
										}
										}).then(res=>{
											console.log(res)
											return res;
											
										})
								
							
							
						},
						fail: (err) => {
							console.log(err) //错误提示
						}
					})
				}else{
					
					this.request({
						url:'/api.php?action=upUserInfo',
						method:'post',
						data:{
							uid:_this.uid,
							name:_this.info.name,
							img:_this.info.src,
							sign:_this.info.sign
						}
						}).then(res=>{
							console.log(res)
							return res;
							
						})
				}
	
					
			
				
			
				// this.({
				// 	url:'/api.php?action=uploadImg',
				// 	method:'post',
				// 	  headers: { 'Content-Type': 'multipart/form-data' },
				// 	File:_this.imgList[0],
				// 	data:{
				// 		file:_this.imgList[0]
				// 	}
				// }).then(res=>{
				// 	console.log(res)
				// })
			},
			save(){
				_this.getImgurl()
			
					this.request({
						url:'/api.php?action=refreshInfo',
						method:'post',
						data:{
							uid:_this.uid,
						},
						}).then(res=>{
							uni.setStorageSync('userinfo',res.data[0])
							console.log('信息更新',res)
							uni.showToast({ title: '更新成功', icon: 'success' });
							setTimeout(() => {
								uni.switchTab({
									url: '../../pages/index/index'
								});
							}, 1000)
							
				
				
				})
					
					
				
				
				
			}
		},
	}
</script>

<style lang="scss">
	page{
		width: 90%;
		margin: 0 auto;
	}
</style>