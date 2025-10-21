import { Template } from "@4i4/theme-registry";
import { RegionType } from "../region/region.type";

export default function Layout({
  regions,
  width,
  fullWidth = false,
  fitEdges = false,
  condensed = false,
  extendedBackground = false,
}: {
  width?: "normal" | "wide" | "narrow";
  fullWidth: boolean;
  fitEdges: boolean;
  condensed: boolean;
  extendedBackground: boolean;
  regions: {
    leftEnd: RegionType;
    left: RegionType;
    right: RegionType;
    rightEnd: RegionType;
  };
}) {
  const template = ["container"];
  if (width) template.push(`container--${width}`);
  if (fullWidth) template.push("container--wide");

  const leftEndColSize = ["xs-12", "md-3"];
  const leftColSize = ["xs-12", "md-3"];
  const rightColSize = ["xs-12", "md-3"];
  const rightEndColSize = ["xs-12", "md-3"];

  if (condensed) {
    leftEndColSize.push("condensed");
    leftColSize.push("condensed");
    rightColSize.push("condensed");
    rightEndColSize.push("condensed");
  }

  if (fitEdges) {
    leftEndColSize.push("fit-edges");
    rightEndColSize.push("fit-edges");
  }
  if (regions.leftEnd.fitEdges) {
    leftEndColSize.push("fit-edges");
  }
  if (regions.left.fitEdges) {
    leftColSize.push("fit-edges");
  }
  if (regions.right.fitEdges) {
    rightColSize.push("fit-edges");
  }
  if (regions.rightEnd.fitEdges) {
    rightEndColSize.push("fit-edges");
  }

  if (extendedBackground) {
    leftEndColSize.push("extended-background");
    rightEndColSize.push("extended-background");
  }
  if (regions.leftEnd.extendedBackground) {
    leftEndColSize.push("extended-background");
  }
  if (regions.left.extendedBackground) {
    leftColSize.push("extended-background");
  }
  if (regions.right.extendedBackground) {
    rightColSize.push("extended-background");
  }
  if (regions.rightEnd.extendedBackground) {
    rightEndColSize.push("extended-background");
  }

  return (
    <Template template={template} context="layout" className="no-gutter">
      <Template template="row" context="layout" className="no-gap">
        <Template
          template="layout--region"
          context="layout"
          className={leftEndColSize.join(" ")}>
          {regions.leftEnd.children}
        </Template>
        <Template
          template="layout--region"
          context="layout"
          className={leftColSize.join(" ")}>
          {regions.left.children}
        </Template>
        <Template
          template="layout--region"
          context="layout"
          className={rightColSize.join(" ")}>
          {regions.right.children}
        </Template>
        <Template
          template="layout--region"
          context="layout"
          className={rightEndColSize.join(" ")}>
          {regions.rightEnd.children}
        </Template>
      </Template>
    </Template>
  );
}
