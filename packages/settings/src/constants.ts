import type { Settings } from "./schemas";

export const defaultSettings = {
  general: {
    isInputPrefillEnabled: false,
    isHideQueryParamsEnabled: true,
    isNewResultOnRefreshEnabled: true,
    rememberUser: {
      isEnabled: false,
      storage: "session",
    },
    isBrandingEnabled: false,
    isTypingEmulationEnabled: true,
  },
  typingEmulation: {
    enabled: true,
    speed: 400,
    maxDelay: 3,
    delayBetweenBubbles: 0,
    isDisabledOnFirstMessage: true,
  },
  metadata: {
    description:
      "Build beautiful conversational forms and embed them directly in your applications without a line of code. Triple your response rate and collect answers that has more value compared to a traditional form.",
    favIconUrl: (viewerBaseUrl: string) => viewerBaseUrl + "/favicon.svg",
    imageUrl: (viewerBaseUrl: string) => viewerBaseUrl + "/site-preview.png",
  },
} as const;

export const defaultSystemMessages = {
  invalidMessage: "Mensagem inválida. Por favor, tente novamente.",
  botClosed: "Este bot está fechado agora",
  networkErrorTitle: "Erro de Rede",
  networkErrorMessage: "Por favor, verifique sua conexão com a internet e tente novamente.",
  popupBlockedTitle: "Pop-up bloqueado",
  popupBlockedDescription:
    "O bot quer abrir uma nova aba, mas foi bloqueado pelo seu navegador. É necessária aprovação manual.",
  popupBlockedButtonLabel: "Continuar em nova aba",
  fileUploadError: "Ocorreu um erro ao enviar os arquivos",
  fileUploadSizeError: "[[file]] é maior que [[limit]]MB",
  whatsAppPictureChoiceSelectLabel: "Selecionar",
} as const satisfies NonNullable<Settings["general"]>["systemMessages"];

export const defaultSessionExpiryTimeout = 4;

export const rememberUserStorages = ["session", "local"] as const;
