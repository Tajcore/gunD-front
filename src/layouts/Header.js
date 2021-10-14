import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@mui/styles";

import { AppBar, Toolbar, IconButton, Button } from "@mui/material";

// @material-ui/icons
import { Menu } from "@mui/icons-material/";

// core components

// Logo

import GunDLogo from "../assets/images/Logo.png";
import { Box } from "@mui/system";
const useStyles = makeStyles({
  logo: {
    height: "41px",
  },
  box: {
    objectFit: "cover",
    overflow: " hidden",
  },
  navLinks: {
    textTransform: "none",
    color: "#000000",
    fontWeight: 400,
  },
  navBar: {
    padding: "0px 7rem 0px 7rem",
    marginTop: "2rem",
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar style={{ boxShadow: "none" }} position="static" color="transparent">
      <Toolbar className={classes.navBar}>
        <Box className={classes.box} component="div" sx={{ flexGrow: 1 }}>
          <img className={classes.logo} alt="Logo" src={GunDLogo} />
        </Box>
        <Button className={classes.navLinks} variant="text">
          Home
        </Button>
        <Button className={classes.navLinks} variant="text">
          Our Team
        </Button>
        <Button className={classes.navLinks} variant="text">
          Github
        </Button>
        <Button
          style={{ textTransform: "none", marginLeft: "1rem" }}
          size="large"
          color="primary"
          variant="contained"
        >
          Demo
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
