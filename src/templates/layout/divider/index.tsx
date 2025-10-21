import { Wrap } from "./divider.styles";

export default function Divider({
  size = "single",
}: {
  size?: "single" | "double";
}) {
  return <Wrap className={size} />;
}
