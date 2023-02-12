import styled from "styled-components";
import { Ul, Li, Button } from "../../styled/styled";
import phone from "../../../assets/phone.svg";

export const StyledFooter = styled.footer`
  min-width: 1208px;
  height: 95px;
  padding: 0 116px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F9F4E2;
`;

export const StyledUl = styled(Ul)`
  display: flex;
`;

export const StyledLi = styled(Li)`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const StyledLiSocial = styled(Li)`
  line-height: 0;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 18px;
  }
`;

export const StyledButton = styled(Button)`
  padding: 0;
  cursor: pointer;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #414141;
  width: 152px;
  text-align: end;
  margin: 0;
  position: relative;

  &:before{
    content: "";
    position: absolute;
    width: 22px;
    height: 23px;
    top: 0;
    left: 0;
    background-image: url(${phone});
  }
`;