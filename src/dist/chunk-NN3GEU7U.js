import {
  require_dist_cjs as require_dist_cjs11,
  require_dist_cjs2 as require_dist_cjs15
} from "./chunk-PZCJD5GR.js";
import {
  require_dist_cjs as require_dist_cjs14
} from "./chunk-WPKHEWHD.js";
import {
  FromStringShapeDeserializer,
  HttpBindingProtocol,
  HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer,
  LazyJsonString,
  NormalizedSchema,
  NumericValue,
  RpcProtocol,
  SerdeContext,
  TypeRegistry,
  _parseEpochTimestamp,
  collectBody,
  dateToUtcString,
  deref,
  determineTimestampFormat,
  extendedEncodeURIComponent,
  import_uuid,
  init_protocols,
  init_schema,
  init_serde,
  nv,
  parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime,
  requestBuilder,
  require_dist_cjs as require_dist_cjs2,
  require_dist_cjs10,
  require_dist_cjs11 as require_dist_cjs13,
  require_dist_cjs2 as require_dist_cjs3,
  require_dist_cjs3 as require_dist_cjs7,
  require_dist_cjs4 as require_dist_cjs8,
  require_dist_cjs8 as require_dist_cjs9
} from "./chunk-TYZDO54P.js";
import {
  require_dist_cjs as require_dist_cjs4,
  require_dist_cjs2 as require_dist_cjs5,
  require_dist_cjs3 as require_dist_cjs6
} from "./chunk-PARUIAYX.js";
import {
  emitWarningIfUnsupportedVersion,
  init_client,
  setCredentialFeature,
  setFeature,
  setTokenFeature,
  state
} from "./chunk-GV46K7LA.js";
import {
  require_dist_cjs
} from "./chunk-S43WTMWE.js";
import {
  require_dist_cjs as require_dist_cjs12
} from "./chunk-46Y7YWVF.js";
import {
  __commonJS,
  __esm,
  __export,
  __require,
  __toCommonJS,
  __toESM
} from "./chunk-PJNRM37X.js";

// ../node_modules/.pnpm/@aws-sdk+middleware-host-header@3.922.0/node_modules/@aws-sdk/middleware-host-header/dist-cjs/index.js
var require_dist_cjs16 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+middleware-host-header@3.922.0/node_modules/@aws-sdk/middleware-host-header/dist-cjs/index.js"(exports) {
    "use strict";
    var protocolHttp = require_dist_cjs2();
    function resolveHostHeaderConfig(input) {
      return input;
    }
    var hostHeaderMiddleware = (options) => (next) => async (args) => {
      if (!protocolHttp.HttpRequest.isInstance(args.request))
        return next(args);
      const { request } = args;
      const { handlerProtocol = "" } = options.requestHandler.metadata || {};
      if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
      } else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null)
          host += `:${request.port}`;
        request.headers["host"] = host;
      }
      return next(args);
    };
    var hostHeaderMiddlewareOptions = {
      name: "hostHeaderMiddleware",
      step: "build",
      priority: "low",
      tags: ["HOST"],
      override: true
    };
    var getHostHeaderPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
      }
    });
    exports.getHostHeaderPlugin = getHostHeaderPlugin;
    exports.hostHeaderMiddleware = hostHeaderMiddleware;
    exports.hostHeaderMiddlewareOptions = hostHeaderMiddlewareOptions;
    exports.resolveHostHeaderConfig = resolveHostHeaderConfig;
  }
});

// ../node_modules/.pnpm/@aws-sdk+middleware-logger@3.922.0/node_modules/@aws-sdk/middleware-logger/dist-cjs/index.js
var require_dist_cjs17 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+middleware-logger@3.922.0/node_modules/@aws-sdk/middleware-logger/dist-cjs/index.js"(exports) {
    "use strict";
    var loggerMiddleware = () => (next, context) => async (args) => {
      try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger?.info?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          output: outputFilterSensitiveLog(outputWithoutMetadata),
          metadata: $metadata
        });
        return response;
      } catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger?.error?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          error,
          metadata: error.$metadata
        });
        throw error;
      }
    };
    var loggerMiddlewareOptions = {
      name: "loggerMiddleware",
      tags: ["LOGGER"],
      step: "initialize",
      override: true
    };
    var getLoggerPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
      }
    });
    exports.getLoggerPlugin = getLoggerPlugin;
    exports.loggerMiddleware = loggerMiddleware;
    exports.loggerMiddlewareOptions = loggerMiddlewareOptions;
  }
});

// ../node_modules/.pnpm/@aws+lambda-invoke-store@0.1.1/node_modules/@aws/lambda-invoke-store/dist-es/invoke-store.js
var invoke_store_exports = {};
__export(invoke_store_exports, {
  InvokeStore: () => InvokeStore
});
import { AsyncLocalStorage } from "async_hooks";
var noGlobalAwsLambda, PROTECTED_KEYS, InvokeStoreImpl, instance, InvokeStore;
var init_invoke_store = __esm({
  "../node_modules/.pnpm/@aws+lambda-invoke-store@0.1.1/node_modules/@aws/lambda-invoke-store/dist-es/invoke-store.js"() {
    noGlobalAwsLambda = process.env["AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA"] === "1" || process.env["AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA"] === "true";
    if (!noGlobalAwsLambda) {
      globalThis.awslambda = globalThis.awslambda || {};
    }
    PROTECTED_KEYS = {
      REQUEST_ID: Symbol("_AWS_LAMBDA_REQUEST_ID"),
      X_RAY_TRACE_ID: Symbol("_AWS_LAMBDA_X_RAY_TRACE_ID"),
      TENANT_ID: Symbol("_AWS_LAMBDA_TENANT_ID")
    };
    InvokeStoreImpl = class {
      static storage = new AsyncLocalStorage();
      static PROTECTED_KEYS = PROTECTED_KEYS;
      static run(context, fn) {
        return this.storage.run({ ...context }, fn);
      }
      static getContext() {
        return this.storage.getStore();
      }
      static get(key) {
        const context = this.storage.getStore();
        return context?.[key];
      }
      static set(key, value) {
        if (this.isProtectedKey(key)) {
          throw new Error(`Cannot modify protected Lambda context field`);
        }
        const context = this.storage.getStore();
        if (context) {
          context[key] = value;
        }
      }
      static getRequestId() {
        return this.get(this.PROTECTED_KEYS.REQUEST_ID) ?? "-";
      }
      static getXRayTraceId() {
        return this.get(this.PROTECTED_KEYS.X_RAY_TRACE_ID);
      }
      static getTenantId() {
        return this.get(this.PROTECTED_KEYS.TENANT_ID);
      }
      static hasContext() {
        return this.storage.getStore() !== void 0;
      }
      static isProtectedKey(key) {
        return key === this.PROTECTED_KEYS.REQUEST_ID || key === this.PROTECTED_KEYS.X_RAY_TRACE_ID;
      }
    };
    if (!noGlobalAwsLambda && globalThis.awslambda?.InvokeStore) {
      instance = globalThis.awslambda.InvokeStore;
    } else {
      instance = InvokeStoreImpl;
      if (!noGlobalAwsLambda && globalThis.awslambda) {
        globalThis.awslambda.InvokeStore = instance;
      }
    }
    InvokeStore = instance;
  }
});

// ../node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.922.0/node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/recursionDetectionMiddleware.js
var require_recursionDetectionMiddleware = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.922.0/node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/recursionDetectionMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.recursionDetectionMiddleware = void 0;
    var lambda_invoke_store_1 = (init_invoke_store(), __toCommonJS(invoke_store_exports));
    var protocol_http_1 = require_dist_cjs2();
    var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
    var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
    var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
    var recursionDetectionMiddleware = () => (next) => async (args) => {
      const { request } = args;
      if (!protocol_http_1.HttpRequest.isInstance(request)) {
        return next(args);
      }
      const traceIdHeader = Object.keys(request.headers ?? {}).find((h) => h.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()) ?? TRACE_ID_HEADER_NAME;
      if (request.headers.hasOwnProperty(traceIdHeader)) {
        return next(args);
      }
      const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
      const traceIdFromEnv = process.env[ENV_TRACE_ID];
      const traceIdFromInvokeStore = lambda_invoke_store_1.InvokeStore.getXRayTraceId();
      const traceId = traceIdFromInvokeStore ?? traceIdFromEnv;
      const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
      if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
      }
      return next({
        ...args,
        request
      });
    };
    exports.recursionDetectionMiddleware = recursionDetectionMiddleware;
  }
});

// ../node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.922.0/node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/index.js
var require_dist_cjs18 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.922.0/node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/index.js"(exports) {
    "use strict";
    var recursionDetectionMiddleware = require_recursionDetectionMiddleware();
    var recursionDetectionMiddlewareOptions = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: true,
      priority: "low"
    };
    var getRecursionDetectionPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware.recursionDetectionMiddleware(), recursionDetectionMiddlewareOptions);
      }
    });
    exports.getRecursionDetectionPlugin = getRecursionDetectionPlugin;
    Object.keys(recursionDetectionMiddleware).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
        enumerable: true,
        get: function() {
          return recursionDetectionMiddleware[k];
        }
      });
    });
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
var resolveAuthOptions;
var init_resolveAuthOptions = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js"() {
    resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
      if (!authSchemePreference || authSchemePreference.length === 0) {
        return candidateAuthOptions;
      }
      const preferredAuthOptions = [];
      for (const preferredSchemeName of authSchemePreference) {
        for (const candidateAuthOption of candidateAuthOptions) {
          const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
          if (candidateAuthSchemeName === preferredSchemeName) {
            preferredAuthOptions.push(candidateAuthOption);
          }
        }
      }
      for (const candidateAuthOption of candidateAuthOptions) {
        if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
      return preferredAuthOptions;
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map.set(scheme.schemeId, scheme);
  }
  return map;
}
var import_util_middleware, httpAuthSchemeMiddleware;
var init_httpAuthSchemeMiddleware = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
    import_util_middleware = __toESM(require_dist_cjs3());
    init_resolveAuthOptions();
    httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
      const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
      const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
      const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
      const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
      const smithyContext = (0, import_util_middleware.getSmithyContext)(context);
      const failureReasons = [];
      for (const option of resolvedOptions) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
          httpAuthOption: option,
          identity: await identityProvider(option.identityProperties),
          signer: scheme.signer
        };
        break;
      }
      if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
      }
      return next(args);
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: "endpointV2Middleware"
    };
    getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
      }
    });
  }
});

// ../node_modules/.pnpm/@smithy+middleware-serde@4.2.4/node_modules/@smithy/middleware-serde/dist-cjs/index.js
var require_dist_cjs19 = __commonJS({
  "../node_modules/.pnpm/@smithy+middleware-serde@4.2.4/node_modules/@smithy/middleware-serde/dist-cjs/index.js"(exports) {
    "use strict";
    var protocolHttp = require_dist_cjs2();
    var deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
      const { response } = await next(args);
      try {
        const parsed = await deserializer(response, options);
        return {
          response,
          output: parsed
        };
      } catch (error) {
        Object.defineProperty(error, "$response", {
          value: response
        });
        if (!("$metadata" in error)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          try {
            error.message += "\n  " + hint;
          } catch (e) {
            if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(hint);
            } else {
              context.logger?.warn?.(hint);
            }
          }
          if (typeof error.$responseBodyText !== "undefined") {
            if (error.$response) {
              error.$response.body = error.$responseBodyText;
            }
          }
          try {
            if (protocolHttp.HttpResponse.isInstance(response)) {
              const { headers = {} } = response;
              const headerEntries = Object.entries(headers);
              error.$metadata = {
                httpStatusCode: response.statusCode,
                requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
              };
            }
          } catch (e) {
          }
        }
        throw error;
      }
    };
    var findHeader = (pattern, headers) => {
      return (headers.find(([k]) => {
        return k.match(pattern);
      }) || [void 0, void 0])[1];
    };
    var serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
      const endpointConfig = options;
      const endpoint = context.endpointV2?.url && endpointConfig.urlParser ? async () => endpointConfig.urlParser(context.endpointV2.url) : endpointConfig.endpoint;
      if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
      }
      const request = await serializer(args.input, { ...options, endpoint });
      return next({
        ...args,
        request
      });
    };
    var deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    var serializerMiddlewareOption2 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
    function getSerdePlugin(config, serializer, deserializer) {
      return {
        applyToStack: (commandStack) => {
          commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
          commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption2);
        }
      };
    }
    exports.deserializerMiddleware = deserializerMiddleware;
    exports.deserializerMiddlewareOption = deserializerMiddlewareOption;
    exports.getSerdePlugin = getSerdePlugin;
    exports.serializerMiddleware = serializerMiddleware;
    exports.serializerMiddlewareOption = serializerMiddlewareOption2;
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var import_protocol_http, import_util_middleware2, defaultErrorHandler, defaultSuccessHandler, httpSigningMiddleware;
var init_httpSigningMiddleware = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
    import_protocol_http = __toESM(require_dist_cjs2());
    import_util_middleware2 = __toESM(require_dist_cjs3());
    defaultErrorHandler = (signingProperties) => (error) => {
      throw error;
    };
    defaultSuccessHandler = (httpResponse, signingProperties) => {
    };
    httpSigningMiddleware = (config) => (next, context) => async (args) => {
      if (!import_protocol_http.HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const smithyContext = (0, import_util_middleware2.getSmithyContext)(context);
      const scheme = smithyContext.selectedHttpAuthScheme;
      if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
      }
      const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties)
      }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
      (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
      return output;
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions, getHttpSigningPlugin;
var init_getHttpSigningMiddleware = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
    init_httpSigningMiddleware();
    httpSigningMiddlewareOptions = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: true,
      relation: "after",
      toMiddleware: "retryMiddleware"
    };
    getHttpSigningPlugin = (config) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
      }
    });
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig;
var init_DefaultIdentityProviderConfig = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
    DefaultIdentityProviderConfig = class {
      authSchemes = /* @__PURE__ */ new Map();
      constructor(config) {
        for (const [key, value] of Object.entries(config)) {
          if (value !== void 0) {
            this.authSchemes.set(key, value);
          }
        }
      }
      getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
      }
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/getSmithyContext.js
var import_types, getSmithyContext3;
var init_getSmithyContext = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
    import_types = __toESM(require_dist_cjs());
    getSmithyContext3 = (context) => context[import_types.SMITHY_CONTEXT_KEY] || (context[import_types.SMITHY_CONTEXT_KEY] = {});
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var import_middleware_serde, httpAuthSchemeMiddlewareOptions, getHttpAuthSchemePlugin;
var init_getHttpAuthSchemePlugin = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
    import_middleware_serde = __toESM(require_dist_cjs19());
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: import_middleware_serde.serializerMiddlewareOption.name
    };
    getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeMiddlewareOptions);
      }
    });
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
var init_middleware_http_auth_scheme = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
    init_httpAuthSchemeMiddleware();
    init_getHttpAuthSchemeEndpointRuleSetPlugin();
    init_getHttpAuthSchemePlugin();
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
var init_middleware_http_signing = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
    init_httpSigningMiddleware();
    init_getHttpSigningMiddleware();
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
    normalizeProvider = (input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/pagination/createPaginator.js
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return async function* paginateOperation(config, input, ...additionalArguments) {
    const _input = input;
    let token = config.startingToken ?? _input[inputTokenName];
    let hasNext = true;
    let page;
    while (hasNext) {
      _input[inputTokenName] = token;
      if (pageSizeTokenName) {
        _input[pageSizeTokenName] = _input[pageSizeTokenName] ?? config.pageSize;
      }
      if (config.client instanceof ClientCtor) {
        page = await makePagedClientRequest(CommandCtor, config.client, input, config.withCommand, ...additionalArguments);
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return void 0;
  };
}
var makePagedClientRequest, get;
var init_createPaginator = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
    makePagedClientRequest = async (CommandCtor, client, input, withCommand = (_) => _, ...args) => {
      let command = new CommandCtor(input);
      command = withCommand(command) ?? command;
      return await client.send(command, ...args);
    };
    get = (fromObject, path) => {
      let cursor2 = fromObject;
      const pathComponents = path.split(".");
      for (const step of pathComponents) {
        if (!cursor2 || typeof cursor2 !== "object") {
          return void 0;
        }
        cursor2 = cursor2[step];
      }
      return cursor2;
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/request-builder/requestBuilder.js
var init_requestBuilder = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/request-builder/requestBuilder.js"() {
    init_protocols();
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/setFeature.js
function setFeature2(context, feature, value) {
  if (!context.__smithy_context) {
    context.__smithy_context = {
      features: {}
    };
  } else if (!context.__smithy_context.features) {
    context.__smithy_context.features = {};
  }
  context.__smithy_context.features[feature] = value;
}
var init_setFeature = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/setFeature.js"() {
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
var import_protocol_http2, import_types2, HttpApiKeyAuthSigner;
var init_httpApiKeyAuth = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
    import_protocol_http2 = __toESM(require_dist_cjs2());
    import_types2 = __toESM(require_dist_cjs());
    HttpApiKeyAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        if (!signingProperties) {
          throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        }
        if (!signingProperties.name) {
          throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        }
        if (!signingProperties.in) {
          throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        }
        if (!identity.apiKey) {
          throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        }
        const clonedRequest = import_protocol_http2.HttpRequest.clone(httpRequest);
        if (signingProperties.in === import_types2.HttpApiKeyAuthLocation.QUERY) {
          clonedRequest.query[signingProperties.name] = identity.apiKey;
        } else if (signingProperties.in === import_types2.HttpApiKeyAuthLocation.HEADER) {
          clonedRequest.headers[signingProperties.name] = signingProperties.scheme ? `${signingProperties.scheme} ${identity.apiKey}` : identity.apiKey;
        } else {
          throw new Error("request can only be signed with `apiKey` locations `query` or `header`, but found: `" + signingProperties.in + "`");
        }
        return clonedRequest;
      }
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
var import_protocol_http3, HttpBearerAuthSigner;
var init_httpBearerAuth = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
    import_protocol_http3 = __toESM(require_dist_cjs2());
    HttpBearerAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        const clonedRequest = import_protocol_http3.HttpRequest.clone(httpRequest);
        if (!identity.token) {
          throw new Error("request could not be signed with `token` since the `token` is not defined");
        }
        clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
        return clonedRequest;
      }
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var NoAuthSigner;
var init_noAuth = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
    NoAuthSigner = class {
      async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
      }
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
var init_httpAuthSchemes = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
    init_httpApiKeyAuth();
    init_httpBearerAuth();
    init_noAuth();
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh, memoizeIdentityProvider;
var init_memoizeIdentityProvider = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
    createIsIdentityExpiredFunction = (expirationMs) => function isIdentityExpired2(identity) {
      return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
    };
    EXPIRATION_MS = 3e5;
    isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
    memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
      if (provider === void 0) {
        return void 0;
      }
      const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async (options) => {
        if (!pending) {
          pending = normalizedProvider(options);
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      };
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        if (isConstant) {
          return resolved;
        }
        if (!requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider(options);
          return resolved;
        }
        return resolved;
      };
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
var init_util_identity_and_auth = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
    init_DefaultIdentityProviderConfig();
    init_httpAuthSchemes();
    init_memoizeIdentityProvider();
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  DefaultIdentityProviderConfig: () => DefaultIdentityProviderConfig,
  EXPIRATION_MS: () => EXPIRATION_MS,
  HttpApiKeyAuthSigner: () => HttpApiKeyAuthSigner,
  HttpBearerAuthSigner: () => HttpBearerAuthSigner,
  NoAuthSigner: () => NoAuthSigner,
  createIsIdentityExpiredFunction: () => createIsIdentityExpiredFunction,
  createPaginator: () => createPaginator,
  doesIdentityRequireRefresh: () => doesIdentityRequireRefresh,
  getHttpAuthSchemeEndpointRuleSetPlugin: () => getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpAuthSchemePlugin: () => getHttpAuthSchemePlugin,
  getHttpSigningPlugin: () => getHttpSigningPlugin,
  getSmithyContext: () => getSmithyContext3,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => httpAuthSchemeEndpointRuleSetMiddlewareOptions,
  httpAuthSchemeMiddleware: () => httpAuthSchemeMiddleware,
  httpAuthSchemeMiddlewareOptions: () => httpAuthSchemeMiddlewareOptions,
  httpSigningMiddleware: () => httpSigningMiddleware,
  httpSigningMiddlewareOptions: () => httpSigningMiddlewareOptions,
  isIdentityExpired: () => isIdentityExpired,
  memoizeIdentityProvider: () => memoizeIdentityProvider,
  normalizeProvider: () => normalizeProvider,
  requestBuilder: () => requestBuilder,
  setFeature: () => setFeature2
});
var init_dist_es = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/index.js"() {
    init_getSmithyContext();
    init_middleware_http_auth_scheme();
    init_middleware_http_signing();
    init_normalizeProvider();
    init_createPaginator();
    init_requestBuilder();
    init_setFeature();
    init_util_identity_and_auth();
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
var import_protocol_http4, getDateHeader;
var init_getDateHeader = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js"() {
    import_protocol_http4 = __toESM(require_dist_cjs2());
    getDateHeader = (response) => import_protocol_http4.HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate;
var init_getSkewCorrectedDate = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js"() {
    getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
var isClockSkewed;
var init_isClockSkewed = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js"() {
    init_getSkewCorrectedDate();
    isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset;
var init_getUpdatedSystemClockOffset = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js"() {
    init_isClockSkewed();
    getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
      const clockTimeInMs = Date.parse(clockTime);
      if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
      }
      return currentSystemClockOffset;
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js
var init_utils = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js"() {
    init_getDateHeader();
    init_getSkewCorrectedDate();
    init_getUpdatedSystemClockOffset();
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var import_protocol_http5, throwSigningPropertyError, validateSigningProperties, AwsSdkSigV4Signer, AWSSDKSigV4Signer;
var init_AwsSdkSigV4Signer = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js"() {
    import_protocol_http5 = __toESM(require_dist_cjs2());
    init_utils();
    throwSigningPropertyError = (name, property) => {
      if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
      }
      return property;
    };
    validateSigningProperties = async (signingProperties) => {
      const context = throwSigningPropertyError("context", signingProperties.context);
      const config = throwSigningPropertyError("config", signingProperties.config);
      const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
      const signerFunction = throwSigningPropertyError("signer", config.signer);
      const signer = await signerFunction(authScheme);
      const signingRegion = signingProperties?.signingRegion;
      const signingRegionSet = signingProperties?.signingRegionSet;
      const signingName = signingProperties?.signingName;
      return {
        config,
        signer,
        signingRegion,
        signingRegionSet,
        signingName
      };
    };
    AwsSdkSigV4Signer = class {
      async sign(httpRequest, identity, signingProperties) {
        if (!import_protocol_http5.HttpRequest.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const validatedProps = await validateSigningProperties(signingProperties);
        const { config, signer } = validatedProps;
        let { signingRegion, signingName } = validatedProps;
        const handlerExecutionContext = signingProperties.context;
        if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
          const [first, second] = handlerExecutionContext.authSchemes;
          if (first?.name === "sigv4a" && second?.name === "sigv4") {
            signingRegion = second?.signingRegion ?? signingRegion;
            signingName = second?.signingName ?? signingName;
          }
        }
        const signedRequest = await signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion,
          signingService: signingName
        });
        return signedRequest;
      }
      errorHandler(signingProperties) {
        return (error) => {
          const serverTime = error.ServerTime ?? getDateHeader(error.$response);
          if (serverTime) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            const initialSystemClockOffset = config.systemClockOffset;
            config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
            const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
            if (clockSkewCorrected && error.$metadata) {
              error.$metadata.clockSkewCorrected = true;
            }
          }
          throw error;
        };
      }
      successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
      }
    };
    AWSSDKSigV4Signer = AwsSdkSigV4Signer;
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js
var import_protocol_http6, AwsSdkSigV4ASigner;
var init_AwsSdkSigV4ASigner = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js"() {
    import_protocol_http6 = __toESM(require_dist_cjs2());
    init_utils();
    init_AwsSdkSigV4Signer();
    AwsSdkSigV4ASigner = class extends AwsSdkSigV4Signer {
      async sign(httpRequest, identity, signingProperties) {
        if (!import_protocol_http6.HttpRequest.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingRegionSet, signingName } = await validateSigningProperties(signingProperties);
        const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();
        const multiRegionOverride = (configResolvedSigningRegionSet ?? signingRegionSet ?? [signingRegion]).join(",");
        const signedRequest = await signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion: multiRegionOverride,
          signingService: signingName
        });
        return signedRequest;
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js
var getArrayForCommaSeparatedString;
var init_getArrayForCommaSeparatedString = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js"() {
    getArrayForCommaSeparatedString = (str) => typeof str === "string" && str.length > 0 ? str.split(",").map((item) => item.trim()) : [];
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js
var getBearerTokenEnvKey;
var init_getBearerTokenEnvKey = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js"() {
    getBearerTokenEnvKey = (signingName) => `AWS_BEARER_TOKEN_${signingName.replace(/[\s-]/g, "_").toUpperCase()}`;
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js
var NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY, NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY, NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
var init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js"() {
    init_getArrayForCommaSeparatedString();
    init_getBearerTokenEnvKey();
    NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY = "AWS_AUTH_SCHEME_PREFERENCE";
    NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY = "auth_scheme_preference";
    NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = {
      environmentVariableSelector: (env, options) => {
        if (options?.signingName) {
          const bearerTokenKey = getBearerTokenEnvKey(options.signingName);
          if (bearerTokenKey in env)
            return ["httpBearerAuth"];
        }
        if (!(NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY in env))
          return void 0;
        return getArrayForCommaSeparatedString(env[NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY]);
      },
      configFileSelector: (profile) => {
        if (!(NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY in profile))
          return void 0;
        return getArrayForCommaSeparatedString(profile[NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY]);
      },
      default: []
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
var import_property_provider, resolveAwsSdkSigV4AConfig, NODE_SIGV4A_CONFIG_OPTIONS;
var init_resolveAwsSdkSigV4AConfig = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js"() {
    init_dist_es();
    import_property_provider = __toESM(require_dist_cjs12());
    resolveAwsSdkSigV4AConfig = (config) => {
      config.sigv4aSigningRegionSet = normalizeProvider(config.sigv4aSigningRegionSet);
      return config;
    };
    NODE_SIGV4A_CONFIG_OPTIONS = {
      environmentVariableSelector(env) {
        if (env.AWS_SIGV4A_SIGNING_REGION_SET) {
          return env.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((_) => _.trim());
        }
        throw new import_property_provider.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
          tryNextLink: true
        });
      },
      configFileSelector(profile) {
        if (profile.sigv4a_signing_region_set) {
          return (profile.sigv4a_signing_region_set ?? "").split(",").map((_) => _.trim());
        }
        throw new import_property_provider.ProviderError("sigv4a_signing_region_set not set in profile.", {
          tryNextLink: true
        });
      },
      default: void 0
    };
  }
});

