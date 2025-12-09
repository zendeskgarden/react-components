/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IUseTabsReturnValue } from '@zendeskgarden/container-tabs';
interface ITabsContext extends IUseTabsReturnValue<any> {
    isVertical?: boolean;
}
export declare const TabsContext: import("react").Context<ITabsContext | undefined>;
export declare const useTabsContext: () => ITabsContext | undefined;
export {};
