import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#000",
  fontSize: "1.5em",
  height: 140,
  textTransform: "uppercase",
  display: "grid",
  placeItems: "center",
}));

const Home = () => {
  return (
    <div>
      <h1>Explore</h1>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Link to="/awarded-books">
            <Item>Awarded Books in 2022</Item>
          </Link>
        </Grid>
        <Grid item xs={6} md={4}>
          <Link to="/nominated/thriller">
            <Item>Thriller books for nomination in 2022</Item>
          </Link>
        </Grid>
        <Grid item xs={6} md={4}>
          <Link to="/nominated/romance">
            <Item>2022 nominated Romance books</Item>
          </Link>
        </Grid>
        <Grid item xs={6} md={8}>
          <Link to="/nominated/children">
            <Item>Nominated books for Children in 2022</Item>
          </Link>
        </Grid>
        <Grid item xs={12} md={12}>
          <Link to="/weekly-scifi">
            <Item>Weekly Popular Books for Sci-Fi</Item>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
