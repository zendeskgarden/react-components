/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { FC, useMemo } from 'react';

/**
 * Provides default text for a11y (i.e. aria-label) or other critical attribute
 * strings. If necessary, a development mode console warning prompts the
 * consumer to provide customized, translated text.
 *
 * @param component The React component to which the `props` belong
 * @param props The component props to check for `name`
 * @param name The name of the component prop to set default text on
 * @param text The default text to apply if the value of `props[name]` is undefined
 */
export const useText = (
  component: Pick<FC, 'displayName'>,
  props: Record<string, any>,
  name: string,
  text: string
): string => {
  const value = props[name];

  return useMemo(() => {
    if (name === 'children') {
      // Prevent Garden from providing text as a child content default.
      throw new Error('Error: `children` is not a valid `getText` prop.');
    } else if (value === null || value === '') {
      // Prevent consumer from removing a critical text attribute.
      throw new Error(
        component.displayName
          ? `Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.`
          : `Error: you must provide a valid \`${name}\` text value.`
      );
    } else if (value === undefined) {
      // Warn consumer when Garden's default text is rendered.
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn(
          component.displayName
            ? `Warning: you did not provide a customized/translated \`${name}\` text value for <${component.displayName}>. Zendesk Garden is rendering <${component.displayName} ${name}="${text}"> by default.`
            : `Warning: you did not provide a customized/translated \`${name}\` text value. Zendesk Garden is rendering ${name}="${text}" by default.`
        );
      }

      return text;
    }

    return value;
  }, [component.displayName, value, name, text]);
};
