/** biome-ignore-all lint/style/useNamingConvention: react components */
import { createFormHook } from "@tanstack/react-form";
import { ErrorAlert } from "./components/error-alert";
import { SubmitButton } from "./components/submit-button";
import { TextField } from "./components/text-field";
import { fieldContext, formContext } from "./context";

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
