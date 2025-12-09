/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { IOrderedListProps, IUnorderedListProps } from '../types';
interface IStyledListProps {
    $listType?: IOrderedListProps['type'];
}
export declare const StyledOrderedList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, Omit<import("react").DetailedHTMLProps<import("react").OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & {
    ref?: ((instance: HTMLOListElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLOListElement> | null | undefined;
}>, never>, IStyledListProps>> & string;
interface IStyledUnorderedListProps {
    $listType?: IUnorderedListProps['type'];
}
export declare const StyledUnorderedList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
    ref?: ((instance: HTMLUListElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLUListElement> | null | undefined;
}>, never>, IStyledUnorderedListProps>> & string;
export {};
