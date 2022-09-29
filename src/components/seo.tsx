import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const Seo = ({ title }: { title: string }) => {
  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {siteTitle}
    </title>
  );
};

export default Seo;
