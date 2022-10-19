/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

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
      const { container } = render(<StyledStatusIndicator surfaceColor="red" />);

      expect(container.firstChild).toHaveStyleRule('box-shadow', DEFAULT_THEME.shadows.sm('red'));
    });
  });

  describe('size', () => {
    it('renders extraextrasmall', () => {
      const { container } = render(<StyledStatusIndicator size="extraextrasmall" />);

      expect(container.firstChild).toHaveStyleRule('height', '3px');
      expect(container.firstChild).toHaveStyleRule(
        'border',
        `1px ${DEFAULT_THEME.borderStyles.solid}`
      );
    });

    it('renders extrasmall', () => {
      const { container } = render(<StyledStatusIndicator size="extrasmall" />);

      expect(container.firstChild).toHaveStyleRule('height', '4px');
      expect(container.firstChild).toHaveStyleRule(
        'border',
        `2px ${DEFAULT_THEME.borderStyles.solid}`
      );
    });

    it('renders small', () => {
      const { container } = render(<StyledStatusIndicator size="small" />);

      expect(container.firstChild).toHaveStyleRule('height', '8px');
      expect(container.firstChild).toHaveStyleRule(
        'border',
        `2px ${DEFAULT_THEME.borderStyles.solid}`
      );
    });

    it('renders medium', () => {
      const { container } = render(<StyledStatusIndicator size="medium" />);

      expect(container.firstChild).toHaveStyleRule('height', '12px');
      expect(container.firstChild).toHaveStyleRule(
        'border',
        `2px ${DEFAULT_THEME.borderStyles.solid}`
      );
    });

    it('renders large', () => {
      const { container } = render(<StyledStatusIndicator size="large" />);

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
        const { container } = render(<StyledStatusIndicator type="away" />);
        const color = getColor('orange', 400);

        expect(container.firstChild).toHaveStyleRule('background-color', color);
      });
    });

    describe('transfers', () => {
      it('renders transfers style', () => {
        const { container } = render(<StyledStatusIndicator type="transfers" />);
        const color = getColor('azure', 400);

        expect(container.firstChild).toHaveStyleRule('background-color', color);
      });
    });

    describe('active', () => {
      it('renders active style', () => {
        const { container } = render(<StyledStatusIndicator type="active" />);
        const color = getColor('crimson', 400);

        expect(container.firstChild).toHaveStyleRule('height', '16px');
        expect(container.firstChild).toHaveStyleRule('background-color', color);
      });

      it('renders active style with small size', () => {
        const { container } = render(<StyledStatusIndicator type="active" size="small" />);
        const color = getColor('crimson', 400);

        expect(container.firstChild).toHaveStyleRule('height', '12px');
        expect(container.firstChild).toHaveStyleRule('background-color', color);
      });
    });

    describe('available', () => {
      it('renders available style', () => {
        const { container } = render(<StyledStatusIndicator type="available" />);
        const color = getColor('mint', 400);

        expect(container.firstChild).toHaveStyleRule('background-color', color);
      });
    });

    describe('offline', () => {
      it('renders offline style', () => {
        const { container } = render(<StyledStatusIndicator type="offline" />);
        const color = getColor('grey', 500);

        expect(container.firstChild).toHaveStyleRule('border-color', `${color}`);
      });
    });
  });
});
