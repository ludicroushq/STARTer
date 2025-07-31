import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { fromError } from "zod-validation-error";
import type { HTMLInputTypeAttribute } from "react";
import { useFieldContext } from "../context";
import { messageBuilder } from "@/lib/zod-validation-error/message-builder";

type TextFieldProps = {
  label: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  type: HTMLInputTypeAttribute;
};

export function TextField(props: TextFieldProps) {
  const { label, placeholder, disabled, required, type } = props;
  const field = useFieldContext<string>();

  return (
    <fieldset className="fieldset flex w-full min-w-0 flex-col">
      <label className="label">{label}</label>

      <input
        type={type}
        className={twMerge(
          "input w-full",
          !field.state.meta.isValid && "input-error",
        )}
        placeholder={placeholder}
        value={field.state.value}
        onBlur={field.handleBlur}
        disabled={disabled}
        onChange={(e) => field.handleChange(e.target.value)}
        required={required}
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
