/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { getColor } from '@zendeskgarden/react-theming';
import { StyledTag } from './StyledTag';

describe('StyledTag', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledTag />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledTag />);

    expect(container.firstChild).toHaveStyleRule('display', 'inline-flex');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledTag />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('renders pill styling if provided', () => {
    const { container } = render(<StyledTag pill />);

    expect(container.firstChild).toHaveStyleRule('border-radius', '100px');
  });

  it('renders round styling if provided', () => {
    const { container } = render(<StyledTag round />);

    expect(container.firstChild).toHaveStyleRule('border-radius', '50%');
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<StyledTag size="small" />);

      expect(container.firstChild).toHaveStyleRule('height', '16px');
    });

    it('renders medium styling if provided', () => {
      const { container } = render(<StyledTag size="medium" />);

      expect(container.firstChild).toHaveStyleRule('height', '20px');
    });

    it('renders large styling if provided', () => {
      const { container } = render(<StyledTag size="large" />);

      expect(container.firstChild).toHaveStyleRule('height', '32px');
    });
  });

  describe('hue', () => {
    it('renders using a default neutral hue', () => {
      const { container } = render(<StyledTag />);
      const color = getColor('neutralHue', 200);

      expect(container.firstChild).toHaveStyleRule('background-color', color);
    });

    it('renders using a custom hue', () => {
      const { container } = render(<StyledTag hue="azure" />);
      const color = getColor('azure', 600);

      expect(container.firstChild).toHaveStyleRule('background-color', color);
    });

    it('renders a dark foreground on a light background', () => {
      const { container } = render(<StyledTag hue="white" />);
      const color = getColor('foreground');

      expect(container.firstChild).toHaveStyleRule('color', color);
    });

    it('renders a light foreground on a dark background', () => {
      const { container } = render(<StyledTag hue="black" />);
      const color = getColor('background');

      expect(container.firstChild).toHaveStyleRule('color', color);
    });
  });
});
