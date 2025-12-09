/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DefaultTheme, ThemeProps } from 'styled-components';
import { IGlobalAlertProps } from '../../types';
interface IStyledGlobalAlertCloseProps {
    $alertType: IGlobalAlertProps['type'];
}
export declare const colorStyles: (props: ThemeProps<DefaultTheme> & IStyledGlobalAlertCloseProps) => import("styled-components").RuleSet<object>;
export declare const StyledGlobalAlertClose: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<Omit<import("@zendeskgarden/react-buttons").IIconButtonProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, Omit<import("@zendeskgarden/react-buttons").IIconButtonProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}>, never>, IStyledGlobalAlertCloseProps>> & string & Omit<import("react").ForwardRefExoticComponent<import("@zendeskgarden/react-buttons").IIconButtonProps & import("react").RefAttributes<HTMLButtonElement>>, keyof import("react").Component<any, {}, any>>;
export {};
