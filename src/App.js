import React from "react";

import Routes from "./routes";
import { MainLayout } from "./layouts";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./assets/scss/index.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Routes />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
