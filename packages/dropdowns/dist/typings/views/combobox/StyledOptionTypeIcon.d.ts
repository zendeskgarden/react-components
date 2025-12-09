/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ThemeProps, DefaultTheme } from 'styled-components';
import { OptionType } from '../../types';
export interface IStyledOptionTypeIconProps extends ThemeProps<DefaultTheme> {
    $isCompact?: boolean;
    $type?: OptionType | 'header';
}
export declare const StyledOptionTypeIcon: any;
