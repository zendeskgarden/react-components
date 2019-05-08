/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Icon from './Icon';

describe('Icon', () => {
  it('renders default styling correctly', () => {
    const { container } = render(
      <Icon>
        <svg />
      </Icon>
    );

    expect(container.firstChild).toHaveClass('c-btn__icon');
  });

  it('renders rotated styling if provided', () => {
    const { container } = render(
      <Icon rotated>
        <svg />
      </Icon>
    );

    expect(container.firstChild).toHaveClass('is-rotated');
  });
});
