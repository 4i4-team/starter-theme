import { Template } from "@4i4/theme-registry";
import { useFormContext } from "react-hook-form";
import { Wrap } from "./field.styles";

export default function Wrapper({
  Component,
  description,
  ...props
}: {
  Component: React.ComponentType<any>;
  name: string;
  id?: string;
  description?: React.ReactNode;
  required?: boolean;
}) {
  const {
    formState: { errors },
  } = useFormContext();
  const id = props?.id ?? props.name.replace(/_/g, "-");

  return (
    <Wrap>
      <Component {...props} id={id} />
      {errors?.[props.name] && (
        <Template template="error" context="form-field">
          {/* @ts-ignore */}
          {errors?.[props.name]?.message ?? ""}
        </Template>
      )}
      {description && (
        <Template template="description" context="form-field">
          {description}
        </Template>
      )}
    </Wrap>
  );
}
