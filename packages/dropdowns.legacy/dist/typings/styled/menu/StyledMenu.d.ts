/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { PopperPlacement } from '../../types';
interface IStyledMenuProps {
    $isCompact?: boolean;
    $isAnimated?: boolean;
    $hasArrow?: boolean;
    $placement?: PopperPlacement;
    $maxHeight?: string;
}
/**
 * 1. Override arrow parent positioning to ensure arrow is visible beyond block
 *    overflow boundaries.
 */
export declare const StyledMenu: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
    ref?: ((instance: HTMLUListElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLUListElement> | null | undefined;
}>, IStyledMenuProps>, IStyledMenuProps>> & string;
export {};
