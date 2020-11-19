import { fetchRequest } from "@ttwo/utils";
import { UserInfoParams } from "@ttwo/model";
const baseUrl = "/iot-service-course/api/course";

export function getUserInfo(query: { id: string }) {
  return fetchRequest({
    url: `${baseUrl}/userInfo`,
    method: "GET",
    params: query
  });
}

export function postUserInfo(data: UserInfoParams) {
  return fetchRequest({
    url: `${baseUrl}/userInfo`,
    method: "POST",
    data
  });
}
