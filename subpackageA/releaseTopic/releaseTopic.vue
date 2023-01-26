<template>
	<view>
		<view style="width: 90%;margin: 0 auto;">
			<u--textarea
			 v-model="topic_title"
			  autoHeight  
			  placeholder="请输入求书话题(至少5个字)" 
			  border="bottom"
			  :adjustPosition="true"
			  :height="20"
			  :showConfirmBar="false"
			  :cursorSpacing="10"
			  :maxlength="20"
			  @input="topic_input"
			  ></u--textarea>
		</view>
		<u-gap height="10" bgColor="#ffffff"></u-gap>
		<view style="width: 90%;margin: 0 auto;">
			<u--textarea
			 v-model="topic_content"
			  autoHeight  
			  placeholder="详细描述话题，能获得更准确的回答..."
			  border="none"
			  :adjustPosition="true"
			  :height="50"
			  :showConfirmBar="false"
			  :cursorSpacing="10"
			  :count="true"
			  @input="topic_input"
			  ></u--textarea>
		</view>
		<u-gap height="10" bgColor="#ffffff"></u-gap>
		<view style="width: 90%;margin: 0 auto;" class="padding-top-xs">
			<button :class="[tj ? 'ts_1':'ts_2']"  class="ts" @click="published()" style="float: right;">发表</button>
		</view>
	</view>
</template>

<script>
	let _this;
	export default {
		data() {
			return {
				topic_title:"",
				topic_content:"",
				tj:false
			}
		},
		onLoad(){
			_this = this;

		},
		methods:{
			published(){
				if(!_this.tj){
					return
				}
			},
			topic_input(e){
				return _this.topic_title && _this.topic_content ? _this.tj = true :  _this.tj = false
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
</style>