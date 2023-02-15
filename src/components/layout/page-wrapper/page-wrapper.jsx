import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page";

function PageWrapper() {
  return(
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  )
};

export default PageWrapper;
