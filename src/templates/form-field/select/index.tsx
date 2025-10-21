import { Field as Checkboxes } from "../checkboxes";
import { Field as Radios } from "../radios";
import { withHOC } from "@4i4/theme-registry";

function Field({ cardinality = 1, ...props }: { cardinality?: number }) {
  if (cardinality === 1) {
    return <Radios {...props} />;
  }
  return (
    <Checkboxes {...props} max={cardinality > 0 ? cardinality : undefined} />
  );
}

export default withHOC(Field, ["wrapper", "wrapper--select"], "form-field");
