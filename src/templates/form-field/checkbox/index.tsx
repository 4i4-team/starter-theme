import { useFormContext } from "react-hook-form";
import { Checkbox, Label, Options } from "./field.styles";
import { withHOC } from "@4i4/theme-registry";

export function Field({
  name,
  id,
  label,
}: {
  name: string;
  label: string;
  id: string;
}) {
  const { register, watch } = useFormContext();
  const value = watch(name);
  const classNames: string[] = [];
  if (value) classNames.push("checked");
  return (
    <Label htmlFor={id} className={classNames.join(" ")}>
      <input type="checkbox" id={id} {...register(name)} />
      <Checkbox />
      <span>{label}</span>
    </Label>
  );
}

export default withHOC(Field, ["wrapper", "wrapper--checkbox"], "form-field");
