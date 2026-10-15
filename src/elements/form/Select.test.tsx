/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ChevronIcon from '@zendeskgarden/svg-icons/src/chevron-down.svg';
import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { StyledSelect } from '../../views/form/StyledSelect';
import { StyledTextMediaFigure } from '../../views/form/StyledTextMediaFigure';
import { FauxInput } from './FauxInput';
import { Field } from './Field';
import { Select } from './Select';

const paths = (element: Element) =>
  [...element.querySelectorAll('path')].map(path => path.getAttribute('d'));

describe('Select', () => {
  it('is rendered as a select', () => {
    const { getByTestId } = render(
      <Field>
        <Select data-test-id="select" />
      </Field>
    );

    expect(getByTestId('select').nodeName).toBe('SELECT');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLSelectElement>();
    const { getByTestId } = render(
      <Field>
        <Select data-test-id="select" ref={ref} />
      </Field>
    );

    expect(getByTestId('select')).toBe(ref.current);
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Field>
        <Select data-test-id="select" data-garden-id="custom" data-garden-version="0.0.0" />
      </Field>
    );

    expect(getByTestId('select')).toHaveAttribute('data-garden-id', 'forms.select');
    expect(getByTestId('select')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  it('renders the wrapper as a div with its state attributes', () => {
    const { getByTestId } = render(<Select data-test-id="select" disabled validation="error" />);
    const wrapper = getByTestId('select').parentElement!;

    expect(wrapper.nodeName).toBe('DIV');
    expect(wrapper).toHaveAttribute('data-garden-id', 'forms.select_wrapper');
    expect(wrapper).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(wrapper).toHaveAttribute('aria-disabled', 'true');
    expect(wrapper).toHaveAttribute('aria-invalid', 'true');
    expect(getByTestId('select')).toHaveAttribute('aria-invalid', 'true');
  });

  it('is not invalid or disabled by default', () => {
    const { getByTestId } = render(<Select data-test-id="select" />);
    const wrapper = getByTestId('select').parentElement!;

    expect(wrapper).not.toHaveAttribute('aria-disabled');
    expect(wrapper).toHaveAttribute('aria-invalid', 'false');
    expect(getByTestId('select')).toHaveAttribute('aria-invalid', 'false');
  });

  describe('chevron', () => {
    const figureModifier = `& + ${StyledTextMediaFigure}`;

    it('renders the chevron glyph at the 20px render size', () => {
      const { container } = render(<Select />);
      const { container: expected } = render(<ChevronIcon />);
      const chevron = container.querySelector('svg')!;

      expect(chevron).toHaveAttribute('viewBox', '0 0 20 20');
      expect(paths(chevron)).toEqual(paths(expected.firstElementChild!));
      expect(chevron).toHaveStyleRule('width', DEFAULT_THEME.space.md);
      expect(chevron).toHaveStyleRule('height', DEFAULT_THEME.space.md);
    });

    it('reserves end padding and offsets the chevron', () => {
      const { getByTestId } = render(<Select data-test-id="select" />);
      const select = getByTestId('select');

      expect(select).toHaveStyleRule('padding-right', '40px');
      expect(select).toHaveStyleRule('top', '9px', { modifier: figureModifier });
      expect(select).toHaveStyleRule('right', '12px', { modifier: figureModifier });
    });

    it('offsets the compact chevron', () => {
      const { getByTestId } = render(<Select data-test-id="select" isCompact />);

      expect(getByTestId('select')).toHaveStyleRule('top', '5px', { modifier: figureModifier });
    });

    it('reserves start padding in RTL', () => {
      const { getByTestId } = render(<Select data-test-id="select" />, { theme: RTL_THEME });
      const select = getByTestId('select');

      expect(select).toHaveStyleRule('padding-left', '40px');
      expect(select).toHaveStyleRule('left', '12px', { modifier: figureModifier });
    });

    it.each([
      ['default', {}, '9px'],
      ['compact', { isCompact: true }, '5px']
    ])('keeps the chevron margins and position (%s)', (_name, props, top) => {
      const { getByTestId } = render(<Select data-test-id="select" {...props} />);
      const chevron = getByTestId('select').nextElementSibling!;
      const {
        marginTop,
        marginBottom,
        position,
        top: offset,
        verticalAlign
      } = getComputedStyle(chevron);

      expect(chevron).toHaveStyleRule('margin', '1px 0 auto 8px');
      expect([marginTop, marginBottom, position, offset]).toEqual(['1px', 'auto', 'absolute', top]);
      expect(verticalAlign).not.toBe('top');
    });

    it('keeps the chevron margins and position in RTL', () => {
      const { getByTestId } = render(<Select data-test-id="select" />, { theme: RTL_THEME });
      const chevron = getByTestId('select').nextElementSibling!;
      const { marginTop, marginBottom, position, left } = getComputedStyle(chevron);

      expect(chevron).toHaveStyleRule('margin', '1px 8px auto 0');
      expect([marginTop, marginBottom, position, left]).toEqual([
        '1px',
        'auto',
        'absolute',
        '12px'
      ]);
    });

    it('excludes only the figure that follows the select from the icon row rules', () => {
      const { container } = render(
        <>
          <Select data-test-id="select" />
          <FauxInput>
            <FauxInput.StartIcon data-test-id="icon">
              <ChevronIcon />
            </FauxInput.StartIcon>
          </FauxInput>
        </>
      );
      const chevron = container.querySelector('select')!.nextElementSibling!;
      const icon = container.querySelector('[data-test-id="icon"]')!;

      expect(chevron.matches(`${StyledSelect} + *`)).toBe(true);
      expect(icon.matches(`${StyledSelect} + *`)).toBe(false);
      expect(getComputedStyle(icon).marginTop).toBe('-1px');
    });

    it('renders no chevron or end padding when bare', () => {
      const { container, getByTestId } = render(<Select data-test-id="select" isBare />);

      expect(container.querySelector('svg')).toBeNull();
      expect(getByTestId('select')).not.toHaveStyleRule('padding-right', '40px');
    });
  });
});
