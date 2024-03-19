import React from "react";
import "./App.css";
import Routes from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
