/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getContrast, mix, parseToRgb } from 'polished';
import { createRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import type { IGardenTheme } from '../../theming/types';
import { getColor } from '../../theming/utils/getColor';
import type { ISegmentedControlProps } from '../../types/elements';
import { StyledSegmentInput } from '../../views/segmented-control/StyledSegmentInput';
import { SegmentedControl } from './SegmentedControl';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'orange', label: 'Orange' },
  { value: 'banana', label: 'Banana' }
];

interface IFruitProps extends Partial<ISegmentedControlProps> {
  items?: typeof options;
}

/* Renders the common case: a labeled group of fruit segments */
const Fruit = ({ items = options, ...props }: IFruitProps) => (
  <SegmentedControl aria-label="Fruit" {...props}>
    {items.map(item => (
      <SegmentedControl.Segment key={item.value} value={item.value}>
        {item.label}
      </SegmentedControl.Segment>
    ))}
  </SegmentedControl>
);

/* The visible segment is the sibling that follows the native radio */
const getSegment = (radio: HTMLElement) => radio.nextElementSibling as HTMLElement;

describe('SegmentedControl', () => {
  /* Dev-only warnings are tested by stubbing the environment and spying on the console */
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  describe('structure', () => {
    it('renders labeled native radios in independent, named groups', async () => {
      const user = userEvent.setup();
      const { getAllByRole, getByRole } = render(
        <>
          <Fruit defaultValue="orange" aria-label="First" />
          <Fruit defaultValue="orange" aria-label="Second" />
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
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />);
      const radio = getByRole('radio', { name: 'Orange' });

      expect(radio).toHaveStyleRule('position', 'absolute');
      expect(radio).toHaveStyleRule('inset', '0');
      expect(radio).toHaveStyleRule('width', '100%');
      expect(radio).toHaveStyleRule('height', '100%');
      expect(radio).toHaveStyleRule('opacity', '0');
    });

    /* jsdom cannot hit-test, so the rules that make the whole segment the hit area are asserted */
    it('removes native radio rounding so the full segment is the hit area', () => {
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />);
      const radio = getByRole('radio', { name: 'Orange' });

      expect(radio).toHaveStyleRule('appearance', 'none');
      expect(radio).toHaveStyleRule('border-radius', '0');
    });

    it('warns in development when two segments share a value', () => {
      vi.stubEnv('NODE_ENV', 'development');

      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

      render(<Fruit items={[...options, { value: 'apple', label: 'Apple again' }]} />);

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('"apple"'));
    });

    it('does not warn about unique values', () => {
      vi.stubEnv('NODE_ENV', 'development');

      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

      render(<Fruit defaultValue="apple" />);

      expect(warn).not.toHaveBeenCalled();
    });

    it('warns in development when the group has no accessible name', () => {
      vi.stubEnv('NODE_ENV', 'development');

      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

      render(<Fruit aria-label={undefined} />);

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('accessible name'));
    });

    it('does not warn about the name when aria-labelledby is provided', () => {
      vi.stubEnv('NODE_ENV', 'development');

      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

      render(
        <>
          <span id="label">Fruit</span>
          <Fruit aria-label={undefined} aria-labelledby="label" />
        </>
      );

      expect(warn).not.toHaveBeenCalled();
    });

    it('requires a segment to be rendered inside a group', () => {
      vi.spyOn(console, 'error').mockImplementation(() => undefined);

      expect(() =>
        render(<SegmentedControl.Segment value="apple">Apple</SegmentedControl.Segment>)
      ).toThrow('must be rendered inside a <SegmentedControl>');
    });

    it('forwards a segment ref and passes through other segment props', () => {
      const ref = createRef<HTMLLabelElement>();
      const { getByRole } = render(
        <SegmentedControl aria-label="Fruit">
          <SegmentedControl.Segment ref={ref} value="apple" data-test-id="segment">
            Apple
          </SegmentedControl.Segment>
        </SegmentedControl>
      );
      const radio = getByRole('radio', { name: 'Apple' });

      expect(ref.current).toBe(radio.parentElement);
      expect(ref.current).toHaveAttribute('data-test-id', 'segment');
      expect(radio).toHaveAttribute('value', 'apple');
    });

    it('forwards its ref and passes through other props', () => {
      const ref = createRef<HTMLDivElement>();
      const { getByRole } = render(
        <SegmentedControl ref={ref} defaultValue="orange" aria-label="Fruit" data-test-id="control">
          <SegmentedControl.Segment value="orange">Orange</SegmentedControl.Segment>
        </SegmentedControl>
      );

      expect(ref.current).toBe(getByRole('radiogroup'));
      expect(ref.current).toHaveAttribute('data-test-id', 'control');
    });

    it('renders Garden ids and the package version on every part', () => {
      const { container, getByRole } = render(
        <Fruit
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
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />, { theme });

      expect(getByRole('radiogroup')).toHaveStyleRule('color', 'rgb(1, 2, 3)');
    });
  });

  describe('selection', () => {
    it('selects through its label and Space without duplicate callbacks', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getByRole } = render(
        <Fruit defaultValue="missing" aria-label="Fruit" onChange={onChange} />
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
      const { getByRole } = render(<Fruit value="orange" aria-label="Fruit" onChange={onChange} />);
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
        <Fruit defaultValue="orange" aria-label="Fruit" onChange={onChange} />
      );

      await user.click(getByRole('radio', { name: 'Apple' }));
      await user.click(getByRole('radio', { name: 'Apple' }));

      expect(getByRole('radio', { name: 'Apple' })).toBeChecked();
      expect(onChange).toHaveBeenCalledExactlyOnceWith('apple');
    });

    it('works uncontrolled without an onChange handler', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />);

      await user.click(getByRole('radio', { name: 'Apple' }));

      expect(getByRole('radio', { name: 'Apple' })).toBeChecked();
    });

    it('selects on release, not on press', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getByRole } = render(
        <Fruit defaultValue="orange" aria-label="Fruit" onChange={onChange} />
      );
      const apple = getByRole('radio', { name: 'Apple' });

      await user.pointer({ target: apple, keys: '[MouseLeft>]' });

      expect(apple).not.toBeChecked();
      expect(onChange).not.toHaveBeenCalled();

      await user.pointer({ target: apple, keys: '[/MouseLeft]' });

      expect(apple).toBeChecked();
      expect(onChange).toHaveBeenCalledExactlyOnceWith('apple');
    });
  });

  describe('keyboard', () => {
    it('names the radio group and gives the selected segment the only Tab stop', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(
        <>
          <button type="button">Before</button>
          <Fruit defaultValue="orange" />
          <button type="button">After</button>
        </>
      );

      expect(getByRole('radiogroup', { name: 'Fruit' })).not.toHaveAttribute('tabindex');

      await user.tab();
      await user.tab();

      expect(getByRole('radio', { name: 'Orange' })).toHaveFocus();

      await user.tab();

      expect(getByRole('button', { name: 'After' })).toHaveFocus();
    });

    it('is named by aria-labelledby', () => {
      const { getByRole } = render(
        <>
          <span id="label">Fruit</span>
          <Fruit defaultValue="orange" aria-labelledby="label" />
        </>
      );

      expect(getByRole('radiogroup', { name: 'Fruit' })).toBeInTheDocument();
    });

    it('retains one entry point when the selected segment disappears without inventing selection', async () => {
      const user = userEvent.setup();
      const { getAllByRole, getByRole, rerender } = render(<Fruit value="orange" />);

      rerender(<Fruit items={[options[0]!, options[2]!]} value="orange" />);

      expect(getAllByRole('radio').every(radio => !(radio as HTMLInputElement).checked)).toBe(true);

      await user.tab();

      expect(getByRole('radio', { name: 'Apple' })).toHaveFocus();
    });

    it('starts with nothing selected when given neither value nor defaultValue', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getAllByRole, getByRole } = render(<Fruit onChange={onChange} />);

      expect(getAllByRole('radio').some(radio => (radio as HTMLInputElement).checked)).toBe(false);

      await user.tab();

      expect(getByRole('radio', { name: 'Apple' })).toHaveFocus();

      await user.click(getByRole('radio', { name: 'Banana' }));

      expect(getByRole('radio', { name: 'Banana' })).toBeChecked();
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith('banana');
    });

    it('moves focus and selection with arrows, wraps, and allows Tab to leave', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(
        <>
          <Fruit defaultValue="orange" aria-label="Fruit" />
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
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />);

      await user.tab();
      await user.keyboard(key);

      expect(getByRole('radio', { name: expected })).toHaveFocus();
      expect(getByRole('radio', { name: expected })).toBeChecked();
    });

    it('keeps focus and reports nothing when arrowing within a single option', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { getByRole } = render(
        <Fruit items={[options[0]!]} defaultValue="apple" aria-label="Fruit" onChange={onChange} />
      );

      await user.tab();
      await user.keyboard('{ArrowRight}');

      expect(getByRole('radio', { name: 'Apple' })).toHaveFocus();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('flips the horizontal arrows in RTL', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />, {
        theme: RTL_THEME
      });

      await user.tab();
      await user.keyboard('{ArrowRight}');

      expect(getByRole('radio', { name: 'Apple' })).toHaveFocus();
      expect(getByRole('radio', { name: 'Apple' })).toBeChecked();

      await user.keyboard('{ArrowLeft}');

      expect(getByRole('radio', { name: 'Orange' })).toHaveFocus();
    });

    it('does not flip vertical arrows in RTL', async () => {
      const user = userEvent.setup();
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />, {
        theme: RTL_THEME
      });

      await user.tab();
      await user.keyboard('{ArrowDown}');

      expect(getByRole('radio', { name: 'Banana' })).toHaveFocus();
    });

    it('leaves other keys and modified arrows to the browser', () => {
      const onChange = vi.fn();
      const { getByRole } = render(
        <Fruit defaultValue="orange" aria-label="Fruit" onChange={onChange} />
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
          <Fruit value="orange" aria-label="Fruit" onChange={onChange} />
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
          <Fruit value="banana" aria-label="Fruit" onChange={onChange} />
          <button type="button">Next</button>
        </>
      );

      expect(getByRole('radio', { name: 'Banana' })).toBeChecked();
    });

    it('passes blur events from its segments to the consumer onBlur', async () => {
      const user = userEvent.setup();
      const onBlur = vi.fn();
      const { getByRole } = render(
        <>
          <Fruit defaultValue="orange" aria-label="Fruit" onBlur={onBlur} />
          <button type="button">Next</button>
        </>
      );

      await user.tab();
      await user.keyboard('{ArrowRight}');

      /* Focus moved between radios inside the group */
      expect(onBlur).toHaveBeenCalledTimes(1);

      await user.tab();

      expect(getByRole('button', { name: 'Next' })).toHaveFocus();
      expect(onBlur).toHaveBeenCalledTimes(2);
    });

    it('runs the consumer onKeyDown first and lets it cancel navigation', async () => {
      const user = userEvent.setup();
      const onKeyDown = vi.fn((event: React.KeyboardEvent) => event.preventDefault());
      const { getByRole } = render(<Fruit defaultValue="orange" onKeyDown={onKeyDown} />);

      await user.tab();
      await user.keyboard('{ArrowRight}');

      expect(onKeyDown).toHaveBeenCalled();
      expect(getByRole('radio', { name: 'Orange' })).toHaveFocus();
      expect(getByRole('radio', { name: 'Orange' })).toBeChecked();
    });

    it('ignores arrow keys that do not come from a segment', () => {
      const onChange = vi.fn();
      const { getByRole } = render(<Fruit defaultValue="orange" onChange={onChange} />);

      fireEvent.keyDown(getByRole('radiogroup'), { key: 'ArrowRight' });

      expect(onChange).not.toHaveBeenCalled();
    });

    it('navigates segments in DOM order, through wrappers and conditional segments', async () => {
      const user = userEvent.setup();
      const Layout = ({ showBanana }: { showBanana: boolean }) => (
        <SegmentedControl aria-label="Fruit" defaultValue="apple">
          <SegmentedControl.Segment value="apple">Apple</SegmentedControl.Segment>
          <div>
            <SegmentedControl.Segment value="orange">Orange</SegmentedControl.Segment>
          </div>
          {showBanana ? (
            <SegmentedControl.Segment value="banana">Banana</SegmentedControl.Segment>
          ) : null}
        </SegmentedControl>
      );
      const { getByRole, rerender } = render(<Layout showBanana={false} />);

      await user.tab();
      await user.keyboard('{ArrowRight}');

      expect(getByRole('radio', { name: 'Orange' })).toHaveFocus();

      await user.keyboard('{ArrowRight}');

      expect(getByRole('radio', { name: 'Apple' })).toHaveFocus();

      rerender(<Layout showBanana />);
      await user.keyboard('{ArrowLeft}');

      expect(getByRole('radio', { name: 'Banana' })).toHaveFocus();
    });
  });

  describe('styling', () => {
    it.each([
      ['compact', true, '28px', '6px 10px', '12px', DEFAULT_THEME.lineHeights.sm, '14px'],
      ['default', false, '36px', '8px 12px', '14px', DEFAULT_THEME.lineHeights.md, '18px']
    ] as const)(
      'renders %s segments',
      (_, isCompact, minHeight, padding, fontSize, lineHeight, borderRadius) => {
        const { getByRole } = render(
          <Fruit defaultValue="orange" aria-label="Fruit" isCompact={isCompact} />
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

    it('hugs its labels by default', () => {
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />);
      const group = getByRole('radiogroup');

      expect(group).toHaveStyleRule('grid-auto-columns', 'max-content');
      expect(group).toHaveStyleRule('min-width', 'max-content');
      expect(group).toHaveStyleRule('width', 'max-content');
    });

    it('fills available width without shrinking below the labels', () => {
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" isFullWidth />);
      const group = getByRole('radiogroup');

      expect(group).toHaveStyleRule('grid-auto-columns', 'minmax(max-content,1fr)');
      expect(group).toHaveStyleRule('min-width', 'max-content');
      expect(group).toHaveStyleRule('width', '100%');
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders a translucent track in %s mode', (_, theme) => {
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />, { theme });
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
        const { container } = render(<Fruit defaultValue="orange" aria-label="Fruit" />, { theme });
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
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('outlines the pill with 3:1 contrast against the track in %s mode', (_, theme) => {
      const { container } = render(<Fruit defaultValue="orange" />, { theme });
      const pill = container.querySelector('[data-garden-id="segmented_controls.pill"]');
      const border = getColor({
        theme,
        hue: 'neutralHue',
        light: { shade: 700 },
        dark: { shade: 600 }
      });
      /* The track is translucent, so measure what the browser paints: the track over the page */
      const page = getColor({ theme, variable: 'background.default' });
      const rgb = parseToRgb(
        getColor({
          theme,
          hue: 'neutralHue',
          light: { shade: 700 },
          dark: { hue: 'white' },
          transparency: theme.opacity[100]
        })
      );
      const alpha = 'alpha' in rgb ? rgb.alpha : 1;
      const track = mix(alpha, `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`, page);

      expect(pill).toHaveStyleRule(
        'border',
        `${theme.borderWidths.sm} ${theme.borderStyles.solid} ${border}`
      );
      expect(pill).toHaveStyleRule('box-sizing', 'border-box');
      /* WCAG 1.4.11 non-text contrast */
      expect(getContrast(border, track)).toBeGreaterThanOrEqual(3);
    });

    it.each([
      ['ltr', DEFAULT_THEME],
      ['rtl', RTL_THEME]
    ] as const)('lays out %s', (direction, theme) => {
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />, { theme });

      expect(getByRole('radiogroup')).toHaveStyleRule('direction', direction);
    });

    it('paints the selected segment itself until the pill can be placed', () => {
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />);

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
        const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />, { theme });
        const apple = getByRole('radio', { name: 'Apple' });
        const hover = `${StyledSegmentInput}:hover:not(:checked) + &`;
        const active = `${StyledSegmentInput}:active:not(:checked) + &`;
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
          { modifier: hover }
        );
        /* Pressed is plain CSS, so it needs no pointer handlers and cannot get stuck */
        expect(getSegment(apple)).toHaveStyleRule(
          'background-color',
          getOverlay(theme.opacity[200]),
          { modifier: active }
        );
      }
    );

    it('animates background color only when motion is allowed', () => {
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />);
      const apple = getByRole('radio', { name: 'Apple' });
      const media = '(prefers-reduced-motion: no-preference)';

      expect(getSegment(apple)).toHaveStyleRule('transition', 'background-color 150ms ease-out', {
        media
      });
      expect(getSegment(apple)).toHaveStyleRule('transition-duration', '100ms', {
        media,
        modifier: `${StyledSegmentInput}:hover + &`
      });

      /* Pressing responds immediately */
      expect(getSegment(apple)).toHaveStyleRule('transition-duration', '0ms', {
        media,
        modifier: `${StyledSegmentInput}:active + &`
      });
    });

    it('outlines selection and focus when forced colors are active', () => {
      const { getByRole } = render(<Fruit defaultValue="orange" aria-label="Fruit" />);
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
