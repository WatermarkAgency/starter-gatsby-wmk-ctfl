import React from "react";
import { buildSlug } from "../ThemeOptions";
import { locale } from "../baseComponents";
import { WMKLink } from "wmk-lib";

const ApplyMarks = {
  bold: ({ children }) => {
    return <strong>{children}</strong>;
  },
  italic: ({ children }) => {
    return <em>{children}</em>;
  },
};

export const RenderNode = {
  text: ({ node }) => {
    let marks = [];
    if (node.marks) {
      node.marks.forEach((mark) => {
        if (ApplyMarks[mark.type]) marks.push(ApplyMarks[mark.type]);
      });
    }
    return marks.length
      ? marks.map((Mark) => {
          const randomKey =
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15);
          return <Mark key={randomKey}>{node.value}</Mark>;
        })
      : node.value;
  },
  "entry-hyperlink": ({ node }) => {
    const { fields } = node.data.target;
    const slugs = {
      slug: fields.slug ? fields.slug[locale] : "/",
      parentPageSlug: fields.parentPageSlug
        ? fields.parentPageSlug[locale]
        : null,
      subParentPageSlug: fields.subParentPageSlug
        ? fields.subParentPageSlug[locale]
        : null,
    };
    const path = buildSlug(slugs);
    //console.log(fields);
    //const title = fields.title ? fields.title[locale] : <em>title error!</em>
    return (
      <WMKLink
        to={path}
        className="inline"
        label={"Read more about " + fields.title[locale]}
      >
        {node.content.map((text) => text.value)}
      </WMKLink>
    );
  },
  hyperlink: ({ node }) => {
    //console.log(node,"mutha fucka",node.length)
    const thisNode = node.length ? node[0] : node;
    //const JSX = RenderNode[node.nodeType];
    //console.log(thisNode)
    const content = thisNode.content[0].value;
    return (
      <WMKLink to={thisNode.data.uri} target="blank" className="inline">
        {content}
      </WMKLink>
    );
  },
  "asset-hyperlink": ({ node }) => {
    const thisNode = node.length ? node[0] : node;
    const content = thisNode.content[0].value;
    return (
      <WMKLink
        to={thisNode.data.target.fields.file[locale].url}
        target="blank"
        className="inline"
      >
        {content}
      </WMKLink>
    );
  },
};

export const Paragraph = ({ content }) => (
  <p>
    {content.map((p) => {
      const JSX = RenderNode[p.nodeType];
      //console.log(p.nodeType);
      const randomKey =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15);
      return JSX ? (
        <JSX node={p} key={randomKey} />
      ) : (
        <em className="error">Error on: {p.nodeType} in Paragraph</em>
      );
    })}
  </p>
);
