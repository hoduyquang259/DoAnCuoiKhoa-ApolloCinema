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
                  Th??m Phim M???i
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
                        B???n ???? th??m phim th??nh c??ng!
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>T??n phim</label>
                    <input
                      name="tenPhim"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !state.tenPhim ? (
                      <span style={{ color: "red" }}>
                        *Vui l??ng ??i???n T??n Phim
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
                        *Vui l??ng ??i???n Trailer
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>H??nh ???nh</label>
                    <input
                      type="file"
                      name="hinhAnh"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !state.hinhAnh ? (
                      <span style={{ color: "red" }}>
                        *Vui l??ng ch???n H??nh ???nh
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>M?? t???</label>
                    <input
                      name="moTa"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {submitted && !state.moTa ? (
                      <span style={{ color: "red" }}>*Vui l??ng ??i???n M?? T???</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <div>
                      <label
                        className="visually-hidden"
                        htmlFor="specificSizeSelect"
                      >
                        M?? Nh??m
                      </label>
                      <select
                        className="form-control"
                        id="specificSizeSelect"
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
                      {submitted && !state.maNhom ? (
                        <span style={{ color: "red" }}>
                          *Vui l??ng ch???n M?? Nh??m{" "}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    TH??M PHIM
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
        console.log("x??a th??nh c??ng");
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
            <h1>QU???N L?? PHIM</h1>
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
            <th scope="col">M?? Phim</th>
            <th scope="col">T??n Phim</th>
            <th scope="col-1">B?? Danh</th>
            <th scope="col">H??nh ???nh</th>
            <th scope="col-2">Trailer</th>
            <th scope="col-2">M?? T???</th>
            <th scope="col">M?? Nh??m</th>
            <th scope="col">Ng??y Kh???i Chi???u</th>
            <th scope="col">????nh Gi??</th>
            <th scope="col">H??nh ?????ng</th>
          </tr>
        </thead>
        <tbody>{renderMovieTable()}</tbody>
      </table>
    </div>
  );
};

export default MovieManagement;
