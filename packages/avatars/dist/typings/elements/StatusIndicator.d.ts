/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IStatusIndicatorProps } from '../types';
/**
 * 1. role='status' on `div` is valid WAI-ARIA usage in this context.
 *    https://www.w3.org/TR/wai-aria-1.1/#status
 * 2. role='img' on `svg` is valid WAI-ARIA usage in this context.
 *    https://dequeuniversity.com/rules/axe/4.2/svg-img-alt
 */
/**
 * @extends HTMLAttributes<HTMLElement>
 */
export declare const StatusIndicator: React.ForwardRefExoticComponent<IStatusIndicatorProps & React.RefAttributes<HTMLElement>>;
