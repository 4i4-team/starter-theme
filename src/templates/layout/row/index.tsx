import { Wrap } from "./row.styles";
export default function Container({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <Wrap {...props}>{children}</Wrap>;
}
