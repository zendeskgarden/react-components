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

    expect(input).toHaveStyleRule('box-shadow', 'inset 0 0 0 3px rgba(31,115,183,0.35)', {
      modifier: '&:focus'
    });
  });

  describe('InputGroup.Prepend', () => {
    it('applies correct styling to Prepend elements', () => {
      const { getByText } = render(
        <Field>
          <Label>Input</Label>
          <InputGroup>
            <InputGroup.Prepend>
              <button>A</button>
            </InputGroup.Prepend>
            <InputGroup.Prepend>
              <button>B</button>
            </InputGroup.Prepend>
            <Input />
          </InputGroup>
        </Field>
      );

      const prependElementA = getByText('A').parentElement;
      const prependElementB = getByText('B').parentElement;

      expect(prependElementA).toHaveStyleRule('margin-right', '-1px');
      expect(prependElementB).toHaveStyleRule('margin-right', '-1px');

      expect(prependElementA).toHaveStyleRule('border-top-right-radius', '0', {
        modifier: '& > *'
      });
      expect(prependElementA).toHaveStyleRule('border-bottom-right-radius', '0', {
        modifier: '& > *'
      });

      expect(prependElementB).toHaveStyleRule('border-top-left-radius', '0', {
        modifier: '&:not(:first-child) > *'
      });
      expect(prependElementB).toHaveStyleRule('border-bottom-left-radius', '0', {
        modifier: '&:not(:first-child) > *'
      });
    });

    it('applies correct styling to Prepend elements in RTL mod', () => {
      const { getByText } = renderRtl(
        <Field>
          <Label>Input</Label>
          <InputGroup>
            <InputGroup.Prepend>
              <button>A</button>
            </InputGroup.Prepend>
            <InputGroup.Prepend>
              <button>B</button>
            </InputGroup.Prepend>
            <Input />
          </InputGroup>
        </Field>
      );

      const prependElementA = getByText('A').parentElement;
      const prependElementB = getByText('B').parentElement;

      expect(prependElementA).toHaveStyleRule('margin-left', '-1px');
      expect(prependElementB).toHaveStyleRule('margin-left', '-1px');

      expect(prependElementA).toHaveStyleRule('border-top-left-radius', '0', {
        modifier: '& > *'
      });
      expect(prependElementA).toHaveStyleRule('border-bottom-left-radius', '0', {
        modifier: '& > *'
      });

      expect(prependElementB).toHaveStyleRule('border-top-right-radius', '0', {
        modifier: '&:not(:first-child) > *'
      });
      expect(prependElementB).toHaveStyleRule('border-bottom-right-radius', '0', {
        modifier: '&:not(:first-child) > *'
      });
    });
  });

  describe('InputGroup.Append', () => {
    it('applies correct styling to Append elements', () => {
      const { getByText } = render(
        <Field>
          <Label>Input</Label>
          <InputGroup>
            <Input />
            <InputGroup.Append>
              <button>A</button>
            </InputGroup.Append>
            <InputGroup.Append>
              <button>B</button>
            </InputGroup.Append>
          </InputGroup>
        </Field>
      );

      const prependElementA = getByText('A').parentElement;
      const prependElementB = getByText('B').parentElement;

      expect(prependElementA).toHaveStyleRule('margin-left', '-1px');
      expect(prependElementB).toHaveStyleRule('margin-left', '-1px');

      expect(prependElementA).toHaveStyleRule('border-top-left-radius', '0', {
        modifier: '& > *'
      });
      expect(prependElementA).toHaveStyleRule('border-bottom-left-radius', '0', {
        modifier: '& > *'
      });

      expect(prependElementB).toHaveStyleRule('border-top-right-radius', '0', {
        modifier: '&:not(:last-child) > *'
      });
      expect(prependElementB).toHaveStyleRule('border-bottom-right-radius', '0', {
        modifier: '&:not(:last-child) > *'
      });
    });

    it('applies correct styling to Append elements in RTL mod', () => {
      const { getByText } = renderRtl(
        <Field>
          <Label>Input</Label>
          <InputGroup>
            <Input />
            <InputGroup.Append>
              <button>A</button>
            </InputGroup.Append>
            <InputGroup.Append>
              <button>B</button>
            </InputGroup.Append>
          </InputGroup>
        </Field>
      );

      const prependElementA = getByText('A').parentElement;
      const prependElementB = getByText('B').parentElement;

      expect(prependElementA).toHaveStyleRule('margin-right', '-1px');
      expect(prependElementB).toHaveStyleRule('margin-right', '-1px');

      expect(prependElementA).toHaveStyleRule('border-top-right-radius', '0', {
        modifier: '& > *'
      });
      expect(prependElementA).toHaveStyleRule('border-bottom-right-radius', '0', {
        modifier: '& > *'
      });

      expect(prependElementB).toHaveStyleRule('border-top-left-radius', '0', {
        modifier: '&:not(:last-child) > *'
      });
      expect(prependElementB).toHaveStyleRule('border-bottom-left-radius', '0', {
        modifier: '&:not(:last-child) > *'
      });
    });
  });
});
