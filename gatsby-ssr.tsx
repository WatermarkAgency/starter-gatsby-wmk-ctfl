import "./node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "./src/components/layout/MainLayout";
import * as React from "react";
import type { GatsbySSR } from "gatsby";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return <Layout>{element}</Layout>;
};
