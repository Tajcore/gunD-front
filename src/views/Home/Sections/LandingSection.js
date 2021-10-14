import React from "react";

// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import {
  Button,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
  },
}));

const LandingSection = () => {
  const images = [
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218144/gunD/testedImages/13_pyqj2y.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218144/gunD/testedImages/7_fgpmhk.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218144/gunD/testedImages/15_xflpof.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218144/gunD/testedImages/12_rj6g1t.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218144/gunD/testedImages/16_qxrmbg.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218144/gunD/testedImages/14_al9dvy.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218143/gunD/testedImages/1_s9ybkw.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218144/gunD/testedImages/10_spetn0.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218143/gunD/testedImages/3_cvffhc.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218143/gunD/testedImages/9_cyqldl.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218143/gunD/testedImages/2_nj83lp.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218143/gunD/testedImages/11_eptahy.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218143/gunD/testedImages/8_mk1iot.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218142/gunD/testedImages/6_msxacc.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218142/gunD/testedImages/4_rqt24y.png",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634218142/gunD/testedImages/5_mshd0s.png",
  ];
  return (
    <section>
      <Box>
        <Grid spacing={3} container direction="row">
          <Grid
            xs={6}
            spacing={1}
            justifyContent="center"
            item
            container
            direction="column"
          >
            <Grid item>
              <Typography fontWeight={600} variant="h1">
                This is Our Weapon Detection AI{" "}
                <span style={{ color: "#377DFF" }}>gunD</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ color: "#6D7C8D" }} variant="subtitle1">
                gunD is currently capable of detecting firearms in images
              </Typography>
            </Grid>
            <Grid spacing={1} item container>
              <Grid item>
                <Button variant="contained">Demo</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Documentation</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} item>
            <ImageList cols={4}>
              {images.map((item, index) => {
                return (
                  <ImageListItem>
                    <img
                      src={item}
                      alt={`gun Detected-${index}`}
                      loading="lazy"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default LandingSection;
