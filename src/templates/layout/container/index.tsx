import { Wrap } from "./container.styles";
export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const classNames = [className];
  classNames.push("fixed-container");
  return (
    <Wrap {...props} className={classNames.join(" ")}>
      {children}
    </Wrap>
  );
}
