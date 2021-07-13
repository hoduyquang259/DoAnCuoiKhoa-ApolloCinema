import HomePage from "../containers/HomeTemplate/HomePage";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import BookingPage from "../containers/HomeTemplate/BookingPage";
import UserManagementPage from "../components/AdminComp/UserManagement";
import MovieManagementPage from "../components/AdminComp/MovieManagement";
import TicketManagementPage from "../components/AdminComp/TicketManagement";
import CineplextManagement from "../components/AdminComp/CineplextManagement";
import AdminPage from "../containers/AdminTemplate/AdminPage";

const routesHome = [
  { exact: true, path: "/", component: HomePage },
  { exact: true, path: "/detail-movie/:id", component: DetailMoviePage },
  { exact: true, path: "/booking-movie/:id", component: BookingPage },

];
const routesAdmin = [
  { exact: true, path: "/admin/index", component: AdminPage },
  { exact: true, path: "/admin/index/user-management", component: UserManagementPage },
  { exact: true, path: "/admin/index/movie-management", component: MovieManagementPage },
  { exact: true, path: "/admin/index/ticket-management", component: TicketManagementPage },
  { exact: true, path: "/admin/index/cineplex-management", component: CineplextManagement},
]
export {routesHome, routesAdmin};
