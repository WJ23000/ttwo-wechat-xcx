import { doLogin } from "@ttwo/api";

export function doLoginService(data) {
  return doLogin(data).then((data) => {
    return data;
  });
}
