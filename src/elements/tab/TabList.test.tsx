/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';
import { vi } from 'vitest';

import { render } from '../../test/render';
import { TabList } from './TabList';
import { Tabs } from './Tabs';

describe('TabList', () => {
  it('is able to render without parent Tabs component', () => {
    expect(() => render(<TabList>Content</TabList>)).not.toThrow();
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<TabList ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  /* mirrors the useText warning specs in react-theming: save/restore NODE_ENV + console.warn */
  describe('naming', () => {
    const environment = process.env.NODE_ENV;
    const consoleWarning = console.warn;

    beforeEach(() => {
      process.env.NODE_ENV = 'development';
      console.warn = vi.fn();
    });

    afterEach(() => {
      process.env.NODE_ENV = environment;
      console.warn = consoleWarning;
    });

    it('names the tab list "Tabs" by default and warns in development', () => {
      const spy = vi.spyOn(console, 'warn');
      const { getByRole } = render(
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );

      expect(getByRole('tablist')).toHaveAttribute('aria-label', 'Tabs');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0]![0]).toStrictEqual(expect.stringContaining('<Tabs.TabList>'));
    });

    it('uses the consumer aria-label without warning', () => {
      const spy = vi.spyOn(console, 'warn');
      const { getByRole } = render(
        <Tabs>
          <Tabs.TabList aria-label="Sections">
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );

      expect(getByRole('tablist', { name: 'Sections' })).toBeInTheDocument();
      expect(spy).not.toHaveBeenCalled();
    });

    it('skips the default name and the warning with aria-labelledby', () => {
      const spy = vi.spyOn(console, 'warn');
      const { getByRole } = render(
        <Tabs>
          <h2 id="sections-label">Sections</h2>
          <Tabs.TabList aria-labelledby="sections-label">
            <Tabs.Tab item="one">One</Tabs.Tab>
          </Tabs.TabList>
        </Tabs>
      );

      expect(getByRole('tablist', { name: 'Sections' })).not.toHaveAttribute('aria-label');
      expect(spy).not.toHaveBeenCalled();
    });

    it('does not name a standalone tab list', () => {
      const spy = vi.spyOn(console, 'warn');
      const { container } = render(<TabList>Content</TabList>);

      expect(container.firstChild).not.toHaveAttribute('aria-label');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
