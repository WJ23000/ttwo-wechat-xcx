import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import './order_pay.styl'

export default class OrderPay extends Component<any> {

  state= {
    title: "",
    type: "order"
  }

  // 对应onLoad,页面创建时执行
  componentWillMount () { 
    const {id, title} = Taro.getCurrentInstance().router.params
    Taro.setNavigationBarTitle({
      title: title
    });
    this.setState({
      title: title,
      type: this.state.type+title
    })
    console.log("接收的参数",id,title)
  }

  componentDidMount () { 
    
  }

  render () {
    const {title, type} = this.state
    return (
      <View className='index'>
        <View>{title}</View>
        <View>{type}</View>
      </View>
    )
  }
}
