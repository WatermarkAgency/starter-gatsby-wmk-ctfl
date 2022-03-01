import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Copyright } from "wmk-layout";
import { SiteMetaDataFields } from "../../fragments/NodeSiteMetadataFields";

const Footer = () => {
  const data: FooterQuery = useStaticQuery(query);
  return (
    <footer>
      <Copyright>{data.site.siteMetadata.title}</Copyright>
    </footer>
  );
};

export default Footer;

interface FooterQuery {
  site: SiteMetaDataFields;
}

const query = graphql`
  {
    site {
      ...NodeSiteMetadata
    }
  }
`;
