/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent, renderRtl } from 'garden-test-utils';
import { Field, Label, Input, InputGroup } from '../..';

describe('InputGroup', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Field>
        <Label>Input</Label>
        <InputGroup ref={ref} data-test-id="input-group">
          <Input />
        </InputGroup>
      </Field>
    );

    expect(getByTestId('input-group')).toBe(ref.current);
  });

  it('applies focusInset styling to Input through context', () => {
    const { getByLabelText } = render(
      <Field>
        <Label>Input</Label>
        <InputGroup>
          <Input />
        </InputGroup>
      </Field>
    );

    const input = getByLabelText('Input');

    fireEvent.focus(input);

    expect(input).toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
      modifier: '&:focus-visible'
    });
  });

  describe('InputGroup child items', () => {
    it('applies correct styling to prepend elements', () => {
      const { getByText } = render(
        <Field>
          <Label>Input</Label>
          <InputGroup>
            <button>A</button>
            <button>B</button>
            <Input />
          </InputGroup>
        </Field>
      );

      const inputGroupElement = getByText('A').parentElement!;

      expect(inputGroupElement).toHaveStyleRule('margin-left', '-1px', {
        modifier: '& > *:not(:first-child)'
      });

      expect(inputGroupElement).toHaveStyleRule('border-top-right-radius', '0', {
        modifier: '& > *:first-child:not(:last-child)'
      });
      expect(inputGroupElement).toHaveStyleRule('border-bottom-right-radius', '0', {
        modifier: '& > *:first-child:not(:last-child)'
      });

      expect(inputGroupElement).toHaveStyleRule('border-top-left-radius', '0', {
        modifier: '& > *:last-child:not(:first-child)'
      });
      expect(inputGroupElement).toHaveStyleRule('border-bottom-left-radius', '0', {
        modifier: '& > *:last-child:not(:first-child)'
      });
    });

    it('applies correct styling to prepend elements in RTL mode', () => {
      const { getByText } = renderRtl(
        <Field>
          <Label>Input</Label>
          <InputGroup>
            <button>A</button>
            <button>B</button>
            <Input />
          </InputGroup>
        </Field>
      );

      const inputGroupElement = getByText('A').parentElement!;

      expect(inputGroupElement).toHaveStyleRule('margin-right', '-1px', {
        modifier: '& > *:not(:first-child)'
      });

      expect(inputGroupElement).toHaveStyleRule('border-top-left-radius', '0', {
        modifier: '& > *:first-child:not(:last-child)'
      });
      expect(inputGroupElement).toHaveStyleRule('border-bottom-left-radius', '0', {
        modifier: '& > *:first-child:not(:last-child)'
      });

      expect(inputGroupElement).toHaveStyleRule('border-top-right-radius', '0', {
        modifier: '& > *:last-child:not(:first-child)'
      });
      expect(inputGroupElement).toHaveStyleRule('border-bottom-right-radius', '0', {
        modifier: '& > *:last-child:not(:first-child)'
      });
    });
  });
});
