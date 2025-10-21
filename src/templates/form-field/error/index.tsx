import { Wrap } from "./error.styles";

export default function FieldError({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrap>{children}</Wrap>;
}
