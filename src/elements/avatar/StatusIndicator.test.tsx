/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { cleanup } from '@testing-library/react';
import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import { STATUS } from '../../types/elements';
import { StatusIndicator } from './StatusIndicator';

describe('StatusIndicator', () => {
  afterEach(cleanup);

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLElement>();
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

  it('renders the Garden ids and versions, which a prop cannot replace', () => {
    const { container, getByRole, getByText } = render(
      <StatusIndicator type="available" data-garden-id="custom" data-garden-version="0.0.0">
        caption
      </StatusIndicator>
    );

    const elements = [
      [container.firstChild, 'avatars.status-indicator.status'],
      [getByRole('img'), 'avatars.status-indicator.indicator'],
      [getByText('caption'), 'avatars.status-indicator.caption']
    ] as const;

    elements.forEach(([element, id]) => {
      expect(element).toHaveAttribute('data-garden-id', id);
      expect(element).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    });
  });

  it('renders offline type by default', () => {
    const { getByRole } = render(<StatusIndicator />);

    expect(getByRole('img')).toHaveStyleRule('border-color', PALETTE.grey[500]);
  });

  it('renders in compact mode', () => {
    const { getByRole } = render(<StatusIndicator type="available" isCompact />);

    expect(getByRole('img')).toHaveStyleRule('height', '8px');
  });

  it('renders in RTL mode', () => {
    const { getByRole } = render(<StatusIndicator type="transfers">Caption</StatusIndicator>, {
      theme: RTL_THEME
    });

    expect(getByRole('img')).toHaveStyleRule('transform', 'scale(-1, 1)', {
      modifier: "&>svg[data-icon-status='transfers']"
    });
  });

  describe('types', () => {
    it.each(STATUS)('renders "$1" status type, and with aria label', type => {
      const { getByRole } = render(<StatusIndicator type={type} />);

      expect(getByRole('img')).toHaveAttribute('aria-label', `status: ${type}`);
    });

    it.each(STATUS)('renders "$1" status type, and with aria label removed', type => {
      const { container } = render(<StatusIndicator aria-label={null} type={type} />);
      const imgElement = container.firstChild?.firstChild;

      expect(imgElement).not.toHaveAttribute('aria-label');
      expect(imgElement).toHaveAttribute('aria-hidden');
    });
  });
});
