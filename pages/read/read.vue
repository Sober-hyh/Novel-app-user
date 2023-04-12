<template>
	<view class="page" :style="{height:winHeight+'px'}">
		<view class='head animated slideInDown fast' :style="{'background-color':night?otherBg.bg[1]:otherBg.bg[0]}"
			v-if="toggle">
			<view class="left" @tap="pageBack">
				<text style="padding-top: 30rpx;" class="iconfont icon-shouye1"
					:style="{color:night?otherBg.font[1].title:otherBg.font[0].title}"></text>
			</view>
		</view>

		<image :src="pageImg" mode="aspectFill" class="page-img" :style="{height:winHeight+'px'}" v-if="pageImg">
		</image>
		<view id='html'>
			<view class='content' :style="{'color':colorList[pageColorIndex]}">
				<view class="title"
					:style="{'font-size':(fontSize*1.6)+'px','line-height':(lineHeightList[lineHeightIndex])+'px','margin-bottom':lineHeightList[lineHeightIndex]+'px'}">
					{{detail.data[read].sub}}
				</view>
				<view class="p" v-html='detail.data[read].content'
					:style="{'font-size':fontSize+'px','line-height':lineHeightList[lineHeightIndex]+'px'}"></view>
			</view>
		</view>
		<view class='html-content' :style="{'background-color':pageColorList[pageColorIndex]}" v-if="pageType==0">
			<view class='tops' :style="{width:width+'px'}">
				<view class="left">
					<span :style="{'color':otherList[pageColorIndex]}">{{detail.data[read].sub}}</span>
				</view>
			</view>
			<div class='center' :style="{'transform':'translateX(-'+(step*width)+'px)'}">
				<view class='html' :style="{width:width+'px',height:height+'px'}" v-for="(item,index) in size"
					:key='index'>
					<view class="article"
						:style="{width:width+'px','color':colorList[pageColorIndex],'transform': 'translateY(-'+(index*height)+'px)'}">
						<view class="title"
							:style="{'font-size':(fontSize*1.6)+'px','line-height':(lineHeightList[lineHeightIndex])+'px','margin-bottom':lineHeightList[lineHeightIndex]+'px'}">
							{{detail.data[read].sub}}
						</view>
						<view class="p" v-html='detail.data[read].content'
							:style="{'font-size':fontSize+'px','line-height':lineHeightList[lineHeightIndex]+'px'}">
						</view>
					</view>
				</view>
			</div>
			<view class='bottoms' :style="{width:width+'px'}">
				<view class="left">
					<view class="box" :style="{'border':'1px solid '+otherList[pageColorIndex]}">
						<view class="middle" :style="{width:percent+'%','background-color':otherList[pageColorIndex]}">
						</view>
						<view class="small" :style="{'background-color':otherList[pageColorIndex]}"></view>
					</view>
					<span :style="{'color':otherList[pageColorIndex]}">{{hour|time}}:{{second|time}}</span>
				</view>
				<span :style="{'color':otherList[pageColorIndex]}">{{page|num}}%</span>
			</view>
		</view>
		<view class="html-content" :style="{'background-color':pageColorList[pageColorIndex]}" v-if="pageType==1">
			<view class='tops' :style="{width:width+'px'}">
				<view class="left">
					<span :style="{'color':otherList[pageColorIndex]}">{{detail.data[read].sub}}</span>
				</view>
			</view>
			<swiper class="center" :current="step" :disable-programmatic-animation='true' :circular='true'
				:indicator-dots="false" :autoplay="false" :interval="3000" :duration="500">
				<swiper-item class='html' :style="{width:width+'px',height:height+'px'}" v-for="(item,index) in size"
					:key='index'>
					<view class="article"
						:style="{width:width+'px','color':colorList[pageColorIndex],'transform': 'translateY(-'+(index*height)+'px)'}">
						<view class="title"
							:style="{'font-size':(fontSize*1.6)+'px','line-height':(lineHeightList[lineHeightIndex])+'px','margin-bottom':lineHeightList[lineHeightIndex]+'px'}">
							{{detail.data[read].sub}}
						</view>
						<view class="p" v-html='detail.data[read].content'
							:style="{'font-size':fontSize+'px','line-height':lineHeightList[lineHeightIndex]+'px'}">
						</view>
					</view>
				</swiper-item>
			</swiper>
			<view class='bottoms' :style="{width:width+'px'}">
				<view class="left">
					<view class="box" :style="{'border':'1px solid '+otherList[pageColorIndex]}">
						<view class="middle" :style="{width:percent+'%','background-color':otherList[pageColorIndex]}">
						</view>
						<view class="small" :style="{'background-color':otherList[pageColorIndex]}"></view>
					</view>
					<span :style="{'color':otherList[pageColorIndex]}">{{hour|time}}:{{second|time}}</span>
				</view>
				<span :style="{'color':otherList[pageColorIndex]}">{{page|num}}%</span>
			</view>
		</view>
		
		<view class="html-content" :style="{'background-color':pageColorList[pageColorIndex]}" @tap="toggleShow" v-if="pageType==2">
			<view class='tops' :style="{width:width+'px'}">
				<view class="left">
					<span :style="{'color':otherList[pageColorIndex]}">{{detail.data[read].sub}}</span>
				</view>
			</view>
			<scroll-view :scroll-y="true" :scroll-top="scrollViewTop" :show-scrollbar='false'  class='center' @scrolltoupper='scrolltoupper' @scrolltolower='scrolltolower' @scroll="onScroll" :style="{height:height+'px'}">
				<view class='html' :style="{width:width+'px'}">
					<view class="article"
						:style="{width:width+'px','color':colorList[pageColorIndex]}">
						<view class="title"
							:style="{'font-size':(fontSize*1.6)+'px','line-height':(lineHeightList[lineHeightIndex])+'px','margin-bottom':lineHeightList[lineHeightIndex]+'px'}">
							{{detail.data[read].sub}}
						</view>
						<view class="p" v-html='detail.data[read].content'
							:style="{'font-size':fontSize+'px','line-height':lineHeightList[lineHeightIndex]+'px'}">
						</view>
					</view>
				</view>
			</scroll-view>
			<view class='bottoms' :style="{width:width+'px'}">
				<view class="left">
					<view class="box" :style="{'border':'1px solid '+otherList[pageColorIndex]}">
						<view class="middle" :style="{width:percent+'%','background-color':otherList[pageColorIndex]}">
						</view>
						<view class="small" :style="{'background-color':otherList[pageColorIndex]}"></view>
					</view>
					<span :style="{'color':otherList[pageColorIndex]}">{{hour|time}}:{{second|time}}</span>
				</view>
				<span :style="{'color':otherList[pageColorIndex]}">{{page|num}}%</span>
			</view>
		</view>

		<view class='act' :style="{height:winHeight+'px'}" @touchstart="touchstart" @touchmove="touchMove"
			@touchend="touchend" v-if="pageType!=2">
			<view class='item' @tap.stop='prev'></view>
			<view class='center' @tap.stop="toggleShow"></view>
			<view class='item' @tap.stop='next'></view>
		</view>

		<view class="action" :style="{height:height+'px'}" v-if="auto">
			<view :animation="animationData" :style="{'border-left-color':night?otherBg.add[1].bg:otherBg.add[0].bg}">
			</view>
		</view>

		<view class='footer animated slideInUp fast' :style="{'background-color':night?otherBg.bg[1]:otherBg.bg[0]}"
			v-if="toggle">
			<view class="tool">
				<view class="top">
					<text class="item" :style="{color:night?otherBg.font[1].title:otherBg.font[0].title}"
						@tap="prevBig">上一章</text>
					<slider class="slider" :value="sliderValue"
						:activeColor='night?otherBg.slider[1].activeBg:otherBg.slider[0].activeBg'
						:backgroundColor='night?otherBg.slider[1].bg:otherBg.slider[0].bg'
						:block-color="night?otherBg.slider[1].block:otherBg.slider[0].block" :block-size='28'
						@changing='changing' @change='sliderChange' />
					<text class="item" :style="{color:night?otherBg.font[1].title:otherBg.font[0].title}"
						@tap="nextBig">下一章</text>
				</view>
				<view class="bottom">
					<view class="tool-item" @tap='pageBack1'>
						<text class="iconfont icon-fanhui"
							:style="{color:night?otherBg.font[1].title:otherBg.font[0].title}"></text>
						<text class="span" :style="{color:night?otherBg.font[1].sub:otherBg.font[0].sub}">返回</text>
					</view>
					<view class="tool-item" @tap='tabClick(0)'>
						<text class="iconfont icon-mulu"
							:style="{color:night?otherBg.font[1].title:otherBg.font[0].title}"></text>
						<text class="span" :style="{color:night?otherBg.font[1].sub:otherBg.font[0].sub}">目录</text>
					</view>
					<view class="tool-item" @tap='tabClick(1)'>
						<text class="iconfont" :class="night?'icon-rijianmoshi':'icon-yejianmoshi'"
							:style="{color:night?otherBg.font[1].title:otherBg.font[0].title}"></text>
						<text class="span"
							:style="{color:night?otherBg.font[1].sub:otherBg.font[0].sub}">{{night?'日间':'夜间'}}</text>
					</view>
					<view class="tool-item" @tap='tabClick(2)'>
						<text class="iconfont icon-a-3_bofangliebiao_bofang"
							:style="{color:night?otherBg.font[1].title:otherBg.font[0].title}"></text>
						<text class="span" :style="{color:night?otherBg.font[1].sub:otherBg.font[0].sub}">自动翻页</text>
					</view>
					<view class="tool-item" @tap='tabClick(3)'>
						<text class="iconfont icon-A"
							:style="{color:night?otherBg.font[1].title:otherBg.font[0].title}"></text>
						<text class="span" :style="{color:night?otherBg.font[1].sub:otherBg.font[0].sub}">阅读设置</text>
					</view>
				</view>
			</view>
		</view>

		<view class='footer animated slideInUp fast' :style="{'background-color':night?otherBg.bg[1]:otherBg.bg[0]}"
			v-if="tool==3">
			<view class='style'>
				<!-- #ifndef H5 -->
				<view class="style-item">
					<view class="right brightness">
						<view class="brightness-left"
							:style="{'background-color':night?otherBg.slider[1].bg:otherBg.slider[0].bg}">
							<text class="iconfont icon-liangduxiao_line"
								:style="{'color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></text>
							<slider class="slider" :value="brightness" activeColor='rgba(0,0,0,0)'
								backgroundColor='rgba(0,0,0,0)'
								:block-color="night?otherBg.slider[1].block:otherBg.slider[0].block" :block-size='28'
								@changing='brightnessChange' />
							<text class="iconfont icon-liangduda_line"
								:style="{'color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></text>
						</view>
						<view class="brightness-right">
							<checkbox-group @change="brightnessCheckBox">
								<label>
									<checkbox value="0" color="#853b1e" :checked="brightnessCheck" /><text
										:style="{'color':night?otherBg.tool[1].color:otherBg.tool[0].color}">系统亮度</text>
								</label>
							</checkbox-group>
						</view>
					</view>
				</view>
				<!-- #endif -->
				<view class="style-item">
					<view class="left" :style="{color:night?otherBg.font[1].title:otherBg.font[0].title}">字号</view>
					<view class="right font">
						<button type="default"
							:style="{'background-color':night?otherBg.tool[1].bg:otherBg.tool[0].bg,color:night?otherBg.tool[1].color:otherBg.tool[0].color}"
							@tap="fontPrev">A-</button>
						<span :style="{color:night?otherBg.tool[1].color:otherBg.tool[0].color}">{{fontSize}}</span>
						<button type="default"
							:style="{'background-color':night?otherBg.tool[1].bg:otherBg.tool[0].bg,color:night?otherBg.tool[1].color:otherBg.tool[0].color}"
							@tap="fontNext">A+</button>
					</view>
				</view>
				<view class="style-item">
					<view class="left" :style="{color:night?otherBg.font[1].title:otherBg.font[0].title}">背景</view>
					<view class="right background">
						<view class="color" v-for="(item,index) in pageColorList" :key='index'
							:style="{'background-color':item}" @tap='changeBgColor(index)'></view>
					</view>
				</view>
				<view class="style-item">
					<view class="left" :style="{color:night?otherBg.font[1].title:otherBg.font[0].title}">间距</view>
					<view class="right space">
						<button type="default" :style="{'background-color':night?otherBg.tool[1].bg:otherBg.tool[0].bg}"
							@tap="sapce(0)">
							<span class='span1'
								:style="{'background-color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></span>
							<span class='span1'
								:style="{'background-color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></span>
							<span class='span1'
								:style="{'background-color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></span>
						</button>
						<button type="default" :style="{'background-color':night?otherBg.tool[1].bg:otherBg.tool[0].bg}"
							@tap="sapce(1)">
							<span class='span2'
								:style="{'background-color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></span>
							<span class='span2'
								:style="{'background-color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></span>
							<span class='span2'
								:style="{'background-color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></span>
						</button>
						<button type="default" :style="{'background-color':night?otherBg.tool[1].bg:otherBg.tool[0].bg}"
							@tap="sapce(2)">
							<span class='span3'
								:style="{'background-color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></span>
							<span class='span3'
								:style="{'background-color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></span>
							<span class='span3'
								:style="{'background-color':night?otherBg.tool[1].color:otherBg.tool[0].color}"></span>
						</button>
					</view>
				</view>
				<view class="style-item">
					<view class="left" :style="{color:night?otherBg.font[1].title:otherBg.font[0].title}">翻页</view>
					<view class="right animatebox">
						<button type="default"
							:style="{'background-color':night?otherBg.tool[1].bg:otherBg.tool[0].bg,color:night?otherBg.tool[1].color:otherBg.tool[0].color}"
							@tap="animateBtn(1)">
							左右
						</button>
						<button type="default"
							:style="{'background-color':night?otherBg.tool[1].bg:otherBg.tool[0].bg,color:night?otherBg.tool[1].color:otherBg.tool[0].color}"
							@tap="animateBtn(2)">
							上下
						</button>
						<button type="default"
							:style="{'background-color':night?otherBg.tool[1].bg:otherBg.tool[0].bg,color:night?otherBg.tool[1].color:otherBg.tool[0].color}"
							@tap="animateBtn(0)">
							无动画
						</button>
					</view>
				</view>
			</view>
		</view>

		<view class="menu" :style="{width:width+'px'}" v-if="tool===0" @tap="toggleShow" style="height: 100%;"> <!-- height:winHeight+'px' -->
			<view class="box" style="overflow-y: auto;">
				<view class="top">
					更新至 {{detail.data[detail.data.length-1].sub}}
				</view>
				<text class="item" v-for="(item,index) in detail.data" :key='index'
					@tap.stop="menuClick(index)">{{detail.data[index].sub}}</text>
			</view>
		</view>

		<view class="auto animated slideInUp fast" :style="{'background-color':night?otherBg.bg[1]:otherBg.bg[0]}"
			v-if="tool==2">
			<view class="top">
				<view class="left" :style="{color:night?otherBg.font[1].title:otherBg.font[0].title}">速度</view>
				<view class="right">
					<button type="default"
						:style="{'background-color':night?otherBg.tool[1].bg:otherBg.tool[0].bg,color:night?otherBg.tool[1].color:otherBg.tool[0].color}"
						@click="speedPrev">减速 -</button>
					<span :style="{color:night?otherBg.tool[1].color:otherBg.tool[0].color}">{{100-speed}}</span>
					<button type="default"
						:style="{'background-color':night?otherBg.tool[1].bg:otherBg.tool[0].bg,color:night?otherBg.tool[1].color:otherBg.tool[0].color}"
						@click="speedNext">加速 +</button>
				</view>
			</view>
			<view class="bottom" @tap="out">
				<text class="iconfont icon-fenxiang1"
					:style="{color:night?otherBg.tool[1].color:otherBg.tool[0].color}"></text>
				<text class="text" :style="{color:night?otherBg.tool[1].color:otherBg.tool[0].color}">退出自动翻页</text>
			</view>
		</view>

		<view class="addbook animated slideInRight fast"
			:style="{'background-color':night?otherBg.add[1].bg:otherBg.add[0].bg,color:night?otherBg.add[1].color:otherBg.add[0].color}"
			v-if="toggle">
			{{addStatus?'去书架':'加入书架'}}
		</view>

	</view>
