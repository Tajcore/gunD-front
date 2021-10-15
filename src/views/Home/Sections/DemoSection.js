import React, { useRef, useState, useEffect } from "react";
// @material-ui/core components
import useDimensions from "react-cool-dimensions";
import {
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
} from "@mui/material";
const DemoSection = () => {
  const images = [
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223623/gunD/Images%20to%20test/Pistol_1059_76_ltaqcc.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223623/gunD/Images%20to%20test/Pistol_1059_23_p5lnac.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223623/gunD/Images%20to%20test/Pistol_1059_49_wyow0g.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223623/gunD/Images%20to%20test/Pistol_1056_16_akheac.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223623/gunD/Images%20to%20test/Pistol_1059_20_xk2fhu.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223623/gunD/Images%20to%20test/Pistol_1056_7_yg4e9a.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223622/gunD/Images%20to%20test/Pistol_1069_15_k8q8me.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223622/gunD/Images%20to%20test/Pistol_1054_64_jlguju.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223622/gunD/Images%20to%20test/Pistol_1068_80_pw1fuv.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223622/gunD/Images%20to%20test/Pistol_1068_86_qtl6ar.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223622/gunD/Images%20to%20test/Pistol_1064_2_u00e7j.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223622/gunD/Images%20to%20test/Pistol_1062_85_tdqytk.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223622/gunD/Images%20to%20test/Pistol_1060_64_mnn4tf.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223621/gunD/Images%20to%20test/Pistol_1060_26_xoxhfk.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223621/gunD/Images%20to%20test/Pistol_1062_45_riwxg2.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223621/gunD/Images%20to%20test/Pistol_1062_44_h1fjr5.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223621/gunD/Images%20to%20test/Pistol_1062_50_odkpe6.jpg",
    "https://res.cloudinary.com/djhycr4me/image/upload/v1634223621/gunD/Images%20to%20test/Pistol_1062_16_ogruap.jpg",
  ];
  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });
  const cloudinaryOptions = {
    cloudName: "djhycr4me",
    uploadPreset: "gunD_uploads",
    folder: "gunD_uploads",
    cropping: true,
    maxFileSize: 5500000,
    multiple: false,
  };
  const processResults = (error, result) => {
    if (!error && result && result.event === "success") {
      setCurrentImage(() => result.info.url);
      setDrawing(() => false);
    }
  };
  var myCropWidget = window.cloudinary.createUploadWidget(
    cloudinaryOptions,
    processResults
  );

  const [currentImage, setCurrentImage] = useState(
    images[[Math.floor(Math.random() * images.length)]]
  );

  const canvas = useRef();
  const [imageDim, setImageDim] = useState({});
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    // dynamically assign the width and height to canvas
    if (drawing) {
      const canvasEle = canvas.current;
      canvasEle.width = imageDim.width;
      canvasEle.height = imageDim.height;
      drawRect(
        { x: 20, y: 30, w: 100, h: 50 },
        { borderColor: "red", borderWidth: 10 }
      );
    }
  }, [drawing]);

  useEffect(() => {
    const cloudinaryScript = document.createElement("script");
    cloudinaryScript.src = "https://upload-widget.cloudinary.com/global/all.js";
    cloudinaryScript.async = true;
    document.body.appendChild(cloudinaryScript);

    return () => {
      document.body.removeChild(cloudinaryScript);
    };
  }, []);

  const randomImage = () => {
    setCurrentImage(() => images[[Math.floor(Math.random() * images.length)]]);
    setDrawing(() => false);
  };

  const drawRect = (info, style = {}) => {
    if (drawing) {
      const canvasEle = canvas.current;
      const ctx = canvasEle.getContext("2d");
      var image = new Image();
      image.src = currentImage;
      image.onload = function () {
        console.log(imageDim);
        ctx.drawImage(image, 0, 0, imageDim.width, imageDim.height);
        const { x, y, w, h } = info;
        const { borderColor, borderWidth } = style;
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.rect(x, y, w, h);
        ctx.stroke();
      };
    }
  };
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
              <li>Maximum file size is 5.5MB.</li>
              <li>Your browser must have JavaScript enabled</li>
            </ul>
          </Typography>
        </Grid>
        <Grid
          justifyContent="center"
          spacing={3}
          item
          direction="row"
          container
        >
          <Grid xs={12} style={{ marginTop: 30 }} item>
            <Typography variant="h1" color="primary">
              Try the API
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Card>
              <CardActionArea>
                {!drawing ? (
                  <CardMedia
                    id="canvas"
                    component={"img"}
                    image={currentImage}
                    ref={observe}
                  ></CardMedia>
                ) : (
                  <canvas ref={canvas}></canvas>
                )}
              </CardActionArea>
              <CardActions>
                <Button variant="text" style={{ flexGrow: 1 }}>
                  Show JSON
                </Button>
                <Button
                  onClick={() => myCropWidget.open()}
                  variant="contained"
                  color="warning"
                >
                  Upload
                </Button>
                <Button
                  onClick={() => randomImage()}
                  variant="contained"
                  color="success"
                >
                  Random Image
                </Button>
                <Button
                  onClick={() => {
                    setImageDim(() => ({ width: width, height: height }));
                    setDrawing(() => true);
                  }}
                  variant="contained"
                  color="primary"
                >
                  Detect
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default DemoSection;
