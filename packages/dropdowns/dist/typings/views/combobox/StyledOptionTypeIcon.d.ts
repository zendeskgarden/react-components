/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ThemeProps, DefaultTheme, DataAttributes } from 'styled-components';
import { OptionType } from '../../types';
export interface IStyledOptionTypeIconProps extends ThemeProps<DefaultTheme> {
    $isCompact?: boolean;
    $type?: OptionType | 'header';
}
export declare const StyledOptionTypeIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("@zendeskgarden/react-theming").IStyledBaseIconProps, never>, import("styled-components").FastOmit<import("@zendeskgarden/react-theming").IStyledBaseIconProps, never>>, DataAttributes>, IStyledOptionTypeIconProps>> & string;
