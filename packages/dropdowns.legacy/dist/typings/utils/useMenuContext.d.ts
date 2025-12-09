/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { MutableRefObject } from 'react';
export interface IMenuContext {
    itemIndexRef: MutableRefObject<number>;
    isCompact?: boolean;
}
export declare const MenuContext: React.Context<IMenuContext | undefined>;
/**
 * Retrieve Menu component context
 */
declare const useMenuContext: () => IMenuContext;
export default useMenuContext;
