import React from "react";
import { graphql } from "gatsby";
import { Layout, Seo } from "../../components";

const BlogPost = ({ data, children }: any) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>{data?.mdx?.frontmatter?.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }: any) => (
  <Seo title={data?.mdx?.frontmatter?.title} />
);
export default BlogPost;
