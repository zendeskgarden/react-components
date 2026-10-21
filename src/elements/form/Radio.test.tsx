/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import type { IGardenTheme } from '../../theming/types';
import { getColor } from '../../theming/utils/getColor';
import { StyledRadioLabel } from '../../views/form/StyledRadioLabel';
import { Field } from './Field';
import { Radio } from './Radio';

describe('Radio', () => {
  it('is rendered as an input of type radio', () => {
    const { getByTestId } = render(
      <Field>
        <Radio data-test-id="radio" />
      </Field>
    );
    const radio = getByTestId('radio');

    expect(radio.nodeName).toBe('INPUT');
    expect(radio).toHaveAttribute('type', 'radio');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Radio data-test-id="radio" ref={ref} />
      </Field>
    );

    expect(getByTestId('radio')).toBe(ref.current);
  });

  it('does not let props override the garden attributes or the type', () => {
    const { getByTestId } = render(
      <Field>
        <Radio
          data-test-id="radio"
          data-garden-id="custom"
          data-garden-version="0.0.0"
          type="text"
        />
      </Field>
    );

    expect(getByTestId('radio')).toHaveAttribute('data-garden-id', 'forms.radio');
    expect(getByTestId('radio')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(getByTestId('radio')).toHaveAttribute('type', 'radio');
  });

  it('renders the dot glyph', () => {
    const { container } = render(
      <Field>
        <Radio>
          <Field.Label>label</Field.Label>
        </Radio>
      </Field>
    );
    const svg = container.querySelector('label > svg')!;
    const circle = svg.querySelector('circle')!;

    expect(svg).toHaveAttribute('viewBox', '0 0 12 12');
    expect(circle).toHaveAttribute('cx', '6');
    expect(circle).toHaveAttribute('cy', '6');
    expect(circle).toHaveAttribute('r', '2');
  });

  describe('styling', () => {
    const renderRadio = (theme?: IGardenTheme) =>
      render(
        <Field>
          <Radio data-test-id="radio">
            <Field.Label>label</Field.Label>
          </Radio>
        </Field>,
        { theme }
      ).getByTestId('radio');
    const label = `${StyledRadioLabel}::before`;

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ])('renders the resting border and fill in %s mode', (_, theme) => {
      const radio = renderRadio(theme);

      expect(radio).toHaveStyleRule(
        'border-color',
        getColor({ theme, variable: 'border.emphasis' }),
        { modifier: `& ~ ${label}` }
      );
      expect(radio).toHaveStyleRule(
        'background-color',
        getColor({ theme, variable: 'background.default' }),
        { modifier: `& ~ ${label}` }
      );
    });

    it.each([
      ['light', DEFAULT_THEME, 700],
      ['dark', DARK_THEME, 500]
    ])('renders the hover and active tints in %s mode', (_, theme, shade) => {
      const radio = renderRadio(theme);
      const tint = (transparency?: number) =>
        getColor({ theme, hue: 'primaryHue', shade, transparency });

      expect(radio).toHaveStyleRule('background-color', tint(theme.opacity[100]), {
        modifier: `& ~ ${StyledRadioLabel}:hover::before`
      });
      expect(radio).toHaveStyleRule('background-color', tint(theme.opacity[200]), {
        modifier: `& ~ ${StyledRadioLabel}:active::before`
      });
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ])('keeps a transparent border on a checked control in %s mode', (_, theme) => {
      const radio = renderRadio(theme);

      expect(radio).toHaveStyleRule('border-color', 'transparent', {
        modifier: `&:enabled:checked ~ ${StyledRadioLabel}:hover::before`
      });
      expect(radio).toHaveStyleRule('border-color', 'transparent', {
        modifier: `&:enabled:checked ~ ${StyledRadioLabel}:active::before`
      });
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ])('restores the hover border on focus-visible in %s mode', (_, theme) => {
      const radio = renderRadio(theme);

      expect(radio).toHaveStyleRule(
        'border-color',
        getColor({ theme, variable: 'border.primaryEmphasis' }),
        { modifier: `&:focus-visible ~ ${StyledRadioLabel}::before` }
      );
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ])('renders the disabled fill with no border in %s mode', (_, theme) => {
      const radio = renderRadio(theme);

      expect(radio).toHaveStyleRule('border-color', 'transparent', {
        modifier: `&:disabled ~ ${label}`
      });
      expect(radio).toHaveStyleRule(
        'background-color',
        getColor({
          theme,
          variable: 'background.disabled',
          transparency: theme.opacity[300]
        }),
        { modifier: `&:disabled ~ ${label}` }
      );
    });
  });
});
