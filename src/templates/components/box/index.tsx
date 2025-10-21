import { Wrap } from "./box.styles";

export default function Box({
  children,
  noPadding,
  align,
  vAlign,
  aspect,
  className,
  ...props
}: {
  children: React.ReactNode;
  noPadding?: boolean;
  align?: "left" | "center" | "right";
  vAlign?: "top" | "middle" | "bottom";
  aspect?: "1-1" | "4-3" | "16-9" | "21-9" | "32-9";
  className?: string;
}) {
  const classNames: string[] = [
    `align-${align ?? "center"}`,
    `align-${vAlign ?? "middle"}`,
  ];
  if (className) classNames.push(className);
  if (noPadding) classNames.push("no-padding");
  if (aspect) classNames.push(`aspect-${aspect}`);
  return (
    <Wrap className={classNames.join(" ")} {...props}>
      {children}
    </Wrap>
  );
}
