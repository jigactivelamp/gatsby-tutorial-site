import React from "react";
import { graphql, Link } from "gatsby";
import { Layout, Seo } from "../../components";

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data?.allMdx?.nodes?.map(
        ({ id, frontmatter: { date, title, slug } }: any) => (
          <article key={id}>
            <h2>
              <Link to={`/blog/${slug}`}>{title}</Link>
            </h2>
            <p>Posted: {date}</p>
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
          slug
        }
        id
      }
    }
  }
`;
export const Head = () => <Seo title="My Blog Posts" />;
export default BlogPage;
