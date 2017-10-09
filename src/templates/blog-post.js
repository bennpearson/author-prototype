import React from "react";
import { radius, colors, shadow } from "../constants/theme";
import Select from "../components/Form/Select";
import styled, { css } from "styled-components";
import { Grid, Column } from "../components/Grid";

const Panel = styled.div`
  border-radius: ${radius};
  background-color: ${colors.white};
  box-shadow: ${shadow};
  border-bottom: 1px solid #ddd;
  padding: 1em;
`;

const StyledSelect = styled(Select)`
  padding: 0.7em 2em 0.7em 0.7em
`;

const Title = styled.h1`
  font-size: 1.3em;
  margin: 0.5em 0;
`;

const AnswerTitle = styled.h2`
  font-size: 1em;
  vertical-align: -webkit-baseline-middle;
`;

const Span = styled.span`
  vertical-align: -webkit-baseline-middle;
`;

export default ({ data }) => {
  const post = data.markdownRemark;

  const selectOptions = data.allMarkdownRemark.edges.map(edge => {
    return edge.node.frontmatter.title;
  });
  return (
    <div>
      <Panel>
        <Title>{post.frontmatter.title}</Title>
      </Panel>
      <Panel>
        <Grid>
          <Column cols={6}>
            <AnswerTitle>{post.frontmatter.answer1}</AnswerTitle>
          </Column>
          <Column cols={1}>
            <Span>Go to</Span>
          </Column>
          <Column cols={5}>
            <StyledSelect options={[post.frontmatter.route1, post.frontmatter.route2, post.frontmatter.route3, post.frontmatter.route4]} />
          </Column>
        </Grid>
      </Panel>
      <Panel>
        <Grid>
          <Column cols={6}>
            <AnswerTitle>{post.frontmatter.answer2}</AnswerTitle>
          </Column>
          <Column cols={1}>
            <Span>Go to</Span>
          </Column>
          <Column cols={5}>
            <StyledSelect options={[post.frontmatter.route1, post.frontmatter.route2, post.frontmatter.route3, post.frontmatter.route4]} />
          </Column>
        </Grid>
      </Panel>
      <Panel>
      <Grid>
        <Column cols={6}>
          <AnswerTitle>{post.frontmatter.answer3}</AnswerTitle>
        </Column>
        <Column cols={1}>
          <Span>Go to</Span>
        </Column>
        <Column cols={5}>
          <StyledSelect options={[post.frontmatter.route1, post.frontmatter.route2, post.frontmatter.route3, post.frontmatter.route4]} />
        </Column>
      </Grid>
      </Panel>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        answer1
        answer2
        answer3
        route1
        route2
        route3
        route4
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
