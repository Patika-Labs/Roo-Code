import {
  dist_es_exports,
  dist_es_exports2,
  httpAuthSchemes_exports,
  init_dist_es,
  init_dist_es2,
  init_httpAuthSchemes,
  require_dist_cjs as require_dist_cjs2,
  require_dist_cjs10 as require_dist_cjs20,
  require_dist_cjs11 as require_dist_cjs21,
  require_dist_cjs12 as require_dist_cjs22,
  require_dist_cjs13 as require_dist_cjs23,
  require_dist_cjs14 as require_dist_cjs24,
  require_dist_cjs15 as require_dist_cjs25,
  require_dist_cjs16 as require_dist_cjs26,
  require_dist_cjs17 as require_dist_cjs27,
  require_dist_cjs2 as require_dist_cjs3,
  require_dist_cjs3 as require_dist_cjs4,
  require_dist_cjs4 as require_dist_cjs6,
  require_dist_cjs5 as require_dist_cjs10,
  require_dist_cjs6 as require_dist_cjs12,
  require_dist_cjs7 as require_dist_cjs15,
  require_dist_cjs8 as require_dist_cjs16,
  require_dist_cjs9 as require_dist_cjs17
} from "./chunk-NN3GEU7U.js";
import {
  require_dist_cjs as require_dist_cjs11,
  require_dist_cjs2 as require_dist_cjs19
} from "./chunk-PZCJD5GR.js";
import {
  require_dist_cjs as require_dist_cjs18
} from "./chunk-WPKHEWHD.js";
import {
  init_tslib_es6,
  require_dist_cjs,
  require_dist_cjs11 as require_dist_cjs14,
  require_dist_cjs2 as require_dist_cjs5,
  require_dist_cjs3 as require_dist_cjs8,
  require_dist_cjs6 as require_dist_cjs9,
  tslib_es6_exports
} from "./chunk-TYZDO54P.js";
import {
  require_dist_cjs3 as require_dist_cjs7
} from "./chunk-PARUIAYX.js";
import {
  client_exports,
  init_client
} from "./chunk-GV46K7LA.js";
import {
  require_dist_cjs as require_dist_cjs13
} from "./chunk-46Y7YWVF.js";
import {
  __commonJS,
  __require,
  __toCommonJS
} from "./chunk-PJNRM37X.js";

