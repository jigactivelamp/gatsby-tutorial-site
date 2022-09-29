import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Seo, Layout } from "../components";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/meme.jpeg"
      />
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <Seo title="About Me"></Seo>;
    <meta name="description" content="Your description" />
  </>
);

export default AboutPage;
