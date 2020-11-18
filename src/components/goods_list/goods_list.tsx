import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './goods_list.styl'
import { isThisTypeNode } from 'typescript'

export default class GoodsList extends Component<any> {

  static defaultProps = {
    type: ""
  }

  onClickParent(value1, value2, e) {
    this.props.onClickChild(value1, value2)
  }

  render() {
    const { type } = this.props
    return (
      <View className='goods-list'>
        <View>商品列表</View>
        <View>来自于父组件{type}</View>
        <View onClick={this.onClickParent.bind(this, "A", "B")}>触发父组件方法</View>
      </View>
    )
  }
}
