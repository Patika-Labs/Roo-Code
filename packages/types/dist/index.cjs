"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ANTHROPIC_DEFAULT_MAX_TOKENS: () => ANTHROPIC_DEFAULT_MAX_TOKENS,
  ANTHROPIC_STYLE_PROVIDERS: () => ANTHROPIC_STYLE_PROVIDERS,
  AWS_INFERENCE_PROFILE_MAPPING: () => AWS_INFERENCE_PROFILE_MAPPING,
  BEDROCK_1M_CONTEXT_MODEL_IDS: () => BEDROCK_1M_CONTEXT_MODEL_IDS,
  BEDROCK_DEFAULT_CONTEXT: () => BEDROCK_DEFAULT_CONTEXT,
  BEDROCK_DEFAULT_TEMPERATURE: () => BEDROCK_DEFAULT_TEMPERATURE,
  BEDROCK_GLOBAL_INFERENCE_MODEL_IDS: () => BEDROCK_GLOBAL_INFERENCE_MODEL_IDS,
  BEDROCK_MAX_TOKENS: () => BEDROCK_MAX_TOKENS,
  BEDROCK_REGIONS: () => BEDROCK_REGIONS,
  CLAUDE_CODE_DEFAULT_MAX_OUTPUT_TOKENS: () => CLAUDE_CODE_DEFAULT_MAX_OUTPUT_TOKENS,
  CODEBASE_INDEX_DEFAULTS: () => CODEBASE_INDEX_DEFAULTS,
  CONSENT_COOKIE_NAME: () => CONSENT_COOKIE_NAME,
  COOKIE_CONSENT_EVENTS: () => COOKIE_CONSENT_EVENTS,
  ConnectionState: () => ConnectionState,
  DEEP_SEEK_DEFAULT_TEMPERATURE: () => DEEP_SEEK_DEFAULT_TEMPERATURE,
  DEFAULT_CHECKPOINT_TIMEOUT_SECONDS: () => DEFAULT_CHECKPOINT_TIMEOUT_SECONDS,
  DEFAULT_CONSECUTIVE_MISTAKE_LIMIT: () => DEFAULT_CONSECUTIVE_MISTAKE_LIMIT,
  DEFAULT_MODES: () => DEFAULT_MODES,
  DEFAULT_TERMINAL_OUTPUT_CHARACTER_LIMIT: () => DEFAULT_TERMINAL_OUTPUT_CHARACTER_LIMIT,
  DEFAULT_WRITE_DELAY_MS: () => DEFAULT_WRITE_DELAY_MS,
  DOUBAO_API_BASE_URL: () => DOUBAO_API_BASE_URL,
  DOUBAO_API_CHAT_PATH: () => DOUBAO_API_CHAT_PATH,
  EVALS_SETTINGS: () => EVALS_SETTINGS,
  EVALS_TIMEOUT: () => EVALS_TIMEOUT,
  ExtensionBridgeCommandName: () => ExtensionBridgeCommandName,
  ExtensionBridgeEventName: () => ExtensionBridgeEventName,
  ExtensionSocketEvents: () => ExtensionSocketEvents,
  GLAMA_DEFAULT_TEMPERATURE: () => GLAMA_DEFAULT_TEMPERATURE,
  GLOBAL_SECRET_KEYS: () => GLOBAL_SECRET_KEYS,
  GLOBAL_SETTINGS_KEYS: () => GLOBAL_SETTINGS_KEYS,
  GLOBAL_STATE_KEYS: () => GLOBAL_STATE_KEYS,
  HEARTBEAT_INTERVAL_MS: () => HEARTBEAT_INTERVAL_MS,
  HUGGINGFACE_API_URL: () => HUGGINGFACE_API_URL,
  HUGGINGFACE_CACHE_DURATION: () => HUGGINGFACE_CACHE_DURATION,
  HUGGINGFACE_DEFAULT_CONTEXT_WINDOW: () => HUGGINGFACE_DEFAULT_CONTEXT_WINDOW,
  HUGGINGFACE_DEFAULT_MAX_TOKENS: () => HUGGINGFACE_DEFAULT_MAX_TOKENS,
  HUGGINGFACE_MAX_TOKENS_FALLBACK: () => HUGGINGFACE_MAX_TOKENS_FALLBACK,
  HUGGINGFACE_SLIDER_MIN: () => HUGGINGFACE_SLIDER_MIN,
  HUGGINGFACE_SLIDER_STEP: () => HUGGINGFACE_SLIDER_STEP,
  HUGGINGFACE_TEMPERATURE_MAX_VALUE: () => HUGGINGFACE_TEMPERATURE_MAX_VALUE,
  IMAGE_GENERATION_MODELS: () => IMAGE_GENERATION_MODELS,
  IMAGE_GENERATION_MODEL_IDS: () => IMAGE_GENERATION_MODEL_IDS,
  INSTANCE_TTL_SECONDS: () => INSTANCE_TTL_SECONDS,
  IO_INTELLIGENCE_CACHE_DURATION: () => IO_INTELLIGENCE_CACHE_DURATION,
  IpcMessageType: () => IpcMessageType,
  IpcOrigin: () => IpcOrigin,
  LMSTUDIO_DEFAULT_TEMPERATURE: () => LMSTUDIO_DEFAULT_TEMPERATURE,
  MAX_CHECKPOINT_TIMEOUT_SECONDS: () => MAX_CHECKPOINT_TIMEOUT_SECONDS,
  MINIMAX_DEFAULT_MAX_TOKENS: () => MINIMAX_DEFAULT_MAX_TOKENS,
  MINIMAX_DEFAULT_TEMPERATURE: () => MINIMAX_DEFAULT_TEMPERATURE,
  MIN_CHECKPOINT_TIMEOUT_SECONDS: () => MIN_CHECKPOINT_TIMEOUT_SECONDS,
  MISTRAL_DEFAULT_TEMPERATURE: () => MISTRAL_DEFAULT_TEMPERATURE,
  MODELS_BY_PROVIDER: () => MODELS_BY_PROVIDER,
  MOONSHOT_DEFAULT_TEMPERATURE: () => MOONSHOT_DEFAULT_TEMPERATURE,
  OPENAI_AZURE_AI_INFERENCE_PATH: () => OPENAI_AZURE_AI_INFERENCE_PATH,
  OPENAI_NATIVE_DEFAULT_TEMPERATURE: () => OPENAI_NATIVE_DEFAULT_TEMPERATURE,
  OPENROUTER_DEFAULT_PROVIDER_NAME: () => OPENROUTER_DEFAULT_PROVIDER_NAME,
  OPEN_ROUTER_PROMPT_CACHING_MODELS: () => OPEN_ROUTER_PROMPT_CACHING_MODELS,
  OPEN_ROUTER_REASONING_BUDGET_MODELS: () => OPEN_ROUTER_REASONING_BUDGET_MODELS,
  OPEN_ROUTER_REQUIRED_REASONING_BUDGET_MODELS: () => OPEN_ROUTER_REQUIRED_REASONING_BUDGET_MODELS,
  ORGANIZATION_ALLOW_ALL: () => ORGANIZATION_ALLOW_ALL,
  ORGANIZATION_DEFAULT: () => ORGANIZATION_DEFAULT,
  PROVIDER_SETTINGS_KEYS: () => PROVIDER_SETTINGS_KEYS,
  RooCodeEventName: () => RooCodeEventName,
  RooModelSchema: () => RooModelSchema,
  RooModelsResponseSchema: () => RooModelsResponseSchema,
  RooPricingSchema: () => RooPricingSchema,
  SECRET_STATE_KEYS: () => SECRET_STATE_KEYS,
  TOOL_PROTOCOL: () => TOOL_PROTOCOL,
  TaskBridgeCommandName: () => TaskBridgeCommandName,
  TaskBridgeEventName: () => TaskBridgeEventName,
  TaskCommandName: () => TaskCommandName,
  TaskSocketEvents: () => TaskSocketEvents,
  TaskStatus: () => TaskStatus,
  TelemetryEventName: () => TelemetryEventName,
  VERCEL_AI_GATEWAY_DEFAULT_TEMPERATURE: () => VERCEL_AI_GATEWAY_DEFAULT_TEMPERATURE,
  VERCEL_AI_GATEWAY_PROMPT_CACHING_MODELS: () => VERCEL_AI_GATEWAY_PROMPT_CACHING_MODELS,
  VERCEL_AI_GATEWAY_VISION_AND_TOOLS_MODELS: () => VERCEL_AI_GATEWAY_VISION_AND_TOOLS_MODELS,
  VERCEL_AI_GATEWAY_VISION_ONLY_MODELS: () => VERCEL_AI_GATEWAY_VISION_ONLY_MODELS,
  VERTEX_REGIONS: () => VERTEX_REGIONS,
  ZAI_DEFAULT_TEMPERATURE: () => ZAI_DEFAULT_TEMPERATURE,
  ackSchema: () => ackSchema,
  anthropicDefaultModelId: () => anthropicDefaultModelId,
  anthropicModels: () => anthropicModels,
  appPropertiesSchema: () => appPropertiesSchema,
  azureOpenAiDefaultApiVersion: () => azureOpenAiDefaultApiVersion,
  basetenDefaultModelId: () => basetenDefaultModelId,
  basetenModels: () => basetenModels,
  bedrockDefaultModelId: () => bedrockDefaultModelId,
  bedrockDefaultPromptRouterModelId: () => bedrockDefaultPromptRouterModelId,
  bedrockModels: () => bedrockModels,
  cerebrasDefaultModelId: () => cerebrasDefaultModelId,
  cerebrasModels: () => cerebrasModels,
  chutesDefaultModelId: () => chutesDefaultModelId,
  chutesDefaultModelInfo: () => chutesDefaultModelInfo,
  chutesModels: () => chutesModels,
  claudeCodeDefaultModelId: () => claudeCodeDefaultModelId,
  claudeCodeModels: () => claudeCodeModels,
  clineAskSchema: () => clineAskSchema,
  clineAsks: () => clineAsks,
  clineMessageSchema: () => clineMessageSchema,
  clineSaySchema: () => clineSaySchema,
  clineSays: () => clineSays,
  cloudAppPropertiesSchema: () => cloudAppPropertiesSchema,
  codeActionIds: () => codeActionIds,
  codebaseIndexConfigSchema: () => codebaseIndexConfigSchema,
  codebaseIndexModelsSchema: () => codebaseIndexModelsSchema,
  codebaseIndexProviderSchema: () => codebaseIndexProviderSchema,
  commandExecutionStatusSchema: () => commandExecutionStatusSchema,
  commandIds: () => commandIds,
  contextCondenseSchema: () => contextCondenseSchema,
  convertModelNameForVertex: () => convertModelNameForVertex,
  customModePromptsSchema: () => customModePromptsSchema,
  customModesSettingsSchema: () => customModesSettingsSchema,
  customProviders: () => customProviders,
  customSupportPromptsSchema: () => customSupportPromptsSchema,
  deepInfraDefaultModelId: () => deepInfraDefaultModelId,
  deepInfraDefaultModelInfo: () => deepInfraDefaultModelInfo,
  deepSeekDefaultModelId: () => deepSeekDefaultModelId,
  deepSeekModels: () => deepSeekModels,
  discriminatedProviderSettingsWithIdSchema: () => discriminatedProviderSettingsWithIdSchema,
  doubaoDefaultModelId: () => doubaoDefaultModelId,
  doubaoDefaultModelInfo: () => doubaoDefaultModelInfo,
  doubaoModels: () => doubaoModels,
  dynamicAppPropertiesSchema: () => dynamicAppPropertiesSchema,
  dynamicProviders: () => dynamicProviders,
  experimentIds: () => experimentIds,
  experimentIdsSchema: () => experimentIdsSchema,
  experimentsSchema: () => experimentsSchema,
  extensionBridgeCommandSchema: () => extensionBridgeCommandSchema,
  extensionBridgeEventSchema: () => extensionBridgeEventSchema,
  extensionInstanceSchema: () => extensionInstanceSchema,
  fauxProviders: () => fauxProviders,
  featherlessDefaultModelId: () => featherlessDefaultModelId,
  featherlessModels: () => featherlessModels,
  fireworksDefaultModelId: () => fireworksDefaultModelId,
  fireworksModels: () => fireworksModels,
  followUpDataSchema: () => followUpDataSchema,
  geminiDefaultModelId: () => geminiDefaultModelId,
  geminiModels: () => geminiModels,
  getApiProtocol: () => getApiProtocol,
  getClaudeCodeModelId: () => getClaudeCodeModelId,
  getEffectiveProtocol: () => getEffectiveProtocol,
  getImageGenerationProvider: () => getImageGenerationProvider,
  getModelId: () => getModelId,
  getProviderDefaultModelId: () => getProviderDefaultModelId,
  gitPropertiesSchema: () => gitPropertiesSchema,
  glamaDefaultModelId: () => glamaDefaultModelId,
  glamaDefaultModelInfo: () => glamaDefaultModelInfo,
  globalSettingsSchema: () => globalSettingsSchema,
  groqDefaultModelId: () => groqDefaultModelId,
  groqModels: () => groqModels,
  groupEntrySchema: () => groupEntrySchema,
  groupOptionsSchema: () => groupOptionsSchema,
  historyItemSchema: () => historyItemSchema,
  idleAsks: () => idleAsks,
  installMarketplaceItemOptionsSchema: () => installMarketplaceItemOptionsSchema,
  interactiveAsks: () => interactiveAsks,
  internalProviders: () => internalProviders,
  internationalZAiDefaultModelId: () => internationalZAiDefaultModelId,
  internationalZAiModels: () => internationalZAiModels,
  ioIntelligenceDefaultBaseUrl: () => ioIntelligenceDefaultBaseUrl,
  ioIntelligenceDefaultModelId: () => ioIntelligenceDefaultModelId,
  ioIntelligenceModels: () => ioIntelligenceModels,
  ipcMessageSchema: () => ipcMessageSchema,
  isCustomProvider: () => isCustomProvider,
  isDynamicProvider: () => isDynamicProvider,
  isFauxProvider: () => isFauxProvider,
  isGlobalStateKey: () => isGlobalStateKey,
  isIdleAsk: () => isIdleAsk,
  isInteractiveAsk: () => isInteractiveAsk,
  isInternalProvider: () => isInternalProvider,
  isLanguage: () => isLanguage,
  isLocalProvider: () => isLocalProvider,
  isModelParameter: () => isModelParameter,
  isNativeProtocol: () => isNativeProtocol,
  isNonBlockingAsk: () => isNonBlockingAsk,
  isProviderName: () => isProviderName,
  isResumableAsk: () => isResumableAsk,
  isSecretStateKey: () => isSecretStateKey,
  isTypicalProvider: () => isTypicalProvider,
  lMStudioDefaultModelId: () => lMStudioDefaultModelId,
  lMStudioDefaultModelInfo: () => lMStudioDefaultModelInfo,
  languages: () => languages,
  languagesSchema: () => languagesSchema,
  litellmDefaultModelId: () => litellmDefaultModelId,
  litellmDefaultModelInfo: () => litellmDefaultModelInfo,
  localProviders: () => localProviders,
  mainlandZAiDefaultModelId: () => mainlandZAiDefaultModelId,
  mainlandZAiModels: () => mainlandZAiModels,
  marketplaceItemSchema: () => marketplaceItemSchema,
  marketplaceItemTypeSchema: () => marketplaceItemTypeSchema,
  mcpExecutionStatusSchema: () => mcpExecutionStatusSchema,
  mcpInstallationMethodSchema: () => mcpInstallationMethodSchema,
  mcpMarketplaceItemSchema: () => mcpMarketplaceItemSchema,
  mcpParameterSchema: () => mcpParameterSchema,
  minimaxDefaultModelId: () => minimaxDefaultModelId,
  minimaxDefaultModelInfo: () => minimaxDefaultModelInfo,
  minimaxModels: () => minimaxModels,
  mistralDefaultModelId: () => mistralDefaultModelId,
  mistralModels: () => mistralModels,
  modeConfigSchema: () => modeConfigSchema,
  modeMarketplaceItemSchema: () => modeMarketplaceItemSchema,
  modelIdKeys: () => modelIdKeys,
  modelIdKeysByProvider: () => modelIdKeysByProvider,
  modelInfoSchema: () => modelInfoSchema,
  modelParameters: () => modelParameters,
  modelParametersSchema: () => modelParametersSchema,
  moonshotDefaultModelId: () => moonshotDefaultModelId,
  moonshotModels: () => moonshotModels,
  nonBlockingAsks: () => nonBlockingAsks,
  ollamaDefaultModelId: () => ollamaDefaultModelId,
  ollamaDefaultModelInfo: () => ollamaDefaultModelInfo,
  openAiModelInfoSaneDefaults: () => openAiModelInfoSaneDefaults,
  openAiNativeDefaultModelId: () => openAiNativeDefaultModelId,
  openAiNativeModels: () => openAiNativeModels,
  openRouterDefaultModelId: () => openRouterDefaultModelId,
  openRouterDefaultModelInfo: () => openRouterDefaultModelInfo,
  organizationAllowListSchema: () => organizationAllowListSchema,
  organizationCloudSettingsSchema: () => organizationCloudSettingsSchema,
  organizationDefaultSettingsSchema: () => organizationDefaultSettingsSchema,
  organizationFeaturesSchema: () => organizationFeaturesSchema,
  organizationSettingsSchema: () => organizationSettingsSchema,
  promptComponentSchema: () => promptComponentSchema,
  providerNames: () => providerNames,
  providerNamesSchema: () => providerNamesSchema,
  providerSettingsEntrySchema: () => providerSettingsEntrySchema,
  providerSettingsSchema: () => providerSettingsSchema,
  providerSettingsSchemaDiscriminated: () => providerSettingsSchemaDiscriminated,
  providerSettingsWithIdSchema: () => providerSettingsWithIdSchema,
  queuedMessageSchema: () => queuedMessageSchema,
  qwenCodeDefaultModelId: () => qwenCodeDefaultModelId,
  qwenCodeModels: () => qwenCodeModels,
  reasoningEffortExtendedSchema: () => reasoningEffortExtendedSchema,
  reasoningEffortSettingSchema: () => reasoningEffortSettingSchema,
  reasoningEffortSettingValues: () => reasoningEffortSettingValues,
  reasoningEffortWithMinimalSchema: () => reasoningEffortWithMinimalSchema,
  reasoningEfforts: () => reasoningEfforts,
  reasoningEffortsExtended: () => reasoningEffortsExtended,
  reasoningEffortsSchema: () => reasoningEffortsSchema,
  requestyDefaultModelId: () => requestyDefaultModelId,
  requestyDefaultModelInfo: () => requestyDefaultModelInfo,
  resumableAsks: () => resumableAsks,
  rooCodeEventsSchema: () => rooCodeEventsSchema,
  rooCodeSettingsSchema: () => rooCodeSettingsSchema,
  rooCodeTelemetryEventSchema: () => rooCodeTelemetryEventSchema,
  rooDefaultModelId: () => rooDefaultModelId,
  rooModels: () => rooModels,
  sambaNovaDefaultModelId: () => sambaNovaDefaultModelId,
  sambaNovaModels: () => sambaNovaModels,
  serviceTierSchema: () => serviceTierSchema,
  serviceTiers: () => serviceTiers,
  shareResponseSchema: () => shareResponseSchema,
  shouldUseSingleFileRead: () => shouldUseSingleFileRead,
  staticAppPropertiesSchema: () => staticAppPropertiesSchema,
  suggestionItemSchema: () => suggestionItemSchema,
  taskBridgeCommandSchema: () => taskBridgeCommandSchema,
  taskBridgeEventSchema: () => taskBridgeEventSchema,
  taskCommandSchema: () => taskCommandSchema,
  taskEventSchema: () => taskEventSchema,
  taskMetadataSchema: () => taskMetadataSchema,
  taskPropertiesSchema: () => taskPropertiesSchema,
  telemetryPropertiesSchema: () => telemetryPropertiesSchema,
  telemetrySettings: () => telemetrySettings,
  telemetrySettingsSchema: () => telemetrySettingsSchema,
  terminalActionIds: () => terminalActionIds,
  todoItemSchema: () => todoItemSchema,
  todoStatusSchema: () => todoStatusSchema,
  tokenUsageSchema: () => tokenUsageSchema,
  toolGroups: () => toolGroups,
  toolGroupsSchema: () => toolGroupsSchema,
  toolNames: () => toolNames,
  toolNamesSchema: () => toolNamesSchema,
  toolProgressStatusSchema: () => toolProgressStatusSchema,
  toolUsageSchema: () => toolUsageSchema,
  unboundDefaultModelId: () => unboundDefaultModelId,
  unboundDefaultModelInfo: () => unboundDefaultModelInfo,
  usageStatsSchema: () => usageStatsSchema,
  userFeaturesSchema: () => userFeaturesSchema,
  userSettingsConfigSchema: () => userSettingsConfigSchema,
  userSettingsDataSchema: () => userSettingsDataSchema,
  verbosityLevels: () => verbosityLevels,
  verbosityLevelsSchema: () => verbosityLevelsSchema,
  vercelAiGatewayDefaultModelId: () => vercelAiGatewayDefaultModelId,
  vercelAiGatewayDefaultModelInfo: () => vercelAiGatewayDefaultModelInfo,
  vertexDefaultModelId: () => vertexDefaultModelId,
  vertexModels: () => vertexModels,
  vscodeLlmDefaultModelId: () => vscodeLlmDefaultModelId,
  vscodeLlmModels: () => vscodeLlmModels,
  xaiDefaultModelId: () => xaiDefaultModelId,
  xaiModels: () => xaiModels,
  zaiApiLineConfigs: () => zaiApiLineConfigs,
  zaiApiLineSchema: () => zaiApiLineSchema
});
module.exports = __toCommonJS(index_exports);

// src/cloud.ts
var import_zod16 = require("zod");

// src/events.ts
var import_zod3 = require("zod");

// src/message.ts
var import_zod = require("zod");
var clineAsks = [
  "followup",
  "command",
  "command_output",
  "completion_result",
  "tool",
  "api_req_failed",
  "resume_task",
  "resume_completed_task",
  "mistake_limit_reached",
  "browser_action_launch",
  "use_mcp_server",
  "auto_approval_max_req_reached"
];
var clineAskSchema = import_zod.z.enum(clineAsks);
var idleAsks = [
  "completion_result",
  "api_req_failed",
  "resume_completed_task",
  "mistake_limit_reached",
  "auto_approval_max_req_reached"
];
function isIdleAsk(ask) {
  return idleAsks.includes(ask);
}
var resumableAsks = ["resume_task"];
function isResumableAsk(ask) {
  return resumableAsks.includes(ask);
}
var interactiveAsks = [
  "followup",
  "command",
  "tool",
  "browser_action_launch",
  "use_mcp_server"
];
function isInteractiveAsk(ask) {
  return interactiveAsks.includes(ask);
}
var nonBlockingAsks = ["command_output"];
function isNonBlockingAsk(ask) {
  return nonBlockingAsks.includes(ask);
}
var clineSays = [
  "error",
  "api_req_started",
  "api_req_finished",
  "api_req_retried",
  "api_req_retry_delayed",
  "api_req_deleted",
  "text",
  "image",
  "reasoning",
  "completion_result",
  "user_feedback",
  "user_feedback_diff",
  "command_output",
  "shell_integration_warning",
  "browser_action",
  "browser_action_result",
  "browser_session_status",
  "mcp_server_request_started",
  "mcp_server_response",
  "subtask_result",
  "checkpoint_saved",
  "rooignore_error",
  "diff_error",
  "condense_context",
  "condense_context_error",
  "codebase_search_result",
  "user_edit_todos"
];
var clineSaySchema = import_zod.z.enum(clineSays);
var toolProgressStatusSchema = import_zod.z.object({
  icon: import_zod.z.string().optional(),
  text: import_zod.z.string().optional()
});
var contextCondenseSchema = import_zod.z.object({
  cost: import_zod.z.number(),
  prevContextTokens: import_zod.z.number(),
  newContextTokens: import_zod.z.number(),
  summary: import_zod.z.string()
});
var clineMessageSchema = import_zod.z.object({
  ts: import_zod.z.number(),
  type: import_zod.z.union([import_zod.z.literal("ask"), import_zod.z.literal("say")]),
  ask: clineAskSchema.optional(),
  say: clineSaySchema.optional(),
  text: import_zod.z.string().optional(),
  images: import_zod.z.array(import_zod.z.string()).optional(),
  partial: import_zod.z.boolean().optional(),
  reasoning: import_zod.z.string().optional(),
  conversationHistoryIndex: import_zod.z.number().optional(),
  checkpoint: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional(),
  progressStatus: toolProgressStatusSchema.optional(),
  contextCondense: contextCondenseSchema.optional(),
  isProtected: import_zod.z.boolean().optional(),
  apiProtocol: import_zod.z.union([import_zod.z.literal("openai"), import_zod.z.literal("anthropic")]).optional(),
  isAnswered: import_zod.z.boolean().optional()
});
var tokenUsageSchema = import_zod.z.object({
  totalTokensIn: import_zod.z.number(),
  totalTokensOut: import_zod.z.number(),
  totalCacheWrites: import_zod.z.number().optional(),
  totalCacheReads: import_zod.z.number().optional(),
  totalCost: import_zod.z.number(),
  contextTokens: import_zod.z.number()
});
var queuedMessageSchema = import_zod.z.object({
  timestamp: import_zod.z.number(),
  id: import_zod.z.string(),
  text: import_zod.z.string(),
  images: import_zod.z.array(import_zod.z.string()).optional()
});

// src/tool.ts
var import_zod2 = require("zod");
var toolGroups = ["read", "edit", "browser", "command", "mcp", "modes"];
var toolGroupsSchema = import_zod2.z.enum(toolGroups);
var toolNames = [
  "execute_command",
  "read_file",
  "write_to_file",
  "apply_diff",
  "insert_content",
  "search_and_replace",
  "apply_patch",
  "search_files",
  "list_files",
  "list_code_definition_names",
  "browser_action",
  "use_mcp_tool",
  "access_mcp_resource",
  "ask_followup_question",
  "attempt_completion",
  "switch_mode",
  "new_task",
  "fetch_instructions",
  "codebase_search",
  "update_todo_list",
  "run_slash_command",
  "generate_image"
];
var toolNamesSchema = import_zod2.z.enum(toolNames);
var toolUsageSchema = import_zod2.z.record(
  toolNamesSchema,
  import_zod2.z.object({
    attempts: import_zod2.z.number(),
    failures: import_zod2.z.number()
  })
);
var TOOL_PROTOCOL = {
  XML: "xml",
  NATIVE: "native"
};
function isNativeProtocol(protocol) {
  return protocol === TOOL_PROTOCOL.NATIVE;
}
function getEffectiveProtocol(toolProtocol) {
  return toolProtocol || TOOL_PROTOCOL.XML;
}

