import { Wrap } from "./column.styles";
export default function Container({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <Wrap {...props}>{children}</Wrap>;
}
