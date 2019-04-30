/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import '@zendeskgarden/react-menus/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';
import '@zendeskgarden/react-tags/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable no-console */
  console.warn(
    'Deprecation Warning: The `@zendeskgarden/react-autocomplete` package has been deprecated. ' +
      'It will be removed in an upcoming major release. Migrate to the ' +
      '`@zendeskgarden/react-dropdowns` package to continue receiving updates.'
  );
  /* eslint-enable */
}

export { default as Autocomplete } from './elements/Autocomplete';
export { default as Multiselect } from './elements/Multiselect';
export { default as AutocompleteContainer } from './containers/AutocompleteContainer';
