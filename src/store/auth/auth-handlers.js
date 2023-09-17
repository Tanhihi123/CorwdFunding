import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAuthRegister } from "./auth-request";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";

export default function* handleAuthRegister({ payload }) {
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log(response.status);
    if (response.status === "201") {
      toast.success("Create new account successfully !!");
    }
  } catch (error) {
    toast.error("Don't create new account");
    console.log(error);
  }
}
function* handleAuthLogin({ payload }) {
  try {
    console.log(payload);
    const response = yield call(requestAuthLogin, payload);
    // accessToken , refreshToken
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
    yield 1;
  } catch (error) {
    console.log(error);
  }
}
export { handleAuthLogin };
