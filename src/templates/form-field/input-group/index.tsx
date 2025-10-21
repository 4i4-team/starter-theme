import { Wrap } from "./group.styles";

export default function InputGroup({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <Wrap {...props}>{children}</Wrap>;
}