// ../node_modules/.pnpm/@smithy+signature-v4@5.3.4/node_modules/@smithy/signature-v4/dist-cjs/index.js
var require_dist_cjs20 = __commonJS({
  "../node_modules/.pnpm/@smithy+signature-v4@5.3.4/node_modules/@smithy/signature-v4/dist-cjs/index.js"(exports) {
    "use strict";
    var utilHexEncoding = require_dist_cjs9();
    var utilUtf8 = require_dist_cjs6();
    var isArrayBuffer = require_dist_cjs4();
    var protocolHttp = require_dist_cjs2();
    var utilMiddleware = require_dist_cjs3();
    var utilUriEscape = require_dist_cjs8();
    var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    var REGION_SET_PARAM = "X-Amz-Region-Set";
    var AUTH_HEADER = "authorization";
    var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    var DATE_HEADER = "date";
    var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    var SHA256_HEADER = "x-amz-content-sha256";
    var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    var HOST_HEADER = "host";
    var ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    var PROXY_HEADER_PATTERN = /^proxy-/;
    var SEC_HEADER_PATTERN = /^sec-/;
    var UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
    var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    var ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
    var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    var MAX_CACHE_SIZE = 50;
    var KEY_TYPE_IDENTIFIER = "aws4_request";
    var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
    var signingKeyCache = {};
    var cacheQueue = [];
    var createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
    var getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${utilHexEncoding.toHex(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    };
    var clearCredentialCache = () => {
      cacheQueue.length = 0;
      Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
      });
    };
    var hmac = (ctor, secret, data2) => {
      const hash = new ctor(secret);
      hash.update(utilUtf8.toUint8Array(data2));
      return hash.digest();
    };
    var getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    };
    var getPayloadHash = async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer.isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(utilUtf8.toUint8Array(body));
        return utilHexEncoding.toHex(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    };
    var HeaderFormatter = class {
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = utilUtf8.fromUtf8(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([header.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(0, 3);
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(0, 4);
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(0, 6);
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = utilUtf8.fromUtf8(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(0, 7);
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set(utilHexEncoding.fromHex(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
    };
    var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    var Int64 = class _Int64 {
      bytes;
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
          bytes[i] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new _Int64(bytes);
      }
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt(utilHexEncoding.toHex(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    function negate(bytes) {
      for (let i = 0; i < 8; i++) {
        bytes[i] ^= 255;
      }
      for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
          break;
      }
    }
    var hasHeader = (soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    };
    var moveHeadersToQuery = (request, options = {}) => {
      const { headers, query = {} } = protocolHttp.HttpRequest.clone(request);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request,
        headers,
        query
      };
    };
    var prepareRequest = (request) => {
      request = protocolHttp.HttpRequest.clone(request);
      for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request.headers[headerName];
        }
      }
      return request;
    };
    var getCanonicalQuery = ({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query)) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        const encodedKey = utilUriEscape.escapeUri(key);
        keys.push(encodedKey);
        const value = query[key];
        if (typeof value === "string") {
          serialized[encodedKey] = `${encodedKey}=${utilUriEscape.escapeUri(value)}`;
        } else if (Array.isArray(value)) {
          serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${utilUriEscape.escapeUri(value2)}`]), []).sort().join("&");
        }
      }
      return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    };
    var iso8601 = (time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
    var toDate = (time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    };
    var SignatureV4Base = class {
      service;
      regionProvider;
      credentialProvider;
      sha256;
      uriEscapePath;
      applyChecksum;
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = utilMiddleware.normalizeProvider(region);
        this.credentialProvider = utilMiddleware.normalizeProvider(credentials);
      }
      createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
        const hash = new this.sha256();
        hash.update(utilUtf8.toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${algorithmIdentifier}
${longDate}
${credentialScope}
${utilHexEncoding.toHex(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if (pathSegment?.length === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
          const doubleEncoded = utilUriEscape.escapeUri(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
      formatDate(now) {
        const longDate = iso8601(now).replace(/[\-:]/g, "");
        return {
          longDate,
          shortDate: longDate.slice(0, 8)
        };
      }
      getCanonicalHeaderList(headers) {
        return Object.keys(headers).sort().join(";");
      }
    };
    var SignatureV42 = class extends SignatureV4Base {
      headerFormatter = new HeaderFormatter();
      constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        super({
          applyChecksum,
          credentials,
          region,
          service,
          sha256,
          uriEscapePath
        });
      }
      async presign(originalRequest, options = {}) {
        const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = this.formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
        if (credentials.sessionToken) {
          request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload: payload2 }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload2 }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = utilHexEncoding.toHex(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
          headers: this.headerFormatter.format(signableMessage.message.headers),
          payload: signableMessage.message.body
        }, {
          signingDate,
          signingRegion,
          signingService,
          priorSignature: signableMessage.priorSignature
        });
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = this.formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(utilUtf8.toUint8Array(stringToSign));
        return utilHexEncoding.toHex(await hash.digest());
      }
      async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
          request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
        const hash = new this.sha256(await keyPromise);
        hash.update(utilUtf8.toUint8Array(stringToSign));
        return utilHexEncoding.toHex(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
    };
    var signatureV4aContainer = {
      SignatureV4a: null
    };
    exports.ALGORITHM_IDENTIFIER = ALGORITHM_IDENTIFIER;
    exports.ALGORITHM_IDENTIFIER_V4A = ALGORITHM_IDENTIFIER_V4A;
    exports.ALGORITHM_QUERY_PARAM = ALGORITHM_QUERY_PARAM;
    exports.ALWAYS_UNSIGNABLE_HEADERS = ALWAYS_UNSIGNABLE_HEADERS;
    exports.AMZ_DATE_HEADER = AMZ_DATE_HEADER;
    exports.AMZ_DATE_QUERY_PARAM = AMZ_DATE_QUERY_PARAM;
    exports.AUTH_HEADER = AUTH_HEADER;
    exports.CREDENTIAL_QUERY_PARAM = CREDENTIAL_QUERY_PARAM;
    exports.DATE_HEADER = DATE_HEADER;
    exports.EVENT_ALGORITHM_IDENTIFIER = EVENT_ALGORITHM_IDENTIFIER;
    exports.EXPIRES_QUERY_PARAM = EXPIRES_QUERY_PARAM;
    exports.GENERATED_HEADERS = GENERATED_HEADERS;
    exports.HOST_HEADER = HOST_HEADER;
    exports.KEY_TYPE_IDENTIFIER = KEY_TYPE_IDENTIFIER;
    exports.MAX_CACHE_SIZE = MAX_CACHE_SIZE;
    exports.MAX_PRESIGNED_TTL = MAX_PRESIGNED_TTL;
    exports.PROXY_HEADER_PATTERN = PROXY_HEADER_PATTERN;
    exports.REGION_SET_PARAM = REGION_SET_PARAM;
    exports.SEC_HEADER_PATTERN = SEC_HEADER_PATTERN;
    exports.SHA256_HEADER = SHA256_HEADER;
    exports.SIGNATURE_HEADER = SIGNATURE_HEADER;
    exports.SIGNATURE_QUERY_PARAM = SIGNATURE_QUERY_PARAM;
    exports.SIGNED_HEADERS_QUERY_PARAM = SIGNED_HEADERS_QUERY_PARAM;
    exports.SignatureV4 = SignatureV42;
    exports.SignatureV4Base = SignatureV4Base;
    exports.TOKEN_HEADER = TOKEN_HEADER;
    exports.TOKEN_QUERY_PARAM = TOKEN_QUERY_PARAM;
    exports.UNSIGNABLE_PATTERNS = UNSIGNABLE_PATTERNS;
    exports.UNSIGNED_PAYLOAD = UNSIGNED_PAYLOAD;
    exports.clearCredentialCache = clearCredentialCache;
    exports.createScope = createScope;
    exports.getCanonicalHeaders = getCanonicalHeaders;
    exports.getCanonicalQuery = getCanonicalQuery;
    exports.getPayloadHash = getPayloadHash;
    exports.getSigningKey = getSigningKey;
    exports.hasHeader = hasHeader;
    exports.moveHeadersToQuery = moveHeadersToQuery;
    exports.prepareRequest = prepareRequest;
    exports.signatureV4aContainer = signatureV4aContainer;
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
  let credentialsProvider;
  if (credentials) {
    if (!credentials?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
    } else {
      credentialsProvider = credentials;
    }
  } else {
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider(credentialDefaultProvider(Object.assign({}, config, {
        parentClientConfig: config
      })));
    } else {
      credentialsProvider = async () => {
        throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
      };
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}
function bindCallerConfig(config, credentialsProvider) {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn = async (options) => credentialsProvider({ ...options, callerClientConfig: config });
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}
var import_signature_v4, resolveAwsSdkSigV4Config, resolveAWSSDKSigV4Config;
var init_resolveAwsSdkSigV4Config = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
    init_client();
    init_dist_es();
    import_signature_v4 = __toESM(require_dist_cjs20());
    resolveAwsSdkSigV4Config = (config) => {
      let inputCredentials = config.credentials;
      let isUserSupplied = !!config.credentials;
      let resolvedCredentials = void 0;
      Object.defineProperty(config, "credentials", {
        set(credentials) {
          if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
            isUserSupplied = true;
          }
          inputCredentials = credentials;
          const memoizedProvider = normalizeCredentialProvider(config, {
            credentials: inputCredentials,
            credentialDefaultProvider: config.credentialDefaultProvider
          });
          const boundProvider = bindCallerConfig(config, memoizedProvider);
          if (isUserSupplied && !boundProvider.attributed) {
            resolvedCredentials = async (options) => boundProvider(options).then((creds) => setCredentialFeature(creds, "CREDENTIALS_CODE", "e"));
            resolvedCredentials.memoized = boundProvider.memoized;
            resolvedCredentials.configBound = boundProvider.configBound;
            resolvedCredentials.attributed = true;
          } else {
            resolvedCredentials = boundProvider;
          }
        },
        get() {
          return resolvedCredentials;
        },
        enumerable: true,
        configurable: true
      });
      config.credentials = inputCredentials;
      const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
      let signer;
      if (config.signer) {
        signer = normalizeProvider(config.signer);
      } else if (config.regionInfoProvider) {
        signer = () => normalizeProvider(config.region)().then(async (region) => [
          await config.regionInfoProvider(region, {
            useFipsEndpoint: await config.useFipsEndpoint(),
            useDualstackEndpoint: await config.useDualstackEndpoint()
          }) || {},
          region
        ]).then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          config.signingRegion = config.signingRegion || signingRegion || region;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
          return new SignerCtor(params);
        });
      } else {
        signer = async (authScheme) => {
          authScheme = Object.assign({}, {
            name: "sigv4",
            signingName: config.signingName || config.defaultSigningName,
            signingRegion: await normalizeProvider(config.region)(),
            properties: {}
          }, authScheme);
          const signingRegion = authScheme.signingRegion;
          const signingService = authScheme.signingName;
          config.signingRegion = config.signingRegion || signingRegion;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
          return new SignerCtor(params);
        };
      }
      const resolvedConfig = Object.assign(config, {
        systemClockOffset,
        signingEscapePath,
        signer
      });
      return resolvedConfig;
    };
    resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
var init_aws_sdk = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js"() {
    init_AwsSdkSigV4Signer();
    init_AwsSdkSigV4ASigner();
    init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS();
    init_resolveAwsSdkSigV4AConfig();
    init_resolveAwsSdkSigV4Config();
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js
var httpAuthSchemes_exports = {};
__export(httpAuthSchemes_exports, {
  AWSSDKSigV4Signer: () => AWSSDKSigV4Signer,
  AwsSdkSigV4ASigner: () => AwsSdkSigV4ASigner,
  AwsSdkSigV4Signer: () => AwsSdkSigV4Signer,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  NODE_SIGV4A_CONFIG_OPTIONS: () => NODE_SIGV4A_CONFIG_OPTIONS,
  getBearerTokenEnvKey: () => getBearerTokenEnvKey,
  resolveAWSSDKSigV4Config: () => resolveAWSSDKSigV4Config,
  resolveAwsSdkSigV4AConfig: () => resolveAwsSdkSigV4AConfig,
  resolveAwsSdkSigV4Config: () => resolveAwsSdkSigV4Config,
  validateSigningProperties: () => validateSigningProperties
});
var init_httpAuthSchemes2 = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js"() {
    init_aws_sdk();
    init_getBearerTokenEnvKey();
  }
});

// ../node_modules/.pnpm/@smithy+util-endpoints@3.2.4/node_modules/@smithy/util-endpoints/dist-cjs/index.js
var require_dist_cjs21 = __commonJS({
  "../node_modules/.pnpm/@smithy+util-endpoints@3.2.4/node_modules/@smithy/util-endpoints/dist-cjs/index.js"(exports) {
    "use strict";
    var types = require_dist_cjs();
    var EndpointCache = class {
      capacity;
      data = /* @__PURE__ */ new Map();
      parameters = [];
      constructor({ size, params }) {
        this.capacity = size ?? 50;
        if (params) {
          this.parameters = params;
        }
      }
      get(endpointParams, resolver) {
        const key = this.hash(endpointParams);
        if (key === false) {
          return resolver();
        }
        if (!this.data.has(key)) {
          if (this.data.size > this.capacity + 10) {
            const keys = this.data.keys();
            let i = 0;
            while (true) {
              const { value, done } = keys.next();
              this.data.delete(value);
              if (done || ++i > 10) {
                break;
              }
            }
          }
          this.data.set(key, resolver());
        }
        return this.data.get(key);
      }
      size() {
        return this.data.size;
      }
      hash(endpointParams) {
        let buffer = "";
        const { parameters } = this;
        if (parameters.length === 0) {
          return false;
        }
        for (const param of parameters) {
          const val = String(endpointParams[param] ?? "");
          if (val.includes("|;")) {
            return false;
          }
          buffer += val + "|;";
        }
        return buffer;
      }
    };
    var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
    var isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");
    var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    var isValidHostLabel = (value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!isValidHostLabel(label)) {
          return false;
        }
      }
      return true;
    };
    var customEndpointFunctions = {};
    var debugId = "endpoints";
    function toDebugString(input) {
      if (typeof input !== "object" || input == null) {
        return input;
      }
      if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
      }
      if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
      }
      return JSON.stringify(input, null, 2);
    }
    var EndpointError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "EndpointError";
      }
    };
    var booleanEquals = (value1, value2) => value1 === value2;
    var getAttrPathList = (path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new EndpointError(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    };
    var getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
      if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
      } else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
      }
      return acc[index];
    }, value);
    var isSet = (value) => value != null;
    var not = (value) => !value;
    var DEFAULT_PORTS = {
      [types.EndpointURLScheme.HTTP]: 80,
      [types.EndpointURLScheme.HTTPS]: 443
    };
    var parseURL = (value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query).map(([k, v]) => `${k}=${v}`).join("&");
            return url;
          }
          return new URL(value);
        } catch (error) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(types.EndpointURLScheme).includes(scheme)) {
        return null;
      }
      const isIp = isIpAddress(hostname);
      const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp
      };
    };
    var stringEquals = (value1, value2) => value1 === value2;
    var substring = (input, start, stop, reverse) => {
      if (start >= stop || input.length < stop) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    };
    var uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
    var endpointFunctions = {
      booleanEquals,
      getAttr,
      isSet,
      isValidHostLabel,
      not,
      parseURL,
      stringEquals,
      substring,
      uriEncode
    };
    var evaluateTemplate = (template, options) => {
      const evaluatedTemplateArr = [];
      const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        } else {
          evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    };
    var getReferenceValue = ({ ref }, options) => {
      const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      return referenceRecord[ref];
    };
    var evaluateExpression = (obj, keyName, options) => {
      if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
      } else if (obj["fn"]) {
        return group$2.callFunction(obj, options);
      } else if (obj["ref"]) {
        return getReferenceValue(obj, options);
      }
      throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    };
    var callFunction = ({ fn, argv }, options) => {
      const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : group$2.evaluateExpression(arg, "arg", options));
      const fnSegments = fn.split(".");
      if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
      }
      return endpointFunctions[fn](...evaluatedArgs);
    };
    var group$2 = {
      evaluateExpression,
      callFunction
    };
    var evaluateCondition = ({ assign, ...fnArgs }, options) => {
      if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
      }
      const value = callFunction(fnArgs, options);
      options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
      return {
        result: value === "" ? true : !!value,
        ...assign != null && { toAssign: { name: assign, value } }
      };
    };
    var evaluateConditions = (conditions = [], options) => {
      const conditionsReferenceRecord = {};
      for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
          ...options,
          referenceRecord: {
            ...options.referenceRecord,
            ...conditionsReferenceRecord
          }
        });
        if (!result) {
          return { result };
        }
        if (toAssign) {
          conditionsReferenceRecord[toAssign.name] = toAssign.value;
          options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
      }
      return { result: true, referenceRecord: conditionsReferenceRecord };
    };
    var getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
      ...acc,
      [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
          throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
      })
    }), {});
    var getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
      ...acc,
      [propertyKey]: group$1.getEndpointProperty(propertyVal, options)
    }), {});
    var getEndpointProperty = (property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return evaluateTemplate(property, options);
        case "object":
          if (property === null) {
            throw new EndpointError(`Unexpected endpoint property: ${property}`);
          }
          return group$1.getEndpointProperties(property, options);
        case "boolean":
          return property;
        default:
          throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
      }
    };
    var group$1 = {
      getEndpointProperty,
      getEndpointProperties
    };
    var getEndpointUrl = (endpointUrl, options) => {
      const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error) {
          console.error(`Failed to construct URL with ${expression}`, error);
          throw error;
        }
      }
      throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
    };
    var evaluateEndpointRule = (endpointRule, options) => {
      const { conditions, endpoint } = endpointRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      };
      const { url, properties, headers } = endpoint;
      options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
      return {
        ...headers != void 0 && {
          headers: getEndpointHeaders(headers, endpointRuleOptions)
        },
        ...properties != void 0 && {
          properties: getEndpointProperties(properties, endpointRuleOptions)
        },
        url: getEndpointUrl(url, endpointRuleOptions)
      };
    };
    var evaluateErrorRule = (errorRule, options) => {
      const { conditions, error } = errorRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      throw new EndpointError(evaluateExpression(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      }));
    };
    var evaluateRules = (rules, options) => {
      for (const rule of rules) {
        if (rule.type === "endpoint") {
          const endpointOrUndefined = evaluateEndpointRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else if (rule.type === "error") {
          evaluateErrorRule(rule, options);
        } else if (rule.type === "tree") {
          const endpointOrUndefined = group.evaluateTreeRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else {
          throw new EndpointError(`Unknown endpoint rule: ${rule}`);
        }
      }
      throw new EndpointError(`Rules evaluation failed`);
    };
    var evaluateTreeRule = (treeRule, options) => {
      const { conditions, rules } = treeRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      return group.evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      });
    };
    var group = {
      evaluateRules,
      evaluateTreeRule
    };
    var resolveEndpoint = (ruleSetObject, options) => {
      const { endpointParams, logger } = options;
      const { parameters, rules } = ruleSetObject;
      options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
      const paramsWithDefault = Object.entries(parameters).filter(([, v]) => v.default != null).map(([k, v]) => [k, v.default]);
      if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
          endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
      }
      const requiredParams = Object.entries(parameters).filter(([, v]) => v.required).map(([k]) => k);
      for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
          throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
      }
      const endpoint = evaluateRules(rules, { endpointParams, logger, referenceRecord: {} });
      options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
      return endpoint;
    };
    exports.EndpointCache = EndpointCache;
    exports.EndpointError = EndpointError;
    exports.customEndpointFunctions = customEndpointFunctions;
    exports.isIpAddress = isIpAddress;
    exports.isValidHostLabel = isValidHostLabel;
    exports.resolveEndpoint = resolveEndpoint;
  }
});

// ../node_modules/.pnpm/@aws-sdk+util-endpoints@3.922.0/node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js
var require_dist_cjs22 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+util-endpoints@3.922.0/node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js"(exports) {
    "use strict";
    var utilEndpoints = require_dist_cjs21();
    var urlParser = require_dist_cjs11();
    var isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
      if (allowSubDomains) {
        for (const label of value.split(".")) {
          if (!isVirtualHostableS3Bucket(label)) {
            return false;
          }
        }
        return true;
      }
      if (!utilEndpoints.isValidHostLabel(value)) {
        return false;
      }
      if (value.length < 3 || value.length > 63) {
        return false;
      }
      if (value !== value.toLowerCase()) {
        return false;
      }
      if (utilEndpoints.isIpAddress(value)) {
        return false;
      }
      return true;
    };
    var ARN_DELIMITER = ":";
    var RESOURCE_DELIMITER = "/";
    var parseArn = (value) => {
      const segments = value.split(ARN_DELIMITER);
      if (segments.length < 6)
        return null;
      const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
      if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
        return null;
      const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
      return {
        partition: partition2,
        service,
        region,
        accountId,
        resourceId
      };
    };
    var partitions = [
      {
        id: "aws",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-east-1",
          name: "aws",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
        regions: {
          "af-south-1": {
            description: "Africa (Cape Town)"
          },
          "ap-east-1": {
            description: "Asia Pacific (Hong Kong)"
          },
          "ap-east-2": {
            description: "Asia Pacific (Taipei)"
          },
          "ap-northeast-1": {
            description: "Asia Pacific (Tokyo)"
          },
          "ap-northeast-2": {
            description: "Asia Pacific (Seoul)"
          },
          "ap-northeast-3": {
            description: "Asia Pacific (Osaka)"
          },
          "ap-south-1": {
            description: "Asia Pacific (Mumbai)"
          },
          "ap-south-2": {
            description: "Asia Pacific (Hyderabad)"
          },
          "ap-southeast-1": {
            description: "Asia Pacific (Singapore)"
          },
          "ap-southeast-2": {
            description: "Asia Pacific (Sydney)"
          },
          "ap-southeast-3": {
            description: "Asia Pacific (Jakarta)"
          },
          "ap-southeast-4": {
            description: "Asia Pacific (Melbourne)"
          },
          "ap-southeast-5": {
            description: "Asia Pacific (Malaysia)"
          },
          "ap-southeast-6": {
            description: "Asia Pacific (New Zealand)"
          },
          "ap-southeast-7": {
            description: "Asia Pacific (Thailand)"
          },
          "aws-global": {
            description: "aws global region"
          },
          "ca-central-1": {
            description: "Canada (Central)"
          },
          "ca-west-1": {
            description: "Canada West (Calgary)"
          },
          "eu-central-1": {
            description: "Europe (Frankfurt)"
          },
          "eu-central-2": {
            description: "Europe (Zurich)"
          },
          "eu-north-1": {
            description: "Europe (Stockholm)"
          },
          "eu-south-1": {
            description: "Europe (Milan)"
          },
          "eu-south-2": {
            description: "Europe (Spain)"
          },
          "eu-west-1": {
            description: "Europe (Ireland)"
          },
          "eu-west-2": {
            description: "Europe (London)"
          },
          "eu-west-3": {
            description: "Europe (Paris)"
          },
          "il-central-1": {
            description: "Israel (Tel Aviv)"
          },
          "me-central-1": {
            description: "Middle East (UAE)"
          },
          "me-south-1": {
            description: "Middle East (Bahrain)"
          },
          "mx-central-1": {
            description: "Mexico (Central)"
          },
          "sa-east-1": {
            description: "South America (Sao Paulo)"
          },
          "us-east-1": {
            description: "US East (N. Virginia)"
          },
          "us-east-2": {
            description: "US East (Ohio)"
          },
          "us-west-1": {
            description: "US West (N. California)"
          },
          "us-west-2": {
            description: "US West (Oregon)"
          }
        }
      },
      {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn",
          dualStackDnsSuffix: "api.amazonwebservices.com.cn",
          implicitGlobalRegion: "cn-northwest-1",
          name: "aws-cn",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: {
          "aws-cn-global": {
            description: "aws-cn global region"
          },
          "cn-north-1": {
            description: "China (Beijing)"
          },
          "cn-northwest-1": {
            description: "China (Ningxia)"
          }
        }
      },
      {
        id: "aws-eusc",
        outputs: {
          dnsSuffix: "amazonaws.eu",
          dualStackDnsSuffix: "api.amazonwebservices.eu",
          implicitGlobalRegion: "eusc-de-east-1",
          name: "aws-eusc",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
        regions: {
          "eusc-de-east-1": {
            description: "EU (Germany)"
          }
        }
      },
      {
        id: "aws-iso",
        outputs: {
          dnsSuffix: "c2s.ic.gov",
          dualStackDnsSuffix: "api.aws.ic.gov",
          implicitGlobalRegion: "us-iso-east-1",
          name: "aws-iso",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-global": {
            description: "aws-iso global region"
          },
          "us-iso-east-1": {
            description: "US ISO East"
          },
          "us-iso-west-1": {
            description: "US ISO WEST"
          }
        }
      },
      {
        id: "aws-iso-b",
        outputs: {
          dnsSuffix: "sc2s.sgov.gov",
          dualStackDnsSuffix: "api.aws.scloud",
          implicitGlobalRegion: "us-isob-east-1",
          name: "aws-iso-b",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-b-global": {
            description: "aws-iso-b global region"
          },
          "us-isob-east-1": {
            description: "US ISOB East (Ohio)"
          },
          "us-isob-west-1": {
            description: "US ISOB West"
          }
        }
      },
      {
        id: "aws-iso-e",
        outputs: {
          dnsSuffix: "cloud.adc-e.uk",
          dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
          implicitGlobalRegion: "eu-isoe-west-1",
          name: "aws-iso-e",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-e-global": {
            description: "aws-iso-e global region"
          },
          "eu-isoe-west-1": {
            description: "EU ISOE West"
          }
        }
      },
      {
        id: "aws-iso-f",
        outputs: {
          dnsSuffix: "csp.hci.ic.gov",
          dualStackDnsSuffix: "api.aws.hci.ic.gov",
          implicitGlobalRegion: "us-isof-south-1",
          name: "aws-iso-f",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-f-global": {
            description: "aws-iso-f global region"
          },
          "us-isof-east-1": {
            description: "US ISOF EAST"
          },
          "us-isof-south-1": {
            description: "US ISOF SOUTH"
          }
        }
      },
      {
        id: "aws-us-gov",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-gov-west-1",
          name: "aws-us-gov",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        regions: {
          "aws-us-gov-global": {
            description: "aws-us-gov global region"
          },
          "us-gov-east-1": {
            description: "AWS GovCloud (US-East)"
          },
          "us-gov-west-1": {
            description: "AWS GovCloud (US-West)"
          }
        }
      }
    ];
    var version = "1.1";
    var partitionsInfo = {
      partitions,
      version
    };
    var selectedPartitionsInfo = partitionsInfo;
    var selectedUserAgentPrefix = "";
    var partition = (value) => {
      const { partitions: partitions2 } = selectedPartitionsInfo;
      for (const partition2 of partitions2) {
        const { regions, outputs } = partition2;
        for (const [region, regionData] of Object.entries(regions)) {
          if (region === value) {
            return {
              ...outputs,
              ...regionData
            };
          }
        }
      }
      for (const partition2 of partitions2) {
        const { regionRegex, outputs } = partition2;
        if (new RegExp(regionRegex).test(value)) {
          return {
            ...outputs
          };
        }
      }
      const DEFAULT_PARTITION = partitions2.find((partition2) => partition2.id === "aws");
      if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      }
      return {
        ...DEFAULT_PARTITION.outputs
      };
    };
    var setPartitionInfo = (partitionsInfo2, userAgentPrefix = "") => {
      selectedPartitionsInfo = partitionsInfo2;
      selectedUserAgentPrefix = userAgentPrefix;
    };
    var useDefaultPartitionInfo = () => {
      setPartitionInfo(partitionsInfo, "");
    };
    var getUserAgentPrefix = () => selectedUserAgentPrefix;
    var awsEndpointFunctions = {
      isVirtualHostableS3Bucket,
      parseArn,
      partition
    };
    utilEndpoints.customEndpointFunctions.aws = awsEndpointFunctions;
    var resolveDefaultAwsRegionalEndpointsConfig = (input) => {
      if (typeof input.endpointProvider !== "function") {
        throw new Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
      }
      const { endpoint } = input;
      if (endpoint === void 0) {
        input.endpoint = async () => {
          return toEndpointV1(input.endpointProvider({
            Region: typeof input.region === "function" ? await input.region() : input.region,
            UseDualStack: typeof input.useDualstackEndpoint === "function" ? await input.useDualstackEndpoint() : input.useDualstackEndpoint,
            UseFIPS: typeof input.useFipsEndpoint === "function" ? await input.useFipsEndpoint() : input.useFipsEndpoint,
            Endpoint: void 0
          }, { logger: input.logger }));
        };
      }
      return input;
    };
    var toEndpointV1 = (endpoint) => urlParser.parseUrl(endpoint.url);
    Object.defineProperty(exports, "EndpointError", {
      enumerable: true,
      get: function() {
        return utilEndpoints.EndpointError;
      }
    });
    Object.defineProperty(exports, "isIpAddress", {
      enumerable: true,
      get: function() {
        return utilEndpoints.isIpAddress;
      }
    });
    Object.defineProperty(exports, "resolveEndpoint", {
      enumerable: true,
      get: function() {
        return utilEndpoints.resolveEndpoint;
      }
    });
    exports.awsEndpointFunctions = awsEndpointFunctions;
    exports.getUserAgentPrefix = getUserAgentPrefix;
    exports.partition = partition;
    exports.resolveDefaultAwsRegionalEndpointsConfig = resolveDefaultAwsRegionalEndpointsConfig;
    exports.setPartitionInfo = setPartitionInfo;
    exports.toEndpointV1 = toEndpointV1;
    exports.useDefaultPartitionInfo = useDefaultPartitionInfo;
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/cbor-types.js
function alloc(size) {
  return typeof Buffer !== "undefined" ? Buffer.alloc(size) : new Uint8Array(size);
}
function tag(data2) {
  data2[tagSymbol] = true;
  return data2;
}
var majorUint64, majorNegativeInt64, majorUnstructuredByteString, majorUtf8String, majorList, majorMap, majorTag, majorSpecial, specialFalse, specialTrue, specialNull, specialUndefined, extendedOneByte, extendedFloat16, extendedFloat32, extendedFloat64, minorIndefinite, tagSymbol;
var init_cbor_types = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/cbor-types.js"() {
    majorUint64 = 0;
    majorNegativeInt64 = 1;
    majorUnstructuredByteString = 2;
    majorUtf8String = 3;
    majorList = 4;
    majorMap = 5;
    majorTag = 6;
    majorSpecial = 7;
    specialFalse = 20;
    specialTrue = 21;
    specialNull = 22;
    specialUndefined = 23;
    extendedOneByte = 24;
    extendedFloat16 = 25;
    extendedFloat32 = 26;
    extendedFloat64 = 27;
    minorIndefinite = 31;
    tagSymbol = Symbol("@smithy/core/cbor::tagSymbol");
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/cbor-decode.js
function setPayload(bytes) {
  payload = bytes;
  dataView = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
}
function decode(at, to) {
  if (at >= to) {
    throw new Error("unexpected end of (decode) payload.");
  }
  const major = (payload[at] & 224) >> 5;
  const minor = payload[at] & 31;
  switch (major) {
    case majorUint64:
    case majorNegativeInt64:
    case majorTag:
      let unsignedInt;
      let offset;
      if (minor < 24) {
        unsignedInt = minor;
        offset = 1;
      } else {
        switch (minor) {
          case extendedOneByte:
          case extendedFloat16:
          case extendedFloat32:
          case extendedFloat64:
            const countLength = minorValueToArgumentLength[minor];
            const countOffset = countLength + 1;
            offset = countOffset;
            if (to - at < countOffset) {
              throw new Error(`countLength ${countLength} greater than remaining buf len.`);
            }
            const countIndex = at + 1;
            if (countLength === 1) {
              unsignedInt = payload[countIndex];
            } else if (countLength === 2) {
              unsignedInt = dataView.getUint16(countIndex);
            } else if (countLength === 4) {
              unsignedInt = dataView.getUint32(countIndex);
            } else {
              unsignedInt = dataView.getBigUint64(countIndex);
            }
            break;
          default:
            throw new Error(`unexpected minor value ${minor}.`);
        }
      }
      if (major === majorUint64) {
        _offset = offset;
        return castBigInt(unsignedInt);
      } else if (major === majorNegativeInt64) {
        let negativeInt;
        if (typeof unsignedInt === "bigint") {
          negativeInt = BigInt(-1) - unsignedInt;
        } else {
          negativeInt = -1 - unsignedInt;
        }
        _offset = offset;
        return castBigInt(negativeInt);
      } else {
        if (minor === 2 || minor === 3) {
          const length = decodeCount(at + offset, to);
          let b = BigInt(0);
          const start = at + offset + _offset;
          for (let i = start; i < start + length; ++i) {
            b = b << BigInt(8) | BigInt(payload[i]);
          }
          _offset = offset + _offset + length;
          return minor === 3 ? -b - BigInt(1) : b;
        } else if (minor === 4) {
          const decimalFraction = decode(at + offset, to);
          const [exponent, mantissa] = decimalFraction;
          const normalizer = mantissa < 0 ? -1 : 1;
          const mantissaStr = "0".repeat(Math.abs(exponent) + 1) + String(BigInt(normalizer) * BigInt(mantissa));
          let numericString;
          const sign = mantissa < 0 ? "-" : "";
          numericString = exponent === 0 ? mantissaStr : mantissaStr.slice(0, mantissaStr.length + exponent) + "." + mantissaStr.slice(exponent);
          numericString = numericString.replace(/^0+/g, "");
          if (numericString === "") {
            numericString = "0";
          }
          if (numericString[0] === ".") {
            numericString = "0" + numericString;
          }
          numericString = sign + numericString;
          _offset = offset + _offset;
          return nv(numericString);
        } else {
          const value = decode(at + offset, to);
          const valueOffset = _offset;
          _offset = offset + valueOffset;
          return tag({ tag: castBigInt(unsignedInt), value });
        }
      }
    case majorUtf8String:
    case majorMap:
    case majorList:
    case majorUnstructuredByteString:
      if (minor === minorIndefinite) {
        switch (major) {
          case majorUtf8String:
            return decodeUtf8StringIndefinite(at, to);
          case majorMap:
            return decodeMapIndefinite(at, to);
          case majorList:
            return decodeListIndefinite(at, to);
          case majorUnstructuredByteString:
            return decodeUnstructuredByteStringIndefinite(at, to);
        }
      } else {
        switch (major) {
          case majorUtf8String:
            return decodeUtf8String(at, to);
          case majorMap:
            return decodeMap(at, to);
          case majorList:
            return decodeList(at, to);
          case majorUnstructuredByteString:
            return decodeUnstructuredByteString(at, to);
        }
      }
    default:
      return decodeSpecial(at, to);
  }
}
function bytesToUtf8(bytes, at, to) {
  if (USE_BUFFER && bytes.constructor?.name === "Buffer") {
    return bytes.toString("utf-8", at, to);
  }
  if (textDecoder) {
    return textDecoder.decode(bytes.subarray(at, to));
  }
  return (0, import_util_utf8.toUtf8)(bytes.subarray(at, to));
}
function demote(bigInteger) {
  const num = Number(bigInteger);
  if (num < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < num) {
    console.warn(new Error(`@smithy/core/cbor - truncating BigInt(${bigInteger}) to ${num} with loss of precision.`));
  }
  return num;
}
function bytesToFloat16(a, b) {
  const sign = a >> 7;
  const exponent = (a & 124) >> 2;
  const fraction = (a & 3) << 8 | b;
  const scalar = sign === 0 ? 1 : -1;
  let exponentComponent;
  let summation;
  if (exponent === 0) {
    if (fraction === 0) {
      return 0;
    } else {
      exponentComponent = Math.pow(2, 1 - 15);
      summation = 0;
    }
  } else if (exponent === 31) {
    if (fraction === 0) {
      return scalar * Infinity;
    } else {
      return NaN;
    }
  } else {
    exponentComponent = Math.pow(2, exponent - 15);
    summation = 1;
  }
  summation += fraction / 1024;
  return scalar * (exponentComponent * summation);
}
function decodeCount(at, to) {
  const minor = payload[at] & 31;
  if (minor < 24) {
    _offset = 1;
    return minor;
  }
  if (minor === extendedOneByte || minor === extendedFloat16 || minor === extendedFloat32 || minor === extendedFloat64) {
    const countLength = minorValueToArgumentLength[minor];
    _offset = countLength + 1;
    if (to - at < _offset) {
      throw new Error(`countLength ${countLength} greater than remaining buf len.`);
    }
    const countIndex = at + 1;
    if (countLength === 1) {
      return payload[countIndex];
    } else if (countLength === 2) {
      return dataView.getUint16(countIndex);
    } else if (countLength === 4) {
      return dataView.getUint32(countIndex);
    }
    return demote(dataView.getBigUint64(countIndex));
  }
  throw new Error(`unexpected minor value ${minor}.`);
}
function decodeUtf8String(at, to) {
  const length = decodeCount(at, to);
  const offset = _offset;
  at += offset;
  if (to - at < length) {
    throw new Error(`string len ${length} greater than remaining buf len.`);
  }
  const value = bytesToUtf8(payload, at, at + length);
  _offset = offset + length;
  return value;
}
function decodeUtf8StringIndefinite(at, to) {
  at += 1;
  const vector = [];
  for (const base = at; at < to; ) {
    if (payload[at] === 255) {
      const data2 = alloc(vector.length);
      data2.set(vector, 0);
      _offset = at - base + 2;
      return bytesToUtf8(data2, 0, data2.length);
    }
    const major = (payload[at] & 224) >> 5;
    const minor = payload[at] & 31;
    if (major !== majorUtf8String) {
      throw new Error(`unexpected major type ${major} in indefinite string.`);
    }
    if (minor === minorIndefinite) {
      throw new Error("nested indefinite string.");
    }
    const bytes = decodeUnstructuredByteString(at, to);
    const length = _offset;
    at += length;
    for (let i = 0; i < bytes.length; ++i) {
      vector.push(bytes[i]);
    }
  }
  throw new Error("expected break marker.");
}
function decodeUnstructuredByteString(at, to) {
  const length = decodeCount(at, to);
  const offset = _offset;
  at += offset;
  if (to - at < length) {
    throw new Error(`unstructured byte string len ${length} greater than remaining buf len.`);
  }
  const value = payload.subarray(at, at + length);
  _offset = offset + length;
  return value;
}
function decodeUnstructuredByteStringIndefinite(at, to) {
  at += 1;
  const vector = [];
  for (const base = at; at < to; ) {
    if (payload[at] === 255) {
      const data2 = alloc(vector.length);
      data2.set(vector, 0);
      _offset = at - base + 2;
      return data2;
    }
    const major = (payload[at] & 224) >> 5;
    const minor = payload[at] & 31;
    if (major !== majorUnstructuredByteString) {
      throw new Error(`unexpected major type ${major} in indefinite string.`);
    }
    if (minor === minorIndefinite) {
      throw new Error("nested indefinite string.");
    }
    const bytes = decodeUnstructuredByteString(at, to);
    const length = _offset;
    at += length;
    for (let i = 0; i < bytes.length; ++i) {
      vector.push(bytes[i]);
    }
  }
  throw new Error("expected break marker.");
}
function decodeList(at, to) {
  const listDataLength = decodeCount(at, to);
  const offset = _offset;
  at += offset;
  const base = at;
  const list = Array(listDataLength);
  for (let i = 0; i < listDataLength; ++i) {
    const item = decode(at, to);
    const itemOffset = _offset;
    list[i] = item;
    at += itemOffset;
  }
  _offset = offset + (at - base);
  return list;
}
function decodeListIndefinite(at, to) {
  at += 1;
  const list = [];
  for (const base = at; at < to; ) {
    if (payload[at] === 255) {
      _offset = at - base + 2;
      return list;
    }
    const item = decode(at, to);
    const n = _offset;
    at += n;
    list.push(item);
  }
  throw new Error("expected break marker.");
}
function decodeMap(at, to) {
  const mapDataLength = decodeCount(at, to);
  const offset = _offset;
  at += offset;
  const base = at;
  const map = {};
  for (let i = 0; i < mapDataLength; ++i) {
    if (at >= to) {
      throw new Error("unexpected end of map payload.");
    }
    const major = (payload[at] & 224) >> 5;
    if (major !== majorUtf8String) {
      throw new Error(`unexpected major type ${major} for map key at index ${at}.`);
    }
    const key = decode(at, to);
    at += _offset;
    const value = decode(at, to);
    at += _offset;
    map[key] = value;
  }
  _offset = offset + (at - base);
  return map;
}
function decodeMapIndefinite(at, to) {
  at += 1;
  const base = at;
  const map = {};
  for (; at < to; ) {
    if (at >= to) {
      throw new Error("unexpected end of map payload.");
    }
    if (payload[at] === 255) {
      _offset = at - base + 2;
      return map;
    }
    const major = (payload[at] & 224) >> 5;
    if (major !== majorUtf8String) {
      throw new Error(`unexpected major type ${major} for map key.`);
    }
    const key = decode(at, to);
    at += _offset;
    const value = decode(at, to);
    at += _offset;
    map[key] = value;
  }
  throw new Error("expected break marker.");
}
function decodeSpecial(at, to) {
  const minor = payload[at] & 31;
  switch (minor) {
    case specialTrue:
    case specialFalse:
      _offset = 1;
      return minor === specialTrue;
    case specialNull:
      _offset = 1;
      return null;
    case specialUndefined:
      _offset = 1;
      return null;
    case extendedFloat16:
      if (to - at < 3) {
        throw new Error("incomplete float16 at end of buf.");
      }
      _offset = 3;
      return bytesToFloat16(payload[at + 1], payload[at + 2]);
    case extendedFloat32:
      if (to - at < 5) {
        throw new Error("incomplete float32 at end of buf.");
      }
      _offset = 5;
      return dataView.getFloat32(at + 1);
    case extendedFloat64:
      if (to - at < 9) {
        throw new Error("incomplete float64 at end of buf.");
      }
      _offset = 9;
      return dataView.getFloat64(at + 1);
    default:
      throw new Error(`unexpected minor value ${minor}.`);
  }
}
function castBigInt(bigInt) {
  if (typeof bigInt === "number") {
    return bigInt;
  }
  const num = Number(bigInt);
  if (Number.MIN_SAFE_INTEGER <= num && num <= Number.MAX_SAFE_INTEGER) {
    return num;
  }
  return bigInt;
}
var import_util_utf8, USE_TEXT_DECODER, USE_BUFFER, payload, dataView, textDecoder, _offset, minorValueToArgumentLength;
var init_cbor_decode = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/cbor-decode.js"() {
    init_serde();
    import_util_utf8 = __toESM(require_dist_cjs6());
    init_cbor_types();
    USE_TEXT_DECODER = typeof TextDecoder !== "undefined";
    USE_BUFFER = typeof Buffer !== "undefined";
    payload = alloc(0);
    dataView = new DataView(payload.buffer, payload.byteOffset, payload.byteLength);
    textDecoder = USE_TEXT_DECODER ? new TextDecoder() : null;
    _offset = 0;
    minorValueToArgumentLength = {
      [extendedOneByte]: 1,
      [extendedFloat16]: 2,
      [extendedFloat32]: 4,
      [extendedFloat64]: 8
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/cbor-encode.js
function ensureSpace(bytes) {
  const remaining = data.byteLength - cursor;
  if (remaining < bytes) {
    if (cursor < 16e6) {
      resize(Math.max(data.byteLength * 4, data.byteLength + bytes));
    } else {
      resize(data.byteLength + bytes + 16e6);
    }
  }
}
function toUint8Array() {
  const out = alloc(cursor);
  out.set(data.subarray(0, cursor), 0);
  cursor = 0;
  return out;
}
function resize(size) {
  const old = data;
  data = alloc(size);
  if (old) {
    if (old.copy) {
      old.copy(data, 0, 0, old.byteLength);
    } else {
      data.set(old, 0);
    }
  }
  dataView2 = new DataView(data.buffer, data.byteOffset, data.byteLength);
}
function encodeHeader(major, value) {
  if (value < 24) {
    data[cursor++] = major << 5 | value;
  } else if (value < 1 << 8) {
    data[cursor++] = major << 5 | 24;
    data[cursor++] = value;
  } else if (value < 1 << 16) {
    data[cursor++] = major << 5 | extendedFloat16;
    dataView2.setUint16(cursor, value);
    cursor += 2;
  } else if (value < 2 ** 32) {
    data[cursor++] = major << 5 | extendedFloat32;
    dataView2.setUint32(cursor, value);
    cursor += 4;
  } else {
    data[cursor++] = major << 5 | extendedFloat64;
    dataView2.setBigUint64(cursor, typeof value === "bigint" ? value : BigInt(value));
    cursor += 8;
  }
}
function encode(_input) {
  const encodeStack = [_input];
  while (encodeStack.length) {
    const input = encodeStack.pop();
    ensureSpace(typeof input === "string" ? input.length * 4 : 64);
    if (typeof input === "string") {
      if (USE_BUFFER2) {
        encodeHeader(majorUtf8String, Buffer.byteLength(input));
        cursor += data.write(input, cursor);
      } else {
        const bytes = (0, import_util_utf82.fromUtf8)(input);
        encodeHeader(majorUtf8String, bytes.byteLength);
        data.set(bytes, cursor);
        cursor += bytes.byteLength;
      }
      continue;
    } else if (typeof input === "number") {
      if (Number.isInteger(input)) {
        const nonNegative = input >= 0;
        const major = nonNegative ? majorUint64 : majorNegativeInt64;
        const value = nonNegative ? input : -input - 1;
        if (value < 24) {
          data[cursor++] = major << 5 | value;
        } else if (value < 256) {
          data[cursor++] = major << 5 | 24;
          data[cursor++] = value;
        } else if (value < 65536) {
          data[cursor++] = major << 5 | extendedFloat16;
          data[cursor++] = value >> 8;
          data[cursor++] = value;
        } else if (value < 4294967296) {
          data[cursor++] = major << 5 | extendedFloat32;
          dataView2.setUint32(cursor, value);
          cursor += 4;
        } else {
          data[cursor++] = major << 5 | extendedFloat64;
          dataView2.setBigUint64(cursor, BigInt(value));
          cursor += 8;
        }
        continue;
      }
      data[cursor++] = majorSpecial << 5 | extendedFloat64;
      dataView2.setFloat64(cursor, input);
      cursor += 8;
      continue;
    } else if (typeof input === "bigint") {
      const nonNegative = input >= 0;
      const major = nonNegative ? majorUint64 : majorNegativeInt64;
      const value = nonNegative ? input : -input - BigInt(1);
      const n = Number(value);
      if (n < 24) {
        data[cursor++] = major << 5 | n;
      } else if (n < 256) {
        data[cursor++] = major << 5 | 24;
        data[cursor++] = n;
      } else if (n < 65536) {
        data[cursor++] = major << 5 | extendedFloat16;
        data[cursor++] = n >> 8;
        data[cursor++] = n & 255;
      } else if (n < 4294967296) {
        data[cursor++] = major << 5 | extendedFloat32;
        dataView2.setUint32(cursor, n);
        cursor += 4;
      } else if (value < BigInt("18446744073709551616")) {
        data[cursor++] = major << 5 | extendedFloat64;
        dataView2.setBigUint64(cursor, value);
        cursor += 8;
      } else {
        const binaryBigInt = value.toString(2);
        const bigIntBytes = new Uint8Array(Math.ceil(binaryBigInt.length / 8));
        let b = value;
        let i = 0;
        while (bigIntBytes.byteLength - ++i >= 0) {
          bigIntBytes[bigIntBytes.byteLength - i] = Number(b & BigInt(255));
          b >>= BigInt(8);
        }
        ensureSpace(bigIntBytes.byteLength * 2);
        data[cursor++] = nonNegative ? 194 : 195;
        if (USE_BUFFER2) {
          encodeHeader(majorUnstructuredByteString, Buffer.byteLength(bigIntBytes));
        } else {
          encodeHeader(majorUnstructuredByteString, bigIntBytes.byteLength);
        }
        data.set(bigIntBytes, cursor);
        cursor += bigIntBytes.byteLength;
      }
      continue;
    } else if (input === null) {
      data[cursor++] = majorSpecial << 5 | specialNull;
      continue;
    } else if (typeof input === "boolean") {
      data[cursor++] = majorSpecial << 5 | (input ? specialTrue : specialFalse);
      continue;
    } else if (typeof input === "undefined") {
      throw new Error("@smithy/core/cbor: client may not serialize undefined value.");
    } else if (Array.isArray(input)) {
      for (let i = input.length - 1; i >= 0; --i) {
        encodeStack.push(input[i]);
      }
      encodeHeader(majorList, input.length);
      continue;
    } else if (typeof input.byteLength === "number") {
      ensureSpace(input.length * 2);
      encodeHeader(majorUnstructuredByteString, input.length);
      data.set(input, cursor);
      cursor += input.byteLength;
      continue;
    } else if (typeof input === "object") {
      if (input instanceof NumericValue) {
        const decimalIndex = input.string.indexOf(".");
        const exponent = decimalIndex === -1 ? 0 : decimalIndex - input.string.length + 1;
        const mantissa = BigInt(input.string.replace(".", ""));
        data[cursor++] = 196;
        encodeStack.push(mantissa);
        encodeStack.push(exponent);
        encodeHeader(majorList, 2);
        continue;
      }
      if (input[tagSymbol]) {
        if ("tag" in input && "value" in input) {
          encodeStack.push(input.value);
          encodeHeader(majorTag, input.tag);
          continue;
        } else {
          throw new Error("tag encountered with missing fields, need 'tag' and 'value', found: " + JSON.stringify(input));
        }
      }
      const keys = Object.keys(input);
      for (let i = keys.length - 1; i >= 0; --i) {
        const key = keys[i];
        encodeStack.push(input[key]);
        encodeStack.push(key);
      }
      encodeHeader(majorMap, keys.length);
      continue;
    }
    throw new Error(`data type ${input?.constructor?.name ?? typeof input} not compatible for encoding.`);
  }
}
var import_util_utf82, USE_BUFFER2, initialSize, data, dataView2, cursor;
var init_cbor_encode = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/cbor-encode.js"() {
    init_serde();
    import_util_utf82 = __toESM(require_dist_cjs6());
    init_cbor_types();
    USE_BUFFER2 = typeof Buffer !== "undefined";
    initialSize = 2048;
    data = alloc(initialSize);
    dataView2 = new DataView(data.buffer, data.byteOffset, data.byteLength);
    cursor = 0;
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/cbor.js
var cbor;
var init_cbor = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/cbor.js"() {
    init_cbor_decode();
    init_cbor_encode();
    cbor = {
      deserialize(payload2) {
        setPayload(payload2);
        return decode(0, payload2.length);
      },
      serialize(input) {
        try {
          encode(input);
          return toUint8Array();
        } catch (e) {
          toUint8Array();
          throw e;
        }
      },
      resizeEncodingBuffer(size) {
        resize(size);
      }
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/parseCborBody.js
var dateToTag, loadSmithyRpcV2CborErrorCode;
var init_parseCborBody = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/parseCborBody.js"() {
    init_cbor_types();
    dateToTag = (date) => {
      return tag({
        tag: 1,
        value: date.getTime() / 1e3
      });
    };
    loadSmithyRpcV2CborErrorCode = (output, data2) => {
      const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      };
      if (data2["__type"] !== void 0) {
        return sanitizeErrorCode(data2["__type"]);
      }
      const codeKey = Object.keys(data2).find((key) => key.toLowerCase() === "code");
      if (codeKey && data2[codeKey] !== void 0) {
        return sanitizeErrorCode(data2[codeKey]);
      }
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/CborCodec.js
var import_util_base64, CborCodec, CborShapeSerializer, CborShapeDeserializer;
var init_CborCodec = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/CborCodec.js"() {
    init_protocols();
    init_schema();
    init_serde();
    import_util_base64 = __toESM(require_dist_cjs7());
    init_cbor();
    init_parseCborBody();
    CborCodec = class extends SerdeContext {
      createSerializer() {
        const serializer = new CborShapeSerializer();
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
      }
      createDeserializer() {
        const deserializer = new CborShapeDeserializer();
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
      }
    };
    CborShapeSerializer = class extends SerdeContext {
      value;
      write(schema, value) {
        this.value = this.serialize(schema, value);
      }
      serialize(schema, source) {
        const ns = NormalizedSchema.of(schema);
        if (source == null) {
          if (ns.isIdempotencyToken()) {
            return (0, import_uuid.v4)();
          }
          return source;
        }
        if (ns.isBlobSchema()) {
          if (typeof source === "string") {
            return (this.serdeContext?.base64Decoder ?? import_util_base64.fromBase64)(source);
          }
          return source;
        }
        if (ns.isTimestampSchema()) {
          if (typeof source === "number" || typeof source === "bigint") {
            return dateToTag(new Date(Number(source) / 1e3 | 0));
          }
          return dateToTag(source);
        }
        if (typeof source === "function" || typeof source === "object") {
          const sourceObject = source;
          if (ns.isListSchema() && Array.isArray(sourceObject)) {
            const sparse = !!ns.getMergedTraits().sparse;
            const newArray = [];
            let i = 0;
            for (const item of sourceObject) {
              const value = this.serialize(ns.getValueSchema(), item);
              if (value != null || sparse) {
                newArray[i++] = value;
              }
            }
            return newArray;
          }
          if (sourceObject instanceof Date) {
            return dateToTag(sourceObject);
          }
          const newObject = {};
          if (ns.isMapSchema()) {
            const sparse = !!ns.getMergedTraits().sparse;
            for (const key of Object.keys(sourceObject)) {
              const value = this.serialize(ns.getValueSchema(), sourceObject[key]);
              if (value != null || sparse) {
                newObject[key] = value;
              }
            }
          } else if (ns.isStructSchema()) {
            for (const [key, memberSchema] of ns.structIterator()) {
              const value = this.serialize(memberSchema, sourceObject[key]);
              if (value != null) {
                newObject[key] = value;
              }
            }
          } else if (ns.isDocumentSchema()) {
            for (const key of Object.keys(sourceObject)) {
              newObject[key] = this.serialize(ns.getValueSchema(), sourceObject[key]);
            }
          }
          return newObject;
        }
        return source;
      }
      flush() {
        const buffer = cbor.serialize(this.value);
        this.value = void 0;
        return buffer;
      }
    };
    CborShapeDeserializer = class extends SerdeContext {
      read(schema, bytes) {
        const data2 = cbor.deserialize(bytes);
        return this.readValue(schema, data2);
      }
      readValue(_schema, value) {
        const ns = NormalizedSchema.of(_schema);
        if (ns.isTimestampSchema() && typeof value === "number") {
          return _parseEpochTimestamp(value);
        }
        if (ns.isBlobSchema()) {
          if (typeof value === "string") {
            return (this.serdeContext?.base64Decoder ?? import_util_base64.fromBase64)(value);
          }
          return value;
        }
        if (typeof value === "undefined" || typeof value === "boolean" || typeof value === "number" || typeof value === "string" || typeof value === "bigint" || typeof value === "symbol") {
          return value;
        } else if (typeof value === "function" || typeof value === "object") {
          if (value === null) {
            return null;
          }
          if ("byteLength" in value) {
            return value;
          }
          if (value instanceof Date) {
            return value;
          }
          if (ns.isDocumentSchema()) {
            return value;
          }
          if (ns.isListSchema()) {
            const newArray = [];
            const memberSchema = ns.getValueSchema();
            const sparse = !!ns.getMergedTraits().sparse;
            for (const item of value) {
              const itemValue = this.readValue(memberSchema, item);
              if (itemValue != null || sparse) {
                newArray.push(itemValue);
              }
            }
            return newArray;
          }
          const newObject = {};
          if (ns.isMapSchema()) {
            const sparse = !!ns.getMergedTraits().sparse;
            const targetSchema = ns.getValueSchema();
            for (const key of Object.keys(value)) {
              const itemValue = this.readValue(targetSchema, value[key]);
              if (itemValue != null || sparse) {
                newObject[key] = itemValue;
              }
            }
          } else if (ns.isStructSchema()) {
            for (const [key, memberSchema] of ns.structIterator()) {
              newObject[key] = this.readValue(memberSchema, value[key]);
            }
          }
          return newObject;
        } else {
          return value;
        }
      }
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/SmithyRpcV2CborProtocol.js
var import_util_middleware3, SmithyRpcV2CborProtocol;
var init_SmithyRpcV2CborProtocol = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/SmithyRpcV2CborProtocol.js"() {
    init_protocols();
    init_schema();
    import_util_middleware3 = __toESM(require_dist_cjs3());
    init_CborCodec();
    init_parseCborBody();
    SmithyRpcV2CborProtocol = class extends RpcProtocol {
      codec = new CborCodec();
      serializer = this.codec.createSerializer();
      deserializer = this.codec.createDeserializer();
      constructor({ defaultNamespace }) {
        super({ defaultNamespace });
      }
      getShapeId() {
        return "smithy.protocols#rpcv2Cbor";
      }
      getPayloadCodec() {
        return this.codec;
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        Object.assign(request.headers, {
          "content-type": this.getDefaultContentType(),
          "smithy-protocol": "rpc-v2-cbor",
          accept: this.getDefaultContentType()
        });
        if (deref(operationSchema.input) === "unit") {
          delete request.body;
          delete request.headers["content-type"];
        } else {
          if (!request.body) {
            this.serializer.write(15, {});
            request.body = this.serializer.flush();
          }
          try {
            request.headers["content-length"] = String(request.body.byteLength);
          } catch (e) {
          }
        }
        const { service, operation } = (0, import_util_middleware3.getSmithyContext)(context);
        const path = `/service/${service}/operation/${operation}`;
        if (request.path.endsWith("/")) {
          request.path += path.slice(1);
        } else {
          request.path += path;
        }
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        return super.deserializeResponse(operationSchema, context, response);
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorName = loadSmithyRpcV2CborErrorCode(response, dataObject) ?? "Unknown";
        let namespace = this.options.defaultNamespace;
        if (errorName.includes("#")) {
          [namespace] = errorName.split("#");
        }
        const errorMetadata = {
          $metadata: metadata,
          $response: response,
          $fault: response.statusCode <= 500 ? "client" : "server"
        };
        const registry = TypeRegistry.for(namespace);
        let errorSchema;
        try {
          errorSchema = registry.getSchema(errorName);
        } catch (e) {
          if (dataObject.Message) {
            dataObject.message = dataObject.Message;
          }
          const synthetic = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace);
          const baseExceptionSchema = synthetic.getBaseException();
          if (baseExceptionSchema) {
            const ErrorCtor2 = synthetic.getErrorCtor(baseExceptionSchema);
            throw Object.assign(new ErrorCtor2({ name: errorName }), errorMetadata, dataObject);
          }
          throw Object.assign(new Error(errorName), errorMetadata, dataObject);
        }
        const ns = NormalizedSchema.of(errorSchema);
        const ErrorCtor = registry.getErrorCtor(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const exception = new ErrorCtor(message);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
          output[name] = this.deserializer.readValue(member, dataObject[name]);
        }
        throw Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output);
      }
      getDefaultContentType() {
        return "application/cbor";
      }
    };
  }
});

// ../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/index.js
var init_cbor2 = __esm({
  "../node_modules/.pnpm/@smithy+core@3.17.2/node_modules/@smithy/core/dist-es/submodules/cbor/index.js"() {
    init_parseCborBody();
    init_SmithyRpcV2CborProtocol();
    init_CborCodec();
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js
var ProtocolLib;
var init_ProtocolLib = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js"() {
    init_schema();
    ProtocolLib = class {
      resolveRestContentType(defaultContentType, inputSchema) {
        const members = inputSchema.getMemberSchemas();
        const httpPayloadMember = Object.values(members).find((m) => {
          return !!m.getMergedTraits().httpPayload;
        });
        if (httpPayloadMember) {
          const mediaType = httpPayloadMember.getMergedTraits().mediaType;
          if (mediaType) {
            return mediaType;
          } else if (httpPayloadMember.isStringSchema()) {
            return "text/plain";
          } else if (httpPayloadMember.isBlobSchema()) {
            return "application/octet-stream";
          } else {
            return defaultContentType;
          }
        } else if (!inputSchema.isUnitSchema()) {
          const hasBody = Object.values(members).find((m) => {
            const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m.getMergedTraits();
            const noPrefixHeaders = httpPrefixHeaders === void 0;
            return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && noPrefixHeaders;
          });
          if (hasBody) {
            return defaultContentType;
          }
        }
      }
      async getErrorSchemaOrThrowBaseException(errorIdentifier, defaultNamespace, response, dataObject, metadata, getErrorSchema) {
        let namespace = defaultNamespace;
        let errorName = errorIdentifier;
        if (errorIdentifier.includes("#")) {
          [namespace, errorName] = errorIdentifier.split("#");
        }
        const errorMetadata = {
          $metadata: metadata,
          $response: response,
          $fault: response.statusCode < 500 ? "client" : "server"
        };
        const registry = TypeRegistry.for(namespace);
        try {
          const errorSchema = getErrorSchema?.(registry, errorName) ?? registry.getSchema(errorIdentifier);
          return { errorSchema, errorMetadata };
        } catch (e) {
          dataObject.message = dataObject.message ?? dataObject.Message ?? "UnknownError";
          const synthetic = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace);
          const baseExceptionSchema = synthetic.getBaseException();
          if (baseExceptionSchema) {
            const ErrorCtor = synthetic.getErrorCtor(baseExceptionSchema) ?? Error;
            throw Object.assign(new ErrorCtor({ name: errorName }), errorMetadata, dataObject);
          }
          throw Object.assign(new Error(errorName), errorMetadata, dataObject);
        }
      }
      setQueryCompatError(output, response) {
        const queryErrorHeader = response.headers?.["x-amzn-query-error"];
        if (output !== void 0 && queryErrorHeader != null) {
          const [Code, Type] = queryErrorHeader.split(";");
          const entries = Object.entries(output);
          const Error2 = {
            Code,
            Type
          };
          Object.assign(output, Error2);
          for (const [k, v] of entries) {
            Error2[k] = v;
          }
          delete Error2.__type;
          output.Error = Error2;
        }
      }
      queryCompatOutput(queryCompatErrorData, errorData) {
        if (queryCompatErrorData.Error) {
          errorData.Error = queryCompatErrorData.Error;
        }
        if (queryCompatErrorData.Type) {
          errorData.Type = queryCompatErrorData.Type;
        }
        if (queryCompatErrorData.Code) {
          errorData.Code = queryCompatErrorData.Code;
        }
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/cbor/AwsSmithyRpcV2CborProtocol.js
var AwsSmithyRpcV2CborProtocol;
var init_AwsSmithyRpcV2CborProtocol = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/cbor/AwsSmithyRpcV2CborProtocol.js"() {
    init_cbor2();
    init_schema();
    init_ProtocolLib();
    AwsSmithyRpcV2CborProtocol = class extends SmithyRpcV2CborProtocol {
      awsQueryCompatible;
      mixin = new ProtocolLib();
      constructor({ defaultNamespace, awsQueryCompatible }) {
        super({ defaultNamespace });
        this.awsQueryCompatible = !!awsQueryCompatible;
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (this.awsQueryCompatible) {
          request.headers["x-amzn-query-mode"] = "true";
        }
        return request;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        if (this.awsQueryCompatible) {
          this.mixin.setQueryCompatError(dataObject, response);
        }
        const errorName = loadSmithyRpcV2CborErrorCode(response, dataObject) ?? "Unknown";
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorName, this.options.defaultNamespace, response, dataObject, metadata);
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
          output[name] = this.deserializer.readValue(member, dataObject[name]);
        }
        if (this.awsQueryCompatible) {
          this.mixin.queryCompatOutput(dataObject, output);
        }
        throw Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output);
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js
var _toStr, _toBool, _toNum;
var init_coercing_serializers = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js"() {
    _toStr = (val) => {
      if (val == null) {
        return val;
      }
      if (typeof val === "number" || typeof val === "bigint") {
        const warning = new Error(`Received number ${val} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val);
      }
      if (typeof val === "boolean") {
        const warning = new Error(`Received boolean ${val} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val);
      }
      return val;
    };
    _toBool = (val) => {
      if (val == null) {
        return val;
      }
      if (typeof val === "number") {
      }
      if (typeof val === "string") {
        const lowercase = val.toLowerCase();
        if (val !== "" && lowercase !== "false" && lowercase !== "true") {
          const warning = new Error(`Received string "${val}" where a boolean was expected.`);
          warning.name = "Warning";
          console.warn(warning);
        }
        return val !== "" && lowercase !== "false";
      }
      return val;
    };
    _toNum = (val) => {
      if (val == null) {
        return val;
      }
      if (typeof val === "boolean") {
      }
      if (typeof val === "string") {
        const num = Number(val);
        if (num.toString() !== val) {
          const warning = new Error(`Received string "${val}" where a number was expected.`);
          warning.name = "Warning";
          console.warn(warning);
          return val;
        }
        return num;
      }
      return val;
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js
var SerdeContextConfig;
var init_ConfigurableSerdeContext = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js"() {
    SerdeContextConfig = class {
      serdeContext;
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js
function jsonReviver(key, value, context) {
  if (context?.source) {
    const numericString = context.source;
    if (typeof value === "number") {
      if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER || numericString !== String(value)) {
        const isFractional = numericString.includes(".");
        if (isFractional) {
          return new NumericValue(numericString, "bigDecimal");
        } else {
          return BigInt(numericString);
        }
      }
    }
  }
  return value;
}
var init_jsonReviver = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReviver.js"() {
    init_serde();
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var import_smithy_client, import_util_utf83, collectBodyString;
var init_common = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js"() {
    import_smithy_client = __toESM(require_dist_cjs13());
    import_util_utf83 = __toESM(require_dist_cjs6());
    collectBodyString = (streamBody, context) => (0, import_smithy_client.collectBody)(streamBody, context).then((body) => (context?.utf8Encoder ?? import_util_utf83.toUtf8)(body));
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody, parseJsonErrorBody, loadRestJsonErrorCode;
var init_parseJsonBody = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js"() {
    init_common();
    parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        try {
          return JSON.parse(encoded);
        } catch (e) {
          if (e?.name === "SyntaxError") {
            Object.defineProperty(e, "$responseBodyText", {
              value: encoded
            });
          }
          throw e;
        }
      }
      return {};
    });
    parseJsonErrorBody = async (errorBody, context) => {
      const value = await parseJsonBody(errorBody, context);
      value.message = value.message ?? value.Message;
      return value;
    };
    loadRestJsonErrorCode = (output, data2) => {
      const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
      const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      };
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data2 && typeof data2 === "object") {
        const codeKey = findKey(data2, "code");
        if (codeKey && data2[codeKey] !== void 0) {
          return sanitizeErrorCode(data2[codeKey]);
        }
        if (data2["__type"] !== void 0) {
          return sanitizeErrorCode(data2["__type"]);
        }
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js
var import_util_base642, JsonShapeDeserializer;
var init_JsonShapeDeserializer = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeDeserializer.js"() {
    init_protocols();
    init_schema();
    init_serde();
    import_util_base642 = __toESM(require_dist_cjs7());
    init_ConfigurableSerdeContext();
    init_jsonReviver();
    init_parseJsonBody();
    JsonShapeDeserializer = class extends SerdeContextConfig {
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      async read(schema, data2) {
        return this._read(schema, typeof data2 === "string" ? JSON.parse(data2, jsonReviver) : await parseJsonBody(data2, this.serdeContext));
      }
      readObject(schema, data2) {
        return this._read(schema, data2);
      }
      _read(schema, value) {
        const isObject = value !== null && typeof value === "object";
        const ns = NormalizedSchema.of(schema);
        if (ns.isListSchema() && Array.isArray(value)) {
          const listMember = ns.getValueSchema();
          const out = [];
          const sparse = !!ns.getMergedTraits().sparse;
          for (const item of value) {
            if (sparse || item != null) {
              out.push(this._read(listMember, item));
            }
          }
          return out;
        } else if (ns.isMapSchema() && isObject) {
          const mapMember = ns.getValueSchema();
          const out = {};
          const sparse = !!ns.getMergedTraits().sparse;
          for (const [_k, _v] of Object.entries(value)) {
            if (sparse || _v != null) {
              out[_k] = this._read(mapMember, _v);
            }
          }
          return out;
        } else if (ns.isStructSchema() && isObject) {
          const out = {};
          for (const [memberName, memberSchema] of ns.structIterator()) {
            const fromKey = this.settings.jsonName ? memberSchema.getMergedTraits().jsonName ?? memberName : memberName;
            const deserializedValue = this._read(memberSchema, value[fromKey]);
            if (deserializedValue != null) {
              out[memberName] = deserializedValue;
            }
          }
          return out;
        }
        if (ns.isBlobSchema() && typeof value === "string") {
          return (0, import_util_base642.fromBase64)(value);
        }
        const mediaType = ns.getMergedTraits().mediaType;
        if (ns.isStringSchema() && typeof value === "string" && mediaType) {
          const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
          if (isJson) {
            return LazyJsonString.from(value);
          }
        }
        if (ns.isTimestampSchema() && value != null) {
          const format = determineTimestampFormat(ns, this.settings);
          switch (format) {
            case 5:
              return parseRfc3339DateTimeWithOffset(value);
            case 6:
              return parseRfc7231DateTime(value);
            case 7:
              return parseEpochTimestamp(value);
            default:
              console.warn("Missing timestamp format, parsing value with Date constructor:", value);
              return new Date(value);
          }
        }
        if (ns.isBigIntegerSchema() && (typeof value === "number" || typeof value === "string")) {
          return BigInt(value);
        }
        if (ns.isBigDecimalSchema() && value != void 0) {
          if (value instanceof NumericValue) {
            return value;
          }
          const untyped = value;
          if (untyped.type === "bigDecimal" && "string" in untyped) {
            return new NumericValue(untyped.string, untyped.type);
          }
          return new NumericValue(String(value), "bigDecimal");
        }
        if (ns.isNumericSchema() && typeof value === "string") {
          switch (value) {
            case "Infinity":
              return Infinity;
            case "-Infinity":
              return -Infinity;
            case "NaN":
              return NaN;
          }
        }
        if (ns.isDocumentSchema()) {
          if (isObject) {
            const out = Array.isArray(value) ? [] : {};
            for (const [k, v] of Object.entries(value)) {
              if (v instanceof NumericValue) {
                out[k] = v;
              } else {
                out[k] = this._read(ns, v);
              }
            }
            return out;
          } else {
            return structuredClone(value);
          }
        }
        return value;
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReplacer.js
var NUMERIC_CONTROL_CHAR, JsonReplacer;
var init_jsonReplacer = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/jsonReplacer.js"() {
    init_serde();
    NUMERIC_CONTROL_CHAR = String.fromCharCode(925);
    JsonReplacer = class {
      values = /* @__PURE__ */ new Map();
      counter = 0;
      stage = 0;
      createReplacer() {
        if (this.stage === 1) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
        }
        if (this.stage === 2) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 1;
        return (key, value) => {
          if (value instanceof NumericValue) {
            const v = `${NUMERIC_CONTROL_CHAR + "nv" + this.counter++}_` + value.string;
            this.values.set(`"${v}"`, value.string);
            return v;
          }
          if (typeof value === "bigint") {
            const s = value.toString();
            const v = `${NUMERIC_CONTROL_CHAR + "b" + this.counter++}_` + s;
            this.values.set(`"${v}"`, s);
            return v;
          }
          return value;
        };
      }
      replaceInJson(json) {
        if (this.stage === 0) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
        }
        if (this.stage === 2) {
          throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
        }
        this.stage = 2;
        if (this.counter === 0) {
          return json;
        }
        for (const [key, value] of this.values) {
          json = json.replace(key, value);
        }
        return json;
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js
var import_util_base643, JsonShapeSerializer;
var init_JsonShapeSerializer = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonShapeSerializer.js"() {
    init_protocols();
    init_schema();
    init_serde();
    import_util_base643 = __toESM(require_dist_cjs7());
    init_ConfigurableSerdeContext();
    init_jsonReplacer();
    JsonShapeSerializer = class extends SerdeContextConfig {
      settings;
      buffer;
      rootSchema;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value) {
        this.rootSchema = NormalizedSchema.of(schema);
        this.buffer = this._write(this.rootSchema, value);
      }
      writeDiscriminatedDocument(schema, value) {
        this.write(schema, value);
        if (typeof this.buffer === "object") {
          this.buffer.__type = NormalizedSchema.of(schema).getName(true);
        }
      }
      flush() {
        const { rootSchema } = this;
        this.rootSchema = void 0;
        if (rootSchema?.isStructSchema() || rootSchema?.isDocumentSchema()) {
          const replacer = new JsonReplacer();
          return replacer.replaceInJson(JSON.stringify(this.buffer, replacer.createReplacer(), 0));
        }
        return this.buffer;
      }
      _write(schema, value, container) {
        const isObject = value !== null && typeof value === "object";
        const ns = NormalizedSchema.of(schema);
        if (ns.isListSchema() && Array.isArray(value)) {
          const listMember = ns.getValueSchema();
          const out = [];
          const sparse = !!ns.getMergedTraits().sparse;
          for (const item of value) {
            if (sparse || item != null) {
              out.push(this._write(listMember, item));
            }
          }
          return out;
        } else if (ns.isMapSchema() && isObject) {
          const mapMember = ns.getValueSchema();
          const out = {};
          const sparse = !!ns.getMergedTraits().sparse;
          for (const [_k, _v] of Object.entries(value)) {
            if (sparse || _v != null) {
              out[_k] = this._write(mapMember, _v);
            }
          }
          return out;
        } else if (ns.isStructSchema() && isObject) {
          const out = {};
          for (const [memberName, memberSchema] of ns.structIterator()) {
            const targetKey = this.settings.jsonName ? memberSchema.getMergedTraits().jsonName ?? memberName : memberName;
            const serializableValue = this._write(memberSchema, value[memberName], ns);
            if (serializableValue !== void 0) {
              out[targetKey] = serializableValue;
            }
          }
          return out;
        }
        if (value === null && container?.isStructSchema()) {
          return void 0;
        }
        if (ns.isBlobSchema() && (value instanceof Uint8Array || typeof value === "string") || ns.isDocumentSchema() && value instanceof Uint8Array) {
          if (ns === this.rootSchema) {
            return value;
          }
          if (!this.serdeContext?.base64Encoder) {
            return (0, import_util_base643.toBase64)(value);
          }
          return this.serdeContext?.base64Encoder(value);
        }
        if ((ns.isTimestampSchema() || ns.isDocumentSchema()) && value instanceof Date) {
          const format = determineTimestampFormat(ns, this.settings);
          switch (format) {
            case 5:
              return value.toISOString().replace(".000Z", "Z");
            case 6:
              return dateToUtcString(value);
            case 7:
              return value.getTime() / 1e3;
            default:
              console.warn("Missing timestamp format, using epoch seconds", value);
              return value.getTime() / 1e3;
          }
        }
        if (ns.isNumericSchema() && typeof value === "number") {
          if (Math.abs(value) === Infinity || isNaN(value)) {
            return String(value);
          }
        }
        if (ns.isStringSchema()) {
          if (typeof value === "undefined" && ns.isIdempotencyToken()) {
            return (0, import_uuid.v4)();
          }
          const mediaType = ns.getMergedTraits().mediaType;
          if (value != null && mediaType) {
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              return LazyJsonString.from(value);
            }
          }
        }
        if (ns.isDocumentSchema()) {
          if (isObject) {
            const out = Array.isArray(value) ? [] : {};
            for (const [k, v] of Object.entries(value)) {
              if (v instanceof NumericValue) {
                out[k] = v;
              } else {
                out[k] = this._write(ns, v);
              }
            }
            return out;
          } else {
            return structuredClone(value);
          }
        }
        return value;
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonCodec.js
var JsonCodec;
var init_JsonCodec = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/JsonCodec.js"() {
    init_ConfigurableSerdeContext();
    init_JsonShapeDeserializer();
    init_JsonShapeSerializer();
    JsonCodec = class extends SerdeContextConfig {
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      createSerializer() {
        const serializer = new JsonShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
      }
      createDeserializer() {
        const deserializer = new JsonShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js
var AwsJsonRpcProtocol;
var init_AwsJsonRpcProtocol = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJsonRpcProtocol.js"() {
    init_protocols();
    init_schema();
    init_ProtocolLib();
    init_JsonCodec();
    init_parseJsonBody();
    AwsJsonRpcProtocol = class extends RpcProtocol {
      serializer;
      deserializer;
      serviceTarget;
      codec;
      mixin = new ProtocolLib();
      awsQueryCompatible;
      constructor({ defaultNamespace, serviceTarget, awsQueryCompatible }) {
        super({
          defaultNamespace
        });
        this.serviceTarget = serviceTarget;
        this.codec = new JsonCodec({
          timestampFormat: {
            useTrait: true,
            default: 7
          },
          jsonName: false
        });
        this.serializer = this.codec.createSerializer();
        this.deserializer = this.codec.createDeserializer();
        this.awsQueryCompatible = !!awsQueryCompatible;
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (!request.path.endsWith("/")) {
          request.path += "/";
        }
        Object.assign(request.headers, {
          "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
          "x-amz-target": `${this.serviceTarget}.${operationSchema.name}`
        });
        if (this.awsQueryCompatible) {
          request.headers["x-amzn-query-mode"] = "true";
        }
        if (deref(operationSchema.input) === "unit" || !request.body) {
          request.body = "{}";
        }
        return request;
      }
      getPayloadCodec() {
        return this.codec;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        if (this.awsQueryCompatible) {
          this.mixin.setQueryCompatError(dataObject, response);
        }
        const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
          const target = member.getMergedTraits().jsonName ?? name;
          output[name] = this.codec.createDeserializer().readObject(member, dataObject[target]);
        }
        if (this.awsQueryCompatible) {
          this.mixin.queryCompatOutput(dataObject, output);
        }
        throw Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output);
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_0Protocol.js
var AwsJson1_0Protocol;
var init_AwsJson1_0Protocol = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_0Protocol.js"() {
    init_AwsJsonRpcProtocol();
    AwsJson1_0Protocol = class extends AwsJsonRpcProtocol {
      constructor({ defaultNamespace, serviceTarget, awsQueryCompatible }) {
        super({
          defaultNamespace,
          serviceTarget,
          awsQueryCompatible
        });
      }
      getShapeId() {
        return "aws.protocols#awsJson1_0";
      }
      getJsonRpcVersion() {
        return "1.0";
      }
      getDefaultContentType() {
        return "application/x-amz-json-1.0";
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js
var AwsJson1_1Protocol;
var init_AwsJson1_1Protocol = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js"() {
    init_AwsJsonRpcProtocol();
    AwsJson1_1Protocol = class extends AwsJsonRpcProtocol {
      constructor({ defaultNamespace, serviceTarget, awsQueryCompatible }) {
        super({
          defaultNamespace,
          serviceTarget,
          awsQueryCompatible
        });
      }
      getShapeId() {
        return "aws.protocols#awsJson1_1";
      }
      getJsonRpcVersion() {
        return "1.1";
      }
      getDefaultContentType() {
        return "application/x-amz-json-1.1";
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js
var AwsRestJsonProtocol;
var init_AwsRestJsonProtocol = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js"() {
    init_protocols();
    init_schema();
    init_ProtocolLib();
    init_JsonCodec();
    init_parseJsonBody();
    AwsRestJsonProtocol = class extends HttpBindingProtocol {
      serializer;
      deserializer;
      codec;
      mixin = new ProtocolLib();
      constructor({ defaultNamespace }) {
        super({
          defaultNamespace
        });
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: 7
          },
          httpBindings: true,
          jsonName: true
        };
        this.codec = new JsonCodec(settings);
        this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
        this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
      }
      getShapeId() {
        return "aws.protocols#restJson1";
      }
      getPayloadCodec() {
        return this.codec;
      }
      setSerdeContext(serdeContext) {
        this.codec.setSerdeContext(serdeContext);
        super.setSerdeContext(serdeContext);
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        const inputSchema = NormalizedSchema.of(operationSchema.input);
        if (!request.headers["content-type"]) {
          const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
          if (contentType) {
            request.headers["content-type"] = contentType;
          }
        }
        if (request.headers["content-type"] && !request.body) {
          request.body = "{}";
        }
        return request;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.message ?? dataObject.Message ?? "Unknown";
        const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
          const target = member.getMergedTraits().jsonName ?? name;
          output[name] = this.codec.createDeserializer().readObject(member, dataObject[target]);
        }
        throw Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output);
      }
      getDefaultContentType() {
        return "application/json";
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var import_smithy_client2, awsExpectUnion;
var init_awsExpectUnion = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js"() {
    import_smithy_client2 = __toESM(require_dist_cjs13());
    awsExpectUnion = (value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value === "object" && "__type" in value) {
        delete value.__type;
      }
      return (0, import_smithy_client2.expectUnion)(value);
    };
  }
});

// ../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/lib/fxp.cjs
var require_fxp = __commonJS({
  "../node_modules/.pnpm/fast-xml-parser@5.2.5/node_modules/fast-xml-parser/lib/fxp.cjs"(exports, module) {
    (() => {
      "use strict";
      var t = { d: (e2, n2) => {
        for (var i2 in n2) t.o(n2, i2) && !t.o(e2, i2) && Object.defineProperty(e2, i2, { enumerable: true, get: n2[i2] });
      }, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r: (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      } }, e = {};
      t.r(e), t.d(e, { XMLBuilder: () => ft, XMLParser: () => st, XMLValidator: () => mt });
      const n = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", i = new RegExp("^[" + n + "][" + n + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
      function s(t2, e2) {
        const n2 = [];
        let i2 = e2.exec(t2);
        for (; i2; ) {
          const s2 = [];
          s2.startIndex = e2.lastIndex - i2[0].length;
          const r2 = i2.length;
          for (let t3 = 0; t3 < r2; t3++) s2.push(i2[t3]);
          n2.push(s2), i2 = e2.exec(t2);
        }
        return n2;
      }
      const r = function(t2) {
        return !(null == i.exec(t2));
      }, o = { allowBooleanAttributes: false, unpairedTags: [] };
      function a(t2, e2) {
        e2 = Object.assign({}, o, e2);
        const n2 = [];
        let i2 = false, s2 = false;
        "\uFEFF" === t2[0] && (t2 = t2.substr(1));
        for (let o2 = 0; o2 < t2.length; o2++) if ("<" === t2[o2] && "?" === t2[o2 + 1]) {
          if (o2 += 2, o2 = u(t2, o2), o2.err) return o2;
        } else {
          if ("<" !== t2[o2]) {
            if (l(t2[o2])) continue;
            return x("InvalidChar", "char '" + t2[o2] + "' is not expected.", N(t2, o2));
          }
          {
            let a2 = o2;
            if (o2++, "!" === t2[o2]) {
              o2 = h(t2, o2);
              continue;
            }
            {
              let d2 = false;
              "/" === t2[o2] && (d2 = true, o2++);
              let f2 = "";
              for (; o2 < t2.length && ">" !== t2[o2] && " " !== t2[o2] && "	" !== t2[o2] && "\n" !== t2[o2] && "\r" !== t2[o2]; o2++) f2 += t2[o2];
              if (f2 = f2.trim(), "/" === f2[f2.length - 1] && (f2 = f2.substring(0, f2.length - 1), o2--), !r(f2)) {
                let e3;
                return e3 = 0 === f2.trim().length ? "Invalid space after '<'." : "Tag '" + f2 + "' is an invalid name.", x("InvalidTag", e3, N(t2, o2));
              }
              const p2 = c(t2, o2);
              if (false === p2) return x("InvalidAttr", "Attributes for '" + f2 + "' have open quote.", N(t2, o2));
              let b2 = p2.value;
              if (o2 = p2.index, "/" === b2[b2.length - 1]) {
                const n3 = o2 - b2.length;
                b2 = b2.substring(0, b2.length - 1);
                const s3 = g(b2, e2);
                if (true !== s3) return x(s3.err.code, s3.err.msg, N(t2, n3 + s3.err.line));
                i2 = true;
              } else if (d2) {
                if (!p2.tagClosed) return x("InvalidTag", "Closing tag '" + f2 + "' doesn't have proper closing.", N(t2, o2));
                if (b2.trim().length > 0) return x("InvalidTag", "Closing tag '" + f2 + "' can't have attributes or invalid starting.", N(t2, a2));
                if (0 === n2.length) return x("InvalidTag", "Closing tag '" + f2 + "' has not been opened.", N(t2, a2));
                {
                  const e3 = n2.pop();
                  if (f2 !== e3.tagName) {
                    let n3 = N(t2, e3.tagStartPos);
                    return x("InvalidTag", "Expected closing tag '" + e3.tagName + "' (opened in line " + n3.line + ", col " + n3.col + ") instead of closing tag '" + f2 + "'.", N(t2, a2));
                  }
                  0 == n2.length && (s2 = true);
                }
              } else {
                const r2 = g(b2, e2);
                if (true !== r2) return x(r2.err.code, r2.err.msg, N(t2, o2 - b2.length + r2.err.line));
                if (true === s2) return x("InvalidXml", "Multiple possible root nodes found.", N(t2, o2));
                -1 !== e2.unpairedTags.indexOf(f2) || n2.push({ tagName: f2, tagStartPos: a2 }), i2 = true;
              }
              for (o2++; o2 < t2.length; o2++) if ("<" === t2[o2]) {
                if ("!" === t2[o2 + 1]) {
                  o2++, o2 = h(t2, o2);
                  continue;
                }
                if ("?" !== t2[o2 + 1]) break;
                if (o2 = u(t2, ++o2), o2.err) return o2;
              } else if ("&" === t2[o2]) {
                const e3 = m(t2, o2);
                if (-1 == e3) return x("InvalidChar", "char '&' is not expected.", N(t2, o2));
                o2 = e3;
              } else if (true === s2 && !l(t2[o2])) return x("InvalidXml", "Extra text at the end", N(t2, o2));
              "<" === t2[o2] && o2--;
            }
          }
        }
        return i2 ? 1 == n2.length ? x("InvalidTag", "Unclosed tag '" + n2[0].tagName + "'.", N(t2, n2[0].tagStartPos)) : !(n2.length > 0) || x("InvalidXml", "Invalid '" + JSON.stringify(n2.map(((t3) => t3.tagName)), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : x("InvalidXml", "Start tag expected.", 1);
      }
      function l(t2) {
        return " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2;
      }
      function u(t2, e2) {
        const n2 = e2;
        for (; e2 < t2.length; e2++) if ("?" != t2[e2] && " " != t2[e2]) ;
        else {
          const i2 = t2.substr(n2, e2 - n2);
          if (e2 > 5 && "xml" === i2) return x("InvalidXml", "XML declaration allowed only at the start of the document.", N(t2, e2));
          if ("?" == t2[e2] && ">" == t2[e2 + 1]) {
            e2++;
            break;
          }
        }
        return e2;
      }
      function h(t2, e2) {
        if (t2.length > e2 + 5 && "-" === t2[e2 + 1] && "-" === t2[e2 + 2]) {
          for (e2 += 3; e2 < t2.length; e2++) if ("-" === t2[e2] && "-" === t2[e2 + 1] && ">" === t2[e2 + 2]) {
            e2 += 2;
            break;
          }
        } else if (t2.length > e2 + 8 && "D" === t2[e2 + 1] && "O" === t2[e2 + 2] && "C" === t2[e2 + 3] && "T" === t2[e2 + 4] && "Y" === t2[e2 + 5] && "P" === t2[e2 + 6] && "E" === t2[e2 + 7]) {
          let n2 = 1;
          for (e2 += 8; e2 < t2.length; e2++) if ("<" === t2[e2]) n2++;
          else if (">" === t2[e2] && (n2--, 0 === n2)) break;
        } else if (t2.length > e2 + 9 && "[" === t2[e2 + 1] && "C" === t2[e2 + 2] && "D" === t2[e2 + 3] && "A" === t2[e2 + 4] && "T" === t2[e2 + 5] && "A" === t2[e2 + 6] && "[" === t2[e2 + 7]) {
          for (e2 += 8; e2 < t2.length; e2++) if ("]" === t2[e2] && "]" === t2[e2 + 1] && ">" === t2[e2 + 2]) {
            e2 += 2;
            break;
          }
        }
        return e2;
      }
      const d = '"', f = "'";
      function c(t2, e2) {
        let n2 = "", i2 = "", s2 = false;
        for (; e2 < t2.length; e2++) {
          if (t2[e2] === d || t2[e2] === f) "" === i2 ? i2 = t2[e2] : i2 !== t2[e2] || (i2 = "");
          else if (">" === t2[e2] && "" === i2) {
            s2 = true;
            break;
          }
          n2 += t2[e2];
        }
        return "" === i2 && { value: n2, index: e2, tagClosed: s2 };
      }
      const p = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
      function g(t2, e2) {
        const n2 = s(t2, p), i2 = {};
        for (let t3 = 0; t3 < n2.length; t3++) {
          if (0 === n2[t3][1].length) return x("InvalidAttr", "Attribute '" + n2[t3][2] + "' has no space in starting.", E(n2[t3]));
          if (void 0 !== n2[t3][3] && void 0 === n2[t3][4]) return x("InvalidAttr", "Attribute '" + n2[t3][2] + "' is without value.", E(n2[t3]));
          if (void 0 === n2[t3][3] && !e2.allowBooleanAttributes) return x("InvalidAttr", "boolean attribute '" + n2[t3][2] + "' is not allowed.", E(n2[t3]));
          const s2 = n2[t3][2];
          if (!b(s2)) return x("InvalidAttr", "Attribute '" + s2 + "' is an invalid name.", E(n2[t3]));
          if (i2.hasOwnProperty(s2)) return x("InvalidAttr", "Attribute '" + s2 + "' is repeated.", E(n2[t3]));
          i2[s2] = 1;
        }
        return true;
      }
      function m(t2, e2) {
        if (";" === t2[++e2]) return -1;
        if ("#" === t2[e2]) return (function(t3, e3) {
          let n3 = /\d/;
          for ("x" === t3[e3] && (e3++, n3 = /[\da-fA-F]/); e3 < t3.length; e3++) {
            if (";" === t3[e3]) return e3;
            if (!t3[e3].match(n3)) break;
          }
          return -1;
        })(t2, ++e2);
        let n2 = 0;
        for (; e2 < t2.length; e2++, n2++) if (!(t2[e2].match(/\w/) && n2 < 20)) {
          if (";" === t2[e2]) break;
          return -1;
        }
        return e2;
      }
      function x(t2, e2, n2) {
        return { err: { code: t2, msg: e2, line: n2.line || n2, col: n2.col } };
      }
      function b(t2) {
        return r(t2);
      }
      function N(t2, e2) {
        const n2 = t2.substring(0, e2).split(/\r?\n/);
        return { line: n2.length, col: n2[n2.length - 1].length + 1 };
      }
      function E(t2) {
        return t2.startIndex + t2[1].length;
      }
      const v = { preserveOrder: false, attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, removeNSPrefix: false, allowBooleanAttributes: false, parseTagValue: true, parseAttributeValue: false, trimValues: true, cdataPropName: false, numberParseOptions: { hex: true, leadingZeros: true, eNotation: true }, tagValueProcessor: function(t2, e2) {
        return e2;
      }, attributeValueProcessor: function(t2, e2) {
        return e2;
      }, stopNodes: [], alwaysCreateTextNode: false, isArray: () => false, commentPropName: false, unpairedTags: [], processEntities: true, htmlEntities: false, ignoreDeclaration: false, ignorePiTags: false, transformTagName: false, transformAttributeName: false, updateTag: function(t2, e2, n2) {
        return t2;
      }, captureMetaData: false };
      let y;
      y = "function" != typeof Symbol ? "@@xmlMetadata" : Symbol("XML Node Metadata");
      class T {
        constructor(t2) {
          this.tagname = t2, this.child = [], this[":@"] = {};
        }
        add(t2, e2) {
          "__proto__" === t2 && (t2 = "#__proto__"), this.child.push({ [t2]: e2 });
        }
        addChild(t2, e2) {
          "__proto__" === t2.tagname && (t2.tagname = "#__proto__"), t2[":@"] && Object.keys(t2[":@"]).length > 0 ? this.child.push({ [t2.tagname]: t2.child, ":@": t2[":@"] }) : this.child.push({ [t2.tagname]: t2.child }), void 0 !== e2 && (this.child[this.child.length - 1][y] = { startIndex: e2 });
        }
        static getMetaDataSymbol() {
          return y;
        }
      }
      function w(t2, e2) {
        const n2 = {};
        if ("O" !== t2[e2 + 3] || "C" !== t2[e2 + 4] || "T" !== t2[e2 + 5] || "Y" !== t2[e2 + 6] || "P" !== t2[e2 + 7] || "E" !== t2[e2 + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
        {
          e2 += 9;
          let i2 = 1, s2 = false, r2 = false, o2 = "";
          for (; e2 < t2.length; e2++) if ("<" !== t2[e2] || r2) if (">" === t2[e2]) {
            if (r2 ? "-" === t2[e2 - 1] && "-" === t2[e2 - 2] && (r2 = false, i2--) : i2--, 0 === i2) break;
          } else "[" === t2[e2] ? s2 = true : o2 += t2[e2];
          else {
            if (s2 && C(t2, "!ENTITY", e2)) {
              let i3, s3;
              e2 += 7, [i3, s3, e2] = O(t2, e2 + 1), -1 === s3.indexOf("&") && (n2[i3] = { regx: RegExp(`&${i3};`, "g"), val: s3 });
            } else if (s2 && C(t2, "!ELEMENT", e2)) {
              e2 += 8;
              const { index: n3 } = S(t2, e2 + 1);
              e2 = n3;
            } else if (s2 && C(t2, "!ATTLIST", e2)) e2 += 8;
            else if (s2 && C(t2, "!NOTATION", e2)) {
              e2 += 9;
              const { index: n3 } = A(t2, e2 + 1);
              e2 = n3;
            } else {
              if (!C(t2, "!--", e2)) throw new Error("Invalid DOCTYPE");
              r2 = true;
            }
            i2++, o2 = "";
          }
          if (0 !== i2) throw new Error("Unclosed DOCTYPE");
        }
        return { entities: n2, i: e2 };
      }
      const P = (t2, e2) => {
        for (; e2 < t2.length && /\s/.test(t2[e2]); ) e2++;
        return e2;
      };
      function O(t2, e2) {
        e2 = P(t2, e2);
        let n2 = "";
        for (; e2 < t2.length && !/\s/.test(t2[e2]) && '"' !== t2[e2] && "'" !== t2[e2]; ) n2 += t2[e2], e2++;
        if ($(n2), e2 = P(t2, e2), "SYSTEM" === t2.substring(e2, e2 + 6).toUpperCase()) throw new Error("External entities are not supported");
        if ("%" === t2[e2]) throw new Error("Parameter entities are not supported");
        let i2 = "";
        return [e2, i2] = I(t2, e2, "entity"), [n2, i2, --e2];
      }
      function A(t2, e2) {
        e2 = P(t2, e2);
        let n2 = "";
        for (; e2 < t2.length && !/\s/.test(t2[e2]); ) n2 += t2[e2], e2++;
        $(n2), e2 = P(t2, e2);
        const i2 = t2.substring(e2, e2 + 6).toUpperCase();
        if ("SYSTEM" !== i2 && "PUBLIC" !== i2) throw new Error(`Expected SYSTEM or PUBLIC, found "${i2}"`);
        e2 += i2.length, e2 = P(t2, e2);
        let s2 = null, r2 = null;
        if ("PUBLIC" === i2) [e2, s2] = I(t2, e2, "publicIdentifier"), '"' !== t2[e2 = P(t2, e2)] && "'" !== t2[e2] || ([e2, r2] = I(t2, e2, "systemIdentifier"));
        else if ("SYSTEM" === i2 && ([e2, r2] = I(t2, e2, "systemIdentifier"), !r2)) throw new Error("Missing mandatory system identifier for SYSTEM notation");
        return { notationName: n2, publicIdentifier: s2, systemIdentifier: r2, index: --e2 };
      }
      function I(t2, e2, n2) {
        let i2 = "";
        const s2 = t2[e2];
        if ('"' !== s2 && "'" !== s2) throw new Error(`Expected quoted string, found "${s2}"`);
        for (e2++; e2 < t2.length && t2[e2] !== s2; ) i2 += t2[e2], e2++;
        if (t2[e2] !== s2) throw new Error(`Unterminated ${n2} value`);
        return [++e2, i2];
      }
      function S(t2, e2) {
        e2 = P(t2, e2);
        let n2 = "";
        for (; e2 < t2.length && !/\s/.test(t2[e2]); ) n2 += t2[e2], e2++;
        if (!$(n2)) throw new Error(`Invalid element name: "${n2}"`);
        let i2 = "";
        if ("E" === t2[e2 = P(t2, e2)] && C(t2, "MPTY", e2)) e2 += 4;
        else if ("A" === t2[e2] && C(t2, "NY", e2)) e2 += 2;
        else {
          if ("(" !== t2[e2]) throw new Error(`Invalid Element Expression, found "${t2[e2]}"`);
          for (e2++; e2 < t2.length && ")" !== t2[e2]; ) i2 += t2[e2], e2++;
          if (")" !== t2[e2]) throw new Error("Unterminated content model");
        }
        return { elementName: n2, contentModel: i2.trim(), index: e2 };
      }
      function C(t2, e2, n2) {
        for (let i2 = 0; i2 < e2.length; i2++) if (e2[i2] !== t2[n2 + i2 + 1]) return false;
        return true;
      }
      function $(t2) {
        if (r(t2)) return t2;
        throw new Error(`Invalid entity name ${t2}`);
      }
      const j = /^[-+]?0x[a-fA-F0-9]+$/, D = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, V = { hex: true, leadingZeros: true, decimalPoint: ".", eNotation: true };
      const M = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
      function _(t2) {
        return "function" == typeof t2 ? t2 : Array.isArray(t2) ? (e2) => {
          for (const n2 of t2) {
            if ("string" == typeof n2 && e2 === n2) return true;
            if (n2 instanceof RegExp && n2.test(e2)) return true;
          }
        } : () => false;
      }
      class k {
        constructor(t2) {
          this.options = t2, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "\xA2" }, pound: { regex: /&(pound|#163);/g, val: "\xA3" }, yen: { regex: /&(yen|#165);/g, val: "\xA5" }, euro: { regex: /&(euro|#8364);/g, val: "\u20AC" }, copyright: { regex: /&(copy|#169);/g, val: "\xA9" }, reg: { regex: /&(reg|#174);/g, val: "\xAE" }, inr: { regex: /&(inr|#8377);/g, val: "\u20B9" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (t3, e2) => String.fromCodePoint(Number.parseInt(e2, 10)) }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (t3, e2) => String.fromCodePoint(Number.parseInt(e2, 16)) } }, this.addExternalEntities = F, this.parseXml = X, this.parseTextData = L, this.resolveNameSpace = B, this.buildAttributesMap = G, this.isItStopNode = Z, this.replaceEntitiesValue = R, this.readStopNodeData = J, this.saveTextToParentTag = q, this.addChild = Y, this.ignoreAttributesFn = _(this.options.ignoreAttributes);
        }
      }
      function F(t2) {
        const e2 = Object.keys(t2);
        for (let n2 = 0; n2 < e2.length; n2++) {
          const i2 = e2[n2];
          this.lastEntities[i2] = { regex: new RegExp("&" + i2 + ";", "g"), val: t2[i2] };
        }
      }
      function L(t2, e2, n2, i2, s2, r2, o2) {
        if (void 0 !== t2 && (this.options.trimValues && !i2 && (t2 = t2.trim()), t2.length > 0)) {
          o2 || (t2 = this.replaceEntitiesValue(t2));
          const i3 = this.options.tagValueProcessor(e2, t2, n2, s2, r2);
          return null == i3 ? t2 : typeof i3 != typeof t2 || i3 !== t2 ? i3 : this.options.trimValues || t2.trim() === t2 ? H(t2, this.options.parseTagValue, this.options.numberParseOptions) : t2;
        }
      }
      function B(t2) {
        if (this.options.removeNSPrefix) {
          const e2 = t2.split(":"), n2 = "/" === t2.charAt(0) ? "/" : "";
          if ("xmlns" === e2[0]) return "";
          2 === e2.length && (t2 = n2 + e2[1]);
        }
        return t2;
      }
      const U = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
      function G(t2, e2, n2) {
        if (true !== this.options.ignoreAttributes && "string" == typeof t2) {
          const n3 = s(t2, U), i2 = n3.length, r2 = {};
          for (let t3 = 0; t3 < i2; t3++) {
            const i3 = this.resolveNameSpace(n3[t3][1]);
            if (this.ignoreAttributesFn(i3, e2)) continue;
            let s2 = n3[t3][4], o2 = this.options.attributeNamePrefix + i3;
            if (i3.length) if (this.options.transformAttributeName && (o2 = this.options.transformAttributeName(o2)), "__proto__" === o2 && (o2 = "#__proto__"), void 0 !== s2) {
              this.options.trimValues && (s2 = s2.trim()), s2 = this.replaceEntitiesValue(s2);
              const t4 = this.options.attributeValueProcessor(i3, s2, e2);
              r2[o2] = null == t4 ? s2 : typeof t4 != typeof s2 || t4 !== s2 ? t4 : H(s2, this.options.parseAttributeValue, this.options.numberParseOptions);
            } else this.options.allowBooleanAttributes && (r2[o2] = true);
          }
          if (!Object.keys(r2).length) return;
          if (this.options.attributesGroupName) {
            const t3 = {};
            return t3[this.options.attributesGroupName] = r2, t3;
          }
          return r2;
        }
      }
      const X = function(t2) {
        t2 = t2.replace(/\r\n?/g, "\n");
        const e2 = new T("!xml");
        let n2 = e2, i2 = "", s2 = "";
        for (let r2 = 0; r2 < t2.length; r2++) if ("<" === t2[r2]) if ("/" === t2[r2 + 1]) {
          const e3 = W(t2, ">", r2, "Closing Tag is not closed.");
          let o2 = t2.substring(r2 + 2, e3).trim();
          if (this.options.removeNSPrefix) {
            const t3 = o2.indexOf(":");
            -1 !== t3 && (o2 = o2.substr(t3 + 1));
          }
          this.options.transformTagName && (o2 = this.options.transformTagName(o2)), n2 && (i2 = this.saveTextToParentTag(i2, n2, s2));
          const a2 = s2.substring(s2.lastIndexOf(".") + 1);
          if (o2 && -1 !== this.options.unpairedTags.indexOf(o2)) throw new Error(`Unpaired tag can not be used as closing tag: </${o2}>`);
          let l2 = 0;
          a2 && -1 !== this.options.unpairedTags.indexOf(a2) ? (l2 = s2.lastIndexOf(".", s2.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : l2 = s2.lastIndexOf("."), s2 = s2.substring(0, l2), n2 = this.tagsNodeStack.pop(), i2 = "", r2 = e3;
        } else if ("?" === t2[r2 + 1]) {
          let e3 = z(t2, r2, false, "?>");
          if (!e3) throw new Error("Pi Tag is not closed.");
          if (i2 = this.saveTextToParentTag(i2, n2, s2), this.options.ignoreDeclaration && "?xml" === e3.tagName || this.options.ignorePiTags) ;
          else {
            const t3 = new T(e3.tagName);
            t3.add(this.options.textNodeName, ""), e3.tagName !== e3.tagExp && e3.attrExpPresent && (t3[":@"] = this.buildAttributesMap(e3.tagExp, s2, e3.tagName)), this.addChild(n2, t3, s2, r2);
          }
          r2 = e3.closeIndex + 1;
        } else if ("!--" === t2.substr(r2 + 1, 3)) {
          const e3 = W(t2, "-->", r2 + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const o2 = t2.substring(r2 + 4, e3 - 2);
            i2 = this.saveTextToParentTag(i2, n2, s2), n2.add(this.options.commentPropName, [{ [this.options.textNodeName]: o2 }]);
          }
          r2 = e3;
        } else if ("!D" === t2.substr(r2 + 1, 2)) {
          const e3 = w(t2, r2);
          this.docTypeEntities = e3.entities, r2 = e3.i;
        } else if ("![" === t2.substr(r2 + 1, 2)) {
          const e3 = W(t2, "]]>", r2, "CDATA is not closed.") - 2, o2 = t2.substring(r2 + 9, e3);
          i2 = this.saveTextToParentTag(i2, n2, s2);
          let a2 = this.parseTextData(o2, n2.tagname, s2, true, false, true, true);
          null == a2 && (a2 = ""), this.options.cdataPropName ? n2.add(this.options.cdataPropName, [{ [this.options.textNodeName]: o2 }]) : n2.add(this.options.textNodeName, a2), r2 = e3 + 2;
        } else {
          let o2 = z(t2, r2, this.options.removeNSPrefix), a2 = o2.tagName;
          const l2 = o2.rawTagName;
          let u2 = o2.tagExp, h2 = o2.attrExpPresent, d2 = o2.closeIndex;
          this.options.transformTagName && (a2 = this.options.transformTagName(a2)), n2 && i2 && "!xml" !== n2.tagname && (i2 = this.saveTextToParentTag(i2, n2, s2, false));
          const f2 = n2;
          f2 && -1 !== this.options.unpairedTags.indexOf(f2.tagname) && (n2 = this.tagsNodeStack.pop(), s2 = s2.substring(0, s2.lastIndexOf("."))), a2 !== e2.tagname && (s2 += s2 ? "." + a2 : a2);
          const c2 = r2;
          if (this.isItStopNode(this.options.stopNodes, s2, a2)) {
            let e3 = "";
            if (u2.length > 0 && u2.lastIndexOf("/") === u2.length - 1) "/" === a2[a2.length - 1] ? (a2 = a2.substr(0, a2.length - 1), s2 = s2.substr(0, s2.length - 1), u2 = a2) : u2 = u2.substr(0, u2.length - 1), r2 = o2.closeIndex;
            else if (-1 !== this.options.unpairedTags.indexOf(a2)) r2 = o2.closeIndex;
            else {
              const n3 = this.readStopNodeData(t2, l2, d2 + 1);
              if (!n3) throw new Error(`Unexpected end of ${l2}`);
              r2 = n3.i, e3 = n3.tagContent;
            }
            const i3 = new T(a2);
            a2 !== u2 && h2 && (i3[":@"] = this.buildAttributesMap(u2, s2, a2)), e3 && (e3 = this.parseTextData(e3, a2, s2, true, h2, true, true)), s2 = s2.substr(0, s2.lastIndexOf(".")), i3.add(this.options.textNodeName, e3), this.addChild(n2, i3, s2, c2);
          } else {
            if (u2.length > 0 && u2.lastIndexOf("/") === u2.length - 1) {
              "/" === a2[a2.length - 1] ? (a2 = a2.substr(0, a2.length - 1), s2 = s2.substr(0, s2.length - 1), u2 = a2) : u2 = u2.substr(0, u2.length - 1), this.options.transformTagName && (a2 = this.options.transformTagName(a2));
              const t3 = new T(a2);
              a2 !== u2 && h2 && (t3[":@"] = this.buildAttributesMap(u2, s2, a2)), this.addChild(n2, t3, s2, c2), s2 = s2.substr(0, s2.lastIndexOf("."));
            } else {
              const t3 = new T(a2);
              this.tagsNodeStack.push(n2), a2 !== u2 && h2 && (t3[":@"] = this.buildAttributesMap(u2, s2, a2)), this.addChild(n2, t3, s2, c2), n2 = t3;
            }
            i2 = "", r2 = d2;
          }
        }
        else i2 += t2[r2];
        return e2.child;
      };
      function Y(t2, e2, n2, i2) {
        this.options.captureMetaData || (i2 = void 0);
        const s2 = this.options.updateTag(e2.tagname, n2, e2[":@"]);
        false === s2 || ("string" == typeof s2 ? (e2.tagname = s2, t2.addChild(e2, i2)) : t2.addChild(e2, i2));
      }
      const R = function(t2) {
        if (this.options.processEntities) {
          for (let e2 in this.docTypeEntities) {
            const n2 = this.docTypeEntities[e2];
            t2 = t2.replace(n2.regx, n2.val);
          }
          for (let e2 in this.lastEntities) {
            const n2 = this.lastEntities[e2];
            t2 = t2.replace(n2.regex, n2.val);
          }
          if (this.options.htmlEntities) for (let e2 in this.htmlEntities) {
            const n2 = this.htmlEntities[e2];
            t2 = t2.replace(n2.regex, n2.val);
          }
          t2 = t2.replace(this.ampEntity.regex, this.ampEntity.val);
        }
        return t2;
      };
      function q(t2, e2, n2, i2) {
        return t2 && (void 0 === i2 && (i2 = 0 === e2.child.length), void 0 !== (t2 = this.parseTextData(t2, e2.tagname, n2, false, !!e2[":@"] && 0 !== Object.keys(e2[":@"]).length, i2)) && "" !== t2 && e2.add(this.options.textNodeName, t2), t2 = ""), t2;
      }
      function Z(t2, e2, n2) {
        const i2 = "*." + n2;
        for (const n3 in t2) {
          const s2 = t2[n3];
          if (i2 === s2 || e2 === s2) return true;
        }
        return false;
      }
      function W(t2, e2, n2, i2) {
        const s2 = t2.indexOf(e2, n2);
        if (-1 === s2) throw new Error(i2);
        return s2 + e2.length - 1;
      }
      function z(t2, e2, n2, i2 = ">") {
        const s2 = (function(t3, e3, n3 = ">") {
          let i3, s3 = "";
          for (let r3 = e3; r3 < t3.length; r3++) {
            let e4 = t3[r3];
            if (i3) e4 === i3 && (i3 = "");
            else if ('"' === e4 || "'" === e4) i3 = e4;
            else if (e4 === n3[0]) {
              if (!n3[1]) return { data: s3, index: r3 };
              if (t3[r3 + 1] === n3[1]) return { data: s3, index: r3 };
            } else "	" === e4 && (e4 = " ");
            s3 += e4;
          }
        })(t2, e2 + 1, i2);
        if (!s2) return;
        let r2 = s2.data;
        const o2 = s2.index, a2 = r2.search(/\s/);
        let l2 = r2, u2 = true;
        -1 !== a2 && (l2 = r2.substring(0, a2), r2 = r2.substring(a2 + 1).trimStart());
        const h2 = l2;
        if (n2) {
          const t3 = l2.indexOf(":");
          -1 !== t3 && (l2 = l2.substr(t3 + 1), u2 = l2 !== s2.data.substr(t3 + 1));
        }
        return { tagName: l2, tagExp: r2, closeIndex: o2, attrExpPresent: u2, rawTagName: h2 };
      }
      function J(t2, e2, n2) {
        const i2 = n2;
        let s2 = 1;
        for (; n2 < t2.length; n2++) if ("<" === t2[n2]) if ("/" === t2[n2 + 1]) {
          const r2 = W(t2, ">", n2, `${e2} is not closed`);
          if (t2.substring(n2 + 2, r2).trim() === e2 && (s2--, 0 === s2)) return { tagContent: t2.substring(i2, n2), i: r2 };
          n2 = r2;
        } else if ("?" === t2[n2 + 1]) n2 = W(t2, "?>", n2 + 1, "StopNode is not closed.");
        else if ("!--" === t2.substr(n2 + 1, 3)) n2 = W(t2, "-->", n2 + 3, "StopNode is not closed.");
        else if ("![" === t2.substr(n2 + 1, 2)) n2 = W(t2, "]]>", n2, "StopNode is not closed.") - 2;
        else {
          const i3 = z(t2, n2, ">");
          i3 && ((i3 && i3.tagName) === e2 && "/" !== i3.tagExp[i3.tagExp.length - 1] && s2++, n2 = i3.closeIndex);
        }
      }
      function H(t2, e2, n2) {
        if (e2 && "string" == typeof t2) {
          const e3 = t2.trim();
          return "true" === e3 || "false" !== e3 && (function(t3, e4 = {}) {
            if (e4 = Object.assign({}, V, e4), !t3 || "string" != typeof t3) return t3;
            let n3 = t3.trim();
            if (void 0 !== e4.skipLike && e4.skipLike.test(n3)) return t3;
            if ("0" === t3) return 0;
            if (e4.hex && j.test(n3)) return (function(t4) {
              if (parseInt) return parseInt(t4, 16);
              if (Number.parseInt) return Number.parseInt(t4, 16);
              if (window && window.parseInt) return window.parseInt(t4, 16);
              throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
            })(n3);
            if (-1 !== n3.search(/.+[eE].+/)) return (function(t4, e5, n4) {
              if (!n4.eNotation) return t4;
              const i3 = e5.match(M);
              if (i3) {
                let s2 = i3[1] || "";
                const r2 = -1 === i3[3].indexOf("e") ? "E" : "e", o2 = i3[2], a2 = s2 ? t4[o2.length + 1] === r2 : t4[o2.length] === r2;
                return o2.length > 1 && a2 ? t4 : 1 !== o2.length || !i3[3].startsWith(`.${r2}`) && i3[3][0] !== r2 ? n4.leadingZeros && !a2 ? (e5 = (i3[1] || "") + i3[3], Number(e5)) : t4 : Number(e5);
              }
              return t4;
            })(t3, n3, e4);
            {
              const s2 = D.exec(n3);
              if (s2) {
                const r2 = s2[1] || "", o2 = s2[2];
                let a2 = (i2 = s2[3]) && -1 !== i2.indexOf(".") ? ("." === (i2 = i2.replace(/0+$/, "")) ? i2 = "0" : "." === i2[0] ? i2 = "0" + i2 : "." === i2[i2.length - 1] && (i2 = i2.substring(0, i2.length - 1)), i2) : i2;
                const l2 = r2 ? "." === t3[o2.length + 1] : "." === t3[o2.length];
                if (!e4.leadingZeros && (o2.length > 1 || 1 === o2.length && !l2)) return t3;
                {
                  const i3 = Number(n3), s3 = String(i3);
                  if (0 === i3 || -0 === i3) return i3;
                  if (-1 !== s3.search(/[eE]/)) return e4.eNotation ? i3 : t3;
                  if (-1 !== n3.indexOf(".")) return "0" === s3 || s3 === a2 || s3 === `${r2}${a2}` ? i3 : t3;
                  let l3 = o2 ? a2 : n3;
                  return o2 ? l3 === s3 || r2 + l3 === s3 ? i3 : t3 : l3 === s3 || l3 === r2 + s3 ? i3 : t3;
                }
              }
              return t3;
            }
            var i2;
          })(t2, n2);
        }
        return void 0 !== t2 ? t2 : "";
      }
      const K = T.getMetaDataSymbol();
      function Q(t2, e2) {
        return tt(t2, e2);
      }
      function tt(t2, e2, n2) {
        let i2;
        const s2 = {};
        for (let r2 = 0; r2 < t2.length; r2++) {
          const o2 = t2[r2], a2 = et(o2);
          let l2 = "";
          if (l2 = void 0 === n2 ? a2 : n2 + "." + a2, a2 === e2.textNodeName) void 0 === i2 ? i2 = o2[a2] : i2 += "" + o2[a2];
          else {
            if (void 0 === a2) continue;
            if (o2[a2]) {
              let t3 = tt(o2[a2], e2, l2);
              const n3 = it(t3, e2);
              void 0 !== o2[K] && (t3[K] = o2[K]), o2[":@"] ? nt(t3, o2[":@"], l2, e2) : 1 !== Object.keys(t3).length || void 0 === t3[e2.textNodeName] || e2.alwaysCreateTextNode ? 0 === Object.keys(t3).length && (e2.alwaysCreateTextNode ? t3[e2.textNodeName] = "" : t3 = "") : t3 = t3[e2.textNodeName], void 0 !== s2[a2] && s2.hasOwnProperty(a2) ? (Array.isArray(s2[a2]) || (s2[a2] = [s2[a2]]), s2[a2].push(t3)) : e2.isArray(a2, l2, n3) ? s2[a2] = [t3] : s2[a2] = t3;
            }
          }
        }
        return "string" == typeof i2 ? i2.length > 0 && (s2[e2.textNodeName] = i2) : void 0 !== i2 && (s2[e2.textNodeName] = i2), s2;
      }
      function et(t2) {
        const e2 = Object.keys(t2);
        for (let t3 = 0; t3 < e2.length; t3++) {
          const n2 = e2[t3];
          if (":@" !== n2) return n2;
        }
      }
      function nt(t2, e2, n2, i2) {
        if (e2) {
          const s2 = Object.keys(e2), r2 = s2.length;
          for (let o2 = 0; o2 < r2; o2++) {
            const r3 = s2[o2];
            i2.isArray(r3, n2 + "." + r3, true, true) ? t2[r3] = [e2[r3]] : t2[r3] = e2[r3];
          }
        }
      }
      function it(t2, e2) {
        const { textNodeName: n2 } = e2, i2 = Object.keys(t2).length;
        return 0 === i2 || !(1 !== i2 || !t2[n2] && "boolean" != typeof t2[n2] && 0 !== t2[n2]);
      }
      class st {
        constructor(t2) {
          this.externalEntities = {}, this.options = (function(t3) {
            return Object.assign({}, v, t3);
          })(t2);
        }
        parse(t2, e2) {
          if ("string" == typeof t2) ;
          else {
            if (!t2.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
            t2 = t2.toString();
          }
          if (e2) {
            true === e2 && (e2 = {});
            const n3 = a(t2, e2);
            if (true !== n3) throw Error(`${n3.err.msg}:${n3.err.line}:${n3.err.col}`);
          }
          const n2 = new k(this.options);
          n2.addExternalEntities(this.externalEntities);
          const i2 = n2.parseXml(t2);
          return this.options.preserveOrder || void 0 === i2 ? i2 : Q(i2, this.options);
        }
        addEntity(t2, e2) {
          if (-1 !== e2.indexOf("&")) throw new Error("Entity value can't have '&'");
          if (-1 !== t2.indexOf("&") || -1 !== t2.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
          if ("&" === e2) throw new Error("An entity with value '&' is not permitted");
          this.externalEntities[t2] = e2;
        }
        static getMetaDataSymbol() {
          return T.getMetaDataSymbol();
        }
      }
      function rt(t2, e2) {
        let n2 = "";
        return e2.format && e2.indentBy.length > 0 && (n2 = "\n"), ot(t2, e2, "", n2);
      }
      function ot(t2, e2, n2, i2) {
        let s2 = "", r2 = false;
        for (let o2 = 0; o2 < t2.length; o2++) {
          const a2 = t2[o2], l2 = at(a2);
          if (void 0 === l2) continue;
          let u2 = "";
          if (u2 = 0 === n2.length ? l2 : `${n2}.${l2}`, l2 === e2.textNodeName) {
            let t3 = a2[l2];
            ut(u2, e2) || (t3 = e2.tagValueProcessor(l2, t3), t3 = ht(t3, e2)), r2 && (s2 += i2), s2 += t3, r2 = false;
            continue;
          }
          if (l2 === e2.cdataPropName) {
            r2 && (s2 += i2), s2 += `<![CDATA[${a2[l2][0][e2.textNodeName]}]]>`, r2 = false;
            continue;
          }
          if (l2 === e2.commentPropName) {
            s2 += i2 + `<!--${a2[l2][0][e2.textNodeName]}-->`, r2 = true;
            continue;
          }
          if ("?" === l2[0]) {
            const t3 = lt(a2[":@"], e2), n3 = "?xml" === l2 ? "" : i2;
            let o3 = a2[l2][0][e2.textNodeName];
            o3 = 0 !== o3.length ? " " + o3 : "", s2 += n3 + `<${l2}${o3}${t3}?>`, r2 = true;
            continue;
          }
          let h2 = i2;
          "" !== h2 && (h2 += e2.indentBy);
          const d2 = i2 + `<${l2}${lt(a2[":@"], e2)}`, f2 = ot(a2[l2], e2, u2, h2);
          -1 !== e2.unpairedTags.indexOf(l2) ? e2.suppressUnpairedNode ? s2 += d2 + ">" : s2 += d2 + "/>" : f2 && 0 !== f2.length || !e2.suppressEmptyNode ? f2 && f2.endsWith(">") ? s2 += d2 + `>${f2}${i2}</${l2}>` : (s2 += d2 + ">", f2 && "" !== i2 && (f2.includes("/>") || f2.includes("</")) ? s2 += i2 + e2.indentBy + f2 + i2 : s2 += f2, s2 += `</${l2}>`) : s2 += d2 + "/>", r2 = true;
        }
        return s2;
      }
      function at(t2) {
        const e2 = Object.keys(t2);
        for (let n2 = 0; n2 < e2.length; n2++) {
          const i2 = e2[n2];
          if (t2.hasOwnProperty(i2) && ":@" !== i2) return i2;
        }
      }
      function lt(t2, e2) {
        let n2 = "";
        if (t2 && !e2.ignoreAttributes) for (let i2 in t2) {
          if (!t2.hasOwnProperty(i2)) continue;
          let s2 = e2.attributeValueProcessor(i2, t2[i2]);
          s2 = ht(s2, e2), true === s2 && e2.suppressBooleanAttributes ? n2 += ` ${i2.substr(e2.attributeNamePrefix.length)}` : n2 += ` ${i2.substr(e2.attributeNamePrefix.length)}="${s2}"`;
        }
        return n2;
      }
      function ut(t2, e2) {
        let n2 = (t2 = t2.substr(0, t2.length - e2.textNodeName.length - 1)).substr(t2.lastIndexOf(".") + 1);
        for (let i2 in e2.stopNodes) if (e2.stopNodes[i2] === t2 || e2.stopNodes[i2] === "*." + n2) return true;
        return false;
      }
      function ht(t2, e2) {
        if (t2 && t2.length > 0 && e2.processEntities) for (let n2 = 0; n2 < e2.entities.length; n2++) {
          const i2 = e2.entities[n2];
          t2 = t2.replace(i2.regex, i2.val);
        }
        return t2;
      }
      const dt = { attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, cdataPropName: false, format: false, indentBy: "  ", suppressEmptyNode: false, suppressUnpairedNode: true, suppressBooleanAttributes: true, tagValueProcessor: function(t2, e2) {
        return e2;
      }, attributeValueProcessor: function(t2, e2) {
        return e2;
      }, preserveOrder: false, commentPropName: false, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: true, stopNodes: [], oneListGroup: false };
      function ft(t2) {
        this.options = Object.assign({}, dt, t2), true === this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
          return false;
        } : (this.ignoreAttributesFn = _(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = gt), this.processTextOrObjNode = ct, this.options.format ? (this.indentate = pt, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
          return "";
        }, this.tagEndChar = ">", this.newLine = "");
      }
      function ct(t2, e2, n2, i2) {
        const s2 = this.j2x(t2, n2 + 1, i2.concat(e2));
        return void 0 !== t2[this.options.textNodeName] && 1 === Object.keys(t2).length ? this.buildTextValNode(t2[this.options.textNodeName], e2, s2.attrStr, n2) : this.buildObjectNode(s2.val, e2, s2.attrStr, n2);
      }
      function pt(t2) {
        return this.options.indentBy.repeat(t2);
      }
      function gt(t2) {
        return !(!t2.startsWith(this.options.attributeNamePrefix) || t2 === this.options.textNodeName) && t2.substr(this.attrPrefixLen);
      }
      ft.prototype.build = function(t2) {
        return this.options.preserveOrder ? rt(t2, this.options) : (Array.isArray(t2) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t2 = { [this.options.arrayNodeName]: t2 }), this.j2x(t2, 0, []).val);
      }, ft.prototype.j2x = function(t2, e2, n2) {
        let i2 = "", s2 = "";
        const r2 = n2.join(".");
        for (let o2 in t2) if (Object.prototype.hasOwnProperty.call(t2, o2)) if (void 0 === t2[o2]) this.isAttribute(o2) && (s2 += "");
        else if (null === t2[o2]) this.isAttribute(o2) || o2 === this.options.cdataPropName ? s2 += "" : "?" === o2[0] ? s2 += this.indentate(e2) + "<" + o2 + "?" + this.tagEndChar : s2 += this.indentate(e2) + "<" + o2 + "/" + this.tagEndChar;
        else if (t2[o2] instanceof Date) s2 += this.buildTextValNode(t2[o2], o2, "", e2);
        else if ("object" != typeof t2[o2]) {
          const n3 = this.isAttribute(o2);
          if (n3 && !this.ignoreAttributesFn(n3, r2)) i2 += this.buildAttrPairStr(n3, "" + t2[o2]);
          else if (!n3) if (o2 === this.options.textNodeName) {
            let e3 = this.options.tagValueProcessor(o2, "" + t2[o2]);
            s2 += this.replaceEntitiesValue(e3);
          } else s2 += this.buildTextValNode(t2[o2], o2, "", e2);
        } else if (Array.isArray(t2[o2])) {
          const i3 = t2[o2].length;
          let r3 = "", a2 = "";
          for (let l2 = 0; l2 < i3; l2++) {
            const i4 = t2[o2][l2];
            if (void 0 === i4) ;
            else if (null === i4) "?" === o2[0] ? s2 += this.indentate(e2) + "<" + o2 + "?" + this.tagEndChar : s2 += this.indentate(e2) + "<" + o2 + "/" + this.tagEndChar;
            else if ("object" == typeof i4) if (this.options.oneListGroup) {
              const t3 = this.j2x(i4, e2 + 1, n2.concat(o2));
              r3 += t3.val, this.options.attributesGroupName && i4.hasOwnProperty(this.options.attributesGroupName) && (a2 += t3.attrStr);
            } else r3 += this.processTextOrObjNode(i4, o2, e2, n2);
            else if (this.options.oneListGroup) {
              let t3 = this.options.tagValueProcessor(o2, i4);
              t3 = this.replaceEntitiesValue(t3), r3 += t3;
            } else r3 += this.buildTextValNode(i4, o2, "", e2);
          }
          this.options.oneListGroup && (r3 = this.buildObjectNode(r3, o2, a2, e2)), s2 += r3;
        } else if (this.options.attributesGroupName && o2 === this.options.attributesGroupName) {
          const e3 = Object.keys(t2[o2]), n3 = e3.length;
          for (let s3 = 0; s3 < n3; s3++) i2 += this.buildAttrPairStr(e3[s3], "" + t2[o2][e3[s3]]);
        } else s2 += this.processTextOrObjNode(t2[o2], o2, e2, n2);
        return { attrStr: i2, val: s2 };
      }, ft.prototype.buildAttrPairStr = function(t2, e2) {
        return e2 = this.options.attributeValueProcessor(t2, "" + e2), e2 = this.replaceEntitiesValue(e2), this.options.suppressBooleanAttributes && "true" === e2 ? " " + t2 : " " + t2 + '="' + e2 + '"';
      }, ft.prototype.buildObjectNode = function(t2, e2, n2, i2) {
        if ("" === t2) return "?" === e2[0] ? this.indentate(i2) + "<" + e2 + n2 + "?" + this.tagEndChar : this.indentate(i2) + "<" + e2 + n2 + this.closeTag(e2) + this.tagEndChar;
        {
          let s2 = "</" + e2 + this.tagEndChar, r2 = "";
          return "?" === e2[0] && (r2 = "?", s2 = ""), !n2 && "" !== n2 || -1 !== t2.indexOf("<") ? false !== this.options.commentPropName && e2 === this.options.commentPropName && 0 === r2.length ? this.indentate(i2) + `<!--${t2}-->` + this.newLine : this.indentate(i2) + "<" + e2 + n2 + r2 + this.tagEndChar + t2 + this.indentate(i2) + s2 : this.indentate(i2) + "<" + e2 + n2 + r2 + ">" + t2 + s2;
        }
      }, ft.prototype.closeTag = function(t2) {
        let e2 = "";
        return -1 !== this.options.unpairedTags.indexOf(t2) ? this.options.suppressUnpairedNode || (e2 = "/") : e2 = this.options.suppressEmptyNode ? "/" : `></${t2}`, e2;
      }, ft.prototype.buildTextValNode = function(t2, e2, n2, i2) {
        if (false !== this.options.cdataPropName && e2 === this.options.cdataPropName) return this.indentate(i2) + `<![CDATA[${t2}]]>` + this.newLine;
        if (false !== this.options.commentPropName && e2 === this.options.commentPropName) return this.indentate(i2) + `<!--${t2}-->` + this.newLine;
        if ("?" === e2[0]) return this.indentate(i2) + "<" + e2 + n2 + "?" + this.tagEndChar;
        {
          let s2 = this.options.tagValueProcessor(e2, t2);
          return s2 = this.replaceEntitiesValue(s2), "" === s2 ? this.indentate(i2) + "<" + e2 + n2 + this.closeTag(e2) + this.tagEndChar : this.indentate(i2) + "<" + e2 + n2 + ">" + s2 + "</" + e2 + this.tagEndChar;
        }
      }, ft.prototype.replaceEntitiesValue = function(t2) {
        if (t2 && t2.length > 0 && this.options.processEntities) for (let e2 = 0; e2 < this.options.entities.length; e2++) {
          const n2 = this.options.entities[e2];
          t2 = t2.replace(n2.regex, n2.val);
        }
        return t2;
      };
      const mt = { validate: a };
      module.exports = e;
    })();
  }
});

// ../node_modules/.pnpm/@aws-sdk+xml-builder@3.921.0/node_modules/@aws-sdk/xml-builder/dist-cjs/xml-parser.js
var require_xml_parser = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+xml-builder@3.921.0/node_modules/@aws-sdk/xml-builder/dist-cjs/xml-parser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseXML = parseXML3;
    var fast_xml_parser_1 = require_fxp();
    var parser = new fast_xml_parser_1.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: (_, val) => val.trim() === "" && val.includes("\n") ? "" : void 0
    });
    parser.addEntity("#xD", "\r");
    parser.addEntity("#10", "\n");
    function parseXML3(xmlString) {
      return parser.parse(xmlString, true);
    }
  }
});

// ../node_modules/.pnpm/@aws-sdk+xml-builder@3.921.0/node_modules/@aws-sdk/xml-builder/dist-cjs/index.js
var require_dist_cjs23 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+xml-builder@3.921.0/node_modules/@aws-sdk/xml-builder/dist-cjs/index.js"(exports) {
    "use strict";
    var xmlParser = require_xml_parser();
    function escapeAttribute(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function escapeElement(value) {
      return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;");
    }
    var XmlText2 = class {
      value;
      constructor(value) {
        this.value = value;
      }
      toString() {
        return escapeElement("" + this.value);
      }
    };
    var XmlNode2 = class _XmlNode {
      name;
      children;
      attributes = {};
      static of(name, childText, withName) {
        const node = new _XmlNode(name);
        if (childText !== void 0) {
          node.addChildNode(new XmlText2(childText));
        }
        if (withName !== void 0) {
          node.withName(withName);
        }
        return node;
      }
      constructor(name, children = []) {
        this.name = name;
        this.children = children;
      }
      withName(name) {
        this.name = name;
        return this;
      }
      addAttribute(name, value) {
        this.attributes[name] = value;
        return this;
      }
      addChildNode(child) {
        this.children.push(child);
        return this;
      }
      removeAttribute(name) {
        delete this.attributes[name];
        return this;
      }
      n(name) {
        this.name = name;
        return this;
      }
      c(child) {
        this.children.push(child);
        return this;
      }
      a(name, value) {
        if (value != null) {
          this.attributes[name] = value;
        }
        return this;
      }
      cc(input, field, withName = field) {
        if (input[field] != null) {
          const node = _XmlNode.of(field, input[field]).withName(withName);
          this.c(node);
        }
      }
      l(input, listName, memberName, valueProvider) {
        if (input[listName] != null) {
          const nodes = valueProvider();
          nodes.map((node) => {
            node.withName(memberName);
            this.c(node);
          });
        }
      }
      lc(input, listName, memberName, valueProvider) {
        if (input[listName] != null) {
          const nodes = valueProvider();
          const containerNode = new _XmlNode(memberName);
          nodes.map((node) => {
            containerNode.c(node);
          });
          this.c(containerNode);
        }
      }
      toString() {
        const hasChildren = Boolean(this.children.length);
        let xmlText = `<${this.name}`;
        const attributes = this.attributes;
        for (const attributeName of Object.keys(attributes)) {
          const attribute = attributes[attributeName];
          if (attribute != null) {
            xmlText += ` ${attributeName}="${escapeAttribute("" + attribute)}"`;
          }
        }
        return xmlText += !hasChildren ? "/>" : `>${this.children.map((c) => c.toString()).join("")}</${this.name}>`;
      }
    };
    Object.defineProperty(exports, "parseXML", {
      enumerable: true,
      get: function() {
        return xmlParser.parseXML;
      }
    });
    exports.XmlNode = XmlNode2;
    exports.XmlText = XmlText2;
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js
var import_xml_builder, import_smithy_client3, import_util_utf84, XmlShapeDeserializer;
var init_XmlShapeDeserializer = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js"() {
    import_xml_builder = __toESM(require_dist_cjs23());
    init_protocols();
    init_schema();
    import_smithy_client3 = __toESM(require_dist_cjs13());
    import_util_utf84 = __toESM(require_dist_cjs6());
    init_ConfigurableSerdeContext();
    XmlShapeDeserializer = class extends SerdeContextConfig {
      settings;
      stringDeserializer;
      constructor(settings) {
        super();
        this.settings = settings;
        this.stringDeserializer = new FromStringShapeDeserializer(settings);
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.stringDeserializer.setSerdeContext(serdeContext);
      }
      read(schema, bytes, key) {
        const ns = NormalizedSchema.of(schema);
        const memberSchemas = ns.getMemberSchemas();
        const isEventPayload = ns.isStructSchema() && ns.isMemberSchema() && !!Object.values(memberSchemas).find((memberNs) => {
          return !!memberNs.getMemberTraits().eventPayload;
        });
        if (isEventPayload) {
          const output = {};
          const memberName = Object.keys(memberSchemas)[0];
          const eventMemberSchema = memberSchemas[memberName];
          if (eventMemberSchema.isBlobSchema()) {
            output[memberName] = bytes;
          } else {
            output[memberName] = this.read(memberSchemas[memberName], bytes);
          }
          return output;
        }
        const xmlString = (this.serdeContext?.utf8Encoder ?? import_util_utf84.toUtf8)(bytes);
        const parsedObject = this.parseXml(xmlString);
        return this.readSchema(schema, key ? parsedObject[key] : parsedObject);
      }
      readSchema(_schema, value) {
        const ns = NormalizedSchema.of(_schema);
        if (ns.isUnitSchema()) {
          return;
        }
        const traits = ns.getMergedTraits();
        if (ns.isListSchema() && !Array.isArray(value)) {
          return this.readSchema(ns, [value]);
        }
        if (value == null) {
          return value;
        }
        if (typeof value === "object") {
          const sparse = !!traits.sparse;
          const flat = !!traits.xmlFlattened;
          if (ns.isListSchema()) {
            const listValue = ns.getValueSchema();
            const buffer2 = [];
            const sourceKey = listValue.getMergedTraits().xmlName ?? "member";
            const source = flat ? value : (value[0] ?? value)[sourceKey];
            const sourceArray = Array.isArray(source) ? source : [source];
            for (const v of sourceArray) {
              if (v != null || sparse) {
                buffer2.push(this.readSchema(listValue, v));
              }
            }
            return buffer2;
          }
          const buffer = {};
          if (ns.isMapSchema()) {
            const keyNs = ns.getKeySchema();
            const memberNs = ns.getValueSchema();
            let entries;
            if (flat) {
              entries = Array.isArray(value) ? value : [value];
            } else {
              entries = Array.isArray(value.entry) ? value.entry : [value.entry];
            }
            const keyProperty = keyNs.getMergedTraits().xmlName ?? "key";
            const valueProperty = memberNs.getMergedTraits().xmlName ?? "value";
            for (const entry of entries) {
              const key = entry[keyProperty];
              const value2 = entry[valueProperty];
              if (value2 != null || sparse) {
                buffer[key] = this.readSchema(memberNs, value2);
              }
            }
            return buffer;
          }
          if (ns.isStructSchema()) {
            for (const [memberName, memberSchema] of ns.structIterator()) {
              const memberTraits = memberSchema.getMergedTraits();
              const xmlObjectKey = !memberTraits.httpPayload ? memberSchema.getMemberTraits().xmlName ?? memberName : memberTraits.xmlName ?? memberSchema.getName();
              if (value[xmlObjectKey] != null) {
                buffer[memberName] = this.readSchema(memberSchema, value[xmlObjectKey]);
              }
            }
            return buffer;
          }
          if (ns.isDocumentSchema()) {
            return value;
          }
          throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${ns.getName(true)}`);
        }
        if (ns.isListSchema()) {
          return [];
        }
        if (ns.isMapSchema() || ns.isStructSchema()) {
          return {};
        }
        return this.stringDeserializer.read(ns, value);
      }
      parseXml(xml) {
        if (xml.length) {
          let parsedObj;
          try {
            parsedObj = (0, import_xml_builder.parseXML)(xml);
          } catch (e) {
            if (e && typeof e === "object") {
              Object.defineProperty(e, "$responseBodyText", {
                value: xml
              });
            }
            throw e;
          }
          const textNodeName = "#text";
          const key = Object.keys(parsedObj)[0];
          const parsedObjToReturn = parsedObj[key];
          if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
          }
          return (0, import_smithy_client3.getValueFromTextNode)(parsedObjToReturn);
        }
        return {};
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QueryShapeSerializer.js
var import_smithy_client4, import_util_base644, QueryShapeSerializer;
var init_QueryShapeSerializer = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QueryShapeSerializer.js"() {
    init_protocols();
    init_schema();
    init_serde();
    import_smithy_client4 = __toESM(require_dist_cjs13());
    import_util_base644 = __toESM(require_dist_cjs7());
    init_ConfigurableSerdeContext();
    QueryShapeSerializer = class extends SerdeContextConfig {
      settings;
      buffer;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value, prefix = "") {
        if (this.buffer === void 0) {
          this.buffer = "";
        }
        const ns = NormalizedSchema.of(schema);
        if (prefix && !prefix.endsWith(".")) {
          prefix += ".";
        }
        if (ns.isBlobSchema()) {
          if (typeof value === "string" || value instanceof Uint8Array) {
            this.writeKey(prefix);
            this.writeValue((this.serdeContext?.base64Encoder ?? import_util_base644.toBase64)(value));
          }
        } else if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isStringSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(String(value));
          } else if (ns.isIdempotencyToken()) {
            this.writeKey(prefix);
            this.writeValue((0, import_uuid.v4)());
          }
        } else if (ns.isBigIntegerSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(String(value));
          }
        } else if (ns.isBigDecimalSchema()) {
          if (value != null) {
            this.writeKey(prefix);
            this.writeValue(value instanceof NumericValue ? value.string : String(value));
          }
        } else if (ns.isTimestampSchema()) {
          if (value instanceof Date) {
            this.writeKey(prefix);
            const format = determineTimestampFormat(ns, this.settings);
            switch (format) {
              case 5:
                this.writeValue(value.toISOString().replace(".000Z", "Z"));
                break;
              case 6:
                this.writeValue((0, import_smithy_client4.dateToUtcString)(value));
                break;
              case 7:
                this.writeValue(String(value.getTime() / 1e3));
                break;
            }
          }
        } else if (ns.isDocumentSchema()) {
          throw new Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${ns.getName(true)}`);
        } else if (ns.isListSchema()) {
          if (Array.isArray(value)) {
            if (value.length === 0) {
              if (this.settings.serializeEmptyLists) {
                this.writeKey(prefix);
                this.writeValue("");
              }
            } else {
              const member = ns.getValueSchema();
              const flat = this.settings.flattenLists || ns.getMergedTraits().xmlFlattened;
              let i = 1;
              for (const item of value) {
                if (item == null) {
                  continue;
                }
                const suffix = this.getKey("member", member.getMergedTraits().xmlName);
                const key = flat ? `${prefix}${i}` : `${prefix}${suffix}.${i}`;
                this.write(member, item, key);
                ++i;
              }
            }
          }
        } else if (ns.isMapSchema()) {
          if (value && typeof value === "object") {
            const keySchema = ns.getKeySchema();
            const memberSchema = ns.getValueSchema();
            const flat = ns.getMergedTraits().xmlFlattened;
            let i = 1;
            for (const [k, v] of Object.entries(value)) {
              if (v == null) {
                continue;
              }
              const keySuffix = this.getKey("key", keySchema.getMergedTraits().xmlName);
              const key = flat ? `${prefix}${i}.${keySuffix}` : `${prefix}entry.${i}.${keySuffix}`;
              const valueSuffix = this.getKey("value", memberSchema.getMergedTraits().xmlName);
              const valueKey = flat ? `${prefix}${i}.${valueSuffix}` : `${prefix}entry.${i}.${valueSuffix}`;
              this.write(keySchema, k, key);
              this.write(memberSchema, v, valueKey);
              ++i;
            }
          }
        } else if (ns.isStructSchema()) {
          if (value && typeof value === "object") {
            for (const [memberName, member] of ns.structIterator()) {
              if (value[memberName] == null && !member.isIdempotencyToken()) {
                continue;
              }
              const suffix = this.getKey(memberName, member.getMergedTraits().xmlName);
              const key = `${prefix}${suffix}`;
              this.write(member, value[memberName], key);
            }
          }
        } else if (ns.isUnitSchema()) {
        } else {
          throw new Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${ns.getName(true)}`);
        }
      }
      flush() {
        if (this.buffer === void 0) {
          throw new Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
        }
        const str = this.buffer;
        delete this.buffer;
        return str;
      }
      getKey(memberName, xmlName) {
        const key = xmlName ?? memberName;
        if (this.settings.capitalizeKeys) {
          return key[0].toUpperCase() + key.slice(1);
        }
        return key;
      }
      writeKey(key) {
        if (key.endsWith(".")) {
          key = key.slice(0, key.length - 1);
        }
        this.buffer += `&${extendedEncodeURIComponent(key)}=`;
      }
      writeValue(value) {
        this.buffer += extendedEncodeURIComponent(value);
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsQueryProtocol.js
var AwsQueryProtocol;
var init_AwsQueryProtocol = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsQueryProtocol.js"() {
    init_protocols();
    init_schema();
    init_ProtocolLib();
    init_XmlShapeDeserializer();
    init_QueryShapeSerializer();
    AwsQueryProtocol = class extends RpcProtocol {
      options;
      serializer;
      deserializer;
      mixin = new ProtocolLib();
      constructor(options) {
        super({
          defaultNamespace: options.defaultNamespace
        });
        this.options = options;
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: 5
          },
          httpBindings: false,
          xmlNamespace: options.xmlNamespace,
          serviceNamespace: options.defaultNamespace,
          serializeEmptyLists: true
        };
        this.serializer = new QueryShapeSerializer(settings);
        this.deserializer = new XmlShapeDeserializer(settings);
      }
      getShapeId() {
        return "aws.protocols#awsQuery";
      }
      setSerdeContext(serdeContext) {
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
      }
      getPayloadCodec() {
        throw new Error("AWSQuery protocol has no payload codec.");
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (!request.path.endsWith("/")) {
          request.path += "/";
        }
        Object.assign(request.headers, {
          "content-type": `application/x-www-form-urlencoded`
        });
        if (deref(operationSchema.input) === "unit" || !request.body) {
          request.body = "";
        }
        const action = operationSchema.name.split("#")[1] ?? operationSchema.name;
        request.body = `Action=${action}&Version=${this.options.version}` + request.body;
        if (request.body.endsWith("&")) {
          request.body = request.body.slice(-1);
        }
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes2 = await collectBody(response.body, context);
          if (bytes2.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(15, bytes2));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const shortName = operationSchema.name.split("#")[1] ?? operationSchema.name;
        const awsQueryResultKey = ns.isStructSchema() && this.useNestedResult() ? shortName + "Result" : void 0;
        const bytes = await collectBody(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(ns, bytes, awsQueryResultKey));
        }
        const output = {
          $metadata: this.deserializeMetadata(response),
          ...dataObject
        };
        return output;
      }
      useNestedResult() {
        return true;
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = this.loadQueryErrorCode(response, dataObject) ?? "Unknown";
        const errorData = this.loadQueryError(dataObject);
        const message = this.loadQueryErrorMessage(dataObject);
        errorData.message = message;
        errorData.Error = {
          Type: errorData.Type,
          Code: errorData.Code,
          Message: message
        };
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, errorData, metadata, (registry, errorName) => registry.find((schema) => NormalizedSchema.of(schema).getMergedTraits().awsQueryError?.[0] === errorName));
        const ns = NormalizedSchema.of(errorSchema);
        const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {
          Error: errorData.Error
        };
        for (const [name, member] of ns.structIterator()) {
          const target = member.getMergedTraits().xmlName ?? name;
          const value = errorData[target] ?? dataObject[target];
          output[name] = this.deserializer.readSchema(member, value);
        }
        throw Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output);
      }
      loadQueryErrorCode(output, data2) {
        const code = (data2.Errors?.[0]?.Error ?? data2.Errors?.Error ?? data2.Error)?.Code;
        if (code !== void 0) {
          return code;
        }
        if (output.statusCode == 404) {
          return "NotFound";
        }
      }
      loadQueryError(data2) {
        return data2.Errors?.[0]?.Error ?? data2.Errors?.Error ?? data2.Error;
      }
      loadQueryErrorMessage(data2) {
        const errorData = this.loadQueryError(data2);
        return errorData?.message ?? errorData?.Message ?? data2.message ?? data2.Message ?? "Unknown";
      }
      getDefaultContentType() {
        return "application/x-www-form-urlencoded";
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsEc2QueryProtocol.js
var AwsEc2QueryProtocol;
var init_AwsEc2QueryProtocol = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsEc2QueryProtocol.js"() {
    init_AwsQueryProtocol();
    AwsEc2QueryProtocol = class extends AwsQueryProtocol {
      options;
      constructor(options) {
        super(options);
        this.options = options;
        const ec2Settings = {
          capitalizeKeys: true,
          flattenLists: true,
          serializeEmptyLists: false
        };
        Object.assign(this.serializer.settings, ec2Settings);
      }
      useNestedResult() {
        return false;
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var import_xml_builder2, import_smithy_client5, parseXmlBody, parseXmlErrorBody, loadRestXmlErrorCode;
var init_parseXmlBody = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js"() {
    import_xml_builder2 = __toESM(require_dist_cjs23());
    import_smithy_client5 = __toESM(require_dist_cjs13());
    init_common();
    parseXmlBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        let parsedObj;
        try {
          parsedObj = (0, import_xml_builder2.parseXML)(encoded);
        } catch (e) {
          if (e && typeof e === "object") {
            Object.defineProperty(e, "$responseBodyText", {
              value: encoded
            });
          }
          throw e;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return (0, import_smithy_client5.getValueFromTextNode)(parsedObjToReturn);
      }
      return {};
    });
    parseXmlErrorBody = async (errorBody, context) => {
      const value = await parseXmlBody(errorBody, context);
      if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
      }
      return value;
    };
    loadRestXmlErrorCode = (output, data2) => {
      if (data2?.Error?.Code !== void 0) {
        return data2.Error.Code;
      }
      if (data2?.Code !== void 0) {
        return data2.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeSerializer.js
var import_xml_builder3, import_smithy_client6, import_util_base645, XmlShapeSerializer;
var init_XmlShapeSerializer = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeSerializer.js"() {
    import_xml_builder3 = __toESM(require_dist_cjs23());
    init_protocols();
    init_schema();
    init_serde();
    import_smithy_client6 = __toESM(require_dist_cjs13());
    import_util_base645 = __toESM(require_dist_cjs7());
    init_ConfigurableSerdeContext();
    XmlShapeSerializer = class extends SerdeContextConfig {
      settings;
      stringBuffer;
      byteBuffer;
      buffer;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        if (ns.isStringSchema() && typeof value === "string") {
          this.stringBuffer = value;
        } else if (ns.isBlobSchema()) {
          this.byteBuffer = "byteLength" in value ? value : (this.serdeContext?.base64Decoder ?? import_util_base645.fromBase64)(value);
        } else {
          this.buffer = this.writeStruct(ns, value, void 0);
          const traits = ns.getMergedTraits();
          if (traits.httpPayload && !traits.xmlName) {
            this.buffer.withName(ns.getName());
          }
        }
      }
      flush() {
        if (this.byteBuffer !== void 0) {
          const bytes = this.byteBuffer;
          delete this.byteBuffer;
          return bytes;
        }
        if (this.stringBuffer !== void 0) {
          const str = this.stringBuffer;
          delete this.stringBuffer;
          return str;
        }
        const buffer = this.buffer;
        if (this.settings.xmlNamespace) {
          if (!buffer?.attributes?.["xmlns"]) {
            buffer.addAttribute("xmlns", this.settings.xmlNamespace);
          }
        }
        delete this.buffer;
        return buffer.toString();
      }
      writeStruct(ns, value, parentXmlns) {
        const traits = ns.getMergedTraits();
        const name = ns.isMemberSchema() && !traits.httpPayload ? ns.getMemberTraits().xmlName ?? ns.getMemberName() : traits.xmlName ?? ns.getName();
        if (!name || !ns.isStructSchema()) {
          throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${ns.getName(true)}.`);
        }
        const structXmlNode = import_xml_builder3.XmlNode.of(name);
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
        for (const [memberName, memberSchema] of ns.structIterator()) {
          const val = value[memberName];
          if (val != null || memberSchema.isIdempotencyToken()) {
            if (memberSchema.getMergedTraits().xmlAttribute) {
              structXmlNode.addAttribute(memberSchema.getMergedTraits().xmlName ?? memberName, this.writeSimple(memberSchema, val));
              continue;
            }
            if (memberSchema.isListSchema()) {
              this.writeList(memberSchema, val, structXmlNode, xmlns);
            } else if (memberSchema.isMapSchema()) {
              this.writeMap(memberSchema, val, structXmlNode, xmlns);
            } else if (memberSchema.isStructSchema()) {
              structXmlNode.addChildNode(this.writeStruct(memberSchema, val, xmlns));
            } else {
              const memberNode = import_xml_builder3.XmlNode.of(memberSchema.getMergedTraits().xmlName ?? memberSchema.getMemberName());
              this.writeSimpleInto(memberSchema, val, memberNode, xmlns);
              structXmlNode.addChildNode(memberNode);
            }
          }
        }
        if (xmlns) {
          structXmlNode.addAttribute(xmlnsAttr, xmlns);
        }
        return structXmlNode;
      }
      writeList(listMember, array, container, parentXmlns) {
        if (!listMember.isMemberSchema()) {
          throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${listMember.getName(true)}`);
        }
        const listTraits = listMember.getMergedTraits();
        const listValueSchema = listMember.getValueSchema();
        const listValueTraits = listValueSchema.getMergedTraits();
        const sparse = !!listValueTraits.sparse;
        const flat = !!listTraits.xmlFlattened;
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(listMember, parentXmlns);
        const writeItem = (container2, value) => {
          if (listValueSchema.isListSchema()) {
            this.writeList(listValueSchema, Array.isArray(value) ? value : [value], container2, xmlns);
          } else if (listValueSchema.isMapSchema()) {
            this.writeMap(listValueSchema, value, container2, xmlns);
          } else if (listValueSchema.isStructSchema()) {
            const struct = this.writeStruct(listValueSchema, value, xmlns);
            container2.addChildNode(struct.withName(flat ? listTraits.xmlName ?? listMember.getMemberName() : listValueTraits.xmlName ?? "member"));
          } else {
            const listItemNode = import_xml_builder3.XmlNode.of(flat ? listTraits.xmlName ?? listMember.getMemberName() : listValueTraits.xmlName ?? "member");
            this.writeSimpleInto(listValueSchema, value, listItemNode, xmlns);
            container2.addChildNode(listItemNode);
          }
        };
        if (flat) {
          for (const value of array) {
            if (sparse || value != null) {
              writeItem(container, value);
            }
          }
        } else {
          const listNode = import_xml_builder3.XmlNode.of(listTraits.xmlName ?? listMember.getMemberName());
          if (xmlns) {
            listNode.addAttribute(xmlnsAttr, xmlns);
          }
          for (const value of array) {
            if (sparse || value != null) {
              writeItem(listNode, value);
            }
          }
          container.addChildNode(listNode);
        }
      }
      writeMap(mapMember, map, container, parentXmlns, containerIsMap = false) {
        if (!mapMember.isMemberSchema()) {
          throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${mapMember.getName(true)}`);
        }
        const mapTraits = mapMember.getMergedTraits();
        const mapKeySchema = mapMember.getKeySchema();
        const mapKeyTraits = mapKeySchema.getMergedTraits();
        const keyTag = mapKeyTraits.xmlName ?? "key";
        const mapValueSchema = mapMember.getValueSchema();
        const mapValueTraits = mapValueSchema.getMergedTraits();
        const valueTag = mapValueTraits.xmlName ?? "value";
        const sparse = !!mapValueTraits.sparse;
        const flat = !!mapTraits.xmlFlattened;
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(mapMember, parentXmlns);
        const addKeyValue = (entry, key, val) => {
          const keyNode = import_xml_builder3.XmlNode.of(keyTag, key);
          const [keyXmlnsAttr, keyXmlns] = this.getXmlnsAttribute(mapKeySchema, xmlns);
          if (keyXmlns) {
            keyNode.addAttribute(keyXmlnsAttr, keyXmlns);
          }
          entry.addChildNode(keyNode);
          let valueNode = import_xml_builder3.XmlNode.of(valueTag);
          if (mapValueSchema.isListSchema()) {
            this.writeList(mapValueSchema, val, valueNode, xmlns);
          } else if (mapValueSchema.isMapSchema()) {
            this.writeMap(mapValueSchema, val, valueNode, xmlns, true);
          } else if (mapValueSchema.isStructSchema()) {
            valueNode = this.writeStruct(mapValueSchema, val, xmlns);
          } else {
            this.writeSimpleInto(mapValueSchema, val, valueNode, xmlns);
          }
          entry.addChildNode(valueNode);
        };
        if (flat) {
          for (const [key, val] of Object.entries(map)) {
            if (sparse || val != null) {
              const entry = import_xml_builder3.XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
              addKeyValue(entry, key, val);
              container.addChildNode(entry);
            }
          }
        } else {
          let mapNode;
          if (!containerIsMap) {
            mapNode = import_xml_builder3.XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
            if (xmlns) {
              mapNode.addAttribute(xmlnsAttr, xmlns);
            }
            container.addChildNode(mapNode);
          }
          for (const [key, val] of Object.entries(map)) {
            if (sparse || val != null) {
              const entry = import_xml_builder3.XmlNode.of("entry");
              addKeyValue(entry, key, val);
              (containerIsMap ? container : mapNode).addChildNode(entry);
            }
          }
        }
      }
      writeSimple(_schema, value) {
        if (null === value) {
          throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
        }
        const ns = NormalizedSchema.of(_schema);
        let nodeContents = null;
        if (value && typeof value === "object") {
          if (ns.isBlobSchema()) {
            nodeContents = (this.serdeContext?.base64Encoder ?? import_util_base645.toBase64)(value);
          } else if (ns.isTimestampSchema() && value instanceof Date) {
            const format = determineTimestampFormat(ns, this.settings);
            switch (format) {
              case 5:
                nodeContents = value.toISOString().replace(".000Z", "Z");
                break;
              case 6:
                nodeContents = (0, import_smithy_client6.dateToUtcString)(value);
                break;
              case 7:
                nodeContents = String(value.getTime() / 1e3);
                break;
              default:
                console.warn("Missing timestamp format, using http date", value);
                nodeContents = (0, import_smithy_client6.dateToUtcString)(value);
                break;
            }
          } else if (ns.isBigDecimalSchema() && value) {
            if (value instanceof NumericValue) {
              return value.string;
            }
            return String(value);
          } else if (ns.isMapSchema() || ns.isListSchema()) {
            throw new Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
          } else {
            throw new Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${ns.getName(true)}`);
          }
        }
        if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isBigIntegerSchema() || ns.isBigDecimalSchema()) {
          nodeContents = String(value);
        }
        if (ns.isStringSchema()) {
          if (value === void 0 && ns.isIdempotencyToken()) {
            nodeContents = (0, import_uuid.v4)();
          } else {
            nodeContents = String(value);
          }
        }
        if (nodeContents === null) {
          throw new Error(`Unhandled schema-value pair ${ns.getName(true)}=${value}`);
        }
        return nodeContents;
      }
      writeSimpleInto(_schema, value, into, parentXmlns) {
        const nodeContents = this.writeSimple(_schema, value);
        const ns = NormalizedSchema.of(_schema);
        const content = new import_xml_builder3.XmlText(nodeContents);
        const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
        if (xmlns) {
          into.addAttribute(xmlnsAttr, xmlns);
        }
        into.addChildNode(content);
      }
      getXmlnsAttribute(ns, parentXmlns) {
        const traits = ns.getMergedTraits();
        const [prefix, xmlns] = traits.xmlNamespace ?? [];
        if (xmlns && xmlns !== parentXmlns) {
          return [prefix ? `xmlns:${prefix}` : "xmlns", xmlns];
        }
        return [void 0, void 0];
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlCodec.js
var XmlCodec;
var init_XmlCodec = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlCodec.js"() {
    init_ConfigurableSerdeContext();
    init_XmlShapeDeserializer();
    init_XmlShapeSerializer();
    XmlCodec = class extends SerdeContextConfig {
      settings;
      constructor(settings) {
        super();
        this.settings = settings;
      }
      createSerializer() {
        const serializer = new XmlShapeSerializer(this.settings);
        serializer.setSerdeContext(this.serdeContext);
        return serializer;
      }
      createDeserializer() {
        const deserializer = new XmlShapeDeserializer(this.settings);
        deserializer.setSerdeContext(this.serdeContext);
        return deserializer;
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/AwsRestXmlProtocol.js
var AwsRestXmlProtocol;
var init_AwsRestXmlProtocol = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/AwsRestXmlProtocol.js"() {
    init_protocols();
    init_schema();
    init_ProtocolLib();
    init_parseXmlBody();
    init_XmlCodec();
    AwsRestXmlProtocol = class extends HttpBindingProtocol {
      codec;
      serializer;
      deserializer;
      mixin = new ProtocolLib();
      constructor(options) {
        super(options);
        const settings = {
          timestampFormat: {
            useTrait: true,
            default: 5
          },
          httpBindings: true,
          xmlNamespace: options.xmlNamespace,
          serviceNamespace: options.defaultNamespace
        };
        this.codec = new XmlCodec(settings);
        this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
        this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
      }
      getPayloadCodec() {
        return this.codec;
      }
      getShapeId() {
        return "aws.protocols#restXml";
      }
      async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        const inputSchema = NormalizedSchema.of(operationSchema.input);
        if (!request.headers["content-type"]) {
          const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
          if (contentType) {
            request.headers["content-type"] = contentType;
          }
        }
        if (request.headers["content-type"] === this.getDefaultContentType()) {
          if (typeof request.body === "string") {
            request.body = '<?xml version="1.0" encoding="UTF-8"?>' + request.body;
          }
        }
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        return super.deserializeResponse(operationSchema, context, response);
      }
      async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = loadRestXmlErrorCode(response, dataObject) ?? "Unknown";
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
        const ns = NormalizedSchema.of(errorSchema);
        const message = dataObject.Error?.message ?? dataObject.Error?.Message ?? dataObject.message ?? dataObject.Message ?? "Unknown";
        const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
        const output = {};
        for (const [name, member] of ns.structIterator()) {
          const target = member.getMergedTraits().xmlName ?? name;
          const value = dataObject.Error?.[target] ?? dataObject[target];
          output[name] = this.codec.createDeserializer().readSchema(member, value);
        }
        throw Object.assign(exception, errorMetadata, {
          $fault: ns.getMergedTraits().error,
          message
        }, output);
      }
      getDefaultContentType() {
        return "application/xml";
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js
var init_protocols2 = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js"() {
    init_AwsSmithyRpcV2CborProtocol();
    init_coercing_serializers();
    init_AwsJson1_0Protocol();
    init_AwsJson1_1Protocol();
    init_AwsJsonRpcProtocol();
    init_AwsRestJsonProtocol();
    init_JsonCodec();
    init_JsonShapeDeserializer();
    init_JsonShapeSerializer();
    init_awsExpectUnion();
    init_parseJsonBody();
    init_AwsEc2QueryProtocol();
    init_AwsQueryProtocol();
    init_AwsRestXmlProtocol();
    init_XmlCodec();
    init_XmlShapeDeserializer();
    init_XmlShapeSerializer();
    init_parseXmlBody();
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/index.js
var dist_es_exports2 = {};
__export(dist_es_exports2, {
  AWSSDKSigV4Signer: () => AWSSDKSigV4Signer,
  AwsEc2QueryProtocol: () => AwsEc2QueryProtocol,
  AwsJson1_0Protocol: () => AwsJson1_0Protocol,
  AwsJson1_1Protocol: () => AwsJson1_1Protocol,
  AwsJsonRpcProtocol: () => AwsJsonRpcProtocol,
  AwsQueryProtocol: () => AwsQueryProtocol,
  AwsRestJsonProtocol: () => AwsRestJsonProtocol,
  AwsRestXmlProtocol: () => AwsRestXmlProtocol,
  AwsSdkSigV4ASigner: () => AwsSdkSigV4ASigner,
  AwsSdkSigV4Signer: () => AwsSdkSigV4Signer,
  AwsSmithyRpcV2CborProtocol: () => AwsSmithyRpcV2CborProtocol,
  JsonCodec: () => JsonCodec,
  JsonShapeDeserializer: () => JsonShapeDeserializer,
  JsonShapeSerializer: () => JsonShapeSerializer,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  NODE_SIGV4A_CONFIG_OPTIONS: () => NODE_SIGV4A_CONFIG_OPTIONS,
  XmlCodec: () => XmlCodec,
  XmlShapeDeserializer: () => XmlShapeDeserializer,
  XmlShapeSerializer: () => XmlShapeSerializer,
  _toBool: () => _toBool,
  _toNum: () => _toNum,
  _toStr: () => _toStr,
  awsExpectUnion: () => awsExpectUnion,
  emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
  getBearerTokenEnvKey: () => getBearerTokenEnvKey,
  loadRestJsonErrorCode: () => loadRestJsonErrorCode,
  loadRestXmlErrorCode: () => loadRestXmlErrorCode,
  parseJsonBody: () => parseJsonBody,
  parseJsonErrorBody: () => parseJsonErrorBody,
  parseXmlBody: () => parseXmlBody,
  parseXmlErrorBody: () => parseXmlErrorBody,
  resolveAWSSDKSigV4Config: () => resolveAWSSDKSigV4Config,
  resolveAwsSdkSigV4AConfig: () => resolveAwsSdkSigV4AConfig,
  resolveAwsSdkSigV4Config: () => resolveAwsSdkSigV4Config,
  setCredentialFeature: () => setCredentialFeature,
  setFeature: () => setFeature,
  setTokenFeature: () => setTokenFeature,
  state: () => state,
  validateSigningProperties: () => validateSigningProperties
});
var init_dist_es2 = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/index.js"() {
    init_client();
    init_httpAuthSchemes2();
    init_protocols2();
  }
});

