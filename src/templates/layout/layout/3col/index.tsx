import { Template } from "@4i4/theme-registry";
import { RegionType } from "../region/region.type";

export default function Layout({
  regions,
  width,
  fullWidth = false,
  fitEdges = false,
  condensed = false,
  extendedBackground = false,
  split = "33/33/33",
  ...props
}: {
  width?: "normal" | "wide" | "narrow";
  fullWidth: boolean;
  fitEdges: boolean;
  condensed: boolean;
  extendedBackground: boolean;
  split: "33/33/33" | "25/50/25" | "50/25/25" | "25/25/50";
  regions: {
    left: RegionType;
    center: RegionType;
    right: RegionType;
  };
}) {
  const template = ["container"];
  if (width) template.push(`container--${width}`);
  if (fullWidth) template.push("container--wide");

  const leftColSize = ["xs-12"];
  const centerColSize = ["xs-12"];
  const rightColSize = ["xs-12"];

  if (condensed) {
    leftColSize.push("condensed");
    centerColSize.push("condensed");
    rightColSize.push("condensed");
  }

  if (fitEdges) {
    leftColSize.push("fit-edges");
    rightColSize.push("fit-edges");
  }
  if (regions.left.fitEdges) {
    leftColSize.push("fit-edges");
  }
  if (regions.center.fitEdges) {
    centerColSize.push("fit-edges");
  }
  if (regions.right.fitEdges) {
    rightColSize.push("fit-edges");
  }

  if (extendedBackground) {
    leftColSize.push("extended-background");
    rightColSize.push("extended-background");
  }
  if (regions.left.extendedBackground) {
    leftColSize.push("extended-background");
  }
  if (regions.center.extendedBackground) {
    centerColSize.push("extended-background");
  }
  if (regions.right.extendedBackground) {
    rightColSize.push("extended-background");
  }

  switch (split) {
    case "33/33/33":
      leftColSize.push("md-4");
      centerColSize.push("md-4");
      rightColSize.push("md-4");
      break;
    case "25/50/25":
      leftColSize.push("md-3");
      centerColSize.push("md-6");
      rightColSize.push("md-3");
      break;
    case "50/25/25":
      leftColSize.push("md-6");
      centerColSize.push("md-3");
      rightColSize.push("md-3");
      break;
    case "25/25/50":
      leftColSize.push("md-3");
      centerColSize.push("md-3");
      rightColSize.push("md-6");
      break;
  }

  return (
    <Template template={template} context="layout" className="no-gutter" {...props}>
      <Template template="row" context="layout" className="no-gap">
        <Template
          template="layout--region"
          context="layout"
          className={leftColSize.join(" ")}>
          {regions.left.children}
        </Template>
        <Template
          template="layout--region"
          context="layout"
          className={centerColSize.join(" ")}>
          {regions.center.children}
        </Template>
        <Template
          template="layout--region"
          context="layout"
          className={rightColSize.join(" ")}>
          {regions.right.children}
        </Template>
      </Template>
    </Template>
  );
}
