import {
  __commonJS
} from "./chunk-PJNRM37X.js";

// ../node_modules/.pnpm/@smithy+property-provider@4.2.4/node_modules/@smithy/property-provider/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "../node_modules/.pnpm/@smithy+property-provider@4.2.4/node_modules/@smithy/property-provider/dist-cjs/index.js"(exports) {
    "use strict";
    var ProviderError = class _ProviderError extends Error {
      name = "ProviderError";
      tryNextLink;
      constructor(message, options = true) {
        let logger;
        let tryNextLink = true;
        if (typeof options === "boolean") {
          logger = void 0;
          tryNextLink = options;
        } else if (options != null && typeof options === "object") {
          logger = options.logger;
          tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _ProviderError.prototype);
        logger?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
      }
      static from(error, options = true) {
        return Object.assign(new this(error.message, options), error);
      }
    };
    var CredentialsProviderError = class _CredentialsProviderError extends ProviderError {
      name = "CredentialsProviderError";
      constructor(message, options = true) {
        super(message, options);
        Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
      }
    };
    var TokenProviderError = class _TokenProviderError extends ProviderError {
      name = "TokenProviderError";
      constructor(message, options = true) {
        super(message, options);
        Object.setPrototypeOf(this, _TokenProviderError.prototype);
      }
    };
    var chain = (...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    };
    var fromStatic = (staticValue) => () => Promise.resolve(staticValue);
    var memoize = (provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = async () => {
        if (!pending) {
          pending = provider();
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
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    };
    exports.CredentialsProviderError = CredentialsProviderError;
    exports.ProviderError = ProviderError;
    exports.TokenProviderError = TokenProviderError;
    exports.chain = chain;
    exports.fromStatic = fromStatic;
    exports.memoize = memoize;
  }
});

export {
  require_dist_cjs
};
//# sourceMappingURL=chunk-46Y7YWVF.js.map
