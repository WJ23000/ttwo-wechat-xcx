import { getCartList } from "@ttwo/api";

export function getCartListService(data) {
  return getCartList(data).then((data) => {
    return data;
  });
}
