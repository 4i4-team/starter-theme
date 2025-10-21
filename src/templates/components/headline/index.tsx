import { Tag } from "./headline.styles";

export type Headline = {
  title: string;
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function Headline({ title, size, ...props }: Headline) {
  return (
    <Tag as={size} {...props}>
      {title}
    </Tag>
  );
}
