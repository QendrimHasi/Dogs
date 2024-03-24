import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  lighten,
  styled,
} from "@mui/material";

const Wrapper = styled(AppBar)<any>`
  background-color: ${({ theme }) =>
    lighten(theme.palette.secondary.main, 0.2)};
  box-shadow: none;
  color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  font-weight: 900;
`;

function Header() {
  return (
    <Wrapper position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="h6">Dog App</Typography>
        </Container>
      </Toolbar>
    </Wrapper>
  );
}

export default Header;