// ../node_modules/.pnpm/@aws-sdk+token-providers@3.922.0/node_modules/@aws-sdk/token-providers/dist-cjs/index.js
var require_dist_cjs28 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+token-providers@3.922.0/node_modules/@aws-sdk/token-providers/dist-cjs/index.js"(exports) {
    "use strict";
    var client = (init_client(), __toCommonJS(client_exports));
    var httpAuthSchemes = (init_httpAuthSchemes(), __toCommonJS(httpAuthSchemes_exports));
    var propertyProvider = require_dist_cjs13();
    var sharedIniFileLoader = require_dist_cjs18();
    var fs = __require("fs");
    var fromEnvSigningName = ({ logger, signingName } = {}) => async () => {
      logger?.debug?.("@aws-sdk/token-providers - fromEnvSigningName");
      if (!signingName) {
        throw new propertyProvider.TokenProviderError("Please pass 'signingName' to compute environment variable key", { logger });
      }
      const bearerTokenKey = httpAuthSchemes.getBearerTokenEnvKey(signingName);
      if (!(bearerTokenKey in process.env)) {
        throw new propertyProvider.TokenProviderError(`Token not present in '${bearerTokenKey}' environment variable`, { logger });
      }
      const token = { token: process.env[bearerTokenKey] };
      client.setTokenFeature(token, "BEARER_SERVICE_ENV_VARS", "3");
      return token;
    };
    var EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
    var REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
    var getSsoOidcClient = async (ssoRegion, init = {}) => {
      const { SSOOIDCClient } = await import("./sso-oidc-O6Z373YX.js");
      const coalesce = (prop) => init.clientConfig?.[prop] ?? init.parentClientConfig?.[prop];
      const ssoOidcClient = new SSOOIDCClient(Object.assign({}, init.clientConfig ?? {}, {
        region: ssoRegion ?? init.clientConfig?.region,
        logger: coalesce("logger"),
        userAgentAppId: coalesce("userAgentAppId")
      }));
      return ssoOidcClient;
    };
    var getNewSsoOidcToken = async (ssoToken, ssoRegion, init = {}) => {
      const { CreateTokenCommand } = await import("./sso-oidc-O6Z373YX.js");
      const ssoOidcClient = await getSsoOidcClient(ssoRegion, init);
      return ssoOidcClient.send(new CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token"
      }));
    };
    var validateTokenExpiry = (token) => {
      if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new propertyProvider.TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
      }
    };
    var validateTokenKey = (key, value, forRefresh = false) => {
      if (typeof value === "undefined") {
        throw new propertyProvider.TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
      }
    };
    var { writeFile } = fs.promises;
    var writeSSOTokenToFile = (id, ssoToken) => {
      const tokenFilepath = sharedIniFileLoader.getSSOTokenFilepath(id);
      const tokenString = JSON.stringify(ssoToken, null, 2);
      return writeFile(tokenFilepath, tokenString);
    };
    var lastRefreshAttemptTime = /* @__PURE__ */ new Date(0);
    var fromSso = (_init = {}) => async ({ callerClientConfig } = {}) => {
      const init = {
        ..._init,
        parentClientConfig: {
          ...callerClientConfig,
          ..._init.parentClientConfig
        }
      };
      init.logger?.debug("@aws-sdk/token-providers - fromSso");
      const profiles = await sharedIniFileLoader.parseKnownFiles(init);
      const profileName = sharedIniFileLoader.getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      });
      const profile = profiles[profileName];
      if (!profile) {
        throw new propertyProvider.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
      } else if (!profile["sso_session"]) {
        throw new propertyProvider.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
      }
      const ssoSessionName = profile["sso_session"];
      const ssoSessions = await sharedIniFileLoader.loadSsoSessionData(init);
      const ssoSession = ssoSessions[ssoSessionName];
      if (!ssoSession) {
        throw new propertyProvider.TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
      }
      for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
          throw new propertyProvider.TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
      }
      ssoSession["sso_start_url"];
      const ssoRegion = ssoSession["sso_region"];
      let ssoToken;
      try {
        ssoToken = await sharedIniFileLoader.getSSOTokenFromFile(ssoSessionName);
      } catch (e) {
        throw new propertyProvider.TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
      }
      validateTokenKey("accessToken", ssoToken.accessToken);
      validateTokenKey("expiresAt", ssoToken.expiresAt);
      const { accessToken, expiresAt } = ssoToken;
      const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
      if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
      }
      if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
      validateTokenKey("clientId", ssoToken.clientId, true);
      validateTokenKey("clientSecret", ssoToken.clientSecret, true);
      validateTokenKey("refreshToken", ssoToken.refreshToken, true);
      try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion, init);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
        try {
          await writeSSOTokenToFile(ssoSessionName, {
            ...ssoToken,
            accessToken: newSsoOidcToken.accessToken,
            expiresAt: newTokenExpiration.toISOString(),
            refreshToken: newSsoOidcToken.refreshToken
          });
        } catch (error) {
        }
        return {
          token: newSsoOidcToken.accessToken,
          expiration: newTokenExpiration
        };
      } catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
    };
    var fromStatic = ({ token, logger }) => async () => {
      logger?.debug("@aws-sdk/token-providers - fromStatic");
      if (!token || !token.token) {
        throw new propertyProvider.TokenProviderError(`Please pass a valid token to fromStatic`, false);
      }
      return token;
    };
    var nodeProvider = (init = {}) => propertyProvider.memoize(propertyProvider.chain(fromSso(init), async () => {
      throw new propertyProvider.TokenProviderError("Could not load token from any providers", false);
    }), (token) => token.expiration !== void 0 && token.expiration.getTime() - Date.now() < 3e5, (token) => token.expiration !== void 0);
    exports.fromEnvSigningName = fromEnvSigningName;
    exports.fromSso = fromSso;
    exports.fromStatic = fromStatic;
    exports.nodeProvider = nodeProvider;
  }
});

