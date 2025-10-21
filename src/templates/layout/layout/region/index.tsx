import { Wrap } from "./region.styles";
export default function Region({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <Wrap template="col" context="layout" className={className} {...props}>
      {children}
    </Wrap>
  );
}
