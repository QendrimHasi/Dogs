import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Container maxWidth="lg">
          {" "}
          <Typography variant="h6">Dog App</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
