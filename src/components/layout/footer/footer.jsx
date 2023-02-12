import React from "react";
import { ReactComponent as FooterLogoImage } from "../../../assets/footer-logo.svg";
import { ReactComponent as InstagramLogoImage } from "../../../assets/instagram.svg";
import { ReactComponent as VKLogoImage } from "../../../assets/vk.svg";
import { ReactComponent as FacebookLogoImage } from "../../../assets/facebook.svg";
import { ReactComponent as OkLogoImage } from "../../../assets/odnoklassniki.svg";
import { StyledFooter, StyledUl, StyledLi, StyledButton, StyledLiSocial, StyledLink } from "./styles";

function Footer() {
  return(
    <StyledFooter>
      <FooterLogoImage style={{marginRight: "40px"}} />
      <StyledUl>
        <StyledLi>
          <StyledButton>О компании</StyledButton>
        </StyledLi>
        <StyledLi>
          <StyledButton>Контакты</StyledButton>
        </StyledLi>
        <StyledLi>
          <StyledButton>Вакансии</StyledButton>
        </StyledLi>
        <StyledLi>
          <StyledButton>Статьи</StyledButton>
        </StyledLi>
        <StyledLi>
          <StyledButton>Политика обработки персональных данных</StyledButton>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <StyledLiSocial>
          <InstagramLogoImage />
        </StyledLiSocial>
        <StyledLiSocial>
          <VKLogoImage />
        </StyledLiSocial>
        <StyledLiSocial>
          <FacebookLogoImage />
        </StyledLiSocial>
        <StyledLiSocial>
          <OkLogoImage />
        </StyledLiSocial>
      </StyledUl>
      <StyledLink href="tel:+78007773333">8 800 777 33 33</StyledLink>
    </StyledFooter>
  )
}

export default Footer;
