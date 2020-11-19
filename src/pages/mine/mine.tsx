import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import classnames from "classnames";
import GoodsList from "../../components/goods_list/goods_list";
import { UserInfoParams} from "@ttwo/model"
import { getUserInfoService, postUserInfoService } from "@ttwo/service";
import "./mine.styl";

export default class Mine extends Component<any> {
  state = {
    title: "我的",
    type: "mine",
    userInfoFrom: {}
  };

  componentWillMount() {}

  componentDidMount() {
    getUserInfoService({ id: "1" }).then((res) => {
      console.log("获取用户信息", res);
    });
    this.setState({
      userInfoFrom: {
        userName: "",
        nickName: "",
        age: "",
        sex: "",
        homePage: ""
      }
    })
    postUserInfoService(this.state.userInfoFrom).then((res) => {
      console.log("提交用户信息", res);
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
