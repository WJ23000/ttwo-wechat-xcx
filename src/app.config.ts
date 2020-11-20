export default {
  pages: [
    'pages/home/home',
    'pages/classify/classify',
    'pages/cart/cart',
    'pages/mine/mine',
    'pages/login/login',
    'pages/address/address',
    'pages/goods_detail/goods_detail',
    'pages/order_pay/order_pay',
    'pages/cloud/cloud'
  ],
  tabBar: {
    list: [{
      pagePath: 'pages/home/home',
      text: '首页',
      iconPath: 'assets/resource/home.png',
      selectedIconPath: 'assets/resource/home_active.png'
    }, {
      pagePath: 'pages/classify/classify',
      text: '分类',
      iconPath: 'assets/resource/classify.png',
      selectedIconPath: 'assets/resource/classify_active.png'
    }, {
      pagePath: 'pages/cart/cart',
      text: '购物车',
      iconPath: 'assets/resource/cart.png',
      selectedIconPath: 'assets/resource/cart_active.png'
    }, {
      pagePath: 'pages/mine/mine',
      text: '我的',
      iconPath: 'assets/resource/mine.png',
      selectedIconPath: 'assets/resource/mine_active.png'
    }],
    color: '#000000',
    selectedColor: '#3982f6',
    backgroundColor: '#fff',
    borderStyle: 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
