/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SegmentedControl } from '../../elements/segmented-control/SegmentedControl';
import { RTL_THEME, render } from '../../test/render';
import { stubResizeObserver } from '../../test/resizeObserver';
import type { ISegmentedControlProps } from '../../types/elements';

stubResizeObserver();

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'orange', label: 'Orange' },
  { value: 'banana', label: 'Banana' }
];

interface IFruitProps extends Partial<ISegmentedControlProps> {
  items?: typeof options;
}

const Fruit = ({ items = options, ...props }: IFruitProps) => (
  <SegmentedControl aria-label="Fruit" {...props}>
    {items.map(item => (
      <SegmentedControl.Segment key={item.value} value={item.value}>
        {item.label}
      </SegmentedControl.Segment>
    ))}
  </SegmentedControl>
);

const PILL = '[data-garden-id="segmented_controls.pill"]';

/*
 * jsdom has no layout, so every measurement is zero unless mocked. Segments
 * are identified by their label text.
 */
const mockGeometry = (
  lefts: Record<string, number>,
  width: number | Record<string, number> = 100
) => {
  const state = { lefts, width };

  vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockImplementation(function offsetWidth(
    this: HTMLElement
  ) {
    return typeof state.width === 'number'
      ? state.width
      : (state.width[this.textContent ?? ''] ?? 80);
  });
  vi.spyOn(HTMLElement.prototype, 'offsetLeft', 'get').mockImplementation(function offsetLeft(
    this: HTMLElement
  ) {
    return state.lefts[this.textContent ?? ''] ?? 0;
  });

  return state;
};

/* Captures the latest animation frame callback so a test can step time */
const mockFrames = () => {
  let callback: FrameRequestCallback = vi.fn();
  const request = vi.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => {
    callback = cb;

    return 1;
  });

  return { request, run: (time: number) => act(() => callback(time)) };
};

const mockMotionPreference = (matches: boolean) => {
  const listeners: (() => void)[] = [];
  const query = {
    matches,
    addEventListener: vi.fn((_: string, listener: () => void) => listeners.push(listener)),
    removeEventListener: vi.fn()
  };

  vi.spyOn(window, 'matchMedia').mockReturnValue(query as unknown as MediaQueryList);

  return {
    query,
    change: (next: boolean) => {
      query.matches = next;
      act(() => listeners.forEach(listener => listener()));
    }
  };
};

const triggerResizeObserver = () =>
  act(() =>
    (
      window as unknown as { resizeObserverCallback: ResizeObserverCallback }
    ).resizeObserverCallback([], {} as ResizeObserver)
  );

