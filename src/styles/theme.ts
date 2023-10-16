import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5D7599",
      light: "#8a9db8",
      dark: "#405169",
      contrastText: "#fff",
    },
  },
  typography: {
    body1: {
      color: "#000000",
    },
    body2: {
      color: "#989898",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F1F4F6",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          fontWeight: 700,
          fontSize: 12,
          height: 40,
          boxShadow: "none",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 13,
          paddingBottom: 4,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: 40,
          padding: "0px",
        },
        formControl: {
          height: 40,
          padding: "0px",
          backgroundColor: "#FFFFFF",
        },
        root: {
          height: 40,
          padding: "0px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 40,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "0px",
          fontSize: 14,
          "&.Mui-focused": {
            backgroundColor: "#FFFFFFF",
          },
        },
        root: {
          height: 40,
          padding: "8px 12px 8px 12px",
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: 40,
          padding: "0px",
        },
      },
    },
  },
});

export default theme;
