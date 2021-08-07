import HomePage from "../containers/HomeTemplate/HomePage";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import BookingPage from "../containers/HomeTemplate/BookingPage";
import MovieManagementPage from "../components/AdminComp/MovieManagement";
import TicketManagementPage from "../components/AdminComp/TicketManagement";
import CineplextManagement from "../components/AdminComp/CineplextManagement";
import AdminPage from "../containers/AdminTemplate/AdminPage";
import UserManagement from "../components/AdminComp/UserManagement";

const routesHome = [
  { exact: true, path: "/", component: HomePage },
  { exact: true, path: "/detail-movie/:id", component: DetailMoviePage },
  { exact: true, path: "/booking-movie/:id", component: BookingPage },

];
const routesAdmin = [
  { exact: true, path: "/dashboard", component: AdminPage },
  { exact: true, path: "/dashboard/user-management", component: UserManagement },
  { exact: true, path: "/dashboard/movie-management", component: MovieManagementPage },
  { exact: true, path: "/dashboard/ticket-management", component: TicketManagementPage },
  { exact: true, path: "/dashboard/cineplex-management", component: CineplextManagement},
]
export {routesHome, routesAdmin};