// ../node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.922.0/node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js
var require_dist_cjs24 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.922.0/node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js"(exports) {
    "use strict";
    var core = (init_dist_es(), __toCommonJS(dist_es_exports));
    var utilEndpoints = require_dist_cjs22();
    var protocolHttp = require_dist_cjs2();
    var core$1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var DEFAULT_UA_APP_ID = void 0;
    function isValidUserAgentAppId(appId) {
      if (appId === void 0) {
        return true;
      }
      return typeof appId === "string" && appId.length <= 50;
    }
    function resolveUserAgentConfig(input) {
      const normalizedAppIdProvider = core.normalizeProvider(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
      const { customUserAgent } = input;
      return Object.assign(input, {
        customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
        userAgentAppId: async () => {
          const appId = await normalizedAppIdProvider();
          if (!isValidUserAgentAppId(appId)) {
            const logger = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
            if (typeof appId !== "string") {
              logger?.warn("userAgentAppId must be a string or undefined.");
            } else if (appId.length > 50) {
              logger?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
            }
          }
          return appId;
        }
      });
    }
    var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
    async function checkFeatures(context, config, args) {
      const request = args.request;
      if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
        core$1.setFeature(context, "PROTOCOL_RPC_V2_CBOR", "M");
      }
      if (typeof config.retryStrategy === "function") {
        const retryStrategy = await config.retryStrategy();
        if (typeof retryStrategy.acquireInitialRetryToken === "function") {
          if (retryStrategy.constructor?.name?.includes("Adaptive")) {
            core$1.setFeature(context, "RETRY_MODE_ADAPTIVE", "F");
          } else {
            core$1.setFeature(context, "RETRY_MODE_STANDARD", "E");
          }
        } else {
          core$1.setFeature(context, "RETRY_MODE_LEGACY", "D");
        }
      }
      if (typeof config.accountIdEndpointMode === "function") {
        const endpointV2 = context.endpointV2;
        if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
          core$1.setFeature(context, "ACCOUNT_ID_ENDPOINT", "O");
        }
        switch (await config.accountIdEndpointMode?.()) {
          case "disabled":
            core$1.setFeature(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
            break;
          case "preferred":
            core$1.setFeature(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
            break;
          case "required":
            core$1.setFeature(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
            break;
        }
      }
      const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
      if (identity?.$source) {
        const credentials = identity;
        if (credentials.accountId) {
          core$1.setFeature(context, "RESOLVED_ACCOUNT_ID", "T");
        }
        for (const [key, value] of Object.entries(credentials.$source ?? {})) {
          core$1.setFeature(context, key, value);
        }
      }
    }
    var USER_AGENT = "user-agent";
    var X_AMZ_USER_AGENT = "x-amz-user-agent";
    var SPACE = " ";
    var UA_NAME_SEPARATOR = "/";
    var UA_NAME_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w]/g;
    var UA_VALUE_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w#]/g;
    var UA_ESCAPE_CHAR = "-";
    var BYTE_LIMIT = 1024;
    function encodeFeatures(features) {
      let buffer = "";
      for (const key in features) {
        const val = features[key];
        if (buffer.length + val.length + 1 <= BYTE_LIMIT) {
          if (buffer.length) {
            buffer += "," + val;
          } else {
            buffer += val;
          }
          continue;
        }
        break;
      }
      return buffer;
    }
    var userAgentMiddleware = (options) => (next, context) => async (args) => {
      const { request } = args;
      if (!protocolHttp.HttpRequest.isInstance(request)) {
        return next(args);
      }
      const { headers } = request;
      const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
      const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
      await checkFeatures(context, options, args);
      const awsContext = context;
      defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
      const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
      const appId = await options.userAgentAppId();
      if (appId) {
        defaultUserAgent.push(escapeUserAgent([`app`, `${appId}`]));
      }
      const prefix = utilEndpoints.getUserAgentPrefix();
      const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
      const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent
      ].join(SPACE);
      if (options.runtime !== "browser") {
        if (normalUAValue) {
          headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
      } else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
      }
      return next({
        ...args,
        request
      });
    };
    var escapeUserAgent = (userAgentPair) => {
      const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
      const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
      const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
      const prefix = name.substring(0, prefixSeparatorIndex);
      let uaName = name.substring(prefixSeparatorIndex + 1);
      if (prefix === "api") {
        uaName = uaName.toLowerCase();
      }
      return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
        switch (index) {
          case 0:
            return item;
          case 1:
            return `${acc}/${item}`;
          default:
            return `${acc}#${item}`;
        }
      }, "");
    };
    var getUserAgentMiddlewareOptions = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: true
    };
    var getUserAgentPlugin = (config) => ({
      applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
      }
    });
    exports.DEFAULT_UA_APP_ID = DEFAULT_UA_APP_ID;
    exports.getUserAgentMiddlewareOptions = getUserAgentMiddlewareOptions;
    exports.getUserAgentPlugin = getUserAgentPlugin;
    exports.resolveUserAgentConfig = resolveUserAgentConfig;
    exports.userAgentMiddleware = userAgentMiddleware;
  }
});

