import { defaultButtonLabel } from "../constants";
import type { PhoneNumberInputBlock } from "./schema";

export const defaultPhoneInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: "Type your phone number...",
  },
  retryMessageContent:
    "Este número de telefone não parece ser válido. Você pode digitá-lo novamente?",
} as const satisfies PhoneNumberInputBlock["options"];