// src/events.ts
var RooCodeEventName = /* @__PURE__ */ ((RooCodeEventName2) => {
  RooCodeEventName2["TaskCreated"] = "taskCreated";
  RooCodeEventName2["TaskStarted"] = "taskStarted";
  RooCodeEventName2["TaskCompleted"] = "taskCompleted";
  RooCodeEventName2["TaskAborted"] = "taskAborted";
  RooCodeEventName2["TaskFocused"] = "taskFocused";
  RooCodeEventName2["TaskUnfocused"] = "taskUnfocused";
  RooCodeEventName2["TaskActive"] = "taskActive";
  RooCodeEventName2["TaskInteractive"] = "taskInteractive";
  RooCodeEventName2["TaskResumable"] = "taskResumable";
  RooCodeEventName2["TaskIdle"] = "taskIdle";
  RooCodeEventName2["TaskPaused"] = "taskPaused";
  RooCodeEventName2["TaskUnpaused"] = "taskUnpaused";
  RooCodeEventName2["TaskSpawned"] = "taskSpawned";
  RooCodeEventName2["TaskDelegated"] = "taskDelegated";
  RooCodeEventName2["TaskDelegationCompleted"] = "taskDelegationCompleted";
  RooCodeEventName2["TaskDelegationResumed"] = "taskDelegationResumed";
  RooCodeEventName2["Message"] = "message";
  RooCodeEventName2["TaskModeSwitched"] = "taskModeSwitched";
  RooCodeEventName2["TaskAskResponded"] = "taskAskResponded";
  RooCodeEventName2["TaskUserMessage"] = "taskUserMessage";
  RooCodeEventName2["TaskTokenUsageUpdated"] = "taskTokenUsageUpdated";
  RooCodeEventName2["TaskToolFailed"] = "taskToolFailed";
  RooCodeEventName2["ModeChanged"] = "modeChanged";
  RooCodeEventName2["ProviderProfileChanged"] = "providerProfileChanged";
  RooCodeEventName2["EvalPass"] = "evalPass";
  RooCodeEventName2["EvalFail"] = "evalFail";
  return RooCodeEventName2;
})(RooCodeEventName || {});
var rooCodeEventsSchema = import_zod3.z.object({
  ["taskCreated" /* TaskCreated */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskStarted" /* TaskStarted */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskCompleted" /* TaskCompleted */]: import_zod3.z.tuple([
    import_zod3.z.string(),
    tokenUsageSchema,
    toolUsageSchema,
    import_zod3.z.object({
      isSubtask: import_zod3.z.boolean()
    })
  ]),
  ["taskAborted" /* TaskAborted */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskFocused" /* TaskFocused */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskUnfocused" /* TaskUnfocused */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskActive" /* TaskActive */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskInteractive" /* TaskInteractive */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskResumable" /* TaskResumable */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskIdle" /* TaskIdle */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskPaused" /* TaskPaused */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskUnpaused" /* TaskUnpaused */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskSpawned" /* TaskSpawned */]: import_zod3.z.tuple([import_zod3.z.string(), import_zod3.z.string()]),
  ["taskDelegated" /* TaskDelegated */]: import_zod3.z.tuple([
    import_zod3.z.string(),
    // parentTaskId
    import_zod3.z.string()
    // childTaskId
  ]),
  ["taskDelegationCompleted" /* TaskDelegationCompleted */]: import_zod3.z.tuple([
    import_zod3.z.string(),
    // parentTaskId
    import_zod3.z.string(),
    // childTaskId
    import_zod3.z.string()
    // completionResultSummary
  ]),
  ["taskDelegationResumed" /* TaskDelegationResumed */]: import_zod3.z.tuple([
    import_zod3.z.string(),
    // parentTaskId
    import_zod3.z.string()
    // childTaskId
  ]),
  ["message" /* Message */]: import_zod3.z.tuple([
    import_zod3.z.object({
      taskId: import_zod3.z.string(),
      action: import_zod3.z.union([import_zod3.z.literal("created"), import_zod3.z.literal("updated")]),
      message: clineMessageSchema
    })
  ]),
  ["taskModeSwitched" /* TaskModeSwitched */]: import_zod3.z.tuple([import_zod3.z.string(), import_zod3.z.string()]),
  ["taskAskResponded" /* TaskAskResponded */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskUserMessage" /* TaskUserMessage */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["taskToolFailed" /* TaskToolFailed */]: import_zod3.z.tuple([import_zod3.z.string(), toolNamesSchema, import_zod3.z.string()]),
  ["taskTokenUsageUpdated" /* TaskTokenUsageUpdated */]: import_zod3.z.tuple([import_zod3.z.string(), tokenUsageSchema]),
  ["modeChanged" /* ModeChanged */]: import_zod3.z.tuple([import_zod3.z.string()]),
  ["providerProfileChanged" /* ProviderProfileChanged */]: import_zod3.z.tuple([import_zod3.z.object({ name: import_zod3.z.string(), provider: import_zod3.z.string() })])
});
var taskEventSchema = import_zod3.z.discriminatedUnion("eventName", [
  // Task Provider Lifecycle
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskCreated" /* TaskCreated */),
    payload: rooCodeEventsSchema.shape["taskCreated" /* TaskCreated */],
    taskId: import_zod3.z.number().optional()
  }),
  // Task Lifecycle
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskStarted" /* TaskStarted */),
    payload: rooCodeEventsSchema.shape["taskStarted" /* TaskStarted */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskCompleted" /* TaskCompleted */),
    payload: rooCodeEventsSchema.shape["taskCompleted" /* TaskCompleted */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskAborted" /* TaskAborted */),
    payload: rooCodeEventsSchema.shape["taskAborted" /* TaskAborted */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskFocused" /* TaskFocused */),
    payload: rooCodeEventsSchema.shape["taskFocused" /* TaskFocused */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskUnfocused" /* TaskUnfocused */),
    payload: rooCodeEventsSchema.shape["taskUnfocused" /* TaskUnfocused */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskActive" /* TaskActive */),
    payload: rooCodeEventsSchema.shape["taskActive" /* TaskActive */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskInteractive" /* TaskInteractive */),
    payload: rooCodeEventsSchema.shape["taskInteractive" /* TaskInteractive */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskResumable" /* TaskResumable */),
    payload: rooCodeEventsSchema.shape["taskResumable" /* TaskResumable */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskIdle" /* TaskIdle */),
    payload: rooCodeEventsSchema.shape["taskIdle" /* TaskIdle */],
    taskId: import_zod3.z.number().optional()
  }),
  // Subtask Lifecycle
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskPaused" /* TaskPaused */),
    payload: rooCodeEventsSchema.shape["taskPaused" /* TaskPaused */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskUnpaused" /* TaskUnpaused */),
    payload: rooCodeEventsSchema.shape["taskUnpaused" /* TaskUnpaused */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskSpawned" /* TaskSpawned */),
    payload: rooCodeEventsSchema.shape["taskSpawned" /* TaskSpawned */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskDelegated" /* TaskDelegated */),
    payload: rooCodeEventsSchema.shape["taskDelegated" /* TaskDelegated */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskDelegationCompleted" /* TaskDelegationCompleted */),
    payload: rooCodeEventsSchema.shape["taskDelegationCompleted" /* TaskDelegationCompleted */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskDelegationResumed" /* TaskDelegationResumed */),
    payload: rooCodeEventsSchema.shape["taskDelegationResumed" /* TaskDelegationResumed */],
    taskId: import_zod3.z.number().optional()
  }),
  // Task Execution
  import_zod3.z.object({
    eventName: import_zod3.z.literal("message" /* Message */),
    payload: rooCodeEventsSchema.shape["message" /* Message */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskModeSwitched" /* TaskModeSwitched */),
    payload: rooCodeEventsSchema.shape["taskModeSwitched" /* TaskModeSwitched */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskAskResponded" /* TaskAskResponded */),
    payload: rooCodeEventsSchema.shape["taskAskResponded" /* TaskAskResponded */],
    taskId: import_zod3.z.number().optional()
  }),
  // Task Analytics
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskToolFailed" /* TaskToolFailed */),
    payload: rooCodeEventsSchema.shape["taskToolFailed" /* TaskToolFailed */],
    taskId: import_zod3.z.number().optional()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("taskTokenUsageUpdated" /* TaskTokenUsageUpdated */),
    payload: rooCodeEventsSchema.shape["taskTokenUsageUpdated" /* TaskTokenUsageUpdated */],
    taskId: import_zod3.z.number().optional()
  }),
  // Evals
  import_zod3.z.object({
    eventName: import_zod3.z.literal("evalPass" /* EvalPass */),
    payload: import_zod3.z.undefined(),
    taskId: import_zod3.z.number()
  }),
  import_zod3.z.object({
    eventName: import_zod3.z.literal("evalFail" /* EvalFail */),
    payload: import_zod3.z.undefined(),
    taskId: import_zod3.z.number()
  })
]);

// src/task.ts
var import_zod4 = require("zod");
var TaskStatus = /* @__PURE__ */ ((TaskStatus2) => {
  TaskStatus2["Running"] = "running";
  TaskStatus2["Interactive"] = "interactive";
  TaskStatus2["Resumable"] = "resumable";
  TaskStatus2["Idle"] = "idle";
  TaskStatus2["None"] = "none";
  return TaskStatus2;
})(TaskStatus || {});
var taskMetadataSchema = import_zod4.z.object({
  task: import_zod4.z.string().optional(),
  images: import_zod4.z.array(import_zod4.z.string()).optional()
});

// src/global-settings.ts
var import_zod14 = require("zod");

// src/provider-settings.ts
var import_zod8 = require("zod");

// src/model.ts
var import_zod5 = require("zod");
var reasoningEfforts = ["low", "medium", "high"];
var reasoningEffortsSchema = import_zod5.z.enum(reasoningEfforts);
var reasoningEffortWithMinimalSchema = import_zod5.z.union([reasoningEffortsSchema, import_zod5.z.literal("minimal")]);
var reasoningEffortsExtended = ["none", "minimal", "low", "medium", "high"];
var reasoningEffortExtendedSchema = import_zod5.z.enum(reasoningEffortsExtended);
var reasoningEffortSettingValues = ["disable", "none", "minimal", "low", "medium", "high"];
var reasoningEffortSettingSchema = import_zod5.z.enum(reasoningEffortSettingValues);
var verbosityLevels = ["low", "medium", "high"];
var verbosityLevelsSchema = import_zod5.z.enum(verbosityLevels);
var serviceTiers = ["default", "flex", "priority"];
var serviceTierSchema = import_zod5.z.enum(serviceTiers);
var modelParameters = ["max_tokens", "temperature", "reasoning", "include_reasoning"];
var modelParametersSchema = import_zod5.z.enum(modelParameters);
var isModelParameter = (value) => modelParameters.includes(value);
var modelInfoSchema = import_zod5.z.object({
  maxTokens: import_zod5.z.number().nullish(),
  maxThinkingTokens: import_zod5.z.number().nullish(),
  contextWindow: import_zod5.z.number(),
  supportsImages: import_zod5.z.boolean().optional(),
  supportsPromptCache: import_zod5.z.boolean(),
  // Optional default prompt cache retention policy for providers that support it.
  // When set to "24h", extended prompt caching will be requested; when omitted
  // or set to "in_memory", the default in‑memory cache is used.
  promptCacheRetention: import_zod5.z.enum(["in_memory", "24h"]).optional(),
  // Capability flag to indicate whether the model supports an output verbosity parameter
  supportsVerbosity: import_zod5.z.boolean().optional(),
  supportsReasoningBudget: import_zod5.z.boolean().optional(),
  // Capability flag to indicate whether the model supports simple on/off binary reasoning
  supportsReasoningBinary: import_zod5.z.boolean().optional(),
  // Capability flag to indicate whether the model supports temperature parameter
  supportsTemperature: import_zod5.z.boolean().optional(),
  defaultTemperature: import_zod5.z.number().optional(),
  requiredReasoningBudget: import_zod5.z.boolean().optional(),
  supportsReasoningEffort: import_zod5.z.union([import_zod5.z.boolean(), import_zod5.z.array(import_zod5.z.enum(["disable", "none", "minimal", "low", "medium", "high"]))]).optional(),
  requiredReasoningEffort: import_zod5.z.boolean().optional(),
  preserveReasoning: import_zod5.z.boolean().optional(),
  supportedParameters: import_zod5.z.array(modelParametersSchema).optional(),
  inputPrice: import_zod5.z.number().optional(),
  outputPrice: import_zod5.z.number().optional(),
  cacheWritesPrice: import_zod5.z.number().optional(),
  cacheReadsPrice: import_zod5.z.number().optional(),
  description: import_zod5.z.string().optional(),
  // Default effort value for models that support reasoning effort
  reasoningEffort: reasoningEffortExtendedSchema.optional(),
  minTokensPerCachePoint: import_zod5.z.number().optional(),
  maxCachePoints: import_zod5.z.number().optional(),
  cachableFields: import_zod5.z.array(import_zod5.z.string()).optional(),
  // Flag to indicate if the model is deprecated and should not be used
  deprecated: import_zod5.z.boolean().optional(),
  // Flag to indicate if the model is free (no cost)
  isFree: import_zod5.z.boolean().optional(),
  // Flag to indicate if the model supports native tool calling (OpenAI-style function calling)
  supportsNativeTools: import_zod5.z.boolean().optional(),
  // Default tool protocol preferred by this model (if not specified, falls back to capability/provider defaults)
  defaultToolProtocol: import_zod5.z.enum(["xml", "native"]).optional(),
  // Exclude specific native tools from being available (only applies to native protocol)
  // These tools will be removed from the set of tools available to the model
  excludedTools: import_zod5.z.array(import_zod5.z.string()).optional(),
  // Include specific native tools (only applies to native protocol)
  // These tools will be added if they belong to an allowed group in the current mode
  // Cannot force-add tools from groups the mode doesn't allow
  includedTools: import_zod5.z.array(import_zod5.z.string()).optional(),
  /**
   * Service tiers with pricing information.
   * Each tier can have a name (for OpenAI service tiers) and pricing overrides.
   * The top-level input/output/cache* fields represent the default/standard tier.
   */
  tiers: import_zod5.z.array(
    import_zod5.z.object({
      name: serviceTierSchema.optional(),
      // Service tier name (flex, priority, etc.)
      contextWindow: import_zod5.z.number(),
      inputPrice: import_zod5.z.number().optional(),
      outputPrice: import_zod5.z.number().optional(),
      cacheWritesPrice: import_zod5.z.number().optional(),
      cacheReadsPrice: import_zod5.z.number().optional()
    })
  ).optional()
});

// src/codebase-index.ts
var import_zod6 = require("zod");
var CODEBASE_INDEX_DEFAULTS = {
  MIN_SEARCH_RESULTS: 10,
  MAX_SEARCH_RESULTS: 200,
  DEFAULT_SEARCH_RESULTS: 50,
  SEARCH_RESULTS_STEP: 10,
  MIN_SEARCH_SCORE: 0,
  MAX_SEARCH_SCORE: 1,
  DEFAULT_SEARCH_MIN_SCORE: 0.4,
  SEARCH_SCORE_STEP: 0.05
};
var codebaseIndexConfigSchema = import_zod6.z.object({
  codebaseIndexEnabled: import_zod6.z.boolean().optional(),
  codebaseIndexQdrantUrl: import_zod6.z.string().optional(),
  codebaseIndexEmbedderProvider: import_zod6.z.enum([
    "openai",
    "ollama",
    "openai-compatible",
    "gemini",
    "mistral",
    "vercel-ai-gateway",
    "bedrock",
    "openrouter"
  ]).optional(),
  codebaseIndexEmbedderBaseUrl: import_zod6.z.string().optional(),
  codebaseIndexEmbedderModelId: import_zod6.z.string().optional(),
  codebaseIndexEmbedderModelDimension: import_zod6.z.number().optional(),
  codebaseIndexSearchMinScore: import_zod6.z.number().min(0).max(1).optional(),
  codebaseIndexSearchMaxResults: import_zod6.z.number().min(CODEBASE_INDEX_DEFAULTS.MIN_SEARCH_RESULTS).max(CODEBASE_INDEX_DEFAULTS.MAX_SEARCH_RESULTS).optional(),
  // OpenAI Compatible specific fields
  codebaseIndexOpenAiCompatibleBaseUrl: import_zod6.z.string().optional(),
  codebaseIndexOpenAiCompatibleModelDimension: import_zod6.z.number().optional(),
  // Bedrock specific fields
  codebaseIndexBedrockRegion: import_zod6.z.string().optional(),
  codebaseIndexBedrockProfile: import_zod6.z.string().optional()
});
var codebaseIndexModelsSchema = import_zod6.z.object({
  openai: import_zod6.z.record(import_zod6.z.string(), import_zod6.z.object({ dimension: import_zod6.z.number() })).optional(),
  ollama: import_zod6.z.record(import_zod6.z.string(), import_zod6.z.object({ dimension: import_zod6.z.number() })).optional(),
  "openai-compatible": import_zod6.z.record(import_zod6.z.string(), import_zod6.z.object({ dimension: import_zod6.z.number() })).optional(),
  gemini: import_zod6.z.record(import_zod6.z.string(), import_zod6.z.object({ dimension: import_zod6.z.number() })).optional(),
  mistral: import_zod6.z.record(import_zod6.z.string(), import_zod6.z.object({ dimension: import_zod6.z.number() })).optional(),
  "vercel-ai-gateway": import_zod6.z.record(import_zod6.z.string(), import_zod6.z.object({ dimension: import_zod6.z.number() })).optional(),
  openrouter: import_zod6.z.record(import_zod6.z.string(), import_zod6.z.object({ dimension: import_zod6.z.number() })).optional(),
  bedrock: import_zod6.z.record(import_zod6.z.string(), import_zod6.z.object({ dimension: import_zod6.z.number() })).optional()
});
var codebaseIndexProviderSchema = import_zod6.z.object({
  codeIndexOpenAiKey: import_zod6.z.string().optional(),
  codeIndexQdrantApiKey: import_zod6.z.string().optional(),
  codebaseIndexOpenAiCompatibleBaseUrl: import_zod6.z.string().optional(),
  codebaseIndexOpenAiCompatibleApiKey: import_zod6.z.string().optional(),
  codebaseIndexOpenAiCompatibleModelDimension: import_zod6.z.number().optional(),
  codebaseIndexGeminiApiKey: import_zod6.z.string().optional(),
  codebaseIndexMistralApiKey: import_zod6.z.string().optional(),
  codebaseIndexVercelAiGatewayApiKey: import_zod6.z.string().optional(),
  codebaseIndexOpenRouterApiKey: import_zod6.z.string().optional()
});

// src/providers/anthropic.ts
var anthropicDefaultModelId = "claude-sonnet-4-5";
var anthropicModels = {
  "claude-sonnet-4-5": {
    maxTokens: 64e3,
    // Overridden to 8k if `enableReasoningEffort` is false.
    contextWindow: 2e5,
    // Default 200K, extendable to 1M with beta flag 'context-1m-2025-08-07'
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 3,
    // $3 per million input tokens (≤200K context)
    outputPrice: 15,
    // $15 per million output tokens (≤200K context)
    cacheWritesPrice: 3.75,
    // $3.75 per million tokens
    cacheReadsPrice: 0.3,
    // $0.30 per million tokens
    supportsReasoningBudget: true,
    // Tiered pricing for extended context (requires beta flag 'context-1m-2025-08-07')
    tiers: [
      {
        contextWindow: 1e6,
        // 1M tokens with beta flag
        inputPrice: 6,
        // $6 per million input tokens (>200K context)
        outputPrice: 22.5,
        // $22.50 per million output tokens (>200K context)
        cacheWritesPrice: 7.5,
        // $7.50 per million tokens (>200K context)
        cacheReadsPrice: 0.6
        // $0.60 per million tokens (>200K context)
      }
    ]
  },
  "claude-sonnet-4-20250514": {
    maxTokens: 64e3,
    // Overridden to 8k if `enableReasoningEffort` is false.
    contextWindow: 2e5,
    // Default 200K, extendable to 1M with beta flag 'context-1m-2025-08-07'
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 3,
    // $3 per million input tokens (≤200K context)
    outputPrice: 15,
    // $15 per million output tokens (≤200K context)
    cacheWritesPrice: 3.75,
    // $3.75 per million tokens
    cacheReadsPrice: 0.3,
    // $0.30 per million tokens
    supportsReasoningBudget: true,
    // Tiered pricing for extended context (requires beta flag 'context-1m-2025-08-07')
    tiers: [
      {
        contextWindow: 1e6,
        // 1M tokens with beta flag
        inputPrice: 6,
        // $6 per million input tokens (>200K context)
        outputPrice: 22.5,
        // $22.50 per million output tokens (>200K context)
        cacheWritesPrice: 7.5,
        // $7.50 per million tokens (>200K context)
        cacheReadsPrice: 0.6
        // $0.60 per million tokens (>200K context)
      }
    ]
  },
  "claude-opus-4-5-20251101": {
    maxTokens: 32e3,
    // Overridden to 8k if `enableReasoningEffort` is false.
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 5,
    // $5 per million input tokens
    outputPrice: 25,
    // $25 per million output tokens
    cacheWritesPrice: 6.25,
    // $6.25 per million tokens
    cacheReadsPrice: 0.5,
    // $0.50 per million tokens
    supportsReasoningBudget: true
  },
  "claude-opus-4-1-20250805": {
    maxTokens: 32e3,
    // Overridden to 8k if `enableReasoningEffort` is false.
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 15,
    // $15 per million input tokens
    outputPrice: 75,
    // $75 per million output tokens
    cacheWritesPrice: 18.75,
    // $18.75 per million tokens
    cacheReadsPrice: 1.5,
    // $1.50 per million tokens
    supportsReasoningBudget: true
  },
  "claude-opus-4-20250514": {
    maxTokens: 32e3,
    // Overridden to 8k if `enableReasoningEffort` is false.
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 15,
    // $15 per million input tokens
    outputPrice: 75,
    // $75 per million output tokens
    cacheWritesPrice: 18.75,
    // $18.75 per million tokens
    cacheReadsPrice: 1.5,
    // $1.50 per million tokens
    supportsReasoningBudget: true
  },
  "claude-3-7-sonnet-20250219:thinking": {
    maxTokens: 128e3,
    // Unlocked by passing `beta` flag to the model. Otherwise, it's 64k.
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 3,
    // $3 per million input tokens
    outputPrice: 15,
    // $15 per million output tokens
    cacheWritesPrice: 3.75,
    // $3.75 per million tokens
    cacheReadsPrice: 0.3,
    // $0.30 per million tokens
    supportsReasoningBudget: true,
    requiredReasoningBudget: true
  },
  "claude-3-7-sonnet-20250219": {
    maxTokens: 8192,
    // Since we already have a `:thinking` virtual model we aren't setting `supportsReasoningBudget: true` here.
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 3,
    // $3 per million input tokens
    outputPrice: 15,
    // $15 per million output tokens
    cacheWritesPrice: 3.75,
    // $3.75 per million tokens
    cacheReadsPrice: 0.3
    // $0.30 per million tokens
  },
  "claude-3-5-sonnet-20241022": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 3,
    // $3 per million input tokens
    outputPrice: 15,
    // $15 per million output tokens
    cacheWritesPrice: 3.75,
    // $3.75 per million tokens
    cacheReadsPrice: 0.3
    // $0.30 per million tokens
  },
  "claude-3-5-haiku-20241022": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 1,
    outputPrice: 5,
    cacheWritesPrice: 1.25,
    cacheReadsPrice: 0.1
  },
  "claude-3-opus-20240229": {
    maxTokens: 4096,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 15,
    outputPrice: 75,
    cacheWritesPrice: 18.75,
    cacheReadsPrice: 1.5
  },
  "claude-3-haiku-20240307": {
    maxTokens: 4096,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.25,
    outputPrice: 1.25,
    cacheWritesPrice: 0.3,
    cacheReadsPrice: 0.03
  },
  "claude-haiku-4-5-20251001": {
    maxTokens: 64e3,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 1,
    outputPrice: 5,
    cacheWritesPrice: 1.25,
    cacheReadsPrice: 0.1,
    supportsReasoningBudget: true,
    description: "Claude Haiku 4.5 delivers near-frontier intelligence at lightning speeds with extended thinking, vision, and multilingual support."
  }
};
var ANTHROPIC_DEFAULT_MAX_TOKENS = 8192;

// src/providers/baseten.ts
var basetenModels = {
  "moonshotai/Kimi-K2-Thinking": {
    maxTokens: 163800,
    contextWindow: 262e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.6,
    outputPrice: 2.5,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Kimi K2 Thinking - A model with enhanced reasoning capabilities from Kimi K2"
  },
  "zai-org/GLM-4.6": {
    maxTokens: 2e5,
    contextWindow: 2e5,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.6,
    outputPrice: 2.2,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Frontier open model with advanced agentic, reasoning and coding capabilities"
  },
  "deepseek-ai/DeepSeek-R1": {
    maxTokens: 131072,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 2.55,
    outputPrice: 5.95,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "DeepSeek's first-generation reasoning model"
  },
  "deepseek-ai/DeepSeek-R1-0528": {
    maxTokens: 131072,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 2.55,
    outputPrice: 5.95,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "The latest revision of DeepSeek's first-generation reasoning model"
  },
  "deepseek-ai/DeepSeek-V3-0324": {
    maxTokens: 131072,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.77,
    outputPrice: 0.77,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Fast general-purpose LLM with enhanced reasoning capabilities"
  },
  "deepseek-ai/DeepSeek-V3.1": {
    maxTokens: 131072,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.5,
    outputPrice: 1.5,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Extremely capable general-purpose LLM with hybrid reasoning capabilities and advanced tool calling"
  },
  "Qwen/Qwen3-235B-A22B-Instruct-2507": {
    maxTokens: 262144,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.22,
    outputPrice: 0.8,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Mixture-of-experts LLM with math and reasoning capabilities"
  },
  "Qwen/Qwen3-Coder-480B-A35B-Instruct": {
    maxTokens: 262144,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.38,
    outputPrice: 1.53,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Mixture-of-experts LLM with advanced coding and reasoning capabilities"
  },
  "openai/gpt-oss-120b": {
    maxTokens: 128072,
    contextWindow: 128072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.1,
    outputPrice: 0.5,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Extremely capable general-purpose LLM with strong, controllable reasoning capabilities"
  },
  "moonshotai/Kimi-K2-Instruct-0905": {
    maxTokens: 168e3,
    contextWindow: 262e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.6,
    outputPrice: 2.5,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "State of the art language model for agentic and coding tasks. September Update."
  }
};
var basetenDefaultModelId = "zai-org/GLM-4.6";

// src/providers/bedrock.ts
var bedrockDefaultModelId = "anthropic.claude-sonnet-4-5-20250929-v1:0";
var bedrockDefaultPromptRouterModelId = "anthropic.claude-3-sonnet-20240229-v1:0";
var bedrockModels = {
  "anthropic.claude-sonnet-4-5-20250929-v1:0": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningBudget: true,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 3.75,
    cacheReadsPrice: 0.3,
    minTokensPerCachePoint: 1024,
    maxCachePoints: 4,
    cachableFields: ["system", "messages", "tools"]
  },
  "amazon.nova-pro-v1:0": {
    maxTokens: 5e3,
    contextWindow: 3e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.8,
    outputPrice: 3.2,
    cacheWritesPrice: 0.8,
    // per million tokens
    cacheReadsPrice: 0.2,
    // per million tokens
    minTokensPerCachePoint: 1,
    maxCachePoints: 1,
    cachableFields: ["system"]
  },
  "amazon.nova-pro-latency-optimized-v1:0": {
    maxTokens: 5e3,
    contextWindow: 3e5,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 1,
    outputPrice: 4,
    cacheWritesPrice: 1,
    // per million tokens
    cacheReadsPrice: 0.25,
    // per million tokens
    description: "Amazon Nova Pro with latency optimized inference"
  },
  "amazon.nova-lite-v1:0": {
    maxTokens: 5e3,
    contextWindow: 3e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.06,
    outputPrice: 0.24,
    cacheWritesPrice: 0.06,
    // per million tokens
    cacheReadsPrice: 0.015,
    // per million tokens
    minTokensPerCachePoint: 1,
    maxCachePoints: 1,
    cachableFields: ["system"]
  },
  "amazon.nova-micro-v1:0": {
    maxTokens: 5e3,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.035,
    outputPrice: 0.14,
    cacheWritesPrice: 0.035,
    // per million tokens
    cacheReadsPrice: 875e-5,
    // per million tokens
    minTokensPerCachePoint: 1,
    maxCachePoints: 1,
    cachableFields: ["system"]
  },
  "anthropic.claude-sonnet-4-20250514-v1:0": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningBudget: true,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 3.75,
    cacheReadsPrice: 0.3,
    minTokensPerCachePoint: 1024,
    maxCachePoints: 4,
    cachableFields: ["system", "messages", "tools"]
  },
  "anthropic.claude-opus-4-1-20250805-v1:0": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningBudget: true,
    supportsNativeTools: true,
    inputPrice: 15,
    outputPrice: 75,
    cacheWritesPrice: 18.75,
    cacheReadsPrice: 1.5,
    minTokensPerCachePoint: 1024,
    maxCachePoints: 4,
    cachableFields: ["system", "messages", "tools"]
  },
  "anthropic.claude-opus-4-5-20251101-v1:0": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningBudget: true,
    supportsNativeTools: true,
    inputPrice: 5,
    outputPrice: 25,
    cacheWritesPrice: 6.25,
    cacheReadsPrice: 0.5,
    minTokensPerCachePoint: 1024,
    maxCachePoints: 4,
    cachableFields: ["system", "messages", "tools"]
  },
  "anthropic.claude-opus-4-20250514-v1:0": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningBudget: true,
    supportsNativeTools: true,
    inputPrice: 15,
    outputPrice: 75,
    cacheWritesPrice: 18.75,
    cacheReadsPrice: 1.5,
    minTokensPerCachePoint: 1024,
    maxCachePoints: 4,
    cachableFields: ["system", "messages", "tools"]
  },
  "anthropic.claude-3-7-sonnet-20250219-v1:0": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningBudget: true,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 3.75,
    cacheReadsPrice: 0.3,
    minTokensPerCachePoint: 1024,
    maxCachePoints: 4,
    cachableFields: ["system", "messages", "tools"]
  },
  "anthropic.claude-3-5-sonnet-20241022-v2:0": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 3.75,
    cacheReadsPrice: 0.3,
    minTokensPerCachePoint: 1024,
    maxCachePoints: 4,
    cachableFields: ["system", "messages", "tools"]
  },
  "anthropic.claude-3-5-haiku-20241022-v1:0": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.8,
    outputPrice: 4,
    cacheWritesPrice: 1,
    cacheReadsPrice: 0.08,
    minTokensPerCachePoint: 2048,
    maxCachePoints: 4,
    cachableFields: ["system", "messages", "tools"]
  },
  "anthropic.claude-haiku-4-5-20251001-v1:0": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningBudget: true,
    supportsNativeTools: true,
    inputPrice: 1,
    outputPrice: 5,
    cacheWritesPrice: 1.25,
    // 5m cache writes
    cacheReadsPrice: 0.1,
    // cache hits / refreshes
    minTokensPerCachePoint: 2048,
    maxCachePoints: 4,
    cachableFields: ["system", "messages", "tools"]
  },
  "anthropic.claude-3-5-sonnet-20240620-v1:0": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 15
  },
  "anthropic.claude-3-opus-20240229-v1:0": {
    maxTokens: 4096,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 15,
    outputPrice: 75
  },
  "anthropic.claude-3-sonnet-20240229-v1:0": {
    maxTokens: 4096,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 15
  },
  "anthropic.claude-3-haiku-20240307-v1:0": {
    maxTokens: 4096,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.25,
    outputPrice: 1.25
  },
  "anthropic.claude-2-1-v1:0": {
    maxTokens: 4096,
    contextWindow: 1e5,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 8,
    outputPrice: 24,
    description: "Claude 2.1"
  },
  "anthropic.claude-2-0-v1:0": {
    maxTokens: 4096,
    contextWindow: 1e5,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 8,
    outputPrice: 24,
    description: "Claude 2.0"
  },
  "anthropic.claude-instant-v1:0": {
    maxTokens: 4096,
    contextWindow: 1e5,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.8,
    outputPrice: 2.4,
    description: "Claude Instant"
  },
  "deepseek.r1-v1:0": {
    maxTokens: 32768,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 1.35,
    outputPrice: 5.4
  },
  "openai.gpt-oss-20b-1:0": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.5,
    outputPrice: 1.5,
    description: "GPT-OSS 20B - Optimized for low latency and local/specialized use cases"
  },
  "openai.gpt-oss-120b-1:0": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 2,
    outputPrice: 6,
    description: "GPT-OSS 120B - Production-ready, general-purpose, high-reasoning model"
  },
  "meta.llama3-3-70b-instruct-v1:0": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.72,
    outputPrice: 0.72,
    description: "Llama 3.3 Instruct (70B)"
  },
  "meta.llama3-2-90b-instruct-v1:0": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.72,
    outputPrice: 0.72,
    description: "Llama 3.2 Instruct (90B)"
  },
  "meta.llama3-2-11b-instruct-v1:0": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.16,
    outputPrice: 0.16,
    description: "Llama 3.2 Instruct (11B)"
  },
  "meta.llama3-2-3b-instruct-v1:0": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.15,
    outputPrice: 0.15,
    description: "Llama 3.2 Instruct (3B)"
  },
  "meta.llama3-2-1b-instruct-v1:0": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.1,
    outputPrice: 0.1,
    description: "Llama 3.2 Instruct (1B)"
  },
  "meta.llama3-1-405b-instruct-v1:0": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 2.4,
    outputPrice: 2.4,
    description: "Llama 3.1 Instruct (405B)"
  },
  "meta.llama3-1-70b-instruct-v1:0": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.72,
    outputPrice: 0.72,
    description: "Llama 3.1 Instruct (70B)"
  },
  "meta.llama3-1-70b-instruct-latency-optimized-v1:0": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.9,
    outputPrice: 0.9,
    description: "Llama 3.1 Instruct (70B) (w/ latency optimized inference)"
  },
  "meta.llama3-1-8b-instruct-v1:0": {
    maxTokens: 8192,
    contextWindow: 8e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.22,
    outputPrice: 0.22,
    description: "Llama 3.1 Instruct (8B)"
  },
  "meta.llama3-70b-instruct-v1:0": {
    maxTokens: 2048,
    contextWindow: 8e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 2.65,
    outputPrice: 3.5
  },
  "meta.llama3-8b-instruct-v1:0": {
    maxTokens: 2048,
    contextWindow: 4e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.3,
    outputPrice: 0.6
  },
  "amazon.titan-text-lite-v1:0": {
    maxTokens: 4096,
    contextWindow: 8e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.15,
    outputPrice: 0.2,
    description: "Amazon Titan Text Lite"
  },
  "amazon.titan-text-express-v1:0": {
    maxTokens: 4096,
    contextWindow: 8e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.2,
    outputPrice: 0.6,
    description: "Amazon Titan Text Express"
  },
  "amazon.titan-text-embeddings-v1:0": {
    maxTokens: 8192,
    contextWindow: 8e3,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.1,
    description: "Amazon Titan Text Embeddings"
  },
  "amazon.titan-text-embeddings-v2:0": {
    maxTokens: 8192,
    contextWindow: 8e3,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.02,
    description: "Amazon Titan Text Embeddings V2"
  }
};
var BEDROCK_DEFAULT_TEMPERATURE = 0.3;
var BEDROCK_MAX_TOKENS = 4096;
var BEDROCK_DEFAULT_CONTEXT = 128e3;
var AWS_INFERENCE_PROFILE_MAPPING = [
  // Australia regions (Sydney and Melbourne) → au. inference profile (most specific - 14 chars)
  ["ap-southeast-2", "au."],
  ["ap-southeast-4", "au."],
  // Japan regions (Tokyo and Osaka) → jp. inference profile (13 chars)
  ["ap-northeast-", "jp."],
  // US Government Cloud → ug. inference profile (7 chars)
  ["us-gov-", "ug."],
  // Americas regions → us. inference profile (3 chars)
  ["us-", "us."],
  // Europe regions → eu. inference profile (3 chars)
  ["eu-", "eu."],
  // Asia Pacific regions → apac. inference profile (3 chars)
  ["ap-", "apac."],
  // Canada regions → ca. inference profile (3 chars)
  ["ca-", "ca."],
  // South America regions → sa. inference profile (3 chars)
  ["sa-", "sa."]
];
var BEDROCK_REGIONS = [
  { value: "us-east-1", label: "us-east-1" },
  { value: "us-east-2", label: "us-east-2" },
  { value: "us-west-1", label: "us-west-1" },
  { value: "us-west-2", label: "us-west-2" },
  { value: "ap-northeast-1", label: "ap-northeast-1" },
  { value: "ap-northeast-2", label: "ap-northeast-2" },
  { value: "ap-northeast-3", label: "ap-northeast-3" },
  { value: "ap-south-1", label: "ap-south-1" },
  { value: "ap-south-2", label: "ap-south-2" },
  { value: "ap-southeast-1", label: "ap-southeast-1" },
  { value: "ap-southeast-2", label: "ap-southeast-2" },
  { value: "ap-east-1", label: "ap-east-1" },
  { value: "eu-central-1", label: "eu-central-1" },
  { value: "eu-central-2", label: "eu-central-2" },
  { value: "eu-west-1", label: "eu-west-1" },
  { value: "eu-west-2", label: "eu-west-2" },
  { value: "eu-west-3", label: "eu-west-3" },
  { value: "eu-north-1", label: "eu-north-1" },
  { value: "eu-south-1", label: "eu-south-1" },
  { value: "eu-south-2", label: "eu-south-2" },
  { value: "ca-central-1", label: "ca-central-1" },
  { value: "sa-east-1", label: "sa-east-1" },
  { value: "us-gov-east-1", label: "us-gov-east-1" },
  { value: "us-gov-west-1", label: "us-gov-west-1" }
].sort((a, b) => a.value.localeCompare(b.value));
var BEDROCK_1M_CONTEXT_MODEL_IDS = [
  "anthropic.claude-sonnet-4-20250514-v1:0",
  "anthropic.claude-sonnet-4-5-20250929-v1:0"
];
var BEDROCK_GLOBAL_INFERENCE_MODEL_IDS = [
  "anthropic.claude-sonnet-4-20250514-v1:0",
  "anthropic.claude-sonnet-4-5-20250929-v1:0",
  "anthropic.claude-haiku-4-5-20251001-v1:0",
  "anthropic.claude-opus-4-5-20251101-v1:0"
];

