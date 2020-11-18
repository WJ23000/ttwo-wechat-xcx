import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './login.styl'

export default class Login extends Component<any> {

  state= {
    title: "登录"
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='login'>
        <Text>登录页</Text>
      </View>
    )
  }
}
