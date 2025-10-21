import { Template } from "@4i4/theme-registry";
import { Wrap } from "./field.styles";
import { useFormContext } from "react-hook-form";

export default function Wrapper({
  Component,
  label,
  description,
  ...props
}: {
  Component: React.ComponentType<any>;
  name: string;
  id?: string;
  label?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
}) {
  const id = props?.id ?? props.name.replace(/_/g, "-");
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <Wrap>
      {label && (
        <Template
          template="label"
          context="form-field"
          id={id}
          required={props.required}>
          {label}
        </Template>
      )}
      <Component {...props} id={id} />
      {errors?.[props.name] && (
        <Template template="error" context="form-field">
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
