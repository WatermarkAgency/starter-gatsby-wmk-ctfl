import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql } from "gatsby";
import { SiteMetaDataFields } from "../fragments/NodeSiteMetadataFields";
import { WmkSeo } from "wmk-seo";

const IndexPage = ({ data }: { data: IndexPageQuery }) => (
  <>
    <WmkSeo.Meta
      title={"Home"}
      siteTitle={data.site.siteMetadata.title}
      baseUrl={data.site.siteMetadata.baseUrl}
      slug="/"
    />
    <Container>
      <Row>
        <Col>Index Page Code Here</Col>
      </Row>
    </Container>
  </>
);

export default IndexPage;

interface IndexPageQuery {
  site: SiteMetaDataFields;
}

export const query = graphql`
  {
    site {
      ...NodeSiteMetadata
    }
  }
`;
