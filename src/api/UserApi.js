import axiosClient from "./AxiosClient";

const userApi = {
  register(data) {
    const url = "QuanLyNguoiDung/DangKy";
    return axiosClient.post(url, data);
  },
  getAll(params) {
    const url = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `QuanLyNguoiDung/ThongTinTaiKhoan`; //cần test
    return axiosClient.post(url);
  },
  add(data) {
    const url = "QuanLyNguoiDung/ThemNguoiDung";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `QuanLyNguoiDung/CapNhatThongTinNguoiDung`; //cần test
    return axiosClient.put(url, data);
  },
  remove(data) {
    const url = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data.taiKhoan}`; //cần test
    return axiosClient.delete(url);
  },
};
export default movieApi;
