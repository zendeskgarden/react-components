/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { DraggableList } from './DraggableList';

describe('DraggableList', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLUListElement>();
    const { container } = render(<DraggableList ref={ref} />);

    expect(container.firstChild!).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<DraggableList />);

    expect(container.firstChild!.nodeName).toBe('UL');
  });

  describe('DraggableList.Item', () => {
    it('passes ref to underlying DOM element', () => {
      const ref = createRef<HTMLLIElement>();
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
      const ref = createRef<HTMLLIElement>();
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

  it(`renders expected vertical spacing between list items`, () => {
    const { queryAllByText } = render(
      <DraggableList isHorizontal>
        <DraggableList.Item>item</DraggableList.Item>
        <DraggableList.Item>item</DraggableList.Item>
        <DraggableList.Item>item</DraggableList.Item>
      </DraggableList>,
      {
        theme: RTL_THEME
      }
    );

    const items = queryAllByText('item').slice();

    items.forEach(item => {
      expect(item).toHaveStyle(`padding: 0 ${DEFAULT_THEME.space.xxs}`);
    });
  });

  it(`renders expected horizontal spacing between list items`, () => {
    const { queryAllByText } = render(
      <DraggableList isHorizontal>
        <DraggableList.Item>item</DraggableList.Item>
        <DraggableList.Item>item</DraggableList.Item>
        <DraggableList.Item>item</DraggableList.Item>
      </DraggableList>
    );

    const items = queryAllByText('item').slice();

    items.forEach(item => {
      expect(item).toHaveStyle(`padding: 0 ${DEFAULT_THEME.space.xxs}`);
    });
  });
});
