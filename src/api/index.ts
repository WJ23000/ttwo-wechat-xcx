// 首页
import { getGoodsList } from "./home";
// 分类
import { getClassifyList } from "./classify";
// 购物车
import { getCartList } from "./cart";
// 我的
import { updateUserInfo, sendPhoneCode } from "./mine";
// 用户相关
import { doLogin } from "./user";

export {
  getGoodsList,
  getClassifyList,
  getCartList,
  updateUserInfo,
  sendPhoneCode,
  doLogin
};
