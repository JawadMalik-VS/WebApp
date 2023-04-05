import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MeetupIcon from "@mui/icons-material/MenuBook";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/FamilyRestroomSharp";
import ProductIcon from "@mui/icons-material/ProductionQuantityLimits";
import WalletIcon from "@mui/icons-material/WalletSharp";
import Call from "@mui/icons-material/Call";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Post",
    icon: <PostIcon />,
    link: "/post",
  },
  {
    title: "Wallet",
    icon: <WalletIcon />,
    link: "/wallet",
  },

  {
    title: "Product",
    icon: <ProductIcon />,
    link: "/product",
  },

  {
    title: "Meetups",
    icon: <MeetupIcon />,
    link: "/meetup",
  },
  {
    title: "Video",
    icon: <Call />,
    link: "/video",
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon />,
    link: "/analytics",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Friends",
    icon: <GroupIcon />,
    link: "/friends",
  },
];
