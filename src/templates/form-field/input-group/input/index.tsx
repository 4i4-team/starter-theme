import { Wrap } from "./input.styles";

export default function Input({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <Wrap {...props}>{children}</Wrap>;
}
