import Taro from '@tarojs/taro'
import { Component } from 'react'
import './app.styl'
import './common/base.styl'
import './common/interface.ts'

// 初始化云开发
Taro.cloud.init()
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
