import { Template } from "@4i4/theme-registry";

export default function Card({
  layout,
  ...props
}: {
  layout: "layout-01" | "layout-02" | "layout-03" | "layout-04";
  align?: "left" | "center" | "right";
  vAlign?: "top" | "middle" | "bottom";
  aspect?: "1-1" | "4-3" | "16-9" | "21-9" | "32-9" | "fit-content";
  imageAspect?: "1-1" | "4-3" | "16-9" | "21-9" | "32-9" | "fit-content";
}) {
  return (
    <Template template={`card--${layout}`} {...props} context="components" />
  );
}
