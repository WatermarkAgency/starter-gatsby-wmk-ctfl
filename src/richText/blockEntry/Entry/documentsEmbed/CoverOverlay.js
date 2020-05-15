import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

const OverlayWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
  .flex-column {
    // next two lines partially fix safari's issues with flexbox
    -webkit-flex: 0;
    flex-shrink: 0;
  }
  .col {
    display: flex;
    justify-content: center;
    // next two lines partially fix safari's issues with flexbox
    -webkit-flex: 0;
    flex-shrink: 0;
  }
  img {
    margin: auto;
    //max-width: 40%;
    padding-left: 0.5rem;
    max-height: 60px;
  }
  padding: 0 0 3rem 0;
  h5 {
    text-transform: uppercase;
    text-align: center;
    line-height: 1.1;
    padding: .25rem 1rem;
  }
`;

export default ({ title }) => {
  const { options } = useStaticQuery(query);
  return (
    <OverlayWrap>
      <Row className="flex-column" style={{ width: "100%" }}>
        <img src={options.logo.file.url} alt="UTRWD Logo" />
        <Col>
          <h5>{title}</h5>
        </Col>
      </Row>
    </OverlayWrap>
  );
};

const query = graphql`
  {
    options: contentfulGlobal(title: { eq: "UTRWD Options" }) {
      ...NodeGlobalFields
    }
  }
`;
