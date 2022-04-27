import * as React from "react";
import styled from "styled-components";
import { WmkLink } from "wmk-link";
import { WmkButton } from "wmk-ui";

const ActionButton = styled(WmkButton.Action)`
  border: 3px solid black !important;
`;

const TestPage = () => {
  return (
    <>
      <ActionButton handler={() => alert("clicked")}>Test Button</ActionButton>
      <WmkLink to="/">Test</WmkLink>
    </>
  );
};

export default TestPage;
