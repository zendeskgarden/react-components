/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import DEFAULT_THEME from '../../theming/elements/theme';
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

const ConditionalExample = ({ showHidden = false }: { showHidden?: boolean }) => (
  <Breadcrumb>
    <a data-test-id="item" href="/#">
      First
    </a>
    {null}
    <a data-test-id="item" href="/#">
      Last
    </a>
    {showHidden ? <span data-test-id="hidden-item">Hidden</span> : null}
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
      const ref = createRef<HTMLDivElement>();
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

  describe('Conditional children', () => {
    it('ignores non-element children when finding the current item', () => {
      const { container, getAllByTestId } = render(<ConditionalExample />);
      const items = getAllByTestId('item');

      expect(items).toHaveLength(2);
      expect(items[0]).not.toHaveAttribute('aria-current');
      expect(items[1]).toHaveAttribute('aria-current', 'page');
      expect(container.querySelectorAll('li[aria-hidden="true"]')).toHaveLength(1);
    });
  });

  describe('Separator', () => {
    it('renders aria-hidden with the item garden id', () => {
      const { container } = render(<BasicExample />);
      const separators = container.querySelectorAll('li[aria-hidden="true"]');

      expect(separators).toHaveLength(2);
      separators.forEach(separator => {
        expect(separator).toHaveAttribute('data-garden-id', 'breadcrumbs.item');
      });
    });

    it('sizes the chevron to the compact icon size', () => {
      const { container } = render(<BasicExample />);
      const chevrons = container.querySelectorAll('li[aria-hidden="true"] svg');

      expect(chevrons).toHaveLength(2);
      chevrons.forEach(chevron => {
        expect(chevron).toHaveStyleRule('width', DEFAULT_THEME.iconSizes.md);
        expect(chevron).toHaveStyleRule('height', DEFAULT_THEME.iconSizes.md);
      });
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
