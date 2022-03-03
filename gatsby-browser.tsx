import "./node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "./src/components/layout/MainLayout";
import * as React from "react";
import type { GatsbyBrowser } from "gatsby";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element
}) => {
  return <Layout>{element}</Layout>;
};
