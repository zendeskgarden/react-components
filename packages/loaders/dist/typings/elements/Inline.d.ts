/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IInlineProps } from '../types';
/**
 * 1. role='img' on `svg` is valid WAI-ARIA usage in this context.
 *    https://dequeuniversity.com/rules/axe/4.2/svg-img-alt
 */
/**
 * @extends SVGAttributes<SVGSVGElement>
 */
export declare const Inline: React.ForwardRefExoticComponent<IInlineProps & React.RefAttributes<SVGSVGElement>>;
