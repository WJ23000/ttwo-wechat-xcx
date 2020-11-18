import Taro from '@tarojs/taro'
import { getStorageSync } from '../utils/storage'
import { API_URL } from '../config/config'

const CODE_SUCCESS = 200 // 成功状态
const CODE_AUTH_EXPIRED = 401 // 无接口访问权限
const CODE_ERROR = 403 // 接口不存在

export default async function fetchRequest(options) {
	const { url, payload, method = 'GET', showToast = true } = options
	const token = await getStorageSync('token') ? await getStorageSync('token') : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtc2ciOiIiLCJuYW1lIjoid2FuZ2p1biIsInR5cGUiOiIxIiwiZXhwIjoxNTk4OTQ2NTQ1fQ.Q-lvWFyoV7THPXJXm5K2bo5l-5Yrcy4kqm1iWxzrwAw'
	const header = {
		'content-type': 'application/json',
		'token': token
	}

	if (showToast) {
		Taro.showLoading({
			title: '数据加载中'
		})
	}

	return new Promise((resolve, reject) => {
		return Taro.request({
			url: API_URL + url,
			method,
			data: payload,
			header
		}).then(res => {
			Taro.hideLoading()
			const { code, data } = res.data
			if (code === CODE_SUCCESS) {
				return resolve(data);
			} else if (code === CODE_AUTH_EXPIRED) {
				Taro.navigateTo({
					url: '/pages/login/login'
				})
			} else if (code === CODE_ERROR) {
				Taro.showToast({
					title: '请检查API接口地址是否正确',
					icon: 'none'
				})
			}
		}).catch(err => {
			Taro.hideLoading()
			Taro.showToast({
				title: '数据请求出现未知异常，请查看控制台',
				icon: 'none'
			})
			return reject(err)
		})
	})
}