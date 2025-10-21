import { Template } from "@4i4/theme-registry";
import { Content } from "./block.styles";

export type About = {
  title: string;
  subtitle?: string;
  summary?: string;
  links?: any[];
};

export default function About({ title, subtitle, summary, links }: About) {
  return (
    <Template template="row" context="layout">
      <Content template="col" context="layout" className="xs-12 md-5">
        <p>{subtitle}</p>
        <h2>{title}</h2>
        <Template template="links" context="components" links={links} />
      </Content>
      <Content template="col" context="layout" className="xs-12 md-7">
        <p>{summary}</p>
      </Content>
    </Template>
  );
}
