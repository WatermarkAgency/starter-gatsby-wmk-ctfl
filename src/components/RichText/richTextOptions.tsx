import { BLOCKS, Document } from "@contentful/rich-text-types";
import * as React from "react";
import { Fade } from "react-awesome-reveal";
import { WmkImage, Img, ContentfulImageQuery } from "wmk-image";
import { EmbeddedBlock } from "./EmbeddedBlocks";
import ReactPlayer from "react-player";
import { Typography } from "../ui/Typography";

export interface RichTextDocument extends Document {
  references: any;
}
const NullComp = () => <></>;

export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: RichTextDocument) => {
      const image: ContentfulImageQuery = node.references;
      const type = node.references?.file?.contentType;
      return !type ? (
        <NullComp />
      ) : type.match(`image`) ? (
        <WmkImage
          image={new Img({ ...image })}
          style={{ margin: "0 0 2vh 0" }}
        />
      ) : (
        <ReactPlayer url={node.references.file.url} controls />
      );
    },
    [BLOCKS.PARAGRAPH]: (
      node: RichTextDocument,
      children: React.ReactChild
    ) => {
      console.log(node);
      return <Typography.P>{children}</Typography.P>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: RichTextDocument) => {
      const entry = new EmbeddedBlock(node);
      return entry.render();
    },
    [BLOCKS.HEADING_1]: (
      node: RichTextDocument,
      children: React.ReactChild
    ) => {
      console.log(node);
      return (
        <Fade direction="up">
          <Typography.H1>{children}</Typography.H1>
        </Fade>
      );
    },
    [BLOCKS.HEADING_2]: (
      node: RichTextDocument,
      children: React.ReactChild
    ) => {
      console.log(node);
      return (
        <Fade direction="up">
          <Typography.H2>{children}</Typography.H2>
        </Fade>
      );
    },
    [BLOCKS.HEADING_3]: (
      node: RichTextDocument,
      children: React.ReactChild
    ) => {
      console.log(node);
      return (
        <Fade direction="up">
          <Typography.H3>{children}</Typography.H3>
        </Fade>
      );
    },
    [BLOCKS.HEADING_4]: (
      node: RichTextDocument,
      children: React.ReactChild
    ) => {
      console.log(node);
      return (
        <Fade>
          <Typography.H4>{children}</Typography.H4>
        </Fade>
      );
    },
    [BLOCKS.HEADING_5]: (
      node: RichTextDocument,
      children: React.ReactChild
    ) => {
      console.log(node);
      return (
        <Fade>
          <Typography.H5>{children}</Typography.H5>
        </Fade>
      );
    },
    [BLOCKS.HEADING_6]: (
      node: RichTextDocument,
      children: React.ReactChild
    ) => {
      console.log(node);
      return (
        <Fade>
          <Typography.H6>{children}</Typography.H6>
        </Fade>
      );
    }
  }
};
