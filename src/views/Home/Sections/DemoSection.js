import React from "react";
// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
const DemoSection = () => {
  return (
    <section>
      <Grid xs={7} spacing={2} column container>
        <Grid item>
          <Typography variant="h1">
            Try <span style={{ color: "#377DFF" }}>gunD</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Use the application below to return image annotations for your image
            file. Click the Show JSON button to view the raw response.
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ marginLeft: "1rem" }}>
            <ul>
              <li>Maximum file size is 4MB.</li>
              <li>Your browser must have JavaScript enabled</li>
            </ul>
          </Typography>
        </Grid>
        <Grid justifyContent="center" item container>
          <Grid item>
            <Typography variant="h1" color="primary">
              Try the API
            </Typography>
          </Grid>
          <Grid item>
            <Box color="primary"></Box>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default DemoSection;
