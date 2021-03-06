import React, { useEffect, useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import { getAccessToken } from "../../../services/admin-services";
const UserManagement = () => {
  const accessToken = getAccessToken();
  // const api = createAPI(accessToken);
  const newData = [
    {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
    },
  ];

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [data, setData] = useState(newData);

  const [user, setUser] = useState({
    hoTen: "",
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "",
  });

  const fetchUserList = () => {
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08",
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUserList();
    console.log(data);
  }, []);

  // ADD USER
  const hanldeAddUser = () => {
    const handleChange = (event) => {
      let target = event.target;
      setUser({ ...user, [target.name]: target.value });
    };

    const createFromData = (user) => {
      return axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        method: "POST",
        data: user,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          console.log(res);
          fetchUserList();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
      if (
        user.taiKhoan &&
        user.matKhau &&
        user.email &&
        user.soDt &&
        user.maNhom &&
        user.maLoaiNguoiDung &&
        user.hoTen
      ) {
        setValid(true);
      }
      createFromData(user);
    };

    console.log(submitted, user);

    // Reset Form
    const resetForm = () => {
      setValid(false);
      setSubmitted(false);
      document.getElementById("form").reset();
    };

    return (
      <div>
        {/* Button trigger modal */}
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">
                  Th??m Phim
              </button> */}
        {/* Modal */}

        <div
          style={{ marginTop: 70 }}
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          aria-labelledby="modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  Th??m User
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">??</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    {submitted && valid ? (
                      <div
                        style={{
                          backgroundColor: "green",
                          color: "#fff",
                          fontSize: 16,
                        }}
                      >
                        B???n ???? th??m user th??nh c??ng!
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>T??i Kho???n</label>
                    <input
                      name="taiKhoan"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !user.taiKhoan ? (
                      <span style={{ color: "red" }}>
                        *Vui l??ng ??i???n T??i Kho???n
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>H??? T??n</label>
                    <input
                      name="hoTen"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !user.hoTen ? (
                      <span style={{ color: "red" }}>
                        *Vui l??ng ??i???n H??? t??n
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>M???t Kh???u</label>
                    <input
                      type="password"
                      name="matKhau"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !user.matKhau ? (
                      <span style={{ color: "red" }}>
                        *Vui l??ng ??i???n M???t Kh???u
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !user.email ? (
                      <span style={{ color: "red" }}>*Vui l??ng ??i???n Email</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>S??? ??i???n Tho???i</label>
                    <input
                      name="soDt"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !user.soDt ? (
                      <span style={{ color: "red" }}>
                        *Vui l??ng ??i???n S??? ??i???n tho???i
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <div>
                      <label className="visually-hidden" htmlFor="maNhom">
                        M?? Nh??m
                      </label>
                      <select
                        className="form-control"
                        id="maNhom"
                        name="maNhom"
                        onChange={handleChange}
                      >
                        <option>Vui L??ng Ch???n M?? Nh??m...</option>
                        <option value="GP01">GP01</option>
                        <option value="GP02">GP02</option>
                        <option value="GP03">GP03</option>
                        <option value="GP04">GP04</option>
                        <option value="GP05">GP05</option>
                        <option value="GP06">GP06</option>
                        <option value="GP07">GP07</option>
                        <option value="GP08">GP08</option>
                        <option value="GP09">GP09</option>
                        <option value="GP10">GP10</option>
                        <option value="GP11">GP11</option>
                        <option value="GP12">GP12</option>
                        <option value="GP13">GP13</option>
                        <option value="GP14">GP14</option>
                        <option value="GP15">GP15</option>
                      </select>
                      {submitted && !user.maNhom ? (
                        <span style={{ color: "red" }}>
                          *Vui l??ng ch???n M?? Nh??m{" "}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group">
                    <div>
                      <label
                        className="visually-hidden"
                        htmlFor="maLoaiNguoiDung"
                      >
                        M?? Lo???i Ng?????i D??ng
                      </label>
                      <select
                        className="form-control"
                        id="maLoaiNguoiDung"
                        name="maLoaiNguoiDung"
                        onChange={handleChange}
                      >
                        <option>Vui L??ng Ch???n M?? Lo???i Ng?????i D??ng...</option>
                        <option value="KhachHang">Kh??ch H??ng</option>
                        <option value="QuanTri">Qu???n Tr???</option>
                      </select>
                      {submitted && !user.maLoaiNguoiDung ? (
                        <span style={{ color: "red" }}>
                          *Vui l??ng ch???n M?? Lo???i Ng?????i D??ng{" "}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    TH??M USER
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={resetForm}
                >
                  C??i l???i
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  ????ng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // DELETE USER
  const handleDeleteUser = (taiKhoan) => {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log("x??a th??nh c??ng");
        fetchUserList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //UPDATE USER
  // const handleUpdateUser = (taiKhoan) => {
  //   const userUpdate = { ...user, taiKhoan: document.getElementById("") };

  //   axios({
  //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
  //     method: "PUT",
  //     data: userUpdate,
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   })
  //     .then((response) => {
  //       console.log("c???p nh???t th??nh c??ng");
  //       fetchUserList();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const renderUserTable = () => {
    return (
      data &&
      data.map((item, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.taiKhoan}</td>
            <td>{item.hoTen}</td>
            <td>{item.email}</td>
            <td>{item.soDt}</td>
            <td>{item.matKhau}</td>
            <td>{item.maLoaiNguoiDung}</td>
            <td style={{ display: "flex" }}>
              <button className="btn btn-primary mr-1">
                <AddBoxIcon />
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  {
                    handleDeleteUser(item.taiKhoan);
                  }
                }}
              >
                <DeleteIcon />
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div>
      <div style={{ paddingTop: "70px" }}>
        <div className="text-right mr-2">
          <span
            style={{ width: "30px", cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            <AddBoxIcon
              style={{ color: "#3f51b5", fontSize: "30px" }}
            ></AddBoxIcon>
          </span>
        </div>
        <div>{hanldeAddUser()}</div>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">T??i Kho???n</th>
            <th scope="col">H??? T??n</th>
            <th scope="col-1">Email</th>
            <th scope="col">S??? ??i???n Tho???i</th>
            <th scope="col-2">M???t Kh???u</th>
            <th scope="col-2">M?? Lo???i Ng?????i D??ng</th>
          </tr>
        </thead>
        <tbody>{renderUserTable()}</tbody>
      </table>
    </div>
  );
};

export default UserManagement;
