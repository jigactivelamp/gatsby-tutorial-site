import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const Seo = ({ title }: { title: string }) => {
  const {
    site: {
      siteMetadata: { title: siteTitle = title },
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

  return <title>{siteTitle}</title>;
};

export default Seo;
