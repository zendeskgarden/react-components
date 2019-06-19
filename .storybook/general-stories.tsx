/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledMarkdown } from 'storybook-utils';

import README from '../README.md';
import CHANGELOG from '../CHANGELOG.md';
import API from '../API.md';

storiesOf('General', module)
  .add('README', () => <StyledMarkdown dangerouslySetInnerHTML={{ __html: README }} />, {
    notes: {
      markdown: `
## Documentation Under Development

We are in the process of moving our documentation from [styleguidist](https://github.com/styleguidist/react-styleguidist)
to [storybook](https://storybook.js.org/). Some documentation may be
missing or in the process of being moved.

[Visit the Garden Website](https://garden.zendesk.com/) for additional information
and documentation.
    `
    }
  })
  .add('CHANGELOG', () => <StyledMarkdown dangerouslySetInnerHTML={{ __html: CHANGELOG }} />)
  .add('API', () => <StyledMarkdown dangerouslySetInnerHTML={{ __html: API }} />);
