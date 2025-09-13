import {
  __esm,
  __export
} from "./chunk-PJNRM37X.js";

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js
var state, emitWarningIfUnsupportedVersion;
var init_emitWarningIfUnsupportedVersion = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js"() {
    state = {
      warningEmitted: false
    };
    emitWarningIfUnsupportedVersion = (version) => {
      if (version && !state.warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 18) {
        state.warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
      }
    };
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
var init_setCredentialFeature = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js"() {
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature(context, feature, value) {
  if (!context.__aws_sdk_context) {
    context.__aws_sdk_context = {
      features: {}
    };
  } else if (!context.__aws_sdk_context.features) {
    context.__aws_sdk_context.features = {};
  }
  context.__aws_sdk_context.features[feature] = value;
}
var init_setFeature = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js"() {
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setTokenFeature.js
function setTokenFeature(token, feature, value) {
  if (!token.$source) {
    token.$source = {};
  }
  token.$source[feature] = value;
  return token;
}
var init_setTokenFeature = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setTokenFeature.js"() {
  }
});

// ../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/client/index.js
var client_exports = {};
__export(client_exports, {
  emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
  setCredentialFeature: () => setCredentialFeature,
  setFeature: () => setFeature,
  setTokenFeature: () => setTokenFeature,
  state: () => state
});
var init_client = __esm({
  "../node_modules/.pnpm/@aws-sdk+core@3.922.0/node_modules/@aws-sdk/core/dist-es/submodules/client/index.js"() {
    init_emitWarningIfUnsupportedVersion();
    init_setCredentialFeature();
    init_setFeature();
    init_setTokenFeature();
  }
});

export {
  state,
  emitWarningIfUnsupportedVersion,
  setCredentialFeature,
  setFeature,
  setTokenFeature,
  client_exports,
  init_client
};
//# sourceMappingURL=chunk-GV46K7LA.js.map
