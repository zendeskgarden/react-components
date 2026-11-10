/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, render } from '../../test/render';
import { Tab } from './Tab';
import { Tabs } from './Tabs';

describe('Tab', () => {
  it('is able to render without parent Tabs component', () => {
    expect(() => render(<Tab>Content</Tab>)).not.toThrow();
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Tab ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('contains all of the necessary attributes when disabled', () => {
    const { getByTestId } = render(<Tab disabled data-test-id="tab" />);

    const tab = getByTestId('tab');

    expect(tab).toHaveAttribute('role', 'tab');
    expect(tab).toHaveAttribute('aria-disabled', 'true');
    expect(tab).not.toHaveAttribute('disabled');
  });

  describe('styles', () => {
    it('is 40px high with no inline padding when horizontal', () => {
      const { getByRole } = render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );
      const tab = getByRole('tab');

      expect(tab).toHaveStyleRule('height', '40px');
      expect(tab).toHaveStyleRule('padding', '10px 0');
    });

    it('is 32px high with inline padding when vertical', () => {
      const { getByRole } = render(
        <Tabs isVertical>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );
      const tab = getByRole('tab');

      expect(tab).toHaveStyleRule('height', '32px');
      expect(tab).toHaveStyleRule('padding', '6px 12px');
    });

    it('draws a 2px focus ring around the label', () => {
      const { getByRole } = render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );
      const tab = getByRole('tab');

      expect(tab).toHaveStyleRule('border-width', '2px', { modifier: ':focus-visible::before' });
      expect(tab).toHaveStyleRule('border-radius', 'calc(8px - 1px)', {
        modifier: ':focus-visible::before'
      });
    });

    it('has no selection border', () => {
      const { getByRole } = render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );

      expect(getByRole('tab')).not.toHaveStyleRule('border-bottom', expect.anything());
    });

    it('changes the label color on hover', () => {
      const { getByRole } = render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );
      const tab = getByRole('tab');
      const defaultColor = getComputedStyle(tab).color;

      expect(tab).toHaveStyleRule('color', expect.stringMatching(/^#[0-9a-f]{6}$/iu), {
        modifier: ':hover'
      });
      expect(tab).not.toHaveStyleRule('color', defaultColor, { modifier: ':hover' });
    });

    it('uses the disabled color for a disabled tab', () => {
      const { getByTestId } = render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab item="one" disabled data-test-id="tab">
              One
            </Tabs.Tab>
          </Tabs.TabList>
        </Tabs>,
        { theme: DARK_THEME }
      );

      expect(getByTestId('tab')).toHaveStyleRule('cursor', 'default', {
        modifier: "&[aria-disabled='true']"
      });
    });
  });
});
