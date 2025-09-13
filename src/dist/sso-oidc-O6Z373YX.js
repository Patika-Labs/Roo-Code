import {
  init_package,
  package_default
} from "./chunk-KQIGUFVE.js";
import {
  AwsSdkSigV4Signer,
  DefaultIdentityProviderConfig,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  NoAuthSigner,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
  init_dist_es,
  init_dist_es2,
  loadRestJsonErrorCode,
  parseJsonBody,
  parseJsonErrorBody,
  require_dist_cjs as require_dist_cjs2,
  require_dist_cjs10 as require_dist_cjs18,
  require_dist_cjs11 as require_dist_cjs19,
  require_dist_cjs12 as require_dist_cjs20,
  require_dist_cjs13 as require_dist_cjs21,
  require_dist_cjs14 as require_dist_cjs22,
  require_dist_cjs15 as require_dist_cjs23,
  require_dist_cjs16 as require_dist_cjs24,
  require_dist_cjs17 as require_dist_cjs25,
  require_dist_cjs2 as require_dist_cjs3,
  require_dist_cjs3 as require_dist_cjs4,
  require_dist_cjs4 as require_dist_cjs6,
  require_dist_cjs5 as require_dist_cjs10,
  require_dist_cjs6 as require_dist_cjs12,
  require_dist_cjs7 as require_dist_cjs14,
  require_dist_cjs8 as require_dist_cjs15,
  require_dist_cjs9 as require_dist_cjs16,
  resolveAwsSdkSigV4Config
} from "./chunk-NN3GEU7U.js";
import {
  require_dist_cjs as require_dist_cjs11,
  require_dist_cjs2 as require_dist_cjs17
} from "./chunk-PZCJD5GR.js";
import "./chunk-WPKHEWHD.js";
import {
  requestBuilder,
  require_dist_cjs,
  require_dist_cjs11 as require_dist_cjs13,
  require_dist_cjs2 as require_dist_cjs5,
  require_dist_cjs3 as require_dist_cjs8,
  require_dist_cjs6 as require_dist_cjs9
} from "./chunk-TYZDO54P.js";
import {
  require_dist_cjs3 as require_dist_cjs7
} from "./chunk-PARUIAYX.js";
import {
  emitWarningIfUnsupportedVersion
} from "./chunk-GV46K7LA.js";
import "./chunk-S43WTMWE.js";
import "./chunk-46Y7YWVF.js";
import {
  __esm,
  __toESM
} from "./chunk-PJNRM37X.js";

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sso-oauth",
      region: authParameters.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config,
        context
      }
    })
  };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var import_util_middleware, defaultSSOOIDCHttpAuthSchemeParametersProvider, defaultSSOOIDCHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig;
var init_httpAuthSchemeProvider = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthSchemeProvider.js"() {
    init_dist_es2();
    import_util_middleware = __toESM(require_dist_cjs5());
    defaultSSOOIDCHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, import_util_middleware.getSmithyContext)(context).operation,
        region: await (0, import_util_middleware.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSSOOIDCHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "CreateToken": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    resolveHttpAuthSchemeConfig = (config) => {
      const config_0 = resolveAwsSdkSigV4Config(config);
      return Object.assign(config_0, {
        authSchemePreference: (0, import_util_middleware.normalizeProvider)(config.authSchemePreference ?? [])
      });
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/EndpointParameters.js
var resolveClientEndpointParameters, commonParams;
var init_EndpointParameters = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sso-oauth"
      });
    };
    commonParams = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/ruleset.js
