/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { default as MultiThumbRange } from './elements/MultiThumbRange';
export { default as Range } from './elements/Range';
export { default as RangeField } from './elements/RangeField';
export { default as Hint } from './views/Hint';
export { default as Label } from './views/Label';
export { default as Message } from './views/Message';
export { default as RangeGroup } from './views/RangeGroup';
export { default as SingleThumbView } from './views/SingleThumbView';

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable no-console */
  console.warn(
    'Deprecation Warning: The `@zendeskgarden/react-ranges` package has been deprecated. ' +
      'It will be removed in an upcoming major release. Migrate to the ' +
      '`@zendeskgarden/react-forms` package to continue receiving updates.'
  );
  /* eslint-enable */
}
