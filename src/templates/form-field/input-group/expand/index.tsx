import { Wrap } from "./expand.styles";

export default function Expand({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <Wrap {...props}>{children}</Wrap>;
}
