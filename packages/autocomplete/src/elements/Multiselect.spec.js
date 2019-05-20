/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import Multiselect from './Multiselect';

describe('Autocomplete', () => {
  it('renders label if provided', () => {
    const label = 'Test Label';
    const { container } = render(<Multiselect label={label} options={[]} />);

    expect(container.querySelector('label').textContent).toBe(label);
  });

  it('renders aria-label if provided', () => {
    const ariaLabel = 'Test Aria Label';
    const { container } = render(<Multiselect aria-label={ariaLabel} options={[]} />);

    expect(container.firstChild.firstChild).toHaveAttribute('aria-label', ariaLabel);
  });

  it('renders validation styling if provided', () => {
    const validation = 'warning';
    const { container } = render(<Multiselect validation={validation} options={[]} />);

    expect(container.firstChild.firstChild).toHaveClass('c-txt__input--warning');
  });

  it('renders small styling if provided', () => {
    const { container, baseElement } = render(<Multiselect small options={[]} />);

    expect(container.firstChild.firstChild).toHaveClass('c-txt__input--sm');

    fireEvent.click(container.firstChild.firstChild);

    expect(baseElement.querySelector('ul')).toHaveClass('c-menu--sm');
  });

  it('renders disabled styling if provided', () => {
    const { container } = render(<Multiselect disabled options={[]} />);

    expect(container.firstChild.firstChild).toHaveClass('is-disabled');
  });

  it('applies inputRef if provided', () => {
    const inputRefSpy = jest.fn();

    render(<Multiselect inputRef={inputRefSpy} options={[]} />);
    expect(inputRefSpy).toHaveBeenCalled();
  });

  describe('Input', () => {
    it('applies focused styling when focused', () => {
      const { container } = render(<Multiselect options={[]} />);

      fireEvent.click(container.firstChild.firstChild);
      fireEvent.focus(container.querySelector('input'));

      expect(container.firstChild.firstChild).toHaveClass('is-focused');
    });

    it('does not apply focused styling when focused while disabled', () => {
      const { container } = render(<Multiselect disabled options={[]} />);

      fireEvent.focus(container.querySelector('input'));

      expect(container.firstChild.firstChild).not.toHaveClass('is-focused');
    });

    it('removes focused styling when blured', () => {
      const { container } = render(<Multiselect options={[]} />);

      fireEvent.click(container.firstChild.firstChild);
      fireEvent.blur(container.querySelector('input'));

      expect(container.firstChild.firstChild).not.toHaveClass('is-focused');
    });

    it('updates input text with onChange event', () => {
      const inputValue = 'test';
      const { container } = render(<Multiselect options={[]} />);
      const input = container.querySelector('input');

      fireEvent.click(container.firstChild.firstChild);

      fireEvent.change(input, { target: { value: inputValue } });

      expect(input.value).toBe(inputValue);
    });

    it('does not select option if ENTER key is used without input text', () => {
      const onChangeSpy = jest.fn();
      const { container } = render(
        <Multiselect
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
      fireEvent.keyDown(container.querySelector('input'), {
        keyCode: KEY_CODES.ENTER,
        target: { value: '' }
      });

      expect(onChangeSpy).not.toHaveBeenCalled();

      fireEvent.keyDown(container.querySelector('input'), {
        keyCode: KEY_CODES.ENTER,
        target: { value: '   ' }
      });

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    describe('Keyboard removal', () => {
      let onChangeSpy;

      beforeEach(() => {
        onChangeSpy = jest.fn();
      });

      it('removes latest selected value if delete key is pressed', () => {
        const { container } = render(
          <Multiselect
            selectedValues={['option-1', 'option-2']}
            onChange={onChangeSpy}
            options={[
              {
                label: 'option-1',
                value: 'option-1'
              },
              {
                label: 'option-2',
                value: 'option-2'
              }
            ]}
          />
        );

        fireEvent.focus(container.querySelector('input'));
        fireEvent.keyDown(container.querySelector('input'), { keyCode: KEY_CODES.DELETE });

        expect(onChangeSpy).toHaveBeenCalledWith(['option-1']);
      });

      it('removes latest selected value if backspace key is pressed', () => {
        const { container } = render(
          <Multiselect
            selectedValues={['option-1', 'option-2']}
            onChange={onChangeSpy}
            options={[
              {
                label: 'option-1',
                value: 'option-1'
              },
              {
                label: 'option-2',
                value: 'option-2'
              }
            ]}
          />
        );

        fireEvent.focus(container.querySelector('input'));
        fireEvent.keyDown(container.querySelector('input'), { keyCode: KEY_CODES.BACKSPACE });

        expect(onChangeSpy).toHaveBeenCalledWith(['option-1']);
      });

      it('removes focused selected value if either key is pressed', () => {
        const { container } = render(
          <Multiselect
            selectedValues={['option-1', 'option-2']}
            onChange={onChangeSpy}
            options={[
              {
                label: 'option-1',
                value: 'option-1'
              },
              {
                label: 'option-2',
                value: 'option-2'
              }
            ]}
          />
        );

        fireEvent.click(container.querySelector('.c-tag'));
        fireEvent.keyDown(container.querySelector('input'), { keyCode: KEY_CODES.BACKSPACE });

        expect(onChangeSpy).toHaveBeenCalledWith(['option-2']);
      });
    });
  });

  describe('Options', () => {
    it('renders options correctly', () => {
      const { container, getAllByRole } = render(
        <Multiselect
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

      const menuItems = getAllByRole('option');

      expect(menuItems).toHaveLength(3);
      expect(menuItems[0].textContent).toBe('Option 1');
      expect(menuItems[1].textContent).toBe('Option 2');
      expect(menuItems[2].textContent).toBe('Option 3');
    });

    it('call onChange correctly when option is selected', () => {
      const onChangeSpy = jest.fn();
      const { container, getAllByRole } = render(
        <Multiselect
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

      const menuItems = getAllByRole('option');

      fireEvent.click(menuItems[0]);

      expect(onChangeSpy).toHaveBeenCalledWith(['option-1']);
    });

    it('call onChange correctly when option is deselected', () => {
      const onChangeSpy = jest.fn();
      const { container, getAllByRole } = render(
        <Multiselect
          onChange={onChangeSpy}
          selectedValues={['option-1']}
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

      const menuItems = getAllByRole('option');

      fireEvent.click(menuItems[0]);

      expect(onChangeSpy).toHaveBeenCalledWith([]);
    });
  });

  describe('Tags', () => {
    let onChangeSpy;

    const values = [];

    for (let x = 0; x < 25; x++) {
      values.push(`option-${x}`);
    }

    beforeEach(() => {
      onChangeSpy = jest.fn();
    });

    it('shows all tags if less than five options are selected', () => {
      const { container } = render(
        <Multiselect
          selectedValues={values}
          onChange={onChangeSpy}
          options={values.map(val => ({
            label: `${val} - custom label`,
            value: val
          }))}
        />
      );

      expect(container.querySelectorAll('.c-tag')).toHaveLength(4);
    });

    it('shows expansion anchor if more than five options are selected', () => {
      const { container } = render(
        <Multiselect
          selectedValues={values}
          onChange={onChangeSpy}
          options={values.map(val => ({
            label: `${val} - custom label`,
            value: val
          }))}
        />
      );

      expect(container.querySelectorAll('.c-tag')).toHaveLength(4);

      const expansionElement = container.querySelector('a');

      expect(expansionElement).not.toBe(null);
      expect(expansionElement.textContent).toBe('+ 21 more');
    });

    it('shows all tags if multiselect is focused', () => {
      const { container } = render(
        <Multiselect
          selectedValues={values}
          onChange={onChangeSpy}
          options={values.map(val => ({
            label: `${val} - custom label`,
            value: val
          }))}
        />
      );

      fireEvent.focus(container.querySelector('input'));

      expect(container.querySelectorAll('.c-tag')).toHaveLength(25);
    });

    it('displays tags with label value if provided', () => {
      const { container } = render(
        <Multiselect
          selectedValues={values}
          onChange={onChangeSpy}
          options={values.map(val => ({
            label: `${val} - custom label`,
            value: val
          }))}
        />
      );

      expect(container.querySelector('.c-tag').textContent).toBe('option-0 - custom label');
    });

    it('removes selection if tag is removed by mouse', () => {
      const { container } = render(
        <Multiselect
          selectedValues={['option-1', 'option-2']}
          onChange={onChangeSpy}
          options={values.map(val => ({
            label: `${val} - custom label`,
            value: val
          }))}
        />
      );

      fireEvent.click(container.querySelector('.c-tag__remove'));

      expect(onChangeSpy).toHaveBeenCalledWith(['option-2']);
    });

    it('removes selection if tag is removed by mouse while expanded', () => {
      const { container } = render(
        <Multiselect
          selectedValues={['option-1', 'option-2']}
          onChange={onChangeSpy}
          options={values.map(val => ({
            label: `${val} - custom label`,
            value: val
          }))}
        />
      );

      fireEvent.focus(container.querySelector('input'));
      fireEvent.click(container.querySelector('.c-tag__remove'));

      expect(onChangeSpy).toHaveBeenCalledWith(['option-2']);
    });

    it('does not remove selection if tag is removed while in the disabled state', () => {
      const { container } = render(
        <Multiselect
          disabled
          selectedValues={['option-1', 'option-2']}
          onChange={onChangeSpy}
          options={values.map(val => ({
            label: `${val} - custom label`,
            value: val
          }))}
        />
      );

      fireEvent.click(container.querySelector('.c-tag__remove'));

      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });
});
