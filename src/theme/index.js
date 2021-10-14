import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";

const theme = createTheme({
  palette: palette,
  typography: typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
