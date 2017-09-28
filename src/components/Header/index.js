import React from "react";
import styled from "styled-components";
import { Grid, Column } from "../Grid";
import Link from "gatsby-link";
import Breadcrumb from "../Breadcrumb";
import { colors } from "../../constants/theme";
import logo from "./logo.svg";
import IconButton from "../IconButton";
import ButtonGroup from "../ButtonGroup";

const StyledHeader = styled.header`
  height: 4em;
  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background-color: ${colors.darkGrey};
  color: ${colors.white};
  font-weight: 400;
  padding: 1em 1.5em;
`;

export const Logo = styled(Link)`
  color: white;
  position: relative;
  text-decoration: none;
`;

export const UtilityBtns = styled(ButtonGroup)`
  justify-content: flex-end;
`;

const Header = () => (
  <StyledHeader>
    <Grid align="center">
      <Column cols={2}>
        <Logo to="/">
          <img src={logo} alt="Dahl" />
        </Logo>
      </Column>

      <Column><Breadcrumb/></Column>

      <Column>
        <UtilityBtns horizontal>
          <IconButton icon="preview" title="Preview" disabled />
          <IconButton icon="export" title="Export" disabled />
        </UtilityBtns>
      </Column>
    </Grid>
  </StyledHeader>
);

export default Header;
