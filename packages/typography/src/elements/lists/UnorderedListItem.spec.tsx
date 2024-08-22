/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { UnorderedList } from './UnorderedList';

describe('UnorderedListItem', () => {
  it('applies default padding', () => {
    const { container } = render(
      <UnorderedList>
        <UnorderedList.Item />
      </UnorderedList>
    );

    expect(container.querySelector('li')).toHaveStyleRule('padding-top', '4px');
  });
});
