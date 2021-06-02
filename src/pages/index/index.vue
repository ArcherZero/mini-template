<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
    const that = this
    // 微信登录
    uni.login({
      success(res) {
        CommonAction.token({code: res.code}).then((res) => {
          console.log('fly', res)
          that.setUserInfo(res) // 登录获取用户信息
          // that.getUserInfo()
        })
      }
    })
  },
  methods: {
    ...mapMutations(["setUserInfo"]),
  }
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
