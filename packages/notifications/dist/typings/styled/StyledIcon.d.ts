/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DataAttributes, DefaultTheme, ThemeProps } from 'styled-components';
import { Type } from '../types';
interface IStyledIconProps extends ThemeProps<DefaultTheme> {
    $type?: Type;
}
export declare const StyledIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("@zendeskgarden/react-theming").IStyledBaseIconProps, never>, import("styled-components").FastOmit<import("@zendeskgarden/react-theming").IStyledBaseIconProps, never>>, DataAttributes>, IStyledIconProps>> & string;
export {};
