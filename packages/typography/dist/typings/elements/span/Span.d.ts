/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { ISpanProps } from '../../types';
import { StartIcon } from './StartIcon';
import { Icon } from './Icon';
declare const SpanComponent: React.ForwardRefExoticComponent<ISpanProps & React.RefAttributes<HTMLSpanElement>>;
/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export declare const Span: typeof SpanComponent & {
    Icon: typeof Icon;
    StartIcon: typeof StartIcon;
};
export {};
