import React from "react";
import Header from "../header";
import Footer from "../footer";
import { styled } from "@mui/material";

const Wrapper = styled("div")`
  .body {
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    min-height: calc(100vh - 190px);
  }
`;

function DefaultLayout({ children }: any) {
  return (
    <Wrapper>
      <Header />
      <div className="body">{children}</div>
      <Footer />
    </Wrapper>
  );
}

export default DefaultLayout;
