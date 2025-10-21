import { Template } from "@4i4/theme-registry";
import Image from "next/image";
import { Content, Images, ImageWrap, Wrap } from "./block.styles";

export type About = {
  title: string;
  subtitle?: string;
  summary?: string;
  narrowImage?: boolean;
  images?: {
    src: string;
    alt: string;
  }[];
  links?: any[];
};

export default function About({
  title,
  subtitle,
  summary,
  narrowImage,
  images,
  links,
}: About) {
  const columns = Math.ceil(Math.sqrt(images?.length ?? 0));
  const rows = Math.ceil((images?.length ?? 0) / columns);
  const colSpan = columns * rows - (images?.length ?? 0) + 1;
  return (
    <Wrap template="row" context="layout">
      <Template template="col" context="layout" className="xs-12 md-6">
        {!!images?.length && (
          <Images
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${Math.ceil(images.length / Math.ceil(Math.sqrt(images.length)))}, minmax(0, 1fr))`,
            }}
            className={narrowImage ? "narrow aspect-4-3" : "aspect-4-3"}>
            {images.map((image, index) => (
              <ImageWrap
                key={index}
                style={
                  index + 1 === images.length
                    ? { gridColumnEnd: `span ${colSpan}` }
                    : {}
                }>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill={true}
                  className="background"
                />
              </ImageWrap>
            ))}
          </Images>
        )}
      </Template>
      <Content template="col" context="layout" className="xs-12 md-6">
        <p>{subtitle}</p>
        <h2>{title}</h2>
        <p>{summary}</p>
        <Template template="links" context="components" links={links} />
      </Content>
    </Wrap>
  );
}
