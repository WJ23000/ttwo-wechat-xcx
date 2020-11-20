import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import classnames from "classnames";
import GoodsList from "../../components/goods_list/goods_list";
import { UserInfoParams } from "@ttwo/model";
import { updateUserInfoService, sendPhoneCodeService } from "@ttwo/service";
import "./mine.styl";

export default class Mine extends Component<any> {
  state = {
    title: "我的",
    type: "mine",
    userInfoFrom: {},
  };

  componentWillMount() {}

  componentDidMount() {
    this.setState({
      userInfoFrom: {
        userName: "百度",
        nickName: "baidu",
        age: "未知",
        sex: "男",
        homePage: "https://www.baidu.com",
      },
    },()=>{
      // 修改用户信息
      updateUserInfoService(this.state.userInfoFrom).then((res) => {
        console.log("修改用户信息", res);
      });
    })
    // 发送手机验证码
    sendPhoneCodeService({ phone: "15501233759" }).then((res) => {
      console.log("获取手机验证码", res);
    });
  }

  // 子组件触发事件
  onChild(value1, value2, e) {
    // e.stopPropagation() // 阻止事件冒泡
    console.log("子组件成功触发父组件方法", value1, value2);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { type } = this.state;
    return (
      <View className="mine">
        <View>我的=====》测试组件通信</View>
        <GoodsList type={type} onClickChild={this.onChild.bind(this)} />
      </View>
    );
  }
}
