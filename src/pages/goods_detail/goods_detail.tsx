import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import './goods_detail.styl'

export default class OrderPay extends Component<any> {

  state= {
    title: "商品详情"
  }

  // 对应onLoad,页面创建时执行
  componentWillMount () { 
    
  }

  componentDidMount () { 
    
  }

  render () {
    return (
      <View className='index'>
        <View>订单支付</View>
      </View>
    )
  }
}