// ../node_modules/.pnpm/@smithy+util-config-provider@4.2.0/node_modules/@smithy/util-config-provider/dist-cjs/index.js
var require_dist_cjs25 = __commonJS({
  "../node_modules/.pnpm/@smithy+util-config-provider@4.2.0/node_modules/@smithy/util-config-provider/dist-cjs/index.js"(exports) {
    "use strict";
    var booleanSelector = (obj, key, type) => {
      if (!(key in obj))
        return void 0;
      if (obj[key] === "true")
        return true;
      if (obj[key] === "false")
        return false;
      throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
    };
    var numberSelector = (obj, key, type) => {
      if (!(key in obj))
        return void 0;
      const numberValue = parseInt(obj[key], 10);
      if (Number.isNaN(numberValue)) {
        throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
      }
      return numberValue;
    };
    exports.SelectorType = void 0;
    (function(SelectorType) {
      SelectorType["ENV"] = "env";
      SelectorType["CONFIG"] = "shared config entry";
    })(exports.SelectorType || (exports.SelectorType = {}));
    exports.booleanSelector = booleanSelector;
    exports.numberSelector = numberSelector;
  }
});

// ../node_modules/.pnpm/@smithy+config-resolver@4.4.2/node_modules/@smithy/config-resolver/dist-cjs/index.js
var require_dist_cjs26 = __commonJS({
  "../node_modules/.pnpm/@smithy+config-resolver@4.4.2/node_modules/@smithy/config-resolver/dist-cjs/index.js"(exports) {
    "use strict";
    var utilConfigProvider = require_dist_cjs25();
    var utilMiddleware = require_dist_cjs3();
    var utilEndpoints = require_dist_cjs21();
    var ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
    var CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
    var DEFAULT_USE_DUALSTACK_ENDPOINT = false;
    var NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, ENV_USE_DUALSTACK_ENDPOINT, utilConfigProvider.SelectorType.ENV),
      configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, utilConfigProvider.SelectorType.CONFIG),
      default: false
    };
    var ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
    var CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
    var DEFAULT_USE_FIPS_ENDPOINT = false;
    var NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => utilConfigProvider.booleanSelector(env, ENV_USE_FIPS_ENDPOINT, utilConfigProvider.SelectorType.ENV),
      configFileSelector: (profile) => utilConfigProvider.booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, utilConfigProvider.SelectorType.CONFIG),
      default: false
    };
    var resolveCustomEndpointsConfig = (input) => {
      const { tls, endpoint, urlParser, useDualstackEndpoint } = input;
      return Object.assign(input, {
        tls: tls ?? true,
        endpoint: utilMiddleware.normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: utilMiddleware.normalizeProvider(useDualstackEndpoint ?? false)
      });
    };
    var getEndpointFromRegion = async (input) => {
      const { tls = true } = input;
      const region = await input.region();
      const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
      if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
      }
      const useDualstackEndpoint = await input.useDualstackEndpoint();
      const useFipsEndpoint = await input.useFipsEndpoint();
      const { hostname } = await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint }) ?? {};
      if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
      }
      return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
    };
    var resolveEndpointsConfig = (input) => {
      const useDualstackEndpoint = utilMiddleware.normalizeProvider(input.useDualstackEndpoint ?? false);
      const { endpoint, useFipsEndpoint, urlParser, tls } = input;
      return Object.assign(input, {
        tls: tls ?? true,
        endpoint: endpoint ? utilMiddleware.normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint) : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint
      });
    };
    var REGION_ENV_NAME = "AWS_REGION";
    var REGION_INI_NAME = "region";
    var NODE_REGION_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[REGION_ENV_NAME],
      configFileSelector: (profile) => profile[REGION_INI_NAME],
      default: () => {
        throw new Error("Region is missing");
      }
    };
    var NODE_REGION_CONFIG_FILE_OPTIONS = {
      preferredFile: "credentials"
    };
    var validRegions = /* @__PURE__ */ new Set();
    var checkRegion = (region, check = utilEndpoints.isValidHostLabel) => {
      if (!validRegions.has(region) && !check(region)) {
        if (region === "*") {
          console.warn(`@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.`);
        } else {
          throw new Error(`Region not accepted: region="${region}" is not a valid hostname component.`);
        }
      } else {
        validRegions.add(region);
      }
    };
    var isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
    var getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;
    var resolveRegionConfig = (input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return Object.assign(input, {
        region: async () => {
          const providedRegion = typeof region === "function" ? await region() : region;
          const realRegion = getRealRegion(providedRegion);
          checkRegion(realRegion);
          return realRegion;
        },
        useFipsEndpoint: async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if (isFipsRegion(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }
      });
    };
    var getHostnameFromVariants = (variants = [], { useFipsEndpoint, useDualstackEndpoint }) => variants.find(({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"))?.hostname;
    var getResolvedHostname = (resolvedRegion, { regionHostname, partitionHostname }) => regionHostname ? regionHostname : partitionHostname ? partitionHostname.replace("{region}", resolvedRegion) : void 0;
    var getResolvedPartition = (region, { partitionHash }) => Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";
    var getResolvedSigningRegion = (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
      if (signingRegion) {
        return signingRegion;
      } else if (useFipsEndpoint) {
        const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
        const regionRegexmatchArray = hostname.match(regionRegexJs);
        if (regionRegexmatchArray) {
          return regionRegexmatchArray[0].slice(1, -1);
        }
      }
    };
    var getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash }) => {
      const partition = getResolvedPartition(region, { partitionHash });
      const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;
      const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
      const regionHostname = getHostnameFromVariants(regionHash[resolvedRegion]?.variants, hostnameOptions);
      const partitionHostname = getHostnameFromVariants(partitionHash[partition]?.variants, hostnameOptions);
      const hostname = getResolvedHostname(resolvedRegion, { regionHostname, partitionHostname });
      if (hostname === void 0) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
      }
      const signingRegion = getResolvedSigningRegion(hostname, {
        signingRegion: regionHash[resolvedRegion]?.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint
      });
      return {
        partition,
        signingService,
        hostname,
        ...signingRegion && { signingRegion },
        ...regionHash[resolvedRegion]?.signingService && {
          signingService: regionHash[resolvedRegion].signingService
        }
      };
    };
    exports.CONFIG_USE_DUALSTACK_ENDPOINT = CONFIG_USE_DUALSTACK_ENDPOINT;
    exports.CONFIG_USE_FIPS_ENDPOINT = CONFIG_USE_FIPS_ENDPOINT;
    exports.DEFAULT_USE_DUALSTACK_ENDPOINT = DEFAULT_USE_DUALSTACK_ENDPOINT;
    exports.DEFAULT_USE_FIPS_ENDPOINT = DEFAULT_USE_FIPS_ENDPOINT;
    exports.ENV_USE_DUALSTACK_ENDPOINT = ENV_USE_DUALSTACK_ENDPOINT;
    exports.ENV_USE_FIPS_ENDPOINT = ENV_USE_FIPS_ENDPOINT;
    exports.NODE_REGION_CONFIG_FILE_OPTIONS = NODE_REGION_CONFIG_FILE_OPTIONS;
    exports.NODE_REGION_CONFIG_OPTIONS = NODE_REGION_CONFIG_OPTIONS;
    exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS;
    exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS;
    exports.REGION_ENV_NAME = REGION_ENV_NAME;
    exports.REGION_INI_NAME = REGION_INI_NAME;
    exports.getRegionInfo = getRegionInfo;
    exports.resolveCustomEndpointsConfig = resolveCustomEndpointsConfig;
    exports.resolveEndpointsConfig = resolveEndpointsConfig;
    exports.resolveRegionConfig = resolveRegionConfig;
  }
});

