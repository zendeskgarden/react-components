/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface IStyledLabelProps {
    $isRegular?: boolean;
    $isRadio?: boolean;
}
/**
 * 1. CSS Bedrock override.
 */
export declare const StyledLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, Omit<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & {
    ref?: ((instance: HTMLLabelElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLLabelElement> | null | undefined;
}>, never>, IStyledLabelProps>> & string;
