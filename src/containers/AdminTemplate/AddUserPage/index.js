import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./modules/action";

export default function AddUserPage() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(addUser(state));
  };

  return (
    <form onSubmit={handleAddUser} className="container">
      <h3>Thêm người dùng</h3>
      <div className="form-group">
        <span>Tài khoản</span>
        <input
          className="form-control"
          onChange={handleOnChange}
          name="taiKhoan"
        />
      </div>
      <div className="form-group">
        <span>Mật khẩu</span>
        <input
          className="form-control"
          onChange={handleOnChange}
          name="matKhau"
        />
      </div>
      <div className="form-group">
        <span>Họ tên</span>
        <input
          className="form-control"
          onChange={handleOnChange}
          name="hoTen"
        />
      </div>
      <div className="form-group">
        <span>Email</span>
        <input
          className="form-control"
          onChange={handleOnChange}
          name="email"
        />
      </div>
      <div className="form-group">
        <span>Số điện thoại</span>
        <input className="form-control" onChange={handleOnChange} name="soDt" />
      </div>
      <div className="form-group">
        <span>Mã nhóm</span>
        <input
          className="form-control"
          onChange={handleOnChange}
          name="maNhom"
        />
      </div>
      <div className="form-group">
        <span>Mã loại người dùng</span>
        <input
          className="form-control"
          onChange={handleOnChange}
          name="maLoaiNguoiDung"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Thêm người dùng
        </button>
      </div>
    </form>
  );
}
