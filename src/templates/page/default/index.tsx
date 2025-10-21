import { Template } from "@4i4/theme-registry";

export default function Page({ children }: any) {
  return (
    <Template template="page" context="layout">
      <Template template="header--layout-01" context="layout">
        <Template template="container" context="layout">
          test
        </Template>
      </Template>
      {children}
    </Template>
  );
}
