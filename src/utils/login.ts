import Taro from '@tarojs/taro'
import { setStorageSync } from './storage'
import { doLogin } from '../service/user'

// 用户授权登录
export function userLogin() {
	Taro.login({
		success: function (res) {
			if (res.code) {
				//发起网络请求
				doLogin({ code: res.code }).then(res => {
					console.log("用户授权信息", res)
					// 设置token
					// setStorageSync("token", res.token)
				})
			} else {
				console.log('登录失败！' + res.errMsg)
			}
		}
	})
}

// token失效重新获取token
export function userCheckSession() {
	Taro.checkSession({
		success: function () {
			//session_key 未过期，并且在本生命周期一直有效
		},
		fail: function () {
			// session_key 已经失效，需要重新执行登录流程
			this.login() //重新登录
		}
	})
}