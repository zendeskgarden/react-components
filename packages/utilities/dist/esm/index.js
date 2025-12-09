/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
export { default as hasType } from './utils/hasType.js';
export { default as requiredParam } from './utils/requiredParam.js';

if (process.env.NODE_ENV !== 'production') {
  console.warn('Deprecation Warning: The `@zendeskgarden/react-utilities` package has been deprecated. ' + 'It will be removed in an upcoming major release. Migrate to the ' + '`@zendeskgarden/container-utilities` package to continue receiving updates.');
}
