import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-WPKHEWHD.js";
import {
  client_exports,
  init_client
} from "./chunk-GV46K7LA.js";
import {
  require_dist_cjs
} from "./chunk-46Y7YWVF.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-PJNRM37X.js";

// ../node_modules/.pnpm/@aws-sdk+credential-provider-ini@3.922.0/node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "../node_modules/.pnpm/@aws-sdk+credential-provider-ini@3.922.0/node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js"(exports) {
    var sharedIniFileLoader = require_dist_cjs2();
    var propertyProvider = require_dist_cjs();
    var client = (init_client(), __toCommonJS(client_exports));
    var resolveCredentialSource = (credentialSource, profileName, logger) => {
      const sourceProvidersMap = {
        EcsContainer: async (options) => {
          const { fromHttp } = await import("./dist-cjs-AT6G5KDM.js");
          const { fromContainerMetadata } = await import("./dist-cjs-N7VEDHBU.js");
          logger?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
          return async () => propertyProvider.chain(fromHttp(options ?? {}), fromContainerMetadata(options))().then(setNamedProvider);
        },
        Ec2InstanceMetadata: async (options) => {
          logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
          const { fromInstanceMetadata } = await import("./dist-cjs-N7VEDHBU.js");
          return async () => fromInstanceMetadata(options)().then(setNamedProvider);
        },
        Environment: async (options) => {
          logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
          const { fromEnv } = await import("./dist-cjs-WJFS4RKC.js");
          return async () => fromEnv(options)().then(setNamedProvider);
        }
      };
      if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
      } else {
        throw new propertyProvider.CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, { logger });
      }
    };
    var setNamedProvider = (creds) => client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p");
    var isAssumeRoleProfile = (arg, { profile = "default", logger } = {}) => {
      return Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg, { profile, logger }) || isCredentialSourceProfile(arg, { profile, logger }));
    };
    var isAssumeRoleWithSourceProfile = (arg, { profile, logger }) => {
      const withSourceProfile = typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
      if (withSourceProfile) {
        logger?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${arg.source_profile}`);
      }
      return withSourceProfile;
    };
    var isCredentialSourceProfile = (arg, { profile, logger }) => {
      const withProviderProfile = typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
      if (withProviderProfile) {
        logger?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${arg.credential_source}`);
      }
      return withProviderProfile;
    };
    var resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}, resolveProfileData2) => {
      options.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
      const profileData = profiles[profileName];
      const { source_profile, region } = profileData;
      if (!options.roleAssumer) {
        const { getDefaultRoleAssumer } = await import("./sts-3NV76Q5M.js");
        options.roleAssumer = getDefaultRoleAssumer({
          ...options.clientConfig,
          credentialProviderLogger: options.logger,
          parentClientConfig: {
            ...options?.parentClientConfig,
            region: region ?? options?.parentClientConfig?.region
          }
        }, options.clientPlugins);
      }
      if (source_profile && source_profile in visitedProfiles) {
        throw new propertyProvider.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${sharedIniFileLoader.getProfileName(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "), { logger: options.logger });
      }
      options.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${profileName}]`}`);
      const sourceCredsProvider = source_profile ? resolveProfileData2(source_profile, profiles, options, {
        ...visitedProfiles,
        [source_profile]: true
      }, isCredentialSourceWithoutRoleArn(profiles[source_profile] ?? {})) : (await resolveCredentialSource(profileData.credential_source, profileName, options.logger)(options))();
      if (isCredentialSourceWithoutRoleArn(profileData)) {
        return sourceCredsProvider.then((creds) => client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      } else {
        const params = {
          RoleArn: profileData.role_arn,
          RoleSessionName: profileData.role_session_name || `aws-sdk-js-${Date.now()}`,
          ExternalId: profileData.external_id,
          DurationSeconds: parseInt(profileData.duration_seconds || "3600", 10)
        };
        const { mfa_serial } = profileData;
        if (mfa_serial) {
          if (!options.mfaCodeProvider) {
            throw new propertyProvider.CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, { logger: options.logger, tryNextLink: false });
          }
          params.SerialNumber = mfa_serial;
          params.TokenCode = await options.mfaCodeProvider(mfa_serial);
        }
        const sourceCreds = await sourceCredsProvider;
        return options.roleAssumer(sourceCreds, params).then((creds) => client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      }
    };
    var isCredentialSourceWithoutRoleArn = (section) => {
      return !section.role_arn && !!section.credential_source;
    };
    var isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";
    var resolveProcessCredentials = async (options, profile) => import("./dist-cjs-Z56EFFJZ.js").then(({ fromProcess }) => fromProcess({
      ...options,
      profile
    })().then((creds) => client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_PROCESS", "v")));
    var resolveSsoCredentials = async (profile, profileData, options = {}) => {
      const { fromSSO } = await import("./dist-cjs-E44MLULX.js");
      return fromSSO({
        profile,
        logger: options.logger,
        parentClientConfig: options.parentClientConfig,
        clientConfig: options.clientConfig
      })().then((creds) => {
        if (profileData.sso_session) {
          return client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO", "r");
        } else {
          return client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
        }
      });
    };
    var isSsoProfile = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
    var isStaticCredsProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof arg.aws_account_id) > -1;
    var resolveStaticCredentials = async (profile, options) => {
      options?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
      const credentials = {
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        ...profile.aws_credential_scope && { credentialScope: profile.aws_credential_scope },
        ...profile.aws_account_id && { accountId: profile.aws_account_id }
      };
      return client.setCredentialFeature(credentials, "CREDENTIALS_PROFILE", "n");
    };
    var isWebIdentityProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
    var resolveWebIdentityCredentials = async (profile, options) => import("./dist-cjs-42IHNEKU.js").then(({ fromTokenFile }) => fromTokenFile({
      webIdentityTokenFile: profile.web_identity_token_file,
      roleArn: profile.role_arn,
      roleSessionName: profile.role_session_name,
      roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
      logger: options.logger,
      parentClientConfig: options.parentClientConfig
    })().then((creds) => client.setCredentialFeature(creds, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q")));
    var resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}, isAssumeRoleRecursiveCall = false) => {
      const data = profiles[profileName];
      if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isAssumeRoleRecursiveCall || isAssumeRoleProfile(data, { profile: profileName, logger: options.logger })) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles, resolveProfileData);
      }
      if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
      }
      if (isProcessProfile(data)) {
        return resolveProcessCredentials(options, profileName);
      }
      if (isSsoProfile(data)) {
        return await resolveSsoCredentials(profileName, data, options);
      }
      throw new propertyProvider.CredentialsProviderError(`Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`, { logger: options.logger });
    };
    var fromIni = (_init = {}) => async ({ callerClientConfig } = {}) => {
      const init = {
        ..._init,
        parentClientConfig: {
          ...callerClientConfig,
          ..._init.parentClientConfig
        }
      };
      init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
      const profiles = await sharedIniFileLoader.parseKnownFiles(init);
      return resolveProfileData(sharedIniFileLoader.getProfileName({
        profile: _init.profile ?? callerClientConfig?.profile
      }), profiles, init);
    };
    exports.fromIni = fromIni;
  }
});

export {
  require_dist_cjs3 as require_dist_cjs
};
//# sourceMappingURL=chunk-34UV3QEU.js.map
