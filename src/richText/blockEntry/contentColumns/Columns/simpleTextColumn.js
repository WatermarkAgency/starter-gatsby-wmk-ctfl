import React from "react";
import SimpleText from "../../Entry/simpleText";
import { Col } from "react-bootstrap";

export default ({ fields }) => {
  return (
    <Col>
      <SimpleText fields={fields} />
    </Col>
  );
};
