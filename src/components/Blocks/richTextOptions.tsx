import { BLOCKS } from "@contentful/rich-text-types";
import * as React from "react";
import { Fade } from "react-awesome-reveal";
import { WmkImage, Img, ContentfulImageQuery } from "wmk-image";
import ReactPlayer from "react-player";
import { Typography } from "../ui/Typography";
import { EmbeddedBlock, RichTextNode } from "wmk-rich-text";
import { blockHash } from "./BlockHash";

const NullComp = () => <></>;

export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: RichTextNode) => {
      const image = node?.reference?.data as ContentfulImageQuery;
      const type = image?.file?.contentType;
      const url = image?.file?.url;
      return !type ? (
        <NullComp />
      ) : type.match(`image`) ? (
        <WmkImage
          image={new Img({ ...image })}
          style={{ margin: "0 0 2vh 0" }}
        />
      ) : url ? (
        <ReactPlayer url={url} controls />
      ) : (
        <NullComp />
      );
    },
    [BLOCKS.PARAGRAPH]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return <Typography.P>{children as React.ReactChild}</Typography.P>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: RichTextNode) => {
      const entry = new EmbeddedBlock(node, blockHash);
      return entry.render();
    },
    [BLOCKS.HEADING_1]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade direction="up">
          <Typography.H1>{children as React.ReactChild}</Typography.H1>
        </Fade>
      );
    },
    [BLOCKS.HEADING_2]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade direction="up">
          <Typography.H2>{children as React.ReactChild}</Typography.H2>
        </Fade>
      );
    },
    [BLOCKS.HEADING_3]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade direction="up">
          <Typography.H3>{children as React.ReactChild}</Typography.H3>
        </Fade>
      );
    },
    [BLOCKS.HEADING_4]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade>
          <Typography.H4>{children as React.ReactChild}</Typography.H4>
        </Fade>
      );
    },
    [BLOCKS.HEADING_5]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade>
          <Typography.H5>{children as React.ReactChild}</Typography.H5>
        </Fade>
      );
    },
    [BLOCKS.HEADING_6]: (node: RichTextNode, children: React.ReactNode) => {
      console.log(node);
      return (
        <Fade>
          <Typography.H6>{children as React.ReactChild}</Typography.H6>
        </Fade>
      );
    }
  }
};
