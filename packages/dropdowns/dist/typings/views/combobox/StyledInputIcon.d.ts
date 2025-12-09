/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ThemeProps, DefaultTheme, DataAttributes } from 'styled-components';
interface IStyledInputIconProps extends ThemeProps<DefaultTheme> {
    $isCompact?: boolean;
    $isDisabled?: boolean;
    $isEnd?: boolean;
    $isLabelHovered?: boolean;
    $isRotated?: boolean;
}
export declare const StyledInputIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("@zendeskgarden/react-theming").IStyledBaseIconProps, never>, import("styled-components").FastOmit<import("@zendeskgarden/react-theming").IStyledBaseIconProps, never>>, DataAttributes>, IStyledInputIconProps>> & string;
export {};
