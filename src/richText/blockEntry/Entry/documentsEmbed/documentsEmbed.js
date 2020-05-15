import React from "react";
import { locale } from "../../../baseComponents";
import { Row, Col } from "react-bootstrap";
import CoverImage from "./CoverImage";
import CoverOverlay from "./CoverOverlay";
import { WMKLink } from "wmk-lib";
import styled from "styled-components";
import Theme from "../../../../../vars/ThemeOptions";

const DocsLinkWrap = styled(Col)`
  display: flex;
  justify-content: center;
  a {
    font-weight: bold;
    text-decoration: underline;
    color: ${Theme.hex("orange")};
    :hover {
      color: ${Theme.hex("cyan")};
    }
  }
`;

export default ({ fields }) => {
  const { title, abbreviation, documents } = fields;
  //console.log(title, abbreviation, documents, archiveFormat);
  const _title = title[locale];
  const _abbreviation = abbreviation[locale];
  const _documents = documents[locale];
  return _documents.length ? (
    <Col style={{ display: "flex", justifyContent: "center", padding: '2vh'}}>
      <Row className="flex-column">
        <Col
          style={{
            display: "flex",
            '-webkit-flex': 0,
             flexShrink: 0,
            justifyContent: "center",
            position: "relative",
            paddingBottom: "2vh",
          }}
        >
          <WMKLink
            to={_documents[0].fields.file[locale].url}
            target="blank"
            label={_title+" "+_documents[0].fields.title[locale] + " PDF"}
          >
            <CoverImage title={_title} />
            <CoverOverlay title={_abbreviation} />
          </WMKLink>
        </Col>
        <DocsLinkWrap>
          <h6>{_title}</h6>
        </DocsLinkWrap>
        {_documents.map((doc, i) => {
          const { file, title } = doc.fields;
          const __file = file[locale];
          const __title = title[locale].split(" ");
          const year = __title[__title.length - 1].replace(/_/g," ");
          //const _year = year ? year : __title[__title.length - 1];
          return (
            <DocsLinkWrap key={_abbreviation + i}>
              <WMKLink
                to={__file.url}
                target="blank"
                label={_title + " " + __title.join(" ") + " PDF"}
              >
                {year}
              </WMKLink>
            </DocsLinkWrap>
          );
        })}
      </Row>
    </Col>
  ) : null;
};
