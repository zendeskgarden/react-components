/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface IStepperContext {
    activeIndex: number;
    isHorizontal: boolean;
}
export declare const StepperContext: import("react").Context<IStepperContext | undefined>;
export declare const useStepperContext: () => IStepperContext;
