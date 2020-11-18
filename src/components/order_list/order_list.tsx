import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './order_list.styl'

export default class OrderList extends Component<any> {

  static defaultProps = {
    type: "",
    loading: true
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='order-list'>
        <Text>订单列表</Text>
      </View>
    )
  }
}
