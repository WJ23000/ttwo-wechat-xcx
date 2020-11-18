import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import { getGoodsList } from '../../service/cart'
import './cart.styl'

export default class Cart extends Component<any> {
  
  state= {
    title: "购物车"
  }

  componentDidMount () { 
    getGoodsList({id: "1"}).then(res=>{
      console.log("购物车====>",res);
    })
  }

  // 跳转到订单支付页
  onOrderPay() {
    Taro.navigateTo({
      url: `/pages/order_pay/order_pay?id=2&title=订单支付`
    })    
  }

  render () {
    return (
      <View className='index'>
        <View>购物车</View>
        <View onClick={this.onOrderPay.bind(this)}>跳转到订单支付页</View>
      </View>
    )
  }
}
