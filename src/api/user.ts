import { fetchRequest } from "@ttwo/utils";
const baseUrl = "/iot-service-course/api/course";

export function doLogin(query: { code: string }) {
  return fetchRequest({
    url: `${baseUrl}/list`,
    method: "GET",
    params: query
  });
}
