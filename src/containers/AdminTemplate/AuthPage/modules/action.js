import * as ActionType from "./constants";
import axios from "axios";

export const fetchLoginAuth = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        // check maLoaiNguoiDung => QuanTri => Chuyển hướng
        // maLoaiNguoiDung === "KhachHang" return về catch()
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: { data: "Bạn k có quyền truy cập!" },
          });
        }

        //Lưu trạng thái login xuống localStorage
        localStorage.setItem("UserAdmin", JSON.stringify(result.data));

        //chuyển hướng qua trang Dashboard
        history.replace("/dashboard");

        dispatch(actAuthSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actAuthFailed(error));
      });
  };
};

const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (error) => {
  return {
    type: ActionType.AUTH_FAILED,
    payload: error,
  };
};
