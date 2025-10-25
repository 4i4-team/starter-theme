import { Template } from "@4i4/theme-registry";
import { RegionType } from "../region/region.type";

export default function Layout({
  regions,
  width,
  fitEdges = false,
  fullWidth = false,
  extendedBackground = false,
  ...props
}: {
  width?: "normal" | "wide" | "narrow";
  fullWidth: boolean;
  fitEdges: boolean;
  extendedBackground: boolean;
  regions: { center: RegionType };
}) {
  const template = ["container"];
  if (width) template.push(`container--${width}`);
  if (fullWidth) template.push("container--wide");

  const colSize = ["xs-12"];

  if (fitEdges) {
    colSize.push("fit-edges");
  }
  if (regions.center.fitEdges) {
    colSize.push("fit-edges");
  }

  if (extendedBackground) {
    colSize.push("extended-background");
  }
  if (regions.center.extendedBackground) {
    colSize.push("extended-background");
  }

  return (
    <Template template={template} context="layout" className="no-gutter" {...props}>
      <Template template="row" context="layout" className="no-gap">
        <Template
          template="layout--region"
          context="layout"
          className={colSize.join(" ")}>
          {regions.center.children}
        </Template>
      </Template>
    </Template>
  );
}
