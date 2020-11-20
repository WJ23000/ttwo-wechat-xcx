import { UserInfoParams, PhoneParams } from "@ttwo/model";
import { updateUserInfo, sendPhoneCode } from "@ttwo/api";

export function updateUserInfoService(data: UserInfoParams) {
  return updateUserInfo(data).then((data) => {
    return data;
  });
}

export function sendPhoneCodeService(data: PhoneParams) {
  return sendPhoneCode(data).then((data) => {
    return data;
  });
}