// ../node_modules/.pnpm/@smithy+middleware-content-length@4.2.4/node_modules/@smithy/middleware-content-length/dist-cjs/index.js
var require_dist_cjs27 = __commonJS({
  "../node_modules/.pnpm/@smithy+middleware-content-length@4.2.4/node_modules/@smithy/middleware-content-length/dist-cjs/index.js"(exports) {
    "use strict";
    var protocolHttp = require_dist_cjs2();
    var CONTENT_LENGTH_HEADER = "content-length";
    function contentLengthMiddleware(bodyLengthChecker) {
      return (next) => async (args) => {
        const request = args.request;
        if (protocolHttp.HttpRequest.isInstance(request)) {
          const { body, headers } = request;
          if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
            try {
              const length = bodyLengthChecker(body);
              request.headers = {
                ...request.headers,
                [CONTENT_LENGTH_HEADER]: String(length)
              };
            } catch (error) {
            }
          }
        }
        return next({
          ...args,
          request
        });
      };
    }
    var contentLengthMiddlewareOptions = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: true
    };
    var getContentLengthPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
      }
    });
    exports.contentLengthMiddleware = contentLengthMiddleware;
    exports.contentLengthMiddlewareOptions = contentLengthMiddlewareOptions;
    exports.getContentLengthPlugin = getContentLengthPlugin;
  }
});

