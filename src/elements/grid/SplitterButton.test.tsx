/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { fireEvent } from '@testing-library/react';
import { RefObject, createRef } from 'react';
import { vi } from 'vitest';

import { RTL_THEME, render } from '../../test/render';
import { stubResizeObserver } from '../../test/resizeObserver';
import type { ISplitterButtonProps, ISplitterProps } from '../../types/elements';
import { Pane } from './Pane';
import { PaneProvider } from './PaneProvider';
import { Splitter } from './Splitter';
import { SplitterButton } from './SplitterButton';

stubResizeObserver();

const UncontrolledTestSplitter = ({
  buttonRef
}: {
  buttonRef?: RefObject<HTMLButtonElement | null>;
}) => {
  return (
    <PaneProvider
      totalPanesWidth={1}
      totalPanesHeight={1}
      defaultColumnValues={{ a: 1, b: 1 }}
      defaultRowValues={{}}
    >
      {() => (
        <Pane>
          <Splitter layoutKey="a" min={0} max={1} orientation="end">
            <SplitterButton ref={buttonRef} label="toggle a" />
          </Splitter>
        </Pane>
      )}
    </PaneProvider>
  );
};

describe('SplitterButton', () => {
  it('is rendered as a button', () => {
    const { queryByRole } = render(<UncontrolledTestSplitter />);

    expect(queryByRole('button', { name: 'toggle a', hidden: true })).toHaveAttribute(
      'aria-labelledby'
    );
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();

    const { getByRole } = render(<UncontrolledTestSplitter buttonRef={ref} />);

    expect(ref.current).toBe(getByRole('button', { name: 'toggle a', hidden: true }));
  });

  it('is rendered as rtl', () => {
    const { getByRole } = render(<UncontrolledTestSplitter />, {
      theme: RTL_THEME
    });

    const button = getByRole('button', { name: 'toggle a', hidden: true });
    expect(button.querySelector('svg')).toBeDefined();
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { getByRole } = render(<UncontrolledTestSplitter />);

      expect(getByRole('button', { name: 'toggle a', hidden: true })).toHaveAttribute(
        'data-garden-id',
        'buttons.icon_button'
      );
    });
  });

  describe('events', () => {
    it('stops key and mouse events from reaching ancestors', () => {
      const onKeyDown = vi.fn();
      const onMouseDown = vi.fn();
      const { getByRole } = render(
        /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
        <div onKeyDown={onKeyDown} onMouseDown={onMouseDown}>
          <UncontrolledTestSplitter />
          <button type="button">other</button>
        </div>
      );
      const button = getByRole('button', { name: 'toggle a', hidden: true });

      fireEvent.keyDown(button, { key: 'ArrowRight' });
      fireEvent.mouseDown(button);
      fireEvent.mouseDown(getByRole('tooltip', { hidden: true }));

      expect(onKeyDown).not.toHaveBeenCalled();
      expect(onMouseDown).not.toHaveBeenCalled();

      /* control: the ancestor handlers do receive events from another element */
      fireEvent.keyDown(getByRole('button', { name: 'other' }), { key: 'ArrowRight' });
      fireEvent.mouseDown(getByRole('button', { name: 'other' }));

      expect(onKeyDown).toHaveBeenCalledTimes(1);
      expect(onMouseDown).toHaveBeenCalledTimes(1);
    });

    it('calls the key and mouse event props', () => {
      const onKeyDown = vi.fn();
      const onMouseDown = vi.fn();
      const { getByRole } = render(
        <PaneProvider
          totalPanesWidth={1}
          totalPanesHeight={1}
          defaultColumnValues={{ a: 1, b: 1 }}
          defaultRowValues={{}}
        >
          {() => (
            <Pane>
              <Splitter layoutKey="a" min={0} max={1} orientation="end">
                <SplitterButton label="toggle a" onKeyDown={onKeyDown} onMouseDown={onMouseDown} />
              </Splitter>
            </Pane>
          )}
        </PaneProvider>
      );
      const button = getByRole('button', { name: 'toggle a', hidden: true });

      fireEvent.keyDown(button, { key: 'ArrowRight' });
      fireEvent.mouseDown(button);

      expect(onKeyDown).toHaveBeenCalledTimes(1);
      expect(onMouseDown).toHaveBeenCalledTimes(1);
    });
  });

  describe('placement', () => {
    type Orientation = NonNullable<ISplitterProps['orientation']>;
    type Placement = Exclude<ISplitterButtonProps['placement'], 'center' | undefined>;
    type Position = { top?: string; right?: string; bottom?: string; left?: string };

    /* jsdom reports no size. A splitter at least three buttons (3 × 24px) long lets a
     * `start` or `end` button sit one button length from one end */
    const INSET = '-12px';
    const OFFSET = '24px';

    beforeEach(() => {
      vi.spyOn(Element.prototype, 'clientWidth', 'get').mockReturnValue(200);
      vi.spyOn(Element.prototype, 'clientHeight', 'get').mockReturnValue(200);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it.each<[Orientation, Placement, 'ltr' | 'rtl', Position]>([
      ['top', 'end', 'ltr', { top: INSET, right: OFFSET }],
      ['top', 'end', 'rtl', { top: INSET, right: OFFSET }],
      ['top', 'start', 'ltr', { top: INSET, left: OFFSET }],
      ['top', 'start', 'rtl', { top: INSET, right: OFFSET }],
      ['bottom', 'end', 'ltr', { bottom: INSET, right: OFFSET }],
      ['bottom', 'end', 'rtl', { bottom: INSET, right: OFFSET }],
      ['bottom', 'start', 'ltr', { bottom: INSET, left: OFFSET }],
      ['bottom', 'start', 'rtl', { bottom: INSET, right: OFFSET }],
      ['start', 'start', 'ltr', { top: OFFSET, left: INSET }],
      ['start', 'start', 'rtl', { top: OFFSET, right: INSET }],
      ['start', 'end', 'ltr', { bottom: OFFSET, left: INSET }],
      ['start', 'end', 'rtl', { bottom: OFFSET, right: INSET }],
      ['end', 'start', 'ltr', { top: OFFSET, right: INSET }],
      ['end', 'start', 'rtl', { top: OFFSET, left: INSET }],
      ['end', 'end', 'ltr', { bottom: OFFSET, right: INSET }],
      ['end', 'end', 'rtl', { bottom: OFFSET, left: INSET }]
    ])(
      'positions the button of a %s splitter at %s (%s)',
      (orientation, placement, direction, expected) => {
        const isRow = orientation === 'top' || orientation === 'bottom';
        const { container } = render(
          <PaneProvider
            totalPanesWidth={1}
            totalPanesHeight={1}
            defaultColumnValues={{ a: 1, b: 1 }}
            defaultRowValues={{ c: 1, d: 1 }}
          >
            {() => (
              <Pane>
                <Splitter layoutKey={isRow ? 'c' : 'a'} min={0} max={1} orientation={orientation}>
                  <SplitterButton label="toggle" placement={placement} />
                </Splitter>
              </Pane>
            )}
          </PaneProvider>,
          direction === 'rtl' ? { theme: RTL_THEME } : {}
        );
        const wrapper = container.querySelector(
          '[data-garden-id="pane.splitter_button_container"]'
        );

        expect(wrapper).toHaveStyleRule('top', expected.top);
        expect(wrapper).toHaveStyleRule('right', expected.right);
        expect(wrapper).toHaveStyleRule('bottom', expected.bottom);
        expect(wrapper).toHaveStyleRule('left', expected.left);
      }
    );
  });
});
