import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        padding: "20px 0",
        width: "100%",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Dog App
      </Typography>
    </Box>
  );
}

export default Footer;
