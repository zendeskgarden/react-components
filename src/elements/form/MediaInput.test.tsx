/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { IMediaInputProps } from '../../types/elements';
import { StyledTextMediaFigure } from '../../views/form/StyledTextMediaFigure';
import { Field } from './Field';
import { MediaInput } from './MediaInput';

const Example = (props: IMediaInputProps) => (
  <Field>
    <MediaInput
      start={<span data-test-id="start">start</span>}
      end={<span data-test-id="end">end</span>}
      {...props}
    />
  </Field>
);

describe('MediaInput', () => {
  const user = userEvent.setup();

  it('is rendered as an input', () => {
    const { getByTestId } = render(
      <Field>
        <MediaInput data-test-id="input" />
      </Field>
    );

    expect(getByTestId('input').nodeName).toBe('INPUT');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <MediaInput data-test-id="input" ref={ref} />
      </Field>
    );

    expect(getByTestId('input')).toBe(ref.current);
  });

  it('focuses internal input when FauxInput wrapper is clicked', async () => {
    const { container } = render(<Example />);
    const input = container.querySelector('input');

    await user.click(input!);

    expect(input).toHaveFocus();
  });

  it('selects readonly text', async () => {
    const value = 'testing';
    const { getByTestId } = render(
      <Field>
        <MediaInput data-test-id="input" readOnly value={value} />
      </Field>
    );
    const input = getByTestId('input') as HTMLInputElement;

    await user.click(input);

    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe(value.length);
  });

  it('renders start figure if provided', () => {
    const { getByTestId } = render(<Example />);

    expect(getByTestId('start')).toHaveTextContent('start');
  });

  it('renders end figure if provided', () => {
    const { getByTestId } = render(<Example />);

    expect(getByTestId('end')).toHaveTextContent('end');
  });

  it('renders start and end figures at the 20px render size', () => {
    const { getByTestId } = render(<Example />);

    ['start', 'end'].forEach(id => {
      expect(getByTestId(id)).toHaveStyleRule('width', DEFAULT_THEME.space.md);
      expect(getByTestId(id)).toHaveStyleRule('height', DEFAULT_THEME.space.md);
    });
  });

  describe('figure row', () => {
    const figureModifier = `& > ${StyledTextMediaFigure}`;

    it.each([
      ['default', {}],
      ['compact', { isCompact: true }],
      ['bare', { isBare: true }]
    ])('keeps the figures inside the 18px content row (%s)', (_name, props) => {
      const { getByTestId } = render(<Example {...props} />);
      const wrapper = getByTestId('start').parentElement!;

      expect(wrapper).toHaveStyleRule('margin-top', '-1px', { modifier: figureModifier });
      expect(wrapper).toHaveStyleRule('margin-bottom', '-1px', { modifier: figureModifier });
      expect(wrapper).toHaveStyleRule('align-self', 'center', { modifier: figureModifier });
    });

    it('is not affected by the layout direction', () => {
      const { getByTestId } = render(<Example />, { theme: RTL_THEME });
      const wrapper = getByTestId('start').parentElement!;

      expect(wrapper).toHaveStyleRule('margin-top', '-1px', { modifier: figureModifier });
      expect(wrapper).toHaveStyleRule('margin-bottom', '-1px', { modifier: figureModifier });
    });
  });

  it('applies disabled styling if provided', () => {
    const { container, getByTestId } = render(
      <Field>
        <MediaInput data-test-id="input" disabled />
      </Field>
    );

    expect(container.firstChild!.firstChild).toHaveAttribute('aria-disabled');
    expect(getByTestId('input')).toHaveAttribute('disabled');
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <Field>
        <MediaInput data-test-id="input" data-garden-id="custom" data-garden-version="0.0.0" />
      </Field>
    );

    expect(getByTestId('input')).toHaveAttribute('data-garden-id', 'forms.media_input');
    expect(getByTestId('input')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });

  it('renders the input bare, outside the invalid state', () => {
    const { getByTestId } = render(
      <Field>
        <MediaInput data-test-id="input" />
      </Field>
    );

    expect(getByTestId('input')).toHaveAttribute('aria-invalid', 'false');
    expect(getByTestId('input')).toHaveStyleRule('border', 'none');
  });

  it('hovers the wrapper while the pointer is over it', () => {
    const { getByTestId } = render(
      <Field>
        <MediaInput data-test-id="input" />
      </Field>
    );
    const wrapper = getByTestId('input').parentElement!;
    const hoverColor = getColor({ theme: DEFAULT_THEME, variable: 'border.primaryEmphasis' });

    expect(wrapper).not.toHaveStyleRule('border-color', hoverColor);

    fireEvent.mouseOver(wrapper);
    expect(wrapper).toHaveStyleRule('border-color', hoverColor);

    fireEvent.mouseOut(wrapper);
    expect(wrapper).not.toHaveStyleRule('border-color', hoverColor);
  });
});