// ../node_modules/.pnpm/@smithy+middleware-endpoint@4.3.6/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointUrlConfig.js
var require_getEndpointUrlConfig = __commonJS({
  "../node_modules/.pnpm/@smithy+middleware-endpoint@4.3.6/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointUrlConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndpointUrlConfig = void 0;
    var shared_ini_file_loader_1 = require_dist_cjs14();
    var ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
    var CONFIG_ENDPOINT_URL = "endpoint_url";
    var getEndpointUrlConfig = (serviceId) => ({
      environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
          return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      configFileSelector: (profile, config) => {
        if (config && profile.services) {
          const servicesSection = config[["services", profile.services].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
          if (servicesSection) {
            const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
            const endpointUrl2 = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
            if (endpointUrl2)
              return endpointUrl2;
          }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      },
      default: void 0
    });
    exports.getEndpointUrlConfig = getEndpointUrlConfig;
  }
});

// ../node_modules/.pnpm/@smithy+middleware-endpoint@4.3.6/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromConfig.js
var require_getEndpointFromConfig = __commonJS({
  "../node_modules/.pnpm/@smithy+middleware-endpoint@4.3.6/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEndpointFromConfig = void 0;
    var node_config_provider_1 = require_dist_cjs15();
    var getEndpointUrlConfig_1 = require_getEndpointUrlConfig();
    var getEndpointFromConfig = async (serviceId) => (0, node_config_provider_1.loadConfig)((0, getEndpointUrlConfig_1.getEndpointUrlConfig)(serviceId ?? ""))();
    exports.getEndpointFromConfig = getEndpointFromConfig;
  }
});

