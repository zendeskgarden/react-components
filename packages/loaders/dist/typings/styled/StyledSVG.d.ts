/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
interface IStyledSVGProps {
    'data-garden-id': string;
    $color?: string;
    $fontSize?: string | number;
    $width: number | string;
    $height: number | string;
    $containerWidth?: string;
    $containerHeight?: string;
    $delayShow?: number;
}
export declare const StyledSVG: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").SVGProps<SVGSVGElement>, Omit<import("react").SVGProps<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<SVGSVGElement> | null | undefined;
}>, IStyledSVGProps>, IStyledSVGProps>> & string;
export {};
