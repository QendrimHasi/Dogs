import { createTheme, darken, lighten } from "@mui/material";

const primary = "#323232";
const secondary = "#DDD0C8";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', Arial, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
  palette: {
    primary: {
      main: primary, // a smooth purple color
    },
    secondary: {
      main: secondary, // a smooth orange color
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: secondary, // set body background color to secondary color
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: darken(secondary, 0.1), // set skeleton color to secondary color
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: darken(secondary, 0.1), // set input color to primary color
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: lighten(secondary, 0.5), // set card background color to secondary color
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          backgroundColor: lighten(secondary, 0.5), // set autocomplete options background color to secondary color
        },
      },
    },
  },
});

export default theme;
