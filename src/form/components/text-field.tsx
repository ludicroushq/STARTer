import { twMerge } from "tailwind-merge";
import { z } from "zod/v4";
import { useFieldContext } from "../context";

type TextFieldProps = {
  label: string;
  disabled?: boolean;
  placeholder?: string;
};

export function TextField(props: TextFieldProps) {
  const { label, placeholder, disabled } = props;
  const field = useFieldContext<string>();

  return (
    <fieldset className="fieldset w-full">
      <label className="label">{label}</label>

      <input
        type="text"
        className={twMerge(
          "input w-full",
          !field.state.meta.isValid && "input-error",
        )}
        placeholder={placeholder}
        value={field.state.value}
        onBlur={field.handleBlur}
        disabled={disabled}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <p className="text-error">
        {
          z
            .prettifyError(new z.ZodError(field.state.meta.errors))
            .split("\n")[0]
        }
      </p>
    </fieldset>
  );
}
