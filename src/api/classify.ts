import { fetchRequest } from "@ttwo/utils";
const baseUrl = "/iot-service-course/api/course";

export function getClassifyList(query: { id: string }) {
  return fetchRequest({
    url: `${baseUrl}/list`,
    method: "GET",
    params: query
  });
}
