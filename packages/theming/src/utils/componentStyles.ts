/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DataAttributes, DefaultTheme, ThemeProps } from 'styled-components';

/**
 * CSS for component customizations based on `theme.components[componentId]`
 * where `componentId` is provided by the `data-garden-id` attribute.
 *
 * @param {Object} props.theme Provides `components` object use to resolve the given component ID
 * @param {String} [props.componentId] Specifies the lookup id for * `theme.components` styles.
 *  The ID will be inferred from the `'data-garden-id'` attribute if not provided.
 *
 * @returns component CSS styles
 */
export const componentStyles = (props: ThemeProps<DefaultTheme> & { componentId?: string }) => {
  let retVal: string | undefined;
  const components = props.theme?.components;
  const componentId = props.componentId || (props as unknown as DataAttributes)['data-garden-id'];

  if (components && componentId) {
    retVal = components[componentId];

    if (typeof retVal === 'function') {
      const fn = retVal as (p: ThemeProps<DefaultTheme> & unknown) => string;

      retVal = fn(props);
    }
  }

  return retVal;
};
