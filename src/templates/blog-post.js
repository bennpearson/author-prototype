import React from "react";
import { radius, colors, shadow } from "../constants/theme";
import Select from "../components/Form/Select";
import styled, { css } from "styled-components";

const Panel = styled.div`
  border-radius: ${radius};
  background-color: ${colors.white};
  box-shadow: ${shadow};
  border-bottom: 1px solid #ddd;
  padding: 1em;
`;

export default ({ data }) => {
  const post = data.markdownRemark;

  const selectOptions = data.allMarkdownRemark.edges.map(edge => {
    return edge.node.frontmatter.title;
  });
  return (
    <div>
      <Panel>{post.frontmatter.title}</Panel>
      <Panel>
        {post.frontmatter.answer1}
        Go to
        <Select options={selectOptions} />
      </Panel>
      <Panel>{post.frontmatter.answer2}</Panel>
      <Panel>{post.frontmatter.answer3}</Panel>
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
