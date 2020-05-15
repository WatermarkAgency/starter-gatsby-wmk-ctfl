import React from "react";
import { locale } from "./baseComponents";
import Button from "../../components/common/Button";

const RenderAsset = {
  image: ({ fields }) => {
    const { title, file, description } = fields;
    const imgUrl = file ? file[locale].url : false;
    const imgAlt = title ? title[locale] : "";
    const desc = description ? description[locale] : false;
    return (
      <figure className="embedded-image-wrap">
        <img className="embedded-image" src={imgUrl} alt={imgAlt} />
        {desc && (
          <figcaption className="embedded-image-description">{desc}</figcaption>
        )}
      </figure>
    );
  },
  application: ({ fields }) => {
    const title = fields.title[locale];
    const url = fields.file[locale].url;
    return (
      <div className="embedded-file">
        <Button to={url} target="blank">
          {title}
        </Button>
      </div>
    );
  },
};

export default (node) => {
  const fields = node.data.target.fields;
  const { contentType } = fields.file[locale];
  const _type = contentType.split("/")[0];
  const JSX = RenderAsset[_type];
  return JSX ? (
    <JSX fields={fields} />
  ) : (
    <em className="error">error with embedded asset block: {_type}</em>
  );
};
