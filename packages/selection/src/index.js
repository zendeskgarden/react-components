/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { default as KEY_CODES } from './constants/KEY_CODES';
export { default as KeyboardFocusContainer } from './containers/KeyboardFocusContainer';
export { default as SelectionContainer } from './containers/SelectionContainer';
export { default as FieldContainer } from './containers/FieldContainer';
export { default as composeEventHandlers } from './utils/composeEventHandlers';
export { default as ControlledComponent } from './utils/ControlledComponent';
export { default as IdManager } from './utils/IdManager';
export { default as SingleSelectionModel } from './utils/SingleSelectionModel';

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable no-console */
  console.warn(
    'Deprecation Warning: The `@zendeskgarden/react-selection` package has been deprecated. ' +
      'It will be removed in an upcoming major release. Migrate to the ' +
      '`@zendeskgarden/container-selection` package to continue receiving updates.'
  );
  /* eslint-enable */
}
