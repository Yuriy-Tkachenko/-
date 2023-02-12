import React from "react";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";
import Nav from "../nav/nav";
import Input from "../../ui/input/input";
import ButtonList from "../../ui/button-list/button-list";
import StyledHeader from "./styles";

function Header() {
  return(
    <>
      <StyledHeader>
        <LogoImage style = { {marginRight: "40px"} } />
        <Nav />
        <Input />
        <ButtonList />
      </StyledHeader>
    </> 
  )
};

export default Header;