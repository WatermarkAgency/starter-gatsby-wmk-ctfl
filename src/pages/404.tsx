import * as React from "react";
import styled from "styled-components";
import { WmkSeo } from "wmk-seo";
import { graphql } from "gatsby";
import { SiteMetaDataFields } from "../fragments/NodeSiteMetadataFields";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6vh 6vw;
`;

const NotFoundPage = ({ data }: { data: NotFoundPageQuery }) => (
  <>
    <WmkSeo.Meta
      title="404: Page Not Found"
      siteTitle={data.site.siteMetadata.title}
      baseUrl={data.site.siteMetadata.baseUrl}
      slug="404"
    />
    <Wrap>
      <h1>404 NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </Wrap>
  </>
);

export default NotFoundPage;

interface NotFoundPageQuery {
  site: SiteMetaDataFields;
}

export const query = graphql`
  {
    site {
      ...NodeSiteMetadata
    }
  }
`;
