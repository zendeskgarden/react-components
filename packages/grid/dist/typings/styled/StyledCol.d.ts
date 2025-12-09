/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ThemeProps, DefaultTheme } from 'styled-components';
import { IColProps, IGridProps } from '../types';
interface IStyledColProps extends ThemeProps<DefaultTheme> {
    $columns?: IGridProps['columns'];
    $gutters?: IGridProps['gutters'];
    $sizeAll?: IColProps['size'];
    $debug?: IGridProps['debug'];
    $xs?: IColProps['xs'];
    $sm?: IColProps['sm'];
    $md?: IColProps['md'];
    $lg?: IColProps['lg'];
    $xl?: IColProps['xl'];
    $alignSelf?: IColProps['alignSelf'];
    $alignSelfXs?: IColProps['alignSelfXs'];
    $alignSelfSm?: IColProps['alignSelfSm'];
    $alignSelfMd?: IColProps['alignSelfMd'];
    $alignSelfLg?: IColProps['alignSelfLg'];
    $alignSelfXl?: IColProps['alignSelfXl'];
    $textAlign?: IColProps['textAlign'];
    $textAlignXs?: IColProps['textAlignXs'];
    $textAlignSm?: IColProps['textAlignSm'];
    $textAlignMd?: IColProps['textAlignMd'];
    $textAlignLg?: IColProps['textAlignLg'];
    $textAlignXl?: IColProps['textAlignXl'];
    $offset?: IColProps['offset'];
    $offsetXs?: IColProps['offsetXs'];
    $offsetSm?: IColProps['offsetSm'];
    $offsetMd?: IColProps['offsetMd'];
    $offsetLg?: IColProps['offsetLg'];
    $offsetXl?: IColProps['offsetXl'];
    $order?: IColProps['order'];
    $orderXs?: IColProps['orderXs'];
    $orderSm?: IColProps['orderSm'];
    $orderMd?: IColProps['orderMd'];
    $orderLg?: IColProps['orderLg'];
    $orderXl?: IColProps['orderXl'];
}
export declare const StyledCol: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, IStyledColProps>, IStyledColProps>> & string;
export {};
