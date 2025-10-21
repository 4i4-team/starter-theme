import { Template } from "@4i4/theme-registry";
import { Container, Content, Cover, Wrap } from "./card.styles";
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
  let iconComponent = <Template template={icon ?? ""} context="icons" />;
  let img = (
    <Image
      src={image?.src ?? ""}
      alt={image?.alt ?? ""}
      fill={true}
      className="background"
    />
  );
  if (link) {
    img = (
      <Template template="link" context="components" {...link}>
        {img}
      </Template>
    );
    iconComponent = (
      <Template
        template="link"
        context="components"
        {...link}
        className={[link?.className, "btn-icon"].join(" ")}>
        {iconComponent}
      </Template>
    );
  }

  return (
    <Wrap template="box" context="components" noPadding={true} {...props}>
      {image && (
        <Cover template="box" context="components" aspect={imageAspect}>
          {img}
        </Cover>
      )}
      <Container>
        <div>{icon && iconComponent}</div>
        <Content>
          <h3>{title}</h3>
          <div>{summary}</div>
          <div>
            {link && (
              <Template template="link" context="components" {...link} />
            )}
          </div>
        </Content>
      </Container>
    </Wrap>
  );
}
