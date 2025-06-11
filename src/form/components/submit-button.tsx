import { twMerge } from "tailwind-merge";
import type { PropsWithChildren } from "react";
import { useFormContext } from "../context";

type SubmitButtonProps = {
  className?: string;
};

export function SubmitButton(props: PropsWithChildren<SubmitButtonProps>) {
  const { children, className } = props;
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => ({
        isSubmitting: state.isSubmitting,
        canSubmit: state.canSubmit,
      })}
    >
      {({ isSubmitting, canSubmit }) => (
        <button
          className={twMerge("btn btn-neutral", className)}
          disabled={!canSubmit}
          type="submit"
        >
          {isSubmitting && <span className="loading loading-spinner" />}
          {children}
        </button>
      )}
    </form.Subscribe>
  );
}
