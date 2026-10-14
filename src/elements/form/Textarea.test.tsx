/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { fireEvent, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createRef } from 'react';
import { vi } from 'vitest';

import { render } from '../../test/render';
import { Field } from './Field';
import { Textarea } from './Textarea';

const { getComputedStyle } = window;
const originalScrollHeight = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollHeight');

describe('Textarea', () => {
  const user = userEvent.setup();

  it('is rendered as a textarea', () => {
    const { getByTestId } = render(
      <Field>
        <Textarea data-test-id="textarea" />
      </Field>
    );

    expect(getByTestId('textarea').nodeName).toBe('TEXTAREA');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLTextAreaElement>();
    const { getByTestId } = render(
      <Field>
        <Textarea data-test-id="textarea" ref={ref} />
      </Field>
    );

    expect(getByTestId('textarea')).toBe(ref.current);
  });

  it('selects readonly text', async () => {
    const value = 'testing';
    const { getByTestId } = render(
      <Field>
        <Textarea data-test-id="textarea" readOnly value={value} />
      </Field>
    );
    const textarea = getByTestId('textarea') as HTMLTextAreaElement;

    await user.click(textarea);

    expect(textarea.selectionStart).toBe(0);
    expect(textarea.selectionEnd).toBe(value.length);
  });

  describe('Autoresizing', () => {
    beforeEach(() => {
      const styles: Partial<CSSStyleDeclaration> = {
        boxSizing: 'border-box',
        paddingBottom: '10px',
        paddingTop: '10px',
        borderTopWidth: '1px',
        borderBottomWidth: '1px'
      };

      window.getComputedStyle = vi.fn().mockReturnValue({
        ...styles,
        getPropertyValue: (prop: any) => {
          return styles[prop];
        }
      });
    });

    afterEach(() => {
      window.getComputedStyle = getComputedStyle;

      Object.defineProperty(Element.prototype, 'scrollHeight', originalScrollHeight as any);
    });

    it('increases height of textarea as content is updated', () => {
      const { getByTestId } = render(
        <Field>
          <Textarea data-test-id="textarea" minRows={2} />
        </Field>
      );
      const textarea = getByTestId('textarea');

      Object.defineProperty(Element.prototype, 'scrollHeight', {
        configurable: true,
        value: 38
      });

      act(() => {
        fireEvent.change(textarea, { target: { value: 'hello world' } });
      });

      expect(textarea.style.height).toBe('58px');

      Object.defineProperty(Element.prototype, 'scrollHeight', {
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

      Object.defineProperty(Element.prototype, 'scrollHeight', {
        configurable: true,
        value: 100
      });

      act(() => {
        fireEvent.change(textarea, { target: { value: 'hello world\n\n\n\n\nlarger text' } });
      });

      expect(textarea.style.height).toBe('182px');

      Object.defineProperty(Element.prototype, 'scrollHeight', {
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
