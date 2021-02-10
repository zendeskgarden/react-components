/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import OrderedList from './OrderedList';

describe('OrderedList', () => {
  it('applies <ol> rendering if provided', () => {
    const { container } = render(<OrderedList />);

    expect(container.querySelector('ol')).not.toBeNull();
  });

  it('applies correct styling with RTL layout', () => {
    const { container } = renderRtl(<OrderedList />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const { container } = render(
        <OrderedList size="small">
          <OrderedList.Item>item</OrderedList.Item>
        </OrderedList>
      );

      expect(container.querySelector('li')).not.toHaveStyleRule('padding-top');
    });

    it('renders medium styling if provided', () => {
      const { container } = render(
        <OrderedList size="medium">
          <OrderedList.Item>item</OrderedList.Item>
        </OrderedList>
      );

      expect(container.querySelector('li')).toHaveStyleRule('padding-top', '4px');
    });

    it('renders large styling if provided', () => {
      const { container } = render(
        <OrderedList size="large">
          <OrderedList.Item>item</OrderedList.Item>
        </OrderedList>
      );

      expect(container.querySelector('li')).toHaveStyleRule('padding-top', '8px');
    });
  });

  describe('type', () => {
    it('renders decimal styling if provided', () => {
      const { container } = render(<OrderedList type="decimal" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'decimal');
    });

    it('renders decimal-leading-zero styling if provided', () => {
      const { container } = render(<OrderedList type="decimal-leading-zero" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'decimal-leading-zero');
    });

    it('renders lower-alpha styling if provided', () => {
      const { container } = render(<OrderedList type="lower-alpha" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'lower-alpha');
    });

    it('renders upper-alpha styling if provided', () => {
      const { container } = render(<OrderedList type="upper-alpha" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'upper-alpha');
    });

    it('renders lower-roman styling if provided', () => {
      const { container } = render(<OrderedList type="lower-roman" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'lower-roman');
    });

    it('renders upper-roman styling if provided', () => {
      const { container } = render(<OrderedList type="upper-roman" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', 'upper-roman');
    });
  });
});
