/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import List from './List';
import Item from './Item';

describe('List', () => {
  it('applies unordered rendering by default', () => {
    const { container } = render(<List />);

    expect(container.querySelector('ul')).not.toBe(null);
  });

  it('applies ordered rendering if provided', () => {
    const { container } = render(<List ordered />);

    expect(container.querySelector('ol')).not.toBe(null);
  });

  it('applies correct styling with RTL layout', () => {
    const { container } = renderRtl(<List />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const { container } = render(
        <List size="small">
          <Item>item</Item>
        </List>
      );

      expect(container.querySelector('div')).toHaveStyleRule('padding', '0');
    });

    it('renders medium styling if provided', () => {
      const { container } = render(
        <List size="medium">
          <Item>item</Item>
        </List>
      );

      expect(container.querySelector('div')).toHaveStyleRule('padding', '2px 0');
    });

    it('renders large styling if provided', () => {
      const { container } = render(
        <List size="large">
          <Item>item</Item>
        </List>
      );

      expect(container.querySelector('div')).toHaveStyleRule('padding', '4px 0');
    });
  });

  describe('type', () => {
    describe('unordered', () => {
      it('renders disc styling if provided', () => {
        const { container } = render(<List type="disc" />);

        expect(container.firstChild).toHaveStyleRule('list-style-type', 'disc');
      });

      it('renders circle styling if provided', () => {
        const { container } = render(<List type="circle" />);

        expect(container.firstChild).toHaveStyleRule('list-style-type', 'circle');
      });

      it('renders square styling if provided', () => {
        const { container } = render(<List type="square" />);

        expect(container.firstChild).toHaveStyleRule('list-style-type', 'square');
      });
    });

    describe('ordered', () => {
      it('renders decimal styling if provided', () => {
        const { container } = render(<List ordered type="decimal" />);

        expect(container.firstChild).toHaveStyleRule('list-style-type', 'decimal');
      });

      it('renders decimal-leading-zero styling if provided', () => {
        const { container } = render(<List ordered type="decimal-leading-zero" />);

        expect(container.firstChild).toHaveStyleRule('list-style-type', 'decimal-leading-zero');
      });

      it('renders lower-alpha styling if provided', () => {
        const { container } = render(<List ordered type="lower-alpha" />);

        expect(container.firstChild).toHaveStyleRule('list-style-type', 'lower-alpha');
      });

      it('renders upper-alpha styling if provided', () => {
        const { container } = render(<List ordered type="upper-alpha" />);

        expect(container.firstChild).toHaveStyleRule('list-style-type', 'upper-alpha');
      });

      it('renders lower-roman styling if provided', () => {
        const { container } = render(<List ordered type="lower-roman" />);

        expect(container.firstChild).toHaveStyleRule('list-style-type', 'lower-roman');
      });

      it('renders upper-roman styling if provided', () => {
        const { container } = render(<List ordered type="upper-roman" />);

        expect(container.firstChild).toHaveStyleRule('list-style-type', 'upper-roman');
      });
    });

    it('falls back to default styling if type is not applicable to an unordered list', () => {
      const { container } = render(<List type="decimal" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', undefined);
    });

    it('falls back to default styling if type is not applicable to an ordered list', () => {
      const { container } = render(<List ordered type="disc" />);

      expect(container.firstChild).toHaveStyleRule('list-style-type', undefined);
    });
  });
});
