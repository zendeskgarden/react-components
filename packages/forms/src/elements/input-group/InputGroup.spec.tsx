/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent, renderRtl } from 'garden-test-utils';
import { IconButton } from '@zendeskgarden/react-buttons';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { Field, Input, InputGroup, Textarea } from '../..';

describe('InputGroup', () => {
  it('always renders role="group"', () => {
    const { getByTestId } = render(
      <InputGroup data-test-id="input-group">
        <Input />
      </InputGroup>
    );

    expect(getByTestId('input-group')).toHaveAttribute('role', 'group');
  });

  it('does not allow role to be overridden', () => {
    const { getByTestId } = render(
      // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
      <InputGroup data-test-id="input-group" role="presentation">
        <Input />
      </InputGroup>
    );

    expect(getByTestId('input-group')).toHaveAttribute('role', 'group');
  });

  it("labels the group via the enclosing Field's rendered label", () => {
    const { getByTestId, getByText } = render(
      <Field>
        <Field.Label>Departure date</Field.Label>
        <InputGroup data-test-id="input-group">
          <Input />
        </InputGroup>
      </Field>
    );

    const label = getByText('Departure date');

    expect(getByTestId('input-group')).toHaveAttribute('aria-labelledby', label.id);
  });

  it('does not dangle aria-labelledby when Field context exists but no Label is rendered', () => {
    const { getByTestId } = render(
      <Field>
        <InputGroup data-test-id="input-group">
          <Input aria-label="Departure date" />
        </InputGroup>
      </Field>
    );

    expect(getByTestId('input-group')).not.toHaveAttribute('aria-labelledby');
  });

  it('omits the auto-derived aria-labelledby when an explicit aria-label is provided', () => {
    const { getByTestId } = render(
      <Field>
        <Field.Label>Departure date</Field.Label>
        <InputGroup data-test-id="input-group" aria-label="Custom label">
          <Input />
        </InputGroup>
      </Field>
    );

    expect(getByTestId('input-group')).not.toHaveAttribute('aria-labelledby');
    expect(getByTestId('input-group')).toHaveAttribute('aria-label', 'Custom label');
  });

  it('respects an explicit aria-labelledby override', () => {
    const { getByTestId } = render(
      <Field>
        <Field.Label>Departure date</Field.Label>
        <InputGroup data-test-id="input-group" aria-labelledby="custom-id">
          <Input />
        </InputGroup>
      </Field>
    );

    expect(getByTestId('input-group')).toHaveAttribute('aria-labelledby', 'custom-id');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Field>
        <Field.Label>Input</Field.Label>
        <InputGroup ref={ref} data-test-id="input-group">
          <Input />
        </InputGroup>
      </Field>
    );

    expect(getByTestId('input-group')).toBe(ref.current);
  });

  it('applies focusInset styling to Input through context', () => {
    const { getByRole } = render(
      <Field>
        <Field.Label>Input</Field.Label>
        <InputGroup>
          <Input />
        </InputGroup>
      </Field>
    );

    const input = getByRole('textbox', { name: 'Input' });

    fireEvent.focus(input);

    expect(input).toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
      modifier: '&:focus-visible'
    });
  });

  it('does not force focusInset on an IconButton child when isUnified, leaving it to the consumer', () => {
    const { getByRole } = render(
      <InputGroup isUnified>
        <IconButton aria-label="Icon button">
          <span />
        </IconButton>
      </InputGroup>
    );

    const iconButton = getByRole('button', { name: 'Icon button' });

    fireEvent.focus(iconButton);

    expect(iconButton).not.toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
      modifier: '&:focus-visible'
    });
  });

  it('does not force focusInset on an IconButton child when not isUnified', () => {
    const { getByRole } = render(
      <InputGroup>
        <IconButton aria-label="Icon button">
          <span />
        </IconButton>
      </InputGroup>
    );

    const iconButton = getByRole('button', { name: 'Icon button' });

    fireEvent.focus(iconButton);

    expect(iconButton).not.toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
      modifier: '&:focus-visible'
    });
  });

  it('respects an explicit focusInset override on an IconButton child when isUnified', () => {
    const { getByRole } = render(
      <InputGroup isUnified>
        <IconButton focusInset aria-label="Icon button">
          <span />
        </IconButton>
      </InputGroup>
    );

    const iconButton = getByRole('button', { name: 'Icon button' });

    fireEvent.focus(iconButton);

    expect(iconButton).toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
      modifier: '&:focus-visible'
    });
  });

  it('applies an inset focus ring to a unified container itself when focusInset is set', () => {
    const { getByTestId, getByRole } = render(
      <InputGroup data-test-id="input-group" isUnified focusInset>
        <Input aria-label="Input" />
      </InputGroup>
    );

    fireEvent.focus(getByRole('textbox', { name: 'Input' }));

    expect(getByTestId('input-group')).toHaveStyleRule(
      'box-shadow',
      expect.stringContaining('inset'),
      { modifier: '&:focus-within:not(:has(button:focus-visible))' }
    );
  });

  it('does not apply an inset focus ring to a unified container by default', () => {
    const { getByTestId, getByRole } = render(
      <InputGroup data-test-id="input-group" isUnified>
        <Input aria-label="Input" />
      </InputGroup>
    );

    fireEvent.focus(getByRole('textbox', { name: 'Input' }));

    expect(getByTestId('input-group')).not.toHaveStyleRule(
      'box-shadow',
      expect.stringContaining('inset'),
      { modifier: '&:focus-within:not(:has(button:focus-visible))' }
    );
  });

  it('does not override an IconButton child size prop, since unified sizing is applied via CSS', () => {
    const { getByRole } = render(
      <InputGroup isUnified isCompact>
        <IconButton size="large" aria-label="Icon button">
          <span />
        </IconButton>
      </InputGroup>
    );

    expect(getByRole('button', { name: 'Icon button' })).toHaveStyleRule('height', '48px');
  });

  describe('unified validation', () => {
    const errorColor = getColor({ theme: DEFAULT_THEME, variable: 'border.dangerEmphasis' });
    const successColor = getColor({ theme: DEFAULT_THEME, variable: 'border.successEmphasis' });
    const defaultBorderColor = getColor({
      theme: DEFAULT_THEME,
      variable: 'border.default',
      dark: { offset: -100 },
      light: { offset: 100 }
    });

    it('reflects a child Input validation on the unified container', () => {
      const { getByTestId } = render(
        <InputGroup isUnified data-test-id="input-group">
          <Input aria-label="Input" validation="error" />
        </InputGroup>
      );

      expect(getByTestId('input-group')).toHaveStyleRule('border-color', errorColor);
    });

    it('does not reflect child Input validation on a classic (non-unified) container', () => {
      const { getByTestId } = render(
        <InputGroup data-test-id="input-group">
          <Input aria-label="Input" validation="error" />
        </InputGroup>
      );

      expect(getByTestId('input-group')).not.toHaveStyleRule('border-color', errorColor);
    });

    it('updates the unified container when Input validation changes', () => {
      const { getByTestId, rerender } = render(
        <InputGroup isUnified data-test-id="input-group">
          <Input aria-label="Input" validation="error" />
        </InputGroup>
      );

      expect(getByTestId('input-group')).toHaveStyleRule('border-color', errorColor);

      rerender(
        <InputGroup isUnified data-test-id="input-group">
          <Input aria-label="Input" validation="success" />
        </InputGroup>
      );

      expect(getByTestId('input-group')).toHaveStyleRule('border-color', successColor);
    });

    it('clears the unified container validation when Input validation is removed', () => {
      const { getByTestId, rerender } = render(
        <InputGroup isUnified data-test-id="input-group">
          <Input aria-label="Input" validation="error" />
        </InputGroup>
      );

      expect(getByTestId('input-group')).toHaveStyleRule('border-color', errorColor);

      rerender(
        <InputGroup isUnified data-test-id="input-group">
          <Input aria-label="Input" />
        </InputGroup>
      );

      expect(getByTestId('input-group')).toHaveStyleRule('border-color', defaultBorderColor);
    });

    it('clears the unified container validation when the Input unmounts', () => {
      const Example = ({ showInput }: { showInput: boolean }) => (
        <InputGroup isUnified data-test-id="input-group">
          {showInput ? <Input aria-label="Input" validation="error" /> : null}
        </InputGroup>
      );

      const { getByTestId, rerender } = render(<Example showInput />);

      expect(getByTestId('input-group')).toHaveStyleRule('border-color', errorColor);

      rerender(<Example showInput={false} />);

      expect(getByTestId('input-group')).toHaveStyleRule('border-color', defaultBorderColor);
    });

    it('does not reflect a Textarea validation on the unified container', () => {
      const { getByTestId } = render(
        <InputGroup isUnified data-test-id="input-group">
          <Textarea aria-label="Notes" validation="error" />
        </InputGroup>
      );

      expect(getByTestId('input-group')).toHaveStyleRule('border-color', defaultBorderColor);
    });

    it('applies nested Input validation only to the nearest unified group', () => {
      const { getByTestId } = render(
        <InputGroup data-test-id="outer">
          <InputGroup isUnified data-test-id="inner">
            <Input aria-label="Input" validation="error" />
          </InputGroup>
        </InputGroup>
      );

      expect(getByTestId('inner')).toHaveStyleRule('border-color', errorColor);
      expect(getByTestId('outer')).not.toHaveStyleRule('border-color', errorColor);
    });

    /* mirrors the useText warning specs in react-theming: save/restore NODE_ENV + console.warn */
    describe('multiple validation-bearing Inputs', () => {
      const environment = process.env.NODE_ENV;
      const consoleWarning = console.warn;

      beforeEach(() => {
        process.env.NODE_ENV = 'development';
        console.warn = jest.fn();
      });

      afterEach(() => {
        process.env.NODE_ENV = environment;
        console.warn = consoleWarning;
      });

      it('warns when a second Input with validation registers', () => {
        const spy = jest.spyOn(console, 'warn');

        render(
          <InputGroup isUnified>
            <Input aria-label="First" validation="error" />
            <Input aria-label="Second" validation="success" />
          </InputGroup>
        );

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy.mock.calls[0][0]).toStrictEqual(expect.stringContaining('<InputGroup>'));
      });

      it('warns even when both Inputs share the same validation value', () => {
        const spy = jest.spyOn(console, 'warn');

        render(
          <InputGroup isUnified>
            <Input aria-label="First" validation="error" />
            <Input aria-label="Second" validation="error" />
          </InputGroup>
        );

        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('does not warn for a single Input with validation', () => {
        const spy = jest.spyOn(console, 'warn');

        render(
          <InputGroup isUnified>
            <Input aria-label="Input" validation="error" />
          </InputGroup>
        );

        expect(spy).not.toHaveBeenCalled();
      });

      it('does not warn when only one of two Inputs has validation', () => {
        const spy = jest.spyOn(console, 'warn');

        render(
          <InputGroup isUnified>
            <Input aria-label="First" validation="error" />
            <Input aria-label="Second" />
          </InputGroup>
        );

        expect(spy).not.toHaveBeenCalled();
      });

      it('does not warn in production', () => {
        process.env.NODE_ENV = 'production';
        const spy = jest.spyOn(console, 'warn');

        render(
          <InputGroup isUnified>
            <Input aria-label="First" validation="error" />
            <Input aria-label="Second" validation="success" />
          </InputGroup>
        );

        expect(spy).not.toHaveBeenCalled();
      });

      it('keeps the remaining Input validation when a sibling Input unmounts', () => {
        const Example = ({ showSecond }: { showSecond: boolean }) => (
          <InputGroup isUnified data-test-id="input-group">
            <Input aria-label="First" validation="error" />
            {showSecond ? <Input aria-label="Second" validation="success" /> : null}
          </InputGroup>
        );

        const { getByTestId, rerender } = render(<Example showSecond />);

        expect(getByTestId('input-group')).toHaveStyleRule('border-color', successColor);

        rerender(<Example showSecond={false} />);

        expect(getByTestId('input-group')).toHaveStyleRule('border-color', errorColor);
      });
    });
  });

  describe('InputGroup child items', () => {
    it('applies correct styling to prepend elements', () => {
      const { getByText } = render(
        <Field>
          <Field.Label>Input</Field.Label>
          <InputGroup>
            <button>A</button>
            <button>B</button>
            <Input />
          </InputGroup>
        </Field>
      );

      const inputGroupElement = getByText('A').parentElement!;

      expect(inputGroupElement).toHaveStyleRule('margin-left', '-1px', {
        modifier: '&>*:not(:first-child)'
      });

      expect(inputGroupElement).toHaveStyleRule('border-top-right-radius', '0', {
        modifier: '&>*:first-child:not(:last-child)'
      });
      expect(inputGroupElement).toHaveStyleRule('border-bottom-right-radius', '0', {
        modifier: '&>*:first-child:not(:last-child)'
      });

      expect(inputGroupElement).toHaveStyleRule('border-top-left-radius', '0', {
        modifier: '&>*:last-child:not(:first-child)'
      });
      expect(inputGroupElement).toHaveStyleRule('border-bottom-left-radius', '0', {
        modifier: '&>*:last-child:not(:first-child)'
      });
    });

    it('applies correct styling to prepend elements in RTL mode', () => {
      const { getByText } = renderRtl(
        <Field>
          <Field.Label>Input</Field.Label>
          <InputGroup>
            <button>A</button>
            <button>B</button>
            <Input />
          </InputGroup>
        </Field>
      );

      const inputGroupElement = getByText('A').parentElement!;

      expect(inputGroupElement).toHaveStyleRule('margin-right', '-1px', {
        modifier: '&>*:not(:first-child)'
      });

      expect(inputGroupElement).toHaveStyleRule('border-top-left-radius', '0', {
        modifier: '&>*:first-child:not(:last-child)'
      });
      expect(inputGroupElement).toHaveStyleRule('border-bottom-left-radius', '0', {
        modifier: '&>*:first-child:not(:last-child)'
      });

      expect(inputGroupElement).toHaveStyleRule('border-top-right-radius', '0', {
        modifier: '&>*:last-child:not(:first-child)'
      });
      expect(inputGroupElement).toHaveStyleRule('border-bottom-right-radius', '0', {
        modifier: '&>*:last-child:not(:first-child)'
      });
    });
  });
});
