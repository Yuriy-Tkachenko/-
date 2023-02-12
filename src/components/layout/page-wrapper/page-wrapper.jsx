import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import StyledWrapper from "./styles";

function PageWrapper() {
  return(
    <>
      <Header />
        <StyledWrapper/>
      <Footer />
    </>
  )
};

export default PageWrapper;
