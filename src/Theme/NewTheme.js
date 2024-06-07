// import { createMuiTheme } from "@material-ui/core/styles";

import { createTheme } from "@mui/material";
import { deepOrange, yellow } from "@mui/material/colors";

const Newtheme = createTheme({
  typography: {
    fontFamily: "Poppins",
    typography: 200,
  },
  palette: {
    background: {
      default: "#0b0d10",
      primary: deepOrange,
      secondary: yellow,
    },
    text: {
      primary: "#fdfdfd",
    },
  },

  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#ffffff",
        },
        secondary: {
          color: "#ffffff",
        },
      },
    },
  },
});

export default Newtheme;
