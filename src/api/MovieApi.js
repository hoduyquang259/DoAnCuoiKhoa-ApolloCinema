import axiosClient from "./AxiosClient";

const movieApi = {
  getAll(params) {
    const url = "QuanLyPhim/LayDanhSachPhim?maNhom=GP08";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "QuanLyPhim/ThemPhim";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `QuanLyPhim/CapNhatPhim/${data.id}`;
    return axiosClient.post(url, data);
  },
  remove(id) {
    const url = `QuanLyPhim/XoaPhim/${id}`;
    return axiosClient.delete(url);
  },
};
export default movieApi;
