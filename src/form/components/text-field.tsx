import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { fromError } from "zod-validation-error";
import { useFieldContext } from "../context";
import { messageBuilder } from "@/lib/zod-validation-error/message-builder";

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
        {!field.state.meta.isValid &&
          fromError(new z.ZodError(field.state.meta.errors), {
            messageBuilder,
          }).toString()}
      </p>
    </fieldset>
  );
}
