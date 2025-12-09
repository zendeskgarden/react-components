/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ThemeProps, DefaultTheme } from 'styled-components';
import { IAvatarProps } from '../types';
export declare const TRANSITION_DURATION = 0.25;
export interface IStyledStatusIndicatorProps extends ThemeProps<DefaultTheme> {
    readonly $size?: IAvatarProps['size'];
    readonly $type?: IAvatarProps['status'] | 'active';
}
export declare function getStatusColor(theme: IStyledStatusIndicatorProps['theme'], type?: IStyledStatusIndicatorProps['$type']): string;
export declare function getStatusBorderOffset(props: IStyledStatusIndicatorProps): string;
export declare function getStatusSize(props: IStyledStatusIndicatorProps, offset: string): string;
export declare function includes<T extends U, U>(array: readonly T[], element: U): element is T;