// ../node_modules/.pnpm/@smithy+middleware-endpoint@4.3.6/node_modules/@smithy/middleware-endpoint/dist-cjs/index.js
var require_dist_cjs28 = __commonJS({
  "../node_modules/.pnpm/@smithy+middleware-endpoint@4.3.6/node_modules/@smithy/middleware-endpoint/dist-cjs/index.js"(exports) {
    "use strict";
    var getEndpointFromConfig = require_getEndpointFromConfig();
    var urlParser = require_dist_cjs11();
    var core = (init_dist_es(), __toCommonJS(dist_es_exports));
    var utilMiddleware = require_dist_cjs3();
    var middlewareSerde = require_dist_cjs19();
    var resolveParamsForS3 = async (endpointParams) => {
      const bucket = endpointParams?.Bucket || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    };
    var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    var DOTS_PATTERN = /\.\./;
    var isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
    var isArnBucketName = (bucketName) => {
      const [arn, partition, service, , , bucket] = bucketName.split(":");
      const isArn = arn === "arn" && bucketName.split(":").length >= 6;
      const isValidArn = Boolean(isArn && partition && service && bucket);
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
      }
      return isValidArn;
    };
    var createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
      const configProvider = async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      };
      if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
          return configValue;
        };
      }
      if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.accountId ?? credentials?.AccountId;
          return configValue;
        };
      }
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          if (config.isCustomEndpoint === false) {
            return void 0;
          }
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    };
    var toEndpointV1 = (endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          return urlParser.parseUrl(endpoint.url);
        }
        return endpoint;
      }
      return urlParser.parseUrl(endpoint);
    };
    var getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
      if (!clientConfig.isCustomEndpoint) {
        let endpointFromConfig;
        if (clientConfig.serviceConfiguredEndpoint) {
          endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
        } else {
          endpointFromConfig = await getEndpointFromConfig.getEndpointFromConfig(clientConfig.serviceId);
        }
        if (endpointFromConfig) {
          clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
          clientConfig.isCustomEndpoint = true;
        }
      }
      const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
      if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
      }
      const endpoint = clientConfig.endpointProvider(endpointParams, context);
      return endpoint;
    };
    var resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
      const endpointParams = {};
      const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
            break;
          case "operationContextParams":
            endpointParams[name] = instruction.get(commandInput);
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
      }
      return endpointParams;
    };
    var endpointMiddleware = ({ config, instructions }) => {
      return (next, context) => async (args) => {
        if (config.isCustomEndpoint) {
          core.setFeature(context, "ENDPOINT_OVERRIDE", "N");
        }
        const endpoint = await getEndpointFromInstructions(args.input, {
          getEndpointParameterInstructions() {
            return instructions;
          }
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = utilMiddleware.getSmithyContext(context);
          const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
              signing_region: authScheme.signingRegion,
              signingRegion: authScheme.signingRegion,
              signing_service: authScheme.signingName,
              signingName: authScheme.signingName,
              signingRegionSet: authScheme.signingRegionSet
            }, authScheme.properties);
          }
        }
        return next({
          ...args
        });
      };
    };
    var endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: middlewareSerde.serializerMiddlewareOption.name
    };
    var getEndpointPlugin = (config, instructions) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
          config,
          instructions
        }), endpointMiddlewareOptions);
      }
    });
    var resolveEndpointConfig = (input) => {
      const tls = input.tls ?? true;
      const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
      const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await utilMiddleware.normalizeProvider(endpoint)()) : void 0;
      const isCustomEndpoint = !!endpoint;
      const resolvedConfig = Object.assign(input, {
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: utilMiddleware.normalizeProvider(useDualstackEndpoint ?? false),
        useFipsEndpoint: utilMiddleware.normalizeProvider(useFipsEndpoint ?? false)
      });
      let configuredEndpointPromise = void 0;
      resolvedConfig.serviceConfiguredEndpoint = async () => {
        if (input.serviceId && !configuredEndpointPromise) {
          configuredEndpointPromise = getEndpointFromConfig.getEndpointFromConfig(input.serviceId);
        }
        return configuredEndpointPromise;
      };
      return resolvedConfig;
    };
    var resolveEndpointRequiredConfig = (input) => {
      const { endpoint } = input;
      if (endpoint === void 0) {
        input.endpoint = async () => {
          throw new Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
        };
      }
      return input;
    };
    exports.endpointMiddleware = endpointMiddleware;
    exports.endpointMiddlewareOptions = endpointMiddlewareOptions;
    exports.getEndpointFromInstructions = getEndpointFromInstructions;
    exports.getEndpointPlugin = getEndpointPlugin;
    exports.resolveEndpointConfig = resolveEndpointConfig;
    exports.resolveEndpointRequiredConfig = resolveEndpointRequiredConfig;
    exports.resolveParams = resolveParams;
    exports.toEndpointV1 = toEndpointV1;
  }
});