// ../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/auth/httpAuthSchemeProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveHttpAuthSchemeConfig = exports.defaultSSOHttpAuthSchemeProvider = exports.defaultSSOHttpAuthSchemeParametersProvider = void 0;
    var core_1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var util_middleware_1 = require_dist_cjs5();
    var defaultSSOHttpAuthSchemeParametersProvider = async (config, context, input) => {
      return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    };
    exports.defaultSSOHttpAuthSchemeParametersProvider = defaultSSOHttpAuthSchemeParametersProvider;
    function createAwsAuthSigv4HttpAuthOption(authParameters) {
      return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
          name: "awsssoportal",
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
    var defaultSSOHttpAuthSchemeProvider = (authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "GetRoleCredentials": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "ListAccountRoles": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "ListAccounts": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        case "Logout": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    };
    exports.defaultSSOHttpAuthSchemeProvider = defaultSSOHttpAuthSchemeProvider;
    var resolveHttpAuthSchemeConfig = (config) => {
      const config_0 = (0, core_1.resolveAwsSdkSigV4Config)(config);
      return Object.assign(config_0, {
        authSchemePreference: (0, util_middleware_1.normalizeProvider)(config.authSchemePreference ?? [])
      });
    };
    exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
  }
});

// ../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/package.json
var require_package = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/package.json"(exports, module) {
    module.exports = {
      name: "@aws-sdk/client-sso",
      description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
      version: "3.922.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sso",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.922.0",
        "@aws-sdk/middleware-host-header": "3.922.0",
        "@aws-sdk/middleware-logger": "3.922.0",
        "@aws-sdk/middleware-recursion-detection": "3.922.0",
        "@aws-sdk/middleware-user-agent": "3.922.0",
        "@aws-sdk/region-config-resolver": "3.922.0",
        "@aws-sdk/types": "3.922.0",
        "@aws-sdk/util-endpoints": "3.922.0",
        "@aws-sdk/util-user-agent-browser": "3.922.0",
        "@aws-sdk/util-user-agent-node": "3.922.0",
        "@smithy/config-resolver": "^4.4.1",
        "@smithy/core": "^3.17.2",
        "@smithy/fetch-http-handler": "^5.3.5",
        "@smithy/hash-node": "^4.2.4",
        "@smithy/invalid-dependency": "^4.2.4",
        "@smithy/middleware-content-length": "^4.2.4",
        "@smithy/middleware-endpoint": "^4.3.6",
        "@smithy/middleware-retry": "^4.4.6",
        "@smithy/middleware-serde": "^4.2.4",
        "@smithy/middleware-stack": "^4.2.4",
        "@smithy/node-config-provider": "^4.3.4",
        "@smithy/node-http-handler": "^4.4.4",
        "@smithy/protocol-http": "^5.3.4",
        "@smithy/smithy-client": "^4.9.2",
        "@smithy/types": "^4.8.1",
        "@smithy/url-parser": "^4.2.4",
        "@smithy/util-base64": "^4.3.0",
        "@smithy/util-body-length-browser": "^4.2.0",
        "@smithy/util-body-length-node": "^4.2.1",
        "@smithy/util-defaults-mode-browser": "^4.3.5",
        "@smithy/util-defaults-mode-node": "^4.2.7",
        "@smithy/util-endpoints": "^3.2.4",
        "@smithy/util-middleware": "^4.2.4",
        "@smithy/util-retry": "^4.2.4",
        "@smithy/util-utf8": "^4.2.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node18": "18.2.4",
        "@types/node": "^18.19.69",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3"
      },
      engines: {
        node: ">=18.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso"
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/ruleset.js
var require_ruleset = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/ruleset.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ruleSet = void 0;
    var u = "required";
    var v = "fn";
    var w = "argv";
    var x = "ref";
    var a = true;
    var b = "isSet";
    var c = "booleanEquals";
    var d = "error";
    var e = "endpoint";
    var f = "tree";
    var g = "PartitionResult";
    var h = "getAttr";
    var i = { [u]: false, "type": "string" };
    var j = { [u]: true, "default": false, "type": "boolean" };
    var k = { [x]: "Endpoint" };
    var l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
    var m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
    var n = {};
    var o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] };
    var p = { [x]: g };
    var q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] };
    var r = [l];
    var s = [m];
    var t = [{ [x]: "Region" }];
    var _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
    exports.ruleSet = _data;
  }
});

