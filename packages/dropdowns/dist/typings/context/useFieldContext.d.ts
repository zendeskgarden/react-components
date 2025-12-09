/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { HTMLAttributes, LabelHTMLAttributes } from 'react';
export declare const FieldContext: import("react").Context<{
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
    setLabelProps: (labelProps?: LabelHTMLAttributes<HTMLLabelElement>) => void;
    hasHint: boolean;
    setHasHint: (hasHint: boolean) => void;
    hintProps?: HTMLAttributes<HTMLDivElement>;
    setHintProps: (hintProps?: HTMLAttributes<HTMLDivElement>) => void;
    hasMessage: boolean;
    setHasMessage: (hasMessage: boolean) => void;
    messageProps?: HTMLAttributes<HTMLDivElement>;
    setMessageProps: (messageProps?: HTMLAttributes<HTMLDivElement>) => void;
} | undefined>;
declare const useFieldContext: () => {
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
    setLabelProps: (labelProps?: LabelHTMLAttributes<HTMLLabelElement>) => void;
    hasHint: boolean;
    setHasHint: (hasHint: boolean) => void;
    hintProps?: HTMLAttributes<HTMLDivElement>;
    setHintProps: (hintProps?: HTMLAttributes<HTMLDivElement>) => void;
    hasMessage: boolean;
    setHasMessage: (hasMessage: boolean) => void;
    messageProps?: HTMLAttributes<HTMLDivElement>;
    setMessageProps: (messageProps?: HTMLAttributes<HTMLDivElement>) => void;
};
export default useFieldContext;
