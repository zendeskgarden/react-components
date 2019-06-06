/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Avatar, Text } from './';

describe('Avatar', () => {
  it('applies system styling if provided', () => {
    const { container } = render(<Avatar isSystem />);

    expect(container.firstChild).toHaveClass('c-avatar--system');
  });

  it('applies size if provided', () => {
    const { container } = render(<Avatar size="large" />);

    expect(container.firstChild).toHaveClass('c-avatar--lg');
  });

  it('applies away styling if provided', () => {
    const { container } = render(<Avatar status="away" />);

    expect(container.firstChild).toHaveClass('is-away');
  });

  it('applies available styling if provided without badge', () => {
    const { container } = render(<Avatar status="available" />);

    expect(container.firstChild).toHaveClass('is-available');
  });

  it('applies active styling if provided with badge', () => {
    const { container } = render(
      <Avatar status="available" badge={<span data-test-id="badge">2</span>} />
    );

    expect(container.firstChild).toHaveClass('is-active');
  });

  it('renders badge if provided with status', () => {
    const { getByTestId } = render(
      <Avatar status="available" badge={<span data-test-id="badge">2</span>} />
    );

    expect(getByTestId('badge')).not.toBeUndefined();
  });

  it('does not render badge if away status is provided', () => {
    const { queryByTestId } = render(
      <Avatar status="away" badge={<span data-test-id="badge">2</span>} />
    );

    expect(queryByTestId('badge')).toBe(null);
  });

  it('renders text element if provided', () => {
    const { getByTestId } = render(
      <Avatar>
        <Text data-test-id="text">AG</Text>
      </Avatar>
    );

    expect(getByTestId('text')).not.toBeUndefined();
  });
});
