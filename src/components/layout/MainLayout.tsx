/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { MainLayout, Sticky, Copyright } from "wmk-layout";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactChild }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <MainLayout
        Header={() => (
          <Sticky>
            <Header siteTitle={data.site.siteMetadata.title} />
          </Sticky>
        )}
        Footer={Footer}>
        {children}
      </MainLayout>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
