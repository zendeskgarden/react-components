/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface IStyledInputProps {
    $isHidden?: boolean;
}
export declare const StyledInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<Omit<import("@zendeskgarden/react-forms").IInputProps & import("react").RefAttributes<HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLInputElement> | null | undefined;
}, Omit<import("@zendeskgarden/react-forms").IInputProps & import("react").RefAttributes<HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLInputElement> | null | undefined;
}>, never>, IStyledInputProps>> & string & Omit<import("react").ForwardRefExoticComponent<import("@zendeskgarden/react-forms").IInputProps & import("react").RefAttributes<HTMLInputElement>>, keyof import("react").Component<any, {}, any>>;
