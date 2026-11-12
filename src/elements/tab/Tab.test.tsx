/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
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

  it('keeps id, aria-selected and aria-controls on a disabled tab', () => {
    const { getByRole } = render(
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab item="one" disabled>
            One
          </Tabs.Tab>
          <Tabs.Tab item="two">Two</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel item="one">Panel one</Tabs.TabPanel>
        <Tabs.TabPanel item="two">Panel two</Tabs.TabPanel>
      </Tabs>
    );
    const tab = getByRole('tab', { name: 'One' });

    expect(tab).toHaveAttribute('aria-disabled', 'true');
    expect(tab).toHaveAttribute('id');
    expect(tab).toHaveAttribute('aria-selected', 'false');
    expect(tab).toHaveAttribute('aria-controls');
    expect(tab).toHaveAttribute('tabindex', '-1');
  });

  describe('icon and label', () => {
    const Icon = () => <svg data-test-id="icon" />;

    const renderTab = (props?: { label?: string }) =>
      render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab item="one" icon={<Icon />} label={props?.label}>
              One
            </Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );

    it('renders the icon before the children', () => {
      const { getByRole, getByTestId } = renderTab();
      const tab = getByRole('tab');
      const iconWrapper = tab.firstElementChild!;

      expect(iconWrapper).toHaveAttribute('data-garden-id', 'tabs.tab.icon');
      expect(iconWrapper).toContainElement(getByTestId('icon'));
      expect(tab).toHaveTextContent('One');
    });

    it('renders the icon at the 20px icon size', () => {
      const { getByRole } = renderTab();

      expect(getByRole('tab').firstElementChild).toHaveStyleRule('width', '20px', {
        modifier: '& > svg'
      });
    });

    it('keeps the label prop off the DOM', () => {
      const { getByRole } = renderTab({ label: 'One tab' });

      expect(getByRole('tab')).not.toHaveAttribute('label');
    });

    it('renders the icon of a standalone tab', () => {
      const { getByTestId } = render(<Tab icon={<Icon />}>Content</Tab>);

      expect(getByTestId('icon')).toBeInTheDocument();
    });
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

    it('aligns the text of a vertical tab to the start edge', () => {
      const { getByRole, rerender } = render(
        <Tabs isVertical>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );

      expect(getByRole('tab')).toHaveStyleRule('text-align', 'left');

      rerender(
        <Tabs isVertical>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>,
        { theme: RTL_THEME }
      );

      expect(getByRole('tab')).toHaveStyleRule('text-align', 'right');
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

    it('does not clip or truncate its content', () => {
      const { getByRole } = render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );
      const tab = getByRole('tab');

      expect(tab).not.toHaveStyleRule('overflow', expect.anything());
      expect(tab).not.toHaveStyleRule('text-overflow', expect.anything());
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
