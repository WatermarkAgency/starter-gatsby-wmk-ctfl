import { graphql } from "gatsby";

// add or subtract more "site" data in gatsby-config.tsx
export interface SiteMetaDataFields {
  siteMetadata: {
    title: string;
    baseUrl: string;
    author: string;
    description: string;
  };
}

export const NodeSiteMetadataFields = graphql`
  fragment NodeSiteMetadata on Site {
    siteMetadata {
      title
      baseUrl
      author
      description
    }
  }
`;
