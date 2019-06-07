/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders default styling correctly', () => {
    const { container } = render(
      <Avatar>
        <svg />
      </Avatar>
    );

    expect(container.firstChild).toHaveClass('c-tag__avatar');
  });
});
