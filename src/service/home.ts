import { getGoodsList } from "@ttwo/api";

export function getGoodsListService(data) {
  return getGoodsList(data).then((data) => {
    return data;
  });
}
