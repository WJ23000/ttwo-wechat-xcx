import Taro from '@tarojs/taro'

export function getStorageSync(key) {
	return Taro.getStorage({ key }).then(res => res.data).catch(() => '')
}

export function setStorageSync(key,value) {
	return Taro.setStorage({ key:key, data:value })
}

export function removeStorageSync(key) {
	return Taro.removeStorage({ key })
}