// src/providers/cerebras.ts
var cerebrasDefaultModelId = "gpt-oss-120b";
var cerebrasModels = {
  "zai-glm-4.6": {
    maxTokens: 16384,
    // consistent with their other models
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0,
    outputPrice: 0,
    description: "Highly intelligent general purpose model with up to 1,000 tokens/s"
  },
  "qwen-3-235b-a22b-instruct-2507": {
    maxTokens: 64e3,
    contextWindow: 64e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0,
    outputPrice: 0,
    description: "Intelligent model with ~1400 tokens/s"
  },
  "llama-3.3-70b": {
    maxTokens: 64e3,
    contextWindow: 64e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0,
    outputPrice: 0,
    description: "Powerful model with ~2600 tokens/s"
  },
  "qwen-3-32b": {
    maxTokens: 64e3,
    contextWindow: 64e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0,
    outputPrice: 0,
    description: "SOTA coding performance with ~2500 tokens/s"
  },
  "gpt-oss-120b": {
    maxTokens: 8e3,
    contextWindow: 64e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0,
    outputPrice: 0,
    description: "OpenAI GPT OSS model with ~2800 tokens/s\n\n\u2022 64K context window\n\u2022 Excels at efficient reasoning across science, math, and coding"
  }
};

// src/providers/chutes.ts
var chutesDefaultModelId = "deepseek-ai/DeepSeek-R1-0528";
var chutesModels = {
  "deepseek-ai/DeepSeek-R1-0528": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "DeepSeek R1 0528 model."
  },
  "deepseek-ai/DeepSeek-R1": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "DeepSeek R1 model."
  },
  "deepseek-ai/DeepSeek-V3": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "DeepSeek V3 model."
  },
  "deepseek-ai/DeepSeek-V3.1": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "DeepSeek V3.1 model."
  },
  "deepseek-ai/DeepSeek-V3.1-Terminus": {
    maxTokens: 163840,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.23,
    outputPrice: 0.9,
    description: "DeepSeek\u2011V3.1\u2011Terminus is an update to V3.1 that improves language consistency by reducing CN/EN mix\u2011ups and eliminating random characters, while strengthening agent capabilities with notably better Code Agent and Search Agent performance."
  },
  "deepseek-ai/DeepSeek-V3.1-turbo": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 1,
    outputPrice: 3,
    description: "DeepSeek-V3.1-turbo is an FP8, speculative-decoding turbo variant optimized for ultra-fast single-shot queries (~200 TPS), with outputs close to the originals and solid function calling/reasoning/structured output, priced at $1/M input and $3/M output tokens, using 2\xD7 quota per request and not intended for bulk workloads."
  },
  "deepseek-ai/DeepSeek-V3.2-Exp": {
    maxTokens: 163840,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.25,
    outputPrice: 0.35,
    description: "DeepSeek-V3.2-Exp is an experimental LLM that introduces DeepSeek Sparse Attention to improve long\u2011context training and inference efficiency while maintaining performance comparable to V3.1\u2011Terminus."
  },
  "unsloth/Llama-3.3-70B-Instruct": {
    maxTokens: 32768,
    // From Groq
    contextWindow: 131072,
    // From Groq
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Unsloth Llama 3.3 70B Instruct model."
  },
  "chutesai/Llama-4-Scout-17B-16E-Instruct": {
    maxTokens: 32768,
    contextWindow: 512e3,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "ChutesAI Llama 4 Scout 17B Instruct model, 512K context."
  },
  "unsloth/Mistral-Nemo-Instruct-2407": {
    maxTokens: 32768,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Unsloth Mistral Nemo Instruct model."
  },
  "unsloth/gemma-3-12b-it": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Unsloth Gemma 3 12B IT model."
  },
  "NousResearch/DeepHermes-3-Llama-3-8B-Preview": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Nous DeepHermes 3 Llama 3 8B Preview model."
  },
  "unsloth/gemma-3-4b-it": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Unsloth Gemma 3 4B IT model."
  },
  "nvidia/Llama-3_3-Nemotron-Super-49B-v1": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Nvidia Llama 3.3 Nemotron Super 49B model."
  },
  "nvidia/Llama-3_1-Nemotron-Ultra-253B-v1": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Nvidia Llama 3.1 Nemotron Ultra 253B model."
  },
  "chutesai/Llama-4-Maverick-17B-128E-Instruct-FP8": {
    maxTokens: 32768,
    contextWindow: 256e3,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "ChutesAI Llama 4 Maverick 17B Instruct FP8 model."
  },
  "deepseek-ai/DeepSeek-V3-Base": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "DeepSeek V3 Base model."
  },
  "deepseek-ai/DeepSeek-R1-Zero": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "DeepSeek R1 Zero model."
  },
  "deepseek-ai/DeepSeek-V3-0324": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "DeepSeek V3 (0324) model."
  },
  "Qwen/Qwen3-235B-A22B-Instruct-2507": {
    maxTokens: 32768,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Qwen3 235B A22B Instruct 2507 model with 262K context window."
  },
  "Qwen/Qwen3-235B-A22B": {
    maxTokens: 32768,
    contextWindow: 40960,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Qwen3 235B A22B model."
  },
  "Qwen/Qwen3-32B": {
    maxTokens: 32768,
    contextWindow: 40960,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Qwen3 32B model."
  },
  "Qwen/Qwen3-30B-A3B": {
    maxTokens: 32768,
    contextWindow: 40960,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Qwen3 30B A3B model."
  },
  "Qwen/Qwen3-14B": {
    maxTokens: 32768,
    contextWindow: 40960,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Qwen3 14B model."
  },
  "Qwen/Qwen3-8B": {
    maxTokens: 32768,
    contextWindow: 40960,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Qwen3 8B model."
  },
  "microsoft/MAI-DS-R1-FP8": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Microsoft MAI-DS-R1 FP8 model."
  },
  "tngtech/DeepSeek-R1T-Chimera": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "TNGTech DeepSeek R1T Chimera model."
  },
  "zai-org/GLM-4.5-Air": {
    maxTokens: 32768,
    contextWindow: 151329,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "GLM-4.5-Air model with 151,329 token context window and 106B total parameters with 12B activated."
  },
  "zai-org/GLM-4.5-FP8": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "GLM-4.5-FP8 model with 128k token context window, optimized for agent-based applications with MoE architecture."
  },
  "zai-org/GLM-4.5-turbo": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 1,
    outputPrice: 3,
    description: "GLM-4.5-turbo model with 128K token context window, optimized for fast inference."
  },
  "zai-org/GLM-4.6-FP8": {
    maxTokens: 32768,
    contextWindow: 202752,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "GLM-4.6 introduces major upgrades over GLM-4.5, including a longer 200K-token context window for complex tasks, stronger coding performance in benchmarks and real-world tools (such as Claude Code, Cline, Roo Code, and Kilo Code), improved reasoning with tool use during inference, more capable and efficient agent integration, and refined writing that better matches human style, readability, and natural role-play scenarios."
  },
  "zai-org/GLM-4.6-turbo": {
    maxTokens: 202752,
    // From Chutes /v1/models: max_output_length
    contextWindow: 202752,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 1.15,
    outputPrice: 3.25,
    description: "GLM-4.6-turbo model with 200K-token context window, optimized for fast inference."
  },
  "meituan-longcat/LongCat-Flash-Thinking-FP8": {
    maxTokens: 32768,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "LongCat Flash Thinking FP8 model with 128K context window, optimized for complex reasoning and coding tasks."
  },
  "Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8": {
    maxTokens: 32768,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Qwen3 Coder 480B A35B Instruct FP8 model, optimized for coding tasks."
  },
  "moonshotai/Kimi-K2-Instruct-75k": {
    maxTokens: 32768,
    contextWindow: 75e3,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.1481,
    outputPrice: 0.5926,
    description: "Moonshot AI Kimi K2 Instruct model with 75k context window."
  },
  "moonshotai/Kimi-K2-Instruct-0905": {
    maxTokens: 32768,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.1999,
    outputPrice: 0.8001,
    description: "Moonshot AI Kimi K2 Instruct 0905 model with 256k context window."
  },
  "Qwen/Qwen3-235B-A22B-Thinking-2507": {
    maxTokens: 32768,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.077968332,
    outputPrice: 0.31202496,
    description: "Qwen3 235B A22B Thinking 2507 model with 262K context window."
  },
  "Qwen/Qwen3-Next-80B-A3B-Instruct": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Fast, stable instruction-tuned model optimized for complex tasks, RAG, and tool use without thinking traces."
  },
  "Qwen/Qwen3-Next-80B-A3B-Thinking": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "Reasoning-first model with structured thinking traces for multi-step problems, math proofs, and code synthesis."
  },
  "Qwen/Qwen3-VL-235B-A22B-Thinking": {
    maxTokens: 262144,
    contextWindow: 262144,
    supportsImages: true,
    supportsPromptCache: false,
    inputPrice: 0.16,
    outputPrice: 0.65,
    description: "Qwen3\u2011VL\u2011235B\u2011A22B\u2011Thinking is an open\u2011weight MoE vision\u2011language model (235B total, ~22B activated) optimized for deliberate multi\u2011step reasoning with strong text\u2011image\u2011video understanding and long\u2011context capabilities."
  }
};
var chutesDefaultModelInfo = chutesModels[chutesDefaultModelId];

// src/providers/claude-code.ts
var VERTEX_DATE_PATTERN = /-(\d{8})$/;
function convertModelNameForVertex(modelName) {
  return modelName.replace(VERTEX_DATE_PATTERN, "@$1");
}
var claudeCodeDefaultModelId = "claude-sonnet-4-5";
var CLAUDE_CODE_DEFAULT_MAX_OUTPUT_TOKENS = 16e3;
function getClaudeCodeModelId(baseModelId, useVertex = false) {
  return useVertex ? convertModelNameForVertex(baseModelId) : baseModelId;
}
var claudeCodeModels = {
  "claude-sonnet-4-5": {
    ...anthropicModels["claude-sonnet-4-5"],
    supportsImages: false,
    supportsPromptCache: true,
    // Claude Code does report cache tokens
    supportsReasoningEffort: false,
    supportsReasoningBudget: false,
    requiredReasoningBudget: false,
    // Claude Code manages its own tools and temperature via the CLI
    supportsNativeTools: false,
    supportsTemperature: false
  },
  "claude-sonnet-4-5-20250929[1m]": {
    ...anthropicModels["claude-sonnet-4-5"],
    contextWindow: 1e6,
    // 1M token context window (requires [1m] suffix)
    supportsImages: false,
    supportsPromptCache: true,
    // Claude Code does report cache tokens
    supportsReasoningEffort: false,
    supportsReasoningBudget: false,
    requiredReasoningBudget: false,
    // Claude Code manages its own tools and temperature via the CLI
    supportsNativeTools: false,
    supportsTemperature: false
  },
  "claude-sonnet-4-20250514": {
    ...anthropicModels["claude-sonnet-4-20250514"],
    supportsImages: false,
    supportsPromptCache: true,
    // Claude Code does report cache tokens
    supportsReasoningEffort: false,
    supportsReasoningBudget: false,
    requiredReasoningBudget: false,
    // Claude Code manages its own tools and temperature via the CLI
    supportsNativeTools: false,
    supportsTemperature: false
  },
  "claude-opus-4-5-20251101": {
    ...anthropicModels["claude-opus-4-5-20251101"],
    supportsImages: false,
    supportsPromptCache: true,
    // Claude Code does report cache tokens
    supportsReasoningEffort: false,
    supportsReasoningBudget: false,
    requiredReasoningBudget: false,
    // Claude Code manages its own tools and temperature via the CLI
    supportsNativeTools: false,
    supportsTemperature: false
  },
  "claude-opus-4-1-20250805": {
    ...anthropicModels["claude-opus-4-1-20250805"],
    supportsImages: false,
    supportsPromptCache: true,
    // Claude Code does report cache tokens
    supportsReasoningEffort: false,
    supportsReasoningBudget: false,
    requiredReasoningBudget: false,
    // Claude Code manages its own tools and temperature via the CLI
    supportsNativeTools: false,
    supportsTemperature: false
  },
  "claude-opus-4-20250514": {
    ...anthropicModels["claude-opus-4-20250514"],
    supportsImages: false,
    supportsPromptCache: true,
    // Claude Code does report cache tokens
    supportsReasoningEffort: false,
    supportsReasoningBudget: false,
    requiredReasoningBudget: false,
    // Claude Code manages its own tools and temperature via the CLI
    supportsNativeTools: false,
    supportsTemperature: false
  },
  "claude-3-7-sonnet-20250219": {
    ...anthropicModels["claude-3-7-sonnet-20250219"],
    supportsImages: false,
    supportsPromptCache: true,
    // Claude Code does report cache tokens
    supportsReasoningEffort: false,
    supportsReasoningBudget: false,
    requiredReasoningBudget: false,
    // Claude Code manages its own tools and temperature via the CLI
    supportsNativeTools: false,
    supportsTemperature: false
  },
  "claude-3-5-sonnet-20241022": {
    ...anthropicModels["claude-3-5-sonnet-20241022"],
    supportsImages: false,
    supportsPromptCache: true,
    // Claude Code does report cache tokens
    supportsReasoningEffort: false,
    supportsReasoningBudget: false,
    requiredReasoningBudget: false,
    // Claude Code manages its own tools and temperature via the CLI
    supportsNativeTools: false,
    supportsTemperature: false
  },
  "claude-3-5-haiku-20241022": {
    ...anthropicModels["claude-3-5-haiku-20241022"],
    supportsImages: false,
    supportsPromptCache: true,
    // Claude Code does report cache tokens
    supportsReasoningEffort: false,
    supportsReasoningBudget: false,
    requiredReasoningBudget: false,
    // Claude Code manages its own tools and temperature via the CLI
    supportsNativeTools: false,
    supportsTemperature: false
  },
  "claude-haiku-4-5-20251001": {
    ...anthropicModels["claude-haiku-4-5-20251001"],
    supportsImages: false,
    supportsPromptCache: true,
    // Claude Code does report cache tokens
    supportsReasoningEffort: false,
    supportsReasoningBudget: false,
    requiredReasoningBudget: false,
    // Claude Code manages its own tools and temperature via the CLI
    supportsNativeTools: false,
    supportsTemperature: false
  }
};

// src/providers/deepseek.ts
var deepSeekDefaultModelId = "deepseek-chat";
var deepSeekModels = {
  "deepseek-chat": {
    maxTokens: 8192,
    // 8K max output
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.56,
    // $0.56 per million tokens (cache miss) - Updated Sept 5, 2025
    outputPrice: 1.68,
    // $1.68 per million tokens - Updated Sept 5, 2025
    cacheWritesPrice: 0.56,
    // $0.56 per million tokens (cache miss) - Updated Sept 5, 2025
    cacheReadsPrice: 0.07,
    // $0.07 per million tokens (cache hit) - Updated Sept 5, 2025
    description: `DeepSeek-V3 achieves a significant breakthrough in inference speed over previous models. It tops the leaderboard among open-source models and rivals the most advanced closed-source models globally.`
  },
  "deepseek-reasoner": {
    maxTokens: 65536,
    // 64K max output for reasoning mode
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.56,
    // $0.56 per million tokens (cache miss) - Updated Sept 5, 2025
    outputPrice: 1.68,
    // $1.68 per million tokens - Updated Sept 5, 2025
    cacheWritesPrice: 0.56,
    // $0.56 per million tokens (cache miss) - Updated Sept 5, 2025
    cacheReadsPrice: 0.07,
    // $0.07 per million tokens (cache hit) - Updated Sept 5, 2025
    description: `DeepSeek-R1 achieves performance comparable to OpenAI-o1 across math, code, and reasoning tasks. Supports Chain of Thought reasoning with up to 64K output tokens.`
  }
};
var DEEP_SEEK_DEFAULT_TEMPERATURE = 0.6;

// src/providers/doubao.ts
var doubaoDefaultModelId = "doubao-seed-1-6-250615";
var doubaoModels = {
  "doubao-seed-1-6-250615": {
    maxTokens: 32768,
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 1e-4,
    // $0.0001 per million tokens (cache miss)
    outputPrice: 4e-4,
    // $0.0004 per million tokens
    cacheWritesPrice: 1e-4,
    // $0.0001 per million tokens (cache miss)
    cacheReadsPrice: 2e-5,
    // $0.00002 per million tokens (cache hit)
    description: `Doubao Seed 1.6 is a powerful model designed for high-performance tasks with extensive context handling.`
  },
  "doubao-seed-1-6-thinking-250715": {
    maxTokens: 32768,
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 2e-4,
    // $0.0002 per million tokens
    outputPrice: 8e-4,
    // $0.0008 per million tokens
    cacheWritesPrice: 2e-4,
    // $0.0002 per million
    cacheReadsPrice: 4e-5,
    // $0.00004 per million tokens (cache hit)
    description: `Doubao Seed 1.6 Thinking is optimized for reasoning tasks, providing enhanced performance in complex problem-solving scenarios.`
  },
  "doubao-seed-1-6-flash-250715": {
    maxTokens: 32768,
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 15e-5,
    // $0.00015 per million tokens
    outputPrice: 6e-4,
    // $0.0006 per million tokens
    cacheWritesPrice: 15e-5,
    // $0.00015 per million
    cacheReadsPrice: 3e-5,
    // $0.00003 per million tokens (cache hit)
    description: `Doubao Seed 1.6 Flash is tailored for speed and efficiency, making it ideal for applications requiring rapid responses.`
  }
};
var doubaoDefaultModelInfo = doubaoModels[doubaoDefaultModelId];
var DOUBAO_API_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3";
var DOUBAO_API_CHAT_PATH = "/chat/completions";

// src/providers/featherless.ts
var featherlessModels = {
  "deepseek-ai/DeepSeek-V3-0324": {
    maxTokens: 4096,
    contextWindow: 32678,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "DeepSeek V3 0324 model."
  },
  "deepseek-ai/DeepSeek-R1-0528": {
    maxTokens: 4096,
    contextWindow: 32678,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "DeepSeek R1 0528 model."
  },
  "moonshotai/Kimi-K2-Instruct": {
    maxTokens: 4096,
    contextWindow: 32678,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0,
    outputPrice: 0,
    description: "Kimi K2 Instruct model."
  },
  "openai/gpt-oss-120b": {
    maxTokens: 4096,
    contextWindow: 32678,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    description: "GPT-OSS 120B model."
  },
  "Qwen/Qwen3-Coder-480B-A35B-Instruct": {
    maxTokens: 4096,
    contextWindow: 32678,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0,
    outputPrice: 0,
    description: "Qwen3 Coder 480B A35B Instruct model."
  }
};
var featherlessDefaultModelId = "deepseek-ai/DeepSeek-R1-0528";

// src/providers/fireworks.ts
var fireworksDefaultModelId = "accounts/fireworks/models/kimi-k2-instruct-0905";
var fireworksModels = {
  "accounts/fireworks/models/kimi-k2-instruct-0905": {
    maxTokens: 16384,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.6,
    outputPrice: 2.5,
    cacheReadsPrice: 0.15,
    description: "Kimi K2 model gets a new version update: Agentic coding: more accurate, better generalization across scaffolds. Frontend coding: improved aesthetics and functionalities on web, 3d, and other tasks. Context length: extended from 128k to 256k, providing better long-horizon support."
  },
  "accounts/fireworks/models/kimi-k2-instruct": {
    maxTokens: 16384,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.6,
    outputPrice: 2.5,
    description: "Kimi K2 is a state-of-the-art mixture-of-experts (MoE) language model with 32 billion activated parameters and 1 trillion total parameters. Trained with the Muon optimizer, Kimi K2 achieves exceptional performance across frontier knowledge, reasoning, and coding tasks while being meticulously optimized for agentic capabilities."
  },
  "accounts/fireworks/models/minimax-m2": {
    maxTokens: 4096,
    contextWindow: 204800,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.3,
    outputPrice: 1.2,
    description: "MiniMax M2 is a high-performance language model with 204.8K context window, optimized for long-context understanding and generation tasks."
  },
  "accounts/fireworks/models/qwen3-235b-a22b-instruct-2507": {
    maxTokens: 32768,
    contextWindow: 256e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.22,
    outputPrice: 0.88,
    description: "Latest Qwen3 thinking model, competitive against the best closed source models in Jul 2025."
  },
  "accounts/fireworks/models/qwen3-coder-480b-a35b-instruct": {
    maxTokens: 32768,
    contextWindow: 256e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.45,
    outputPrice: 1.8,
    description: "Qwen3's most agentic code model to date."
  },
  "accounts/fireworks/models/deepseek-r1-0528": {
    maxTokens: 20480,
    contextWindow: 16e4,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 8,
    description: "05/28 updated checkpoint of Deepseek R1. Its overall performance is now approaching that of leading models, such as O3 and Gemini 2.5 Pro. Compared to the previous version, the upgraded model shows significant improvements in handling complex reasoning tasks, and this version also offers a reduced hallucination rate, enhanced support for function calling, and better experience for vibe coding. Note that fine-tuning for this model is only available through contacting fireworks at https://fireworks.ai/company/contact-us."
  },
  "accounts/fireworks/models/deepseek-v3": {
    maxTokens: 16384,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.9,
    outputPrice: 0.9,
    description: "A strong Mixture-of-Experts (MoE) language model with 671B total parameters with 37B activated for each token from Deepseek. Note that fine-tuning for this model is only available through contacting fireworks at https://fireworks.ai/company/contact-us."
  },
  "accounts/fireworks/models/deepseek-v3p1": {
    maxTokens: 16384,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.56,
    outputPrice: 1.68,
    description: "DeepSeek v3.1 is an improved version of the v3 model with enhanced performance, better reasoning capabilities, and improved code generation. This Mixture-of-Experts (MoE) model maintains the same 671B total parameters with 37B activated per token."
  },
  "accounts/fireworks/models/glm-4p5": {
    maxTokens: 16384,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.55,
    outputPrice: 2.19,
    description: "Z.ai GLM-4.5 with 355B total parameters and 32B active parameters. Features unified reasoning, coding, and intelligent agent capabilities."
  },
  "accounts/fireworks/models/glm-4p5-air": {
    maxTokens: 16384,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.55,
    outputPrice: 2.19,
    description: "Z.ai GLM-4.5-Air with 106B total parameters and 12B active parameters. Features unified reasoning, coding, and intelligent agent capabilities."
  },
  "accounts/fireworks/models/glm-4p6": {
    maxTokens: 25344,
    contextWindow: 198e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.55,
    outputPrice: 2.19,
    description: "Z.ai GLM-4.6 is an advanced coding model with exceptional performance on complex programming tasks. Features improved reasoning capabilities and enhanced code generation quality, making it ideal for software development workflows."
  },
  "accounts/fireworks/models/gpt-oss-20b": {
    maxTokens: 16384,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.07,
    outputPrice: 0.3,
    description: "OpenAI gpt-oss-20b: Compact model for local/edge deployments. Optimized for low-latency and resource-constrained environments with chain-of-thought output, adjustable reasoning, and agentic workflows."
  },
  "accounts/fireworks/models/gpt-oss-120b": {
    maxTokens: 16384,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.15,
    outputPrice: 0.6,
    description: "OpenAI gpt-oss-120b: Production-grade, general-purpose model that fits on a single H100 GPU. Features complex reasoning, configurable effort, full chain-of-thought transparency, and supports function calling, tool use, and structured outputs."
  }
};

// src/providers/gemini.ts
var geminiDefaultModelId = "gemini-2.5-pro";
var geminiModels = {
  "gemini-3-pro-preview": {
    maxTokens: 65536,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    supportsReasoningEffort: ["low", "high"],
    reasoningEffort: "low",
    supportsTemperature: true,
    defaultTemperature: 1,
    inputPrice: 4,
    outputPrice: 18,
    tiers: [
      {
        contextWindow: 2e5,
        inputPrice: 2,
        outputPrice: 12
      },
      {
        contextWindow: Infinity,
        inputPrice: 4,
        outputPrice: 18
      }
    ]
  },
  // 2.5 Pro models
  "gemini-2.5-pro": {
    maxTokens: 64e3,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 2.5,
    // This is the pricing for prompts above 200k tokens.
    outputPrice: 15,
    cacheReadsPrice: 0.625,
    cacheWritesPrice: 4.5,
    maxThinkingTokens: 32768,
    supportsReasoningBudget: true,
    requiredReasoningBudget: true,
    tiers: [
      {
        contextWindow: 2e5,
        inputPrice: 1.25,
        outputPrice: 10,
        cacheReadsPrice: 0.31
      },
      {
        contextWindow: Infinity,
        inputPrice: 2.5,
        outputPrice: 15,
        cacheReadsPrice: 0.625
      }
    ]
  },
  "gemini-2.5-pro-preview-06-05": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 2.5,
    // This is the pricing for prompts above 200k tokens.
    outputPrice: 15,
    cacheReadsPrice: 0.625,
    cacheWritesPrice: 4.5,
    maxThinkingTokens: 32768,
    supportsReasoningBudget: true,
    tiers: [
      {
        contextWindow: 2e5,
        inputPrice: 1.25,
        outputPrice: 10,
        cacheReadsPrice: 0.31
      },
      {
        contextWindow: Infinity,
        inputPrice: 2.5,
        outputPrice: 15,
        cacheReadsPrice: 0.625
      }
    ]
  },
  "gemini-2.5-pro-preview-05-06": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 2.5,
    // This is the pricing for prompts above 200k tokens.
    outputPrice: 15,
    cacheReadsPrice: 0.625,
    cacheWritesPrice: 4.5,
    tiers: [
      {
        contextWindow: 2e5,
        inputPrice: 1.25,
        outputPrice: 10,
        cacheReadsPrice: 0.31
      },
      {
        contextWindow: Infinity,
        inputPrice: 2.5,
        outputPrice: 15,
        cacheReadsPrice: 0.625
      }
    ]
  },
  "gemini-2.5-pro-preview-03-25": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 2.5,
    // This is the pricing for prompts above 200k tokens.
    outputPrice: 15,
    cacheReadsPrice: 0.625,
    cacheWritesPrice: 4.5,
    maxThinkingTokens: 32768,
    supportsReasoningBudget: true,
    tiers: [
      {
        contextWindow: 2e5,
        inputPrice: 1.25,
        outputPrice: 10,
        cacheReadsPrice: 0.31
      },
      {
        contextWindow: Infinity,
        inputPrice: 2.5,
        outputPrice: 15,
        cacheReadsPrice: 0.625
      }
    ]
  },
  // 2.5 Flash models
  "gemini-flash-latest": {
    maxTokens: 65536,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.3,
    outputPrice: 2.5,
    cacheReadsPrice: 0.075,
    cacheWritesPrice: 1,
    maxThinkingTokens: 24576,
    supportsReasoningBudget: true
  },
  "gemini-2.5-flash-preview-09-2025": {
    maxTokens: 65536,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.3,
    outputPrice: 2.5,
    cacheReadsPrice: 0.075,
    cacheWritesPrice: 1,
    maxThinkingTokens: 24576,
    supportsReasoningBudget: true
  },
  "gemini-2.5-flash": {
    maxTokens: 64e3,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.3,
    outputPrice: 2.5,
    cacheReadsPrice: 0.075,
    cacheWritesPrice: 1,
    maxThinkingTokens: 24576,
    supportsReasoningBudget: true
  },
  // 2.5 Flash Lite models
  "gemini-flash-lite-latest": {
    maxTokens: 65536,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.1,
    outputPrice: 0.4,
    cacheReadsPrice: 0.025,
    cacheWritesPrice: 1,
    supportsReasoningBudget: true,
    maxThinkingTokens: 24576
  },
  "gemini-2.5-flash-lite-preview-09-2025": {
    maxTokens: 65536,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.1,
    outputPrice: 0.4,
    cacheReadsPrice: 0.025,
    cacheWritesPrice: 1,
    supportsReasoningBudget: true,
    maxThinkingTokens: 24576
  }
};

