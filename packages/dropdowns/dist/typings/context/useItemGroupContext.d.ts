/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ISelectedItem } from '@zendeskgarden/container-menu';
export declare const ItemGroupContext: import("react").Context<{
    type?: ISelectedItem["type"];
}>;
declare const useItemGroupContext: () => {
    type?: ISelectedItem["type"];
};
export default useItemGroupContext;
