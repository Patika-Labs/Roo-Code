import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-WPKHEWHD.js";
import {
  require_dist_cjs
} from "./chunk-46Y7YWVF.js";
import {
  __commonJS
} from "./chunk-PJNRM37X.js";

// ../node_modules/.pnpm/@smithy+querystring-parser@4.2.4/node_modules/@smithy/querystring-parser/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "../node_modules/.pnpm/@smithy+querystring-parser@4.2.4/node_modules/@smithy/querystring-parser/dist-cjs/index.js"(exports) {
    "use strict";
    function parseQueryString(querystring) {
      const query = {};
      querystring = querystring.replace(/^\?/, "");
      if (querystring) {
        for (const pair of querystring.split("&")) {
          let [key, value = null] = pair.split("=");
          key = decodeURIComponent(key);
          if (value) {
            value = decodeURIComponent(value);
          }
          if (!(key in query)) {
            query[key] = value;
          } else if (Array.isArray(query[key])) {
            query[key].push(value);
          } else {
            query[key] = [query[key], value];
          }
        }
      }
      return query;
    }
    exports.parseQueryString = parseQueryString;
  }
});

// ../node_modules/.pnpm/@smithy+url-parser@4.2.4/node_modules/@smithy/url-parser/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "../node_modules/.pnpm/@smithy+url-parser@4.2.4/node_modules/@smithy/url-parser/dist-cjs/index.js"(exports) {
    "use strict";
    var querystringParser = require_dist_cjs3();
    var parseUrl = (url) => {
      if (typeof url === "string") {
        return parseUrl(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = querystringParser.parseQueryString(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    };
    exports.parseUrl = parseUrl;
  }
});

// ../node_modules/.pnpm/@smithy+node-config-provider@4.3.4/node_modules/@smithy/node-config-provider/dist-cjs/index.js
var require_dist_cjs5 = __commonJS({
  "../node_modules/.pnpm/@smithy+node-config-provider@4.3.4/node_modules/@smithy/node-config-provider/dist-cjs/index.js"(exports) {
    "use strict";
    var propertyProvider = require_dist_cjs();
    var sharedIniFileLoader = require_dist_cjs2();
    function getSelectorName(functionString) {
      try {
        const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
        constants.delete("CONFIG");
        constants.delete("CONFIG_PREFIX_SEPARATOR");
        constants.delete("ENV");
        return [...constants].join(", ");
      } catch (e) {
        return functionString;
      }
    }
    var fromEnv = (envVarSelector, options) => async () => {
      try {
        const config = envVarSelector(process.env, options);
        if (config === void 0) {
          throw new Error();
        }
        return config;
      } catch (e) {
        throw new propertyProvider.CredentialsProviderError(e.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`, { logger: options?.logger });
      }
    };
    var fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
      const profile = sharedIniFileLoader.getProfileName(init);
      const { configFile, credentialsFile } = await sharedIniFileLoader.loadSharedConfigFiles(init);
      const profileFromCredentials = credentialsFile[profile] || {};
      const profileFromConfig = configFile[profile] || {};
      const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
      try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === void 0) {
          throw new Error();
        }
        return configValue;
      } catch (e) {
        throw new propertyProvider.CredentialsProviderError(e.message || `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`, { logger: init.logger });
      }
    };
    var isFunction = (func) => typeof func === "function";
    var fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : propertyProvider.fromStatic(defaultValue);
    var loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => {
      const { signingName, logger } = configuration;
      const envOptions = { signingName, logger };
      return propertyProvider.memoize(propertyProvider.chain(fromEnv(environmentVariableSelector, envOptions), fromSharedConfigFiles(configFileSelector, configuration), fromStatic(defaultValue)));
    };
    exports.loadConfig = loadConfig;
  }
});

export {
  require_dist_cjs4 as require_dist_cjs,
  require_dist_cjs5 as require_dist_cjs2
};
//# sourceMappingURL=chunk-PZCJD5GR.js.map
