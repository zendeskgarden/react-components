/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl, screen } from 'garden-test-utils';

import { Drawer } from './Drawer';

describe('Drawer.Header', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByText } = render(
      <Drawer isOpen>
        <Drawer.Header ref={ref}>title</Drawer.Header>
      </Drawer>
    );

    expect(getByText('title')).toBe(ref.current);
  });

  it('has horizontal padding when Drawer.Close is present', () => {
    render(
      <Drawer isOpen>
        <Drawer.Header>Header</Drawer.Header>
        <Drawer.Close />
      </Drawer>
    );

    expect(screen.getByText('Header')).toHaveStyleRule(
      'padding-right',
      `${DEFAULT_THEME.space.base * 14}px`
    );
  });

  it('renders horizontal padding in rtl mode when Drawer.Close is present', () => {
    renderRtl(
      <Drawer isOpen>
        <Drawer.Header>Header</Drawer.Header>
        <Drawer.Close />
      </Drawer>
    );

    expect(screen.getByText('Header')).toHaveStyleRule(
      'padding-left',
      `${DEFAULT_THEME.space.base * 14}px`
    );
  });

  it('does not have horizontal padding when Drawer.Close is absent', () => {
    render(
      <Drawer isOpen>
        <Drawer.Header>Header</Drawer.Header>
      </Drawer>
    );

    expect(screen.getByText('Header')).not.toHaveStyleRule('padding-right');
  });

  it('renders as a <div> by default', () => {
    render(
      <Drawer isOpen>
        <Drawer.Header>Header</Drawer.Header>
      </Drawer>
    );

    expect(screen.getByText('Header').tagName).toBe('DIV');
  });

  it('renders as a custom element, when passed a tag', () => {
    render(
      <Drawer isOpen>
        <Drawer.Header tag="h1">Header</Drawer.Header>
      </Drawer>
    );

    expect(screen.getByText('Header').tagName).not.toBe('DIV');
  });
});
