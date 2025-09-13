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
  parseXmlBody,
  parseXmlErrorBody,
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
import {
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
  emitWarningIfUnsupportedVersion,
  init_client,
  setCredentialFeature
} from "./chunk-GV46K7LA.js";
import {
  __esm,
  __export,
  __toESM
} from "./chunk-PJNRM37X.js";

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sts",
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
var import_util_middleware, defaultSTSHttpAuthSchemeParametersProvider, defaultSTSHttpAuthSchemeProvider, resolveStsAuthConfig, resolveHttpAuthSchemeConfig;
var init_httpAuthSchemeProvider = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js"() {
    init_dist_es2();
    import_util_middleware = __toESM(require_dist_cjs5());
    init_STSClient();
    defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, import_util_middleware.getSmithyContext)(context).operation,
        region: await (0, import_util_middleware.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    defaultSTSHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "AssumeRoleWithWebIdentity": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    resolveStsAuthConfig = (input) => Object.assign(input, {
      stsClientCtor: STSClient
    });
    resolveHttpAuthSchemeConfig = (config) => {
      const config_0 = resolveStsAuthConfig(config);
      const config_1 = resolveAwsSdkSigV4Config(config_0);
      return Object.assign(config_1, {
        authSchemePreference: (0, import_util_middleware.normalizeProvider)(config.authSchemePreference ?? [])
      });
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js
var resolveClientEndpointParameters, commonParams;
var init_EndpointParameters = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
      });
    };
    commonParams = {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/ruleset.js
var F, G, H, I, J, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, _data, ruleSet;
var init_ruleset = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/ruleset.js"() {
    F = "required";
    G = "type";
    H = "fn";
    I = "argv";
    J = "ref";
    a = false;
    b = true;
    c = "booleanEquals";
    d = "stringEquals";
    e = "sigv4";
    f = "sts";
    g = "us-east-1";
    h = "endpoint";
    i = "https://sts.{Region}.{PartitionResult#dnsSuffix}";
    j = "tree";
    k = "error";
    l = "getAttr";
    m = { [F]: false, [G]: "string" };
    n = { [F]: true, "default": false, [G]: "boolean" };
    o = { [J]: "Endpoint" };
    p = { [H]: "isSet", [I]: [{ [J]: "Region" }] };
    q = { [J]: "Region" };
    r = { [H]: "aws.partition", [I]: [q], "assign": "PartitionResult" };
    s = { [J]: "UseFIPS" };
    t = { [J]: "UseDualStack" };
    u = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e, "signingName": f, "signingRegion": g }] }, "headers": {} };
    v = {};
    w = { "conditions": [{ [H]: d, [I]: [q, "aws-global"] }], [h]: u, [G]: h };
    x = { [H]: c, [I]: [s, true] };
    y = { [H]: c, [I]: [t, true] };
    z = { [H]: l, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] };
    A = { [J]: "PartitionResult" };
    B = { [H]: c, [I]: [true, { [H]: l, [I]: [A, "supportsDualStack"] }] };
    C = [{ [H]: "isSet", [I]: [o] }];
    D = [x];
    E = [y];
    _data = { version: "1.0", parameters: { Region: m, UseDualStack: n, UseFIPS: n, Endpoint: m, UseGlobalEndpoint: n }, rules: [{ conditions: [{ [H]: c, [I]: [{ [J]: "UseGlobalEndpoint" }, b] }, { [H]: "not", [I]: C }, p, r, { [H]: c, [I]: [s, a] }, { [H]: c, [I]: [t, a] }], rules: [{ conditions: [{ [H]: d, [I]: [q, "ap-northeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-south-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-2"] }], endpoint: u, [G]: h }, w, { conditions: [{ [H]: d, [I]: [q, "ca-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-north-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-3"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "sa-east-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, g] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-east-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-2"] }], endpoint: u, [G]: h }, { endpoint: { url: i, properties: { authSchemes: [{ name: e, signingName: f, signingRegion: "{Region}" }] }, headers: v }, [G]: h }], [G]: j }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k }, { endpoint: { url: o, properties: v, headers: v }, [G]: h }], [G]: j }, { conditions: [p], rules: [{ conditions: [r], rules: [{ conditions: [x, y], rules: [{ conditions: [{ [H]: c, [I]: [b, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k }], [G]: j }, { conditions: D, rules: [{ conditions: [{ [H]: c, [I]: [z, b] }], rules: [{ conditions: [{ [H]: d, [I]: [{ [H]: l, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v, headers: v }, [G]: h }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k }], [G]: j }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k }], [G]: j }, w, { endpoint: { url: i, properties: v, headers: v }, [G]: h }], [G]: j }], [G]: j }, { error: "Invalid Configuration: Missing Region", [G]: k }] };
    ruleSet = _data;
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js
var import_util_endpoints, import_util_endpoints2, cache, defaultEndpointResolver;
var init_endpointResolver = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js"() {
    import_util_endpoints = __toESM(require_dist_cjs12());
    import_util_endpoints2 = __toESM(require_dist_cjs10());
    init_ruleset();
    cache = new import_util_endpoints2.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
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

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js
var import_smithy_client, import_url_parser, import_util_base64, import_util_utf8, getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js"() {
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
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? import_util_base64.fromBase64,
        base64Encoder: config?.base64Encoder ?? import_util_base64.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSTSHttpAuthSchemeProvider,
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
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? import_url_parser.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? import_util_utf8.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? import_util_utf8.toUtf8
      };
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js
var import_util_user_agent_node, import_config_resolver, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_util_body_length_node, import_util_retry, import_smithy_client2, import_util_defaults_mode_node, import_smithy_client3, getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js"() {
    init_package();
    init_dist_es2();
    import_util_user_agent_node = __toESM(require_dist_cjs21());
    import_config_resolver = __toESM(require_dist_cjs15());
    init_dist_es();
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
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await config.credentialDefaultProvider(idProps?.__config || {})()),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new NoAuthSigner()
          }
        ],
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

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js"() {
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

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js
var import_region_config_resolver, import_protocol_http, import_smithy_client4, resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js"() {
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

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_middleware_content_length, import_middleware_endpoint, import_middleware_retry2, import_smithy_client5, STSClient;
var init_STSClient = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js"() {
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
    STSClient = class extends import_smithy_client5.Client {
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
          httpAuthSchemeParametersProvider: defaultSTSHttpAuthSchemeParametersProvider,
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

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js
var import_smithy_client6, STSServiceException;
var init_STSServiceException = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js"() {
    import_smithy_client6 = __toESM(require_dist_cjs13());
    STSServiceException = class _STSServiceException extends import_smithy_client6.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _STSServiceException.prototype);
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js
var import_smithy_client7, CredentialsFilterSensitiveLog, AssumeRoleResponseFilterSensitiveLog, ExpiredTokenException, MalformedPolicyDocumentException, PackedPolicyTooLargeException, RegionDisabledException, IDPRejectedClaimException, InvalidIdentityTokenException, AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog, IDPCommunicationErrorException;
var init_models_0 = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js"() {
    import_smithy_client7 = __toESM(require_dist_cjs13());
    init_STSServiceException();
    CredentialsFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.SecretAccessKey && { SecretAccessKey: import_smithy_client7.SENSITIVE_STRING }
    });
    AssumeRoleResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    });
    ExpiredTokenException = class _ExpiredTokenException extends STSServiceException {
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
      }
    };
    MalformedPolicyDocumentException = class _MalformedPolicyDocumentException extends STSServiceException {
      name = "MalformedPolicyDocumentException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _MalformedPolicyDocumentException.prototype);
      }
    };
    PackedPolicyTooLargeException = class _PackedPolicyTooLargeException extends STSServiceException {
      name = "PackedPolicyTooLargeException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _PackedPolicyTooLargeException.prototype);
      }
    };
    RegionDisabledException = class _RegionDisabledException extends STSServiceException {
      name = "RegionDisabledException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _RegionDisabledException.prototype);
      }
    };
    IDPRejectedClaimException = class _IDPRejectedClaimException extends STSServiceException {
      name = "IDPRejectedClaimException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _IDPRejectedClaimException.prototype);
      }
    };
    InvalidIdentityTokenException = class _InvalidIdentityTokenException extends STSServiceException {
      name = "InvalidIdentityTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidIdentityTokenException.prototype);
      }
    };
    AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.WebIdentityToken && { WebIdentityToken: import_smithy_client7.SENSITIVE_STRING }
    });
    AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    });
    IDPCommunicationErrorException = class _IDPCommunicationErrorException extends STSServiceException {
      name = "IDPCommunicationErrorException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _IDPCommunicationErrorException.prototype);
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/protocols/Aws_query.js
var import_protocol_http2, import_smithy_client8, se_AssumeRoleCommand, se_AssumeRoleWithWebIdentityCommand, de_AssumeRoleCommand, de_AssumeRoleWithWebIdentityCommand, de_CommandError, de_ExpiredTokenExceptionRes, de_IDPCommunicationErrorExceptionRes, de_IDPRejectedClaimExceptionRes, de_InvalidIdentityTokenExceptionRes, de_MalformedPolicyDocumentExceptionRes, de_PackedPolicyTooLargeExceptionRes, de_RegionDisabledExceptionRes, se_AssumeRoleRequest, se_AssumeRoleWithWebIdentityRequest, se_policyDescriptorListType, se_PolicyDescriptorType, se_ProvidedContext, se_ProvidedContextsListType, se_Tag, se_tagKeyListType, se_tagListType, de_AssumedRoleUser, de_AssumeRoleResponse, de_AssumeRoleWithWebIdentityResponse, de_Credentials, de_ExpiredTokenException, de_IDPCommunicationErrorException, de_IDPRejectedClaimException, de_InvalidIdentityTokenException, de_MalformedPolicyDocumentException, de_PackedPolicyTooLargeException, de_RegionDisabledException, deserializeMetadata, throwDefaultError, buildHttpRpcRequest, SHARED_HEADERS, _, _A, _AKI, _AR, _ARI, _ARU, _ARWWI, _Ar, _Au, _C, _CA, _DS, _E, _EI, _K, _P, _PA, _PAr, _PC, _PI, _PPS, _Pr, _RA, _RSN, _SAK, _SFWIT, _SI, _SN, _ST, _T, _TC, _TTK, _V, _Va, _WIT, _a, _m, buildFormUrlencodedString, loadQueryErrorCode;
var init_Aws_query = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/protocols/Aws_query.js"() {
    init_dist_es2();
    import_protocol_http2 = __toESM(require_dist_cjs());
    import_smithy_client8 = __toESM(require_dist_cjs13());
    init_models_0();
    init_STSServiceException();
    se_AssumeRoleCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input, context),
        [_A]: _AR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    se_AssumeRoleWithWebIdentityCommand = async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input, context),
        [_A]: _ARWWI,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    };
    de_AssumeRoleCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    };
    de_AssumeRoleWithWebIdentityCommand = async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata(output),
        ...contents
      };
      return response;
    };
    de_CommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseXmlErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
          throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
          throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
          throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
          throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
          throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    };
    de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_ExpiredTokenException(body.Error, context);
      const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, body);
    };
    de_IDPCommunicationErrorExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPCommunicationErrorException(body.Error, context);
      const exception = new IDPCommunicationErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, body);
    };
    de_IDPRejectedClaimExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPRejectedClaimException(body.Error, context);
      const exception = new IDPRejectedClaimException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, body);
    };
    de_InvalidIdentityTokenExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidIdentityTokenException(body.Error, context);
      const exception = new InvalidIdentityTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, body);
    };
    de_MalformedPolicyDocumentExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
      const exception = new MalformedPolicyDocumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, body);
    };
    de_PackedPolicyTooLargeExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
      const exception = new PackedPolicyTooLargeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, body);
    };
    de_RegionDisabledExceptionRes = async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_RegionDisabledException(body.Error, context);
      const exception = new RegionDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client8.decorateServiceException)(exception, body);
    };
    se_AssumeRoleRequest = (input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_TTK] != null) {
        const memberEntries = se_tagKeyListType(input[_TTK], context);
        if (input[_TTK]?.length === 0) {
          entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `TransitiveTagKeys.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_EI] != null) {
        entries[_EI] = input[_EI];
      }
      if (input[_SN] != null) {
        entries[_SN] = input[_SN];
      }
      if (input[_TC] != null) {
        entries[_TC] = input[_TC];
      }
      if (input[_SI] != null) {
        entries[_SI] = input[_SI];
      }
      if (input[_PC] != null) {
        const memberEntries = se_ProvidedContextsListType(input[_PC], context);
        if (input[_PC]?.length === 0) {
          entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ProvidedContexts.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    };
    se_AssumeRoleWithWebIdentityRequest = (input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_WIT] != null) {
        entries[_WIT] = input[_WIT];
      }
      if (input[_PI] != null) {
        entries[_PI] = input[_PI];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      return entries;
    };
    se_policyDescriptorListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    se_PolicyDescriptorType = (input, context) => {
      const entries = {};
      if (input[_a] != null) {
        entries[_a] = input[_a];
      }
      return entries;
    };
    se_ProvidedContext = (input, context) => {
      const entries = {};
      if (input[_PAr] != null) {
        entries[_PAr] = input[_PAr];
      }
      if (input[_CA] != null) {
        entries[_CA] = input[_CA];
      }
      return entries;
    };
    se_ProvidedContextsListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_ProvidedContext(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    se_Tag = (input, context) => {
      const entries = {};
      if (input[_K] != null) {
        entries[_K] = input[_K];
      }
      if (input[_Va] != null) {
        entries[_Va] = input[_Va];
      }
      return entries;
    };
    se_tagKeyListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    };
    se_tagListType = (input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    };
    de_AssumedRoleUser = (output, context) => {
      const contents = {};
      if (output[_ARI] != null) {
        contents[_ARI] = (0, import_smithy_client8.expectString)(output[_ARI]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = (0, import_smithy_client8.expectString)(output[_Ar]);
      }
      return contents;
    };
    de_AssumeRoleResponse = (output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = (0, import_smithy_client8.strictParseInt32)(output[_PPS]);
      }
      if (output[_SI] != null) {
        contents[_SI] = (0, import_smithy_client8.expectString)(output[_SI]);
      }
      return contents;
    };
    de_AssumeRoleWithWebIdentityResponse = (output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_SFWIT] != null) {
        contents[_SFWIT] = (0, import_smithy_client8.expectString)(output[_SFWIT]);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = (0, import_smithy_client8.strictParseInt32)(output[_PPS]);
      }
      if (output[_Pr] != null) {
        contents[_Pr] = (0, import_smithy_client8.expectString)(output[_Pr]);
      }
      if (output[_Au] != null) {
        contents[_Au] = (0, import_smithy_client8.expectString)(output[_Au]);
      }
      if (output[_SI] != null) {
        contents[_SI] = (0, import_smithy_client8.expectString)(output[_SI]);
      }
      return contents;
    };
    de_Credentials = (output, context) => {
      const contents = {};
      if (output[_AKI] != null) {
        contents[_AKI] = (0, import_smithy_client8.expectString)(output[_AKI]);
      }
      if (output[_SAK] != null) {
        contents[_SAK] = (0, import_smithy_client8.expectString)(output[_SAK]);
      }
      if (output[_ST] != null) {
        contents[_ST] = (0, import_smithy_client8.expectString)(output[_ST]);
      }
      if (output[_E] != null) {
        contents[_E] = (0, import_smithy_client8.expectNonNull)((0, import_smithy_client8.parseRfc3339DateTimeWithOffset)(output[_E]));
      }
      return contents;
    };
    de_ExpiredTokenException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client8.expectString)(output[_m]);
      }
      return contents;
    };
    de_IDPCommunicationErrorException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client8.expectString)(output[_m]);
      }
      return contents;
    };
    de_IDPRejectedClaimException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client8.expectString)(output[_m]);
      }
      return contents;
    };
    de_InvalidIdentityTokenException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client8.expectString)(output[_m]);
      }
      return contents;
    };
    de_MalformedPolicyDocumentException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client8.expectString)(output[_m]);
      }
      return contents;
    };
    de_PackedPolicyTooLargeException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client8.expectString)(output[_m]);
      }
      return contents;
    };
    de_RegionDisabledException = (output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client8.expectString)(output[_m]);
      }
      return contents;
    };
    deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    throwDefaultError = (0, import_smithy_client8.withBaseException)(STSServiceException);
    buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers
      };
      if (resolvedHostname !== void 0) {
        contents.hostname = resolvedHostname;
      }
      if (body !== void 0) {
        contents.body = body;
      }
      return new import_protocol_http2.HttpRequest(contents);
    };
    SHARED_HEADERS = {
      "content-type": "application/x-www-form-urlencoded"
    };
    _ = "2011-06-15";
    _A = "Action";
    _AKI = "AccessKeyId";
    _AR = "AssumeRole";
    _ARI = "AssumedRoleId";
    _ARU = "AssumedRoleUser";
    _ARWWI = "AssumeRoleWithWebIdentity";
    _Ar = "Arn";
    _Au = "Audience";
    _C = "Credentials";
    _CA = "ContextAssertion";
    _DS = "DurationSeconds";
    _E = "Expiration";
    _EI = "ExternalId";
    _K = "Key";
    _P = "Policy";
    _PA = "PolicyArns";
    _PAr = "ProviderArn";
    _PC = "ProvidedContexts";
    _PI = "ProviderId";
    _PPS = "PackedPolicySize";
    _Pr = "Provider";
    _RA = "RoleArn";
    _RSN = "RoleSessionName";
    _SAK = "SecretAccessKey";
    _SFWIT = "SubjectFromWebIdentityToken";
    _SI = "SourceIdentity";
    _SN = "SerialNumber";
    _ST = "SessionToken";
    _T = "Tags";
    _TC = "TokenCode";
    _TTK = "TransitiveTagKeys";
    _V = "Version";
    _Va = "Value";
    _WIT = "WebIdentityToken";
    _a = "arn";
    _m = "message";
    buildFormUrlencodedString = (formEntries) => Object.entries(formEntries).map(([key, value]) => (0, import_smithy_client8.extendedEncodeURIComponent)(key) + "=" + (0, import_smithy_client8.extendedEncodeURIComponent)(value)).join("&");
    loadQueryErrorCode = (output, data) => {
      if (data.Error?.Code !== void 0) {
        return data.Error.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js
var import_middleware_endpoint2, import_middleware_serde, import_smithy_client9, AssumeRoleCommand;
var init_AssumeRoleCommand = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js"() {
    import_middleware_endpoint2 = __toESM(require_dist_cjs18());
    import_middleware_serde = __toESM(require_dist_cjs6());
    import_smithy_client9 = __toESM(require_dist_cjs13());
    init_EndpointParameters();
    init_models_0();
    init_Aws_query();
    AssumeRoleCommand = class extends import_smithy_client9.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
      return [
        (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint2.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, AssumeRoleResponseFilterSensitiveLog).ser(se_AssumeRoleCommand).de(de_AssumeRoleCommand).build() {
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js
var import_middleware_endpoint3, import_middleware_serde2, import_smithy_client10, AssumeRoleWithWebIdentityCommand;
var init_AssumeRoleWithWebIdentityCommand = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js"() {
    import_middleware_endpoint3 = __toESM(require_dist_cjs18());
    import_middleware_serde2 = __toESM(require_dist_cjs6());
    import_smithy_client10 = __toESM(require_dist_cjs13());
    init_EndpointParameters();
    init_models_0();
    init_Aws_query();
    AssumeRoleWithWebIdentityCommand = class extends import_smithy_client10.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o2) {
      return [
        (0, import_middleware_serde2.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint3.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog).ser(se_AssumeRoleWithWebIdentityCommand).de(de_AssumeRoleWithWebIdentityCommand).build() {
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js
var import_smithy_client11, commands, STS;
var init_STS = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js"() {
    import_smithy_client11 = __toESM(require_dist_cjs13());
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    init_STSClient();
    commands = {
      AssumeRoleCommand,
      AssumeRoleWithWebIdentityCommand
    };
    STS = class extends STSClient {
    };
    (0, import_smithy_client11.createAggregatedClient)(commands, STS);
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js
var init_commands = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js"() {
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/index.js
var init_models = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/index.js"() {
    init_models_0();
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js
var import_region_config_resolver2, getAccountIdFromAssumedRoleUser, resolveRegion, getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity, isH2;
var init_defaultStsRoleAssumers = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js"() {
    init_client();
    import_region_config_resolver2 = __toESM(require_dist_cjs25());
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    getAccountIdFromAssumedRoleUser = (assumedRoleUser) => {
      if (typeof assumedRoleUser?.Arn === "string") {
        const arnComponents = assumedRoleUser.Arn.split(":");
        if (arnComponents.length > 4 && arnComponents[4] !== "") {
          return arnComponents[4];
        }
      }
      return void 0;
    };
    resolveRegion = async (_region, _parentRegion, credentialProviderLogger, loaderConfig = {}) => {
      const region = typeof _region === "function" ? await _region() : _region;
      const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
      const stsDefaultRegion = await (0, import_region_config_resolver2.stsRegionDefaultResolver)(loaderConfig)();
      credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (credential provider clientConfig)`, `${parentRegion} (contextual client)`, `${stsDefaultRegion} (STS default: AWS_REGION, profile region, or us-east-1)`);
      return region ?? parentRegion ?? stsDefaultRegion;
    };
    getDefaultRoleAssumer = (stsOptions, STSClient2) => {
      let stsClient;
      let closureSourceCreds;
      return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
          const { logger = stsOptions?.parentClientConfig?.logger, profile = stsOptions?.parentClientConfig?.profile, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = stsOptions?.parentClientConfig?.userAgentAppId } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger, {
            logger,
            profile
          });
          const isCompatibleRequestHandler = !isH2(requestHandler);
          stsClient = new STSClient2({
            ...stsOptions,
            userAgentAppId,
            profile,
            credentialDefaultProvider: () => async () => closureSourceCreds,
            region: resolvedRegion,
            requestHandler: isCompatibleRequestHandler ? requestHandler : void 0,
            logger
          });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
          ...accountId && { accountId }
        };
        setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE", "i");
        return credentials;
      };
    };
    getDefaultRoleAssumerWithWebIdentity = (stsOptions, STSClient2) => {
      let stsClient;
      return async (params) => {
        if (!stsClient) {
          const { logger = stsOptions?.parentClientConfig?.logger, profile = stsOptions?.parentClientConfig?.profile, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = stsOptions?.parentClientConfig?.userAgentAppId } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger, {
            logger,
            profile
          });
          const isCompatibleRequestHandler = !isH2(requestHandler);
          stsClient = new STSClient2({
            ...stsOptions,
            userAgentAppId,
            profile,
            region: resolvedRegion,
            requestHandler: isCompatibleRequestHandler ? requestHandler : void 0,
            logger
          });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
          ...accountId && { accountId }
        };
        if (accountId) {
          setCredentialFeature(credentials, "RESOLVED_ACCOUNT_ID", "T");
        }
        setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
        return credentials;
      };
    };
    isH2 = (requestHandler) => {
      return requestHandler?.metadata?.handlerProtocol === "h2";
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js
var getCustomizableStsClientCtor, getDefaultRoleAssumer2, getDefaultRoleAssumerWithWebIdentity2, decorateDefaultCredentialProvider;
var init_defaultRoleAssumers = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js"() {
    init_defaultStsRoleAssumers();
    init_STSClient();
    getCustomizableStsClientCtor = (baseCtor, customizations) => {
      if (!customizations)
        return baseCtor;
      else
        return class CustomizableSTSClient extends baseCtor {
          constructor(config) {
            super(config);
            for (const customization of customizations) {
              this.middlewareStack.use(customization);
            }
          }
        };
    };
    getDefaultRoleAssumer2 = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
    getDefaultRoleAssumerWithWebIdentity2 = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
    decorateDefaultCredentialProvider = (provider) => (input) => provider({
      roleAssumer: getDefaultRoleAssumer2(input),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
      ...input
    });
  }
});

