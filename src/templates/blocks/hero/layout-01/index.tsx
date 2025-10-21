import { Content, Mask, Title, Wrap } from "./block.styles";
import Image from "next/image";
import { Template } from "@4i4/theme-registry";

export type Hero = {
  title: string;
  subtitle?: string;
  summary?: string;
  image?: {
    src: string;
    alt: string;
  };
  links?: any[];
};
export default function Hero({ title, subtitle, summary, image, links }: Hero) {
  return (
    <Wrap>
      <Template
        template="container"
        context="layout"
        className="no-gutter aspect-32-9">
        {image && (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill={true}
              className="background"
            />
            <Mask />
          </>
        )}
        <Content
          template="container--narrow"
          context="layout"
          className="text-center">
          {subtitle && <p>{subtitle}</p>}
          <Title>{title}</Title>
          {summary && <p>{summary}</p>}
          <Template
            template="links"
            context="components"
            links={links ?? []}
            className="align-center"
          />
        </Content>
      </Template>
    </Wrap>
  );
}
