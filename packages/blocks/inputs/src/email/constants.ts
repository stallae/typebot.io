import { defaultButtonLabel } from "../constants";
import type { EmailInputBlock } from "./schema";

export const defaultEmailInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: "Type your email...",
  },
  retryMessageContent:
    "Este email não parece ser válido. Você pode digitá-lo novamente?",
} as const satisfies EmailInputBlock["options"];
