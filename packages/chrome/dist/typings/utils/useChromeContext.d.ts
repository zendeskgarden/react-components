/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
interface IChromeContext {
    hue: string;
    isLight?: boolean;
}
export declare const ChromeContext: React.Context<IChromeContext>;
export declare const useChromeContext: () => IChromeContext;
export {};
