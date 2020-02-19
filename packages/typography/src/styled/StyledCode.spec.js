/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { getColor } from '@zendeskgarden/react-theming';
import { StyledCode } from './StyledCode';

describe('StyledCode', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledCode />);

    expect(container.firstChild.nodeName).toBe('CODE');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledCode />);

    expect(container.firstChild).toHaveStyleRule('font-family', /monospace/u);
  });

  describe('size', () => {
    it('renders small size', () => {
      const { container } = render(<StyledCode size="sm" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '11px');
    });

    it('renders medium size', () => {
      const { container } = render(<StyledCode size="md" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '13px');
    });

    it('renders large size', () => {
      const { container } = render(<StyledCode size="lg" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '17px');
    });
  });

  describe('hue', () => {
    it('renders using a default neutral hue', () => {
      const { container } = render(<StyledCode />);
      const color = getColor('neutralHue', 200);

      expect(container.firstChild).toHaveStyleRule('background-color', color);
    });

    it('renders using a custom hue', () => {
      const { container } = render(<StyledCode hue="azure" />);
      const color = getColor('azure', 200);

      expect(container.firstChild).toHaveStyleRule('background-color', color);
    });
  });
});
