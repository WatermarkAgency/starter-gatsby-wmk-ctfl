import { WmkLink } from "wmk-link";
import * as React from "react";
import { colors } from "../ui/colors";

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`
      }}>
      <h1 style={{ margin: 0 }}>
        <WmkLink
          to="/"
          style={{
            color: colors.primary.getHex(),
            textDecoration: `none`
          }}>
          Header Goes Here
        </WmkLink>
      </h1>
    </div>
  </header>
);

export default Header;
