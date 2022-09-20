/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl, cleanup } from 'garden-test-utils';

import { StatusIndicator } from './StatusIndicator';
import { STATUS } from '../types';

describe('StatusIndicator', () => {
  afterEach(cleanup);

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLElement>();
    const { container } = render(<StatusIndicator type="available" ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('has the correct roles', () => {
    const { getByRole, container } = render(<StatusIndicator type="available" />);

    expect(getByRole('status')).toBe(container.firstChild);
    expect(getByRole('img')).toBe(container.firstChild?.firstChild);
  });

  it('renders with a caption', () => {
    const text = 'caption';
    const { getByText } = render(<StatusIndicator type="available">{text}</StatusIndicator>);

    expect(getByText(text).nodeName).toBe('FIGCAPTION');
  });

  it('renders in compact mode', () => {
    const { getByRole } = render(<StatusIndicator type="available" isCompact />);

    expect(getByRole('img')).toHaveStyleRule('height', '8px');
  });

  it('renders in RTL mode', () => {
    const { getByRole } = renderRtl(<StatusIndicator type="transfers">Caption</StatusIndicator>);

    expect(getByRole('img')).toHaveStyleRule('transform', 'scale(-1,1)', {
      modifier: "& > svg[data-icon-status='transfers']"
    });
  });

  describe('types', () => {
    it.each(STATUS)('renders "$1" status type, and with aria label', type => {
      const { getByRole } = render(<StatusIndicator type={type} />);

      expect(getByRole('img')).toHaveAttribute('aria-label', `status: ${type}`);
    });
  });
});
