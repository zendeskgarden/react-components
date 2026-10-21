/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { StyledCheckLabel } from '../../views/form/StyledCheckLabel';
import { StyledHint } from '../../views/form/StyledHint';
import { StyledRadioLabel } from '../../views/form/StyledRadioLabel';
import { Checkbox } from './Checkbox';
import { Field } from './Field';

describe('Checkbox', () => {
  it('is rendered as an input of type checkbox', () => {
    const { getByTestId } = render(
      <Field>
        <Checkbox data-test-id="checkbox" />
      </Field>
    );
    const checkbox = getByTestId('checkbox');

    expect(checkbox.nodeName).toBe('INPUT');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Checkbox data-test-id="checkbox" ref={ref} />
      </Field>
    );

    expect(getByTestId('checkbox')).toBe(ref.current);
  });

  it('sets the indeterminate state on the underlying checkbox node', () => {
    const { getByTestId } = render(
      <Field>
        <Checkbox data-test-id="checkbox" indeterminate />
      </Field>
    );

    expect((getByTestId('checkbox') as any).indeterminate).toBe(true);
  });

  it('does not let props override the garden attributes or the type', () => {
    const { getByTestId } = render(
      <Field>
        <Checkbox
          data-test-id="checkbox"
          data-garden-id="custom"
          data-garden-version="0.0.0"
          type="text"
        />
      </Field>
    );

    expect(getByTestId('checkbox')).toHaveAttribute('data-garden-id', 'forms.checkbox');
    expect(getByTestId('checkbox')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(getByTestId('checkbox')).toHaveAttribute('type', 'checkbox');
  });

  it.each([
    ['check', 'forms.check_svg', 'm3 6 2 2 4-4'],
    ['dash', 'forms.dash_svg', 'M3 6h6']
  ])('renders the %s glyph', (_, id, d) => {
    const { container } = render(
      <Field>
        <Checkbox>
          <Field.Label>label</Field.Label>
        </Checkbox>
      </Field>
    );
    const svg = container.querySelector(`[data-garden-id="${id}"]`)!;
    const path = svg.querySelector('path')!;

    expect(svg).toHaveAttribute('viewBox', '0 0 12 12');
    expect(path).toHaveAttribute('d', d);
    expect(path).toHaveAttribute('fill', 'none');
    expect(path).toHaveAttribute('stroke-width', '2');
    expect(path).toHaveAttribute('stroke-linecap', 'round');
  });

  describe('styling', () => {
    const renderCheckbox = (isCompact?: boolean) =>
      render(
        <Field>
          <Checkbox data-test-id="checkbox" isCompact={isCompact}>
            <Field.Label>label</Field.Label>
            <Field.Hint>hint</Field.Hint>
          </Checkbox>
        </Field>
      ).getByTestId('checkbox');
    const label = `${StyledRadioLabel}::before`;

    it('renders the box shape and resting colors', () => {
      const checkbox = renderCheckbox();

      expect(checkbox).toHaveStyleRule('border-radius', DEFAULT_THEME.borderRadii.sm, {
        modifier: `& ~ ${StyledCheckLabel}::before`
      });
      expect(checkbox).toHaveStyleRule(
        'border-color',
        getColor({ theme: DEFAULT_THEME, variable: 'border.emphasis' }),
        { modifier: `& ~ ${label}` }
      );
      expect(checkbox).toHaveStyleRule(
        'background-color',
        getColor({ theme: DEFAULT_THEME, variable: 'background.default' }),
        { modifier: `& ~ ${label}` }
      );
      expect(checkbox).toHaveStyleRule('border-color', 'transparent', {
        modifier: `&:disabled ~ ${label}`
      });
      expect(checkbox).toHaveStyleRule(
        'background-color',
        getColor({
          theme: DEFAULT_THEME,
          variable: 'background.disabled',
          transparency: DEFAULT_THEME.opacity[300]
        }),
        { modifier: `&:disabled ~ ${label}` }
      );
    });

    it('renders the checked and indeterminate fills', () => {
      const checkbox = renderCheckbox();
      const fill = getColor({ theme: DEFAULT_THEME, variable: 'foreground.default' });

      expect(checkbox).toHaveStyleRule('background-color', fill, {
        modifier: `&:checked ~ ${label}`
      });
      expect(checkbox).toHaveStyleRule('border-color', 'transparent', {
        modifier: `&:checked ~ ${label}`
      });
      expect(checkbox).toHaveStyleRule('background-color', fill, {
        modifier: `&:indeterminate ~ ${StyledCheckLabel}::before`
      });
      expect(checkbox).toHaveStyleRule(
        'background-color',
        getColor({ theme: DEFAULT_THEME, hue: 'neutralHue', light: { shade: 800 } }),
        { modifier: `&:enabled:checked ~ ${StyledRadioLabel}:hover::before` }
      );
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ])(
      'keeps a transparent border on checked and indeterminate hover and active in %s mode',
      (_, theme) => {
        const checkbox = render(
          <Field>
            <Checkbox data-test-id="checkbox">
              <Field.Label>label</Field.Label>
            </Checkbox>
          </Field>,
          { theme }
        ).getByTestId('checkbox');

        expect(checkbox).toHaveStyleRule('border-color', 'transparent', {
          modifier: `&:enabled:checked ~ ${StyledRadioLabel}:hover::before`
        });
        expect(checkbox).toHaveStyleRule('border-color', 'transparent', {
          modifier: `&:enabled:checked ~ ${StyledRadioLabel}:active::before`
        });
        expect(checkbox).toHaveStyleRule('border-color', 'transparent', {
          modifier: `&:enabled:indeterminate ~ ${StyledCheckLabel}:hover::before`
        });
        expect(checkbox).toHaveStyleRule('border-color', 'transparent', {
          modifier: `&:enabled:indeterminate ~ ${StyledCheckLabel}:active::before`
        });
      }
    );

    it.each([
      [false, '8px'],
      [true, '4px']
    ])('spaces a hint after the label with isCompact %s', (isCompact, margin) => {
      expect(renderCheckbox(isCompact)).toHaveStyleRule('margin-top', margin, {
        modifier: `& ~ ${StyledRadioLabel} + ${StyledHint}`
      });
    });
  });
});
