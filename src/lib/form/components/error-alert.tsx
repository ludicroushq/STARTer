import { CircleXIcon } from "lucide-react";
import { useFormContext } from "../context";

export function ErrorAlert() {
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
          <div className="alert alert-soft alert-error" role="alert">
            <CircleXIcon />
            <span>{message}</span>
          </div>
        );
      }}
    </form.Subscribe>
  );
}
