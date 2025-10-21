import { useFormContext } from "react-hook-form";
import { Label, Options } from "./field.styles";
import { withHOC } from "@4i4/theme-registry";

export function Field({
  name,
  id,
  options,
}: {
  name: string;
  id: string;
  options: { value: string; label: React.ReactNode; className?: string }[];
}) {
  const { register } = useFormContext();
  return (
    <Options>
      {options.map(({ value, label, className }) => {
        return (
          <Label htmlFor={`${id}-${value}`} key={value} className={className}>
            <input
              type="radio"
              id={`${id}-${value}`}
              value={value}
              {...register(name)}
            />
            {label}
          </Label>
        );
      })}
    </Options>
  );
}

export default withHOC(Field, ["wrapper", "wrapper--checkboxes"], "form-field");
