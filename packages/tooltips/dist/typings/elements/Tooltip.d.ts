/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ITooltipProps } from '../types';
import { Paragraph } from './Paragraph';
import { Title } from './Title';
export declare const PLACEMENT_DEFAULT = "top";
export declare const TooltipComponent: {
    ({ id, delayMS, isInitialVisible, content, refKey, placement: _placement, fallbackPlacements: _fallbackPlacements, children, hasArrow, size, type, appendToNode, zIndex, isVisible: externalIsVisible, onFocus, onBlur, ...props }: ITooltipProps): React.JSX.Element;
    displayName: string;
    propTypes: {
        appendToNode: PropTypes.Requireable<any>;
        hasArrow: PropTypes.Requireable<boolean>;
        delayMS: PropTypes.Requireable<number>;
        id: PropTypes.Requireable<string>;
        content: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        placement: PropTypes.Requireable<"top" | "auto" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start" | "start-top" | "start-bottom">;
        fallbackPlacements: PropTypes.Requireable<("top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start" | "start-top" | "start-bottom" | null | undefined)[]>;
        size: PropTypes.Requireable<"small" | "medium" | "large" | "extra-large">;
        type: PropTypes.Requireable<"light" | "dark">;
        zIndex: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        isInitialVisible: PropTypes.Requireable<boolean>;
        refKey: PropTypes.Requireable<string>;
    };
};
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Tooltip: typeof TooltipComponent & {
    Paragraph: typeof Paragraph;
    Title: typeof Title;
};
