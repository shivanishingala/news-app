import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Hidden, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

const Data = [
  {
    name: "Home",
    herf: "/",
  },
  {
    name: "Business",
    herf: "/Business",
  },
  {
    name: "Entertainment",
    herf: "/Entertainment",
  },
  {
    name: "General",
    herf: "/General",
  },
  {
    name: "Health",
    herf: "/Health",
  },
  {
    name: "Science",
    herf: "/Science",
  },
  {
    name: "Sports",
    herf: "/Sports",
  },
  {
    name: "Technology",
    herf: "/Technology",
  },
];

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      Data: Data,
    };
  }
  render() {
    const {pathName}= window.location.pathname;
    return (
      <>
        <MainStyle>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar className="appbar">
              <Toolbar variant="dense">
                <Typography className="navbar">Navbar</Typography>
                <Box className="listBox">
                  {this.state.Data.map((obj) => {
                    return (
                      <Hidden smDown xsDown>
                      <Typography variant="h6" component="div">
                        <NavLink
                          exact
                          to={obj.herf}
                          className={`menuItem ${
                            pathName === obj.herf ? "active" : ""
                          }`}
                        >
                          {obj.name}
                        </NavLink>
                      </Typography>
                      </Hidden>
                    );
                  })}
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </MainStyle>
      </>
    );
  }
}
const MainStyle = styled(Box)({
    "& .active":{
        color: "#24cda8 !important",
        borderBottom: "1px solid white",
    },
  "& .menuItem": {
    color: "#ffffff96",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Open Sans, sans-serif",
    textDecoration: "none",
    "&:hover": {
      color: "#24cda8",
      borderBottom: "1px solid white",
    },
  },
  "& .listBox": {
    display: "flex",
    marginLeft: 50,
    marginTop: "15px",
    alignItems: "flex-end",
    gap: "15px",
  },
  "& .appbar": {
    height: "100px",
    background: "black",
    display: "flex",
    justifyContent: "center",
    position:'fixed',
    zIndex:444
  },
  "& .navbar": {
    fontSize: "42px",
    fontWeight: 700,
  },
});
