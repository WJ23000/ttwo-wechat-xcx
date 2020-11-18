import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import './cloud.styl'

export default class Cloud extends Component<any> {
  
  state= {
    title: "云函数"
  }

  componentDidMount () { 
    
  }

  // 获取用户信息
  getUserInfo() {
    Taro.cloud.callFunction({
      name: "user",
      data: {
        action: 'userInfo',
      },
      complete: res => {
        console.log("得到的用户信息", res)
      }
    })
  }

  // 求x+y
  getSumResult() {
    Taro.cloud.callFunction({
      name: "user",
      data: {
        action: 'sumResult',
        x: 1,
        y: 2
      },
      complete: res => {
        console.log("得到的结果", res)
      }
    })
  }

  render () {
    return (
      <View className="cloud">
        <View className="item-cell" onClick={this.getUserInfo.bind(this)}>获取用户信息</View>
        <View className="item-cell" onClick={this.getSumResult.bind(this)}>已知:x=1,y=2,求x+y的和</View>
      </View>
    )
  }
}
