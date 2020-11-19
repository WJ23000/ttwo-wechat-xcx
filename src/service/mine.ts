import { UserInfoParams } from "@ttwo/model";
import { getUserInfo, postUserInfo } from "@ttwo/api";

export function getUserInfoService(data) {
  return getUserInfo(data).then((data) => {
    return data;
  });
}

export function postUserInfoService(data: UserInfoParams) {
  return postUserInfo(data).then((data) => {
    return data;
  });
}

