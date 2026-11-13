/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { memo } from 'react';
import { styled } from 'styled-components';

import { Tab } from '../../elements/tab/Tab';
import { TabList } from '../../elements/tab/TabList';
import { ITabPanelProps } from '../../types/elements';
import { toTabs } from './toTabs';

describe('toTabs', () => {
  /* An unrecognized component with an `item` prop is collected like a tab. */
  const PanelWrapper = (props: ITabPanelProps) => <div {...props} />;

  it.each([
    ['styled()', styled(TabList)``],
    ['memo()', memo(TabList)]
  ])('takes tab props from a %s tab list over an earlier panel wrapper', (_name, List) => {
    const tabs = toTabs(
      <>
        <PanelWrapper item="one">Panel one</PanelWrapper>
        <List>
          <Tab item="one">Tab one</Tab>
        </List>
      </>
    );

    expect(tabs).toHaveLength(1);
    expect(tabs[0]!.props.children).toBe('Tab one');
  });
});
