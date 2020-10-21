import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import options from "./richTextOptions";
/**
 * RichText higher order component
 *
 * Helper component that renders Contentful Richt Text
 * given a json object and component options to handle
 * Tcustom rendering of certain embeddable types
 *
 * @param {Object} json
 * @returns {JSX}
 * 
 * ver 1.0.1
 */
const RichText = ({ json }) => {
  return json ? <>{documentToReactComponents(json, options)}</> : null;
};

export default RichText;