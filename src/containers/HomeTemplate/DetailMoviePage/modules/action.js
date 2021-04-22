import * as ActionType from "./constants";
import axios from "axios";

export const actFetchDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(actDetailMoviveRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailMoviveSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actDetailMoviveFailed(error));
      });
  };
};

const actDetailMoviveRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMoviveSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailMoviveFailed = (error) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: error,
  };
};
