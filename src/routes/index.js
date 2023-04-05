import Login from "../pages/Login";
import Meetup from "../pages/Meetup";
import Home from "../pages/Home";
import Analytics from "../pages/Analytics";
import Friends from "../pages/Friends";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Post from "../pages/Post";
import Product from "../pages/Product";
import Wallet from "../pages/Wallet";
import Call from "../pages/Call";
import VideCall from "../pages/VideCall";
import ForgotPass from "../pages/ForgotPass";

export const AllRoutes = [
  {
    path: "/login",
    page: <Login />,
    isPrivate: false,
  },
  {
    path: "/signup",
    page: <Signup />,
    isPrivate: false,
  },
  {
    path: "/home",
    page: <Home />,
    isPrivate: true,
  },
  {
    path: "/meetup",
    page: <Meetup />,
    isPrivate: true,
  },
  {
    path: "/wallet",
    page: <Wallet />,
    isPrivate: true,
  },
  {
    path: "/analytics",
    page: <Analytics />,
    isPrivate: true,
  },
  {
    path: "/product",
    page: <Product />,
    isPrivate: true,
  },
  {
    path: "/friends",
    page: <Friends />,
    isPrivate: true,
  },

  {
    path: "/dashboard",
    page: <Dashboard />,
    isPrivate: true,
  },

  {
    path: "/video",
    page: <VideCall />,
    isPrivate: true,
  },
  {
    path: "/video/:id",
    page: <Call />,
    isPrivate: true,
  },

  {
    path: "/post",
    page: <Post />,
    isPrivate: true,
  },
  {
    path: "/forgot-pass",
    page: <ForgotPass />,
    isPrivate: false,
  },
  {
    path: "*",
    page: <Login />,
    isPrivate: false,
  },
];
