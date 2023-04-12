/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { DraggableList } from './DraggableList';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

describe('DraggableList', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLUListElement>();
    const { container } = render(<DraggableList ref={ref} />);

    expect(container.firstChild!).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<DraggableList />);

    expect(container.firstChild!.nodeName).toBe('UL');
  });

  describe('DraggableList.Item', () => {
    it('passes ref to underlying DOM element', () => {
      const ref = React.createRef<HTMLLIElement>();
      const { queryByText } = render(
        <DraggableList>
          <DraggableList.Item ref={ref}>item</DraggableList.Item>
        </DraggableList>
      );

      expect(queryByText('item')).toBe(ref.current);
    });

    it('renders the expected element', () => {
      const { queryByText } = render(
        <DraggableList>
          <DraggableList.Item>item</DraggableList.Item>
        </DraggableList>
      );

      expect(queryByText('item')!.nodeName).toBe('LI');
    });
  });

  describe('DraggableList.DropIndicator', () => {
    it('passes ref to underlying DOM element', () => {
      const ref = React.createRef<HTMLLIElement>();
      const { queryByTestId } = render(
        <DraggableList>
          <DraggableList.DropIndicator data-test-id="indicator" ref={ref} />
        </DraggableList>
      );

      expect(queryByTestId('indicator')!).toBe(ref.current);
    });

    it('renders the expected element', () => {
      const { queryByTestId } = render(
        <DraggableList>
          <DraggableList.DropIndicator data-test-id="indicator" />
        </DraggableList>
      );

      expect(queryByTestId('indicator')!.nodeName).toBe('LI');
    });
  });

  describe('vertical list spacing', () => {
    it('renders expected spacing between list items', () => {
      const { queryAllByText } = render(
        <DraggableList>
          <DraggableList.Item>item</DraggableList.Item>
          <DraggableList.Item>item</DraggableList.Item>
          <DraggableList.Item>item</DraggableList.Item>
        </DraggableList>
      );

      const items = queryAllByText('item').slice(1);

      items.forEach(item => {
        expect(item).toHaveStyle(`margin-top: ${DEFAULT_THEME.space.xs}`);
      });
    });

    it('renders expected spacing when drop indicator is between items', () => {
      const { queryByTestId } = render(
        <DraggableList>
          <DraggableList.Item>item 1</DraggableList.Item>
          <DraggableList.DropIndicator data-test-id="indicator" />
          <DraggableList.Item data-test-id="item2">item 2</DraggableList.Item>
        </DraggableList>
      );

      const item = queryByTestId('item2');
      const indicator = queryByTestId('indicator');
      const value = `calc(${DEFAULT_THEME.space.base / 2}px + ${DEFAULT_THEME.borderWidths.sm})`;

      expect(item).toHaveStyle(`margin-top: ${DEFAULT_THEME.space.xs}`);
      expect(indicator).toHaveStyle(`margin-top: ${value}`);
    });

    it('renders expected spacing when drop indicator is at start of list', () => {
      const { queryByTestId } = render(
        <DraggableList>
          <DraggableList.DropIndicator data-test-id="indicator" />
          <DraggableList.Item>item 1</DraggableList.Item>
          <DraggableList.Item>item 2</DraggableList.Item>
        </DraggableList>
      );

      const indicator = queryByTestId('indicator');
      const value = `calc(-${DEFAULT_THEME.space.xxs} - ${DEFAULT_THEME.borderWidths.sm})`;

      expect(indicator).toHaveStyle(`
        position: absolute;
        top: ${value};
      `);
    });

    it('renders expected spacing when drop indicator is at end of list', () => {
      const { queryByTestId } = render(
        <DraggableList>
          <DraggableList.Item>item 2</DraggableList.Item>
          <DraggableList.DropIndicator data-test-id="indicator" />
        </DraggableList>
      );

      const indicator = queryByTestId('indicator');
      const value = `calc(-${DEFAULT_THEME.space.xxs} - ${DEFAULT_THEME.borderWidths.sm})`;

      expect(indicator).toHaveStyle(`
        position: absolute;
        bottom: ${value};
      `);
    });
  });

  describe.each(['ltr', 'rtl'])('horizontal list in %s', dir => {
    const renderFn = dir === 'rtl' ? renderRtl : render;
    const inlineMarginProp = dir === 'rtl' ? 'margin-right' : 'margin-left';

    it(`renders expected ${dir} spacing between list items`, () => {
      const { queryAllByText } = renderFn(
        <DraggableList isHorizontal>
          <DraggableList.Item>item</DraggableList.Item>
          <DraggableList.Item>item</DraggableList.Item>
          <DraggableList.Item>item</DraggableList.Item>
        </DraggableList>
      );

      const items = queryAllByText('item').slice(1);

      items.forEach(item => {
        expect(item).toHaveStyle(`${inlineMarginProp}: ${DEFAULT_THEME.space.xs}`);
      });
    });

    it(`renders expected ${dir} spacing when drop indicator is between items`, () => {
      const { queryByTestId } = renderFn(
        <DraggableList isHorizontal>
          <DraggableList.Item>item 1</DraggableList.Item>
          <DraggableList.DropIndicator data-test-id="indicator" />
          <DraggableList.Item data-test-id="item2">item 2</DraggableList.Item>
        </DraggableList>
      );

      const item = queryByTestId('item2');
      const indicator = queryByTestId('indicator');
      const value = `calc(${DEFAULT_THEME.space.base / 2}px + ${DEFAULT_THEME.borderWidths.sm})`;

      expect(item).toHaveStyle(`${inlineMarginProp}: ${DEFAULT_THEME.space.xs}`);
      expect(indicator).toHaveStyle(`${inlineMarginProp}: ${value}`);
    });

    it(`renders expected ${dir} spacing when drop indicator is at start of list`, () => {
      const { queryByTestId } = renderFn(
        <DraggableList isHorizontal>
          <DraggableList.DropIndicator data-test-id="indicator" />
          <DraggableList.Item>item 1</DraggableList.Item>
        </DraggableList>
      );

      const indicator = queryByTestId('indicator');
      const value = `calc(-${DEFAULT_THEME.space.xxs} - ${DEFAULT_THEME.borderWidths.sm})`;

      expect(indicator).toHaveStyle(`
        position: absolute;
        ${dir === 'rtl' ? 'right' : 'left'}: ${value};
      `);
    });

    it(`renders expected ${dir} spacing when drop indicator is at end of list`, () => {
      const { queryByTestId } = renderFn(
        <DraggableList isHorizontal>
          <DraggableList.Item>item 2</DraggableList.Item>
          <DraggableList.DropIndicator data-test-id="indicator" />
        </DraggableList>
      );

      const indicator = queryByTestId('indicator');
      const value = `calc(-${DEFAULT_THEME.space.xxs} - ${DEFAULT_THEME.borderWidths.sm})`;

      expect(indicator).toHaveStyle(`
        position: absolute;
        ${dir === 'rtl' ? 'left' : 'right'}: ${value}`);
    });
  });
});