describe('useSelectionPill', () => {
  beforeEach(() => {
    vi.spyOn(performance, 'now').mockReturnValue(0);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('placement', () => {
    it('places a visible pill on the selected segment without animating on mount', () => {
      mockGeometry({ Orange: 104 });

      const frames = mockFrames();
      const { container } = render(<Fruit value="orange" aria-label="Fruit" />);
      const pill = container.querySelector<HTMLElement>(PILL)!;

      expect(pill).toHaveAttribute('aria-hidden', 'true');
      expect(pill).toHaveStyleRule('visibility', 'visible');
      expect(pill.style.transform).toBe('translateX(104px)');
      expect(pill.style.width).toBe('100px');
      expect(frames.request).not.toHaveBeenCalled();
    });

    it('measures the physical offset, so RTL needs no mirroring', () => {
      mockGeometry({ Orange: 104 });

      const { container } = render(<Fruit value="orange" aria-label="Fruit" />, {
        theme: RTL_THEME
      });

      expect(container.querySelector<HTMLElement>(PILL)!.style.transform).toBe('translateX(104px)');
    });

    it('stays hidden until the selected segment has a width', () => {
      const { container } = render(<Fruit value="orange" aria-label="Fruit" />);

      expect(container.querySelector(PILL)).toHaveStyleRule('visibility', 'hidden');
    });

    it('hides the pill while the selected option is missing, and shows it again', () => {
      mockGeometry({ Orange: 104 });

      const { container, rerender } = render(<Fruit value="orange" aria-label="Fruit" />);

      expect(container.querySelector(PILL)).toHaveStyleRule('visibility', 'visible');

      rerender(<Fruit items={[options[0]!, options[2]!]} value="orange" aria-label="Fruit" />);

      expect(container.querySelector(PILL)).toHaveStyleRule('visibility', 'hidden');

      rerender(<Fruit value="orange" aria-label="Fruit" />);

      expect(container.querySelector(PILL)).toHaveStyleRule('visibility', 'visible');
    });

    it('works where ResizeObserver does not exist', () => {
      vi.stubGlobal('ResizeObserver', undefined);
      mockGeometry({ Orange: 104 });

      try {
        const { container } = render(<Fruit value="orange" aria-label="Fruit" />);

        expect(container.querySelector<HTMLElement>(PILL)!.style.transform).toBe(
          'translateX(104px)'
        );
      } finally {
        stubResizeObserver();
      }
    });
  });

  describe('motion', () => {
    it('animates after selection while the checked state commits immediately', () => {
      mockGeometry({ Orange: 104 });

      const frames = mockFrames();
      const { container, getByRole, rerender } = render(<Fruit value="apple" aria-label="Fruit" />);

      rerender(<Fruit value="orange" aria-label="Fruit" />);

      const pill = container.querySelector<HTMLElement>(PILL)!;

      expect(getByRole('radio', { name: 'Orange' })).toBeChecked();
      expect(pill.style.transform).toBe('translateX(0px)');

      frames.run(16);

      expect(pill.style.transform).not.toBe('translateX(0px)');

      frames.run(2000);

      expect(pill.style.transform).toBe('translateX(104px)');
      expect(pill.style.width).toBe('100px');
    });

    it.each([
      ['apple', 'orange'],
      ['orange', 'apple']
    ])('keeps a move from %s to %s subtly bouncy while resizing the pill', (from, to) => {
      mockGeometry({ Orange: 300 }, { Orange: 120 });

      const frames = mockFrames();
      const { container, rerender } = render(<Fruit value={from} aria-label="Fruit" />);
      const pill = container.querySelector<HTMLElement>(PILL)!;
      const startWidth = from === 'orange' ? 120 : 80;
      const targetWidth = to === 'orange' ? 120 : 80;
      const target = to === 'orange' ? 300 : 0;

      rerender(<Fruit value={to} aria-label="Fruit" />);

      expect(pill.style.width).toBe(`${startWidth}px`);

      const positions: number[] = [];

      for (let time = 0; time <= 1000; time += 16) {
        frames.run(time);
        positions.push(Number.parseFloat(pill.style.transform.slice('translateX('.length)));

        if (time === 96) {
          expect(Number.parseFloat(pill.style.width)).toBeGreaterThan(80);
          expect(Number.parseFloat(pill.style.width)).toBeLessThan(120);
        }
      }

      const overshoot = target === 300 ? Math.max(...positions) - target : -Math.min(...positions);

      expect(overshoot).toBeGreaterThan(0);
      expect(overshoot).toBeLessThan(2);

      frames.run(2000);

      expect(pill.style.transform).toBe(`translateX(${target}px)`);
      expect(pill.style.width).toBe(`${targetWidth}px`);
    });

    it('snaps, instead of springing, when the layout changes with the selection', () => {
      mockGeometry({ Orange: 104 });

      const frames = mockFrames();
      const { container, rerender } = render(<Fruit value="apple" aria-label="Fruit" />);

      rerender(<Fruit value="orange" aria-label="Fruit" isFullWidth />);

      expect(container.querySelector<HTMLElement>(PILL)!.style.transform).toBe('translateX(104px)');
      expect(frames.request).not.toHaveBeenCalled();
    });

    it('places the pill immediately with reduced motion and follows controlled updates', () => {
      mockMotionPreference(true);
      mockGeometry({ Orange: 104 });

      const frames = mockFrames();
      const { container, rerender } = render(<Fruit value="orange" aria-label="Fruit" />);
      const pill = container.querySelector<HTMLElement>(PILL)!;

      expect(pill.style.transform).toBe('translateX(104px)');
      expect(pill.style.width).toBe('100px');

      rerender(<Fruit value="apple" aria-label="Fruit" />);

      expect(pill.style.transform).toBe('translateX(0px)');
      expect(frames.request).not.toHaveBeenCalled();
    });

    it('snaps when reduced motion is turned on mid-animation, and ignores it being turned off', () => {
      const preference = mockMotionPreference(false);

      mockGeometry({ Orange: 104 });

      const frames = mockFrames();
      const { container, rerender } = render(<Fruit value="apple" aria-label="Fruit" />);
      const pill = container.querySelector<HTMLElement>(PILL)!;

      rerender(<Fruit value="orange" aria-label="Fruit" />);

      expect(frames.request).toHaveBeenCalledTimes(1);
      expect(pill.style.transform).toBe('translateX(0px)');

      preference.change(true);

      expect(pill.style.transform).toBe('translateX(104px)');

      pill.style.transform = 'translateX(50px)';
      preference.change(false);

      expect(pill.style.transform).toBe('translateX(50px)');
    });

    it('stops animating and cleans up on unmount', () => {
      mockGeometry({ Orange: 104 });
      mockFrames();

      const cancel = vi.spyOn(window, 'cancelAnimationFrame');
      const removeListener = vi.spyOn(window, 'removeEventListener');
      const { rerender, unmount } = render(<Fruit value="apple" aria-label="Fruit" />);

      rerender(<Fruit value="orange" aria-label="Fruit" />);
      unmount();

      expect(cancel).toHaveBeenCalled();
      expect(removeListener).toHaveBeenCalledWith('resize', expect.any(Function));
    });
  });

  describe('keyboard selection', () => {
    it('snaps on repeated arrow presses and restores the spring for pointer selection', () => {
      mockGeometry({ Orange: 104, Banana: 208 });

      const frames = mockFrames();
      const { container, getByRole } = render(<Fruit defaultValue="apple" aria-label="Fruit" />);
      const pill = container.querySelector<HTMLElement>(PILL)!;

      fireEvent.keyDown(getByRole('radio', { name: 'Apple' }), { key: 'ArrowRight' });

      expect(getByRole('radio', { name: 'Orange' })).toBeChecked();
      expect(getByRole('radio', { name: 'Orange' })).toHaveFocus();
      expect(pill.style.transform).toBe('translateX(104px)');
      expect(pill.style.width).toBe('100px');
      expect(frames.request).not.toHaveBeenCalled();

      fireEvent.keyDown(getByRole('radio', { name: 'Orange' }), {
        key: 'ArrowRight',
        repeat: true
      });

      expect(getByRole('radio', { name: 'Banana' })).toBeChecked();
      expect(getByRole('radio', { name: 'Banana' })).toHaveFocus();
      expect(pill.style.transform).toBe('translateX(208px)');
      expect(frames.request).not.toHaveBeenCalled();

      fireEvent.click(getByRole('radio', { name: 'Apple' }), { detail: 1 });

      expect(getByRole('radio', { name: 'Apple' })).toBeChecked();
      expect(pill.style.transform).toBe('translateX(208px)');

      frames.run(16);

      expect(pill.style.transform).not.toBe('translateX(208px)');

      const cancel = vi.spyOn(window, 'cancelAnimationFrame');

      fireEvent.keyDown(getByRole('radio', { name: 'Apple' }), { key: 'ArrowRight' });

      expect(cancel).toHaveBeenCalled();
      expect(pill.style.transform).toBe('translateX(104px)');
    });

    it('waits for a controlled keyboard selection to commit before snapping', () => {
      mockGeometry({ Orange: 104 });

      const frames = mockFrames();
      const onChange = vi.fn();
      const { container, getByRole, rerender } = render(
        <Fruit value="apple" onChange={onChange} aria-label="Fruit" />
      );
      const pill = container.querySelector<HTMLElement>(PILL)!;

      fireEvent.keyDown(getByRole('radio', { name: 'Apple' }), { key: 'ArrowRight' });

      expect(onChange).toHaveBeenCalledExactlyOnceWith('orange');
      expect(getByRole('radio', { name: 'Apple' })).toBeChecked();
      expect(pill.style.transform).toBe('translateX(0px)');

      rerender(<Fruit value="orange" onChange={onChange} aria-label="Fruit" />);

      expect(getByRole('radio', { name: 'Orange' })).toBeChecked();
      expect(pill.style.transform).toBe('translateX(104px)');
      expect(frames.request).not.toHaveBeenCalled();
    });

    it('forgets a keyboard selection the parent never applied once focus leaves', async () => {
      const user = userEvent.setup();

      mockGeometry({ Orange: 104 });

      const frames = mockFrames();
      const tree = (value: string) => (
        <>
          <Fruit value={value} onChange={vi.fn()} aria-label="Fruit" />
          <button type="button">Next</button>
        </>
      );
      const { container, rerender } = render(tree('apple'));

      await user.tab();
      await user.keyboard('{ArrowRight}');
      await user.tab();

      /* The parent now applies it by other means; it was not a keyboard change */
      rerender(tree('orange'));

      expect(container.querySelector<HTMLElement>(PILL)!.style.transform).toBe('translateX(0px)');
      expect(frames.request).toHaveBeenCalled();
    });
  });

  describe('measuring', () => {
    it('follows size changes reported by a ResizeObserver, ignoring unchanged geometry', () => {
      const geometry = mockGeometry({ Orange: 104 });
      const { container } = render(<Fruit value="orange" aria-label="Fruit" />);
      const pill = container.querySelector<HTMLElement>(PILL)!;

      expect(pill.style.width).toBe('100px');

      triggerResizeObserver();

      expect(pill.style.width).toBe('100px');

      geometry.width = 150;
      triggerResizeObserver();

      expect(pill.style.width).toBe('150px');
    });

    it('follows window resize', () => {
      const geometry = mockGeometry({ Orange: 104 });
      const { container } = render(<Fruit value="orange" aria-label="Fruit" />);

      geometry.width = 150;
      act(() => {
        window.dispatchEvent(new Event('resize'));
      });

      expect(container.querySelector<HTMLElement>(PILL)!.style.width).toBe('150px');
    });

    it('follows web fonts finishing loading', () => {
      const fonts = new EventTarget();

      Object.defineProperty(document, 'fonts', { configurable: true, value: fonts });

      try {
        const geometry = mockGeometry({ Orange: 104 });
        const { container, unmount } = render(<Fruit value="orange" aria-label="Fruit" />);

        geometry.width = 150;
        act(() => {
          fonts.dispatchEvent(new Event('loadingdone'));
        });

        expect(container.querySelector<HTMLElement>(PILL)!.style.width).toBe('150px');

        unmount();
        geometry.width = 200;
        fonts.dispatchEvent(new Event('loadingdone'));
      } finally {
        delete (document as unknown as { fonts?: unknown }).fonts;
      }
    });
  });
});
