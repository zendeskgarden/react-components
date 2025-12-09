/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ThemeProps, DefaultTheme } from 'styled-components';
import { AlignItems, IGridProps, IRowProps, JustifyContent, Wrap } from '../types';
interface IStyledRowProps extends ThemeProps<DefaultTheme> {
    $gutters?: IGridProps['gutters'];
    $debug?: IGridProps['debug'];
    $alignItems?: AlignItems;
    $alignItemsXs?: AlignItems;
    $alignItemsSm?: AlignItems;
    $alignItemsMd?: AlignItems;
    $alignItemsLg?: AlignItems;
    $alignItemsXl?: AlignItems;
    $justifyContent?: JustifyContent;
    $justifyContentXs?: JustifyContent;
    $justifyContentSm?: JustifyContent;
    $justifyContentMd?: JustifyContent;
    $justifyContentLg?: JustifyContent;
    $justifyContentXl?: JustifyContent;
    $wrapAll?: IRowProps['wrap'];
    $wrapXs?: Wrap;
    $wrapSm?: Wrap;
    $wrapMd?: Wrap;
    $wrapLg?: Wrap;
    $wrapXl?: Wrap;
}
export declare const StyledRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, IStyledRowProps>, IStyledRowProps>> & string;
export {};