// src/providers/glama.ts
var glamaDefaultModelId = "anthropic/claude-3-7-sonnet";
var glamaDefaultModelInfo = {
  maxTokens: 8192,
  contextWindow: 2e5,
  supportsImages: true,
  supportsPromptCache: true,
  inputPrice: 3,
  outputPrice: 15,
  cacheWritesPrice: 3.75,
  cacheReadsPrice: 0.3,
  description: "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and extended, step-by-step processing for complex tasks. The model demonstrates notable improvements in coding, particularly in front-end development and full-stack updates, and excels in agentic workflows, where it can autonomously navigate multi-step processes. Claude 3.7 Sonnet maintains performance parity with its predecessor in standard mode while offering an extended reasoning mode for enhanced accuracy in math, coding, and instruction-following tasks. Read more at the [blog post here](https://www.anthropic.com/news/claude-3-7-sonnet)"
};
var GLAMA_DEFAULT_TEMPERATURE = 0;

// src/providers/groq.ts
var groqDefaultModelId = "moonshotai/kimi-k2-instruct-0905";
var groqModels = {
  // Models based on API response: https://api.groq.com/openai/v1/models
  "llama-3.1-8b-instant": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.05,
    outputPrice: 0.08,
    description: "Meta Llama 3.1 8B Instant model, 128K context."
  },
  "llama-3.3-70b-versatile": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.59,
    outputPrice: 0.79,
    description: "Meta Llama 3.3 70B Versatile model, 128K context."
  },
  "meta-llama/llama-4-scout-17b-16e-instruct": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.11,
    outputPrice: 0.34,
    description: "Meta Llama 4 Scout 17B Instruct model, 128K context."
  },
  "meta-llama/llama-4-maverick-17b-128e-instruct": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.2,
    outputPrice: 0.6,
    description: "Meta Llama 4 Maverick 17B Instruct model, 128K context."
  },
  "mistral-saba-24b": {
    maxTokens: 8192,
    contextWindow: 32768,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.79,
    outputPrice: 0.79,
    description: "Mistral Saba 24B model, 32K context."
  },
  "qwen-qwq-32b": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.29,
    outputPrice: 0.39,
    description: "Alibaba Qwen QwQ 32B model, 128K context."
  },
  "qwen/qwen3-32b": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.29,
    outputPrice: 0.59,
    description: "Alibaba Qwen 3 32B model, 128K context."
  },
  "deepseek-r1-distill-llama-70b": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.75,
    outputPrice: 0.99,
    description: "DeepSeek R1 Distill Llama 70B model, 128K context."
  },
  "moonshotai/kimi-k2-instruct": {
    maxTokens: 16384,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 1,
    outputPrice: 3,
    cacheReadsPrice: 0.5,
    // 50% discount for cached input tokens
    description: "Moonshot AI Kimi K2 Instruct 1T model, 128K context."
  },
  "moonshotai/kimi-k2-instruct-0905": {
    maxTokens: 16384,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.6,
    outputPrice: 2.5,
    cacheReadsPrice: 0.15,
    description: "Kimi K2 model gets a new version update: Agentic coding: more accurate, better generalization across scaffolds. Frontend coding: improved aesthetics and functionalities on web, 3d, and other tasks. Context length: extended from 128k to 256k, providing better long-horizon support."
  },
  "openai/gpt-oss-120b": {
    maxTokens: 32766,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.15,
    outputPrice: 0.75,
    description: "GPT-OSS 120B is OpenAI's flagship open source model, built on a Mixture-of-Experts (MoE) architecture with 20 billion parameters and 128 experts."
  },
  "openai/gpt-oss-20b": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.1,
    outputPrice: 0.5,
    description: "GPT-OSS 20B is OpenAI's flagship open source model, built on a Mixture-of-Experts (MoE) architecture with 20 billion parameters and 32 experts."
  }
};

// src/providers/huggingface.ts
var HUGGINGFACE_DEFAULT_MAX_TOKENS = 2048;
var HUGGINGFACE_MAX_TOKENS_FALLBACK = 8192;
var HUGGINGFACE_DEFAULT_CONTEXT_WINDOW = 128e3;
var HUGGINGFACE_SLIDER_STEP = 256;
var HUGGINGFACE_SLIDER_MIN = 1;
var HUGGINGFACE_TEMPERATURE_MAX_VALUE = 2;
var HUGGINGFACE_API_URL = "https://router.huggingface.co/v1/models?collection=roocode";
var HUGGINGFACE_CACHE_DURATION = 1e3 * 60 * 60;

// src/providers/io-intelligence.ts
var ioIntelligenceDefaultModelId = "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8";
var ioIntelligenceDefaultBaseUrl = "https://api.intelligence.io.solutions/api/v1";
var IO_INTELLIGENCE_CACHE_DURATION = 1e3 * 60 * 60;
var ioIntelligenceModels = {
  "deepseek-ai/DeepSeek-R1-0528": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    description: "DeepSeek R1 reasoning model"
  },
  "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8": {
    maxTokens: 8192,
    contextWindow: 43e4,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    description: "Llama 4 Maverick 17B model"
  },
  "Intel/Qwen3-Coder-480B-A35B-Instruct-int4-mixed-ar": {
    maxTokens: 8192,
    contextWindow: 106e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    description: "Qwen3 Coder 480B specialized for coding"
  },
  "openai/gpt-oss-120b": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    description: "OpenAI GPT-OSS 120B model"
  }
};

// src/providers/lite-llm.ts
var litellmDefaultModelId = "claude-3-7-sonnet-20250219";
var litellmDefaultModelInfo = {
  maxTokens: 8192,
  contextWindow: 2e5,
  supportsImages: true,
  supportsPromptCache: true,
  supportsNativeTools: true,
  inputPrice: 3,
  outputPrice: 15,
  cacheWritesPrice: 3.75,
  cacheReadsPrice: 0.3
};

// src/providers/lm-studio.ts
var LMSTUDIO_DEFAULT_TEMPERATURE = 0;
var lMStudioDefaultModelId = "mistralai/devstral-small-2505";
var lMStudioDefaultModelInfo = {
  maxTokens: 8192,
  contextWindow: 2e5,
  supportsImages: true,
  supportsPromptCache: true,
  inputPrice: 0,
  outputPrice: 0,
  cacheWritesPrice: 0,
  cacheReadsPrice: 0,
  description: "LM Studio hosted models"
};

// src/providers/mistral.ts
var mistralDefaultModelId = "codestral-latest";
var mistralModels = {
  "magistral-medium-latest": {
    maxTokens: 8192,
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 2,
    outputPrice: 5
  },
  "devstral-medium-latest": {
    maxTokens: 8192,
    contextWindow: 131e3,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.4,
    outputPrice: 2
  },
  "mistral-medium-latest": {
    maxTokens: 8192,
    contextWindow: 131e3,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.4,
    outputPrice: 2
  },
  "codestral-latest": {
    maxTokens: 8192,
    contextWindow: 256e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.3,
    outputPrice: 0.9
  },
  "mistral-large-latest": {
    maxTokens: 8192,
    contextWindow: 131e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 2,
    outputPrice: 6
  },
  "ministral-8b-latest": {
    maxTokens: 8192,
    contextWindow: 131e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.1,
    outputPrice: 0.1
  },
  "ministral-3b-latest": {
    maxTokens: 8192,
    contextWindow: 131e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.04,
    outputPrice: 0.04
  },
  "mistral-small-latest": {
    maxTokens: 8192,
    contextWindow: 32e3,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.2,
    outputPrice: 0.6
  },
  "pixtral-large-latest": {
    maxTokens: 8192,
    contextWindow: 131e3,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 2,
    outputPrice: 6
  }
};
var MISTRAL_DEFAULT_TEMPERATURE = 1;

// src/providers/moonshot.ts
var moonshotDefaultModelId = "kimi-k2-0905-preview";
var moonshotModels = {
  "kimi-k2-0711-preview": {
    maxTokens: 32e3,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.6,
    // $0.60 per million tokens (cache miss)
    outputPrice: 2.5,
    // $2.50 per million tokens
    cacheWritesPrice: 0,
    // $0 per million tokens (cache miss)
    cacheReadsPrice: 0.15,
    // $0.15 per million tokens (cache hit)
    description: `Kimi K2 is a state-of-the-art mixture-of-experts (MoE) language model with 32 billion activated parameters and 1 trillion total parameters.`
  },
  "kimi-k2-0905-preview": {
    maxTokens: 16384,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.6,
    outputPrice: 2.5,
    cacheReadsPrice: 0.15,
    description: "Kimi K2 model gets a new version update: Agentic coding: more accurate, better generalization across scaffolds. Frontend coding: improved aesthetics and functionalities on web, 3d, and other tasks. Context length: extended from 128k to 256k, providing better long-horizon support."
  },
  "kimi-k2-turbo-preview": {
    maxTokens: 32e3,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 2.4,
    // $2.40 per million tokens (cache miss)
    outputPrice: 10,
    // $10.00 per million tokens
    cacheWritesPrice: 0,
    // $0 per million tokens (cache miss)
    cacheReadsPrice: 0.6,
    // $0.60 per million tokens (cache hit)
    description: `Kimi K2 Turbo is a high-speed version of the state-of-the-art Kimi K2 mixture-of-experts (MoE) language model, with the same 32 billion activated parameters and 1 trillion total parameters, optimized for output speeds of up to 60 tokens per second, peaking at 100 tokens per second.`
  },
  "kimi-k2-thinking": {
    maxTokens: 16e3,
    // Recommended ≥ 16,000
    contextWindow: 262144,
    // 262,144 tokens
    supportsImages: false,
    // Text-only (no image/vision support)
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.6,
    // $0.60 per million tokens (cache miss)
    outputPrice: 2.5,
    // $2.50 per million tokens
    cacheWritesPrice: 0,
    // $0 per million tokens (cache miss)
    cacheReadsPrice: 0.15,
    // $0.15 per million tokens (cache hit)
    supportsTemperature: true,
    // Default temperature: 1.0
    preserveReasoning: true,
    defaultTemperature: 1,
    description: `The kimi-k2-thinking model is a general-purpose agentic reasoning model developed by Moonshot AI. Thanks to its strength in deep reasoning and multi-turn tool use, it can solve even the hardest problems.`
  }
};
var MOONSHOT_DEFAULT_TEMPERATURE = 0.6;

// src/providers/ollama.ts
var ollamaDefaultModelId = "devstral:24b";
var ollamaDefaultModelInfo = {
  maxTokens: 4096,
  contextWindow: 2e5,
  supportsImages: true,
  supportsPromptCache: true,
  supportsNativeTools: true,
  inputPrice: 0,
  outputPrice: 0,
  cacheWritesPrice: 0,
  cacheReadsPrice: 0,
  description: "Ollama hosted models"
};

// src/providers/openai.ts
var openAiNativeDefaultModelId = "gpt-5.1";
var openAiNativeModels = {
  "gpt-5.1": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    promptCacheRetention: "24h",
    supportsReasoningEffort: ["none", "low", "medium", "high"],
    reasoningEffort: "medium",
    inputPrice: 1.25,
    outputPrice: 10,
    cacheReadsPrice: 0.125,
    supportsVerbosity: true,
    supportsTemperature: false,
    tiers: [
      { name: "flex", contextWindow: 4e5, inputPrice: 0.625, outputPrice: 5, cacheReadsPrice: 0.0625 },
      { name: "priority", contextWindow: 4e5, inputPrice: 2.5, outputPrice: 20, cacheReadsPrice: 0.25 }
    ],
    description: "GPT-5.1: The best model for coding and agentic tasks across domains"
  },
  "gpt-5.1-codex": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    promptCacheRetention: "24h",
    supportsReasoningEffort: ["low", "medium", "high"],
    reasoningEffort: "medium",
    inputPrice: 1.25,
    outputPrice: 10,
    cacheReadsPrice: 0.125,
    supportsTemperature: false,
    tiers: [{ name: "priority", contextWindow: 4e5, inputPrice: 2.5, outputPrice: 20, cacheReadsPrice: 0.25 }],
    description: "GPT-5.1 Codex: A version of GPT-5.1 optimized for agentic coding in Codex"
  },
  "gpt-5.1-codex-mini": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    promptCacheRetention: "24h",
    supportsReasoningEffort: ["low", "medium", "high"],
    reasoningEffort: "medium",
    inputPrice: 0.25,
    outputPrice: 2,
    cacheReadsPrice: 0.025,
    supportsTemperature: false,
    description: "GPT-5.1 Codex mini: A version of GPT-5.1 optimized for agentic coding in Codex"
  },
  "gpt-5": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningEffort: ["minimal", "low", "medium", "high"],
    reasoningEffort: "medium",
    inputPrice: 1.25,
    outputPrice: 10,
    cacheReadsPrice: 0.125,
    supportsVerbosity: true,
    supportsTemperature: false,
    tiers: [
      { name: "flex", contextWindow: 4e5, inputPrice: 0.625, outputPrice: 5, cacheReadsPrice: 0.0625 },
      { name: "priority", contextWindow: 4e5, inputPrice: 2.5, outputPrice: 20, cacheReadsPrice: 0.25 }
    ],
    description: "GPT-5: The best model for coding and agentic tasks across domains"
  },
  "gpt-5-mini": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningEffort: ["minimal", "low", "medium", "high"],
    reasoningEffort: "medium",
    inputPrice: 0.25,
    outputPrice: 2,
    cacheReadsPrice: 0.025,
    supportsVerbosity: true,
    supportsTemperature: false,
    tiers: [
      { name: "flex", contextWindow: 4e5, inputPrice: 0.125, outputPrice: 1, cacheReadsPrice: 0.0125 },
      { name: "priority", contextWindow: 4e5, inputPrice: 0.45, outputPrice: 3.6, cacheReadsPrice: 0.045 }
    ],
    description: "GPT-5 Mini: A faster, more cost-efficient version of GPT-5 for well-defined tasks"
  },
  "gpt-5-codex": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningEffort: ["low", "medium", "high"],
    reasoningEffort: "medium",
    inputPrice: 1.25,
    outputPrice: 10,
    cacheReadsPrice: 0.125,
    supportsTemperature: false,
    tiers: [{ name: "priority", contextWindow: 4e5, inputPrice: 2.5, outputPrice: 20, cacheReadsPrice: 0.25 }],
    description: "GPT-5-Codex: A version of GPT-5 optimized for agentic coding in Codex"
  },
  "gpt-5-nano": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningEffort: ["minimal", "low", "medium", "high"],
    reasoningEffort: "medium",
    inputPrice: 0.05,
    outputPrice: 0.4,
    cacheReadsPrice: 5e-3,
    supportsVerbosity: true,
    supportsTemperature: false,
    tiers: [{ name: "flex", contextWindow: 4e5, inputPrice: 0.025, outputPrice: 0.2, cacheReadsPrice: 25e-4 }],
    description: "GPT-5 Nano: Fastest, most cost-efficient version of GPT-5"
  },
  "gpt-5-chat-latest": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 1.25,
    outputPrice: 10,
    cacheReadsPrice: 0.125,
    description: "GPT-5 Chat: Optimized for conversational AI and non-reasoning tasks"
  },
  "gpt-4.1": {
    maxTokens: 32768,
    contextWindow: 1047576,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 2,
    outputPrice: 8,
    cacheReadsPrice: 0.5,
    supportsTemperature: true,
    tiers: [
      { name: "priority", contextWindow: 1047576, inputPrice: 3.5, outputPrice: 14, cacheReadsPrice: 0.875 }
    ]
  },
  "gpt-4.1-mini": {
    maxTokens: 32768,
    contextWindow: 1047576,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 0.4,
    outputPrice: 1.6,
    cacheReadsPrice: 0.1,
    supportsTemperature: true,
    tiers: [
      { name: "priority", contextWindow: 1047576, inputPrice: 0.7, outputPrice: 2.8, cacheReadsPrice: 0.175 }
    ]
  },
  "gpt-4.1-nano": {
    maxTokens: 32768,
    contextWindow: 1047576,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 0.1,
    outputPrice: 0.4,
    cacheReadsPrice: 0.025,
    supportsTemperature: true,
    tiers: [
      { name: "priority", contextWindow: 1047576, inputPrice: 0.2, outputPrice: 0.8, cacheReadsPrice: 0.05 }
    ]
  },
  o3: {
    maxTokens: 1e5,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 2,
    outputPrice: 8,
    cacheReadsPrice: 0.5,
    supportsReasoningEffort: ["low", "medium", "high"],
    reasoningEffort: "medium",
    supportsTemperature: false,
    tiers: [
      { name: "flex", contextWindow: 2e5, inputPrice: 1, outputPrice: 4, cacheReadsPrice: 0.25 },
      { name: "priority", contextWindow: 2e5, inputPrice: 3.5, outputPrice: 14, cacheReadsPrice: 0.875 }
    ]
  },
  "o3-high": {
    maxTokens: 1e5,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 2,
    outputPrice: 8,
    cacheReadsPrice: 0.5,
    reasoningEffort: "high",
    supportsTemperature: false
  },
  "o3-low": {
    maxTokens: 1e5,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 2,
    outputPrice: 8,
    cacheReadsPrice: 0.5,
    reasoningEffort: "low",
    supportsTemperature: false
  },
  "o4-mini": {
    maxTokens: 1e5,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 1.1,
    outputPrice: 4.4,
    cacheReadsPrice: 0.275,
    supportsReasoningEffort: ["low", "medium", "high"],
    reasoningEffort: "medium",
    supportsTemperature: false,
    tiers: [
      { name: "flex", contextWindow: 2e5, inputPrice: 0.55, outputPrice: 2.2, cacheReadsPrice: 0.138 },
      { name: "priority", contextWindow: 2e5, inputPrice: 2, outputPrice: 8, cacheReadsPrice: 0.5 }
    ]
  },
  "o4-mini-high": {
    maxTokens: 1e5,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 1.1,
    outputPrice: 4.4,
    cacheReadsPrice: 0.275,
    reasoningEffort: "high",
    supportsTemperature: false
  },
  "o4-mini-low": {
    maxTokens: 1e5,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 1.1,
    outputPrice: 4.4,
    cacheReadsPrice: 0.275,
    reasoningEffort: "low",
    supportsTemperature: false
  },
  "o3-mini": {
    maxTokens: 1e5,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 1.1,
    outputPrice: 4.4,
    cacheReadsPrice: 0.55,
    supportsReasoningEffort: ["low", "medium", "high"],
    reasoningEffort: "medium",
    supportsTemperature: false
  },
  "o3-mini-high": {
    maxTokens: 1e5,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 1.1,
    outputPrice: 4.4,
    cacheReadsPrice: 0.55,
    reasoningEffort: "high",
    supportsTemperature: false
  },
  "o3-mini-low": {
    maxTokens: 1e5,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 1.1,
    outputPrice: 4.4,
    cacheReadsPrice: 0.55,
    reasoningEffort: "low",
    supportsTemperature: false
  },
  o1: {
    maxTokens: 1e5,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 15,
    outputPrice: 60,
    cacheReadsPrice: 7.5,
    supportsTemperature: false
  },
  "o1-preview": {
    maxTokens: 32768,
    contextWindow: 128e3,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 15,
    outputPrice: 60,
    cacheReadsPrice: 7.5,
    supportsTemperature: false
  },
  "o1-mini": {
    maxTokens: 65536,
    contextWindow: 128e3,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 1.1,
    outputPrice: 4.4,
    cacheReadsPrice: 0.55,
    supportsTemperature: false
  },
  "gpt-4o": {
    maxTokens: 16384,
    contextWindow: 128e3,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 2.5,
    outputPrice: 10,
    cacheReadsPrice: 1.25,
    supportsTemperature: true,
    tiers: [
      { name: "priority", contextWindow: 128e3, inputPrice: 4.25, outputPrice: 17, cacheReadsPrice: 2.125 }
    ]
  },
  "gpt-4o-mini": {
    maxTokens: 16384,
    contextWindow: 128e3,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 0.15,
    outputPrice: 0.6,
    cacheReadsPrice: 0.075,
    supportsTemperature: true,
    tiers: [
      { name: "priority", contextWindow: 128e3, inputPrice: 0.25, outputPrice: 1, cacheReadsPrice: 0.125 }
    ]
  },
  "codex-mini-latest": {
    maxTokens: 16384,
    contextWindow: 2e5,
    supportsNativeTools: true,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 1.5,
    outputPrice: 6,
    cacheReadsPrice: 0.375,
    supportsTemperature: false,
    description: "Codex Mini: Cloud-based software engineering agent powered by codex-1, a version of o3 optimized for coding tasks. Trained with reinforcement learning to generate human-style code, adhere to instructions, and iteratively run tests."
  },
  // Dated clones (snapshots) preserved for backward compatibility
  "gpt-5-2025-08-07": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningEffort: ["minimal", "low", "medium", "high"],
    reasoningEffort: "medium",
    inputPrice: 1.25,
    outputPrice: 10,
    cacheReadsPrice: 0.125,
    supportsVerbosity: true,
    supportsTemperature: false,
    tiers: [
      { name: "flex", contextWindow: 4e5, inputPrice: 0.625, outputPrice: 5, cacheReadsPrice: 0.0625 },
      { name: "priority", contextWindow: 4e5, inputPrice: 2.5, outputPrice: 20, cacheReadsPrice: 0.25 }
    ],
    description: "GPT-5: The best model for coding and agentic tasks across domains"
  },
  "gpt-5-mini-2025-08-07": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningEffort: ["minimal", "low", "medium", "high"],
    reasoningEffort: "medium",
    inputPrice: 0.25,
    outputPrice: 2,
    cacheReadsPrice: 0.025,
    supportsVerbosity: true,
    supportsTemperature: false,
    tiers: [
      { name: "flex", contextWindow: 4e5, inputPrice: 0.125, outputPrice: 1, cacheReadsPrice: 0.0125 },
      { name: "priority", contextWindow: 4e5, inputPrice: 0.45, outputPrice: 3.6, cacheReadsPrice: 0.045 }
    ],
    description: "GPT-5 Mini: A faster, more cost-efficient version of GPT-5 for well-defined tasks"
  },
  "gpt-5-nano-2025-08-07": {
    maxTokens: 128e3,
    contextWindow: 4e5,
    supportsNativeTools: true,
    supportsImages: true,
    supportsPromptCache: true,
    supportsReasoningEffort: ["minimal", "low", "medium", "high"],
    reasoningEffort: "medium",
    inputPrice: 0.05,
    outputPrice: 0.4,
    cacheReadsPrice: 5e-3,
    supportsVerbosity: true,
    supportsTemperature: false,
    tiers: [{ name: "flex", contextWindow: 4e5, inputPrice: 0.025, outputPrice: 0.2, cacheReadsPrice: 25e-4 }],
    description: "GPT-5 Nano: Fastest, most cost-efficient version of GPT-5"
  }
};
var openAiModelInfoSaneDefaults = {
  maxTokens: -1,
  contextWindow: 128e3,
  supportsImages: true,
  supportsPromptCache: false,
  inputPrice: 0,
  outputPrice: 0,
  supportsNativeTools: true
};
var azureOpenAiDefaultApiVersion = "2024-08-01-preview";
var OPENAI_NATIVE_DEFAULT_TEMPERATURE = 0;
var OPENAI_AZURE_AI_INFERENCE_PATH = "/models/chat/completions";

// src/providers/openrouter.ts
var openRouterDefaultModelId = "anthropic/claude-sonnet-4.5";
var openRouterDefaultModelInfo = {
  maxTokens: 8192,
  contextWindow: 2e5,
  supportsImages: true,
  supportsPromptCache: true,
  supportsNativeTools: true,
  inputPrice: 3,
  outputPrice: 15,
  cacheWritesPrice: 3.75,
  cacheReadsPrice: 0.3,
  description: "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and extended, step-by-step processing for complex tasks. The model demonstrates notable improvements in coding, particularly in front-end development and full-stack updates, and excels in agentic workflows, where it can autonomously navigate multi-step processes. Claude 3.7 Sonnet maintains performance parity with its predecessor in standard mode while offering an extended reasoning mode for enhanced accuracy in math, coding, and instruction-following tasks. Read more at the [blog post here](https://www.anthropic.com/news/claude-3-7-sonnet)"
};
var OPENROUTER_DEFAULT_PROVIDER_NAME = "[default]";
var OPEN_ROUTER_PROMPT_CACHING_MODELS = /* @__PURE__ */ new Set([
  "anthropic/claude-3-haiku",
  "anthropic/claude-3-haiku:beta",
  "anthropic/claude-3-opus",
  "anthropic/claude-3-opus:beta",
  "anthropic/claude-3-sonnet",
  "anthropic/claude-3-sonnet:beta",
  "anthropic/claude-3.5-haiku",
  "anthropic/claude-3.5-haiku-20241022",
  "anthropic/claude-3.5-haiku-20241022:beta",
  "anthropic/claude-3.5-haiku:beta",
  "anthropic/claude-3.5-sonnet",
  "anthropic/claude-3.5-sonnet-20240620",
  "anthropic/claude-3.5-sonnet-20240620:beta",
  "anthropic/claude-3.5-sonnet:beta",
  "anthropic/claude-3.7-sonnet",
  "anthropic/claude-3.7-sonnet:beta",
  "anthropic/claude-3.7-sonnet:thinking",
  "anthropic/claude-sonnet-4",
  "anthropic/claude-sonnet-4.5",
  "anthropic/claude-opus-4",
  "anthropic/claude-opus-4.1",
  "anthropic/claude-haiku-4.5",
  "anthropic/claude-opus-4.5",
  "google/gemini-2.5-flash-preview",
  "google/gemini-2.5-flash-preview:thinking",
  "google/gemini-2.5-flash-preview-05-20",
  "google/gemini-2.5-flash-preview-05-20:thinking",
  "google/gemini-2.5-flash",
  "google/gemini-2.5-flash-lite-preview-06-17",
  "google/gemini-2.0-flash-001",
  "google/gemini-flash-1.5",
  "google/gemini-flash-1.5-8b"
]);
var OPEN_ROUTER_REQUIRED_REASONING_BUDGET_MODELS = /* @__PURE__ */ new Set([
  "anthropic/claude-3.7-sonnet:thinking",
  "google/gemini-2.5-pro",
  "google/gemini-2.5-flash-preview-05-20:thinking"
]);
var OPEN_ROUTER_REASONING_BUDGET_MODELS = /* @__PURE__ */ new Set([
  "anthropic/claude-3.7-sonnet:beta",
  "anthropic/claude-opus-4",
  "anthropic/claude-opus-4.1",
  "anthropic/claude-sonnet-4",
  "anthropic/claude-sonnet-4.5",
  "anthropic/claude-opus-4.5",
  "anthropic/claude-haiku-4.5",
  "google/gemini-2.5-pro-preview",
  "google/gemini-2.5-pro",
  "google/gemini-2.5-flash-preview-05-20",
  "google/gemini-2.5-flash",
  "google/gemini-2.5-flash-lite-preview-06-17",
  // Also include the models that require the reasoning budget to be enabled
  // even though `OPEN_ROUTER_REQUIRED_REASONING_BUDGET_MODELS` takes precedence.
  "anthropic/claude-3.7-sonnet:thinking",
  "google/gemini-2.5-flash-preview-05-20:thinking"
]);

// src/providers/qwen-code.ts
var qwenCodeDefaultModelId = "qwen3-coder-plus";
var qwenCodeModels = {
  "qwen3-coder-plus": {
    maxTokens: 65536,
    contextWindow: 1e6,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Qwen3 Coder Plus - High-performance coding model with 1M context window for large codebases"
  },
  "qwen3-coder-flash": {
    maxTokens: 65536,
    contextWindow: 1e6,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "Qwen3 Coder Flash - Fast coding model with 1M context window optimized for speed"
  }
};

// src/providers/requesty.ts
var requestyDefaultModelId = "coding/claude-4-sonnet";
var requestyDefaultModelInfo = {
  maxTokens: 8192,
  contextWindow: 2e5,
  supportsImages: true,
  supportsPromptCache: true,
  inputPrice: 3,
  outputPrice: 15,
  cacheWritesPrice: 3.75,
  cacheReadsPrice: 0.3,
  description: "The best coding model, optimized by Requesty, and automatically routed to the fastest provider. Claude 4 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities."
};

// src/providers/roo.ts
var import_zod7 = require("zod");
var rooDefaultModelId = "xai/grok-code-fast-1";
var rooModels = {};
var RooPricingSchema = import_zod7.z.object({
  input: import_zod7.z.string(),
  output: import_zod7.z.string(),
  input_cache_read: import_zod7.z.string().optional(),
  input_cache_write: import_zod7.z.string().optional()
});
var RooModelSchema = import_zod7.z.object({
  id: import_zod7.z.string(),
  object: import_zod7.z.literal("model"),
  created: import_zod7.z.number(),
  owned_by: import_zod7.z.string(),
  name: import_zod7.z.string(),
  description: import_zod7.z.string(),
  context_window: import_zod7.z.number(),
  max_tokens: import_zod7.z.number(),
  type: import_zod7.z.literal("language"),
  tags: import_zod7.z.array(import_zod7.z.string()).optional(),
  pricing: RooPricingSchema,
  deprecated: import_zod7.z.boolean().optional()
});
var RooModelsResponseSchema = import_zod7.z.object({
  object: import_zod7.z.literal("list"),
  data: import_zod7.z.array(RooModelSchema)
});

// src/providers/sambanova.ts
var sambaNovaDefaultModelId = "Meta-Llama-3.3-70B-Instruct";
var sambaNovaModels = {
  "Meta-Llama-3.1-8B-Instruct": {
    maxTokens: 8192,
    contextWindow: 16384,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.1,
    outputPrice: 0.2,
    description: "Meta Llama 3.1 8B Instruct model with 16K context window."
  },
  "Meta-Llama-3.3-70B-Instruct": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.6,
    outputPrice: 1.2,
    description: "Meta Llama 3.3 70B Instruct model with 128K context window."
  },
  "DeepSeek-R1": {
    maxTokens: 8192,
    contextWindow: 32768,
    supportsImages: false,
    supportsPromptCache: false,
    supportsReasoningBudget: true,
    supportsNativeTools: true,
    inputPrice: 5,
    outputPrice: 7,
    description: "DeepSeek R1 reasoning model with 32K context window."
  },
  "DeepSeek-V3-0324": {
    maxTokens: 8192,
    contextWindow: 32768,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 4.5,
    description: "DeepSeek V3 model with 32K context window."
  },
  "DeepSeek-V3.1": {
    maxTokens: 8192,
    contextWindow: 32768,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 4.5,
    description: "DeepSeek V3.1 model with 32K context window."
  },
  "DeepSeek-R1-Distill-Llama-70B": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.7,
    outputPrice: 1.4,
    description: "DeepSeek R1 distilled Llama 70B model with 128K context window."
  },
  "Llama-4-Maverick-17B-128E-Instruct": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.63,
    outputPrice: 1.8,
    description: "Meta Llama 4 Maverick 17B 128E Instruct model with 128K context window."
  },
  "Llama-3.3-Swallow-70B-Instruct-v0.4": {
    maxTokens: 8192,
    contextWindow: 16384,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.6,
    outputPrice: 1.2,
    description: "Tokyotech Llama 3.3 Swallow 70B Instruct v0.4 model with 16K context window."
  },
  "Qwen3-32B": {
    maxTokens: 8192,
    contextWindow: 8192,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.4,
    outputPrice: 0.8,
    description: "Alibaba Qwen 3 32B model with 8K context window."
  },
  "gpt-oss-120b": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.22,
    outputPrice: 0.59,
    description: "OpenAI gpt oss 120b model with 128k context window."
  }
};