var u, v, w, x, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, _data, ruleSet;
var init_ruleset = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/ruleset.js"() {
    u = "required";
    v = "fn";
    w = "argv";
    x = "ref";
    a = true;
    b = "isSet";
    c = "booleanEquals";
    d = "error";
    e = "endpoint";
    f = "tree";
    g = "PartitionResult";
    h = "getAttr";
    i = { [u]: false, "type": "string" };
    j = { [u]: true, "default": false, "type": "boolean" };
    k = { [x]: "Endpoint" };
    l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
    m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
    n = {};
    o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] };
    p = { [x]: g };
    q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] };
    r = [l];
    s = [m];
    t = [{ [x]: "Region" }];
    _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
    ruleSet = _data;
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/endpointResolver.js
var import_util_endpoints, import_util_endpoints2, cache, defaultEndpointResolver;
var init_endpointResolver = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/endpointResolver.js"() {
    import_util_endpoints = __toESM(require_dist_cjs12());
    import_util_endpoints2 = __toESM(require_dist_cjs10());
    init_ruleset();
    cache = new import_util_endpoints2.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    defaultEndpointResolver = (endpointParams, context = {}) => {
      return cache.get(endpointParams, () => (0, import_util_endpoints2.resolveEndpoint)(ruleSet, {
        endpointParams,
        logger: context.logger
      }));
    };
    import_util_endpoints2.customEndpointFunctions.aws = import_util_endpoints.awsEndpointFunctions;
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.shared.js
var import_smithy_client, import_url_parser, import_util_base64, import_util_utf8, getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.shared.js"() {
    init_dist_es2();
    init_dist_es();
    import_smithy_client = __toESM(require_dist_cjs13());
    import_url_parser = __toESM(require_dist_cjs11());
    import_util_base64 = __toESM(require_dist_cjs8());
    import_util_utf8 = __toESM(require_dist_cjs7());
    init_httpAuthSchemeProvider();
    init_endpointResolver();
    getRuntimeConfig = (config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? import_util_base64.fromBase64,
        base64Encoder: config?.base64Encoder ?? import_util_base64.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOOIDCHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new import_smithy_client.NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO OIDC",
        urlParser: config?.urlParser ?? import_url_parser.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? import_util_utf8.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? import_util_utf8.toUtf8
      };
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.js
var import_util_user_agent_node, import_config_resolver, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_util_body_length_node, import_util_retry, import_smithy_client2, import_util_defaults_mode_node, import_smithy_client3, getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.js"() {
    init_package();
    init_dist_es2();
    import_util_user_agent_node = __toESM(require_dist_cjs21());
    import_config_resolver = __toESM(require_dist_cjs15());
    import_hash_node = __toESM(require_dist_cjs22());
    import_middleware_retry = __toESM(require_dist_cjs20());
    import_node_config_provider = __toESM(require_dist_cjs17());
    import_node_http_handler = __toESM(require_dist_cjs9());
    import_util_body_length_node = __toESM(require_dist_cjs23());
    import_util_retry = __toESM(require_dist_cjs19());
    init_runtimeConfig_shared();
    import_smithy_client2 = __toESM(require_dist_cjs13());
    import_util_defaults_mode_node = __toESM(require_dist_cjs24());
    import_smithy_client3 = __toESM(require_dist_cjs13());
    getRuntimeConfig2 = (config) => {
      (0, import_smithy_client3.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, import_util_defaults_mode_node.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(import_smithy_client2.loadConfigsForDefaultMode);
      const clientSharedValues = getRuntimeConfig(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, import_node_config_provider.loadConfig)(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? import_util_body_length_node.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, import_util_user_agent_node.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
        maxAttempts: config?.maxAttempts ?? (0, import_node_config_provider.loadConfig)(import_middleware_retry.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? (0, import_node_config_provider.loadConfig)(import_config_resolver.NODE_REGION_CONFIG_OPTIONS, { ...import_config_resolver.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: import_node_http_handler.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, import_node_config_provider.loadConfig)({
          ...import_middleware_retry.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || import_util_retry.DEFAULT_RETRY_MODE
        }, config),
        sha256: config?.sha256 ?? import_hash_node.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? import_node_http_handler.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, import_node_config_provider.loadConfig)(import_config_resolver.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, import_node_config_provider.loadConfig)(import_config_resolver.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, import_node_config_provider.loadConfig)(import_util_user_agent_node.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration = (runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    };
    resolveHttpAuthRuntimeConfig = (config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeExtensions.js
var import_region_config_resolver, import_protocol_http, import_smithy_client4, resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeExtensions.js"() {
    import_region_config_resolver = __toESM(require_dist_cjs25());
    import_protocol_http = __toESM(require_dist_cjs());
    import_smithy_client4 = __toESM(require_dist_cjs13());
    init_httpAuthExtensionConfiguration();
    resolveRuntimeExtensions = (runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign((0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig), (0, import_smithy_client4.getDefaultExtensionConfiguration)(runtimeConfig), (0, import_protocol_http.getHttpHandlerExtensionConfiguration)(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, (0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration), (0, import_smithy_client4.resolveDefaultRuntimeConfig)(extensionConfiguration), (0, import_protocol_http.resolveHttpHandlerRuntimeConfig)(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDCClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_middleware_content_length, import_middleware_endpoint, import_middleware_retry2, import_smithy_client5, SSOOIDCClient;
var init_SSOOIDCClient = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDCClient.js"() {
    import_middleware_host_header = __toESM(require_dist_cjs2());
    import_middleware_logger = __toESM(require_dist_cjs3());
    import_middleware_recursion_detection = __toESM(require_dist_cjs4());
    import_middleware_user_agent = __toESM(require_dist_cjs14());
    import_config_resolver2 = __toESM(require_dist_cjs15());
    init_dist_es();
    import_middleware_content_length = __toESM(require_dist_cjs16());
    import_middleware_endpoint = __toESM(require_dist_cjs18());
    import_middleware_retry2 = __toESM(require_dist_cjs20());
    import_smithy_client5 = __toESM(require_dist_cjs13());
    init_httpAuthSchemeProvider();
    init_EndpointParameters();
    init_runtimeConfig();
    init_runtimeExtensions();
    SSOOIDCClient = class extends import_smithy_client5.Client {
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0, import_middleware_user_agent.resolveUserAgentConfig)(_config_1);
        const _config_3 = (0, import_middleware_retry2.resolveRetryConfig)(_config_2);
        const _config_4 = (0, import_config_resolver2.resolveRegionConfig)(_config_3);
        const _config_5 = (0, import_middleware_host_header.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, import_middleware_endpoint.resolveEndpointConfig)(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use((0, import_middleware_user_agent.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_retry2.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_content_length.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_host_header.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_logger.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_recursion_detection.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSSOOIDCHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          })
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/SSOOIDCServiceException.js
var import_smithy_client6, SSOOIDCServiceException;
var init_SSOOIDCServiceException = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/SSOOIDCServiceException.js"() {
    import_smithy_client6 = __toESM(require_dist_cjs13());
    SSOOIDCServiceException = class _SSOOIDCServiceException extends import_smithy_client6.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/models_0.js
var import_smithy_client7, AccessDeniedExceptionReason, AccessDeniedException, AuthorizationPendingException, CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestExceptionReason, InvalidRequestException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException;
var init_models_0 = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/models_0.js"() {
    import_smithy_client7 = __toESM(require_dist_cjs13());
    init_SSOOIDCServiceException();
    AccessDeniedExceptionReason = {
      KMS_ACCESS_DENIED: "KMS_AccessDeniedException"
    };
    AccessDeniedException = class _AccessDeniedException extends SSOOIDCServiceException {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      reason;
      error_description;
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
        this.reason = opts.reason;
        this.error_description = opts.error_description;
      }
    };
    AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
      name = "AuthorizationPendingException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "AuthorizationPendingException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    CreateTokenRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: import_smithy_client7.SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: import_smithy_client7.SENSITIVE_STRING },
      ...obj.codeVerifier && { codeVerifier: import_smithy_client7.SENSITIVE_STRING }
    });
    CreateTokenResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client7.SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: import_smithy_client7.SENSITIVE_STRING },
      ...obj.idToken && { idToken: import_smithy_client7.SENSITIVE_STRING }
    });
    ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
      name = "ExpiredTokenException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
      name = "InternalServerException";
      $fault = "server";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
      name = "InvalidClientException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidClientException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
      name = "InvalidGrantException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRequestExceptionReason = {
      KMS_DISABLED_KEY: "KMS_DisabledException",
      KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
      KMS_INVALID_STATE: "KMS_InvalidStateException",
      KMS_KEY_NOT_FOUND: "KMS_NotFoundException"
    };
    InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
      name = "InvalidRequestException";
      $fault = "client";
      error;
      reason;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
        this.error = opts.error;
        this.reason = opts.reason;
        this.error_description = opts.error_description;
      }
    };
    InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
      name = "InvalidScopeException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidScopeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
      name = "SlowDownException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "SlowDownException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
      name = "UnauthorizedClientException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "UnauthorizedClientException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
      name = "UnsupportedGrantTypeException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "UnsupportedGrantTypeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/protocols/Aws_restJson1.js
var import_smithy_client8, se_CreateTokenCommand, de_CreateTokenCommand, de_CommandError, throwDefaultError, de_AccessDeniedExceptionRes, de_AuthorizationPendingExceptionRes, de_ExpiredTokenExceptionRes, de_InternalServerExceptionRes, de_InvalidClientExceptionRes, de_InvalidGrantExceptionRes, de_InvalidRequestExceptionRes, de_InvalidScopeExceptionRes, de_SlowDownExceptionRes, de_UnauthorizedClientExceptionRes, de_UnsupportedGrantTypeExceptionRes, deserializeMetadata;
var init_Aws_restJson1 = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/protocols/Aws_restJson1.js"() {
    init_dist_es2();
    init_dist_es();
    import_smithy_client8 = __toESM(require_dist_cjs13());
    init_models_0();
    init_SSOOIDCServiceException();
    se_CreateTokenCommand = async (input, context) => {
      const b2 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b2.bp("/token");
      let body;
      body = JSON.stringify((0, import_smithy_client8.take)(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        codeVerifier: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (_) => (0, import_smithy_client8._json)(_)
      }));
      b2.m("POST").h(headers).b(body);
      return b2.build();
    };
    de_CreateTokenCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = (0, import_smithy_client8.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, import_smithy_client8.expectNonNull)((0, import_smithy_client8.expectObject)(await parseJsonBody(output.body, context)), "body");
      const doc = (0, import_smithy_client8.take)(data, {
        accessToken: import_smithy_client8.expectString,
        expiresIn: import_smithy_client8.expectInt32,
        idToken: import_smithy_client8.expectString,
        refreshToken: import_smithy_client8.expectString,
        tokenType: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    de_CommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseJsonErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
          throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
          throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
          throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
          throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
          throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
          throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
          throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
          throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    throwDefaultError = (0, import_smithy_client8.withBaseException)(SSOOIDCServiceException);
    de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString,
        reason: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    de_InternalServerExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    de_InvalidClientExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidGrantException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString,
        reason: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidScopeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    de_SlowDownExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new SlowDownException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
      const contents = (0, import_smithy_client8.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client8.take)(data, {
        error: import_smithy_client8.expectString,
        error_description: import_smithy_client8.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, parsedOutput.body);
    };
    deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/CreateTokenCommand.js
var import_middleware_endpoint2, import_middleware_serde, import_smithy_client9, CreateTokenCommand;
var init_CreateTokenCommand = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/CreateTokenCommand.js"() {
    import_middleware_endpoint2 = __toESM(require_dist_cjs18());
    import_middleware_serde = __toESM(require_dist_cjs6());
    import_smithy_client9 = __toESM(require_dist_cjs13());
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    CreateTokenCommand = class extends import_smithy_client9.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint2.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog).ser(se_CreateTokenCommand).de(de_CreateTokenCommand).build() {
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDC.js
var import_smithy_client10, commands, SSOOIDC;
var init_SSOOIDC = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDC.js"() {
    import_smithy_client10 = __toESM(require_dist_cjs13());
    init_CreateTokenCommand();
    init_SSOOIDCClient();
    commands = {
      CreateTokenCommand
    };
    SSOOIDC = class extends SSOOIDCClient {
    };
    (0, import_smithy_client10.createAggregatedClient)(commands, SSOOIDC);
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/index.js
var init_commands = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/index.js"() {
    init_CreateTokenCommand();
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/index.js
var init_models = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/index.js"() {
    init_models_0();
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/index.js
var init_sso_oidc = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/index.js"() {
    init_SSOOIDCClient();
    init_SSOOIDC();
    init_commands();
    init_models();
    init_SSOOIDCServiceException();
  }
});
init_sso_oidc();
var export_$Command = import_smithy_client9.Command;
var export___Client = import_smithy_client5.Client;
export {
  export_$Command as $Command,
  AccessDeniedException,
  AccessDeniedExceptionReason,
  AuthorizationPendingException,
  CreateTokenCommand,
  CreateTokenRequestFilterSensitiveLog,
  CreateTokenResponseFilterSensitiveLog,
  ExpiredTokenException,
  InternalServerException,
  InvalidClientException,
  InvalidGrantException,
  InvalidRequestException,
  InvalidRequestExceptionReason,
  InvalidScopeException,
  SSOOIDC,
  SSOOIDCClient,
  SSOOIDCServiceException,
  SlowDownException,
  UnauthorizedClientException,
  UnsupportedGrantTypeException,
  export___Client as __Client
};
//# sourceMappingURL=sso-oidc-O6Z373YX.js.map
