/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import IconButton from './IconButton';
import GearIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';

describe('IconButton', () => {
  it('renders pill and muted styling by default', () => {
    const { container } = render(
      <IconButton>
        <GearIcon />
      </IconButton>
    );

    expect(container.firstChild).toHaveStyleRule('width', '40px');
  });
});
