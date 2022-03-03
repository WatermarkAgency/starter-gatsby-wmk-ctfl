import { BLOCKS } from "@contentful/rich-text-types";
import * as React from "react";
import { Fade } from "react-awesome-reveal";
import { WmkImage, Img, ContentfulImageQuery } from "wmk-image";
import ReactPlayer from "react-player";
import { Typography } from "../ui/Typography";
import { EmbeddedBlock, RichTextTopLeveBlock } from "wmk-rich-text";
import { blockHash } from "./BlockHash";

const NullComp = () => <></>;

export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: RichTextTopLeveBlock) => {
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
    [BLOCKS.PARAGRAPH]: (
      //node: RichTextTopLeveBlock,
      children: React.ReactChild
    ) => {
      return <Typography.P>{children}</Typography.P>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: RichTextTopLeveBlock) => {
      const entry = new EmbeddedBlock(node, blockHash);
      return entry.render();
    },
    [BLOCKS.HEADING_1]: (
      //node: RichTextTopLeveBlock,
      children: React.ReactChild
    ) => {
      //console.log(node);
      return (
        <Fade direction="up">
          <Typography.H1>{children}</Typography.H1>
        </Fade>
      );
    },
    [BLOCKS.HEADING_2]: (
      //node: RichTextTopLeveBlock,
      children: React.ReactChild
    ) => {
      //console.log(node);
      return (
        <Fade direction="up">
          <Typography.H2>{children}</Typography.H2>
        </Fade>
      );
    },
    [BLOCKS.HEADING_3]: (
      //node: RichTextTopLeveBlock,
      children: React.ReactChild
    ) => {
      //console.log(node);
      return (
        <Fade direction="up">
          <Typography.H3>{children}</Typography.H3>
        </Fade>
      );
    },
    [BLOCKS.HEADING_4]: (
      //node: RichTextTopLeveBlock,
      children: React.ReactChild
    ) => {
      //console.log(node);
      return (
        <Fade>
          <Typography.H4>{children}</Typography.H4>
        </Fade>
      );
    },
    [BLOCKS.HEADING_5]: (
      //node: RichTextTopLeveBlock,
      children: React.ReactChild
    ) => {
      //console.log(node);
      return (
        <Fade>
          <Typography.H5>{children}</Typography.H5>
        </Fade>
      );
    },
    [BLOCKS.HEADING_6]: (
      //node: RichTextTopLeveBlock,
      children: React.ReactChild
    ) => {
      //console.log(node);
      return (
        <Fade>
          <Typography.H6>{children}</Typography.H6>
        </Fade>
      );
    }
  }
};
