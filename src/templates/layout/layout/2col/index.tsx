import { Template } from "@4i4/theme-registry";
import { RegionType } from "../region/region.type";

export default function Layout({
  regions,
  width,
  fullWidth = false,
  fitEdges = false,
  condensed = false,
  extendedBackground = false,
  split = "50/50",
  ...props
}: {
  width?: "normal" | "wide" | "narrow";
  fullWidth: boolean;
  fitEdges: boolean;
  condensed: boolean;
  extendedBackground: boolean;
  split: "50/50" | "33/66" | "66/33";
  regions: { left: RegionType; right: RegionType };
}) {
  const template = ["container"];
  if (width) template.push(`container--${width}`);
  if (fullWidth) template.push("container--wide");

  const leftColSize = ["xs-12"];
  const rightColSize = ["xs-12"];

  if (condensed) {
    leftColSize.push("condensed");
    rightColSize.push("condensed");
  }

  if (fitEdges) {
    leftColSize.push("fit-edges");
    rightColSize.push("fit-edges");
  }
  if (regions.left.fitEdges) {
    leftColSize.push("fit-edges");
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
  if (regions.right.extendedBackground) {
    rightColSize.push("extended-background");
  }

  switch (split) {
    case "50/50":
      leftColSize.push("md-6");
      rightColSize.push("md-6");
      break;
    case "33/66":
      leftColSize.push("md-4");
      rightColSize.push("md-8");
      break;
    case "66/33":
      leftColSize.push("md-8");
      rightColSize.push("md-4");
      break;
  }

  return (
    <Template template={template} context="layout" className="no-gutter" {...props}>
      <Template template="row" context="layout" className="no-gap">
        <Template
          template="layout--region"
          context="layout"
          className={leftColSize.join(" ")}
          style={{ justifyContent: regions.left.vAlign ?? "flex-start" }}>
          {regions.left.children}
        </Template>
        <Template
          template="layout--region"
          context="layout"
          className={rightColSize.join(" ")}
          style={{ justifyContent: regions.right.vAlign ?? "flex-start" }}>
          {regions.right.children}
        </Template>
      </Template>
    </Template>
  );
}
