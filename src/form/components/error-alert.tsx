import { CircleXIcon } from "lucide-react";
import { useFormContext } from "../context";

type ErrorAlertProps = {};

export function ErrorAlert(props: ErrorAlertProps) {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => ({
        errors: state.errorMap,
      })}
    >
      {({ errors }) => {
        const message =
          typeof errors.onSubmit === "string" ? errors.onSubmit : null;

        if (!message) {
          return null;
        }

        return (
          <div role="alert" className="alert alert-soft alert-error">
            <CircleXIcon />
            <span>{message}</span>
          </div>
        );
      }}
    </form.Subscribe>
  );
}
