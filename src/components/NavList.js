import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";

const navItems = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Search", path: "/search", icon: <SearchIcon /> },
];

const listNavItems = navItems.map((route) => (
  <Link to={route.path} key={route.name}>
    <ListItem button>
      <ListItemIcon>{route.icon}</ListItemIcon>
      <ListItemText primary={route.name} />
    </ListItem>
  </Link>
));

const NavList = () => {
  return <List>{listNavItems}</List>;
};

export default NavList;
