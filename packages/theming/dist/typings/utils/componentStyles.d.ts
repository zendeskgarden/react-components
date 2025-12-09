/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DefaultTheme } from 'styled-components';
/**
 * CSS for component customizations based on `theme.components[componentId]`.
 *
 * @param {Object} props.theme Provides `components` object use to resolve the given component ID
 * @param {String} [props.componentId] Specifies the lookup id for * `theme.components` styles.
 *  The ID will be inferred from the `'data-garden-id'` attribute if not provided.
 *
 * @returns component CSS styles
 */
export declare const componentStyles: (props: {
    theme: DefaultTheme;
    componentId?: string;
}) => string | undefined;
