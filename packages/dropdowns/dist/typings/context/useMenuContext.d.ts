/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IUseMenuReturnValue } from '@zendeskgarden/container-menu';
export declare const MenuContext: import("react").Context<{
    isCompact?: boolean;
    focusedValue?: string | null;
    getAnchorProps: IUseMenuReturnValue["getAnchorProps"];
    getItemGroupProps: IUseMenuReturnValue["getItemGroupProps"];
    getItemProps: IUseMenuReturnValue["getItemProps"];
    getSeparatorProps: IUseMenuReturnValue["getSeparatorProps"];
} | undefined>;
declare const useMenuContext: () => {
    isCompact?: boolean;
    focusedValue?: string | null;
    getAnchorProps: IUseMenuReturnValue["getAnchorProps"];
    getItemGroupProps: IUseMenuReturnValue["getItemGroupProps"];
    getItemProps: IUseMenuReturnValue["getItemProps"];
    getSeparatorProps: IUseMenuReturnValue["getSeparatorProps"];
};
export default useMenuContext;