// ../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js
var sts_exports = {};
__export(sts_exports, {
  AssumeRoleCommand: () => AssumeRoleCommand,
  AssumeRoleResponseFilterSensitiveLog: () => AssumeRoleResponseFilterSensitiveLog,
  AssumeRoleWithWebIdentityCommand: () => AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
  CredentialsFilterSensitiveLog: () => CredentialsFilterSensitiveLog,
  ExpiredTokenException: () => ExpiredTokenException,
  IDPCommunicationErrorException: () => IDPCommunicationErrorException,
  IDPRejectedClaimException: () => IDPRejectedClaimException,
  InvalidIdentityTokenException: () => InvalidIdentityTokenException,
  MalformedPolicyDocumentException: () => MalformedPolicyDocumentException,
  PackedPolicyTooLargeException: () => PackedPolicyTooLargeException,
  RegionDisabledException: () => RegionDisabledException,
  STS: () => STS,
  STSClient: () => STSClient,
  STSServiceException: () => STSServiceException,
  __Client: () => import_smithy_client5.Client,
  decorateDefaultCredentialProvider: () => decorateDefaultCredentialProvider,
  getDefaultRoleAssumer: () => getDefaultRoleAssumer2,
  getDefaultRoleAssumerWithWebIdentity: () => getDefaultRoleAssumerWithWebIdentity2
});
var init_sts = __esm({
  "../node_modules/.pnpm/@aws-sdk+nested-clients@3.922.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js"() {
    init_STSClient();
    init_STS();
    init_commands();
    init_models();
    init_defaultRoleAssumers();
    init_STSServiceException();
  }
});

export {
  import_smithy_client5 as import_smithy_client,
  STSClient,
  STSServiceException,
  CredentialsFilterSensitiveLog,
  AssumeRoleResponseFilterSensitiveLog,
  ExpiredTokenException,
  MalformedPolicyDocumentException,
  PackedPolicyTooLargeException,
  RegionDisabledException,
  IDPRejectedClaimException,
  InvalidIdentityTokenException,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
  IDPCommunicationErrorException,
  AssumeRoleCommand,
  AssumeRoleWithWebIdentityCommand,
  STS,
  getDefaultRoleAssumer2 as getDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity2 as getDefaultRoleAssumerWithWebIdentity,
  decorateDefaultCredentialProvider,
  sts_exports,
  init_sts
};
//# sourceMappingURL=chunk-MQY7VSDB.js.map
