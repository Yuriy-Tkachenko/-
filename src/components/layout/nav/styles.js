import styled from "styled-components";

const StyledNav = styled.button`
  display: block;
  min-width: 140px;
  height: 40px;
  max-width: 256px;
  font-size: 16px;
  padding-right: 23px;
  color: white;
  box-sizing: border-box;
  font-family: "Rubik", "Arial", sans-serif;
  border: none;
  background-color: #70C05B;
  border-radius: 5px;
  text-align: right;
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 19px;
    height: 1px;
    background-color: white;
    top: 12px;
    left: 13.5px;
    box-shadow: 0 7px 0 0 #ffffff, 0 14px 0 0 #ffffff
  }
`;

export default StyledNav;