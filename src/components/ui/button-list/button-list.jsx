import React from "react";
import heart from "../../../assets/heart.svg";
import box from "../../../assets/box.svg";
import basket from "../../../assets/basket.svg";
import { StyledUl, StyledLi, StyledButton } from "./styles";

function ButtonList({ list }) {
  return(
    <StyledUl>
      <StyledLi>
        <StyledButton>
          <img src={heart} alt="Логотип избранного" />
          <span>Избранное</span>
        </StyledButton>
      </StyledLi>
      <StyledLi>
        <StyledButton>
          <img src={box} alt="Логотип заказа" />
          <span>Заказы</span>
        </StyledButton>
      </StyledLi>
      <StyledLi>
        <StyledButton>
          <img src={basket} alt="Логотип корзины" />
          <span>Корзина</span>
        </StyledButton>
      </StyledLi>
    </StyledUl>
  )
}

export default ButtonList;