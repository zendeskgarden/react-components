/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';

import { StyledStatusIndicator } from './StyledStatusIndicator';

describe('StyledStatusIndicator', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledStatusIndicator />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders avatar styling by default', () => {
    const { container } = render(<StyledStatusIndicator />);

    expect(container.firstChild).toHaveStyleRule('border-radius', '12px');
  });

  describe('color', () => {
    it('renders surface color as expected', () => {
      const { container } = render(<StyledStatusIndicator $surfaceColor="red" />);

      expect(container.firstChild).toHaveStyleRule('box-shadow', DEFAULT_THEME.shadows.sm('red'));
    });

    it('renders surface color variable key as expected', () => {
      const { container } = render(<StyledStatusIndicator $surfaceColor="border.warning" />);

      expect(container.firstChild).toHaveStyleRule(
        'box-shadow',
        DEFAULT_THEME.shadows.sm(PALETTE.yellow[300])
      );
    });
  });

  describe('size', () => {
    it('renders extraextrasmall', () => {
      const { container } = render(<StyledStatusIndicator $size="extraextrasmall" />);

      expect(container.firstChild).toHaveStyleRule('height', '3px');
      expect(container.firstChild).toHaveStyleRule(
        'border',
        `1px ${DEFAULT_THEME.borderStyles.solid}`
      );
    });

    it('renders extrasmall', () => {
      const { container } = render(<StyledStatusIndicator $size="extrasmall" />);

      expect(container.firstChild).toHaveStyleRule('height', '4px');
      expect(container.firstChild).toHaveStyleRule(
        'border',
        `2px ${DEFAULT_THEME.borderStyles.solid}`
      );
    });

    it('renders small', () => {
      const { container } = render(<StyledStatusIndicator $size="small" />);

      expect(container.firstChild).toHaveStyleRule('height', '8px');
      expect(container.firstChild).toHaveStyleRule(
        'border',
        `2px ${DEFAULT_THEME.borderStyles.solid}`
      );
    });

    it('renders medium', () => {
      const { container } = render(<StyledStatusIndicator $size="medium" />);

      expect(container.firstChild).toHaveStyleRule('height', '12px');
      expect(container.firstChild).toHaveStyleRule(
        'border',
        `2px ${DEFAULT_THEME.borderStyles.solid}`
      );
    });

    it('renders large', () => {
      const { container } = render(<StyledStatusIndicator $size="large" />);

      expect(container.firstChild).toHaveStyleRule('height', '12px');
      expect(container.firstChild).toHaveStyleRule(
        'border',
        `2px ${DEFAULT_THEME.borderStyles.solid}`
      );
    });
  });

  describe('type', () => {
    it('renders default', () => {
      const { container } = render(<StyledStatusIndicator />);

      expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    });

    describe('away', () => {
      it('renders away style', () => {
        const { container } = render(<StyledStatusIndicator $type="away" />);

        expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.orange[500]);
      });
    });

    describe('transfers', () => {
      it('renders transfers style', () => {
        const { container } = render(<StyledStatusIndicator $type="transfers" />);

        expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.azure[500]);
      });
    });

    describe('active', () => {
      it('renders active style', () => {
        const { container } = render(<StyledStatusIndicator $type="active" />);

        expect(container.firstChild).toHaveStyleRule('height', '16px');
        expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.crimson[700]);
      });

      it('renders active style with small size', () => {
        const { container } = render(<StyledStatusIndicator $type="active" $size="small" />);

        expect(container.firstChild).toHaveStyleRule('height', '12px');
        expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.crimson[700]);
      });
    });

    describe('available', () => {
      it('renders available style', () => {
        const { container } = render(<StyledStatusIndicator $type="available" />);

        expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.mint[500]);
      });
    });

    describe('offline', () => {
      it('renders offline style', () => {
        const { container } = render(<StyledStatusIndicator $type="offline" />);

        expect(container.firstChild).toHaveStyleRule('border-color', PALETTE.grey[500]);
      });
    });
  });
});
