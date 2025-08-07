import type { PaymentInputBlock } from "./schema";

export enum PaymentProvider {
  STRIPE = "Stripe",
}

export const defaultPaymentInputOptions = {
  provider: PaymentProvider.STRIPE,
  labels: { button: "Pay", success: "Success" },
  retryMessageContent: "Pagamento falhou. Por favor, tente novamente.",
  currency: "USD",
} as const satisfies PaymentInputBlock["options"];
