/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export declare const COMPONENT_ID = "accordions.button";
interface IStyledButton {
    $isCompact?: boolean;
    $isHovered?: boolean;
    $isCollapsible?: boolean;
    $isExpanded?: boolean;
}
/**
 * 1. <button> override.
 * 2. Remove dotted outline from Firefox on focus.
 */
export declare const StyledButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}>, IStyledButton>, IStyledButton>> & string;
export {};
