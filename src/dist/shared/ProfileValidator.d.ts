import type { ProviderSettings, OrganizationAllowList } from "@roo-code/types";
export declare class ProfileValidator {
    static isProfileAllowed(profile: ProviderSettings, allowList: OrganizationAllowList): boolean;
    private static isProviderAllowed;
    private static isModelAllowed;
    private static getModelIdFromProfile;
}
