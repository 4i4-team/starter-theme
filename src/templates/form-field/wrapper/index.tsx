import { Template } from "@4i4/theme-registry";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { Wrap } from "./field.styles";

export default function Wrapper({
  Component,
  prefix,
  suffix,
  label,
  description,
  cardinality = 1,
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
  cardinality?: number;
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: props.name,
  });
  const id = props?.id ?? props.name.replace(/_/g, "-");
  const haveMore =
    cardinality !== 1 && (cardinality < 0 || cardinality > fields.length);

  useEffect(() => {
    if (cardinality !== 1 && !fields.length) {
      append("");
    }
  }, [cardinality, fields]);

  const inputGroup = (field?: any, index?: number) => {
    let fieldName = props.name;
    let fieldId = id;
    if (field) {
      fieldName += `.${index}`;
      fieldId += `.${index}`;
    }
    return (
      <>
        <Template
          key={field?.id}
          template={["input-group", `input-group--${id}`]}
          context="form-field"
          className={!!errors?.[props.name] ? "error" : ""}>
          {prefix && (
            <Template template="input-group--prefix" context="form-field">
              {prefix}
            </Template>
          )}
          <Component {...props} name={fieldName} id={fieldId} />
          {suffix && (
            <Template template="input-group--suffix" context="form-field">
              {suffix}
            </Template>
          )}
        </Template>
        {cardinality !== 1 && (
          <button type="button" onClick={() => remove(index)}>
            -
          </button>
        )}
      </>
    );
  };

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

      {cardinality === 1 ? inputGroup() : <>{fields.map(inputGroup)}</>}
      {haveMore && (
        <button type="button" onClick={() => append("")}>
          +
        </button>
      )}
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
