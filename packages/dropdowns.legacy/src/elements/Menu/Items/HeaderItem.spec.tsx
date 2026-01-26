/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import React from 'react';

import { Dropdown, Trigger, Menu, HeaderItem } from '../../..';

describe('HeaderItem', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <HeaderItem data-test-id="header-item" ref={ref}>
            Header Item
          </HeaderItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('header-item')).toBe(ref.current);
  });

  it('applies correct default horizontal padding', () => {
    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <HeaderItem data-test-id="header-item">Header Item</HeaderItem>
        </Menu>
      </Dropdown>
    );
    const headerItem = getByTestId('header-item');

    expect(headerItem).toHaveStyleRule('padding-left', `${DEFAULT_THEME.space.base * 3}px`);
    expect(headerItem).toHaveStyleRule('padding-right', `${DEFAULT_THEME.space.base * 3}px`);
  });

  it('applies correct compact horizontal padding', () => {
    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu isCompact>
          <HeaderItem data-test-id="header-item">Header Item</HeaderItem>
        </Menu>
      </Dropdown>
    );
    const headerItem = getByTestId('header-item');

    expect(headerItem).toHaveStyleRule('padding-left', `${DEFAULT_THEME.space.base * 3}px`);
    expect(headerItem).toHaveStyleRule('padding-right', `${DEFAULT_THEME.space.base * 3}px`);
  });

  it('applies no horizontal padding when HeaderItem contains an icon', () => {
    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <HeaderItem hasIcon data-test-id="header-item">
            Header Item
          </HeaderItem>
        </Menu>
      </Dropdown>
    );
    const headerItem = getByTestId('header-item');

    expect(headerItem).not.toHaveStyleRule('padding-left');
    expect(headerItem).not.toHaveStyleRule('padding-right');
  });
});
