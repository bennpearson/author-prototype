import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/theme";

const StyledSpan = styled.span`
  position: absolute;
  top: -1em;
  right: -2em;
  font-weight: 900;
  font-size: 10px;
  color: white;
  z-index: 1;
  &::after {
    content: "";
    display: block;
    width: 1.4em;
    height: 1.4em;
    border-radius: 100px;
    background-color: #f50d0b;
    position: absolute;
    top: 0px;
    left: -4px;
    z-index: -1;
  }
`;

const RoutingError = () => (
  <StyledSpan>1</StyledSpan>
);

export default RoutingError;
