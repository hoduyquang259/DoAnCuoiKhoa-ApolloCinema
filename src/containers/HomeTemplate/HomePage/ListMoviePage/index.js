import React, { Component } from "react";
import Loader from "components/Loader";
import { actFetchListMovie } from "./modules/action";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Slider from "react-slick";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchListMovie();
  }
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { data, isLoading } = this.props;
    return (
      (isLoading && <Loader />) || (
        <div className="list-movie">
          <Grid container>
            <Grid item xs={12}>
              <Slider {...settings}>
                {data ? (
                  data.map((item, index) => (
                    <div key={index}>
                      <img src={item.hinhAnh} alt={item.biDanh} />
                    </div>
                  ))
                ) : (
                  <div>...loading</div>
                )}
              </Slider>
            </Grid>
          </Grid>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actFetchListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
