import { twMerge } from "tailwind-merge";
import { useFormContext } from "../context";

type SubmitButtonProps = {
  label: string;
  className?: string;
};

export function SubmitButton(props: SubmitButtonProps) {
  const { label, className } = props;
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <button className={twMerge("btn", className)} disabled={isSubmitting}>
          {isSubmitting && <span className="loading loading-spinner" />}
          {label}
        </button>
      )}
    </form.Subscribe>
  );
}
