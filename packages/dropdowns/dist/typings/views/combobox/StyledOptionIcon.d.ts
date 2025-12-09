/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ThemeProps, DefaultTheme } from 'styled-components';
import { OptionType } from '../../types';
export interface IStyledOptionIconProps extends ThemeProps<DefaultTheme> {
    $isDisabled?: boolean;
    $type?: OptionType;
}
export declare const StyledOptionIcon: any;
