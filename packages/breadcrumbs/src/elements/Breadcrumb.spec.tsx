/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import React from 'react';

import { Breadcrumb } from './Breadcrumb';

const BasicExample = () => (
  <Breadcrumb data-test-id="breadcrumb">
    <a data-test-id="item" href="/#">
      One
    </a>
    <a data-test-id="item" href="/#">
      Two
    </a>
    <span data-test-id="item">Three</span>
  </Breadcrumb>
);

describe('Breadcrumb', () => {
  describe('Breadcrumb', () => {
    it('receives useBreadcrumb() props', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('breadcrumb')).toHaveAttribute('aria-label', 'Breadcrumbs');
    });

    it('does not receive useBreadcrumb() `role` prop', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('breadcrumb').parentElement).not.toHaveAttribute('role');
    });

    it('passes ref to underlying DOM element', () => {
      const ref = React.createRef<HTMLDivElement>();
      const { container } = render(<Breadcrumb ref={ref} />);

      expect(container.firstChild).toBe(ref.current);
    });
  });

  describe('Anchor List', () => {
    it('applies current aria values correctly', () => {
      const { getAllByTestId } = render(
        <Breadcrumb>
          <a href="/#" data-test-id="item">
            First
          </a>
          <a href="/#" data-test-id="item">
            Last
          </a>
        </Breadcrumb>
      );

      const items = getAllByTestId('item');

      expect(items[0]).not.toHaveAttribute('aria-current');
      expect(items[1]).toHaveAttribute('aria-current', 'page');
    });
  });

  describe('Item', () => {
    it('receives current styling if last', () => {
      const { getAllByTestId } = render(<BasicExample />);
      const items = getAllByTestId('item');
      const lastItemIndex = items.length - 1;

      items.forEach((item, i) => {
        if (i === lastItemIndex) {
          expect(item.parentElement).toHaveStyleRule('color', PALETTE.grey[700]);
        } else {
          expect(item.parentElement).toHaveStyleRule('color', 'inherit');
        }
      });
    });
  });
});
