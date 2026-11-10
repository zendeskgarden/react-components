/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { css } from 'styled-components';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import type { IGardenTheme } from '../../theming/types';
import { getColor } from '../../theming/utils/getColor';
import { StyledSegmentInput } from '../../views/segmented-control/StyledSegmentInput';
import { SegmentedControl } from './SegmentedControl';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'orange', label: 'Orange' },
  { value: 'banana', label: 'Banana' }
];

/* The visible segment is the sibling that follows the native radio */
const getSegment = (radio: HTMLElement) => radio.nextElementSibling as HTMLElement;

describe('SegmentedControl', () => {
  describe('structure', () => {
    it('renders labeled native radios in independent, named groups', async () => {
      const user = userEvent.setup();
      const { getAllByRole, getByRole } = render(
        <>
          <SegmentedControl options={options} defaultValue="orange" aria-label="First" />
          <SegmentedControl options={options} defaultValue="orange" aria-label="Second" />
        </>
      );
      const radios = getAllByRole('radio') as HTMLInputElement[];

      radios.forEach(radio => {
        expect(radio).toHaveAttribute('type', 'radio');
        expect(radio).not.toHaveAttribute('role');
        expect(radio).not.toHaveAttribute('aria-checked');
        expect(radio.labels).toHaveLength(1);
      });
      expect(getByRole('radiogroup', { name: 'First' })).not.toHaveAttribute('tabindex');
      expect(radios[0]!.name).not.toBe('');
      expect(radios[0]!.name).toBe(radios[1]!.name);
      expect(radios[0]!.name).not.toBe(radios[3]!.name);

      await user.click(radios[0]!);

      expect(radios[0]).toBeChecked();
      expect(radios[1]).not.toBeChecked();
      expect(radios[4]).toBeChecked();
    });

    it('covers the whole segment with a transparent native radio', () => {
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );
      const radio = getByRole('radio', { name: 'Orange' });

      expect(radio).toHaveStyleRule('position', 'absolute');
      expect(radio).toHaveStyleRule('inset', '0');
      expect(radio).toHaveStyleRule('width', '100%');
      expect(radio).toHaveStyleRule('height', '100%');
      expect(radio).toHaveStyleRule('opacity', '0');
    });

    it('ignores options with a duplicate value', () => {
      const { getAllByRole } = render(
        <SegmentedControl
          options={[...options, { value: 'apple', label: 'Apple again' }]}
          defaultValue="apple"
          aria-label="Fruit"
        />
      );

      expect(getAllByRole('radio')).toHaveLength(3);
    });

    it('forwards its ref and passes through other props', () => {
      const ref = createRef<HTMLDivElement>();
      const { getByRole } = render(
        <SegmentedControl
          ref={ref}
          options={options}
          defaultValue="orange"
          aria-label="Fruit"
          data-test-id="control"
        />
      );

      expect(ref.current).toBe(getByRole('radiogroup'));
      expect(ref.current).toHaveAttribute('data-test-id', 'control');
    });

    it('renders Garden ids and the package version on every part', () => {
      const { container, getByRole } = render(
        <SegmentedControl
          options={options}
          defaultValue="orange"
          aria-label="Fruit"
          data-garden-id="custom"
          data-garden-version="0"
        />
      );
      const radio = getByRole('radio', { name: 'Orange' });
      const parts = [
        [getByRole('radiogroup'), 'segmented_controls.segmented_control'],
        [container.querySelector('[aria-hidden="true"]'), 'segmented_controls.pill'],
        [radio.parentElement, 'segmented_controls.segment_label'],
        [radio, 'segmented_controls.segment_input'],
        [getSegment(radio), 'segmented_controls.segment']
      ] as const;

      parts.forEach(([element, id]) => {
        expect(element).toHaveAttribute('data-garden-id', id);
        expect(element).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
      });
    });

    it('applies component overrides from the theme', () => {
      const theme = {
        ...DEFAULT_THEME,
        components: { 'segmented_controls.segmented_control': 'color: rgb(1, 2, 3);' }
      } as IGardenTheme;
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />,
        { theme }
      );

      expect(getByRole('radiogroup')).toHaveStyleRule('color', 'rgb(1, 2, 3)');
    });
  });

  describe('selection', () => {
    it('selects through its label and Space without duplicate callbacks', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getByRole } = render(
        <SegmentedControl
          options={options}
          defaultValue="missing"
          aria-label="Fruit"
          onChange={onChange}
        />
      );

      await user.tab();
      await user.keyboard(' ');

      const apple = getByRole('radio', { name: 'Apple' });

      expect(apple).toBeChecked();
      expect(onChange).toHaveBeenCalledExactlyOnceWith('apple');

      await user.keyboard(' ');

      expect(onChange).toHaveBeenCalledTimes(1);

      const orange = getByRole('radio', { name: 'Orange' }) as HTMLInputElement;

      await user.click(orange.labels![0]!);

      expect(orange).toBeChecked();
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenLastCalledWith('orange');
    });

    it('does not let native click activation override a controlled value', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getByRole } = render(
        <SegmentedControl options={options} value="orange" aria-label="Fruit" onChange={onChange} />
      );
      const apple = getByRole('radio', { name: 'Apple' });

      await user.click(apple);

      expect(apple).not.toBeChecked();
      expect(getByRole('radio', { name: 'Orange' })).toBeChecked();
      expect(onChange).toHaveBeenCalledExactlyOnceWith('apple');
    });

    it('commits an uncontrolled selection once and ignores the already selected option', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getByRole } = render(
        <SegmentedControl
          options={options}
          defaultValue="orange"
          aria-label="Fruit"
          onChange={onChange}
        />
      );

      await user.click(getByRole('radio', { name: 'Apple' }));
      await user.click(getByRole('radio', { name: 'Apple' }));

      expect(getByRole('radio', { name: 'Apple' })).toBeChecked();
      expect(onChange).toHaveBeenCalledExactlyOnceWith('apple');
    });

    it('works uncontrolled without an onChange handler', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );

      await user.click(getByRole('radio', { name: 'Apple' }));

      expect(getByRole('radio', { name: 'Apple' })).toBeChecked();
    });

    it('does not select on press and cancels a gesture that leaves before release', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getByRole } = render(
        <SegmentedControl
          options={options}
          defaultValue="orange"
          aria-label="Fruit"
          onChange={onChange}
        />
      );
      const apple = getByRole('radio', { name: 'Apple' });

      await user.pointer({ target: apple, keys: '[MouseLeft>]' });

      expect(apple).not.toBeChecked();

      fireEvent.pointerLeave(apple);
      await user.pointer({ target: apple, keys: '[/MouseLeft]' });

      expect(onChange).not.toHaveBeenCalled();
      expect(apple).not.toBeChecked();
      expect(getByRole('radio', { name: 'Orange' })).toBeChecked();

      await user.click(apple);

      expect(onChange).toHaveBeenCalledExactlyOnceWith('apple');
    });

    it('shows a pressed state only for the primary button', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );
      const apple = getByRole('radio', { name: 'Apple' });
      /* The design's pressed fill: the track's translucent neutral at 16% */
      const pressed = getColor({
        theme: DEFAULT_THEME,
        hue: 'neutralHue',
        light: { shade: 700 },
        dark: { hue: 'white' },
        transparency: DEFAULT_THEME.opacity[200]
      });

      await user.pointer({ target: apple, keys: '[MouseRight>]' });

      expect(getSegment(apple)).toHaveStyleRule('background-color', 'transparent');

      fireEvent.pointerDown(apple, { button: 0, isPrimary: false });

      expect(getSegment(apple)).toHaveStyleRule('background-color', 'transparent');

      fireEvent.pointerDown(apple, { button: 0, isPrimary: true });

      expect(getSegment(apple)).toHaveStyleRule('background-color', pressed);

      fireEvent.pointerUp(apple);

      expect(getSegment(apple)).toHaveStyleRule('background-color', 'transparent');
    });

    it('ignores pointer movement that is not part of a press', () => {
      const onChange = vi.fn();
      const { getByRole } = render(
        <SegmentedControl
          options={options}
          defaultValue="orange"
          aria-label="Fruit"
          onChange={onChange}
        />
      );
      const apple = getByRole('radio', { name: 'Apple' });
      const banana = getByRole('radio', { name: 'Banana' });

      /* Hovering across segments without pressing */
      fireEvent.pointerLeave(apple);

      expect(getSegment(apple)).toHaveStyleRule('background-color', 'transparent');

      /* Released over a different segment than the press began on */
      fireEvent.pointerDown(apple, { button: 0, isPrimary: true });
      fireEvent.pointerUp(banana);

      /* A press that was already released can no longer be cancelled */
      fireEvent.pointerUp(apple);
      fireEvent.pointerLeave(apple);
      fireEvent.click(apple, { detail: 1 });

      expect(onChange).toHaveBeenCalledExactlyOnceWith('apple');
    });

    it('cancels a press when the pointer is cancelled or capture is lost', () => {
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );
      const apple = getByRole('radio', { name: 'Apple' });

      ['pointerCancel', 'lostPointerCapture'].forEach(type => {
        fireEvent.pointerDown(apple, { button: 0, isPrimary: true });

        expect(getSegment(apple)).not.toHaveStyleRule('background-color', 'transparent');

        fireEvent[type as 'pointerCancel'](apple);

        expect(getSegment(apple)).toHaveStyleRule('background-color', 'transparent');
        fireEvent.pointerUp(apple);
      });
    });
  });

  describe('keyboard', () => {
    it('names the radio group and gives the selected option the only Tab stop', () => {
      const { getByRole, getAllByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );

      expect(getByRole('radiogroup', { name: 'Fruit' })).not.toHaveAttribute('tabindex');
      expect(getByRole('radio', { name: 'Orange' })).toBeChecked();
      expect(getAllByRole('radio').map(radio => radio.tabIndex)).toEqual([-1, 0, -1]);
    });

    it('is named by aria-labelledby', () => {
      const { getByRole } = render(
        <>
          <span id="label">Fruit</span>
          <SegmentedControl options={options} defaultValue="orange" aria-labelledby="label" />
        </>
      );

      expect(getByRole('radiogroup', { name: 'Fruit' })).toBeInTheDocument();
    });

    it('retains one entry point when the selected option disappears without inventing selection', () => {
      const { getAllByRole, rerender } = render(
        <SegmentedControl options={options} value="orange" aria-label="Fruit" />
      );

      rerender(
        <SegmentedControl options={[options[0]!, options[2]!]} value="orange" aria-label="Fruit" />
      );

      expect(getAllByRole('radio').map(radio => radio.tabIndex)).toEqual([0, -1]);
      expect(getAllByRole('radio').every(radio => !(radio as HTMLInputElement).checked)).toBe(true);
    });

    it('starts with nothing selected when given neither value nor defaultValue', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getAllByRole, getByRole } = render(
        <SegmentedControl options={options} onChange={onChange} aria-label="Fruit" />
      );

      expect(getAllByRole('radio').some(radio => (radio as HTMLInputElement).checked)).toBe(false);
      expect(getAllByRole('radio').map(radio => radio.tabIndex)).toEqual([0, -1, -1]);

      await user.click(getByRole('radio', { name: 'Banana' }));

      expect(getByRole('radio', { name: 'Banana' })).toBeChecked();
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith('banana');
    });

    it('moves focus and selection with arrows, wraps, and allows Tab to leave', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(
        <>
          <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
          <button type="button">Next</button>
        </>
      );

      await user.tab();
      await user.keyboard('{ArrowRight}');

      expect(getByRole('radio', { name: 'Banana' })).toHaveFocus();
      expect(getByRole('radio', { name: 'Banana' })).toBeChecked();

      await user.keyboard('{ArrowRight}');

      expect(getByRole('radio', { name: 'Apple' })).toHaveFocus();

      await user.tab();

      expect(getByRole('button', { name: 'Next' })).toHaveFocus();
    });

    it.each([
      ['{ArrowDown}', 'Banana'],
      ['{ArrowUp}', 'Apple'],
      ['{ArrowLeft}', 'Apple']
    ])('moves with %s', async (key, expected) => {
      const user = userEvent.setup();
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );

      await user.tab();
      await user.keyboard(key);

      expect(getByRole('radio', { name: expected })).toHaveFocus();
      expect(getByRole('radio', { name: expected })).toBeChecked();
    });

    it('keeps focus and reports nothing when arrowing within a single option', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getByRole } = render(
        <SegmentedControl
          options={[options[0]!]}
          defaultValue="apple"
          aria-label="Fruit"
          onChange={onChange}
        />
      );

      await user.tab();
      await user.keyboard('{ArrowRight}');

      expect(getByRole('radio', { name: 'Apple' })).toHaveFocus();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('flips the horizontal arrows in RTL', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />,
        { theme: RTL_THEME }
      );

      await user.tab();
      await user.keyboard('{ArrowRight}');

      expect(getByRole('radio', { name: 'Apple' })).toHaveFocus();
      expect(getByRole('radio', { name: 'Apple' })).toBeChecked();

      await user.keyboard('{ArrowLeft}');

      expect(getByRole('radio', { name: 'Orange' })).toHaveFocus();
    });

    it('does not flip vertical arrows in RTL', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />,
        { theme: RTL_THEME }
      );

      await user.tab();
      await user.keyboard('{ArrowDown}');

      expect(getByRole('radio', { name: 'Banana' })).toHaveFocus();
    });

    it('leaves other keys and modified arrows to the browser', () => {
      const onChange = vi.fn();
      const { getByRole } = render(
        <SegmentedControl
          options={options}
          defaultValue="orange"
          aria-label="Fruit"
          onChange={onChange}
        />
      );
      const orange = getByRole('radio', { name: 'Orange' });

      fireEvent.keyDown(orange, { key: 'a' });
      ['altKey', 'ctrlKey', 'metaKey'].forEach(modifier => {
        fireEvent.keyDown(orange, { key: 'ArrowRight', [modifier]: true });
      });

      expect(onChange).not.toHaveBeenCalled();
      expect(orange).toBeChecked();
    });

    it('keeps controlled selection authoritative while focus moves, and restores selection on reentry', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getByRole, rerender } = render(
        <>
          <SegmentedControl
            options={options}
            value="orange"
            aria-label="Fruit"
            onChange={onChange}
          />
          <button type="button">Next</button>
        </>
      );

      await user.tab();
      await user.keyboard('{ArrowRight}');

      expect(getByRole('radio', { name: 'Banana' })).toHaveFocus();
      expect(getByRole('radio', { name: 'Orange' })).toBeChecked();
      expect(onChange).toHaveBeenCalledExactlyOnceWith('banana');

      await user.tab();
      await user.tab({ shift: true });

      expect(getByRole('radio', { name: 'Orange' })).toHaveFocus();

      rerender(
        <>
          <SegmentedControl
            options={options}
            value="banana"
            aria-label="Fruit"
            onChange={onChange}
          />
          <button type="button">Next</button>
        </>
      );

      expect(getByRole('radio', { name: 'Banana' })).toBeChecked();
    });

    it('calls the consumer onBlur only as focus leaves, keeping focus state while inside', async () => {
      const user = userEvent.setup();
      const onBlur = vi.fn();
      const { getByRole, getAllByRole } = render(
        <>
          <SegmentedControl
            options={options}
            defaultValue="orange"
            aria-label="Fruit"
            onBlur={onBlur}
          />
          <button type="button">Next</button>
        </>
      );

      await user.tab();
      await user.keyboard('{ArrowRight}');

      /* Focus moved between radios, so the entry point follows focus */
      expect(getAllByRole('radio').map(radio => radio.tabIndex)).toEqual([-1, -1, 0]);

      await user.tab();

      expect(getByRole('button', { name: 'Next' })).toHaveFocus();
      expect(onBlur).toHaveBeenCalled();
      expect(getAllByRole('radio').map(radio => radio.tabIndex)).toEqual([-1, -1, 0]);
    });
  });

  describe('styling', () => {
    it.each([
      ['small', '28px', '6px 10px', '12px', DEFAULT_THEME.lineHeights.sm, '14px'],
      ['medium', '36px', '8px 12px', '14px', DEFAULT_THEME.lineHeights.md, '18px']
    ] as const)(
      'renders %s segments',
      (size, minHeight, padding, fontSize, lineHeight, borderRadius) => {
        const { getByRole } = render(
          <SegmentedControl
            options={options}
            defaultValue="orange"
            aria-label="Fruit"
            size={size}
          />
        );
        const segment = getSegment(getByRole('radio', { name: 'Orange' }));

        expect(segment).toHaveStyleRule('min-height', minHeight);
        expect(segment).toHaveStyleRule('padding', padding);
        expect(segment).toHaveStyleRule('font-size', fontSize);
        expect(segment).toHaveStyleRule('line-height', lineHeight);
        expect(segment).toHaveStyleRule('border-radius', borderRadius);
        expect(segment).toHaveStyleRule('white-space', 'nowrap');
      }
    );

    it('renders medium segments by default', () => {
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );

      expect(getSegment(getByRole('radio', { name: 'Orange' }))).toHaveStyleRule(
        'min-height',
        '36px'
      );
    });

    it('hugs its labels by default', () => {
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );
      const group = getByRole('radiogroup');

      expect(group).toHaveStyleRule('grid-auto-columns', 'max-content');
      expect(group).toHaveStyleRule('min-width', 'max-content');
      expect(group).toHaveStyleRule('width', 'max-content');
    });

    it('fills available width without shrinking below the labels', () => {
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" isFullWidth />
      );
      const group = getByRole('radiogroup');

      expect(group).toHaveStyleRule('grid-auto-columns', 'minmax(max-content,1fr)');
      expect(group).toHaveStyleRule('min-width', 'max-content');
      expect(group).toHaveStyleRule('width', '100%');
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders a translucent track in %s mode', (_, theme) => {
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />,
        { theme }
      );
      const group = getByRole('radiogroup');

      expect(group).toHaveStyleRule(
        'background-color',
        getColor({
          theme,
          hue: 'neutralHue',
          light: { shade: 700 },
          dark: { hue: 'white' },
          transparency: theme.opacity[100]
        })
      );
      expect(group).toHaveStyleRule('color', getColor({ theme, variable: 'foreground.default' }));
      expect(group).toHaveStyleRule('border-radius', theme.borderRadii.full);
    });

    it.each([
      ['light', DEFAULT_THEME, 200, '0 0 4px 0 rgba(12,12,13,0.16)'],
      ['dark', DARK_THEME, 1100, '0 0 4px 0 rgba(12,12,13,0.88)']
    ] as const)(
      'casts a centered near-black shadow behind the pill in %s mode',
      (_, theme, opacity, literal) => {
        const { container } = render(
          <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />,
          { theme }
        );
        const pill = container.querySelector('[data-garden-id="segmented_controls.pill"]');

        /* The design's shadow color is #0c0c0d (neutral 1200) at 16% in light and 88% in dark */
        expect(pill).toHaveStyleRule(
          'box-shadow',
          theme.shadows.lg(
            '0',
            theme.space.xxs,
            getColor({
              theme,
              hue: 'neutralHue',
              shade: 1200,
              transparency: theme.opacity[opacity]
            })
          )
        );
        /* Anchor to the design's literal value so a wrong shade or opacity cannot pass */
        expect(pill).toHaveStyleRule('box-shadow', literal);
        expect(pill).toHaveStyleRule(
          'background-color',
          getColor({ theme, variable: 'background.default' })
        );
      }
    );

    it.each([
      ['ltr', DEFAULT_THEME],
      ['rtl', RTL_THEME]
    ] as const)('lays out %s', (direction, theme) => {
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />,
        { theme }
      );

      expect(getByRole('radiogroup')).toHaveStyleRule('direction', direction);
    });

    it('paints the selected segment itself until the pill can be placed', () => {
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );

      /* jsdom has no layout, so the pill never measures a width */
      expect(getSegment(getByRole('radio', { name: 'Orange' }))).toHaveStyleRule(
        'background-color',
        getColor({ theme: DEFAULT_THEME, variable: 'background.default' })
      );
      expect(getSegment(getByRole('radio', { name: 'Apple' }))).toHaveStyleRule(
        'background-color',
        'transparent'
      );
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)(
      'tints a hovered, unselected segment, and darkens it while pressed in %s mode',
      (_, theme) => {
        const { getByRole } = render(
          <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />,
          { theme }
        );
        const apple = getByRole('radio', { name: 'Apple' });
        const modifier = css`
          ${StyledSegmentInput}:hover:not(:checked) + &
        `;
        /* The design tints with the track's own translucent neutral: 8% hovered, 16% pressed */
        const getOverlay = (transparency: number | undefined) =>
          getColor({
            theme,
            hue: 'neutralHue',
            light: { shade: 700 },
            dark: { hue: 'white' },
            transparency
          });

        expect(getSegment(apple)).toHaveStyleRule(
          'background-color',
          getOverlay(theme.opacity[100]),
          { modifier }
        );

        fireEvent.pointerDown(apple, { button: 0, isPrimary: true });

        expect(getSegment(apple)).toHaveStyleRule(
          'background-color',
          getOverlay(theme.opacity[200]),
          { modifier }
        );
        expect(getSegment(apple)).toHaveStyleRule(
          'background-color',
          getOverlay(theme.opacity[200])
        );
      }
    );

    it('animates background color only when motion is allowed', () => {
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );
      const apple = getByRole('radio', { name: 'Apple' });
      const media = '(prefers-reduced-motion: no-preference)';

      expect(getSegment(apple)).toHaveStyleRule('transition', 'background-color 150ms ease-out', {
        media
      });
      expect(getSegment(apple)).toHaveStyleRule('transition-duration', '100ms', {
        media,
        modifier: `${StyledSegmentInput}:hover + &`
      });

      fireEvent.pointerDown(apple, { button: 0, isPrimary: true });

      expect(getSegment(apple)).toHaveStyleRule('transition-duration', '0ms', {
        media,
        modifier: `${StyledSegmentInput}:hover + &`
      });
    });

    it('outlines selection and focus when forced colors are active', () => {
      const { getByRole } = render(
        <SegmentedControl options={options} defaultValue="orange" aria-label="Fruit" />
      );
      const media = '(forced-colors: active)';

      expect(getSegment(getByRole('radio', { name: 'Orange' }))).toHaveStyleRule(
        'outline',
        `${DEFAULT_THEME.borderWidths.sm} solid`,
        {
          media,
          modifier: `${StyledSegmentInput}:checked + &`
        }
      );
      expect(getSegment(getByRole('radio', { name: 'Orange' }))).toHaveStyleRule(
        'outline-offset',
        `calc(-${DEFAULT_THEME.borderWidths.md} - ${DEFAULT_THEME.shadowWidths.xs})`,
        {
          media,
          modifier: `${StyledSegmentInput}:focus-visible + &`
        }
      );
      expect(getSegment(getByRole('radio', { name: 'Apple' }))).toHaveStyleRule(
        'outline-offset',
        DEFAULT_THEME.shadowWidths.xs,
        {
          media,
          modifier: `${StyledSegmentInput}:focus-visible + &`
        }
      );
    });
  });
});
