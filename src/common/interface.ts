interface UserInfo { // 用户信息
	userName?: string
	nickName?: string
	sex?: string | number
	age?: string | number
	imgUrl?: string
}


interface GoodsList { // 商品列表
	name?: string
	subName?: string
	price?: string | number
	discount?: string | number
	img?: string
}