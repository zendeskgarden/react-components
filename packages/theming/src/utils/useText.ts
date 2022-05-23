/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { FC, useEffect } from 'react';

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
) => {
  const propName = props[name];

  useEffect(() => {
    if (name === 'children') {
      // Prevent Garden from providing text as a child content default.
      throw new Error('Error: `children` is not a valid `useText` prop.');
    } else if (propName === null || propName === '') {
      // Prevent consumer from removing a critical text attribute.
      const message = component.displayName
        ? `Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.`
        : `Error: you must provide a valid \`${name}\` text value.`;

      throw new Error(message);
    } else if (propName === undefined) {
      // Warn consumer when Garden's default text is rendered.
      const message = component.displayName
        ? `Warning: you did not provide a customized/translated \`${name}\` text value for <${component.displayName}>. Garden is defaulting to <${component.displayName} ${name}="${text}">.`
        : `Warning: you did not provide a customized/translated \`${name}\` text value. Garden is defaulting to ${name}="${text}".`;

      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn(message);
      }

      props[name] = text;
    }
  }, [propName /* eslint-disable-line react-hooks/exhaustive-deps */]);
};
