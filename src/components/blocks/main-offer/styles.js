import styled from "styled-components";
import offer1x from "../../../assets/offer@1x.jpg";
import offer2x from "../../../assets/offer@2x.jpg";

export const StyledOffer = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${offer1x});
  background-size: cover;

  @media(min-resolution: 2dppx) {
    background-image: url(${offer2x});
  }
`;