import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import Input from "../../ui/input/input";
import ButtonList from "../../ui/button-list/button-list";
import StyledHeader from "./styles";

function Header() {
  return(
    <>
      <StyledHeader>
        <Logo />
        <Nav />
        <Input />
        <ButtonList />
      </StyledHeader>
    </> 
  )
};

export default Header;