import React from "react";
import Button from "../../../../components/common/Button";
import {locale} from '../../baseComponents'
import {buildSlug} from '../../../../vars/ThemeOptions'

export default ({ fields }) => {
  const { title, target, asset, url, entry } = fields;
  const _asset = asset ? asset[locale] : null;
  const _title = title[locale];
  const _url = url ? url[locale] : null;
  const _entry = entry ? entry[locale] : null;
  const entryFields = _entry && _entry.fields;
  const slugs = entryFields && {
    slug: entryFields.slug && entryFields.slug[locale],
    parentPageSlug:
      entryFields.parentPageSlug && entryFields.parentPageSlug[locale],
    subParentPageSlug:
      entryFields.subParentPageSlug && entryFields.subParentPageSlug[locale],
  };
  const to = _asset
    ? _asset.fields.file[locale].url
    : _url
    ? _url
    : buildSlug(slugs);
  const _target = target ? target[locale] : "internal";
  const _to = _target === "internal" && to.indexOf("/") !== 0 ? "/" + to : to;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "3vh 0 4vh 0",
      }}
    >
      <Button to={_to} target={_target !== "internal" ? _target : false}>
        {_title}
      </Button>
    </div>
  );
};
