import React from "react";
import { Box, Typography, lighten, styled } from "@mui/material";

const Wrapper = styled(Box)<any>`
  background-color: ${({ theme }) =>
    lighten(theme.palette.secondary.main, 0.2)};
  box-shadow: none;
  color: ${({ theme }) => theme.palette.primary.main};
  border-top: 1px solid ${({ theme }) => theme.palette.primary.main};
  padding: 20px 0;
  width: 100%;
`;

function Footer() {
  return (
    <Wrapper>
      <Typography color="text.secondary" align="center">
        © {new Date().getFullYear()} Dog App
      </Typography>
    </Wrapper>
  );
}

export default Footer;