// ../node_modules/.pnpm/@smithy+service-error-classification@4.2.4/node_modules/@smithy/service-error-classification/dist-cjs/index.js
var require_dist_cjs29 = __commonJS({
  "../node_modules/.pnpm/@smithy+service-error-classification@4.2.4/node_modules/@smithy/service-error-classification/dist-cjs/index.js"(exports) {
    "use strict";
    var CLOCK_SKEW_ERROR_CODES = [
      "AuthFailure",
      "InvalidSignatureException",
      "RequestExpired",
      "RequestInTheFuture",
      "RequestTimeTooSkewed",
      "SignatureDoesNotMatch"
    ];
    var THROTTLING_ERROR_CODES = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException"
    ];
    var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
    var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
    var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];
    var isRetryableByTrait = (error) => error?.$retryable !== void 0;
    var isClockSkewError = (error) => CLOCK_SKEW_ERROR_CODES.includes(error.name);
    var isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
    var isBrowserNetworkError = (error) => {
      const errorMessages = /* @__PURE__ */ new Set([
        "Failed to fetch",
        "NetworkError when attempting to fetch resource",
        "The Internet connection appears to be offline",
        "Load failed",
        "Network request failed"
      ]);
      const isValid = error && error instanceof TypeError;
      if (!isValid) {
        return false;
      }
      return errorMessages.has(error.message);
    };
    var isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
    var isTransientError = (error, depth = 0) => isRetryableByTrait(error) || isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error) || error.cause !== void 0 && depth <= 10 && isTransientError(error.cause, depth + 1);
    var isServerError = (error) => {
      if (error.$metadata?.httpStatusCode !== void 0) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
          return true;
        }
        return false;
      }
      return false;
    };
    exports.isBrowserNetworkError = isBrowserNetworkError;
    exports.isClockSkewCorrectedError = isClockSkewCorrectedError;
    exports.isClockSkewError = isClockSkewError;
    exports.isRetryableByTrait = isRetryableByTrait;
    exports.isServerError = isServerError;
    exports.isThrottlingError = isThrottlingError;
    exports.isTransientError = isTransientError;
  }
});

// ../node_modules/.pnpm/@smithy+util-retry@4.2.4/node_modules/@smithy/util-retry/dist-cjs/index.js
var require_dist_cjs30 = __commonJS({
  "../node_modules/.pnpm/@smithy+util-retry@4.2.4/node_modules/@smithy/util-retry/dist-cjs/index.js"(exports) {
    "use strict";
    var serviceErrorClassification = require_dist_cjs29();
    exports.RETRY_MODES = void 0;
    (function(RETRY_MODES) {
      RETRY_MODES["STANDARD"] = "standard";
      RETRY_MODES["ADAPTIVE"] = "adaptive";
    })(exports.RETRY_MODES || (exports.RETRY_MODES = {}));
    var DEFAULT_MAX_ATTEMPTS = 3;
    var DEFAULT_RETRY_MODE = exports.RETRY_MODES.STANDARD;
    var DefaultRateLimiter = class _DefaultRateLimiter {
      static setTimeoutFn = setTimeout;
      beta;
      minCapacity;
      minFillRate;
      scaleConstant;
      smooth;
      currentCapacity = 0;
      enabled = false;
      lastMaxRate = 0;
      measuredTxRate = 0;
      requestCount = 0;
      fillRate;
      lastThrottleTime;
      lastTimestamp = 0;
      lastTxRateBucket;
      maxCapacity;
      timeWindow = 0;
      constructor(options) {
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(amount) {
        if (!this.enabled) {
          return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
          const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
          await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
      }
      refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = timestamp;
          return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
      }
      updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if (serviceErrorClassification.isThrottlingError(response)) {
          const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
          this.lastMaxRate = rateToUse;
          this.calculateTimeWindow();
          this.lastThrottleTime = this.getCurrentTimeInSeconds();
          calculatedRate = this.cubicThrottle(rateToUse);
          this.enableTokenBucket();
        } else {
          this.calculateTimeWindow();
          calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
      }
      cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
      }
      enableTokenBucket() {
        this.enabled = true;
      }
      updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
      }
      updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
          const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
          this.requestCount = 0;
          this.lastTxRateBucket = timeBucket;
        }
      }
      getPrecise(num) {
        return parseFloat(num.toFixed(8));
      }
    };
    var DEFAULT_RETRY_DELAY_BASE = 100;
    var MAXIMUM_RETRY_DELAY = 20 * 1e3;
    var THROTTLING_RETRY_DELAY_BASE = 500;
    var INITIAL_RETRY_TOKENS = 500;
    var RETRY_COST = 5;
    var TIMEOUT_RETRY_COST = 10;
    var NO_RETRY_INCREMENT = 1;
    var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
    var REQUEST_HEADER = "amz-sdk-request";
    var getDefaultRetryBackoffStrategy = () => {
      let delayBase = DEFAULT_RETRY_DELAY_BASE;
      const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
      };
      const setDelayBase = (delay) => {
        delayBase = delay;
      };
      return {
        computeNextBackoffDelay,
        setDelayBase
      };
    };
    var createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
      const getRetryCount = () => retryCount;
      const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
      const getRetryCost = () => retryCost;
      return {
        getRetryCount,
        getRetryDelay,
        getRetryCost
      };
    };
    var StandardRetryStrategy = class {
      maxAttempts;
      mode = exports.RETRY_MODES.STANDARD;
      capacity = INITIAL_RETRY_TOKENS;
      retryBackoffStrategy = getDefaultRetryBackoffStrategy();
      maxAttemptsProvider;
      constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
      }
      async acquireInitialRetryToken(retryTokenScope) {
        return createDefaultRetryToken({
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0
        });
      }
      async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
          const errorType = errorInfo.errorType;
          this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
          const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
          const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
          const capacityCost = this.getCapacityCost(errorType);
          this.capacity -= capacityCost;
          return createDefaultRetryToken({
            retryDelay,
            retryCount: token.getRetryCount() + 1,
            retryCost: capacityCost
          });
        }
        throw new Error("No retry token available");
      }
      recordSuccess(token) {
        this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
      }
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (error) {
          console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
          return DEFAULT_MAX_ATTEMPTS;
        }
      }
      shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
      }
      getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
      }
      isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
      }
    };
    var AdaptiveRetryStrategy = class {
      maxAttemptsProvider;
      rateLimiter;
      standardRetryStrategy;
      mode = exports.RETRY_MODES.ADAPTIVE;
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
      }
      async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      }
      recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
      }
    };
    var ConfiguredRetryStrategy = class extends StandardRetryStrategy {
      computeNextBackoffDelay;
      constructor(maxAttempts, computeNextBackoffDelay = DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
          this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        } else {
          this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
      }
    };
    exports.AdaptiveRetryStrategy = AdaptiveRetryStrategy;
    exports.ConfiguredRetryStrategy = ConfiguredRetryStrategy;
    exports.DEFAULT_MAX_ATTEMPTS = DEFAULT_MAX_ATTEMPTS;
    exports.DEFAULT_RETRY_DELAY_BASE = DEFAULT_RETRY_DELAY_BASE;
    exports.DEFAULT_RETRY_MODE = DEFAULT_RETRY_MODE;
    exports.DefaultRateLimiter = DefaultRateLimiter;
    exports.INITIAL_RETRY_TOKENS = INITIAL_RETRY_TOKENS;
    exports.INVOCATION_ID_HEADER = INVOCATION_ID_HEADER;
    exports.MAXIMUM_RETRY_DELAY = MAXIMUM_RETRY_DELAY;
    exports.NO_RETRY_INCREMENT = NO_RETRY_INCREMENT;
    exports.REQUEST_HEADER = REQUEST_HEADER;
    exports.RETRY_COST = RETRY_COST;
    exports.StandardRetryStrategy = StandardRetryStrategy;
    exports.THROTTLING_RETRY_DELAY_BASE = THROTTLING_RETRY_DELAY_BASE;
    exports.TIMEOUT_RETRY_COST = TIMEOUT_RETRY_COST;
  }
});

// ../node_modules/.pnpm/@smithy+middleware-retry@4.4.6/node_modules/@smithy/middleware-retry/dist-cjs/isStreamingPayload/isStreamingPayload.js
var require_isStreamingPayload = __commonJS({
  "../node_modules/.pnpm/@smithy+middleware-retry@4.4.6/node_modules/@smithy/middleware-retry/dist-cjs/isStreamingPayload/isStreamingPayload.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isStreamingPayload = void 0;
    var stream_1 = __require("stream");
    var isStreamingPayload = (request) => request?.body instanceof stream_1.Readable || typeof ReadableStream !== "undefined" && request?.body instanceof ReadableStream;
    exports.isStreamingPayload = isStreamingPayload;
  }
});

// ../node_modules/.pnpm/@smithy+middleware-retry@4.4.6/node_modules/@smithy/middleware-retry/dist-cjs/index.js
var require_dist_cjs31 = __commonJS({
  "../node_modules/.pnpm/@smithy+middleware-retry@4.4.6/node_modules/@smithy/middleware-retry/dist-cjs/index.js"(exports) {
    "use strict";
    var utilRetry = require_dist_cjs30();
    var protocolHttp = require_dist_cjs2();
    var serviceErrorClassification = require_dist_cjs29();
    var uuid = require_dist_cjs10();
    var utilMiddleware = require_dist_cjs3();
    var smithyClient = require_dist_cjs13();
    var isStreamingPayload = require_isStreamingPayload();
    var getDefaultRetryQuota = (initialRetryTokens, options) => {
      const MAX_CAPACITY = initialRetryTokens;
      const noRetryIncrement = utilRetry.NO_RETRY_INCREMENT;
      const retryCost = utilRetry.RETRY_COST;
      const timeoutRetryCost = utilRetry.TIMEOUT_RETRY_COST;
      let availableCapacity = initialRetryTokens;
      const getCapacityAmount = (error) => error.name === "TimeoutError" ? timeoutRetryCost : retryCost;
      const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
      const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
          throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
      };
      const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
      };
      return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens
      });
    };
    var defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(utilRetry.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    var defaultRetryDecider = (error) => {
      if (!error) {
        return false;
      }
      return serviceErrorClassification.isRetryableByTrait(error) || serviceErrorClassification.isClockSkewError(error) || serviceErrorClassification.isThrottlingError(error) || serviceErrorClassification.isTransientError(error);
    };
    var asSdkError = (error) => {
      if (error instanceof Error)
        return error;
      if (error instanceof Object)
        return Object.assign(new Error(), error);
      if (typeof error === "string")
        return new Error(error);
      return new Error(`AWS SDK error wrapper for ${error}`);
    };
    var StandardRetryStrategy = class {
      maxAttemptsProvider;
      retryDecider;
      delayDecider;
      retryQuota;
      mode = utilRetry.RETRY_MODES.STANDARD;
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.retryDecider = options?.retryDecider ?? defaultRetryDecider;
        this.delayDecider = options?.delayDecider ?? defaultDelayDecider;
        this.retryQuota = options?.retryQuota ?? getDefaultRetryQuota(utilRetry.INITIAL_RETRY_TOKENS);
      }
      shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
      }
      async getMaxAttempts() {
        let maxAttempts;
        try {
          maxAttempts = await this.maxAttemptsProvider();
        } catch (error) {
          maxAttempts = utilRetry.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
      }
      async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (protocolHttp.HttpRequest.isInstance(request)) {
          request.headers[utilRetry.INVOCATION_ID_HEADER] = uuid.v4();
        }
        while (true) {
          try {
            if (protocolHttp.HttpRequest.isInstance(request)) {
              request.headers[utilRetry.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            if (options?.beforeRequest) {
              await options.beforeRequest();
            }
            const { response, output } = await next(args);
            if (options?.afterRequest) {
              options.afterRequest(response);
            }
            this.retryQuota.releaseRetryTokens(retryTokenAmount);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalDelay;
            return { response, output };
          } catch (e) {
            const err = asSdkError(e);
            attempts++;
            if (this.shouldRetry(err, attempts, maxAttempts)) {
              retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
              const delayFromDecider = this.delayDecider(serviceErrorClassification.isThrottlingError(err) ? utilRetry.THROTTLING_RETRY_DELAY_BASE : utilRetry.DEFAULT_RETRY_DELAY_BASE, attempts);
              const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
              const delay = Math.max(delayFromResponse || 0, delayFromDecider);
              totalDelay += delay;
              await new Promise((resolve) => setTimeout(resolve, delay));
              continue;
            }
            if (!err.$metadata) {
              err.$metadata = {};
            }
            err.$metadata.attempts = attempts;
            err.$metadata.totalRetryDelay = totalDelay;
            throw err;
          }
        }
      }
    };
    var getDelayFromRetryAfterHeader = (response) => {
      if (!protocolHttp.HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1e3;
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate.getTime() - Date.now();
    };
    var AdaptiveRetryStrategy = class extends StandardRetryStrategy {
      rateLimiter;
      constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new utilRetry.DefaultRateLimiter();
        this.mode = utilRetry.RETRY_MODES.ADAPTIVE;
      }
      async retry(next, args) {
        return super.retry(next, args, {
          beforeRequest: async () => {
            return this.rateLimiter.getSendToken();
          },
          afterRequest: (response) => {
            this.rateLimiter.updateClientSendingRate(response);
          }
        });
      }
    };
    var ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
    var CONFIG_MAX_ATTEMPTS = "max_attempts";
    var NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      },
      default: utilRetry.DEFAULT_MAX_ATTEMPTS
    };
    var resolveRetryConfig = (input) => {
      const { retryStrategy, retryMode: _retryMode, maxAttempts: _maxAttempts } = input;
      const maxAttempts = utilMiddleware.normalizeProvider(_maxAttempts ?? utilRetry.DEFAULT_MAX_ATTEMPTS);
      return Object.assign(input, {
        maxAttempts,
        retryStrategy: async () => {
          if (retryStrategy) {
            return retryStrategy;
          }
          const retryMode = await utilMiddleware.normalizeProvider(_retryMode)();
          if (retryMode === utilRetry.RETRY_MODES.ADAPTIVE) {
            return new utilRetry.AdaptiveRetryStrategy(maxAttempts);
          }
          return new utilRetry.StandardRetryStrategy(maxAttempts);
        }
      });
    };
    var ENV_RETRY_MODE = "AWS_RETRY_MODE";
    var CONFIG_RETRY_MODE = "retry_mode";
    var NODE_RETRY_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
      configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
      default: utilRetry.DEFAULT_RETRY_MODE
    };
    var omitRetryHeadersMiddleware = () => (next) => async (args) => {
      const { request } = args;
      if (protocolHttp.HttpRequest.isInstance(request)) {
        delete request.headers[utilRetry.INVOCATION_ID_HEADER];
        delete request.headers[utilRetry.REQUEST_HEADER];
      }
      return next(args);
    };
    var omitRetryHeadersMiddlewareOptions = {
      name: "omitRetryHeadersMiddleware",
      tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
      relation: "before",
      toMiddleware: "awsAuthMiddleware",
      override: true
    };
    var getOmitRetryHeadersPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
      }
    });
    var retryMiddleware = (options) => (next, context) => async (args) => {
      let retryStrategy = await options.retryStrategy();
      const maxAttempts = await options.maxAttempts();
      if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        const isRequest = protocolHttp.HttpRequest.isInstance(request);
        if (isRequest) {
          request.headers[utilRetry.INVOCATION_ID_HEADER] = uuid.v4();
        }
        while (true) {
          try {
            if (isRequest) {
              request.headers[utilRetry.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            const { response, output } = await next(args);
            retryStrategy.recordSuccess(retryToken);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalRetryDelay;
            return { response, output };
          } catch (e) {
            const retryErrorInfo = getRetryErrorInfo(e);
            lastError = asSdkError(e);
            if (isRequest && isStreamingPayload.isStreamingPayload(request)) {
              (context.logger instanceof smithyClient.NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
              throw lastError;
            }
            try {
              retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
            } catch (refreshError) {
              if (!lastError.$metadata) {
                lastError.$metadata = {};
              }
              lastError.$metadata.attempts = attempts + 1;
              lastError.$metadata.totalRetryDelay = totalRetryDelay;
              throw lastError;
            }
            attempts = retryToken.getRetryCount();
            const delay = retryToken.getRetryDelay();
            totalRetryDelay += delay;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      } else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
          context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
      }
    };
    var isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
    var getRetryErrorInfo = (error) => {
      const errorInfo = {
        error,
        errorType: getRetryErrorType(error)
      };
      const retryAfterHint = getRetryAfterHint(error.$response);
      if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
      }
      return errorInfo;
    };
    var getRetryErrorType = (error) => {
      if (serviceErrorClassification.isThrottlingError(error))
        return "THROTTLING";
      if (serviceErrorClassification.isTransientError(error))
        return "TRANSIENT";
      if (serviceErrorClassification.isServerError(error))
        return "SERVER_ERROR";
      return "CLIENT_ERROR";
    };
    var retryMiddlewareOptions = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: true
    };
    var getRetryPlugin = (options) => ({
      applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
      }
    });
    var getRetryAfterHint = (response) => {
      if (!protocolHttp.HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1e3);
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate;
    };
    exports.AdaptiveRetryStrategy = AdaptiveRetryStrategy;
    exports.CONFIG_MAX_ATTEMPTS = CONFIG_MAX_ATTEMPTS;
    exports.CONFIG_RETRY_MODE = CONFIG_RETRY_MODE;
    exports.ENV_MAX_ATTEMPTS = ENV_MAX_ATTEMPTS;
    exports.ENV_RETRY_MODE = ENV_RETRY_MODE;
    exports.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = NODE_MAX_ATTEMPT_CONFIG_OPTIONS;
    exports.NODE_RETRY_MODE_CONFIG_OPTIONS = NODE_RETRY_MODE_CONFIG_OPTIONS;
    exports.StandardRetryStrategy = StandardRetryStrategy;
    exports.defaultDelayDecider = defaultDelayDecider;
    exports.defaultRetryDecider = defaultRetryDecider;
    exports.getOmitRetryHeadersPlugin = getOmitRetryHeadersPlugin;
    exports.getRetryAfterHint = getRetryAfterHint;
    exports.getRetryPlugin = getRetryPlugin;
    exports.omitRetryHeadersMiddleware = omitRetryHeadersMiddleware;
    exports.omitRetryHeadersMiddlewareOptions = omitRetryHeadersMiddlewareOptions;
    exports.resolveRetryConfig = resolveRetryConfig;
    exports.retryMiddleware = retryMiddleware;
    exports.retryMiddlewareOptions = retryMiddlewareOptions;
  }
});

// ../node_modules/.pnpm/@aws-sdk+util-user-agent-node@3.922.0/node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js
var require_dist_cjs32 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+util-user-agent-node@3.922.0/node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js"(exports) {
    "use strict";
    var os = __require("os");
    var process2 = __require("process");
    var middlewareUserAgent = require_dist_cjs24();
    var crtAvailability = {
      isCrtAvailable: false
    };
    var isCrtAvailable = () => {
      if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
      }
      return null;
    };
    var createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => {
      return async (config) => {
        const sections = [
          ["aws-sdk-js", clientVersion],
          ["ua", "2.1"],
          [`os/${os.platform()}`, os.release()],
          ["lang/js"],
          ["md/nodejs", `${process2.versions.node}`]
        ];
        const crtAvailable = isCrtAvailable();
        if (crtAvailable) {
          sections.push(crtAvailable);
        }
        if (serviceId) {
          sections.push([`api/${serviceId}`, clientVersion]);
        }
        if (process2.env.AWS_EXECUTION_ENV) {
          sections.push([`exec-env/${process2.env.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
      };
    };
    var defaultUserAgent = createDefaultUserAgentProvider;
    var UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
    var UA_APP_ID_INI_NAME = "sdk_ua_app_id";
    var UA_APP_ID_INI_NAME_DEPRECATED = "sdk-ua-app-id";
    var NODE_APP_ID_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
      configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME] ?? profile[UA_APP_ID_INI_NAME_DEPRECATED],
      default: middlewareUserAgent.DEFAULT_UA_APP_ID
    };
    exports.NODE_APP_ID_CONFIG_OPTIONS = NODE_APP_ID_CONFIG_OPTIONS;
    exports.UA_APP_ID_ENV_NAME = UA_APP_ID_ENV_NAME;
    exports.UA_APP_ID_INI_NAME = UA_APP_ID_INI_NAME;
    exports.createDefaultUserAgentProvider = createDefaultUserAgentProvider;
    exports.crtAvailability = crtAvailability;
    exports.defaultUserAgent = defaultUserAgent;
  }
});

// ../node_modules/.pnpm/@smithy+hash-node@4.2.4/node_modules/@smithy/hash-node/dist-cjs/index.js
var require_dist_cjs33 = __commonJS({
  "../node_modules/.pnpm/@smithy+hash-node@4.2.4/node_modules/@smithy/hash-node/dist-cjs/index.js"(exports) {
    "use strict";
    var utilBufferFrom = require_dist_cjs5();
    var utilUtf8 = require_dist_cjs6();
    var buffer = __require("buffer");
    var crypto = __require("crypto");
    var Hash = class {
      algorithmIdentifier;
      secret;
      hash;
      constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
      }
      update(toHash, encoding) {
        this.hash.update(utilUtf8.toUint8Array(castSourceData(toHash, encoding)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret ? crypto.createHmac(this.algorithmIdentifier, castSourceData(this.secret)) : crypto.createHash(this.algorithmIdentifier);
      }
    };
    function castSourceData(toCast, encoding) {
      if (buffer.Buffer.isBuffer(toCast)) {
        return toCast;
      }
      if (typeof toCast === "string") {
        return utilBufferFrom.fromString(toCast, encoding);
      }
      if (ArrayBuffer.isView(toCast)) {
        return utilBufferFrom.fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
      }
      return utilBufferFrom.fromArrayBuffer(toCast);
    }
    exports.Hash = Hash;
  }
});

// ../node_modules/.pnpm/@smithy+util-body-length-node@4.2.1/node_modules/@smithy/util-body-length-node/dist-cjs/index.js
var require_dist_cjs34 = __commonJS({
  "../node_modules/.pnpm/@smithy+util-body-length-node@4.2.1/node_modules/@smithy/util-body-length-node/dist-cjs/index.js"(exports) {
    "use strict";
    var node_fs = __require("node:fs");
    var calculateBodyLength = (body) => {
      if (!body) {
        return 0;
      }
      if (typeof body === "string") {
        return Buffer.byteLength(body);
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      } else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
      } else if (body instanceof node_fs.ReadStream) {
        if (body.path != null) {
          return node_fs.lstatSync(body.path).size;
        } else if (typeof body.fd === "number") {
          return node_fs.fstatSync(body.fd).size;
        }
      }
      throw new Error(`Body Length computation failed for ${body}`);
    };
    exports.calculateBodyLength = calculateBodyLength;
  }
});

// ../node_modules/.pnpm/@smithy+util-defaults-mode-node@4.2.8/node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js
var require_dist_cjs35 = __commonJS({
  "../node_modules/.pnpm/@smithy+util-defaults-mode-node@4.2.8/node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js"(exports) {
    "use strict";
    var configResolver = require_dist_cjs26();
    var nodeConfigProvider = require_dist_cjs15();
    var propertyProvider = require_dist_cjs12();
    var AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
    var AWS_REGION_ENV = "AWS_REGION";
    var AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
    var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    var IMDS_REGION_PATH = "/latest/meta-data/placement/region";
    var AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
    var AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
    var NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
      },
      configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
      },
      default: "legacy"
    };
    var resolveDefaultsModeConfig = ({ region = nodeConfigProvider.loadConfig(configResolver.NODE_REGION_CONFIG_OPTIONS), defaultsMode = nodeConfigProvider.loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS) } = {}) => propertyProvider.memoize(async () => {
      const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
      switch (mode?.toLowerCase()) {
        case "auto":
          return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(mode?.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
      }
    });
    var resolveNodeDefaultsModeAuto = async (clientRegion) => {
      if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
          return "standard";
        }
        if (resolvedRegion === inferredRegion) {
          return "in-region";
        } else {
          return "cross-region";
        }
      }
      return "standard";
    };
    var inferPhysicalRegion = async () => {
      if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
      }
      if (!process.env[ENV_IMDS_DISABLED]) {
        try {
          const { getInstanceMetadataEndpoint, httpRequest } = await import("./dist-cjs-N7VEDHBU.js");
          const endpoint = await getInstanceMetadataEndpoint();
          return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        } catch (e) {
        }
      }
    };
    exports.resolveDefaultsModeConfig = resolveDefaultsModeConfig;
  }
});

// ../node_modules/.pnpm/@aws-sdk+region-config-resolver@3.922.0/node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/stsRegionDefaultResolver.js
var require_stsRegionDefaultResolver = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+region-config-resolver@3.922.0/node_modules/@aws-sdk/region-config-resolver/dist-cjs/regionConfig/stsRegionDefaultResolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.warning = void 0;
    exports.stsRegionDefaultResolver = stsRegionDefaultResolver;
    var config_resolver_1 = require_dist_cjs26();
    var node_config_provider_1 = require_dist_cjs15();
    function stsRegionDefaultResolver(loaderConfig = {}) {
      return (0, node_config_provider_1.loadConfig)({
        ...config_resolver_1.NODE_REGION_CONFIG_OPTIONS,
        async default() {
          if (!exports.warning.silence) {
            console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly.");
          }
          return "us-east-1";
        }
      }, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig });
    }
    exports.warning = {
      silence: false
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+region-config-resolver@3.922.0/node_modules/@aws-sdk/region-config-resolver/dist-cjs/index.js
var require_dist_cjs36 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+region-config-resolver@3.922.0/node_modules/@aws-sdk/region-config-resolver/dist-cjs/index.js"(exports) {
    "use strict";
    var configResolver = require_dist_cjs26();
    var stsRegionDefaultResolver = require_stsRegionDefaultResolver();
    var getAwsRegionExtensionConfiguration = (runtimeConfig) => {
      return {
        setRegion(region) {
          runtimeConfig.region = region;
        },
        region() {
          return runtimeConfig.region;
        }
      };
    };
    var resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
      return {
        region: awsRegionExtensionConfiguration.region()
      };
    };
    Object.defineProperty(exports, "NODE_REGION_CONFIG_FILE_OPTIONS", {
      enumerable: true,
      get: function() {
        return configResolver.NODE_REGION_CONFIG_FILE_OPTIONS;
      }
    });
    Object.defineProperty(exports, "NODE_REGION_CONFIG_OPTIONS", {
      enumerable: true,
      get: function() {
        return configResolver.NODE_REGION_CONFIG_OPTIONS;
      }
    });
    Object.defineProperty(exports, "REGION_ENV_NAME", {
      enumerable: true,
      get: function() {
        return configResolver.REGION_ENV_NAME;
      }
    });
    Object.defineProperty(exports, "REGION_INI_NAME", {
      enumerable: true,
      get: function() {
        return configResolver.REGION_INI_NAME;
      }
    });
    Object.defineProperty(exports, "resolveRegionConfig", {
      enumerable: true,
      get: function() {
        return configResolver.resolveRegionConfig;
      }
    });
    exports.getAwsRegionExtensionConfiguration = getAwsRegionExtensionConfiguration;
    exports.resolveAwsRegionExtensionConfiguration = resolveAwsRegionExtensionConfiguration;
    Object.keys(stsRegionDefaultResolver).forEach(function(k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
        enumerable: true,
        get: function() {
          return stsRegionDefaultResolver[k];
        }
      });
    });
  }
});

export {
  require_dist_cjs16 as require_dist_cjs,
  require_dist_cjs17 as require_dist_cjs2,
  require_dist_cjs18 as require_dist_cjs3,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  require_dist_cjs19 as require_dist_cjs4,
  getHttpSigningPlugin,
  DefaultIdentityProviderConfig,
  NoAuthSigner,
  dist_es_exports,
  init_dist_es,
  require_dist_cjs21 as require_dist_cjs5,
  require_dist_cjs22 as require_dist_cjs6,
  AwsSdkSigV4Signer,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  resolveAwsSdkSigV4Config,
  httpAuthSchemes_exports,
  init_httpAuthSchemes2 as init_httpAuthSchemes,
  parseJsonBody,
  parseJsonErrorBody,
  loadRestJsonErrorCode,
  parseXmlBody,
  parseXmlErrorBody,
  dist_es_exports2,
  init_dist_es2,
  require_dist_cjs24 as require_dist_cjs7,
  require_dist_cjs26 as require_dist_cjs8,
  require_dist_cjs27 as require_dist_cjs9,
  require_dist_cjs28 as require_dist_cjs10,
  require_dist_cjs30 as require_dist_cjs11,
  require_dist_cjs31 as require_dist_cjs12,
  require_dist_cjs32 as require_dist_cjs13,
  require_dist_cjs33 as require_dist_cjs14,
  require_dist_cjs34 as require_dist_cjs15,
  require_dist_cjs35 as require_dist_cjs16,
  require_dist_cjs36 as require_dist_cjs17
};
//# sourceMappingURL=chunk-NN3GEU7U.js.map
