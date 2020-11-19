import { getClassifyList } from "@ttwo/api";

export function getClassifyListService(data) {
  return getClassifyList(data).then((data) => {
    return data;
  });
}
