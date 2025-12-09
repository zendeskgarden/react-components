/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { Placement } from '../../types';
export declare const TRANSITION_CLASS = "garden-toast-transition";
export declare const StyledFadeInTransition: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $isHidden: boolean;
    $placement: Placement;
}>> & string;
interface IStyledTransitionContainerProps {
    $toastPlacement: Placement;
    $toastZIndex?: number;
}
export declare const StyledTransitionContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, IStyledTransitionContainerProps>> & string;
export {};