// ../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/endpointResolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs12();
    var util_endpoints_2 = require_dist_cjs10();
    var ruleset_1 = require_ruleset();
    var cache = new util_endpoints_2.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    var defaultEndpointResolver = (endpointParams, context = {}) => {
      return cache.get(endpointParams, () => (0, util_endpoints_2.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      }));
    };
    exports.defaultEndpointResolver = defaultEndpointResolver;
    util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;
  }
});

// ../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.shared.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var core_1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var core_2 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var smithy_client_1 = require_dist_cjs14();
    var url_parser_1 = require_dist_cjs11();
    var util_base64_1 = require_dist_cjs8();
    var util_utf8_1 = require_dist_cjs7();
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider();
    var endpointResolver_1 = require_endpointResolver();
    var getRuntimeConfig = (config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
            signer: new core_1.AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new core_2.NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// ../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.js
var require_runtimeConfig = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package());
    var core_1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var util_user_agent_node_1 = require_dist_cjs23();
    var config_resolver_1 = require_dist_cjs16();
    var hash_node_1 = require_dist_cjs24();
    var middleware_retry_1 = require_dist_cjs22();
    var node_config_provider_1 = require_dist_cjs19();
    var node_http_handler_1 = require_dist_cjs9();
    var util_body_length_node_1 = require_dist_cjs25();
    var util_retry_1 = require_dist_cjs21();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared();
    var smithy_client_1 = require_dist_cjs14();
    var util_defaults_mode_node_1 = require_dist_cjs26();
    var smithy_client_2 = require_dist_cjs14();
    var getRuntimeConfig = (config) => {
      (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, node_config_provider_1.loadConfig)(core_1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE
        }, config),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, node_config_provider_1.loadConfig)(util_user_agent_node_1.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    };
    exports.getRuntimeConfig = getRuntimeConfig;
  }
});