// src/providers/unbound.ts
var unboundDefaultModelId = "anthropic/claude-sonnet-4-5";
var unboundDefaultModelInfo = {
  maxTokens: 8192,
  contextWindow: 2e5,
  supportsImages: true,
  supportsPromptCache: true,
  supportsNativeTools: true,
  inputPrice: 3,
  outputPrice: 15,
  cacheWritesPrice: 3.75,
  cacheReadsPrice: 0.3
};

// src/providers/vertex.ts
var vertexDefaultModelId = "claude-sonnet-4-5@20250929";
var vertexModels = {
  "gemini-3-pro-preview": {
    maxTokens: 65536,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    supportsReasoningEffort: ["low", "high"],
    reasoningEffort: "low",
    supportsTemperature: true,
    defaultTemperature: 1,
    inputPrice: 4,
    outputPrice: 18,
    tiers: [
      {
        contextWindow: 2e5,
        inputPrice: 2,
        outputPrice: 12
      },
      {
        contextWindow: Infinity,
        inputPrice: 4,
        outputPrice: 18
      }
    ]
  },
  "gemini-2.5-flash-preview-05-20:thinking": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.15,
    outputPrice: 3.5,
    maxThinkingTokens: 24576,
    supportsReasoningBudget: true,
    requiredReasoningBudget: true
  },
  "gemini-2.5-flash-preview-05-20": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.15,
    outputPrice: 0.6
  },
  "gemini-2.5-flash": {
    maxTokens: 64e3,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.3,
    outputPrice: 2.5,
    cacheReadsPrice: 0.075,
    cacheWritesPrice: 1,
    maxThinkingTokens: 24576,
    supportsReasoningBudget: true
  },
  "gemini-2.5-flash-preview-04-17:thinking": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: false,
    inputPrice: 0.15,
    outputPrice: 3.5,
    maxThinkingTokens: 24576,
    supportsReasoningBudget: true,
    requiredReasoningBudget: true
  },
  "gemini-2.5-flash-preview-04-17": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: false,
    inputPrice: 0.15,
    outputPrice: 0.6
  },
  "gemini-2.5-pro-preview-03-25": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 2.5,
    outputPrice: 15
  },
  "gemini-2.5-pro-preview-05-06": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 2.5,
    outputPrice: 15
  },
  "gemini-2.5-pro-preview-06-05": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 2.5,
    outputPrice: 15,
    maxThinkingTokens: 32768,
    supportsReasoningBudget: true
  },
  "gemini-2.5-pro": {
    maxTokens: 64e3,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 2.5,
    outputPrice: 15,
    maxThinkingTokens: 32768,
    supportsReasoningBudget: true,
    requiredReasoningBudget: true,
    tiers: [
      {
        contextWindow: 2e5,
        inputPrice: 1.25,
        outputPrice: 10,
        cacheReadsPrice: 0.31
      },
      {
        contextWindow: Infinity,
        inputPrice: 2.5,
        outputPrice: 15,
        cacheReadsPrice: 0.625
      }
    ]
  },
  "gemini-2.5-pro-exp-03-25": {
    maxTokens: 65535,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0
  },
  "gemini-2.0-pro-exp-02-05": {
    maxTokens: 8192,
    contextWindow: 2097152,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0
  },
  "gemini-2.0-flash-001": {
    maxTokens: 8192,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.15,
    outputPrice: 0.6
  },
  "gemini-2.0-flash-lite-001": {
    maxTokens: 8192,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: false,
    inputPrice: 0.075,
    outputPrice: 0.3
  },
  "gemini-2.0-flash-thinking-exp-01-21": {
    maxTokens: 8192,
    contextWindow: 32768,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0
  },
  "gemini-1.5-flash-002": {
    maxTokens: 8192,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.075,
    outputPrice: 0.3
  },
  "gemini-1.5-pro-002": {
    maxTokens: 8192,
    contextWindow: 2097152,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: false,
    inputPrice: 1.25,
    outputPrice: 5
  },
  "claude-sonnet-4@20250514": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 3.75,
    cacheReadsPrice: 0.3,
    supportsReasoningBudget: true
  },
  "claude-sonnet-4-5@20250929": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 3.75,
    cacheReadsPrice: 0.3,
    supportsReasoningBudget: true
  },
  "claude-haiku-4-5@20251001": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 1,
    outputPrice: 5,
    cacheWritesPrice: 1.25,
    cacheReadsPrice: 0.1,
    supportsReasoningBudget: true
  },
  "claude-opus-4-5@20251101": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 5,
    outputPrice: 25,
    cacheWritesPrice: 6.25,
    cacheReadsPrice: 0.5,
    supportsReasoningBudget: true
  },
  "claude-opus-4-1@20250805": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 15,
    outputPrice: 75,
    cacheWritesPrice: 18.75,
    cacheReadsPrice: 1.5,
    supportsReasoningBudget: true
  },
  "claude-opus-4@20250514": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 15,
    outputPrice: 75,
    cacheWritesPrice: 18.75,
    cacheReadsPrice: 1.5
  },
  "claude-3-7-sonnet@20250219:thinking": {
    maxTokens: 64e3,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 3.75,
    cacheReadsPrice: 0.3,
    supportsReasoningBudget: true,
    requiredReasoningBudget: true
  },
  "claude-3-7-sonnet@20250219": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 3.75,
    cacheReadsPrice: 0.3
  },
  "claude-3-5-sonnet-v2@20241022": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 3.75,
    cacheReadsPrice: 0.3
  },
  "claude-3-5-sonnet@20240620": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 3.75,
    cacheReadsPrice: 0.3
  },
  "claude-3-5-haiku@20241022": {
    maxTokens: 8192,
    contextWindow: 2e5,
    supportsImages: false,
    supportsPromptCache: true,
    inputPrice: 1,
    outputPrice: 5,
    cacheWritesPrice: 1.25,
    cacheReadsPrice: 0.1
  },
  "claude-3-opus@20240229": {
    maxTokens: 4096,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 15,
    outputPrice: 75,
    cacheWritesPrice: 18.75,
    cacheReadsPrice: 1.5
  },
  "claude-3-haiku@20240307": {
    maxTokens: 4096,
    contextWindow: 2e5,
    supportsImages: true,
    supportsPromptCache: true,
    inputPrice: 0.25,
    outputPrice: 1.25,
    cacheWritesPrice: 0.3,
    cacheReadsPrice: 0.03
  },
  "gemini-2.5-flash-lite-preview-06-17": {
    maxTokens: 64e3,
    contextWindow: 1048576,
    supportsImages: true,
    supportsNativeTools: true,
    supportsPromptCache: true,
    inputPrice: 0.1,
    outputPrice: 0.4,
    cacheReadsPrice: 0.025,
    cacheWritesPrice: 1,
    maxThinkingTokens: 24576,
    supportsReasoningBudget: true
  },
  "llama-4-maverick-17b-128e-instruct-maas": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.35,
    outputPrice: 1.15,
    description: "Meta Llama 4 Maverick 17B Instruct model, 128K context."
  },
  "deepseek-r1-0528-maas": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 1.35,
    outputPrice: 5.4,
    description: "DeepSeek R1 (0528). Available in us-central1"
  },
  "deepseek-v3.1-maas": {
    maxTokens: 32768,
    contextWindow: 163840,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.6,
    outputPrice: 1.7,
    description: "DeepSeek V3.1. Available in us-west2"
  },
  "gpt-oss-120b-maas": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.15,
    outputPrice: 0.6,
    description: "OpenAI gpt-oss 120B. Available in us-central1"
  },
  "gpt-oss-20b-maas": {
    maxTokens: 32768,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.075,
    outputPrice: 0.3,
    description: "OpenAI gpt-oss 20B. Available in us-central1"
  },
  "qwen3-coder-480b-a35b-instruct-maas": {
    maxTokens: 32768,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 1,
    outputPrice: 4,
    description: "Qwen3 Coder 480B A35B Instruct. Available in us-south1"
  },
  "qwen3-235b-a22b-instruct-2507-maas": {
    maxTokens: 16384,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0.25,
    outputPrice: 1,
    description: "Qwen3 235B A22B Instruct. Available in us-south1"
  }
};
var VERTEX_REGIONS = [
  { value: "global", label: "global" },
  { value: "us-central1", label: "us-central1" },
  { value: "us-east1", label: "us-east1" },
  { value: "us-east4", label: "us-east4" },
  { value: "us-east5", label: "us-east5" },
  { value: "us-south1", label: "us-south1" },
  { value: "us-west1", label: "us-west1" },
  { value: "us-west2", label: "us-west2" },
  { value: "us-west3", label: "us-west3" },
  { value: "us-west4", label: "us-west4" },
  { value: "northamerica-northeast1", label: "northamerica-northeast1" },
  { value: "northamerica-northeast2", label: "northamerica-northeast2" },
  { value: "southamerica-east1", label: "southamerica-east1" },
  { value: "europe-west1", label: "europe-west1" },
  { value: "europe-west2", label: "europe-west2" },
  { value: "europe-west3", label: "europe-west3" },
  { value: "europe-west4", label: "europe-west4" },
  { value: "europe-west6", label: "europe-west6" },
  { value: "europe-central2", label: "europe-central2" },
  { value: "asia-east1", label: "asia-east1" },
  { value: "asia-east2", label: "asia-east2" },
  { value: "asia-northeast1", label: "asia-northeast1" },
  { value: "asia-northeast2", label: "asia-northeast2" },
  { value: "asia-northeast3", label: "asia-northeast3" },
  { value: "asia-south1", label: "asia-south1" },
  { value: "asia-south2", label: "asia-south2" },
  { value: "asia-southeast1", label: "asia-southeast1" },
  { value: "asia-southeast2", label: "asia-southeast2" },
  { value: "australia-southeast1", label: "australia-southeast1" },
  { value: "australia-southeast2", label: "australia-southeast2" },
  { value: "me-west1", label: "me-west1" },
  { value: "me-central1", label: "me-central1" },
  { value: "africa-south1", label: "africa-south1" }
];

// src/providers/vscode-llm.ts
var vscodeLlmDefaultModelId = "claude-3.5-sonnet";
var vscodeLlmModels = {
  "gpt-3.5-turbo": {
    contextWindow: 12114,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "gpt-3.5-turbo",
    version: "gpt-3.5-turbo-0613",
    name: "GPT 3.5 Turbo",
    supportsToolCalling: true,
    maxInputTokens: 12114
  },
  "gpt-4o-mini": {
    contextWindow: 12115,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "gpt-4o-mini",
    version: "gpt-4o-mini-2024-07-18",
    name: "GPT-4o mini",
    supportsToolCalling: true,
    maxInputTokens: 12115
  },
  "gpt-4": {
    contextWindow: 28501,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "gpt-4",
    version: "gpt-4-0613",
    name: "GPT 4",
    supportsToolCalling: true,
    maxInputTokens: 28501
  },
  "gpt-4-0125-preview": {
    contextWindow: 63826,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "gpt-4-turbo",
    version: "gpt-4-0125-preview",
    name: "GPT 4 Turbo",
    supportsToolCalling: true,
    maxInputTokens: 63826
  },
  "gpt-4o": {
    contextWindow: 63827,
    supportsImages: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "gpt-4o",
    version: "gpt-4o-2024-11-20",
    name: "GPT-4o",
    supportsToolCalling: true,
    maxInputTokens: 63827
  },
  o1: {
    contextWindow: 19827,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "o1-ga",
    version: "o1-2024-12-17",
    name: "o1 (Preview)",
    supportsToolCalling: true,
    maxInputTokens: 19827
  },
  "o3-mini": {
    contextWindow: 63827,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "o3-mini",
    version: "o3-mini-2025-01-31",
    name: "o3-mini",
    supportsToolCalling: true,
    maxInputTokens: 63827
  },
  "claude-3.5-sonnet": {
    contextWindow: 81638,
    supportsImages: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "claude-3.5-sonnet",
    version: "claude-3.5-sonnet",
    name: "Claude 3.5 Sonnet",
    supportsToolCalling: true,
    maxInputTokens: 81638
  },
  "claude-4-sonnet": {
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "claude-sonnet-4",
    version: "claude-sonnet-4",
    name: "Claude Sonnet 4",
    supportsToolCalling: true,
    maxInputTokens: 111836
  },
  "gemini-2.0-flash-001": {
    contextWindow: 127827,
    supportsImages: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "gemini-2.0-flash",
    version: "gemini-2.0-flash-001",
    name: "Gemini 2.0 Flash",
    supportsToolCalling: false,
    maxInputTokens: 127827
  },
  "gemini-2.5-pro": {
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "gemini-2.5-pro",
    version: "gemini-2.5-pro-preview-03-25",
    name: "Gemini 2.5 Pro (Preview)",
    supportsToolCalling: true,
    maxInputTokens: 108637
  },
  "o4-mini": {
    contextWindow: 128e3,
    supportsImages: false,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "o4-mini",
    version: "o4-mini-2025-04-16",
    name: "o4-mini (Preview)",
    supportsToolCalling: true,
    maxInputTokens: 111452
  },
  "gpt-4.1": {
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "gpt-4.1",
    version: "gpt-4.1-2025-04-14",
    name: "GPT-4.1 (Preview)",
    supportsToolCalling: true,
    maxInputTokens: 111452
  },
  "gpt-5-mini": {
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "gpt-5-mini",
    version: "gpt-5-mini",
    name: "GPT-5 mini (Preview)",
    supportsToolCalling: true,
    maxInputTokens: 108637
  },
  "gpt-5": {
    contextWindow: 128e3,
    supportsImages: true,
    supportsPromptCache: false,
    inputPrice: 0,
    outputPrice: 0,
    family: "gpt-5",
    version: "gpt-5",
    name: "GPT-5 (Preview)",
    supportsToolCalling: true,
    maxInputTokens: 108637
  }
};

// src/providers/xai.ts
var xaiDefaultModelId = "grok-code-fast-1";
var xaiModels = {
  "grok-code-fast-1": {
    maxTokens: 16384,
    contextWindow: 262144,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.2,
    outputPrice: 1.5,
    cacheWritesPrice: 0.02,
    cacheReadsPrice: 0.02,
    description: "xAI's Grok Code Fast model with 256K context window"
  },
  "grok-4-1-fast-reasoning": {
    maxTokens: 65536,
    contextWindow: 2e6,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.2,
    outputPrice: 0.5,
    cacheWritesPrice: 0.05,
    cacheReadsPrice: 0.05,
    description: "xAI's Grok 4.1 Fast model with 2M context window, optimized for high-performance agentic tool calling with reasoning"
  },
  "grok-4-1-fast-non-reasoning": {
    maxTokens: 65536,
    contextWindow: 2e6,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.2,
    outputPrice: 0.5,
    cacheWritesPrice: 0.05,
    cacheReadsPrice: 0.05,
    description: "xAI's Grok 4.1 Fast model with 2M context window, optimized for high-performance agentic tool calling"
  },
  "grok-4-fast-reasoning": {
    maxTokens: 65536,
    contextWindow: 2e6,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.2,
    outputPrice: 0.5,
    cacheWritesPrice: 0.05,
    cacheReadsPrice: 0.05,
    description: "xAI's Grok 4 Fast model with 2M context window, optimized for high-performance agentic tool calling with reasoning"
  },
  "grok-4-fast-non-reasoning": {
    maxTokens: 65536,
    contextWindow: 2e6,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.2,
    outputPrice: 0.5,
    cacheWritesPrice: 0.05,
    cacheReadsPrice: 0.05,
    description: "xAI's Grok 4 Fast model with 2M context window, optimized for high-performance agentic tool calling"
  },
  "grok-4": {
    maxTokens: 8192,
    contextWindow: 256e3,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 0.75,
    cacheReadsPrice: 0.75,
    description: "xAI's Grok-4 model with 256K context window"
  },
  "grok-3": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 3,
    outputPrice: 15,
    cacheWritesPrice: 0.75,
    cacheReadsPrice: 0.75,
    description: "xAI's Grok-3 model with 128K context window"
  },
  "grok-3-fast": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 5,
    outputPrice: 25,
    cacheWritesPrice: 1.25,
    cacheReadsPrice: 1.25,
    description: "xAI's Grok-3 fast model with 128K context window"
  },
  "grok-3-mini": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.3,
    outputPrice: 0.5,
    cacheWritesPrice: 0.07,
    cacheReadsPrice: 0.07,
    description: "xAI's Grok-3 mini model with 128K context window",
    supportsReasoningEffort: true
  },
  "grok-3-mini-fast": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.6,
    outputPrice: 4,
    cacheWritesPrice: 0.15,
    cacheReadsPrice: 0.15,
    description: "xAI's Grok-3 mini fast model with 128K context window",
    supportsReasoningEffort: true
  },
  "grok-2-1212": {
    maxTokens: 8192,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 2,
    outputPrice: 10,
    description: "xAI's Grok-2 model (version 1212) with 128K context window"
  },
  "grok-2-vision-1212": {
    maxTokens: 8192,
    contextWindow: 32768,
    supportsImages: true,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 2,
    outputPrice: 10,
    description: "xAI's Grok-2 Vision model (version 1212) with image support and 32K context window"
  }
};

// src/providers/vercel-ai-gateway.ts
var vercelAiGatewayDefaultModelId = "anthropic/claude-sonnet-4";
var VERCEL_AI_GATEWAY_PROMPT_CACHING_MODELS = /* @__PURE__ */ new Set([
  "anthropic/claude-3-haiku",
  "anthropic/claude-3-opus",
  "anthropic/claude-3.5-haiku",
  "anthropic/claude-3.5-sonnet",
  "anthropic/claude-3.7-sonnet",
  "anthropic/claude-opus-4",
  "anthropic/claude-opus-4.1",
  "anthropic/claude-sonnet-4",
  "openai/gpt-4.1",
  "openai/gpt-4.1-mini",
  "openai/gpt-4.1-nano",
  "openai/gpt-4o",
  "openai/gpt-4o-mini",
  "openai/gpt-5",
  "openai/gpt-5-mini",
  "openai/gpt-5-nano",
  "openai/o1",
  "openai/o3",
  "openai/o3-mini",
  "openai/o4-mini"
]);
var VERCEL_AI_GATEWAY_VISION_ONLY_MODELS = /* @__PURE__ */ new Set([
  "alibaba/qwen-3-14b",
  "alibaba/qwen-3-235b",
  "alibaba/qwen-3-30b",
  "alibaba/qwen-3-32b",
  "alibaba/qwen3-coder",
  "amazon/nova-pro",
  "anthropic/claude-3.5-haiku",
  "google/gemini-1.5-flash-8b",
  "google/gemini-2.0-flash-thinking",
  "google/gemma-3-27b",
  "mistral/devstral-small",
  "xai/grok-vision-beta"
]);
var VERCEL_AI_GATEWAY_VISION_AND_TOOLS_MODELS = /* @__PURE__ */ new Set([
  "amazon/nova-lite",
  "anthropic/claude-3-haiku",
  "anthropic/claude-3-opus",
  "anthropic/claude-3-sonnet",
  "anthropic/claude-3.5-sonnet",
  "anthropic/claude-3.7-sonnet",
  "anthropic/claude-opus-4",
  "anthropic/claude-opus-4.1",
  "anthropic/claude-sonnet-4",
  "google/gemini-1.5-flash",
  "google/gemini-1.5-pro",
  "google/gemini-2.0-flash",
  "google/gemini-2.0-flash-lite",
  "google/gemini-2.0-pro",
  "google/gemini-2.5-flash",
  "google/gemini-2.5-flash-lite",
  "google/gemini-2.5-pro",
  "google/gemini-exp",
  "meta/llama-3.2-11b",
  "meta/llama-3.2-90b",
  "meta/llama-3.3",
  "meta/llama-4-maverick",
  "meta/llama-4-scout",
  "mistral/pixtral-12b",
  "mistral/pixtral-large",
  "moonshotai/kimi-k2",
  "openai/gpt-4-turbo",
  "openai/gpt-4.1",
  "openai/gpt-4.1-mini",
  "openai/gpt-4.1-nano",
  "openai/gpt-4.5-preview",
  "openai/gpt-4o",
  "openai/gpt-4o-mini",
  "openai/gpt-oss-120b",
  "openai/gpt-oss-20b",
  "openai/o3",
  "openai/o3-pro",
  "openai/o4-mini",
  "vercel/v0-1.0-md",
  "xai/grok-2-vision",
  "zai/glm-4.5v"
]);
var vercelAiGatewayDefaultModelInfo = {
  maxTokens: 64e3,
  contextWindow: 2e5,
  supportsImages: true,
  supportsPromptCache: true,
  inputPrice: 3,
  outputPrice: 15,
  cacheWritesPrice: 3.75,
  cacheReadsPrice: 0.3,
  description: "Claude Sonnet 4 significantly improves on Sonnet 3.7's industry-leading capabilities, excelling in coding with a state-of-the-art 72.7% on SWE-bench. The model balances performance and efficiency for internal and external use cases, with enhanced steerability for greater control over implementations. While not matching Opus 4 in most domains, it delivers an optimal mix of capability and practicality."
};
var VERCEL_AI_GATEWAY_DEFAULT_TEMPERATURE = 0.7;

// src/providers/zai.ts
var internationalZAiDefaultModelId = "glm-4.6";
var internationalZAiModels = {
  "glm-4.5": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    supportsReasoningBinary: true,
    inputPrice: 0.6,
    outputPrice: 2.2,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.11,
    description: "GLM-4.5 is Zhipu's latest featured model. Its comprehensive capabilities in reasoning, coding, and agent reach the state-of-the-art (SOTA) level among open-source models, with a context length of up to 128k."
  },
  "glm-4.5-air": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.2,
    outputPrice: 1.1,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.03,
    description: "GLM-4.5-Air is the lightweight version of GLM-4.5. It balances performance and cost-effectiveness, and can flexibly switch to hybrid thinking models."
  },
  "glm-4.5-x": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 2.2,
    outputPrice: 8.9,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.45,
    description: "GLM-4.5-X is a high-performance variant optimized for strong reasoning with ultra-fast responses."
  },
  "glm-4.5-airx": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 1.1,
    outputPrice: 4.5,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.22,
    description: "GLM-4.5-AirX is a lightweight, ultra-fast variant delivering strong performance with lower cost."
  },
  "glm-4.5-flash": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0,
    outputPrice: 0,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "GLM-4.5-Flash is a free, high-speed model excellent for reasoning, coding, and agentic tasks."
  },
  "glm-4.5v": {
    maxTokens: 16384,
    contextWindow: 131072,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.6,
    outputPrice: 1.8,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.11,
    description: "GLM-4.5V is Z.AI's multimodal visual reasoning model (image/video/text/file input), optimized for GUI tasks, grounding, and document/video understanding."
  },
  "glm-4.6": {
    maxTokens: 98304,
    contextWindow: 2e5,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    supportsReasoningBinary: true,
    inputPrice: 0.6,
    outputPrice: 2.2,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.11,
    description: "GLM-4.6 is Zhipu's newest model with an extended context window of up to 200k tokens, providing enhanced capabilities for processing longer documents and conversations."
  },
  "glm-4-32b-0414-128k": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: false,
    supportsNativeTools: true,
    inputPrice: 0.1,
    outputPrice: 0.1,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "GLM-4-32B is a 32 billion parameter model with 128k context length, optimized for efficiency."
  }
};
var mainlandZAiDefaultModelId = "glm-4.6";
var mainlandZAiModels = {
  "glm-4.5": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    supportsReasoningBinary: true,
    inputPrice: 0.29,
    outputPrice: 1.14,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.057,
    description: "GLM-4.5 is Zhipu's latest featured model. Its comprehensive capabilities in reasoning, coding, and agent reach the state-of-the-art (SOTA) level among open-source models, with a context length of up to 128k."
  },
  "glm-4.5-air": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.1,
    outputPrice: 0.6,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.02,
    description: "GLM-4.5-Air is the lightweight version of GLM-4.5. It balances performance and cost-effectiveness, and can flexibly switch to hybrid thinking models."
  },
  "glm-4.5-x": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.29,
    outputPrice: 1.14,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.057,
    description: "GLM-4.5-X is a high-performance variant optimized for strong reasoning with ultra-fast responses."
  },
  "glm-4.5-airx": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.1,
    outputPrice: 0.6,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.02,
    description: "GLM-4.5-AirX is a lightweight, ultra-fast variant delivering strong performance with lower cost."
  },
  "glm-4.5-flash": {
    maxTokens: 98304,
    contextWindow: 131072,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0,
    outputPrice: 0,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0,
    description: "GLM-4.5-Flash is a free, high-speed model excellent for reasoning, coding, and agentic tasks."
  },
  "glm-4.5v": {
    maxTokens: 16384,
    contextWindow: 131072,
    supportsImages: true,
    supportsPromptCache: true,
    supportsNativeTools: true,
    inputPrice: 0.29,
    outputPrice: 0.93,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.057,
    description: "GLM-4.5V is Z.AI's multimodal visual reasoning model (image/video/text/file input), optimized for GUI tasks, grounding, and document/video understanding."
  },
  "glm-4.6": {
    maxTokens: 98304,
    contextWindow: 204800,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    supportsReasoningBinary: true,
    inputPrice: 0.29,
    outputPrice: 1.14,
    cacheWritesPrice: 0,
    cacheReadsPrice: 0.057,
    description: "GLM-4.6 is Zhipu's newest model with an extended context window of up to 200k tokens, providing enhanced capabilities for processing longer documents and conversations."
  }
};
var ZAI_DEFAULT_TEMPERATURE = 0.6;
var zaiApiLineConfigs = {
  international_coding: {
    name: "International",
    baseUrl: "https://api.z.ai/api/coding/paas/v4",
    isChina: false
  },
  china_coding: {
    name: "China",
    baseUrl: "https://open.bigmodel.cn/api/coding/paas/v4",
    isChina: true
  }
};

// src/providers/deepinfra.ts
var deepInfraDefaultModelId = "Qwen/Qwen3-Coder-480B-A35B-Instruct-Turbo";
var deepInfraDefaultModelInfo = {
  maxTokens: 16384,
  contextWindow: 262144,
  supportsImages: false,
  supportsPromptCache: false,
  supportsNativeTools: true,
  inputPrice: 0.3,
  outputPrice: 1.2,
  description: "Qwen 3 Coder 480B A35B Instruct Turbo model, 256K context."
};

// src/providers/minimax.ts
var minimaxDefaultModelId = "MiniMax-M2";
var minimaxModels = {
  "MiniMax-M2": {
    maxTokens: 16384,
    contextWindow: 192e3,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    preserveReasoning: true,
    inputPrice: 0.3,
    outputPrice: 1.2,
    cacheWritesPrice: 0.375,
    cacheReadsPrice: 0.03,
    description: "MiniMax M2, a model born for Agents and code, featuring Top-tier Coding Capabilities, Powerful Agentic Performance, and Ultimate Cost-Effectiveness & Speed."
  },
  "MiniMax-M2-Stable": {
    maxTokens: 16384,
    contextWindow: 192e3,
    supportsImages: false,
    supportsPromptCache: true,
    supportsNativeTools: true,
    preserveReasoning: true,
    inputPrice: 0.3,
    outputPrice: 1.2,
    cacheWritesPrice: 0.375,
    cacheReadsPrice: 0.03,
    description: "MiniMax M2 Stable (High Concurrency, Commercial Use), a model born for Agents and code, featuring Top-tier Coding Capabilities, Powerful Agentic Performance, and Ultimate Cost-Effectiveness & Speed."
  }
};
var minimaxDefaultModelInfo = minimaxModels[minimaxDefaultModelId];
var MINIMAX_DEFAULT_MAX_TOKENS = 16384;
var MINIMAX_DEFAULT_TEMPERATURE = 1;

// src/providers/index.ts
function getProviderDefaultModelId(provider, options = { isChina: false }) {
  switch (provider) {
    case "openrouter":
      return openRouterDefaultModelId;
    case "requesty":
      return requestyDefaultModelId;
    case "glama":
      return glamaDefaultModelId;
    case "unbound":
      return unboundDefaultModelId;
    case "litellm":
      return litellmDefaultModelId;
    case "xai":
      return xaiDefaultModelId;
    case "groq":
      return groqDefaultModelId;
    case "huggingface":
      return "meta-llama/Llama-3.3-70B-Instruct";
    case "chutes":
      return chutesDefaultModelId;
    case "baseten":
      return basetenDefaultModelId;
    case "bedrock":
      return bedrockDefaultModelId;
    case "vertex":
      return vertexDefaultModelId;
    case "gemini":
      return geminiDefaultModelId;
    case "deepseek":
      return deepSeekDefaultModelId;
    case "doubao":
      return doubaoDefaultModelId;
    case "moonshot":
      return moonshotDefaultModelId;
    case "minimax":
      return minimaxDefaultModelId;
    case "zai":
      return options?.isChina ? mainlandZAiDefaultModelId : internationalZAiDefaultModelId;
    case "openai-native":
      return "gpt-4o";
    // Based on openai-native patterns
    case "mistral":
      return mistralDefaultModelId;
    case "openai":
      return "";
    // OpenAI provider uses custom model configuration
    case "ollama":
      return "";
    // Ollama uses dynamic model selection
    case "lmstudio":
      return "";
    // LMStudio uses dynamic model selection
    case "deepinfra":
      return deepInfraDefaultModelId;
    case "vscode-lm":
      return vscodeLlmDefaultModelId;
    case "claude-code":
      return claudeCodeDefaultModelId;
    case "cerebras":
      return cerebrasDefaultModelId;
    case "sambanova":
      return sambaNovaDefaultModelId;
    case "fireworks":
      return fireworksDefaultModelId;
    case "featherless":
      return featherlessDefaultModelId;
    case "io-intelligence":
      return ioIntelligenceDefaultModelId;
    case "roo":
      return rooDefaultModelId;
    case "qwen-code":
      return qwenCodeDefaultModelId;
    case "vercel-ai-gateway":
      return vercelAiGatewayDefaultModelId;
    case "anthropic":
    case "gemini-cli":
    case "human-relay":
    case "fake-ai":
    default:
      return anthropicDefaultModelId;
  }
}

