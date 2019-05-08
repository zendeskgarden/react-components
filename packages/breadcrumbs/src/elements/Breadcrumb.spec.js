/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import Breadcrumb from './Breadcrumb';
import Item from '../views/Item';

const BasicExample = () => (
  <Breadcrumb data-test-id="breadcrumb">
    <a data-test-id="item" href="/#">
      One
    </a>
    <a data-test-id="item" href="/#">
      Two
    </a>
    <Item data-test-id="item">Three</Item>
  </Breadcrumb>
);

describe('Breadcrumb', () => {
  describe('BreadcrumbView', () => {
    it('receives BreadcrumbContainer props', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('breadcrumb').parentElement).toHaveAttribute(
        'aria-label',
        'Breadcrumb navigation'
      );
    });

    it('does not receive BreadcrumbContainer `role` prop', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('breadcrumb').parentElement).not.toHaveAttribute('role');
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

      expect(getAllByTestId('item')[2]).toHaveClass('is-current');
    });

    it('does not receive current styling if not last', () => {
      const { getAllByTestId } = render(<BasicExample />);

      expect(getAllByTestId('item')[0]).not.toHaveClass('is-current');
    });
  });
});
