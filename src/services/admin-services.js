
// import axios from "axios";
//Lấy Access Token
let accessToken = "";

const getAccessToken = ()=>{
// let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  return accessToken
}

//Biến quản lý lấy api
//  const constants= {
//    quanLyPhim: "QuanLyPhim",
//    quanLyNguoiDung: "QuanLyNguoiDung",
//    quanLyDatVe: "QuanLyDatVe",
//    quanLyRap: "QuanLyRap"
//  }

// GET API đầu và token đầu vào
// const createAPI = (accessToken) => axios.create({
//   baseURL: `https://movie0706.cybersoft.edu.vn/api/${constants.quanLyPhim}`,
//   headers: {
//     Authorization: `Bearer ${accessToken}`
//   }
//   })
export {
    getAccessToken
}