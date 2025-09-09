import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
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
        canSubmit: state.canSubmit,
        isSubmitting: state.isSubmitting,
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
