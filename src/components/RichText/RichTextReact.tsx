import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "./richTextOptions";
import * as React from "react";
import { RichText } from "wmk-rich-text";

export const RichTextReact = ({ content }: { content: RichText }) => {
  const { json } = content;
  return <>{documentToReactComponents(json, options)}</>;
};
