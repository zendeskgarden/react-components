/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createRef, useState } from 'react';
import { render, screen } from 'garden-test-utils';
import userEvent from '@testing-library/user-event';
import { ColorSwatch } from './index';
import { IColorSwatchProps } from '../../types';

const colors = [
  [
    { label: 'Green-800', value: '#0b3b29' },
    { label: 'Green-700', value: '#186146' }
  ],
  [
    { label: 'Green-600', value: '#038153' },
    { label: 'Green-500', value: '#228f67' }
  ]
];

describe('ColorSwatch', () => {
  const user = userEvent.setup();

  beforeAll(() => {
    const elementMatches = HTMLElement.prototype.matches;

    // Override `.matches` currently missing from JSDOM
    HTMLElement.prototype.matches = function matches(selector: string) {
      let retVal;

      if (selector === ':focus-visible') {
        retVal = this === document.activeElement;
      } else {
        retVal = elementMatches.call(this, selector);
      }

      return retVal;
    };
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLTableElement>();

    render(<ColorSwatch colors={colors} name="test" ref={ref} />);

    expect(ref.current).toBe(screen.getByRole('grid'));
  });

  describe('Uncontrolled', () => {
    it('sets selection as expected', async () => {
      const { container } = render(<ColorSwatch colors={colors} name="test" />);
      const selector = 'input[name="test"]:checked';

      expect(container.querySelector<HTMLInputElement>(selector)).toBeNull();

      await user.tab();
      await user.type(document.activeElement as HTMLElement, '{space}');

      expect(container.querySelector<HTMLInputElement>(selector)?.value).toBe('#0b3b29');

      await user.click(screen.getByLabelText('Green-600'));

      expect(container.querySelector<HTMLInputElement>(selector)?.value).toBe('#038153');
    });

    it('prevents radio deselection', async () => {
      const { container } = render(
        <ColorSwatch
          colors={colors}
          name="test"
          defaultSelectedRowIndex={0}
          defaultSelectedColIndex={0}
        />
      );
      const selector = 'input[name="test"]:checked';

      expect(container.querySelector<HTMLInputElement>(selector)?.value).toBe('#0b3b29');

      await user.click(screen.getByLabelText('Green-800'));

      expect(container.querySelector<HTMLInputElement>(selector)?.value).toBe('#0b3b29');
    });

    it('allows checkbox deselection', async () => {
      const { container } = render(
        <ColorSwatch
          colors={colors}
          name="test"
          isCheckboxGroup
          defaultSelectedRowIndex={0}
          defaultSelectedColIndex={0}
        />
      );
      const selector = 'input[name="test"]:checked';

      expect(container.querySelector<HTMLInputElement>(selector)?.value).toBe('#0b3b29');

      await user.click(screen.getByLabelText('Green-800'));

      expect(container.querySelector<HTMLInputElement>(selector)).toBeNull();
    });
  });

  describe('Controlled', () => {
    const ControlledColorSwatch = ({
      selectedRowIndex = null,
      selectedColIndex = null,
      ...props
    }: IColorSwatchProps) => {
      const [rowIndex, setRowIndex] = useState<number | null>(selectedRowIndex);
      const [colIndex, setColIndex] = useState<number | null>(selectedColIndex);
      const handleSelect = (row: number | null, col: number | null) => {
        setRowIndex(row);
        setColIndex(col);
      };

      return (
        <ColorSwatch
          selectedRowIndex={rowIndex}
          selectedColIndex={colIndex}
          onSelect={handleSelect}
          {...props}
        />
      );
    };

    it('sets selection as expected', async () => {
      const { container } = render(<ControlledColorSwatch colors={colors} name="test" />);
      const selector = 'input[name="test"]:checked';

      expect(container.querySelector<HTMLInputElement>(selector)).toBeNull();

      await user.tab();
      await user.type(document.activeElement as HTMLElement, '{space}');

      expect(container.querySelector<HTMLInputElement>(selector)?.value).toBe('#0b3b29');

      await user.click(screen.getByLabelText('Green-600'));

      expect(container.querySelector<HTMLInputElement>(selector)?.value).toBe('#038153');
    });

    it('prevents radio deselection', async () => {
      const { container } = render(
        <ControlledColorSwatch
          colors={colors}
          name="test"
          selectedRowIndex={0}
          selectedColIndex={0}
        />
      );
      const selector = 'input[name="test"]:checked';

      expect(container.querySelector<HTMLInputElement>(selector)?.value).toBe('#0b3b29');

      await user.click(screen.getByLabelText('Green-800'));

      expect(container.querySelector<HTMLInputElement>(selector)?.value).toBe('#0b3b29');
    });

    it('allows checkbox deselection', async () => {
      const { container } = render(
        <ControlledColorSwatch
          colors={colors}
          name="test"
          isCheckboxGroup
          selectedRowIndex={0}
          selectedColIndex={0}
        />
      );
      const selector = 'input[name="test"]:checked';

      expect(container.querySelector<HTMLInputElement>(selector)?.value).toBe('#0b3b29');

      await user.click(screen.getByLabelText('Green-800'));

      expect(container.querySelector<HTMLInputElement>(selector)).toBeNull();
    });
  });

  describe('onFocus', () => {
    it('adjusts radio group tab index to selection on blur', async () => {
      render(
        <ColorSwatch
          colors={colors}
          name="test"
          defaultSelectedRowIndex={1}
          defaultSelectedColIndex={1}
        />
      );

      await user.tab(); // focus

      expect((document.activeElement as HTMLInputElement).value).toBe('#228f67');

      await user.keyboard('{arrowup}');
      await user.keyboard('{arrowleft}');

      expect((document.activeElement as HTMLInputElement).value).toBe('#0b3b29');

      await user.tab(); // blur
      await user.tab({ shift: true }); // re-focus

      expect((document.activeElement as HTMLInputElement).value).toBe('#228f67');
    });

    it('does not adjust checkbox group tab index to selection on blur', async () => {
      render(
        <ColorSwatch
          colors={colors}
          name="test"
          isCheckboxGroup
          defaultSelectedRowIndex={1}
          defaultSelectedColIndex={1}
        />
      );

      await user.tab(); // focus

      expect((document.activeElement as HTMLInputElement).value).toBe('#228f67');

      await user.keyboard('{arrowup}');
      await user.keyboard('{arrowleft}');

      expect((document.activeElement as HTMLInputElement).value).toBe('#0b3b29');

      await user.tab(); // blur
      await user.tab({ shift: true }); // re-focus

      expect((document.activeElement as HTMLInputElement).value).toBe('#0b3b29');
    });
  });
});
