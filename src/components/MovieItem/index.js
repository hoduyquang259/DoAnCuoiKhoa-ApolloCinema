import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3">
        <div className="card">
          <img className="card-img-top" src={movie.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{movie.tenPhim}</h4>
            <Link to={`/detail/${movie.maPhim}`} className="btn btn-success">
              Detail
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object,
};
