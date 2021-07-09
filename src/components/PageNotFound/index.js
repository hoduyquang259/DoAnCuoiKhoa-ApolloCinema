import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styleSCSS from "./PageNotFound.module.scss";
class PageNotFound extends Component {
  render() {
    return (
      <div className>
        <div id={styleSCSS.notfound}>
          <div className={styleSCSS.notfound}>
            <div className={styleSCSS.notfound404}>
              <h1>Oops!</h1>
            </div>
            <h2>404 - Không tìm thấy trang!</h2>
            <p>
              Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời
              không có sẵn.
            </p>
            <NavLink to="/">Trang Chủ</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default PageNotFound;
