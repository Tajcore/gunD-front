import React from "react";

// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Box } from "@mui/system";

// Logo
import GunDLogo from "../assets/images/Logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "41px",
  },
  box: {
    objectFit: "cover",
    overflow: " hidden",
  },
  navLinks: {
    textTransform: "none",
    color: "#00000",
    fontWeight: 400,
  },
  root: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(6),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.root}
      style={{ boxShadow: "none" }}
      position="static"
      color="transparent"
    >
      <Toolbar>
        <Box className={classes.box} component="div" sx={{ flexGrow: 1 }}>
          <img className={classes.logo} alt="Logo" src={GunDLogo} />
        </Box>
        <Button
          style={{ textTransform: "none", color: "#00000", fontWeight: 400 }}
          variant="text"
        >
          Home
        </Button>
        <Button
          style={{ textTransform: "none", color: "#00000", fontWeight: 400 }}
          variant="text"
        >
          Our Team
        </Button>
        <Button
          style={{ textTransform: "none", color: "#00000", fontWeight: 400 }}
          variant="text"
        >
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
