import { defaultButtonLabel } from "../constants";
import type { UrlInputBlock } from "./schema";

export const defaultUrlInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: "Type a URL...",
  },
  retryMessageContent:
    "Esta URL não parece ser válida. Você pode digitá-la novamente?",
} as const satisfies UrlInputBlock["options"];
