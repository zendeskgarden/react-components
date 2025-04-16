/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, HeaderItem, HeaderIcon } from '../../..';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

const ExampleSvg = () => <svg />;

describe('HeaderIcon', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <HeaderItem>
            <HeaderIcon data-test-id="header-icon" ref={ref}>
              <ExampleSvg />
            </HeaderIcon>
            Header Item
          </HeaderItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('header-icon')).toBe(ref.current);
  });

  it('applies correct default size to provided SVG', () => {
    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <HeaderItem>
            <HeaderIcon data-test-id="header-icon">
              <ExampleSvg />
            </HeaderIcon>
            Header Item
          </HeaderItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('header-icon')).toHaveStyleRule('width', DEFAULT_THEME.iconSizes.md, {
      modifier: '&>*'
    });
  });

  it('applies correct compact size to provided SVG', () => {
    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu isCompact>
          <HeaderItem>
            <HeaderIcon data-test-id="header-icon">
              <ExampleSvg />
            </HeaderIcon>
            Header Item
          </HeaderItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('header-icon')).toHaveStyleRule('width', DEFAULT_THEME.iconSizes.md, {
      modifier: '&>*'
    });
  });
});
