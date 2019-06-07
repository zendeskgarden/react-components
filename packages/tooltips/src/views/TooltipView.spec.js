/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import TooltipView from './TooltipView';

describe('TooltipView', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<TooltipView />);

    expect(container.firstChild).toHaveClass('c-tooltip');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<TooltipView />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  describe('Sizing', () => {
    ['medium', 'large', 'extra-large'].forEach(size => {
      it(`renders ${size} size correctly`, () => {
        const { container } = render(<TooltipView size={size} />);

        expect(container.firstChild).toHaveClass(`c-tooltip--${size}`);
      });
    });
  });

  describe('Placement', () => {
    [
      'top',
      'top-start',
      'top-end',
      'right',
      'right-start',
      'right-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end'
    ].forEach(placement => {
      const classes = {
        top: 'b',
        'top-start': 'bl',
        'top-end': 'br',
        right: 'l',
        'right-start': 'lt',
        'right-end': 'lb',
        bottom: 't',
        'bottom-start': 'tl',
        'bottom-end': 'tr',
        left: 'r',
        'left-start': 'rt',
        'left-end': 'rb'
      };

      it(`renders ${placement} placement correctly`, () => {
        const { container } = render(<TooltipView placement={placement} />);

        expect(container.firstChild).toHaveClass(`c-arrow--${classes[placement]}`);
      });
    });

    it('does not render arrow styling if disabled', () => {
      const { container } = render(<TooltipView arrow={false} placement="top" />);

      expect(container.firstChild).not.toHaveClass('c-arrow');
    });
  });
});
