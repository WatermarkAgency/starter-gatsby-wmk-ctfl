import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import * as React from "react";
import { Fade } from "react-awesome-reveal";
import { WmkImage, Img, ContentfulImageQuery } from "wmk-image";
import ReactPlayer from "react-player";
import { Typography } from "../ui/Typography";
import {
  blocksEmbeddedAsset,
  blocksTypography,
  EmbeddedBlock,
  getRichTextOptions,
  RichTextChildren,
  RichTextInline,
  RichTextNode
} from "wmk-rich-text";
import { blockHash } from "./BlockHash";
import { WmkLink } from "wmk-link";

const NullComp = () => <></>;

const blocksEmbeddedAssetTest = (
  node: RichTextNode,
  Component?: React.FunctionComponent<{
    asset: ContentfulImageQuery;
    contentType: string;
  }>
) => {
  const asset = node?.reference?.data as ContentfulImageQuery;
  const type = asset?.file?.contentType;
  console.log(asset, type);
  return Component ? (
    <Component asset={asset} contentType={type} />
  ) : type.match("image") ? (
    <WmkImage image={new Img(asset)} />
  ) : type.match("video") && asset?.file?.url ? (
    <ReactPlayer url={asset.file.url} />
  ) : (
    <NullComp>
      <>{console.log(`error with type: ${type}`)}</>
    </NullComp>
  );
};

export const options = getRichTextOptions({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: blocksEmbeddedAssetTest,
    [BLOCKS.PARAGRAPH]: (node: RichTextNode, children: React.ReactNode) =>
      blocksTypography(node, children, { Wrapper: Typography.P }),
    [BLOCKS.EMBEDDED_ENTRY]: (node: RichTextNode) => {
      const entry = new EmbeddedBlock(node, blockHash);
      return entry.render();
    },
    [BLOCKS.HEADING_1]: (node: RichTextNode, children: RichTextChildren) =>
      blocksTypography(node, children, {
        Wrapper: Fade,
        Component: Typography.H1
      }),
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
});
