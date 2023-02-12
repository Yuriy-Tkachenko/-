import styled from "styled-components";

const StyledInput = styled.input`
  min-width: 637px;
  height: 39px;
  border-radius: 5px;
  border: 1px solid #70C05B;
  margin: 0 0 0 16px;
  padding: 0 0 0 16px;
  font-size: 16px;
  font-family: "Rubik", "Arial", sans-serif;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: black;
    top: 10px;
    left: 50px;
  }
`;

export default StyledInput;