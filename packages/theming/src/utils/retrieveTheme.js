/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/** @component */
export default function retrieveTheme(componentId, props) {
  const styles = props.theme.styles;

  if (!styles) {
    return undefined;
  }

  const componentStyles = styles[componentId];

  if (typeof componentStyles === 'function') {
    return componentStyles(props);
  }

  return componentStyles;
}
