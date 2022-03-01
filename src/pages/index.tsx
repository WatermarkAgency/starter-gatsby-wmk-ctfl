import React from "react";
import Layout from "../components/layout/MainLayout";
import { Container, Row, Col } from "react-bootstrap";
import { graphql } from "gatsby";
import { SiteMetaDataFields } from "../fragments/NodeSiteMetadataFields";
import { WmkSeo } from "wmk-seo";

const IndexPage = ({ data }: { data: IndexPageQuery }) => (
  <Layout>
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
  </Layout>
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
