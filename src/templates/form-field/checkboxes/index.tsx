import { useFormContext } from "react-hook-form";
import { Options } from "./field.styles";
import { Label, Checkbox } from "../checkbox/field.styles";
import { withHOC } from "@4i4/theme-registry";

export function Field({
  name,
  id,
  options,
  max,
}: {
  name: string;
  id: string;
  max?: number;
  options: { value: string; label: React.ReactNode; className?: string }[];
}) {
  const { register, watch } = useFormContext();
  const values = watch(name);
  return (
    <Options>
      {options.map(({ value, label, className }) => {
        const selected = Array.isArray(values)
          ? values?.includes(value)
          : value == values;
        const disabled = !!max && values?.length >= max;
        const classNames = [];
        if (className) classNames.push(className);
        if (selected) classNames.push("checked");
        if (disabled) classNames.push("disabled");
        return (
          <Label
            htmlFor={`${id}-${value}`}
            key={value}
            className={classNames.join(" ")}>
            <input
              type="checkbox"
              id={`${id}-${value}`}
              value={value}
              disabled={disabled && !selected}
              {...register(name)}
            />
            <Checkbox />
            <span>{label}</span>
          </Label>
        );
      })}
    </Options>
  );
}

export default withHOC(Field, ["wrapper", "wrapper--checkboxes"], "form-field");
