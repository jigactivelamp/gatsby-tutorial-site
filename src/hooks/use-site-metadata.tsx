import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = ({ title }: { title: string }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
