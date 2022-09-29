// Step 1: Import React
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Layout, Seo } from "../components";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage alt="Blackpink" src="../images/blackpink.png" />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page"></Seo>;

// Step 3: Export your component
export default IndexPage;
