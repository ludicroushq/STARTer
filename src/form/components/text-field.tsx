import type { HTMLInputTypeAttribute } from 'react';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import { messageBuilder } from '@/lib/zod-validation-error/message-builder';
import { useFieldContext } from '../context';

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
      {/** biome-ignore lint/a11y/noLabelWithoutControl: tanstack-form */}
      <label className="label">{label}</label>

      <input
        className={twMerge(
          'input w-full',
          !field.state.meta.isValid && 'input-error'
        )}
        disabled={disabled}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        type={type}
        value={field.state.value}
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
