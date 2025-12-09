/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
interface IStyledTextareaProps {
    $isResizable?: boolean;
    $isHidden?: boolean;
}
export declare const StyledTextarea: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLInputElement> | null | undefined;
}>, import("./StyledTextInput").IStyledTextInputProps>, keyof import("./StyledTextInput").IStyledTextInputProps> & import("./StyledTextInput").IStyledTextInputProps, Omit<import("react").DetailedHTMLProps<import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & {
    ref?: ((instance: HTMLTextAreaElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLTextAreaElement> | null | undefined;
}>, never>, IStyledTextareaProps>> & string;
export {};
