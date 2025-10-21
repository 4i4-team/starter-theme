import { useFormContext } from "react-hook-form";
import { Input } from "./field.styles";
import { withHOC } from "@4i4/theme-registry";

function Field({ name, id, ...props }: { name: string; id: string }) {
  const { register } = useFormContext();
  return <Input id={id} type="number" {...props} {...register(name)} />;
}

export default withHOC(Field, ["wrapper", "wrapper--textfield"], "form-field");
