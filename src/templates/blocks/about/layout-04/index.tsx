import { Template } from "@4i4/theme-registry";
import { Content, Summary } from "./block.styles";

export type About = {
  title: string;
  subtitle?: string;
  summary?: string;
  links?: any[];
  columns?: number;
};

export default function About({
  title,
  subtitle,
  summary,
  links,
  columns,
}: About) {
  const container = ["container"];
  if (!columns || columns == 1) {
    container.push("container--narrow");
  }
  return (
    <Template template={container} context="layout" className="no-gutter">
      <Template template="row" context="layout">
        <Content template="col" context="layout" className="xs-12">
          <p>{subtitle}</p>
          <h2>{title}</h2>
          <Summary style={{ columns: columns ?? 1 }}>{summary}</Summary>
          <Template template="links" context="components" links={links} />
        </Content>
      </Template>
    </Template>
  );
}
