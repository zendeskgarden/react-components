/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { TabPanel } from './TabPanel';
import { Tabs } from './Tabs';

describe('TabPanel', () => {
  it('is able to render without parent Tabs component', () => {
    expect(() => render(<TabPanel>Content</TabPanel>)).not.toThrow();
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<TabPanel ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('is focusable by default', () => {
    const { getByRole } = render(
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab item="one">One</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel item="one">Panel one</Tabs.TabPanel>
      </Tabs>
    );

    expect(getByRole('tabpanel')).toHaveAttribute('tabindex', '0');
  });

  it('accepts a tabIndex override', () => {
    const { getByRole } = render(
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab item="one">One</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel item="one" tabIndex={-1}>
          Panel one
        </Tabs.TabPanel>
      </Tabs>
    );

    expect(getByRole('tabpanel')).toHaveAttribute('tabindex', '-1');
  });

  it('draws a focus ring when focused', () => {
    const { getByRole } = render(
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab item="one">One</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel item="one">Panel one</Tabs.TabPanel>
      </Tabs>
    );

    expect(getByRole('tabpanel')).toHaveStyleRule('box-shadow', expect.anything(), {
      modifier: ':focus-visible'
    });
  });
});
