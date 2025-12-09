/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface IStepContext {
    currentStepIndex: number;
    isActive: boolean;
    isCompleted: boolean;
    isHorizontal: boolean;
}
export declare const StepContext: import("react").Context<IStepContext | undefined>;
export declare const useStepContext: () => IStepContext;
