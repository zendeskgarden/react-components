/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IGlobalAlertProps } from '../../types';
import { GlobalAlertButton } from './GlobalAlertButton';
import { GlobalAlertClose } from './GlobalAlertClose';
import { GlobalAlertContent } from './GlobalAlertContent';
import { GlobalAlertTitle } from './GlobalAlertTitle';
/**
 * 1. Global Alert always renders with light theme colors
 * 2. role='status' on `div` is valid WAI-ARIA usage in this context.
 *    https://www.w3.org/TR/wai-aria-1.1/#status
 */
declare const GlobalAlertComponent: React.ForwardRefExoticComponent<IGlobalAlertProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const GlobalAlert: typeof GlobalAlertComponent & {
    Button: typeof GlobalAlertButton;
    Close: typeof GlobalAlertClose;
    Content: typeof GlobalAlertContent;
    Title: typeof GlobalAlertTitle;
};
export {};
