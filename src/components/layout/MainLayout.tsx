import * as React from "react";
import { MainLayout, Sticky } from "wmk-layout";
import Header from "./Header";
import Footer from "./Footer";

/* Feed this to your header and/or footer once data is queried */
import { MenuData, HyperLink } from "wmk-menu";

const Layout = ({
  children
}: {
  children: React.ReactChild | React.ReactChild[];
}) => {
  return (
    <MainLayout
      Header={() => (
        <Sticky>
          {/* this way you can pass query 
            data to this comp. Turn footer into named or 
            anonymous function to do the same*/}
          <Header />
        </Sticky>
      )}
      Footer={Footer}>
      {children}
    </MainLayout>
  );
};

export default Layout;
