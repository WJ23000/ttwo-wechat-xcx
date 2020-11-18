import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import { getGoodsList } from '../../service/classify'
import './classify.styl'

export default class Classify extends Component<any> {

  config = {
    navigationBarTitleText: '分类'
  }

  state= {
    title: "分类"
  }

  componentWillMount () { }

  componentDidMount () { 
    getGoodsList({id: "1"}).then(res=>{
      console.log("分类====>",res);
    })
  }

  onTitle() {
    Taro.navigateTo({
      url: `/pages/cloud/cloud`
    })  
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='classify'>
        <View>分类</View>
        <View onClick={this.onTitle.bind(this)}>进入云函数页面</View>
      </View>
    )
  }
}
