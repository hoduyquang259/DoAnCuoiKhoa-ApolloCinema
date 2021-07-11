import HomePage from "../containers/HomeTemplate/HomePage";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import BookingPage from "../containers/HomeTemplate/BookingPage";

const routesHome = [
  { exact: true, path: "/", component: HomePage },
  { exact: true, path: "/detail-movie/:id", component: DetailMoviePage },
  { exact: true, path: "/booking-movie/:id", component: BookingPage },
];
export default routesHome;
