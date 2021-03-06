import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import { getGoodsListService } from '@ttwo/service'
import './home.styl'

export default class Index extends Component<any> {

  state= {
    title: "首页",
    type: false,
    goodsList: [
      {
        id: 1,
        name: "商品1",
        price: 100
      },
      { 
        id: 2,
        name: "商品2",
        price: 200
      },
      {
        id: 3,
        name: "商品3",
        price: 300
      },
      { id: 4,
        name: "商品4",
        price: 400
      },
      { id: 5,
        name: "商品5",
        price: 500
      }
    ]
  }

  // 对应onLoad,页面创建时执行
  componentWillMount () { }

  // 对应onReady,页面首次渲染完毕时执行
  componentDidMount () { 
    getGoodsListService({id: "1"}).then(res=>{
      console.log("首页====>",res);
    })
  } 

  // 页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时
  componentWillUnmount () { }

  // 页面显示/切入前台时触发
  componentDidShow () { }

  // 页面隐藏/切入后台时触发， 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
  componentDidHide () { }

  render () {
    const { title, type, goodsList } = this.state
    return (
      <View className='home'>
        <View>{title}</View>
        <View className={classnames('name-test', type ? 'red': 'blue')}>测试classnames</View>
        {/* 按条件渲染 */}
        {type ? <View>1</View>: <View>2</View>}
        {type && <View>3</View>}
        {/* for循环渲染 */}
        <View className='goods-list'>
          {goodsList.map((item,index) => {
            return (
              <View  key={item.id}>{item.name}-----{item.price}</View>
            )
          })}
        </View>
      </View>
    )
  }
}