// ../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/index.js
var require_dist_cjs29 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+client-sso@3.922.0/node_modules/@aws-sdk/client-sso/dist-cjs/index.js"(exports) {
    "use strict";
    var middlewareHostHeader = require_dist_cjs2();
    var middlewareLogger = require_dist_cjs3();
    var middlewareRecursionDetection = require_dist_cjs4();
    var middlewareUserAgent = require_dist_cjs15();
    var configResolver = require_dist_cjs16();
    var core = (init_dist_es(), __toCommonJS(dist_es_exports));
    var middlewareContentLength = require_dist_cjs17();
    var middlewareEndpoint = require_dist_cjs20();
    var middlewareRetry = require_dist_cjs22();
    var smithyClient = require_dist_cjs14();
    var httpAuthSchemeProvider = require_httpAuthSchemeProvider();
    var runtimeConfig = require_runtimeConfig();
    var regionConfigResolver = require_dist_cjs27();
    var protocolHttp = require_dist_cjs();
    var middlewareSerde = require_dist_cjs6();
    var core$1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var resolveClientEndpointParameters = (options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal"
      });
    };
    var commonParams = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
    var getHttpAuthExtensionConfiguration = (runtimeConfig2) => {
      const _httpAuthSchemes = runtimeConfig2.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig2.httpAuthSchemeProvider;
      let _credentials = runtimeConfig2.credentials;
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
        setHttpAuthSchemeProvider(httpAuthSchemeProvider2) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider2;
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
    var resolveHttpAuthRuntimeConfig = (config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    };
    var resolveRuntimeExtensions = (runtimeConfig2, extensions) => {
      const extensionConfiguration = Object.assign(regionConfigResolver.getAwsRegionExtensionConfiguration(runtimeConfig2), smithyClient.getDefaultExtensionConfiguration(runtimeConfig2), protocolHttp.getHttpHandlerExtensionConfiguration(runtimeConfig2), getHttpAuthExtensionConfiguration(runtimeConfig2));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig2, regionConfigResolver.resolveAwsRegionExtensionConfiguration(extensionConfiguration), smithyClient.resolveDefaultRuntimeConfig(extensionConfiguration), protocolHttp.resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
    };
    var SSOClient = class extends smithyClient.Client {
      config;
      constructor(...[configuration]) {
        const _config_0 = runtimeConfig.getRuntimeConfig(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = middlewareUserAgent.resolveUserAgentConfig(_config_1);
        const _config_3 = middlewareRetry.resolveRetryConfig(_config_2);
        const _config_4 = configResolver.resolveRegionConfig(_config_3);
        const _config_5 = middlewareHostHeader.resolveHostHeaderConfig(_config_4);
        const _config_6 = middlewareEndpoint.resolveEndpointConfig(_config_5);
        const _config_7 = httpAuthSchemeProvider.resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use(middlewareUserAgent.getUserAgentPlugin(this.config));
        this.middlewareStack.use(middlewareRetry.getRetryPlugin(this.config));
        this.middlewareStack.use(middlewareContentLength.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middlewareHostHeader.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(middlewareLogger.getLoggerPlugin(this.config));
        this.middlewareStack.use(middlewareRecursionDetection.getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(core.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: httpAuthSchemeProvider.defaultSSOHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: async (config) => new core.DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          })
        }));
        this.middlewareStack.use(core.getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
    var SSOServiceException = class _SSOServiceException extends smithyClient.ServiceException {
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOServiceException.prototype);
      }
    };
    var InvalidRequestException = class _InvalidRequestException extends SSOServiceException {
      name = "InvalidRequestException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
      }
    };
    var ResourceNotFoundException = class _ResourceNotFoundException extends SSOServiceException {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
      }
    };
    var TooManyRequestsException = class _TooManyRequestsException extends SSOServiceException {
      name = "TooManyRequestsException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "TooManyRequestsException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
      }
    };
    var UnauthorizedException = class _UnauthorizedException extends SSOServiceException {
      name = "UnauthorizedException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "UnauthorizedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnauthorizedException.prototype);
      }
    };
    var GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: smithyClient.SENSITIVE_STRING }
    });
    var RoleCredentialsFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.secretAccessKey && { secretAccessKey: smithyClient.SENSITIVE_STRING },
      ...obj.sessionToken && { sessionToken: smithyClient.SENSITIVE_STRING }
    });
    var GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }
    });
    var ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: smithyClient.SENSITIVE_STRING }
    });
    var ListAccountsRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: smithyClient.SENSITIVE_STRING }
    });
    var LogoutRequestFilterSensitiveLog = (obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: smithyClient.SENSITIVE_STRING }
    });
    var se_GetRoleCredentialsCommand = async (input, context) => {
      const b = core.requestBuilder(input, context);
      const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b.bp("/federation/credentials");
      const query = smithyClient.map({
        [_rn]: [, smithyClient.expectNonNull(input[_rN], `roleName`)],
        [_ai]: [, smithyClient.expectNonNull(input[_aI], `accountId`)]
      });
      let body;
      b.m("GET").h(headers).q(query).b(body);
      return b.build();
    };
    var se_ListAccountRolesCommand = async (input, context) => {
      const b = core.requestBuilder(input, context);
      const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b.bp("/assignment/roles");
      const query = smithyClient.map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
        [_ai]: [, smithyClient.expectNonNull(input[_aI], `accountId`)]
      });
      let body;
      b.m("GET").h(headers).q(query).b(body);
      return b.build();
    };
    var se_ListAccountsCommand = async (input, context) => {
      const b = core.requestBuilder(input, context);
      const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b.bp("/assignment/accounts");
      const query = smithyClient.map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()]
      });
      let body;
      b.m("GET").h(headers).q(query).b(body);
      return b.build();
    };
    var se_LogoutCommand = async (input, context) => {
      const b = core.requestBuilder(input, context);
      const headers = smithyClient.map({}, smithyClient.isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b.bp("/logout");
      let body;
      b.m("POST").h(headers).b(body);
      return b.build();
    };
    var de_GetRoleCredentialsCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = smithyClient.map({
        $metadata: deserializeMetadata(output)
      });
      const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseJsonBody(output.body, context)), "body");
      const doc = smithyClient.take(data, {
        roleCredentials: smithyClient._json
      });
      Object.assign(contents, doc);
      return contents;
    };
    var de_ListAccountRolesCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = smithyClient.map({
        $metadata: deserializeMetadata(output)
      });
      const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseJsonBody(output.body, context)), "body");
      const doc = smithyClient.take(data, {
        nextToken: smithyClient.expectString,
        roleList: smithyClient._json
      });
      Object.assign(contents, doc);
      return contents;
    };
    var de_ListAccountsCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = smithyClient.map({
        $metadata: deserializeMetadata(output)
      });
      const data = smithyClient.expectNonNull(smithyClient.expectObject(await core$1.parseJsonBody(output.body, context)), "body");
      const doc = smithyClient.take(data, {
        accountList: smithyClient._json,
        nextToken: smithyClient.expectString
      });
      Object.assign(contents, doc);
      return contents;
    };
    var de_LogoutCommand = async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = smithyClient.map({
        $metadata: deserializeMetadata(output)
      });
      await smithyClient.collectBody(output.body, context);
      return contents;
    };
    var de_CommandError = async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await core$1.parseJsonErrorBody(output.body, context)
      };
      const errorCode = core$1.loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes(parsedOutput);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
          throw await de_TooManyRequestsExceptionRes(parsedOutput);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
          throw await de_UnauthorizedExceptionRes(parsedOutput);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    };
    var throwDefaultError = smithyClient.withBaseException(SSOServiceException);
    var de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
      const contents = smithyClient.map({});
      const data = parsedOutput.body;
      const doc = smithyClient.take(data, {
        message: smithyClient.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return smithyClient.decorateServiceException(exception, parsedOutput.body);
    };
    var de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
      const contents = smithyClient.map({});
      const data = parsedOutput.body;
      const doc = smithyClient.take(data, {
        message: smithyClient.expectString
      });
      Object.assign(contents, doc);
      const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return smithyClient.decorateServiceException(exception, parsedOutput.body);
    };
    var de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
      const contents = smithyClient.map({});
      const data = parsedOutput.body;
      const doc = smithyClient.take(data, {
        message: smithyClient.expectString
      });
      Object.assign(contents, doc);
      const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return smithyClient.decorateServiceException(exception, parsedOutput.body);
    };
    var de_UnauthorizedExceptionRes = async (parsedOutput, context) => {
      const contents = smithyClient.map({});
      const data = parsedOutput.body;
      const doc = smithyClient.take(data, {
        message: smithyClient.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return smithyClient.decorateServiceException(exception, parsedOutput.body);
    };
    var deserializeMetadata = (output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    });
    var _aI = "accountId";
    var _aT = "accessToken";
    var _ai = "account_id";
    var _mR = "maxResults";
    var _mr = "max_result";
    var _nT = "nextToken";
    var _nt = "next_token";
    var _rN = "roleName";
    var _rn = "role_name";
    var _xasbt = "x-amz-sso_bearer_token";
    var GetRoleCredentialsCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(GetRoleCredentialsRequestFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog).ser(se_GetRoleCredentialsCommand).de(de_GetRoleCredentialsCommand).build() {
    };
    var ListAccountRolesCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(ListAccountRolesRequestFilterSensitiveLog, void 0).ser(se_ListAccountRolesCommand).de(de_ListAccountRolesCommand).build() {
    };
    var ListAccountsCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(ListAccountsRequestFilterSensitiveLog, void 0).ser(se_ListAccountsCommand).de(de_ListAccountsCommand).build() {
    };
    var LogoutCommand = class extends smithyClient.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
      return [
        middlewareSerde.getSerdePlugin(config, this.serialize, this.deserialize),
        middlewareEndpoint.getEndpointPlugin(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(LogoutRequestFilterSensitiveLog, void 0).ser(se_LogoutCommand).de(de_LogoutCommand).build() {
    };
    var commands = {
      GetRoleCredentialsCommand,
      ListAccountRolesCommand,
      ListAccountsCommand,
      LogoutCommand
    };
    var SSO = class extends SSOClient {
    };
    smithyClient.createAggregatedClient(commands, SSO);
    var paginateListAccountRoles = core.createPaginator(SSOClient, ListAccountRolesCommand, "nextToken", "nextToken", "maxResults");
    var paginateListAccounts = core.createPaginator(SSOClient, ListAccountsCommand, "nextToken", "nextToken", "maxResults");
    Object.defineProperty(exports, "$Command", {
      enumerable: true,
      get: function() {
        return smithyClient.Command;
      }
    });
    Object.defineProperty(exports, "__Client", {
      enumerable: true,
      get: function() {
        return smithyClient.Client;
      }
    });
    exports.GetRoleCredentialsCommand = GetRoleCredentialsCommand;
    exports.GetRoleCredentialsRequestFilterSensitiveLog = GetRoleCredentialsRequestFilterSensitiveLog;
    exports.GetRoleCredentialsResponseFilterSensitiveLog = GetRoleCredentialsResponseFilterSensitiveLog;
    exports.InvalidRequestException = InvalidRequestException;
    exports.ListAccountRolesCommand = ListAccountRolesCommand;
    exports.ListAccountRolesRequestFilterSensitiveLog = ListAccountRolesRequestFilterSensitiveLog;
    exports.ListAccountsCommand = ListAccountsCommand;
    exports.ListAccountsRequestFilterSensitiveLog = ListAccountsRequestFilterSensitiveLog;
    exports.LogoutCommand = LogoutCommand;
    exports.LogoutRequestFilterSensitiveLog = LogoutRequestFilterSensitiveLog;
    exports.ResourceNotFoundException = ResourceNotFoundException;
    exports.RoleCredentialsFilterSensitiveLog = RoleCredentialsFilterSensitiveLog;
    exports.SSO = SSO;
    exports.SSOClient = SSOClient;
    exports.SSOServiceException = SSOServiceException;
    exports.TooManyRequestsException = TooManyRequestsException;
    exports.UnauthorizedException = UnauthorizedException;
    exports.paginateListAccountRoles = paginateListAccountRoles;
    exports.paginateListAccounts = paginateListAccounts;
  }
});

