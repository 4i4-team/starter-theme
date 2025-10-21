import { Template } from "@4i4/theme-registry";
import { useFormContext } from "react-hook-form";
import { useCallback, useEffect, useRef, useState } from "react";
import { Options, SelectButton, Wrap } from "./select.styles";

export default function Wrapper({
  Component,
  prefix,
  suffix,
  label,
  description,
  search,
  options,
  tags,
  ...props
}: {
  Component: React.ComponentType<any>;
  name: string;
  id?: string;
  label?: string;
  placeholder?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  search?: boolean;
  tags?: boolean;
  options?: { value: string; label: React.ReactNode; className?: string }[];
}) {
  // References
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // States
  const [filter, setFilter] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  // Retrieve from FormContext
  const {
    watch,
    formState: { errors },
  } = useFormContext();
  const values = watch(props.name);
  const selected = values ? (Array.isArray(values) ? values : [values]) : [];

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value);
    },
    [],
  );

  // Data.
  const optionsClass = [];
  if (open) optionsClass.push("open");

  // Alter props.
  const id = props?.id ?? props.name.replace(/_/g, "-");
  const regex = new RegExp(".*" + filter + ".*", "gi");
  const alteredOptions = options?.map(option => {
    const item = { ...option };
    if (typeof item.label === "string" && !item.label.match(regex)) {
      if (!item.className) {
        item.className = "";
      }
      const classNames = item.className.split(" ");
      classNames.push("hidden");
      item.className = classNames.join(" ");
    }
    return item;
  });

  const toggle = useCallback(() => {
    setOpen(prevState => !prevState);
  }, []);

  const handleOutsideClick = useCallback((event: any) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const { top, height } = optionsRef?.current?.getBoundingClientRect() ?? {};

    if (window.innerHeight < top + height) {
      optionsRef?.current?.classList.add("expand-to-top");
    } else {
      optionsRef?.current?.classList.remove("expand-to-top");
    }

    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  return (
    <Wrap ref={containerRef}>
      {label && (
        <Template
          template="label"
          context="form-field"
          id={id}
          required={props.required}>
          {label}
        </Template>
      )}
      <Template template="input-group" context="form-field">
        {prefix && (
          <Template template="input-group--prefix" context="form-field">
            {prefix}
          </Template>
        )}
        <Template template="input-group--input" context="form-field">
          <SelectButton
            type="button"
            style={{ width: "100%" }}
            onClick={toggle}>
            {!tags &&
              selected
                .map(key => {
                  const option = options?.find(({ value }) => key == value);
                  return option?.label;
                })
                .join(", ")}
            {(tags || !selected?.length) && <>{props.placeholder ?? ""}</>}
          </SelectButton>
        </Template>
        {suffix && (
          <Template template="input-group--suffix" context="form-field">
            {suffix}
          </Template>
        )}
        <Template
          template="input-group--expand"
          context="form-field"
          className={optionsClass.join(" ")}>
          <Template template="arrow" context="icons" />
        </Template>
        <Options className={optionsClass.join(" ")} ref={optionsRef}>
          {search && <input type="text" onChange={handleSearch} />}
          <Component {...props} options={alteredOptions} id={id} />
        </Options>
      </Template>
      {tags && (
        <Template template="input-group--tags" context="form-field">
          {selected.map(key => {
            const option = options?.find(({ value }) => key == value);
            return (
              <Template
                key={key}
                template={["label", "label--tag"]}
                context="form-field"
                id={`${id}-${key}`}>
                {option?.label}
              </Template>
            );
          })}
        </Template>
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
