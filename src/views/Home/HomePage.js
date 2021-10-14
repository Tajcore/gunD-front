import React from "react";

// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

// Sections
import { Landing, Demo } from "./Sections";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(9),
  },
  spacer: {
    marginTop: theme.spacing(12),
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Landing />
      <dt className={classes.spacer} />
      <Demo />
    </div>
  );
};

export default HomePage;
