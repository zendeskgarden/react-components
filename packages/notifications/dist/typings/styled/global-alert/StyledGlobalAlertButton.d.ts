/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IGlobalAlertProps } from '../../types';
interface IStyledGlobalAlertButtonProps {
    $alertType: IGlobalAlertProps['type'];
    isBasic?: boolean;
}
export declare const StyledGlobalAlertButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<Omit<import("@zendeskgarden/react-buttons").IButtonProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, Omit<import("@zendeskgarden/react-buttons").IButtonProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}>, never>, IStyledGlobalAlertButtonProps>> & string & Omit<import("react").ForwardRefExoticComponent<import("@zendeskgarden/react-buttons").IButtonProps & import("react").RefAttributes<HTMLButtonElement>> & {
    EndIcon: typeof import("packages/buttons/dist/typings/elements/components/EndIcon").EndIcon;
    StartIcon: typeof import("packages/buttons/dist/typings/elements/components/StartIcon").StartIcon;
}, keyof import("react").Component<any, {}, any>>;
export {};
