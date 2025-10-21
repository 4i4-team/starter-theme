import { Template } from "@4i4/theme-registry";
import { Cover, Wrap } from "./card.styles";
import Image from "next/image";

export type Card = {
  title: string;
  summary?: string;
  image?: { src: string; alt: string };
  icon?: string | string[];
  link?: any;
  align?: "left" | "center" | "right";
  vAlign?: "top" | "middle" | "bottom";
  aspect?: "1-1" | "4-3" | "16-9" | "21-9" | "32-9" | "fit-content";
  imageAspect?: "1-1" | "4-3" | "16-9" | "21-9" | "32-9" | "fit-content";
};
export default function Card({
  title,
  summary,
  image,
  icon,
  link,
  imageAspect,
  ...props
}: Card) {
  return (
    <Wrap
      template="box"
      context="components"
      style={{ backgroundColor: "#efefef" }}
      {...props}>
      {image && (
        <Cover template="box" context="components" aspect={imageAspect}>
          <Image
            src={image.src}
            alt={image.alt}
            fill={true}
            className="background"
          />
        </Cover>
      )}
      {icon && <Template template={icon} context="icons" />}
      <h3>{title}</h3>
      <div>{summary}</div>
      <div>
        {link && <Template template="link" context="components" {...link} />}
      </div>
    </Wrap>
  );
}
