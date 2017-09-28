import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { radius, colors, shadow } from "../constants/theme";
import { Grid, Column } from "../components/Grid";

import "./index.css";

import Header from "../components/Header";
import Nav from "../components/Nav";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  min-width: 80em;
  display: flex;
  flex-direction: column;
`;

const NavWrapper = styled.div`
  background: white;
  border-bottom: 1px solid ${colors.borders};
`;

const Center = styled.div`
  width: 100%;
  max-width: 55em;
  margin: 0 auto;
`;

const Canvas = styled.div`
  width: 100%;
  max-width: 50em;
  margin: 2em 0 0 1em;
`;

const Panel = styled.div`
  border-radius: ${radius};
  background-color: ${colors.white};
  box-shadow: ${shadow};
`;

const CenteredPanel = styled.div`
  border-radius: ${radius};
  background-color: ${colors.white};
  box-shadow: ${shadow};
  padding: 2em 2.5em;
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Wrapper>
      <Helmet
        title="eQ Author prototype"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <Header />
      <NavWrapper>
        <Grid fillHeight={false}>
          <Column offset={2}>
            <Nav />
          </Column>
        </Grid>
      </NavWrapper>
      {data.site.siteMetadata.title}

      <div>
      </div>
      <Grid align="top">
        <Column cols={2} gutters={false}>
          sdfdsf
        </Column>
        <Column gutters={false}>
        <Center>
          <Canvas>
            {children()}
          </Canvas>
        </Center>
        </Column>
        <Column cols={2} gutters={false} >
        </Column>
      </Grid>
    </Wrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper;
