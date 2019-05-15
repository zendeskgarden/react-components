/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  it('renders children if provided', () => {
    const { getByTestId } = render(
      <Autocomplete options={[]}>
        <div data-test-id="autocomplete-child">Child content</div>
      </Autocomplete>
    );

    expect(getByTestId('autocomplete-child').textContent).toBe('Child content');
  });

  it('renders label if provided', () => {
    const label = 'Test Label';
    const { getByTestId } = render(
      <Autocomplete label={<span data-test-id="label">{label}</span>} options={[]} />
    );

    expect(getByTestId('label').textContent).toBe(label);
  });

  it('renders aria-label if provided', () => {
    const ariaLabel = 'Test Aria Label';
    const { container } = render(<Autocomplete aria-label={ariaLabel} options={[]} />);

    expect(container.firstChild.firstChild).toHaveAttribute('aria-label', ariaLabel);
  });

  it('renders validation styling if provided', () => {
    const validation = 'warning';
    const { container } = render(<Autocomplete validation={validation} options={[]} />);

    expect(container.firstChild.firstChild).toHaveClass('c-txt__input--warning');
  });

  it('renders focus-inset styling if provided', () => {
    const { container } = render(<Autocomplete focusInset options={[]} />);

    expect(container.firstChild.firstChild).toHaveClass('c-txt__input--focus-inset');
  });

  it('renders small styling if provided', () => {
    const { container } = render(<Autocomplete small options={[]} />);

    expect(container.firstChild.firstChild).toHaveClass('c-txt__input--sm');
  });

  it('renders disabled styling if provided', () => {
    const { container } = render(<Autocomplete disabled options={[]} />);

    expect(container.firstChild.firstChild).toHaveClass('is-disabled');
  });

  it('applies inputRef if provided', () => {
    const inputRefSpy = jest.fn();

    render(<Autocomplete inputRef={inputRefSpy} options={[]} />);
    expect(inputRefSpy).toHaveBeenCalled();
  });

  describe('Input', () => {
    it('applies focused styling when focused', () => {
      const { container } = render(<Autocomplete options={[]} />);

      fireEvent.click(container.firstChild.firstChild);
      fireEvent.focus(container.querySelector('input'));

      expect(container.firstChild.firstChild).toHaveClass('is-focused');
    });

    it('removes focused styling when blured', () => {
      const { container } = render(<Autocomplete options={[]} />);

      fireEvent.click(container.firstChild.firstChild);
      fireEvent.blur(container.querySelector('input'));

      expect(container.firstChild.firstChild).not.toHaveClass('is-focused');
    });

    it('updates input text with onChange event', () => {
      const inputValue = 'test';
      const { container } = render(<Autocomplete options={[]} />);

      fireEvent.click(container.firstChild.firstChild);

      const input = container.querySelector('input');

      fireEvent.change(input, { target: { value: inputValue } });

      expect(input.value).toBe(inputValue);
    });

    it('does not select option if ENTER key is used without input text', () => {
      const onChangeSpy = jest.fn();
      const { container } = render(
        <Autocomplete
          onChange={onChangeSpy}
          options={[
            {
              value: 'option-1',
              label: 'Option 1'
            },
            {
              value: 'option-2',
              label: 'Option 2'
            },
            {
              value: 'option-3',
              label: 'Option 3'
            }
          ]}
        />
      );

      fireEvent.click(container.firstChild.firstChild);

      const input = container.querySelector('input');

      fireEvent.keyDown(input, { keyCode: KEY_CODES.ENTER, target: { value: '' } });

      expect(onChangeSpy).not.toHaveBeenCalled();

      fireEvent.keyDown(input, { keyCode: KEY_CODES.ENTER, target: { value: '   ' } });

      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('Options', () => {
    it('renders options correctly', () => {
      const { container, getAllByRole } = render(
        <Autocomplete
          options={[
            {
              value: 'option-1',
              label: 'Option 1'
            },
            {
              value: 'option-2',
              label: 'Option 2'
            },
            {
              value: 'option-3',
              label: 'Option 3'
            }
          ]}
        />
      );

      fireEvent.click(container.firstChild.firstChild);
      const items = getAllByRole('option');

      expect(items).toHaveLength(3);
      expect(items[0].textContent).toBe('Option 1');
      expect(items[1].textContent).toBe('Option 2');
      expect(items[2].textContent).toBe('Option 3');
    });

    it('call onChange correctly when option is selected', () => {
      const onChangeSpy = jest.fn();
      const { container, getAllByRole } = render(
        <Autocomplete
          onChange={onChangeSpy}
          options={[
            {
              value: 'option-1',
              label: 'Option 1'
            },
            {
              value: 'option-2',
              label: 'Option 2'
            },
            {
              value: 'option-3',
              label: 'Option 3'
            }
          ]}
        />
      );

      fireEvent.click(container.firstChild.firstChild);
      const items = getAllByRole('option');

      fireEvent.click(items[0]);

      expect(onChangeSpy).toHaveBeenCalledWith('option-1');
    });
  });
});
