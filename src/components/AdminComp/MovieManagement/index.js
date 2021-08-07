import React, { useEffect, useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import { getAccessToken } from "../../../services/admin-services";
const MovieManagement = () => {
  const accessToken = getAccessToken();
  // const api = createAPI(accessToken);
  const newData = [
    {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      hinhAnh: {},
      trailer: "",
      moTa: "",
      maNhom: "",
      ngayKhoiChieu: "",
      danhGia: "",
    },
  ];
  const [state, setState] = useState({
    hinhAnh: {},
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const [data, setData] = useState(newData);

  const fetchMovieList = () => {
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08",
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  //ADD MOVIE
  const hanldeAddMovie = () => {
    const handleChange = (event) => {
      let target = event.target;
      if (target.name === "hinhAnh") {
        setState({ ...state, hinhAnh: event.target.files[0] });
        console.log(state);
      } else {
        setState({ ...state, [event.target.name]: event.target.value });
      }
    };

    const createFromData = () => {
      let form_data = new FormData();
      for (let key in state) {
        form_data.append(key, state[key]);
      }
      return axios({
        url: "http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh",
        method: "POST",
        data: form_data,
      })
        .then((res) => {
          console.log(res);
          fetchMovieList();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
      if (
        state.tenPhim &&
        state.trailer &&
        state.hinhAnh.files &&
        state.moTa &&
        state.maNhom
      ) {
        setValid(true);
      }
      createFromData();
    };

    console.log(submitted, state);

    //Reset Form
    const resetForm = () => {
      setValid(false);
      setSubmitted(false);
      document.getElementById("form").reset();
    };

    return (
      <div>
        {/* Button trigger modal */}
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">
                Thêm Phim
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
                  Thêm Phim Mới
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
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
                        Bạn đã thêm phim thành công!
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Tên phim</label>
                    <input
                      name="tenPhim"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !state.tenPhim ? (
                      <span style={{ color: "red" }}>
                        *Vui lòng điền Tên Phim
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Trailer</label>
                    <input
                      name="trailer"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !state.trailer ? (
                      <span style={{ color: "red" }}>
                        *Vui lòng điền Trailer
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Hình ảnh</label>
                    <input
                      type="file"
                      name="hinhAnh"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !state.hinhAnh ? (
                      <span style={{ color: "red" }}>
                        *Vui lòng chọn Hình Ảnh
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Mô tả</label>
                    <input
                      name="moTa"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !state.moTa ? (
                      <span style={{ color: "red" }}>*Vui lòng điển Mô Tả</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <div>
                      <label
                        className="visually-hidden"
                        htmlFor="specificSizeSelect"
                      >
                        Mã Nhóm
                      </label>
                      <select
                        className="form-control"
                        id="specificSizeSelect"
                        name="maNhom"
                        onChange={handleChange}
                      >
                        <option>Vui Lòng Chọn Mã Nhóm...</option>
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
                      {submitted && !state.maNhom ? (
                        <span style={{ color: "red" }}>
                          *Vui lòng chọn Mã Nhóm{" "}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    THÊM PHIM
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={resetForm}
                >
                  Cài lại
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  //DELETE MOVIE
  const handleDeleteMovie = (maPhim) => {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log("xóa thành công");
        fetchMovieList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderMovieTable = () => {
    return (
      data &&
      data.map((item, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.maPhim}</td>
            <td>{item.tenPhim}</td>
            <td>{item.biDanh}</td>
            <td>
              <img src={item.hinhAnh} style={{ width: 50 }} />
            </td>
            <td>{item.trailer}</td>
            <td>{item.moTa}</td>
            <td>{item.maNhom}</td>
            <td>{item.ngayKhoiChieu}</td>
            <td>{item.danhGia}</td>
            <td style={{ display: "flex" }}>
              <button className="btn btn-primary mr-1">
                <AddBoxIcon />
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  {
                    handleDeleteMovie(item.maPhim);
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ justifyContent: "center", marginLeft: "20px" }}>
            <h1>QUẢN LÝ PHIM</h1>
          </div>
          <div style={{ marginInlineStart: "auto" }}>
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
        </div>
        <div>{hanldeAddMovie()}</div>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Mã Phim</th>
            <th scope="col">Tên Phim</th>
            <th scope="col-1">Bí Danh</th>
            <th scope="col">Hình Ảnh</th>
            <th scope="col-2">Trailer</th>
            <th scope="col-2">Mô Tả</th>
            <th scope="col">Mã Nhóm</th>
            <th scope="col">Ngày Khởi Chiếu</th>
            <th scope="col">Đánh Giá</th>
            <th scope="col">Hành Động</th>
          </tr>
        </thead>
        <tbody>{renderMovieTable()}</tbody>
      </table>
    </div>
  );
};

export default MovieManagement;
