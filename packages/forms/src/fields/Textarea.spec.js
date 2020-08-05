/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent, act } from 'garden-test-utils';
import Textarea from './Textarea';
import Field from './common/Field';
import Label from './common/Label';

const { getComputedStyle } = window;
const originalScrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight');

describe('Textarea', () => {
  it('is rendered as a textarea', () => {
    const { getByTestId } = render(
      <Field>
        <Textarea data-test-id="textarea" />
      </Field>
    );

    expect(getByTestId('textarea').nodeName).toBe('TEXTAREA');
  });

  it('receives correct accessibility attributes', () => {
    const { getByTestId } = render(
      <Field>
        <Label data-test-id="label">Label</Label>
        <Textarea data-test-id="textarea" />
      </Field>
    );

    const labelNode = getByTestId('label');
    const labelId = labelNode.getAttribute('id');
    const labelFor = labelNode.getAttribute('for');

    const textareaNode = getByTestId('textarea');
    const textareaId = textareaNode.getAttribute('id');
    const textareaLabeledBy = textareaNode.getAttribute('aria-labelledby');

    expect(labelId).toBe(textareaLabeledBy);
    expect(labelFor).toBe(textareaId);
  });

  describe('Autoresizing', () => {
    beforeAll(() => {
      const styles = {
        boxSizing: 'border-box',
        paddingBottom: '10px',
        paddingTop: '10px',
        borderTopWidth: '1px',
        borderBottomWidth: '1px'
      };

      window.getComputedStyle = jest.fn().mockReturnValue({
        ...styles,
        getPropertyValue: prop => {
          return styles[prop];
        }
      });
    });

    afterAll(() => {
      window.getComputedStyle = getComputedStyle;

      Object.defineProperty(HTMLElement.prototype, 'scrollHeight', originalScrollHeight);
    });

    it('increases height of textarea as content is updated', () => {
      const { getByTestId } = render(
        <Field>
          <Textarea data-test-id="textarea" minRows={2} />
        </Field>
      );
      const textarea = getByTestId('textarea');

      Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
        configurable: true,
        value: 38
      });

      act(() => {
        fireEvent.change(textarea, { target: { value: 'hello world' } });
      });

      expect(textarea.style.height).toBe('58px');

      Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
        configurable: true,
        value: 100
      });

      act(() => {
        fireEvent.change(textarea, { target: { value: 'hello world\n\n\n\n\nlarger text' } });
      });

      expect(textarea.style.height).toBe('182px');
    });

    it('decreases height of textarea as content is updated', () => {
      const { getByTestId } = render(
        <Field>
          <Textarea data-test-id="textarea" minRows={2} />
        </Field>
      );
      const textarea = getByTestId('textarea');

      Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
        configurable: true,
        value: 100
      });

      act(() => {
        fireEvent.change(textarea, { target: { value: 'hello world\n\n\n\n\nlarger text' } });
      });

      expect(textarea.style.height).toBe('182px');

      Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
        configurable: true,
        value: 38
      });

      act(() => {
        fireEvent.change(textarea, { target: { value: 'hello world' } });
      });

      expect(textarea.style.height).toBe('58px');
    });
  });
});
