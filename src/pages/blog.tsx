import React from "react";
import { graphql } from "gatsby";
import { Layout, Seo } from "../components";

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data?.allMdx?.nodes?.map(
        ({ id, excerpt, frontmatter: { date, title } }: any) => (
          <article key={id}>
            <h2>{title}</h2>
            <p>Posted: {date}</p>
            <p>{excerpt}</p>
          </article>
        )
      )}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo title="My Blog Posts" />;
export default BlogPage;
