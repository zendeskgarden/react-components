/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { useMemo } from 'react';

const useText = function (component, props, name, text) {
  let condition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  const value = condition ? props[name] : undefined;
  return useMemo(() => {
    if (condition) {
      if (name === 'children') {
        throw new Error('Error: `children` is not a valid `useText` prop.');
      } else if (value === null || value === '') {
        throw new Error(component.displayName ? `Error: you must provide a valid \`${name}\` text value for <${component.displayName}>.` : `Error: you must provide a valid \`${name}\` text value.`);
      } else if (value === undefined) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(component.displayName ? `Warning: you did not provide a customized/translated \`${name}\` text value for <${component.displayName}>. Zendesk Garden is rendering <${component.displayName} ${name}="${text}"> by default.` : `Warning: you did not provide a customized/translated \`${name}\` text value. Zendesk Garden is rendering ${name}="${text}" by default.`);
        }
        return text;
      }
    }
    return value;
  }, [component.displayName, value, name, text, condition]);
};

export { useText };
