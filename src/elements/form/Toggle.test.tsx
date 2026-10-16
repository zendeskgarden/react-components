/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { StyledToggleLabel } from '../../views/form/StyledToggleLabel';
import { Field } from './Field';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('is rendered as an input of type checkbox', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle data-test-id="toggle" />
      </Field>
    );
    const toggle = getByTestId('toggle');

    expect(toggle.nodeName).toBe('INPUT');
    expect(toggle).toHaveAttribute('type', 'checkbox');
  });

  it('is rendered with the switch role', () => {
    const { queryByRole } = render(
      <Field>
        <Toggle data-test-id="toggle" />
      </Field>
    );

    expect(queryByRole('switch')).toBeInTheDocument();
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Toggle data-test-id="toggle" ref={ref} />
      </Field>
    );

    expect(getByTestId('toggle')).toBe(ref.current);
  });

  it('does not let props override the garden attributes or the type', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle
          data-test-id="toggle"
          data-garden-id="custom"
          data-garden-version="0.0.0"
          type="text"
        />
      </Field>
    );

    expect(getByTestId('toggle')).toHaveAttribute('data-garden-id', 'forms.toggle');
    expect(getByTestId('toggle')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(getByTestId('toggle')).toHaveAttribute('type', 'checkbox');
  });

  it('renders the track and thumb colors', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle data-test-id="toggle">
          <Field.Label>label</Field.Label>
        </Toggle>
      </Field>
    );
    const toggle = getByTestId('toggle');

    expect(toggle).toHaveStyleRule('border-radius', DEFAULT_THEME.borderRadii.full, {
      modifier: `& ~ ${StyledToggleLabel}::before`
    });
    expect(toggle).toHaveStyleRule(
      'border-color',
      getColor({ theme: DEFAULT_THEME, variable: 'border.emphasis' }),
      { modifier: `& ~ ${StyledToggleLabel}::before` }
    );
    expect(toggle).toHaveStyleRule('background-color', 'transparent', {
      modifier: `& ~ ${StyledToggleLabel}::before`
    });
    expect(toggle).toHaveStyleRule(
      'background-color',
      getColor({
        theme: DEFAULT_THEME,
        hue: 'primaryHue',
        light: { shade: 700 },
        transparency: DEFAULT_THEME.opacity[100]
      }),
      { modifier: `&:enabled ~ ${StyledToggleLabel}:hover::before` }
    );
    expect(toggle).toHaveStyleRule(
      'color',
      getColor({ theme: DEFAULT_THEME, variable: 'foreground.default' }),
      { modifier: `&:not(:checked) ~ ${StyledToggleLabel} > svg` }
    );
    expect(toggle).toHaveStyleRule(
      'color',
      getColor({ theme: DEFAULT_THEME, variable: 'background.disabled' }),
      { modifier: `&:disabled:not(:checked) ~ ${StyledToggleLabel} > svg` }
    );
  });

  it('keeps the bordered track when disabled and unchecked', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle data-test-id="toggle" disabled>
          <Field.Label>label</Field.Label>
        </Toggle>
      </Field>
    );
    const toggle = getByTestId('toggle');
    const modifier = `&:disabled:not(:checked) ~ ${StyledToggleLabel}::before`;

    expect(toggle).toHaveStyleRule(
      'border-color',
      getColor({ theme: DEFAULT_THEME, variable: 'border.disabled' }),
      { modifier }
    );
    expect(toggle).toHaveStyleRule('background-color', 'transparent', { modifier });
  });
});