// src/provider-settings.ts
var DEFAULT_CONSECUTIVE_MISTAKE_LIMIT = 3;
var dynamicProviders = [
  "openrouter",
  "vercel-ai-gateway",
  "huggingface",
  "litellm",
  "deepinfra",
  "io-intelligence",
  "requesty",
  "unbound",
  "glama",
  "roo",
  "chutes"
];
var isDynamicProvider = (key) => dynamicProviders.includes(key);
var localProviders = ["ollama", "lmstudio"];
var isLocalProvider = (key) => localProviders.includes(key);
var internalProviders = ["vscode-lm"];
var isInternalProvider = (key) => internalProviders.includes(key);
var customProviders = ["openai"];
var isCustomProvider = (key) => customProviders.includes(key);
var fauxProviders = ["fake-ai", "human-relay"];
var isFauxProvider = (key) => fauxProviders.includes(key);
var providerNames = [
  ...dynamicProviders,
  ...localProviders,
  ...internalProviders,
  ...customProviders,
  ...fauxProviders,
  "anthropic",
  "bedrock",
  "baseten",
  "cerebras",
  "claude-code",
  "doubao",
  "deepseek",
  "featherless",
  "fireworks",
  "gemini",
  "gemini-cli",
  "groq",
  "mistral",
  "moonshot",
  "minimax",
  "openai-native",
  "qwen-code",
  "roo",
  "sambanova",
  "vertex",
  "xai",
  "zai"
];
var providerNamesSchema = import_zod8.z.enum(providerNames);
var isProviderName = (key) => typeof key === "string" && providerNames.includes(key);
var providerSettingsEntrySchema = import_zod8.z.object({
  id: import_zod8.z.string(),
  name: import_zod8.z.string(),
  apiProvider: providerNamesSchema.optional(),
  modelId: import_zod8.z.string().optional()
});
var baseProviderSettingsSchema = import_zod8.z.object({
  includeMaxTokens: import_zod8.z.boolean().optional(),
  diffEnabled: import_zod8.z.boolean().optional(),
  todoListEnabled: import_zod8.z.boolean().optional(),
  fuzzyMatchThreshold: import_zod8.z.number().optional(),
  modelTemperature: import_zod8.z.number().nullish(),
  rateLimitSeconds: import_zod8.z.number().optional(),
  consecutiveMistakeLimit: import_zod8.z.number().min(0).optional(),
  // Model reasoning.
  enableReasoningEffort: import_zod8.z.boolean().optional(),
  reasoningEffort: reasoningEffortSettingSchema.optional(),
  modelMaxTokens: import_zod8.z.number().optional(),
  modelMaxThinkingTokens: import_zod8.z.number().optional(),
  // Model verbosity.
  verbosity: verbosityLevelsSchema.optional(),
  // Tool protocol override for this profile.
  toolProtocol: import_zod8.z.enum(["xml", "native"]).optional()
});
var apiModelIdProviderModelSchema = baseProviderSettingsSchema.extend({
  apiModelId: import_zod8.z.string().optional()
});
var anthropicSchema = apiModelIdProviderModelSchema.extend({
  apiKey: import_zod8.z.string().optional(),
  anthropicBaseUrl: import_zod8.z.string().optional(),
  anthropicUseAuthToken: import_zod8.z.boolean().optional(),
  anthropicBeta1MContext: import_zod8.z.boolean().optional()
  // Enable 'context-1m-2025-08-07' beta for 1M context window.
});
var claudeCodeSchema = apiModelIdProviderModelSchema.extend({
  claudeCodePath: import_zod8.z.string().optional(),
  claudeCodeMaxOutputTokens: import_zod8.z.number().int().min(1).max(2e5).optional()
});
var glamaSchema = baseProviderSettingsSchema.extend({
  glamaModelId: import_zod8.z.string().optional(),
  glamaApiKey: import_zod8.z.string().optional()
});
var openRouterSchema = baseProviderSettingsSchema.extend({
  openRouterApiKey: import_zod8.z.string().optional(),
  openRouterModelId: import_zod8.z.string().optional(),
  openRouterBaseUrl: import_zod8.z.string().optional(),
  openRouterSpecificProvider: import_zod8.z.string().optional(),
  openRouterUseMiddleOutTransform: import_zod8.z.boolean().optional()
});
var bedrockSchema = apiModelIdProviderModelSchema.extend({
  awsAccessKey: import_zod8.z.string().optional(),
  awsSecretKey: import_zod8.z.string().optional(),
  awsSessionToken: import_zod8.z.string().optional(),
  awsRegion: import_zod8.z.string().optional(),
  awsUseCrossRegionInference: import_zod8.z.boolean().optional(),
  awsUseGlobalInference: import_zod8.z.boolean().optional(),
  // Enable Global Inference profile routing when supported
  awsUsePromptCache: import_zod8.z.boolean().optional(),
  awsProfile: import_zod8.z.string().optional(),
  awsUseProfile: import_zod8.z.boolean().optional(),
  awsApiKey: import_zod8.z.string().optional(),
  awsUseApiKey: import_zod8.z.boolean().optional(),
  awsCustomArn: import_zod8.z.string().optional(),
  awsModelContextWindow: import_zod8.z.number().optional(),
  awsBedrockEndpointEnabled: import_zod8.z.boolean().optional(),
  awsBedrockEndpoint: import_zod8.z.string().optional(),
  awsBedrock1MContext: import_zod8.z.boolean().optional()
  // Enable 'context-1m-2025-08-07' beta for 1M context window.
});
var vertexSchema = apiModelIdProviderModelSchema.extend({
  vertexKeyFile: import_zod8.z.string().optional(),
  vertexJsonCredentials: import_zod8.z.string().optional(),
  vertexProjectId: import_zod8.z.string().optional(),
  vertexRegion: import_zod8.z.string().optional(),
  enableUrlContext: import_zod8.z.boolean().optional(),
  enableGrounding: import_zod8.z.boolean().optional()
});
var openAiSchema = baseProviderSettingsSchema.extend({
  openAiBaseUrl: import_zod8.z.string().optional(),
  openAiApiKey: import_zod8.z.string().optional(),
  openAiLegacyFormat: import_zod8.z.boolean().optional(),
  openAiR1FormatEnabled: import_zod8.z.boolean().optional(),
  openAiModelId: import_zod8.z.string().optional(),
  openAiCustomModelInfo: modelInfoSchema.nullish(),
  openAiUseAzure: import_zod8.z.boolean().optional(),
  azureApiVersion: import_zod8.z.string().optional(),
  openAiStreamingEnabled: import_zod8.z.boolean().optional(),
  openAiHostHeader: import_zod8.z.string().optional(),
  // Keep temporarily for backward compatibility during migration.
  openAiHeaders: import_zod8.z.record(import_zod8.z.string(), import_zod8.z.string()).optional()
});
var ollamaSchema = baseProviderSettingsSchema.extend({
  ollamaModelId: import_zod8.z.string().optional(),
  ollamaBaseUrl: import_zod8.z.string().optional(),
  ollamaApiKey: import_zod8.z.string().optional(),
  ollamaNumCtx: import_zod8.z.number().int().min(128).optional()
});
var vsCodeLmSchema = baseProviderSettingsSchema.extend({
  vsCodeLmModelSelector: import_zod8.z.object({
    vendor: import_zod8.z.string().optional(),
    family: import_zod8.z.string().optional(),
    version: import_zod8.z.string().optional(),
    id: import_zod8.z.string().optional()
  }).optional()
});
var lmStudioSchema = baseProviderSettingsSchema.extend({
  lmStudioModelId: import_zod8.z.string().optional(),
  lmStudioBaseUrl: import_zod8.z.string().optional(),
  lmStudioDraftModelId: import_zod8.z.string().optional(),
  lmStudioSpeculativeDecodingEnabled: import_zod8.z.boolean().optional()
});
var geminiSchema = apiModelIdProviderModelSchema.extend({
  geminiApiKey: import_zod8.z.string().optional(),
  googleGeminiBaseUrl: import_zod8.z.string().optional(),
  enableUrlContext: import_zod8.z.boolean().optional(),
  enableGrounding: import_zod8.z.boolean().optional()
});
var geminiCliSchema = apiModelIdProviderModelSchema.extend({
  geminiCliOAuthPath: import_zod8.z.string().optional(),
  geminiCliProjectId: import_zod8.z.string().optional()
});
var openAiNativeSchema = apiModelIdProviderModelSchema.extend({
  openAiNativeApiKey: import_zod8.z.string().optional(),
  openAiNativeBaseUrl: import_zod8.z.string().optional(),
  // OpenAI Responses API service tier for openai-native provider only.
  // UI should only expose this when the selected model supports flex/priority.
  openAiNativeServiceTier: serviceTierSchema.optional()
});
var mistralSchema = apiModelIdProviderModelSchema.extend({
  mistralApiKey: import_zod8.z.string().optional(),
  mistralCodestralUrl: import_zod8.z.string().optional()
});
var deepSeekSchema = apiModelIdProviderModelSchema.extend({
  deepSeekBaseUrl: import_zod8.z.string().optional(),
  deepSeekApiKey: import_zod8.z.string().optional()
});
var deepInfraSchema = apiModelIdProviderModelSchema.extend({
  deepInfraBaseUrl: import_zod8.z.string().optional(),
  deepInfraApiKey: import_zod8.z.string().optional(),
  deepInfraModelId: import_zod8.z.string().optional()
});
var doubaoSchema = apiModelIdProviderModelSchema.extend({
  doubaoBaseUrl: import_zod8.z.string().optional(),
  doubaoApiKey: import_zod8.z.string().optional()
});
var moonshotSchema = apiModelIdProviderModelSchema.extend({
  moonshotBaseUrl: import_zod8.z.union([import_zod8.z.literal("https://api.moonshot.ai/v1"), import_zod8.z.literal("https://api.moonshot.cn/v1")]).optional(),
  moonshotApiKey: import_zod8.z.string().optional()
});
var minimaxSchema = apiModelIdProviderModelSchema.extend({
  minimaxBaseUrl: import_zod8.z.union([import_zod8.z.literal("https://api.minimax.io/v1"), import_zod8.z.literal("https://api.minimaxi.com/v1")]).optional(),
  minimaxApiKey: import_zod8.z.string().optional()
});
var unboundSchema = baseProviderSettingsSchema.extend({
  unboundApiKey: import_zod8.z.string().optional(),
  unboundModelId: import_zod8.z.string().optional()
});
var requestySchema = baseProviderSettingsSchema.extend({
  requestyBaseUrl: import_zod8.z.string().optional(),
  requestyApiKey: import_zod8.z.string().optional(),
  requestyModelId: import_zod8.z.string().optional()
});
var humanRelaySchema = baseProviderSettingsSchema;
var fakeAiSchema = baseProviderSettingsSchema.extend({
  fakeAi: import_zod8.z.unknown().optional()
});
var xaiSchema = apiModelIdProviderModelSchema.extend({
  xaiApiKey: import_zod8.z.string().optional()
});
var groqSchema = apiModelIdProviderModelSchema.extend({
  groqApiKey: import_zod8.z.string().optional()
});
var huggingFaceSchema = baseProviderSettingsSchema.extend({
  huggingFaceApiKey: import_zod8.z.string().optional(),
  huggingFaceModelId: import_zod8.z.string().optional(),
  huggingFaceInferenceProvider: import_zod8.z.string().optional()
});
var chutesSchema = apiModelIdProviderModelSchema.extend({
  chutesApiKey: import_zod8.z.string().optional()
});
var litellmSchema = baseProviderSettingsSchema.extend({
  litellmBaseUrl: import_zod8.z.string().optional(),
  litellmApiKey: import_zod8.z.string().optional(),
  litellmModelId: import_zod8.z.string().optional(),
  litellmUsePromptCache: import_zod8.z.boolean().optional()
});
var cerebrasSchema = apiModelIdProviderModelSchema.extend({
  cerebrasApiKey: import_zod8.z.string().optional()
});
var sambaNovaSchema = apiModelIdProviderModelSchema.extend({
  sambaNovaApiKey: import_zod8.z.string().optional()
});
var zaiApiLineSchema = import_zod8.z.enum(["international_coding", "china_coding"]);
var zaiSchema = apiModelIdProviderModelSchema.extend({
  zaiApiKey: import_zod8.z.string().optional(),
  zaiApiLine: zaiApiLineSchema.optional()
});
var fireworksSchema = apiModelIdProviderModelSchema.extend({
  fireworksApiKey: import_zod8.z.string().optional()
});
var featherlessSchema = apiModelIdProviderModelSchema.extend({
  featherlessApiKey: import_zod8.z.string().optional()
});
var ioIntelligenceSchema = apiModelIdProviderModelSchema.extend({
  ioIntelligenceModelId: import_zod8.z.string().optional(),
  ioIntelligenceApiKey: import_zod8.z.string().optional()
});
var qwenCodeSchema = apiModelIdProviderModelSchema.extend({
  qwenCodeOauthPath: import_zod8.z.string().optional()
});
var rooSchema = apiModelIdProviderModelSchema.extend({
  // No additional fields needed - uses cloud authentication.
});
var vercelAiGatewaySchema = baseProviderSettingsSchema.extend({
  vercelAiGatewayApiKey: import_zod8.z.string().optional(),
  vercelAiGatewayModelId: import_zod8.z.string().optional()
});
var basetenSchema = apiModelIdProviderModelSchema.extend({
  basetenApiKey: import_zod8.z.string().optional()
});
var defaultSchema = import_zod8.z.object({
  apiProvider: import_zod8.z.undefined()
});
var providerSettingsSchemaDiscriminated = import_zod8.z.discriminatedUnion("apiProvider", [
  anthropicSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("anthropic") })),
  claudeCodeSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("claude-code") })),
  glamaSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("glama") })),
  openRouterSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("openrouter") })),
  bedrockSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("bedrock") })),
  vertexSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("vertex") })),
  openAiSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("openai") })),
  ollamaSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("ollama") })),
  vsCodeLmSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("vscode-lm") })),
  lmStudioSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("lmstudio") })),
  geminiSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("gemini") })),
  geminiCliSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("gemini-cli") })),
  openAiNativeSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("openai-native") })),
  mistralSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("mistral") })),
  deepSeekSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("deepseek") })),
  deepInfraSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("deepinfra") })),
  doubaoSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("doubao") })),
  moonshotSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("moonshot") })),
  minimaxSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("minimax") })),
  unboundSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("unbound") })),
  requestySchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("requesty") })),
  humanRelaySchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("human-relay") })),
  fakeAiSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("fake-ai") })),
  xaiSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("xai") })),
  groqSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("groq") })),
  basetenSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("baseten") })),
  huggingFaceSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("huggingface") })),
  chutesSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("chutes") })),
  litellmSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("litellm") })),
  cerebrasSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("cerebras") })),
  sambaNovaSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("sambanova") })),
  zaiSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("zai") })),
  fireworksSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("fireworks") })),
  featherlessSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("featherless") })),
  ioIntelligenceSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("io-intelligence") })),
  qwenCodeSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("qwen-code") })),
  rooSchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("roo") })),
  vercelAiGatewaySchema.merge(import_zod8.z.object({ apiProvider: import_zod8.z.literal("vercel-ai-gateway") })),
  defaultSchema
]);
var providerSettingsSchema = import_zod8.z.object({
  apiProvider: providerNamesSchema.optional(),
  ...anthropicSchema.shape,
  ...claudeCodeSchema.shape,
  ...glamaSchema.shape,
  ...openRouterSchema.shape,
  ...bedrockSchema.shape,
  ...vertexSchema.shape,
  ...openAiSchema.shape,
  ...ollamaSchema.shape,
  ...vsCodeLmSchema.shape,
  ...lmStudioSchema.shape,
  ...geminiSchema.shape,
  ...geminiCliSchema.shape,
  ...openAiNativeSchema.shape,
  ...mistralSchema.shape,
  ...deepSeekSchema.shape,
  ...deepInfraSchema.shape,
  ...doubaoSchema.shape,
  ...moonshotSchema.shape,
  ...minimaxSchema.shape,
  ...unboundSchema.shape,
  ...requestySchema.shape,
  ...humanRelaySchema.shape,
  ...fakeAiSchema.shape,
  ...xaiSchema.shape,
  ...groqSchema.shape,
  ...basetenSchema.shape,
  ...huggingFaceSchema.shape,
  ...chutesSchema.shape,
  ...litellmSchema.shape,
  ...cerebrasSchema.shape,
  ...sambaNovaSchema.shape,
  ...zaiSchema.shape,
  ...fireworksSchema.shape,
  ...featherlessSchema.shape,
  ...ioIntelligenceSchema.shape,
  ...qwenCodeSchema.shape,
  ...rooSchema.shape,
  ...vercelAiGatewaySchema.shape,
  ...codebaseIndexProviderSchema.shape
});
var providerSettingsWithIdSchema = providerSettingsSchema.extend({ id: import_zod8.z.string().optional() });
var discriminatedProviderSettingsWithIdSchema = providerSettingsSchemaDiscriminated.and(
  import_zod8.z.object({ id: import_zod8.z.string().optional() })
);
var PROVIDER_SETTINGS_KEYS = providerSettingsSchema.keyof().options;
var modelIdKeys = [
  "apiModelId",
  "glamaModelId",
  "openRouterModelId",
  "openAiModelId",
  "ollamaModelId",
  "lmStudioModelId",
  "lmStudioDraftModelId",
  "unboundModelId",
  "requestyModelId",
  "litellmModelId",
  "huggingFaceModelId",
  "ioIntelligenceModelId",
  "vercelAiGatewayModelId",
  "deepInfraModelId"
];
var getModelId = (settings) => {
  const modelIdKey = modelIdKeys.find((key) => settings[key]);
  return modelIdKey ? settings[modelIdKey] : void 0;
};
var isTypicalProvider = (key) => isProviderName(key) && !isInternalProvider(key) && !isCustomProvider(key) && !isFauxProvider(key);
var modelIdKeysByProvider = {
  anthropic: "apiModelId",
  "claude-code": "apiModelId",
  glama: "glamaModelId",
  openrouter: "openRouterModelId",
  bedrock: "apiModelId",
  vertex: "apiModelId",
  "openai-native": "openAiModelId",
  ollama: "ollamaModelId",
  lmstudio: "lmStudioModelId",
  gemini: "apiModelId",
  "gemini-cli": "apiModelId",
  mistral: "apiModelId",
  moonshot: "apiModelId",
  minimax: "apiModelId",
  deepseek: "apiModelId",
  deepinfra: "deepInfraModelId",
  doubao: "apiModelId",
  "qwen-code": "apiModelId",
  unbound: "unboundModelId",
  requesty: "requestyModelId",
  xai: "apiModelId",
  groq: "apiModelId",
  baseten: "apiModelId",
  chutes: "apiModelId",
  litellm: "litellmModelId",
  huggingface: "huggingFaceModelId",
  cerebras: "apiModelId",
  sambanova: "apiModelId",
  zai: "apiModelId",
  fireworks: "apiModelId",
  featherless: "apiModelId",
  "io-intelligence": "ioIntelligenceModelId",
  roo: "apiModelId",
  "vercel-ai-gateway": "vercelAiGatewayModelId"
};
var ANTHROPIC_STYLE_PROVIDERS = ["anthropic", "claude-code", "bedrock", "minimax"];
var getApiProtocol = (provider, modelId) => {
  if (provider && ANTHROPIC_STYLE_PROVIDERS.includes(provider)) {
    return "anthropic";
  }
  if (provider && provider === "vertex" && modelId && modelId.toLowerCase().includes("claude")) {
    return "anthropic";
  }
  if (provider && ["vercel-ai-gateway", "roo"].includes(provider) && modelId && modelId.toLowerCase().startsWith("anthropic/")) {
    return "anthropic";
  }
  return "openai";
};
var MODELS_BY_PROVIDER = {
  anthropic: {
    id: "anthropic",
    label: "Anthropic",
    models: Object.keys(anthropicModels)
  },
  bedrock: {
    id: "bedrock",
    label: "Amazon Bedrock",
    models: Object.keys(bedrockModels)
  },
  cerebras: {
    id: "cerebras",
    label: "Cerebras",
    models: Object.keys(cerebrasModels)
  },
  "claude-code": { id: "claude-code", label: "Claude Code", models: Object.keys(claudeCodeModels) },
  deepseek: {
    id: "deepseek",
    label: "DeepSeek",
    models: Object.keys(deepSeekModels)
  },
  doubao: { id: "doubao", label: "Doubao", models: Object.keys(doubaoModels) },
  featherless: {
    id: "featherless",
    label: "Featherless",
    models: Object.keys(featherlessModels)
  },
  fireworks: {
    id: "fireworks",
    label: "Fireworks",
    models: Object.keys(fireworksModels)
  },
  gemini: {
    id: "gemini",
    label: "Google Gemini",
    models: Object.keys(geminiModels)
  },
  groq: { id: "groq", label: "Groq", models: Object.keys(groqModels) },
  "io-intelligence": {
    id: "io-intelligence",
    label: "IO Intelligence",
    models: Object.keys(ioIntelligenceModels)
  },
  mistral: {
    id: "mistral",
    label: "Mistral",
    models: Object.keys(mistralModels)
  },
  moonshot: {
    id: "moonshot",
    label: "Moonshot",
    models: Object.keys(moonshotModels)
  },
  minimax: {
    id: "minimax",
    label: "MiniMax",
    models: Object.keys(minimaxModels)
  },
  "openai-native": {
    id: "openai-native",
    label: "OpenAI",
    models: Object.keys(openAiNativeModels)
  },
  "qwen-code": { id: "qwen-code", label: "Qwen Code", models: Object.keys(qwenCodeModels) },
  roo: { id: "roo", label: "Roo Code Cloud", models: [] },
  sambanova: {
    id: "sambanova",
    label: "SambaNova",
    models: Object.keys(sambaNovaModels)
  },
  vertex: {
    id: "vertex",
    label: "GCP Vertex AI",
    models: Object.keys(vertexModels)
  },
  "vscode-lm": {
    id: "vscode-lm",
    label: "VS Code LM API",
    models: Object.keys(vscodeLlmModels)
  },
  xai: { id: "xai", label: "xAI (Grok)", models: Object.keys(xaiModels) },
  zai: { id: "zai", label: "Z.ai", models: Object.keys(internationalZAiModels) },
  baseten: { id: "baseten", label: "Baseten", models: Object.keys(basetenModels) },
  // Dynamic providers; models pulled from remote APIs.
  glama: { id: "glama", label: "Glama", models: [] },
  huggingface: { id: "huggingface", label: "Hugging Face", models: [] },
  litellm: { id: "litellm", label: "LiteLLM", models: [] },
  openrouter: { id: "openrouter", label: "OpenRouter", models: [] },
  requesty: { id: "requesty", label: "Requesty", models: [] },
  unbound: { id: "unbound", label: "Unbound", models: [] },
  deepinfra: { id: "deepinfra", label: "DeepInfra", models: [] },
  "vercel-ai-gateway": { id: "vercel-ai-gateway", label: "Vercel AI Gateway", models: [] },
  chutes: { id: "chutes", label: "Chutes AI", models: [] },
  // Local providers; models discovered from localhost endpoints.
  lmstudio: { id: "lmstudio", label: "LM Studio", models: [] },
  ollama: { id: "ollama", label: "Ollama", models: [] }
};

// src/history.ts
var import_zod9 = require("zod");
var historyItemSchema = import_zod9.z.object({
  id: import_zod9.z.string(),
  rootTaskId: import_zod9.z.string().optional(),
  parentTaskId: import_zod9.z.string().optional(),
  number: import_zod9.z.number(),
  ts: import_zod9.z.number(),
  task: import_zod9.z.string(),
  tokensIn: import_zod9.z.number(),
  tokensOut: import_zod9.z.number(),
  cacheWrites: import_zod9.z.number().optional(),
  cacheReads: import_zod9.z.number().optional(),
  totalCost: import_zod9.z.number(),
  size: import_zod9.z.number().optional(),
  workspace: import_zod9.z.string().optional(),
  mode: import_zod9.z.string().optional(),
  status: import_zod9.z.enum(["active", "completed", "delegated"]).optional(),
  delegatedToId: import_zod9.z.string().optional(),
  // Last child this parent delegated to
  childIds: import_zod9.z.array(import_zod9.z.string()).optional(),
  // All children spawned by this task
  awaitingChildId: import_zod9.z.string().optional(),
  // Child currently awaited (set when delegated)
  completedByChildId: import_zod9.z.string().optional(),
  // Child that completed and resumed this parent
  completionResultSummary: import_zod9.z.string().optional()
  // Summary from completed child
});

// src/experiment.ts
var import_zod10 = require("zod");
var experimentIds = [
  "powerSteering",
  "multiFileApplyDiff",
  "preventFocusDisruption",
  "imageGeneration",
  "runSlashCommand",
  "multipleNativeToolCalls"
];
var experimentIdsSchema = import_zod10.z.enum(experimentIds);
var experimentsSchema = import_zod10.z.object({
  powerSteering: import_zod10.z.boolean().optional(),
  multiFileApplyDiff: import_zod10.z.boolean().optional(),
  preventFocusDisruption: import_zod10.z.boolean().optional(),
  imageGeneration: import_zod10.z.boolean().optional(),
  runSlashCommand: import_zod10.z.boolean().optional(),
  multipleNativeToolCalls: import_zod10.z.boolean().optional()
});

// src/telemetry.ts
var import_zod11 = require("zod");
var telemetrySettings = ["unset", "enabled", "disabled"];
var telemetrySettingsSchema = import_zod11.z.enum(telemetrySettings);
var TelemetryEventName = /* @__PURE__ */ ((TelemetryEventName2) => {
  TelemetryEventName2["TASK_CREATED"] = "Task Created";
  TelemetryEventName2["TASK_RESTARTED"] = "Task Reopened";
  TelemetryEventName2["TASK_COMPLETED"] = "Task Completed";
  TelemetryEventName2["TASK_MESSAGE"] = "Task Message";
  TelemetryEventName2["TASK_CONVERSATION_MESSAGE"] = "Conversation Message";
  TelemetryEventName2["LLM_COMPLETION"] = "LLM Completion";
  TelemetryEventName2["MODE_SWITCH"] = "Mode Switched";
  TelemetryEventName2["MODE_SELECTOR_OPENED"] = "Mode Selector Opened";
  TelemetryEventName2["TOOL_USED"] = "Tool Used";
  TelemetryEventName2["CHECKPOINT_CREATED"] = "Checkpoint Created";
  TelemetryEventName2["CHECKPOINT_RESTORED"] = "Checkpoint Restored";
  TelemetryEventName2["CHECKPOINT_DIFFED"] = "Checkpoint Diffed";
  TelemetryEventName2["TAB_SHOWN"] = "Tab Shown";
  TelemetryEventName2["MODE_SETTINGS_CHANGED"] = "Mode Setting Changed";
  TelemetryEventName2["CUSTOM_MODE_CREATED"] = "Custom Mode Created";
  TelemetryEventName2["CONTEXT_CONDENSED"] = "Context Condensed";
  TelemetryEventName2["SLIDING_WINDOW_TRUNCATION"] = "Sliding Window Truncation";
  TelemetryEventName2["CODE_ACTION_USED"] = "Code Action Used";
  TelemetryEventName2["PROMPT_ENHANCED"] = "Prompt Enhanced";
  TelemetryEventName2["TITLE_BUTTON_CLICKED"] = "Title Button Clicked";
  TelemetryEventName2["AUTHENTICATION_INITIATED"] = "Authentication Initiated";
  TelemetryEventName2["MARKETPLACE_ITEM_INSTALLED"] = "Marketplace Item Installed";
  TelemetryEventName2["MARKETPLACE_ITEM_REMOVED"] = "Marketplace Item Removed";
  TelemetryEventName2["MARKETPLACE_TAB_VIEWED"] = "Marketplace Tab Viewed";
  TelemetryEventName2["MARKETPLACE_INSTALL_BUTTON_CLICKED"] = "Marketplace Install Button Clicked";
  TelemetryEventName2["SHARE_BUTTON_CLICKED"] = "Share Button Clicked";
  TelemetryEventName2["SHARE_ORGANIZATION_CLICKED"] = "Share Organization Clicked";
  TelemetryEventName2["SHARE_PUBLIC_CLICKED"] = "Share Public Clicked";
  TelemetryEventName2["SHARE_CONNECT_TO_CLOUD_CLICKED"] = "Share Connect To Cloud Clicked";
  TelemetryEventName2["ACCOUNT_CONNECT_CLICKED"] = "Account Connect Clicked";
  TelemetryEventName2["ACCOUNT_CONNECT_SUCCESS"] = "Account Connect Success";
  TelemetryEventName2["ACCOUNT_LOGOUT_CLICKED"] = "Account Logout Clicked";
  TelemetryEventName2["ACCOUNT_LOGOUT_SUCCESS"] = "Account Logout Success";
  TelemetryEventName2["FEATURED_PROVIDER_CLICKED"] = "Featured Provider Clicked";
  TelemetryEventName2["UPSELL_DISMISSED"] = "Upsell Dismissed";
  TelemetryEventName2["UPSELL_CLICKED"] = "Upsell Clicked";
  TelemetryEventName2["SCHEMA_VALIDATION_ERROR"] = "Schema Validation Error";
  TelemetryEventName2["DIFF_APPLICATION_ERROR"] = "Diff Application Error";
  TelemetryEventName2["SHELL_INTEGRATION_ERROR"] = "Shell Integration Error";
  TelemetryEventName2["CONSECUTIVE_MISTAKE_ERROR"] = "Consecutive Mistake Error";
  TelemetryEventName2["CODE_INDEX_ERROR"] = "Code Index Error";
  TelemetryEventName2["TELEMETRY_SETTINGS_CHANGED"] = "Telemetry Settings Changed";
  TelemetryEventName2["MODEL_CACHE_EMPTY_RESPONSE"] = "Model Cache Empty Response";
  return TelemetryEventName2;
})(TelemetryEventName || {});
var staticAppPropertiesSchema = import_zod11.z.object({
  appName: import_zod11.z.string(),
  appVersion: import_zod11.z.string(),
  vscodeVersion: import_zod11.z.string(),
  platform: import_zod11.z.string(),
  editorName: import_zod11.z.string(),
  hostname: import_zod11.z.string().optional()
});
var dynamicAppPropertiesSchema = import_zod11.z.object({
  language: import_zod11.z.string(),
  mode: import_zod11.z.string()
});
var cloudAppPropertiesSchema = import_zod11.z.object({
  cloudIsAuthenticated: import_zod11.z.boolean().optional()
});
var appPropertiesSchema = import_zod11.z.object({
  ...staticAppPropertiesSchema.shape,
  ...dynamicAppPropertiesSchema.shape,
  ...cloudAppPropertiesSchema.shape
});
var taskPropertiesSchema = import_zod11.z.object({
  taskId: import_zod11.z.string().optional(),
  parentTaskId: import_zod11.z.string().optional(),
  apiProvider: import_zod11.z.enum(providerNames).optional(),
  modelId: import_zod11.z.string().optional(),
  diffStrategy: import_zod11.z.string().optional(),
  isSubtask: import_zod11.z.boolean().optional(),
  todos: import_zod11.z.object({
    total: import_zod11.z.number(),
    completed: import_zod11.z.number(),
    inProgress: import_zod11.z.number(),
    pending: import_zod11.z.number()
  }).optional()
});
var gitPropertiesSchema = import_zod11.z.object({
  repositoryUrl: import_zod11.z.string().optional(),
  repositoryName: import_zod11.z.string().optional(),
  defaultBranch: import_zod11.z.string().optional()
});
var telemetryPropertiesSchema = import_zod11.z.object({
  ...appPropertiesSchema.shape,
  ...taskPropertiesSchema.shape,
  ...gitPropertiesSchema.shape
});
var rooCodeTelemetryEventSchema = import_zod11.z.discriminatedUnion("type", [
  import_zod11.z.object({
    type: import_zod11.z.enum([
      "Task Created" /* TASK_CREATED */,
      "Task Reopened" /* TASK_RESTARTED */,
      "Task Completed" /* TASK_COMPLETED */,
      "Conversation Message" /* TASK_CONVERSATION_MESSAGE */,
      "Mode Switched" /* MODE_SWITCH */,
      "Mode Selector Opened" /* MODE_SELECTOR_OPENED */,
      "Tool Used" /* TOOL_USED */,
      "Checkpoint Created" /* CHECKPOINT_CREATED */,
      "Checkpoint Restored" /* CHECKPOINT_RESTORED */,
      "Checkpoint Diffed" /* CHECKPOINT_DIFFED */,
      "Code Action Used" /* CODE_ACTION_USED */,
      "Prompt Enhanced" /* PROMPT_ENHANCED */,
      "Title Button Clicked" /* TITLE_BUTTON_CLICKED */,
      "Authentication Initiated" /* AUTHENTICATION_INITIATED */,
      "Marketplace Item Installed" /* MARKETPLACE_ITEM_INSTALLED */,
      "Marketplace Item Removed" /* MARKETPLACE_ITEM_REMOVED */,
      "Marketplace Tab Viewed" /* MARKETPLACE_TAB_VIEWED */,
      "Marketplace Install Button Clicked" /* MARKETPLACE_INSTALL_BUTTON_CLICKED */,
      "Share Button Clicked" /* SHARE_BUTTON_CLICKED */,
      "Share Organization Clicked" /* SHARE_ORGANIZATION_CLICKED */,
      "Share Public Clicked" /* SHARE_PUBLIC_CLICKED */,
      "Share Connect To Cloud Clicked" /* SHARE_CONNECT_TO_CLOUD_CLICKED */,
      "Account Connect Clicked" /* ACCOUNT_CONNECT_CLICKED */,
      "Account Connect Success" /* ACCOUNT_CONNECT_SUCCESS */,
      "Account Logout Clicked" /* ACCOUNT_LOGOUT_CLICKED */,
      "Account Logout Success" /* ACCOUNT_LOGOUT_SUCCESS */,
      "Featured Provider Clicked" /* FEATURED_PROVIDER_CLICKED */,
      "Upsell Dismissed" /* UPSELL_DISMISSED */,
      "Upsell Clicked" /* UPSELL_CLICKED */,
      "Schema Validation Error" /* SCHEMA_VALIDATION_ERROR */,
      "Diff Application Error" /* DIFF_APPLICATION_ERROR */,
      "Shell Integration Error" /* SHELL_INTEGRATION_ERROR */,
      "Consecutive Mistake Error" /* CONSECUTIVE_MISTAKE_ERROR */,
      "Code Index Error" /* CODE_INDEX_ERROR */,
      "Model Cache Empty Response" /* MODEL_CACHE_EMPTY_RESPONSE */,
      "Context Condensed" /* CONTEXT_CONDENSED */,
      "Sliding Window Truncation" /* SLIDING_WINDOW_TRUNCATION */,
      "Tab Shown" /* TAB_SHOWN */,
      "Mode Setting Changed" /* MODE_SETTINGS_CHANGED */,
      "Custom Mode Created" /* CUSTOM_MODE_CREATED */
    ]),
    properties: telemetryPropertiesSchema
  }),
  import_zod11.z.object({
    type: import_zod11.z.literal("Telemetry Settings Changed" /* TELEMETRY_SETTINGS_CHANGED */),
    properties: import_zod11.z.object({
      ...telemetryPropertiesSchema.shape,
      previousSetting: telemetrySettingsSchema,
      newSetting: telemetrySettingsSchema
    })
  }),
  import_zod11.z.object({
    type: import_zod11.z.literal("Task Message" /* TASK_MESSAGE */),
    properties: import_zod11.z.object({
      ...telemetryPropertiesSchema.shape,
      taskId: import_zod11.z.string(),
      message: clineMessageSchema
    })
  }),
  import_zod11.z.object({
    type: import_zod11.z.literal("LLM Completion" /* LLM_COMPLETION */),
    properties: import_zod11.z.object({
      ...telemetryPropertiesSchema.shape,
      inputTokens: import_zod11.z.number(),
      outputTokens: import_zod11.z.number(),
      cacheReadTokens: import_zod11.z.number().optional(),
      cacheWriteTokens: import_zod11.z.number().optional(),
      cost: import_zod11.z.number().optional()
    })
  })
]);

