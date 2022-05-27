/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledStatusIndicator } from './StyledStatusIndicator';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

describe('StyledStatusIndicator', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledStatusIndicator />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders avatar styling by default', () => {
    const { container } = render(<StyledStatusIndicator />);

    expect(container.firstChild).toHaveStyleRule('border-radius', '100px');
  });

  describe('color', () => {
    it('renders surface color as expected', () => {
      const { container } = render(<StyledStatusIndicator status="away" surfaceColor="red" />);

      expect(container.firstChild).toHaveStyleRule('border-color', 'red');
    });

    it('renders background color as expected', () => {
      const { container } = render(<StyledStatusIndicator backgroundColor="red" />);

      expect(container.firstChild).toHaveStyleRule('background-color', 'red');
    });

    it('renders foreground color as expected', () => {
      const { container } = render(<StyledStatusIndicator foregroundColor="red" />);

      expect(container.firstChild).toHaveStyleRule('color', 'red');
    });
  });

  describe('size', () => {
    it('renders extraextrasmall', () => {
      const { container } = render(<StyledStatusIndicator size="extraextrasmall" />);

      expect(container.firstChild).toHaveStyleRule('height', '5px');
    });

    it('renders extrasmall', () => {
      const { container } = render(<StyledStatusIndicator size="extrasmall" />);

      expect(container.firstChild).toHaveStyleRule('height', '8px');
    });

    it('renders small', () => {
      const { container } = render(<StyledStatusIndicator size="small" />);

      expect(container.firstChild).toHaveStyleRule('height', '16px');
    });

    it('renders medium', () => {
      const { container } = render(<StyledStatusIndicator size="medium" />);

      expect(container.firstChild).toHaveStyleRule('height', '20px');
    });

    it('renders large', () => {
      const { container } = render(<StyledStatusIndicator size="large" />);

      expect(container.firstChild).toHaveStyleRule('height', '20px');
    });
  });

  describe('status', () => {
    it('renders default', () => {
      const { container } = render(<StyledStatusIndicator />);
      const color = getColor('grey', 400);

      expect(container.firstChild).toHaveStyleRule('box-shadow', DEFAULT_THEME.shadows.sm(color!), {
        modifier: '&::before'
      });
    });

    describe('away', () => {
      it('renders away style', () => {
        const { container } = render(<StyledStatusIndicator status="away" />);
        const color = getColor('yellow', 400);

        expect(container.firstChild).toHaveStyleRule('background-color', color);
      });
    });

    describe('active', () => {
      it('renders active style', () => {
        const { container } = render(<StyledStatusIndicator status="active" />);
        const color = getColor('crimson', 400);

        expect(container.firstChild).toHaveStyleRule('background-color', color);
      });
    });

    describe('available', () => {
      it('renders available style', () => {
        const { container } = render(<StyledStatusIndicator status="available" />);
        const color = getColor('mint', 400);

        expect(container.firstChild).toHaveStyleRule('background-color', color);
      });
    });
  });
});
