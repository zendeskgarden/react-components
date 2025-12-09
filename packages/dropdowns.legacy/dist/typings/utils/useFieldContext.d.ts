/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
export interface IFieldContext {
    isLabelHovered: boolean;
    setIsLabelHovered: (isHovered: boolean) => void;
}
export declare const FieldContext: React.Context<IFieldContext | undefined>;
/**
 * Retrieve Field component context
 */
declare const useFieldContext: () => IFieldContext;
export default useFieldContext;
