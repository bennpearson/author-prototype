import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { colors } from "../../constants/theme";
import { get } from "lodash";


export const StyledNav = styled.nav`
  margin: 0;
  display: block;
`;

const StyledLink = styled(Link)`
  padding: 1em 1.5em;
  display: inline-block;
  cursor: pointer;
  font-size: 0.875em;
  font-weight: 400;
  user-select: none;
  color: ${colors.text};
  transition: color 200ms ease-in-out;
  text-decoration: none;
  border-color: rgba(5, 108, 153, 0);
  border-style: solid;
  border-width: 0 0 2px 0;
  &:hover {
    color: ${colors.blue};
  }
  &.selected {
    color: ${colors.blue};
    border-color: rgba(5, 108, 153, 1);
  }
`;

const Nav = () => (
    <StyledNav>
      <StyledLink
        to={`/meta`}
        activeClassName="selected"
      >
        Questionnaire meta
      </StyledLink>
      <StyledLink
        to={`/builder`}
        activeClassName="selected"
      >
        Builder
      </StyledLink>
      <StyledLink
        to={`/routing/`}
        activeClassName="selected"
      >
        Routing
      </StyledLink>
    </StyledNav>
);

export default Nav;
