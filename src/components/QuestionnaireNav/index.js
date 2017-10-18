import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import { colors } from "../../constants/theme";
import RoutingError from "../../components/Error/RoutingError";
import plusIcon from "./icon-plus.svg";
import sectionIcon from "./icon-section.svg";

const Container = styled.div`
  padding: 1em;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 0.6em;
  text-transform: uppercase;
  font-weight: 900;
  margin: 0;
  line-height: 1.5;
`;

const SectionItem = styled.li`
  margin: 0;
  padding: 0.5em 0;
  opacity: 1;
  transform: translateX(0);

  &.section-enter {
    opacity: 0;
    height: 0;
    padding: 0;
    transform: translateX(-20px);
  }

  &.section-entered {
    height: auto;
  }
`;

const SectionTitle = styled.h3`
  padding: 0.5em 0;
  font-size: 0.75em;
  margin: 0;
  font-weight: 900;
  display: flex;
  &:before {
    content: url(${sectionIcon});
    margin-right: 0.5em;
  }
`;

const SectionSubheading = styled.h3`
  padding: 0.5em 2.5em 0.5em 0.9em;
  font-size: 0.75em;
  margin: 0;
  font-weight: 500;
  display: flex;
  color: #999;
`;

const NavList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledPageItem = styled.li`
  padding: 0;
  margin: 0;
  font-weight: 500;
  opacity: 1;
  height: 2em;
  transform: translateX(0);
  display: flex;
  align-items: center;
  z-index: ${props => props.index};
  position: relative;

  &.page-enter,
  &.page-exit {
    opacity: 0;
    height: 0;
    transform: translateX(-20px);
  }

  &.page-exit {
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text};
  font-size: 0.75em;
  padding: 0.7em 2.5em 0.7em 0.9em;
  display: block;
  flex: 1 1 auto;
  height: 100%;
  position: relative;
  overflow: visible;
  transition: opacity 100ms ease-out;

  &::before {
    opacity: 0;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 0;
    transition: all 200ms ease-out;
    background: ${colors.borders};
    z-index: 1;
  }
  ${StyledPageItem}:hover & {
    &::before {
      opacity: 0.5;
      width: 100%;
    }
  }

  &.selected {
    &::before {
      opacity: 1 !important;
      width: 100%;
    }
  }

  &[aria-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const LinkText = styled.span`
  display: inline-block;
  position: relative;
  z-index: 2;
  white-space: nowrap;
  overflow: visible;
  text-overflow: ellipsis;
  opacity: ${({ fade }) => (fade ? 0.5 : 1)};
`;

const QuestionnaireNav = ({ data }) => (
  <Container id="questionnaire-nav">
    <Title>Questionnaire structure</Title>
    <NavList>
      <SectionItem>
        <SectionTitle>Section 1. Pizza</SectionTitle>
        <NavList>
          <StyledPageItem>
            <StyledLink to={`/routing/q1a/`} activeClassName="selected">
              <LinkText>1.1 What base size?</LinkText>
            </StyledLink>
          </StyledPageItem>
          <StyledPageItem>
            <StyledLink to={`/routing/q1b/`} activeClassName="selected">
              <LinkText>1.2 What toppings would you like?</LinkText>
            </StyledLink>
          </StyledPageItem>
        </NavList>
      </SectionItem>
    </NavList>
    <NavList>
      <SectionItem>
        <SectionTitle>Section 2. Ice cream sandwich</SectionTitle>
        <NavList>
          <StyledPageItem>
            <StyledLink to={`/routing/q2a/`} activeClassName="selected">
              <LinkText>
                2.1 What cookies would you like?
                <RoutingError />
              </LinkText>
            </StyledLink>
          </StyledPageItem>
          <StyledPageItem>
            <StyledLink to={`/routing/q2b/`} activeClassName="selected">
              <LinkText>2.2 What ice cream would you like?</LinkText>
            </StyledLink>
          </StyledPageItem>
        </NavList>
      </SectionItem>
    </NavList>
    <NavList>
      <SectionItem>
        <SectionTitle>Survey summary</SectionTitle>
      </SectionItem>
    </NavList>
  </Container>
);

export default QuestionnaireNav;
