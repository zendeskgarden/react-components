/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable no-console */
  console.warn(
    'Deprecation Warning: The `@zendeskgarden/react-utilities` package has been deprecated. ' +
      'It will be removed in an upcoming major release. Migrate to the ' +
      '`@zendeskgarden/container-utilities` package to continue receiving updates.'
  );
  /* eslint-enable */
}

export { default as hasType } from './utils/hasType';
export { default as requiredParam } from './utils/requiredParam';
