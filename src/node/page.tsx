import * as React from "react";
import Layout from "../components/layout/MainLayout";

/* Don't forget about setting up SEO dynamically */
import { WmkSeo } from "wmk-seo";

export default () =>
  /* use once gatsby-node is setup
  { pageContext, data }
*/
  {
    return <Layout>Page Content Here</Layout>;
  };

/* SAMPLE DYNAMIC PAGE QUERY 
  export const query = graphql`
    query postQuery($slug: String!) {
      post: wpPost(slug: { eq: $slug }) {
        ...NodePostFields
      }
    }
  `;
*/
