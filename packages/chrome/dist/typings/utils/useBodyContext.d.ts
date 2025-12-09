/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
interface IBodyContext {
    hasFooter: boolean;
    setHasFooter: (footerPresent: boolean) => void;
}
export declare const BodyContext: React.Context<IBodyContext | undefined>;
export declare const useBodyContext: () => IBodyContext | undefined;
export {};