// ../node_modules/.pnpm/@aws-sdk+credential-provider-sso@3.922.0/node_modules/@aws-sdk/credential-provider-sso/dist-cjs/loadSso-CVy8iqsZ.js
var require_loadSso_CVy8iqsZ = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+credential-provider-sso@3.922.0/node_modules/@aws-sdk/credential-provider-sso/dist-cjs/loadSso-CVy8iqsZ.js"(exports) {
    "use strict";
    var clientSso = require_dist_cjs29();
    Object.defineProperty(exports, "GetRoleCredentialsCommand", {
      enumerable: true,
      get: function() {
        return clientSso.GetRoleCredentialsCommand;
      }
    });
    Object.defineProperty(exports, "SSOClient", {
      enumerable: true,
      get: function() {
        return clientSso.SSOClient;
      }
    });
  }
});

// ../node_modules/.pnpm/@aws-sdk+credential-provider-sso@3.922.0/node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js
var require_dist_cjs30 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+credential-provider-sso@3.922.0/node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js"(exports) {
    var propertyProvider = require_dist_cjs13();
    var sharedIniFileLoader = require_dist_cjs18();
    var client = (init_client(), __toCommonJS(client_exports));
    var tokenProviders = require_dist_cjs28();
    var isSsoProfile = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
    var SHOULD_FAIL_CREDENTIAL_CHAIN = false;
    var resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, parentClientConfig, profile, filepath, configFilepath, ignoreCache, logger }) => {
      let token;
      const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
      if (ssoSession) {
        try {
          const _token = await tokenProviders.fromSso({
            profile,
            filepath,
            configFilepath,
            ignoreCache
          })();
          token = {
            accessToken: _token.token,
            expiresAt: new Date(_token.expiration).toISOString()
          };
        } catch (e) {
          throw new propertyProvider.CredentialsProviderError(e.message, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger
          });
        }
      } else {
        try {
          token = await sharedIniFileLoader.getSSOTokenFromFile(ssoStartUrl);
        } catch (e) {
          throw new propertyProvider.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger
          });
        }
      }
      if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new propertyProvider.CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger
        });
      }
      const { accessToken } = token;
      const { SSOClient, GetRoleCredentialsCommand } = await Promise.resolve().then(function() {
        return require_loadSso_CVy8iqsZ();
      });
      const sso = ssoClient || new SSOClient(Object.assign({}, clientConfig ?? {}, {
        logger: clientConfig?.logger ?? parentClientConfig?.logger,
        region: clientConfig?.region ?? ssoRegion,
        userAgentAppId: clientConfig?.userAgentAppId ?? parentClientConfig?.userAgentAppId
      }));
      let ssoResp;
      try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand({
          accountId: ssoAccountId,
          roleName: ssoRoleName,
          accessToken
        }));
      } catch (e) {
        throw new propertyProvider.CredentialsProviderError(e, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger
        });
      }
      const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope, accountId } = {} } = ssoResp;
      if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new propertyProvider.CredentialsProviderError("SSO returns an invalid temporary credential.", {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger
        });
      }
      const credentials = {
        accessKeyId,
        secretAccessKey,
        sessionToken,
        expiration: new Date(expiration),
        ...credentialScope && { credentialScope },
        ...accountId && { accountId }
      };
      if (ssoSession) {
        client.setCredentialFeature(credentials, "CREDENTIALS_SSO", "s");
      } else {
        client.setCredentialFeature(credentials, "CREDENTIALS_SSO_LEGACY", "u");
      }
      return credentials;
    };
    var validateSsoProfile = (profile, logger) => {
      const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
      if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new propertyProvider.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger });
      }
      return profile;
    };
    var fromSSO = (init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      const { ssoClient } = init;
      const profileName = sharedIniFileLoader.getProfileName({
        profile: init.profile ?? callerClientConfig?.profile
      });
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await sharedIniFileLoader.parseKnownFiles(init);
        const profile = profiles[profileName];
        if (!profile) {
          throw new propertyProvider.CredentialsProviderError(`Profile ${profileName} was not found.`, { logger: init.logger });
        }
        if (!isSsoProfile(profile)) {
          throw new propertyProvider.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`, {
            logger: init.logger
          });
        }
        if (profile?.sso_session) {
          const ssoSessions = await sharedIniFileLoader.loadSsoSessionData(init);
          const session = ssoSessions[profile.sso_session];
          const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
          if (ssoRegion && ssoRegion !== session.sso_region) {
            throw new propertyProvider.CredentialsProviderError(`Conflicting SSO region` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
            throw new propertyProvider.CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          profile.sso_region = session.sso_region;
          profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile, init.logger);
        return resolveSSOCredentials({
          ssoStartUrl: sso_start_url,
          ssoSession: sso_session,
          ssoAccountId: sso_account_id,
          ssoRegion: sso_region,
          ssoRoleName: sso_role_name,
          ssoClient,
          clientConfig: init.clientConfig,
          parentClientConfig: init.parentClientConfig,
          profile: profileName,
          filepath: init.filepath,
          configFilepath: init.configFilepath,
          ignoreCache: init.ignoreCache,
          logger: init.logger
        });
      } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new propertyProvider.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: init.logger });
      } else {
        return resolveSSOCredentials({
          ssoStartUrl,
          ssoSession,
          ssoAccountId,
          ssoRegion,
          ssoRoleName,
          ssoClient,
          clientConfig: init.clientConfig,
          parentClientConfig: init.parentClientConfig,
          profile: profileName,
          filepath: init.filepath,
          configFilepath: init.configFilepath,
          ignoreCache: init.ignoreCache,
          logger: init.logger
        });
      }
    };
    exports.fromSSO = fromSSO;
    exports.isSsoProfile = isSsoProfile;
    exports.validateSsoProfile = validateSsoProfile;
  }
});

export {
  require_dist_cjs28 as require_dist_cjs,
  require_dist_cjs30 as require_dist_cjs2
};
//# sourceMappingURL=chunk-KHFOZOBB.js.map
