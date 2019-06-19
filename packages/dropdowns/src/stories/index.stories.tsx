/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledMarkdown } from 'storybook-utils';

import README from '../../README.md';
import PROPS from './props.md';

storiesOf('Dropdowns', module)
  .add('Introduction', () => <StyledMarkdown dangerouslySetInnerHTML={{ __html: README }} />)
  .add('Components and props', () => (
    <StyledMarkdown dangerouslySetInnerHTML={{ __html: PROPS }} />
  ));

import './autocomplete.stories';
import './menu.stories';
import './select.stories';
