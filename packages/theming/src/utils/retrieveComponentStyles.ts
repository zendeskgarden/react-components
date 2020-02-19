/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ThemeProps, DefaultTheme } from 'styled-components';

/** @component */
export default function retrieveComponentStyles(
  componentId: string,
  props: Partial<ThemeProps<Partial<DefaultTheme>>>
) {
  const components = props.theme && props.theme.components;

  if (!components) {
    return undefined;
  }

  const componentStyles = components[componentId];

  if (typeof componentStyles === 'function') {
    return componentStyles(props);
  }

  return componentStyles;
}