// src/mode.ts
var import_zod12 = require("zod");
var groupOptionsSchema = import_zod12.z.object({
  fileRegex: import_zod12.z.string().optional().refine(
    (pattern) => {
      if (!pattern) {
        return true;
      }
      try {
        new RegExp(pattern);
        return true;
      } catch {
        return false;
      }
    },
    { message: "Invalid regular expression pattern" }
  ),
  description: import_zod12.z.string().optional()
});
var groupEntrySchema = import_zod12.z.union([toolGroupsSchema, import_zod12.z.tuple([toolGroupsSchema, groupOptionsSchema])]);
var groupEntryArraySchema = import_zod12.z.array(groupEntrySchema).refine(
  (groups) => {
    const seen = /* @__PURE__ */ new Set();
    return groups.every((group) => {
      const groupName = Array.isArray(group) ? group[0] : group;
      if (seen.has(groupName)) {
        return false;
      }
      seen.add(groupName);
      return true;
    });
  },
  { message: "Duplicate groups are not allowed" }
);
var modeConfigSchema = import_zod12.z.object({
  slug: import_zod12.z.string().regex(/^[a-zA-Z0-9-]+$/, "Slug must contain only letters numbers and dashes"),
  name: import_zod12.z.string().min(1, "Name is required"),
  roleDefinition: import_zod12.z.string().min(1, "Role definition is required"),
  whenToUse: import_zod12.z.string().optional(),
  description: import_zod12.z.string().optional(),
  customInstructions: import_zod12.z.string().optional(),
  groups: groupEntryArraySchema,
  source: import_zod12.z.enum(["global", "project"]).optional()
});
var customModesSettingsSchema = import_zod12.z.object({
  customModes: import_zod12.z.array(modeConfigSchema).refine(
    (modes) => {
      const slugs = /* @__PURE__ */ new Set();
      return modes.every((mode) => {
        if (slugs.has(mode.slug)) {
          return false;
        }
        slugs.add(mode.slug);
        return true;
      });
    },
    {
      message: "Duplicate mode slugs are not allowed"
    }
  )
});
var promptComponentSchema = import_zod12.z.object({
  roleDefinition: import_zod12.z.string().optional(),
  whenToUse: import_zod12.z.string().optional(),
  description: import_zod12.z.string().optional(),
  customInstructions: import_zod12.z.string().optional()
});
var customModePromptsSchema = import_zod12.z.record(import_zod12.z.string(), promptComponentSchema.optional());
var customSupportPromptsSchema = import_zod12.z.record(import_zod12.z.string(), import_zod12.z.string().optional());
var DEFAULT_MODES = [
  {
    slug: "architect",
    name: "\u{1F3D7}\uFE0F Architect",
    roleDefinition: "You are Roo, an experienced technical leader who is inquisitive and an excellent planner. Your goal is to gather information and get context to create a detailed plan for accomplishing the user's task, which the user will review and approve before they switch into another mode to implement the solution.",
    whenToUse: "Use this mode when you need to plan, design, or strategize before implementation. Perfect for breaking down complex problems, creating technical specifications, designing system architecture, or brainstorming solutions before coding.",
    description: "Plan and design before implementation",
    groups: ["read", ["edit", { fileRegex: "\\.md$", description: "Markdown files only" }], "browser", "mcp"],
    customInstructions: "1. Do some information gathering (using provided tools) to get more context about the task.\n\n2. You should also ask the user clarifying questions to get a better understanding of the task.\n\n3. Once you've gained more context about the user's request, break down the task into clear, actionable steps and create a todo list using the `update_todo_list` tool. Each todo item should be:\n   - Specific and actionable\n   - Listed in logical execution order\n   - Focused on a single, well-defined outcome\n   - Clear enough that another mode could execute it independently\n\n   **Note:** If the `update_todo_list` tool is not available, write the plan to a markdown file (e.g., `plan.md` or `todo.md`) instead.\n\n4. As you gather more information or discover new requirements, update the todo list to reflect the current understanding of what needs to be accomplished.\n\n5. Ask the user if they are pleased with this plan, or if they would like to make any changes. Think of this as a brainstorming session where you can discuss the task and refine the todo list.\n\n6. Include Mermaid diagrams if they help clarify complex workflows or system architecture. Please avoid using double quotes (\"\") and parentheses () inside square brackets ([]) in Mermaid diagrams, as this can cause parsing errors.\n\n7. Use the switch_mode tool to request that the user switch to another mode to implement the solution.\n\n**IMPORTANT: Focus on creating clear, actionable todo lists rather than lengthy markdown documents. Use the todo list as your primary planning tool to track and organize the work that needs to be done.**"
  },
  {
    slug: "code",
    name: "\u{1F4BB} Code",
    roleDefinition: "You are Roo, a highly skilled software engineer with extensive knowledge in many programming languages, frameworks, design patterns, and best practices.",
    whenToUse: "Use this mode when you need to write, modify, or refactor code. Ideal for implementing features, fixing bugs, creating new files, or making code improvements across any programming language or framework.",
    description: "Write, modify, and refactor code",
    groups: ["read", "edit", "browser", "command", "mcp"]
  },
  {
    slug: "ask",
    name: "\u2753 Ask",
    roleDefinition: "You are Roo, a knowledgeable technical assistant focused on answering questions and providing information about software development, technology, and related topics.",
    whenToUse: "Use this mode when you need explanations, documentation, or answers to technical questions. Best for understanding concepts, analyzing existing code, getting recommendations, or learning about technologies without making changes.",
    description: "Get answers and explanations",
    groups: ["read", "browser", "mcp"],
    customInstructions: "You can analyze code, explain concepts, and access external resources. Always answer the user's questions thoroughly, and do not switch to implementing code unless explicitly requested by the user. Include Mermaid diagrams when they clarify your response."
  },
  {
    slug: "debug",
    name: "\u{1FAB2} Debug",
    roleDefinition: "You are Roo, an expert software debugger specializing in systematic problem diagnosis and resolution.",
    whenToUse: "Use this mode when you're troubleshooting issues, investigating errors, or diagnosing problems. Specialized in systematic debugging, adding logging, analyzing stack traces, and identifying root causes before applying fixes.",
    description: "Diagnose and fix software issues",
    groups: ["read", "edit", "browser", "command", "mcp"],
    customInstructions: "Reflect on 5-7 different possible sources of the problem, distill those down to 1-2 most likely sources, and then add logs to validate your assumptions. Explicitly ask the user to confirm the diagnosis before fixing the problem."
  },
  {
    slug: "orchestrator",
    name: "\u{1FA83} Orchestrator",
    roleDefinition: "You are Roo, a strategic workflow orchestrator who coordinates complex tasks by delegating them to appropriate specialized modes. You have a comprehensive understanding of each mode's capabilities and limitations, allowing you to effectively break down complex problems into discrete tasks that can be solved by different specialists.",
    whenToUse: "Use this mode for complex, multi-step projects that require coordination across different specialties. Ideal when you need to break down large tasks into subtasks, manage workflows, or coordinate work that spans multiple domains or expertise areas.",
    description: "Coordinate tasks across multiple modes",
    groups: [],
    customInstructions: "Your role is to coordinate complex workflows by delegating tasks to specialized modes. As an orchestrator, you should:\n\n1. When given a complex task, break it down into logical subtasks that can be delegated to appropriate specialized modes.\n\n2. For each subtask, use the `new_task` tool to delegate. Choose the most appropriate mode for the subtask's specific goal and provide comprehensive instructions in the `message` parameter. These instructions must include:\n    *   All necessary context from the parent task or previous subtasks required to complete the work.\n    *   A clearly defined scope, specifying exactly what the subtask should accomplish.\n    *   An explicit statement that the subtask should *only* perform the work outlined in these instructions and not deviate.\n    *   An instruction for the subtask to signal completion by using the `attempt_completion` tool, providing a concise yet thorough summary of the outcome in the `result` parameter, keeping in mind that this summary will be the source of truth used to keep track of what was completed on this project.\n    *   A statement that these specific instructions supersede any conflicting general instructions the subtask's mode might have.\n\n3. Track and manage the progress of all subtasks. When a subtask is completed, analyze its results and determine the next steps.\n\n4. Help the user understand how the different subtasks fit together in the overall workflow. Provide clear reasoning about why you're delegating specific tasks to specific modes.\n\n5. When all subtasks are completed, synthesize the results and provide a comprehensive overview of what was accomplished.\n\n6. Ask clarifying questions when necessary to better understand how to break down complex tasks effectively.\n\n7. Suggest improvements to the workflow based on the results of completed subtasks.\n\nUse subtasks to maintain clarity. If a request significantly shifts focus or requires a different expertise (mode), consider creating a subtask rather than overloading the current one."
  }
];

// src/vscode.ts
var import_zod13 = require("zod");
var codeActionIds = ["explainCode", "fixCode", "improveCode", "addToContext", "newTask"];
var terminalActionIds = ["terminalAddToContext", "terminalFixCommand", "terminalExplainCommand"];
var commandIds = [
  "activationCompleted",
  "plusButtonClicked",
  "historyButtonClicked",
  "marketplaceButtonClicked",
  "popoutButtonClicked",
  "cloudButtonClicked",
  "settingsButtonClicked",
  "openInNewTab",
  "showHumanRelayDialog",
  "registerHumanRelayCallback",
  "unregisterHumanRelayCallback",
  "handleHumanRelayResponse",
  "newTask",
  "setCustomStoragePath",
  "importSettings",
  "focusInput",
  "acceptInput",
  "focusPanel",
  "toggleAutoApprove"
];
var languages = [
  "ca",
  "de",
  "en",
  "es",
  "fr",
  "hi",
  "id",
  "it",
  "ja",
  "ko",
  "nl",
  "pl",
  "pt-BR",
  "ru",
  "tr",
  "vi",
  "zh-CN",
  "zh-TW"
];
var languagesSchema = import_zod13.z.enum(languages);
var isLanguage = (value) => languages.includes(value);

// src/global-settings.ts
var DEFAULT_WRITE_DELAY_MS = 1e3;
var DEFAULT_TERMINAL_OUTPUT_CHARACTER_LIMIT = 5e4;
var MIN_CHECKPOINT_TIMEOUT_SECONDS = 10;
var MAX_CHECKPOINT_TIMEOUT_SECONDS = 60;
var DEFAULT_CHECKPOINT_TIMEOUT_SECONDS = 15;
var globalSettingsSchema = import_zod14.z.object({
  currentApiConfigName: import_zod14.z.string().optional(),
  listApiConfigMeta: import_zod14.z.array(providerSettingsEntrySchema).optional(),
  pinnedApiConfigs: import_zod14.z.record(import_zod14.z.string(), import_zod14.z.boolean()).optional(),
  lastShownAnnouncementId: import_zod14.z.string().optional(),
  customInstructions: import_zod14.z.string().optional(),
  taskHistory: import_zod14.z.array(historyItemSchema).optional(),
  dismissedUpsells: import_zod14.z.array(import_zod14.z.string()).optional(),
  // Image generation settings (experimental) - flattened for simplicity
  imageGenerationProvider: import_zod14.z.enum(["openrouter", "roo"]).optional(),
  openRouterImageApiKey: import_zod14.z.string().optional(),
  openRouterImageGenerationSelectedModel: import_zod14.z.string().optional(),
  condensingApiConfigId: import_zod14.z.string().optional(),
  customCondensingPrompt: import_zod14.z.string().optional(),
  autoApprovalEnabled: import_zod14.z.boolean().optional(),
  alwaysAllowReadOnly: import_zod14.z.boolean().optional(),
  alwaysAllowReadOnlyOutsideWorkspace: import_zod14.z.boolean().optional(),
  alwaysAllowWrite: import_zod14.z.boolean().optional(),
  alwaysAllowWriteOutsideWorkspace: import_zod14.z.boolean().optional(),
  alwaysAllowWriteProtected: import_zod14.z.boolean().optional(),
  writeDelayMs: import_zod14.z.number().min(0).optional(),
  alwaysAllowBrowser: import_zod14.z.boolean().optional(),
  alwaysApproveResubmit: import_zod14.z.boolean().optional(),
  requestDelaySeconds: import_zod14.z.number().optional(),
  alwaysAllowMcp: import_zod14.z.boolean().optional(),
  alwaysAllowModeSwitch: import_zod14.z.boolean().optional(),
  alwaysAllowSubtasks: import_zod14.z.boolean().optional(),
  alwaysAllowExecute: import_zod14.z.boolean().optional(),
  alwaysAllowFollowupQuestions: import_zod14.z.boolean().optional(),
  followupAutoApproveTimeoutMs: import_zod14.z.number().optional(),
  alwaysAllowUpdateTodoList: import_zod14.z.boolean().optional(),
  allowedCommands: import_zod14.z.array(import_zod14.z.string()).optional(),
  deniedCommands: import_zod14.z.array(import_zod14.z.string()).optional(),
  commandExecutionTimeout: import_zod14.z.number().optional(),
  commandTimeoutAllowlist: import_zod14.z.array(import_zod14.z.string()).optional(),
  preventCompletionWithOpenTodos: import_zod14.z.boolean().optional(),
  allowedMaxRequests: import_zod14.z.number().nullish(),
  allowedMaxCost: import_zod14.z.number().nullish(),
  autoCondenseContext: import_zod14.z.boolean().optional(),
  autoCondenseContextPercent: import_zod14.z.number().optional(),
  maxConcurrentFileReads: import_zod14.z.number().optional(),
  /**
   * Whether to include current time in the environment details
   * @default true
   */
  includeCurrentTime: import_zod14.z.boolean().optional(),
  /**
   * Whether to include current cost in the environment details
   * @default true
   */
  includeCurrentCost: import_zod14.z.boolean().optional(),
  /**
   * Maximum number of git status file entries to include in the environment details.
   * Set to 0 to disable git status. The header (branch, commits) is always included when > 0.
   * @default 0
   */
  maxGitStatusFiles: import_zod14.z.number().optional(),
  /**
   * Whether to include diagnostic messages (errors, warnings) in tool outputs
   * @default true
   */
  includeDiagnosticMessages: import_zod14.z.boolean().optional(),
  /**
   * Maximum number of diagnostic messages to include in tool outputs
   * @default 50
   */
  maxDiagnosticMessages: import_zod14.z.number().optional(),
  browserToolEnabled: import_zod14.z.boolean().optional(),
  browserViewportSize: import_zod14.z.string().optional(),
  screenshotQuality: import_zod14.z.number().optional(),
  remoteBrowserEnabled: import_zod14.z.boolean().optional(),
  remoteBrowserHost: import_zod14.z.string().optional(),
  cachedChromeHostUrl: import_zod14.z.string().optional(),
  enableCheckpoints: import_zod14.z.boolean().optional(),
  checkpointTimeout: import_zod14.z.number().int().min(MIN_CHECKPOINT_TIMEOUT_SECONDS).max(MAX_CHECKPOINT_TIMEOUT_SECONDS).optional(),
  ttsEnabled: import_zod14.z.boolean().optional(),
  ttsSpeed: import_zod14.z.number().optional(),
  soundEnabled: import_zod14.z.boolean().optional(),
  soundVolume: import_zod14.z.number().optional(),
  maxOpenTabsContext: import_zod14.z.number().optional(),
  maxWorkspaceFiles: import_zod14.z.number().optional(),
  showRooIgnoredFiles: import_zod14.z.boolean().optional(),
  maxReadFileLine: import_zod14.z.number().optional(),
  maxImageFileSize: import_zod14.z.number().optional(),
  maxTotalImageSize: import_zod14.z.number().optional(),
  terminalOutputLineLimit: import_zod14.z.number().optional(),
  terminalOutputCharacterLimit: import_zod14.z.number().optional(),
  terminalShellIntegrationTimeout: import_zod14.z.number().optional(),
  terminalShellIntegrationDisabled: import_zod14.z.boolean().optional(),
  terminalCommandDelay: import_zod14.z.number().optional(),
  terminalPowershellCounter: import_zod14.z.boolean().optional(),
  terminalZshClearEolMark: import_zod14.z.boolean().optional(),
  terminalZshOhMy: import_zod14.z.boolean().optional(),
  terminalZshP10k: import_zod14.z.boolean().optional(),
  terminalZdotdir: import_zod14.z.boolean().optional(),
  terminalCompressProgressBar: import_zod14.z.boolean().optional(),
  diagnosticsEnabled: import_zod14.z.boolean().optional(),
  rateLimitSeconds: import_zod14.z.number().optional(),
  diffEnabled: import_zod14.z.boolean().optional(),
  fuzzyMatchThreshold: import_zod14.z.number().optional(),
  experiments: experimentsSchema.optional(),
  codebaseIndexModels: codebaseIndexModelsSchema.optional(),
  codebaseIndexConfig: codebaseIndexConfigSchema.optional(),
  language: languagesSchema.optional(),
  telemetrySetting: telemetrySettingsSchema.optional(),
  mcpEnabled: import_zod14.z.boolean().optional(),
  enableMcpServerCreation: import_zod14.z.boolean().optional(),
  mode: import_zod14.z.string().optional(),
  modeApiConfigs: import_zod14.z.record(import_zod14.z.string(), import_zod14.z.string()).optional(),
  customModes: import_zod14.z.array(modeConfigSchema).optional(),
  customModePrompts: customModePromptsSchema.optional(),
  customSupportPrompts: customSupportPromptsSchema.optional(),
  enhancementApiConfigId: import_zod14.z.string().optional(),
  includeTaskHistoryInEnhance: import_zod14.z.boolean().optional(),
  historyPreviewCollapsed: import_zod14.z.boolean().optional(),
  reasoningBlockCollapsed: import_zod14.z.boolean().optional(),
  profileThresholds: import_zod14.z.record(import_zod14.z.string(), import_zod14.z.number()).optional(),
  hasOpenedModeSelector: import_zod14.z.boolean().optional(),
  lastModeExportPath: import_zod14.z.string().optional(),
  lastModeImportPath: import_zod14.z.string().optional()
});
var GLOBAL_SETTINGS_KEYS = globalSettingsSchema.keyof().options;
var rooCodeSettingsSchema = providerSettingsSchema.merge(globalSettingsSchema);
var SECRET_STATE_KEYS = [
  "apiKey",
  "glamaApiKey",
  "openRouterApiKey",
  "awsAccessKey",
  "awsApiKey",
  "awsSecretKey",
  "awsSessionToken",
  "openAiApiKey",
  "ollamaApiKey",
  "geminiApiKey",
  "openAiNativeApiKey",
  "cerebrasApiKey",
  "deepSeekApiKey",
  "doubaoApiKey",
  "moonshotApiKey",
  "mistralApiKey",
  "minimaxApiKey",
  "unboundApiKey",
  "requestyApiKey",
  "xaiApiKey",
  "groqApiKey",
  "chutesApiKey",
  "litellmApiKey",
  "deepInfraApiKey",
  "codeIndexOpenAiKey",
  "codeIndexQdrantApiKey",
  "codebaseIndexOpenAiCompatibleApiKey",
  "codebaseIndexGeminiApiKey",
  "codebaseIndexMistralApiKey",
  "codebaseIndexVercelAiGatewayApiKey",
  "codebaseIndexOpenRouterApiKey",
  "huggingFaceApiKey",
  "sambaNovaApiKey",
  "zaiApiKey",
  "fireworksApiKey",
  "featherlessApiKey",
  "ioIntelligenceApiKey",
  "vercelAiGatewayApiKey",
  "basetenApiKey"
];
var GLOBAL_SECRET_KEYS = [
  "openRouterImageApiKey"
  // For image generation
];
var isSecretStateKey = (key) => SECRET_STATE_KEYS.includes(key) || GLOBAL_SECRET_KEYS.includes(key);
var GLOBAL_STATE_KEYS = [...GLOBAL_SETTINGS_KEYS, ...PROVIDER_SETTINGS_KEYS].filter(
  (key) => !isSecretStateKey(key)
);
var isGlobalStateKey = (key) => GLOBAL_STATE_KEYS.includes(key);
var EVALS_SETTINGS = {
  apiProvider: "openrouter",
  openRouterUseMiddleOutTransform: false,
  lastShownAnnouncementId: "jul-09-2025-3-23-0",
  pinnedApiConfigs: {},
  autoApprovalEnabled: true,
  alwaysAllowReadOnly: true,
  alwaysAllowReadOnlyOutsideWorkspace: false,
  alwaysAllowWrite: true,
  alwaysAllowWriteOutsideWorkspace: false,
  alwaysAllowWriteProtected: false,
  writeDelayMs: 1e3,
  alwaysAllowBrowser: true,
  alwaysApproveResubmit: true,
  requestDelaySeconds: 10,
  alwaysAllowMcp: true,
  alwaysAllowModeSwitch: true,
  alwaysAllowSubtasks: true,
  alwaysAllowExecute: true,
  alwaysAllowFollowupQuestions: true,
  alwaysAllowUpdateTodoList: true,
  followupAutoApproveTimeoutMs: 0,
  allowedCommands: ["*"],
  commandExecutionTimeout: 20,
  commandTimeoutAllowlist: [],
  preventCompletionWithOpenTodos: false,
  browserToolEnabled: false,
  browserViewportSize: "900x600",
  screenshotQuality: 75,
  remoteBrowserEnabled: false,
  ttsEnabled: false,
  ttsSpeed: 1,
  soundEnabled: false,
  soundVolume: 0.5,
  terminalOutputLineLimit: 500,
  terminalOutputCharacterLimit: DEFAULT_TERMINAL_OUTPUT_CHARACTER_LIMIT,
  terminalShellIntegrationTimeout: 3e4,
  terminalCommandDelay: 0,
  terminalPowershellCounter: false,
  terminalZshOhMy: true,
  terminalZshClearEolMark: true,
  terminalZshP10k: false,
  terminalZdotdir: true,
  terminalCompressProgressBar: true,
  terminalShellIntegrationDisabled: true,
  diagnosticsEnabled: true,
  diffEnabled: true,
  fuzzyMatchThreshold: 1,
  enableCheckpoints: false,
  rateLimitSeconds: 0,
  maxOpenTabsContext: 20,
  maxWorkspaceFiles: 200,
  maxGitStatusFiles: 20,
  showRooIgnoredFiles: true,
  maxReadFileLine: -1,
  // -1 to enable full file reading.
  includeDiagnosticMessages: true,
  maxDiagnosticMessages: 50,
  language: "en",
  telemetrySetting: "enabled",
  mcpEnabled: false,
  mode: "code",
  // "architect",
  customModes: []
};
var EVALS_TIMEOUT = 5 * 60 * 1e3;

// src/marketplace.ts
var import_zod15 = require("zod");
var mcpParameterSchema = import_zod15.z.object({
  name: import_zod15.z.string().min(1),
  key: import_zod15.z.string().min(1),
  placeholder: import_zod15.z.string().optional(),
  optional: import_zod15.z.boolean().optional().default(false)
});
var mcpInstallationMethodSchema = import_zod15.z.object({
  name: import_zod15.z.string().min(1),
  content: import_zod15.z.string().min(1),
  parameters: import_zod15.z.array(mcpParameterSchema).optional(),
  prerequisites: import_zod15.z.array(import_zod15.z.string()).optional()
});
var marketplaceItemTypeSchema = import_zod15.z.enum(["mode", "mcp"]);
var baseMarketplaceItemSchema = import_zod15.z.object({
  id: import_zod15.z.string().min(1),
  name: import_zod15.z.string().min(1, "Name is required"),
  description: import_zod15.z.string(),
  author: import_zod15.z.string().optional(),
  authorUrl: import_zod15.z.string().url("Author URL must be a valid URL").optional(),
  tags: import_zod15.z.array(import_zod15.z.string()).optional(),
  prerequisites: import_zod15.z.array(import_zod15.z.string()).optional()
});
var modeMarketplaceItemSchema = baseMarketplaceItemSchema.extend({
  content: import_zod15.z.string().min(1)
  // YAML content for modes
});
var mcpMarketplaceItemSchema = baseMarketplaceItemSchema.extend({
  url: import_zod15.z.string().url(),
  // Required url field
  content: import_zod15.z.union([import_zod15.z.string().min(1), import_zod15.z.array(mcpInstallationMethodSchema)]),
  // Single config or array of methods
  parameters: import_zod15.z.array(mcpParameterSchema).optional()
});
var marketplaceItemSchema = import_zod15.z.discriminatedUnion("type", [
  // Mode marketplace item
  modeMarketplaceItemSchema.extend({
    type: import_zod15.z.literal("mode")
  }),
  // MCP marketplace item
  mcpMarketplaceItemSchema.extend({
    type: import_zod15.z.literal("mcp")
  })
]);
var installMarketplaceItemOptionsSchema = import_zod15.z.object({
  target: import_zod15.z.enum(["global", "project"]).optional().default("project"),
  parameters: import_zod15.z.record(import_zod15.z.string(), import_zod15.z.any()).optional()
});

