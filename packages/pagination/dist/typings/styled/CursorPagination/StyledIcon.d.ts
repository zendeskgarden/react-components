/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export interface IStyledIcon {
    $type: 'first' | 'next' | 'previous' | 'last';
}
export declare const StyledIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("@zendeskgarden/react-theming").IStyledBaseIconProps, never>, IStyledIcon>> & string;
