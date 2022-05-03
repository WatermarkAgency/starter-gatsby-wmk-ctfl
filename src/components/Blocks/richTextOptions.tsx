import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import * as React from "react";
import { Fade } from "react-awesome-reveal";
import { WmkImage, Img, ContentfulImageQuery } from "wmk-image";
import ReactPlayer from "react-player";
import { Typography } from "../ui/Typography";
import { EmbeddedBlock, RichTextInline, RichTextNode } from "wmk-rich-text";
import { blockHash } from "./BlockHash";
import { WmkLink } from "wmk-link";

const NullComp = () => <></>;

export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: RichTextNode) => {
      const image = node?.reference?.data as ContentfulImageQuery;
      const title = image.title;
      const type = image?.file?.contentType;
      const url = image?.file?.url;
      return !type ? (
        <NullComp />
      ) : type.match(`image`) ? (
        <WmkImage
          image={new Img({ ...image })}
          style={{ margin: "0 0 2vh 0" }}
        />
      ) : type.match(`video`) ? (
        <ReactPlayer url={url} controls />
      ) : url ? (
        <WmkLink to={url} target="_blank">
          {title}
        </WmkLink>
      ) : (
        <NullComp />
      );
    },
    [INLINES.ASSET_HYPERLINK]: (
      node: RichTextInline,
      children: React.ReactNode
    ) => {
      const asset = node.reference?.data as ContentfulImageQuery;
      const url = asset.file?.url;
      return url ? (
        <WmkLink to={url} target="blank">
          {Array.isArray(children) ? children.join(" ") : children}
        </WmkLink>
      ) : (
        <NullComp />
      );
    },
    [BLOCKS.PARAGRAPH]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return <Typography.P>{children as React.ReactNode}</Typography.P>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: RichTextNode) => {
      const entry = new EmbeddedBlock(node, blockHash);
      return entry.render();
    },
    [BLOCKS.HEADING_1]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade direction="up">
          <Typography.H1>{children as React.ReactNode}</Typography.H1>
        </Fade>
      );
    },
    [BLOCKS.HEADING_2]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade direction="up">
          <Typography.H2>{children as React.ReactNode}</Typography.H2>
        </Fade>
      );
    },
    [BLOCKS.HEADING_3]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade direction="up">
          <Typography.H3>{children as React.ReactNode}</Typography.H3>
        </Fade>
      );
    },
    [BLOCKS.HEADING_4]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade>
          <Typography.H4>{children as React.ReactNode}</Typography.H4>
        </Fade>
      );
    },
    [BLOCKS.HEADING_5]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade>
          <Typography.H5>{children as React.ReactNode}</Typography.H5>
        </Fade>
      );
    },
    [BLOCKS.HEADING_6]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade>
          <Typography.H6>{children as React.ReactNode}</Typography.H6>
        </Fade>
      );
    }
  }
};
