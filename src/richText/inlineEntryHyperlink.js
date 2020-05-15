import React from "react";
import { WMKLink } from "wmk-lib";
import { buildSlug } from "../ThemeOptions";
import { locale } from "./baseComponents";

const RenderEntry = {
  builderPages: ({ fields, children }) => {
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
    //const _children = children.length ? children.join() : children;
    //console.log(children,_children)
    return (
      <WMKLink to={path} className="inline">
        {children.map((child) => child)}
      </WMKLink>
    );
  },
  menuItem: ({ fields, children }) => {
    const entry = fields.entry[locale].fields;
    const _entry = {
      slug: entry.slug[locale],
      parentPageSlug: entry.parentPageSlug[locale],
      subParentPageSlug: entry.subParentPageSlug[locale],
    };
    return (
      <WMKLink to={buildSlug(_entry)} className="inline">
        {children}
      </WMKLink>
    );
  },
};

export default (node, children) => {
  const { fields } = node.data.target;
  const contentType =
    node.data.target.sys.contentType && node.data.target.sys.contentType.sys.id;

  const JSX = RenderEntry[contentType];

  return JSX ? (
    <JSX fields={fields}>{children}</JSX>
  ) : (
    <em className="hyperlink-error error">
      {children}
      {console.log("inline hyperlink " + contentType + " not set")}
    </em>
  );
};
