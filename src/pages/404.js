import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/MainLayout";
import {WmkSeo} from 'wmk-seo'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6vh 6vw;
`;

const NotFoundPage = () => (
  <Layout>
    <WmkSeo title={}
    <Wrap>
      <h1>404 NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </Wrap>
  </Layout>
);

export default NotFoundPage;
