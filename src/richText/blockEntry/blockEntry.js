import React from "react";
import ContentColumns from './contentColumns/contentColumns'
import SimpleText from './Entry/simpleText'
import MenuItem from './Entry/menuItem'
import VideoEmbed from './Entry/videoEmbed'
import DocumentsEmbed from './Entry/documentsEmbed/documentsEmbed'

const RenderEntry = {
  simpleText: ({ fields }) => <SimpleText fields={fields} />,
  contentColumns: ({ fields }) => <ContentColumns fields={fields} />,
  menuItem: ({fields}) => <MenuItem fields={fields} />,
  videoEmbed: ({fields}) => <VideoEmbed fields={fields} />,
  documentsEmbed: ({fields}) => <DocumentsEmbed fields={fields} />
};

export default (node) => {
  const contentType =
    node.data.target.sys &&
    node.data.target.sys.contentType &&
    node.data.target.sys.contentType.sys.id;
  const { fields } = node.data.target;
  const JSX = RenderEntry[contentType];
  return JSX ? (
    <JSX fields={fields} />
  ) : (
    <em className="error">Error loading entry. {contentType}</em>
  );
};

