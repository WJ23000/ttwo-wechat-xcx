import { fetchRequest } from "@ttwo/utils";
import { UserInfoParams, PhoneParams } from "@ttwo/model";
const baseUrl = "/iot-service-user/api/user";

// 修改用户信息
export function updateUserInfo(query: UserInfoParams) {
  return fetchRequest({
    url: `${baseUrl}/updateStuMess`,
    method: "GET",
    params: query
  })
}

// 手机验证码
export function sendPhoneCode(data: PhoneParams) {
  return fetchRequest({
    url: `${baseUrl}/sendIdentifyCode`,
    method: "POST",
    params: data
  });
}