</template>

<script>
	let _this;
	import util from './battery.js'
	import screen from './brightness.js'
	let timer = null
	export default {
		data() {
			return {
				addStatus: false,
				pageType: 1,
				animationData: {},
				speed: 30,
				auto: false,
				night: false,
				hour: '',
				sliderValue: 0,
				second: '',
				read: 0,
				scrollViewTop:0,
				detail: {
					title: '',
					data: []
				},
				percent: 80,
				toggle: false,
				tool: null,
				width: this.winWidth,
				height: 0,
				pageImg: '',
				step: 0,
				size: 0,
				otherList: ['#8b7753', '#60735f', '#666', '#827777', '#71747d', '#4b4b4b'],
				colorList: ['#4b3013', 'rgb(21, 40, 20)', 'rgb(0, 0, 0)', 'rgb(170, 158, 158)',
					'rgb(150, 153, 162)', '#7a7a7a'
				],
				pageColorIndex: 0,
				pageColorList: ['#e8c99d', 'rgb(211, 227, 214)', 'rgb(255, 255, 255)', 'rgb(61, 49, 49)',
					'rgb(47, 50, 55)', '#000000'
				],
				fontSize: 15,
				lineHeightIndex: 0,
				lineHeightList: [(this.winHeight - 100) / 20, (this.winHeight - 100) / 16, (this.winHeight - 100) / 14],
				menuShow: false,
				isClick: true,
				startX: 0,
				startY: 0,
				page: 0,
				isMove: false,
				otherBg: {
					bg: ['#ffffff', '#191919'],
					font: [{
							title: '#131313',
							sub: '#161616'
						},
						{
							title: '#666666',
							sub: '#6d6d6d'
						}
					],
					slider: [{
							bg: '#f5f5f5',
							activeBg: '#e0e0e0',
							block: '#ffffff'
						},
						{
							bg: '#121212',
							activeBg: '#303030',
							block: '#666666'
						}
					],
					tool: [{
							bg: '#f5f5f5',
							color: '#898989'
						},
						{
							bg: '#303030',
							color: '#646464'
						}
					],
					add: [{
							bg: '#2f281e',
							color: '#ffffff'
						},
						{
							bg: '#666666',
							color: '#3d3d3d'
						}
					]
				},
				brightness: 0,
				brightnessCheck: false,
				autoTimer: null,
				scrollTop:0,
				contentHeight:0,
				down:false,
				downTimer:null,
				bid:0,
				uid:0
			}
		},
		filters: {
			num(val) {
				if (val % 2 != 0) {
					return val.toFixed(1)
				} else {
					return val.toFixed(0)
				}
			},
			time(val) {
				if (val < 10) {
					return '0' + val
				} else {
					return val
				}
			}
		},
		watch: {
			step: {
				handler(val, oldVal) {
					this.page = this.step / (this.size - 1) * 100
				},
				deep: true
			}
		},
		created() {
			let _this = this
			this.height = this.winHeight - 100
			//  #ifndef  H5
			screen.getBrigthness(function(res) {
				_this.brightness = res
			})
			//  #endif
			
		},
		onLoad(op) {
			_this = this;
			const userinfo = uni.getStorageSync('userinfo')
			_this.uid = userinfo.id
			uni.setStorageSync('readtime',0)
			const timerr =  setInterval(function(){
				let time = uni.getStorageSync('readtime') +10
				uni.setStorageSync('readtime',time)
			},10000)
			_this.bid = op.bid
			this.loadData(op.bid)
			this.getTime()
			setInterval(function() {
				util.getBattery(function(res) {
					_this.percent = res
				})
			}, 5000)
			this.animation = uni.createAnimation()
			this.addreadnum(op.bid)
			
		},
		destroyed() {
			clearInterval(timer)
			clearTimeout(this.downTimer)
		},
		methods: {
			onScroll(e){
				let self = this
				this.scrollViewTop=e.detail.scrollTop
				this.sliderValue=Number(((e.detail.scrollTop/(this.contentHeight-this.height))*100))
				this.page=Number(((e.detail.scrollTop/(this.contentHeight-this.height))*100))
			},
			scrolltoupper(e){
				let _this=this
				if(e.detail.direction=='top'&&e.type=="scrolltoupper"&&!this.down){
					if (this.read > 0) {
						uni.showLoading({
							title: '请稍等...'
						})
						setTimeout(function() {
							_this.read--
							_this.getHeight(true)
							uni.hideLoading()
							_this.sliderValue = 0
							_this.scrollViewTop=0
						}, 300)
					} else {
						uni.showToast({
							icon: 'none',
							title: '已经在最开头'
						})
					}
				}
			},
			cleadown(){
				let self = this
				this.downTimer=setTimeout(function(){
					self.down=false
				},30)
			},
			scrolltolower(e){
				let _this=this
				if(e.detail.direction=='bottom'&&e.type=="scrolltolower"){
					console.log(this.read,this.detail.data.length)
					if (this.read < (this.detail.data.length - 1)) {
						uni.showLoading({
							title: '请稍等...'
						})
						setTimeout(function() {
							_this.step = 0
							_this.read += 1
							_this.getHeight()
							uni.hideLoading()
							_this.sliderValue = 0
							_this.scrollViewTop=0
							_this.down=true
							_this.cleadown()
						}, 300)
					} else {
						uni.showToast({
							icon: 'none',
							title: '已加载全部'
						})
					}
				}
			},
			loadData(id) {

				this.request({
				url:'/api.php?action=getChapt',
				method:'post',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				data:{
					bookid:id
				}
				}).then(res=>{
					console.log(res)
					
					for(let i=0;i<res.data.length;i++){
					
						this.detail.title = '1'
						this.detail.data.push({
							id: i,
							cid:res.data[i].cid,
							sub: '第' + (i+1) + '章 '+ res.data[i].Chaptername,
							content: res.data[i].Chaptertext
						})
					}
					// for(let i=0;i<10;i++){
					
					// 	this.detail.title = '1'
					// 	this.detail.data.push({
					// 		id: i,
					// 		cid:res.data[0].cid,
					// 		sub: '第' + (i+1) + '章 '+ res.data[0].Chaptername,
					// 		content: res.data[0].Chaptertext
					// 	})
					// }
					
					
				})
				console.log('加载')
				// let u = "";
				// for(let j=0;j<100;j++){
				// 	u = u + "阿UI和代发IU稍等哈UI发货吧UI返回IU修"
				// }
				// for(let i=0;i<100;i++){
				// 	this.detail.title = '1'
				// 	this.detail.data.push({
				// 		id: i, 
				// 		sub: '第' + (i+1) + '章',
				// 		content: u
				// 	})
					
				// }
				this.getHeight()
				uni.hideLoading()
				return
				let _this = this
				uni.showLoading({
					title: '加载中...'
				})
						let res = '../../static/data/data.txt'
						let arr = res.data.split('\n')
						let index = 0
						_this.articleList = []
						for (let i in arr) {
							let html = ''
							if (arr[i]) {
								// let reg='/第[一二三四五六七八九十]{1,10}章/'
								if (arr[i].indexOf('《') !== -1 || arr[i].indexOf('》') !== -1) {
									_this.detail.title = arr[i].replace(/\s+/g, "")
									_this.detail.data.push({
										id: index + 1,
										sub: arr[i].replace(/\s+/g, ""),
										content: ""
									})
								} else if (arr[i].indexOf('楔子') !== -1 || arr[i].indexOf('章') !== -1 ||
									arr[i].indexOf('篇') !== -1 || arr[i].indexOf('第') !== -1 || arr[i]
									.indexOf('节') !== -1) {
									if (arr[i].length < 20) {
										_this.detail.data.push({
											id: index + 1,
											sub: arr[i].replace(/\s+/g, ""),
											content: ""
										})
										index++
									}
								} else {
									_this.detail.data[index].content += "<p>" + arr[i].replace(/\s+/g,
										"") + '</p>'
								}
							}
						}
					
			
			
			},
			brightnessCheckBox(e) {
				let self = this
				if (e.detail.value.includes(0)) {
					this.brightnessCheck = true
					screen.setBrigthness(null, true, function(res) {

					})
				} else {
					this.brightnessCheck = false
					screen.setBrigthness(this.brightness, false, function(res) {

					})
				}
			},
			addreadnum(id){
				this.request({
				url:'/api.php?action=addBookread',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					bookid:id
				}
				}).then(res=>{
					console.log('添加阅读人数')
					this.request({
					url:'/api.php?action=addBookClicks',
					header:{'content-type' : "application/x-www-form-urlencoded"},
					method:'post',
					data:{
						bookid:id
					}
					}).then(res=>{
						console.log('添加热度')
						})
					})
					
					
			},
			brightnessChange(e) {
				let self = this
				screen.setBrigthness(e.detail.value, false, function(res) {
					self.brightness = res
				})
			},
			animateBtn(index) {
				this.pageType = index
			},
			pageBack() {
				
				uni.navigateTo({
					url: '/pages/idnex/index',
				
				})
			},
			pageBack1() {
				console.log('返回')
				const userinfo = uni.getStorageSync('userinfo')
				this.request({
				url:'/api.php?action=addReadingTime',
				header:{'content-type' : "application/x-www-form-urlencoded"},
				method:'post',
				data:{
					userid:userinfo.uid,
					time:uni.getStorageSync('readtime')
				}
				}).then(res=>{
					console.log('添加时间')
					uni.setStorageSync('readtime',0)
					
					})
				
				//存储时间
				uni.navigateBack({
					delta: 1
				})
			},
			getTime() {
				let _this = this
				timer = setInterval(function() {
					_this.hour = new Date().getHours()
					_this.second = new Date().getMinutes()
				}, 1000)
			},
			getHeight(prev) {
				let _this = this
				this.$nextTick(function() {
					const query = uni.createSelectorQuery().in(this);
					query.select('#html .content').boundingClientRect(data => {
						_this.contentHeight=data.height
						_this.transList = []
						_this.size = Math.ceil(data.height / _this.height)
						if (data.height < _this.height) {
							_this.page = 100
						}
						if (prev) {
							_this.step = _this.size - 1
						}
					}).exec();
				})
			},
			prev() {
				let _this = this
				if (this.isClick) {
					if (this.step > 0) {
						this.step--
						this.sliderValue = (this.step / (this.size - 1) * 100).toFixed(1)
						this.isClick = false
						setTimeout(function() {
							_this.isClick = true
						}, 300)
					} else {
						if (this.read > 0) {
							uni.showLoading({
								title: '请稍等...'
							})
							this.isClick = false
							setTimeout(function() {
								_this.read--
								_this.getHeight(true)
								uni.hideLoading()
								_this.sliderValue = 0
								_this.isClick = true
							}, 300)
						} else {
							uni.showToast({
								icon: 'none',
								title: '已经在最开头'
							})
						}
					}
					if (!this.auto) {
						this.tool = null
					}
					this.toggle = false
				}
				if (this.auto) {
					if (this.step >= 0) {
						this.back()
					}
				}
			},
			next(from) {
				let _this = this
				if (this.isClick) {
					if (this.step < this.size - 1) {
						this.step++
						this.sliderValue = (this.step / (this.size - 1) * 100).toFixed(1)
						this.isClick = false
						setTimeout(function() {
							_this.isClick = true
						}, 300)
					} else {
						
						if (this.read < (this.detail.data.length - 1)) {
							uni.showLoading({
								title: '请稍等...'
							})
							this.isClick = false
							setTimeout(function() {
								_this.step = 0
								_this.read += 1
								_this.getHeight()
								uni.hideLoading()
								_this.sliderValue = 0
								_this.isClick = true
							}, 300)
						} else {
							uni.showToast({
								icon: 'none',
								title: '已加载全部'
							})
						}
					}
					if (!this.auto) {
						this.tool = null
					}
					this.toggle = false
				}
				if (from) {
					if (this.step <= this.detail.data.length) {
						this.back()
					}
				}
			},
			back() {
				this.animate()
			},
			fontPrev() {
				if (this.fontSize > 12) {
					this.fontSize -= 2
					this.getHeight()
				}
			},
			fontNext() {
				this.fontSize += 2
				this.getHeight()
			},
			changeBgColor(index) {
				this.pageColorIndex = index
			},
			sapce(index) {
				this.lineHeightIndex = index
				this.getHeight()
			},
			toggleShow() {
				if (!this.auto) {
					this.toggle = !this.toggle
					this.tool = !this.tool
				} else {
					if (this.tool == 2) {
						this.tool = null
					} else {
						this.tool = 2
					}
				}
			},
			tabClick(index) {
				if (index != 1) {
					this.tool = index
					if (index == 2) {
						this.auto = true
						this.animate()
					}
				} else {
					if (index == 1) {
						this.night = !this.night
						if (this.night) {
							this.pageColorIndex = 5
						} else {
							this.pageColorIndex = 0
						}
					}
				}
			},
			menuClick(index) {
				this.step = 0
				this.read = index
				this.tool = null
				this.toggle = false
			},
			speedPrev() {
				if (this.speed < 100) {
					this.speed++
					this.animate()
				}
			},
			speedNext() {
				if (this.speed > 0) {
					this.speed--
					this.animate()
				}
			},
			out() {
				this.animationData = this.animation.export()
				this.auto = false
				this.tool = null
				this.toggle = false
				clearTimeout(this.autoTimer)
			},
			animate() {
				let _this = this
				if (this.auto) {
					if (this.autoTimer) {
						clearTimeout(this.autoTimer)
					}
					this.animation.translateY(0).step()
					this.animation.translateY(this.height).step({
						duration: _this.speed * 1000
					})
					this.animationData = this.animation.export()
					this.autoTimer = setTimeout(function() {
						_this.next('animate')
					}, _this.speed * 1000)
				}
			},
			changing(e) {
				uni.showToast({
					icon: 'none',
					title: e.detail.value + '%'
				})
			},
			sliderChange(e) {
				if(this.pageType!=2){
					this.getHeight()
					this.step = parseInt(this.size * (e.detail.value / 100))
					this.sliderValue = e.detail.value
				}else{
					this.scrollViewTop=(this.contentHeight-this.height)*(e.detail.value/100)
				}
			},
			prevBig() {
				let _this = this
				if (this.isClick) {
					if (this.read > 0) {
						uni.showLoading({
							title: '请稍等...'
						})
						this.isClick = false
						setTimeout(function() {
							_this.step = 0
							_this.read -= 1
							_this.getHeight()
							uni.hideLoading()
							_this.sliderValue = 0
							_this.isClick = true
						}, 300)
					} else {
						uni.showToast({
							icon: 'none',
							title: '已经在最开头'
						})
					}
				}
			},
			nextBig() {
				let _this = this
				if (this.isClick) {
					if (this.read < this.detail.data.length - 1) {
						uni.showLoading({
							title: '请稍等...'
						})
						this.isClick = false
						setTimeout(function() {
							_this.step = 0
							_this.read++
							_this.getHeight()
							_this.sliderValue = 0
							uni.hideLoading()
							_this.isClick = true
						}, 300)
					} else {
						uni.showToast({
							icon: 'none',
							title: '已加载全部'
						})
					}
				}
			},
			touchstart(e) {
				this.startX = e.changedTouches[0].clientX
				this.startY = e.changedTouches[0].clientY
			},
			touchMove(e) {
				let _dir = e.changedTouches[0].clientX - this.startX;
				if (_dir < -100 || _dir > 100) {
					this.isMove = true;
				} else {
					this.isMove = false;
				}
			},
			touchend(e) {
				let x = 0,
					y = 0;
				if (this.startX - e.changedTouches[0].clientX > 0) {
					x = this.startX - e.changedTouches[0].clientX
				} else {
					x = e.changedTouches[0].clientX - this.startX
				}
				if (this.startY - e.changedTouches[0].clientY > 0) {
					y = this.startY - e.changedTouches[0].clientY
				} else {
					y = e.changedTouches[0].clientY - this.startY
				}
				if (x > y) {
					if (this.startX - e.changedTouches[0].clientX > 100) {
						this.next()
					}
					if (this.startX - e.changedTouches[0].clientX < -100) {
						this.prev()
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.page {
		width: 100%;
		height: 100%;
		position: relative;

		.page-img {
			width: 100%;
		}

		#html {
			width: 100%;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			bottom: 0;
			box-sizing: border-box;

			.content {
				padding: 0 40upx;
				box-sizing: border-box;
				font-weight: 400;
				font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
				;
				text-indent: 36upx;
			}
		}

		.html-content {
			position: fixed;
			z-index: 10;
			top: 0;
			left: 0;
			bottom: 0;
			box-sizing: border-box;

			.tops {
				width: 100%;
				height: 50px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding: 0 25upx;

				.left {
					height: 50px;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;

					.icon-fanhui {
						font-size: 30upx;
						color: #8b7753;
					}

					span {
						font-size: 24upx;
						margin-left: 10upx;
					}
				}
			}

			.center {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				height: calc(100% - 50px - 50px);
				position: relative;

				.html {
					width: 100%;
					overflow-y: hidden;

					.article {
						padding: 0 40upx;
						box-sizing: border-box;
						font-weight: 400;
						font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;;
						text-indent: 36upx;
					}
				}

				.special {
					position: absolute;
					top: 0;
				}
			}

			.bottoms {
				width: 100%;
				height: 50px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-direction: row;
				box-sizing: border-box;
				padding: 0 25upx;

				.left {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					height: 50px;

					.box {
						width: 30upx;
						height: 10upx;
						padding: 4upx;
						border-radius: 6upx;
						position: relative;
						margin-right: 20upx;

						.middle {
							height: 100%;
						}

						.small {
							position: absolute;
							z-index: 1;
							top: 0;
							bottom: 0;
							right: -5upx;
							width: 5upx;
							height: 10upx;
							border-radius: 35upx;
							margin: auto;
						}
					}
				}

				span {
					font-size: 24upx;
					color: #8b7753;
				}
			}
		}

		.act {
			width: 100%;
			position: fixed;
			z-index: 101;
			top: 0;
			left: 0;
			bottom: 0;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.center {
				width: 50%;
				height: 100%;
			}

			.item {
				width: 25%;
				height: 100%;
			}
		}
	}

	.head {
		width: 100%;
		height: 100upx;
		position: fixed;
		z-index: 102;
		top: 0;
		left: 0;
		box-sizing: border-box;
		padding: 0 25upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.left {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			height: 100upx;

			.icon-fanhui {
				font-size: 36upx;
			}

			span {
				font-size: 26upx;
				margin-left: 10upx;
			}
		}
	}

	.footer {
		width: 100%;
		position: fixed;
		z-index: 102;
		bottom: 0;
		left: 0;
		padding: 40upx 30upx 10upx 30upx;
		box-sizing: border-box;

		.tool {
			.top {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				height: 40upx;
				margin-bottom: 30upx;

				.item {
					font-size: 28upx;
				}

				/deep/ .slider {
					width: 420upx;
					height: 30upx;
					padding: 0 30upx;
					margin: 0;

					.uni-slider-thumb {
						width: 40upx !important;
						height: 40upx !important;
						margin-top: -20upx !important;
					}

					.uni-slider-tap-area {
						padding: 0;
					}

					.uni-slider-handle-wrapper {
						height: 30upx;
						border-radius: 35upx;
					}
				}
			}

			.bottom {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 0 10upx 30upx 10upx;

				.tool-item {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.iconfont {
						font-size: 40upx;
						margin-bottom: 8upx;
						width: 45upx;
						height: 45upx;
						line-height: 45upx;
						text-align: center;
					}

					.span {
						font-size: 22upx;
						line-height: 36upx;
					}
				}

				.tool-item:nth-child(2) {
					.iconfont {
						font-size: 42upx;
					}
				}

				.tool-item:nth-child(3) {
					.iconfont {
						font-size: 34upx;
					}

					.icon-rijianmoshi {
						font-size: 42upx;
					}
				}

				.tool-item:nth-child(4) {
					.iconfont {
						font-size: 38upx;
					}
				}
			}
		}

		.style {
			.style-item {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-bottom: 30upx;

				.left {
					width: 100upx;
					line-height: 64upx;
					font-size: 28upx;
				}

				.right {
					display: flex;
					flex-direction: row;
					align-items: center;
					height: 64upx;
					flex: 1;
				}

				.brightness {
					justify-content: space-between;
					align-items: center;
					height: 50upx;

					.brightness-left {
						width: 400upx;
						background-color: #121212;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						border-radius: 35upx;
						padding: 0 20upx;

						.iconfont {
							font-size: 36upx;
							color: #666666;
						}

						/deep/ .slider {
							width: 420upx;
							height: 50upx;
							padding: 0 30upx;
							margin: 0;

							.uni-slider-thumb {
								width: 40upx !important;
								height: 40upx !important;
								margin-top: -20upx !important;
							}

							.uni-slider-tap-area {
								padding: 0;
							}

							.uni-slider-handle-wrapper {
								height: 50upx;
								border-radius: 35upx;
							}
						}
					}

					.brightness-right {
						label {
							display: flex;
							flex-direction: row;
							justify-content: flex-end;
							align-items: center;

							text {
								font-size: 24upx;
								color: #666666;
							}

							/deep/ checkbox {
								border-radius: 50%;
								transform: scale(0.9);
							}

							/deep/ .uni-checkbox-input {
								border-radius: 50%;
								transform: scale(0.9);
								background-color: rgba(255, 255, 255, 0.5);
								border-color: rgba(255, 255, 255, 0.5);
							}
						}
					}
				}

				.font {
					justify-content: flex-start;

					button {
						width: 200upx;
						height: 64upx;
						line-height: 64upx;
						border-radius: 30upx;
						font-size: 32upx;
					}

					span {
						width: 190upx;
						line-height: 64upx;
						text-align: center;
						display: block;
						font-size: 28upx;
					}
				}

				.background {
					justify-content: space-around;

					.color {
						width: 60upx;
						height: 60upx;
						border-radius: 50%;
						border: 4upx solid #eee;
					}
				}

				.space {
					justify-content: space-around;

					button {
						width: 180upx;
						height: 68upx;
						line-height: 68upx;
						border-radius: 35upx;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						span {
							width: 32upx;
							height: 2upx;
						}

						.span1 {
							margin: 3upx 0;
						}

						.span2 {
							margin: 5upx 0;
						}

						.span3 {
							margin: 7upx 0;
						}
					}
				}

				.animatebox {
					justify-content: space-between;

					button {
						width: 180upx;
						height: 68upx;
						line-height: 68upx;
						border-radius: 35upx;
						font-size: 24upx;
						text-align: center;
					}
				}
			}
		}
	}

	.menu {
		position: fixed;
		z-index: 102;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.7);

		.box {
			width: 70%;
			height: 100%;
			padding: 20upx;
			box-sizing: border-box;
			background-color: #e8c99d;

			.top {
				width: 100%;
				font-size: 32upx;
				color: rgb(144, 126, 90);
				line-height: 50upx;
				margin-bottom: 10upx;
			}

			.item {
				width: 100%;
				font-size: 26upx;
				color: rgb(100, 85, 54);
				line-height: 30upx;
				margin: 40upx 0;
				display: block;
			}
		}
	}

	button:hover {
		opacity: 0.8 !important;
		transition: all 02s;
	}

	button::after {
		content: none;
	}

	button {
		margin: 0;
	}

	.auto {
		width: 100%;
		position: fixed;
		z-index: 102;
		bottom: 0;
		left: 0;
		background-color: #343436;

		.top {
			padding: 40upx 30upx;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.left {
				width: 100upx;
				line-height: 60upx;
				font-size: 28upx;
				color: rgb(186, 186, 186);
			}

			.right {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				height: 60upx;
				width: 590upx;

				button {
					width: 200upx;
					height: 60upx;
					line-height: 60upx;
					border-radius: 30upx;
					background-color: rgb(66, 66, 66);
					font-size: 32upx;
					color: rgb(186, 186, 186);
				}

				span {
					width: 190upx;
					line-height: 60upx;
					text-align: center;
					display: block;
					font-size: 28upx;
					color: rgb(186, 186, 186);
				}
			}
		}

		.bottom {
			padding: 30upx 0;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			.iconfont {
				font-size: 28upx;
				color: rgb(186, 186, 186);
			}

			.text {
				font-size: 28upx;
				color: rgb(186, 186, 186);
				margin-left: 20upx;
			}
		}
	}

	.action {
		position: fixed;
		width: 20upx;
		left: 0;
		top: 0;
		z-index: 101;
		margin: 50px 0;

		view {
			display: block;
			width: 0;
			height: 0;
			border-top: 10upx solid transparent;
			border-bottom: 10upx solid transparent;
			border-left: 20upx solid #343436;
		}
	}

	.addbook {
		position: fixed;
		z-index: 102;
		right: 0;
		top: 80px;
		padding: 15upx 25upx 15upx 30upx;
		border-top-left-radius: 35upx;
		border-bottom-left-radius: 35upx;
		font-size: 26upx;
	}
</style>

