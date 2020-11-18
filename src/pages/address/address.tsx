import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import './address.styl'

export default class Address extends Component<any> {

  state= {
    title: "收货地址"
  }

  componentDidMount () { 

  }

  render () {
    return (
      <View className='index'>
        <Text>收货地址</Text>
      </View>
    )
  }
}