// src/cloud.ts
var organizationAllowListSchema = import_zod16.z.object({
  allowAll: import_zod16.z.boolean(),
  providers: import_zod16.z.record(
    import_zod16.z.object({
      allowAll: import_zod16.z.boolean(),
      models: import_zod16.z.array(import_zod16.z.string()).optional()
    })
  )
});
var organizationDefaultSettingsSchema = globalSettingsSchema.pick({
  enableCheckpoints: true,
  fuzzyMatchThreshold: true,
  maxOpenTabsContext: true,
  maxReadFileLine: true,
  maxWorkspaceFiles: true,
  showRooIgnoredFiles: true,
  terminalCommandDelay: true,
  terminalCompressProgressBar: true,
  terminalOutputLineLimit: true,
  terminalShellIntegrationDisabled: true,
  terminalShellIntegrationTimeout: true,
  terminalZshClearEolMark: true
}).merge(
  import_zod16.z.object({
    maxOpenTabsContext: import_zod16.z.number().int().nonnegative().optional(),
    maxReadFileLine: import_zod16.z.number().int().gte(-1).optional(),
    maxWorkspaceFiles: import_zod16.z.number().int().nonnegative().optional(),
    terminalCommandDelay: import_zod16.z.number().int().nonnegative().optional(),
    terminalOutputLineLimit: import_zod16.z.number().int().nonnegative().optional(),
    terminalShellIntegrationTimeout: import_zod16.z.number().int().nonnegative().optional()
  })
);
var organizationCloudSettingsSchema = import_zod16.z.object({
  recordTaskMessages: import_zod16.z.boolean().optional(),
  enableTaskSharing: import_zod16.z.boolean().optional(),
  taskShareExpirationDays: import_zod16.z.number().int().positive().optional(),
  allowMembersViewAllTasks: import_zod16.z.boolean().optional()
});
var organizationFeaturesSchema = import_zod16.z.object({
  roomoteControlEnabled: import_zod16.z.boolean().optional()
});
var organizationSettingsSchema = import_zod16.z.object({
  version: import_zod16.z.number(),
  cloudSettings: organizationCloudSettingsSchema.optional(),
  defaultSettings: organizationDefaultSettingsSchema,
  allowList: organizationAllowListSchema,
  features: organizationFeaturesSchema.optional(),
  hiddenMcps: import_zod16.z.array(import_zod16.z.string()).optional(),
  hideMarketplaceMcps: import_zod16.z.boolean().optional(),
  mcps: import_zod16.z.array(mcpMarketplaceItemSchema).optional(),
  providerProfiles: import_zod16.z.record(import_zod16.z.string(), providerSettingsWithIdSchema).optional()
});
var userFeaturesSchema = import_zod16.z.object({
  roomoteControlEnabled: import_zod16.z.boolean().optional()
});
var userSettingsConfigSchema = import_zod16.z.object({
  extensionBridgeEnabled: import_zod16.z.boolean().optional(),
  taskSyncEnabled: import_zod16.z.boolean().optional()
});
var userSettingsDataSchema = import_zod16.z.object({
  features: userFeaturesSchema,
  settings: userSettingsConfigSchema,
  version: import_zod16.z.number()
});
var ORGANIZATION_ALLOW_ALL = {
  allowAll: true,
  providers: {}
};
var ORGANIZATION_DEFAULT = {
  version: 0,
  cloudSettings: {
    recordTaskMessages: true,
    enableTaskSharing: true,
    taskShareExpirationDays: 30,
    allowMembersViewAllTasks: true
  },
  defaultSettings: {},
  allowList: ORGANIZATION_ALLOW_ALL
};
var shareResponseSchema = import_zod16.z.object({
  success: import_zod16.z.boolean(),
  shareUrl: import_zod16.z.string().optional(),
  error: import_zod16.z.string().optional(),
  isNewShare: import_zod16.z.boolean().optional(),
  manageUrl: import_zod16.z.string().optional()
});
var ConnectionState = /* @__PURE__ */ ((ConnectionState2) => {
  ConnectionState2["DISCONNECTED"] = "disconnected";
  ConnectionState2["CONNECTING"] = "connecting";
  ConnectionState2["CONNECTED"] = "connected";
  ConnectionState2["RETRYING"] = "retrying";
  ConnectionState2["FAILED"] = "failed";
  return ConnectionState2;
})(ConnectionState || {});
var HEARTBEAT_INTERVAL_MS = 2e4;
var INSTANCE_TTL_SECONDS = 60;
var extensionTaskSchema = import_zod16.z.object({
  taskId: import_zod16.z.string(),
  taskStatus: import_zod16.z.nativeEnum(TaskStatus),
  taskAsk: clineMessageSchema.optional(),
  queuedMessages: import_zod16.z.array(queuedMessageSchema).optional(),
  parentTaskId: import_zod16.z.string().optional(),
  childTaskId: import_zod16.z.string().optional(),
  tokenUsage: tokenUsageSchema.optional(),
  ...taskMetadataSchema.shape
});
var extensionInstanceSchema = import_zod16.z.object({
  instanceId: import_zod16.z.string(),
  userId: import_zod16.z.string(),
  workspacePath: import_zod16.z.string(),
  appProperties: staticAppPropertiesSchema,
  gitProperties: gitPropertiesSchema.optional(),
  lastHeartbeat: import_zod16.z.coerce.number(),
  task: extensionTaskSchema,
  taskAsk: clineMessageSchema.optional(),
  taskHistory: import_zod16.z.array(import_zod16.z.string()),
  mode: import_zod16.z.string().optional(),
  modes: import_zod16.z.array(import_zod16.z.object({ slug: import_zod16.z.string(), name: import_zod16.z.string() })).optional(),
  providerProfile: import_zod16.z.string().optional(),
  providerProfiles: import_zod16.z.array(import_zod16.z.object({ name: import_zod16.z.string(), provider: import_zod16.z.string().optional() })).optional(),
  isCloudAgent: import_zod16.z.boolean().optional()
});
var ExtensionBridgeEventName = ((ExtensionBridgeEventName2) => {
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskCreated"] = "taskCreated" /* TaskCreated */] = "TaskCreated";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskStarted"] = "taskStarted" /* TaskStarted */] = "TaskStarted";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskCompleted"] = "taskCompleted" /* TaskCompleted */] = "TaskCompleted";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskAborted"] = "taskAborted" /* TaskAborted */] = "TaskAborted";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskFocused"] = "taskFocused" /* TaskFocused */] = "TaskFocused";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskUnfocused"] = "taskUnfocused" /* TaskUnfocused */] = "TaskUnfocused";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskActive"] = "taskActive" /* TaskActive */] = "TaskActive";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskInteractive"] = "taskInteractive" /* TaskInteractive */] = "TaskInteractive";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskResumable"] = "taskResumable" /* TaskResumable */] = "TaskResumable";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskIdle"] = "taskIdle" /* TaskIdle */] = "TaskIdle";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskPaused"] = "taskPaused" /* TaskPaused */] = "TaskPaused";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskUnpaused"] = "taskUnpaused" /* TaskUnpaused */] = "TaskUnpaused";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskSpawned"] = "taskSpawned" /* TaskSpawned */] = "TaskSpawned";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskDelegated"] = "taskDelegated" /* TaskDelegated */] = "TaskDelegated";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskDelegationCompleted"] = "taskDelegationCompleted" /* TaskDelegationCompleted */] = "TaskDelegationCompleted";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskDelegationResumed"] = "taskDelegationResumed" /* TaskDelegationResumed */] = "TaskDelegationResumed";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskUserMessage"] = "taskUserMessage" /* TaskUserMessage */] = "TaskUserMessage";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["TaskTokenUsageUpdated"] = "taskTokenUsageUpdated" /* TaskTokenUsageUpdated */] = "TaskTokenUsageUpdated";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["ModeChanged"] = "modeChanged" /* ModeChanged */] = "ModeChanged";
  ExtensionBridgeEventName2[ExtensionBridgeEventName2["ProviderProfileChanged"] = "providerProfileChanged" /* ProviderProfileChanged */] = "ProviderProfileChanged";
  ExtensionBridgeEventName2["InstanceRegistered"] = "instance_registered";
  ExtensionBridgeEventName2["InstanceUnregistered"] = "instance_unregistered";
  ExtensionBridgeEventName2["HeartbeatUpdated"] = "heartbeat_updated";
  return ExtensionBridgeEventName2;
})(ExtensionBridgeEventName || {});
var extensionBridgeEventSchema = import_zod16.z.discriminatedUnion("type", [
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskCreated),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskStarted),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskCompleted),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskAborted),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskFocused),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskUnfocused),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskActive),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskInteractive),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskResumable),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskIdle),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskPaused),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskUnpaused),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskSpawned),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskDelegated),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskDelegationCompleted),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskDelegationResumed),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskUserMessage),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.TaskTokenUsageUpdated),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.ModeChanged),
    instance: extensionInstanceSchema,
    mode: import_zod16.z.string(),
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(ExtensionBridgeEventName.ProviderProfileChanged),
    instance: extensionInstanceSchema,
    providerProfile: import_zod16.z.object({ name: import_zod16.z.string(), provider: import_zod16.z.string().optional() }),
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal("instance_registered" /* InstanceRegistered */),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal("instance_unregistered" /* InstanceUnregistered */),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal("heartbeat_updated" /* HeartbeatUpdated */),
    instance: extensionInstanceSchema,
    timestamp: import_zod16.z.number()
  })
]);
var ExtensionBridgeCommandName = /* @__PURE__ */ ((ExtensionBridgeCommandName2) => {
  ExtensionBridgeCommandName2["StartTask"] = "start_task";
  ExtensionBridgeCommandName2["StopTask"] = "stop_task";
  ExtensionBridgeCommandName2["ResumeTask"] = "resume_task";
  return ExtensionBridgeCommandName2;
})(ExtensionBridgeCommandName || {});
var extensionBridgeCommandSchema = import_zod16.z.discriminatedUnion("type", [
  import_zod16.z.object({
    type: import_zod16.z.literal("start_task" /* StartTask */),
    instanceId: import_zod16.z.string(),
    payload: import_zod16.z.object({
      text: import_zod16.z.string(),
      images: import_zod16.z.array(import_zod16.z.string()).optional(),
      mode: import_zod16.z.string().optional(),
      providerProfile: import_zod16.z.string().optional()
    }),
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal("stop_task" /* StopTask */),
    instanceId: import_zod16.z.string(),
    payload: import_zod16.z.object({ taskId: import_zod16.z.string() }),
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal("resume_task" /* ResumeTask */),
    instanceId: import_zod16.z.string(),
    payload: import_zod16.z.object({ taskId: import_zod16.z.string() }),
    timestamp: import_zod16.z.number()
  })
]);
var TaskBridgeEventName = ((TaskBridgeEventName2) => {
  TaskBridgeEventName2[TaskBridgeEventName2["Message"] = "message" /* Message */] = "Message";
  TaskBridgeEventName2[TaskBridgeEventName2["TaskModeSwitched"] = "taskModeSwitched" /* TaskModeSwitched */] = "TaskModeSwitched";
  TaskBridgeEventName2[TaskBridgeEventName2["TaskInteractive"] = "taskInteractive" /* TaskInteractive */] = "TaskInteractive";
  return TaskBridgeEventName2;
})(TaskBridgeEventName || {});
var taskBridgeEventSchema = import_zod16.z.discriminatedUnion("type", [
  import_zod16.z.object({
    type: import_zod16.z.literal(TaskBridgeEventName.Message),
    taskId: import_zod16.z.string(),
    action: import_zod16.z.string(),
    message: clineMessageSchema
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(TaskBridgeEventName.TaskModeSwitched),
    taskId: import_zod16.z.string(),
    mode: import_zod16.z.string()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal(TaskBridgeEventName.TaskInteractive),
    taskId: import_zod16.z.string()
  })
]);
var TaskBridgeCommandName = /* @__PURE__ */ ((TaskBridgeCommandName2) => {
  TaskBridgeCommandName2["Message"] = "message";
  TaskBridgeCommandName2["ApproveAsk"] = "approve_ask";
  TaskBridgeCommandName2["DenyAsk"] = "deny_ask";
  return TaskBridgeCommandName2;
})(TaskBridgeCommandName || {});
var taskBridgeCommandSchema = import_zod16.z.discriminatedUnion("type", [
  import_zod16.z.object({
    type: import_zod16.z.literal("message" /* Message */),
    taskId: import_zod16.z.string(),
    payload: import_zod16.z.object({
      text: import_zod16.z.string(),
      images: import_zod16.z.array(import_zod16.z.string()).optional(),
      mode: import_zod16.z.string().optional(),
      providerProfile: import_zod16.z.string().optional()
    }),
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal("approve_ask" /* ApproveAsk */),
    taskId: import_zod16.z.string(),
    payload: import_zod16.z.object({
      text: import_zod16.z.string().optional(),
      images: import_zod16.z.array(import_zod16.z.string()).optional()
    }),
    timestamp: import_zod16.z.number()
  }),
  import_zod16.z.object({
    type: import_zod16.z.literal("deny_ask" /* DenyAsk */),
    taskId: import_zod16.z.string(),
    payload: import_zod16.z.object({
      text: import_zod16.z.string().optional(),
      images: import_zod16.z.array(import_zod16.z.string()).optional()
    }),
    timestamp: import_zod16.z.number()
  })
]);
var ExtensionSocketEvents = /* @__PURE__ */ ((ExtensionSocketEvents2) => {
  ExtensionSocketEvents2["CONNECTED"] = "extension:connected";
  ExtensionSocketEvents2["REGISTER"] = "extension:register";
  ExtensionSocketEvents2["UNREGISTER"] = "extension:unregister";
  ExtensionSocketEvents2["HEARTBEAT"] = "extension:heartbeat";
  ExtensionSocketEvents2["EVENT"] = "extension:event";
  ExtensionSocketEvents2["RELAYED_EVENT"] = "extension:relayed_event";
  ExtensionSocketEvents2["COMMAND"] = "extension:command";
  ExtensionSocketEvents2["RELAYED_COMMAND"] = "extension:relayed_command";
  return ExtensionSocketEvents2;
})(ExtensionSocketEvents || {});
var TaskSocketEvents = /* @__PURE__ */ ((TaskSocketEvents2) => {
  TaskSocketEvents2["JOIN"] = "task:join";
  TaskSocketEvents2["LEAVE"] = "task:leave";
  TaskSocketEvents2["EVENT"] = "task:event";
  TaskSocketEvents2["RELAYED_EVENT"] = "task:relayed_event";
  TaskSocketEvents2["COMMAND"] = "task:command";
  TaskSocketEvents2["RELAYED_COMMAND"] = "task:relayed_command";
  return TaskSocketEvents2;
})(TaskSocketEvents || {});
var usageStatsSchema = import_zod16.z.object({
  success: import_zod16.z.boolean(),
  data: import_zod16.z.object({
    dates: import_zod16.z.array(import_zod16.z.string()),
    // Array of date strings
    tasks: import_zod16.z.array(import_zod16.z.number()),
    // Array of task counts
    tokens: import_zod16.z.array(import_zod16.z.number()),
    // Array of token counts
    costs: import_zod16.z.array(import_zod16.z.number()),
    // Array of costs in USD
    totals: import_zod16.z.object({
      tasks: import_zod16.z.number(),
      tokens: import_zod16.z.number(),
      cost: import_zod16.z.number()
      // Total cost in USD
    })
  }),
  period: import_zod16.z.number()
  // Period in days (e.g., 30)
});

// src/cookie-consent.ts
var CONSENT_COOKIE_NAME = "roo-code-cookie-consent";
var COOKIE_CONSENT_EVENTS = {
  CHANGED: "cookieConsentChanged"
};

// src/followup.ts
var import_zod17 = require("zod");
var suggestionItemSchema = import_zod17.z.object({
  answer: import_zod17.z.string(),
  mode: import_zod17.z.string().optional()
});
var followUpDataSchema = import_zod17.z.object({
  question: import_zod17.z.string().optional(),
  suggest: import_zod17.z.array(suggestionItemSchema).optional()
});

// src/image-generation.ts
var IMAGE_GENERATION_MODELS = [
  // OpenRouter models
  { value: "google/gemini-2.5-flash-image", label: "Gemini 2.5 Flash Image", provider: "openrouter" },
  { value: "google/gemini-3-pro-image-preview", label: "Gemini 3 Pro Image Preview", provider: "openrouter" },
  { value: "openai/gpt-5-image", label: "GPT-5 Image", provider: "openrouter" },
  { value: "openai/gpt-5-image-mini", label: "GPT-5 Image Mini", provider: "openrouter" },
  { value: "black-forest-labs/flux.2-flex", label: "Black Forest Labs FLUX.2 Flex", provider: "openrouter" },
  { value: "black-forest-labs/flux.2-pro", label: "Black Forest Labs FLUX.2 Pro", provider: "openrouter" },
  // Roo Code Cloud models
  { value: "google/gemini-2.5-flash-image", label: "Gemini 2.5 Flash Image", provider: "roo" },
  { value: "google/gemini-3-pro-image", label: "Gemini 3 Pro Image", provider: "roo" },
  {
    value: "bfl/flux-2-pro:free",
    label: "Black Forest Labs FLUX.2 Pro (Free)",
    provider: "roo",
    apiMethod: "images_api"
  }
];
var IMAGE_GENERATION_MODEL_IDS = IMAGE_GENERATION_MODELS.map((m) => m.value);
function getImageGenerationProvider(explicitProvider, hasExistingModel) {
  return explicitProvider !== void 0 ? explicitProvider : hasExistingModel ? "openrouter" : "roo";
}

// src/ipc.ts
var import_zod18 = require("zod");
var IpcMessageType = /* @__PURE__ */ ((IpcMessageType2) => {
  IpcMessageType2["Connect"] = "Connect";
  IpcMessageType2["Disconnect"] = "Disconnect";
  IpcMessageType2["Ack"] = "Ack";
  IpcMessageType2["TaskCommand"] = "TaskCommand";
  IpcMessageType2["TaskEvent"] = "TaskEvent";
  return IpcMessageType2;
})(IpcMessageType || {});
var IpcOrigin = /* @__PURE__ */ ((IpcOrigin2) => {
  IpcOrigin2["Client"] = "client";
  IpcOrigin2["Server"] = "server";
  return IpcOrigin2;
})(IpcOrigin || {});
var ackSchema = import_zod18.z.object({
  clientId: import_zod18.z.string(),
  pid: import_zod18.z.number(),
  ppid: import_zod18.z.number()
});
var TaskCommandName = /* @__PURE__ */ ((TaskCommandName2) => {
  TaskCommandName2["StartNewTask"] = "StartNewTask";
  TaskCommandName2["CancelTask"] = "CancelTask";
  TaskCommandName2["CloseTask"] = "CloseTask";
  TaskCommandName2["ResumeTask"] = "ResumeTask";
  TaskCommandName2["SendMessage"] = "SendMessage";
  return TaskCommandName2;
})(TaskCommandName || {});
var taskCommandSchema = import_zod18.z.discriminatedUnion("commandName", [
  import_zod18.z.object({
    commandName: import_zod18.z.literal("StartNewTask" /* StartNewTask */),
    data: import_zod18.z.object({
      configuration: rooCodeSettingsSchema,
      text: import_zod18.z.string(),
      images: import_zod18.z.array(import_zod18.z.string()).optional(),
      newTab: import_zod18.z.boolean().optional()
    })
  }),
  import_zod18.z.object({
    commandName: import_zod18.z.literal("CancelTask" /* CancelTask */),
    data: import_zod18.z.string()
  }),
  import_zod18.z.object({
    commandName: import_zod18.z.literal("CloseTask" /* CloseTask */),
    data: import_zod18.z.string()
  }),
  import_zod18.z.object({
    commandName: import_zod18.z.literal("ResumeTask" /* ResumeTask */),
    data: import_zod18.z.string()
  }),
  import_zod18.z.object({
    commandName: import_zod18.z.literal("SendMessage" /* SendMessage */),
    data: import_zod18.z.object({
      text: import_zod18.z.string().optional(),
      images: import_zod18.z.array(import_zod18.z.string()).optional()
    })
  })
]);
var ipcMessageSchema = import_zod18.z.discriminatedUnion("type", [
  import_zod18.z.object({
    type: import_zod18.z.literal("Ack" /* Ack */),
    origin: import_zod18.z.literal("server" /* Server */),
    data: ackSchema
  }),
  import_zod18.z.object({
    type: import_zod18.z.literal("TaskCommand" /* TaskCommand */),
    origin: import_zod18.z.literal("client" /* Client */),
    clientId: import_zod18.z.string(),
    data: taskCommandSchema
  }),
  import_zod18.z.object({
    type: import_zod18.z.literal("TaskEvent" /* TaskEvent */),
    origin: import_zod18.z.literal("server" /* Server */),
    relayClientId: import_zod18.z.string().optional(),
    data: taskEventSchema
  })
]);

// src/mcp.ts
var import_zod19 = require("zod");
var mcpExecutionStatusSchema = import_zod19.z.discriminatedUnion("status", [
  import_zod19.z.object({
    executionId: import_zod19.z.string(),
    status: import_zod19.z.literal("started"),
    serverName: import_zod19.z.string(),
    toolName: import_zod19.z.string()
  }),
  import_zod19.z.object({
    executionId: import_zod19.z.string(),
    status: import_zod19.z.literal("output"),
    response: import_zod19.z.string()
  }),
  import_zod19.z.object({
    executionId: import_zod19.z.string(),
    status: import_zod19.z.literal("completed"),
    response: import_zod19.z.string().optional()
  }),
  import_zod19.z.object({
    executionId: import_zod19.z.string(),
    status: import_zod19.z.literal("error"),
    error: import_zod19.z.string().optional()
  })
]);

// src/single-file-read-models.ts
function shouldUseSingleFileRead(modelId) {
  return modelId.includes("grok-code-fast-1") || modelId.includes("code-supernova");
}

// src/todo.ts
var import_zod20 = require("zod");
var todoStatusSchema = import_zod20.z.enum(["pending", "in_progress", "completed"]);
var todoItemSchema = import_zod20.z.object({
  id: import_zod20.z.string(),
  content: import_zod20.z.string(),
  status: todoStatusSchema
});

// src/terminal.ts
var import_zod21 = require("zod");
var commandExecutionStatusSchema = import_zod21.z.discriminatedUnion("status", [
  import_zod21.z.object({
    executionId: import_zod21.z.string(),
    status: import_zod21.z.literal("started"),
    pid: import_zod21.z.number().optional(),
    command: import_zod21.z.string()
  }),
  import_zod21.z.object({
    executionId: import_zod21.z.string(),
    status: import_zod21.z.literal("output"),
    output: import_zod21.z.string()
  }),
  import_zod21.z.object({
    executionId: import_zod21.z.string(),
    status: import_zod21.z.literal("exited"),
    exitCode: import_zod21.z.number().optional()
  }),
  import_zod21.z.object({
    executionId: import_zod21.z.string(),
    status: import_zod21.z.literal("fallback")
  }),
  import_zod21.z.object({
    executionId: import_zod21.z.string(),
    status: import_zod21.z.literal("timeout")
  })
]);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ANTHROPIC_DEFAULT_MAX_TOKENS,
  ANTHROPIC_STYLE_PROVIDERS,
  AWS_INFERENCE_PROFILE_MAPPING,
  BEDROCK_1M_CONTEXT_MODEL_IDS,
  BEDROCK_DEFAULT_CONTEXT,
  BEDROCK_DEFAULT_TEMPERATURE,
  BEDROCK_GLOBAL_INFERENCE_MODEL_IDS,
  BEDROCK_MAX_TOKENS,
  BEDROCK_REGIONS,
  CLAUDE_CODE_DEFAULT_MAX_OUTPUT_TOKENS,
  CODEBASE_INDEX_DEFAULTS,
  CONSENT_COOKIE_NAME,
  COOKIE_CONSENT_EVENTS,
  ConnectionState,
  DEEP_SEEK_DEFAULT_TEMPERATURE,
  DEFAULT_CHECKPOINT_TIMEOUT_SECONDS,
  DEFAULT_CONSECUTIVE_MISTAKE_LIMIT,
  DEFAULT_MODES,
  DEFAULT_TERMINAL_OUTPUT_CHARACTER_LIMIT,
  DEFAULT_WRITE_DELAY_MS,
  DOUBAO_API_BASE_URL,
  DOUBAO_API_CHAT_PATH,
  EVALS_SETTINGS,
  EVALS_TIMEOUT,
  ExtensionBridgeCommandName,
  ExtensionBridgeEventName,
  ExtensionSocketEvents,
  GLAMA_DEFAULT_TEMPERATURE,
  GLOBAL_SECRET_KEYS,
  GLOBAL_SETTINGS_KEYS,
  GLOBAL_STATE_KEYS,
  HEARTBEAT_INTERVAL_MS,
  HUGGINGFACE_API_URL,
  HUGGINGFACE_CACHE_DURATION,
  HUGGINGFACE_DEFAULT_CONTEXT_WINDOW,
  HUGGINGFACE_DEFAULT_MAX_TOKENS,
  HUGGINGFACE_MAX_TOKENS_FALLBACK,
  HUGGINGFACE_SLIDER_MIN,
  HUGGINGFACE_SLIDER_STEP,
  HUGGINGFACE_TEMPERATURE_MAX_VALUE,
  IMAGE_GENERATION_MODELS,
  IMAGE_GENERATION_MODEL_IDS,
  INSTANCE_TTL_SECONDS,
  IO_INTELLIGENCE_CACHE_DURATION,
  IpcMessageType,
  IpcOrigin,
  LMSTUDIO_DEFAULT_TEMPERATURE,
  MAX_CHECKPOINT_TIMEOUT_SECONDS,
  MINIMAX_DEFAULT_MAX_TOKENS,
  MINIMAX_DEFAULT_TEMPERATURE,
  MIN_CHECKPOINT_TIMEOUT_SECONDS,
  MISTRAL_DEFAULT_TEMPERATURE,
  MODELS_BY_PROVIDER,
  MOONSHOT_DEFAULT_TEMPERATURE,
  OPENAI_AZURE_AI_INFERENCE_PATH,
  OPENAI_NATIVE_DEFAULT_TEMPERATURE,
  OPENROUTER_DEFAULT_PROVIDER_NAME,
  OPEN_ROUTER_PROMPT_CACHING_MODELS,
  OPEN_ROUTER_REASONING_BUDGET_MODELS,
  OPEN_ROUTER_REQUIRED_REASONING_BUDGET_MODELS,
  ORGANIZATION_ALLOW_ALL,
  ORGANIZATION_DEFAULT,
  PROVIDER_SETTINGS_KEYS,
  RooCodeEventName,
  RooModelSchema,
  RooModelsResponseSchema,
  RooPricingSchema,
  SECRET_STATE_KEYS,
  TOOL_PROTOCOL,
  TaskBridgeCommandName,
  TaskBridgeEventName,
  TaskCommandName,
  TaskSocketEvents,
  TaskStatus,
  TelemetryEventName,
  VERCEL_AI_GATEWAY_DEFAULT_TEMPERATURE,
  VERCEL_AI_GATEWAY_PROMPT_CACHING_MODELS,
  VERCEL_AI_GATEWAY_VISION_AND_TOOLS_MODELS,
  VERCEL_AI_GATEWAY_VISION_ONLY_MODELS,
  VERTEX_REGIONS,
  ZAI_DEFAULT_TEMPERATURE,
  ackSchema,
  anthropicDefaultModelId,
  anthropicModels,
  appPropertiesSchema,
  azureOpenAiDefaultApiVersion,
  basetenDefaultModelId,
  basetenModels,
  bedrockDefaultModelId,
  bedrockDefaultPromptRouterModelId,
  bedrockModels,
  cerebrasDefaultModelId,
  cerebrasModels,
  chutesDefaultModelId,
  chutesDefaultModelInfo,
  chutesModels,
  claudeCodeDefaultModelId,
  claudeCodeModels,
  clineAskSchema,
  clineAsks,
  clineMessageSchema,
  clineSaySchema,
  clineSays,
  cloudAppPropertiesSchema,
  codeActionIds,
  codebaseIndexConfigSchema,
  codebaseIndexModelsSchema,
  codebaseIndexProviderSchema,
  commandExecutionStatusSchema,
  commandIds,
  contextCondenseSchema,
  convertModelNameForVertex,
  customModePromptsSchema,
  customModesSettingsSchema,
  customProviders,
  customSupportPromptsSchema,
  deepInfraDefaultModelId,
  deepInfraDefaultModelInfo,
  deepSeekDefaultModelId,
  deepSeekModels,
  discriminatedProviderSettingsWithIdSchema,
  doubaoDefaultModelId,
  doubaoDefaultModelInfo,
  doubaoModels,
  dynamicAppPropertiesSchema,
  dynamicProviders,
  experimentIds,
  experimentIdsSchema,
  experimentsSchema,
  extensionBridgeCommandSchema,
  extensionBridgeEventSchema,
  extensionInstanceSchema,
  fauxProviders,
  featherlessDefaultModelId,
  featherlessModels,
  fireworksDefaultModelId,
  fireworksModels,
  followUpDataSchema,
  geminiDefaultModelId,
  geminiModels,
  getApiProtocol,
  getClaudeCodeModelId,
  getEffectiveProtocol,
  getImageGenerationProvider,
  getModelId,
  getProviderDefaultModelId,
  gitPropertiesSchema,
  glamaDefaultModelId,
  glamaDefaultModelInfo,
  globalSettingsSchema,
  groqDefaultModelId,
  groqModels,
  groupEntrySchema,
  groupOptionsSchema,
  historyItemSchema,
  idleAsks,
  installMarketplaceItemOptionsSchema,
  interactiveAsks,
  internalProviders,
  internationalZAiDefaultModelId,
  internationalZAiModels,
  ioIntelligenceDefaultBaseUrl,
  ioIntelligenceDefaultModelId,
  ioIntelligenceModels,
  ipcMessageSchema,
  isCustomProvider,
  isDynamicProvider,
  isFauxProvider,
  isGlobalStateKey,
  isIdleAsk,
  isInteractiveAsk,
  isInternalProvider,
  isLanguage,
  isLocalProvider,
  isModelParameter,
  isNativeProtocol,
  isNonBlockingAsk,
  isProviderName,
  isResumableAsk,
  isSecretStateKey,
  isTypicalProvider,
  lMStudioDefaultModelId,
  lMStudioDefaultModelInfo,
  languages,
  languagesSchema,
  litellmDefaultModelId,
  litellmDefaultModelInfo,
  localProviders,
  mainlandZAiDefaultModelId,
  mainlandZAiModels,
  marketplaceItemSchema,
  marketplaceItemTypeSchema,
  mcpExecutionStatusSchema,
  mcpInstallationMethodSchema,
  mcpMarketplaceItemSchema,
  mcpParameterSchema,
  minimaxDefaultModelId,
  minimaxDefaultModelInfo,
  minimaxModels,
  mistralDefaultModelId,
  mistralModels,
  modeConfigSchema,
  modeMarketplaceItemSchema,
  modelIdKeys,
  modelIdKeysByProvider,
  modelInfoSchema,
  modelParameters,
  modelParametersSchema,
  moonshotDefaultModelId,
  moonshotModels,
  nonBlockingAsks,
  ollamaDefaultModelId,
  ollamaDefaultModelInfo,
  openAiModelInfoSaneDefaults,
  openAiNativeDefaultModelId,
  openAiNativeModels,
  openRouterDefaultModelId,
  openRouterDefaultModelInfo,
  organizationAllowListSchema,
  organizationCloudSettingsSchema,
  organizationDefaultSettingsSchema,
  organizationFeaturesSchema,
  organizationSettingsSchema,
  promptComponentSchema,
  providerNames,
  providerNamesSchema,
  providerSettingsEntrySchema,
  providerSettingsSchema,
  providerSettingsSchemaDiscriminated,
  providerSettingsWithIdSchema,
  queuedMessageSchema,
  qwenCodeDefaultModelId,
  qwenCodeModels,
  reasoningEffortExtendedSchema,
  reasoningEffortSettingSchema,
  reasoningEffortSettingValues,
  reasoningEffortWithMinimalSchema,
  reasoningEfforts,
  reasoningEffortsExtended,
  reasoningEffortsSchema,
  requestyDefaultModelId,
  requestyDefaultModelInfo,
  resumableAsks,
  rooCodeEventsSchema,
  rooCodeSettingsSchema,
  rooCodeTelemetryEventSchema,
  rooDefaultModelId,
  rooModels,
  sambaNovaDefaultModelId,
  sambaNovaModels,
  serviceTierSchema,
  serviceTiers,
  shareResponseSchema,
  shouldUseSingleFileRead,
  staticAppPropertiesSchema,
  suggestionItemSchema,
  taskBridgeCommandSchema,
  taskBridgeEventSchema,
  taskCommandSchema,
  taskEventSchema,
  taskMetadataSchema,
  taskPropertiesSchema,
  telemetryPropertiesSchema,
  telemetrySettings,
  telemetrySettingsSchema,
  terminalActionIds,
  todoItemSchema,
  todoStatusSchema,
  tokenUsageSchema,
  toolGroups,
  toolGroupsSchema,
  toolNames,
  toolNamesSchema,
  toolProgressStatusSchema,
  toolUsageSchema,
  unboundDefaultModelId,
  unboundDefaultModelInfo,
  usageStatsSchema,
  userFeaturesSchema,
  userSettingsConfigSchema,
  userSettingsDataSchema,
  verbosityLevels,
  verbosityLevelsSchema,
  vercelAiGatewayDefaultModelId,
  vercelAiGatewayDefaultModelInfo,
  vertexDefaultModelId,
  vertexModels,
  vscodeLlmDefaultModelId,
  vscodeLlmModels,
  xaiDefaultModelId,
  xaiModels,
  zaiApiLineConfigs,
  zaiApiLineSchema
});
//# sourceMappingURL=index.cjs.map