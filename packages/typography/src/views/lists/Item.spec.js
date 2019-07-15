/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import List from './List';
import Item from './Item';

describe('Item', () => {
  it('applies default padding', () => {
    const { container } = render(
      <List>
        <Item />
      </List>
    );

    expect(container.querySelector('div')).toHaveStyleRule('padding', '2px 0');
  });
});
