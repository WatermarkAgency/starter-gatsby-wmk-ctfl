import React from "react";
import Layout from "../components/layout/MainLayout";
import { colors } from "../vars/palette";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const SwatchWrap = styled(Col)`
  border: 1px solid ${colors.hex("text")};
  height: 10vh;
  width: 10vw;
  background-color: ${({ hex }) => hex};
  color: ${({ label }) => {
    const color = colors.getColor(label);
    const isLight = color.isLight();
    return isLight ? colors.hex("black") : colors.hex("white");
  }};
`;

const Swatch = ({ label, hex }) => {
  return (
    <SwatchWrap hex={hex} label={label}>
      {label} | {hex}
    </SwatchWrap>
  );
};

const IndexPage = ({ pageContext }) => (
  <Layout>
    <Container>
      <Row>
        <Swatch label="primary" hex={colors.hex("primary")} />
        <Swatch label="secondary" hex={colors.hex("secondary")} />
        <Swatch label="tertiary" hex={colors.hex("tertiary")} />
        <Swatch label="accent" hex={colors.hex("accent")} />
        <Swatch label="coaccent" hex={colors.hex("coaccent")} />
        <Swatch label="white" hex={colors.hex("white")} />
        <Swatch label="black" hex={colors.hex("black")} />
        <Swatch label="text" hex={colors.hex("text")} />
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
