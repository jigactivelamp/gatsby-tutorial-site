import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data?.allFile?.edges?.map(
          ({ node: { name, id } }: { node: { name: string; id: string } }) => (
            <li key={id}>{name}</li>
          )
        )}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile {
      edges {
        node {
          id
          name
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
export const Head = ({ data }: any) => (
  <>{<title>{data?.site?.siteMetadata?.title}</title>}</>
);
export default BlogPage;
