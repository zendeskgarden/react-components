/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('applies light mode correctly', () => {
    const { container } = render(<Skeleton />);

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      expect.stringContaining('0.1')
    );
    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      expect.stringContaining('linear-gradient'),
      {
        modifier: '&::before'
      }
    );
  });

  it('applies light styling correctly', () => {
    const { container } = render(<Skeleton isLight />);

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      expect.stringContaining('0.2')
    );
    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      expect.stringContaining('linear-gradient'),
      {
        modifier: '&::before'
      }
    );
  });

  it('applies custom width correctly', () => {
    const { container } = render(<Skeleton width="50px" />);

    expect(container.firstChild).toHaveStyleRule('width', '50px');
  });

  it('applies custom height correctly', () => {
    const { container } = render(<Skeleton height="50px" />);

    expect(container.firstChild).toHaveStyleRule('height', '50px');
  });

  it('applies RTL styling correctly', () => {
    const { container } = renderRtl(<Skeleton />);

    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      'linear-gradient( -45deg, transparent, rgba(255,255,255,0.6), transparent )',
      {
        modifier: '&::before'
      }
    );
  });
});
