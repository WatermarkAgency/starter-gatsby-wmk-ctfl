import * as React from "react";
import { RichTextDocument } from "./richTextOptions";

export const NullComponent = () => <></>;

export class EmbeddedBlock {
  private props?: {};
  private Comp?: React.FunctionComponent<any>;
  constructor(_node: RichTextDocument) {
    const node = { ..._node };
    const data = node.references;
    this.props = undefined;
    this.Comp = NullComponent;
    const type = data && "references" in node ? data.type : undefined;
    switch (type) {
      /* Example case */
      //   case "ContentfulBlockCta":
      //     this.setProps({ ...data });
      //     this.setComp(BlockCta);
      //     break;
      default:
        console.log(`no block component found for ${type} in ${node}`);
    }
  }
  render() {
    const Jsx = this.Comp;
    const props = this.props;
    return Jsx ? <Jsx {...props} /> : NullComponent;
  }
  setProps(props: {}) {
    this.props = props ? props : undefined;
  }
  setComp(Comp: React.FunctionComponent<any>) {
    this.Comp = Comp;
  }
}
