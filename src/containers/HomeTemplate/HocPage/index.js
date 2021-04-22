import React, { Component } from "react";
import NhanVien from "./NhanVien";
// import SanPham from "./SanPham";
import WithModal from "./WithModal";

let WrapperModal = WithModal(NhanVien);

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <WrapperModal />
      </div>
    );
  }
}
