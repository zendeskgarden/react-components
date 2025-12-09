/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IStepperProps } from '../../types';
import { Step } from './components/Step';
import { Label } from './components/Label';
import { Content } from './components/Content';
declare const StepperComponent: React.ForwardRefExoticComponent<IStepperProps & React.RefAttributes<HTMLOListElement>>;
/**
 * @extends OlHTMLAttributes<HTMLOListElement>
 */
export declare const Stepper: typeof StepperComponent & {
    Content: typeof Content;
    Label: typeof Label;
    Step: typeof Step;
};
export {};
