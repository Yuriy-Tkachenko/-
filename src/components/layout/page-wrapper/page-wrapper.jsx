import React from "react";
import Header from "../header/header";
import StyledWrapper from "./styles";

function PageWrapper({ ...prop }) {
  return(
    <>
      <Header />
        <StyledWrapper/>
    </>
  )
};

export default PageWrapper;
