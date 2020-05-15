import React from "react";
import { Row, Col } from "react-bootstrap";
import { locale } from "../../baseComponents";
import SimpleTextColumn from "./Columns/simpleTextColumn"
import MenuItem from '../Entry/menuItem'
import DocumentsEmbed from '../Entry/documentsEmbed/documentsEmbed'

const RenderColumns = {
  menuItem: ({ fields }) => <MenuItem fields={fields}/>,
  simpleText: ({ fields }) => <SimpleTextColumn fields={fields} />,
  documentsEmbed: ({fields}) => <DocumentsEmbed fields={fields} />
};

export default ({ fields }) => {
  const { content } = fields;
  const contentArray = content[locale];
  //console.log(fields)
  return contentArray && contentArray.length ? (
    <Row style={{ justifyContent: "center", alignItems: "flex-start" }}>
      {contentArray.map((entry) => {
        const { sys, fields } = entry;
        const type = sys.contentType.sys.id;
        const JSX = RenderColumns[type];
        return JSX ? (
          <Col sm="auto" key={sys.id}>
            <JSX fields={fields} />
          </Col>
        ) : (
          <em className="error">Error loading contentColumn: {type}</em>
        );
      })}
    </Row>
  ) : (
    <></>
  );
};
