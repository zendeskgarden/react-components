/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { Legend } from './Legend';
import { IFieldsetProps } from '../../types';
declare const FieldsetComponent: React.ForwardRefExoticComponent<IFieldsetProps & React.RefAttributes<HTMLFieldSetElement>>;
/**
 * @extends FieldsetHTMLAttributes<HTMLFieldSetElement>
 */
export declare const Fieldset: typeof FieldsetComponent & {
    Legend: typeof Legend;
};
export {};
