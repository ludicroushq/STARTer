import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./context";
import { TextField } from "./components/text-field";
import { SubmitButton } from "./components/submit-button";
import { ErrorAlert } from "./components/error-alert";

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  fieldContext,
  formComponents: {
    ErrorAlert,
    SubmitButton,
  },
  formContext,
});
