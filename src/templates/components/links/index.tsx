import { Template } from "@4i4/theme-registry";
import { Wrap } from "./links.styles";

export default function Links({ links, ...props }: { links: any[] }) {
  return (
    <Wrap {...props}>
      {links.map((link, index) => (
        <Template key={index} template="link" context="components" {...link} />
      ))}
    </Wrap>
  );
}
