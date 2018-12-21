/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Label, FauxInput, Input } from '@zendeskgarden/react-textfields';
import { MenuView, Item } from '@zendeskgarden/react-menus';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  it('renders label if provided', () => {
    const label = 'Test Label';
    const wrapper = mountWithTheme(<Autocomplete label={label} options={[]} />);

    expect(wrapper.find(Label)).toHaveText(label);
  });

  it('renders aria-label if provided', () => {
    const ariaLabel = 'Test Aria Label';
    const wrapper = mountWithTheme(<Autocomplete aria-label={ariaLabel} options={[]} />);

    expect(wrapper.find(FauxInput)).toHaveProp('aria-label', ariaLabel);
  });

  it('renders validation styling if provided', () => {
    const validation = 'warning';
    const wrapper = mountWithTheme(<Autocomplete validation={validation} options={[]} />);

    expect(wrapper.find(FauxInput)).toHaveProp('validation', validation);
  });

  it('renders small styling if provided', () => {
    const wrapper = mountWithTheme(<Autocomplete small options={[]} />);
    const triggerElement = wrapper.find(FauxInput);

    expect(triggerElement).toHaveProp('small');

    triggerElement.simulate('click');

    expect(wrapper.find(MenuView)).toHaveProp('small');
  });

  it('renders disabled styling if provided', () => {
    const wrapper = mountWithTheme(<Autocomplete disabled options={[]} />);
    const triggerElement = wrapper.find(FauxInput);

    expect(triggerElement).toHaveProp('disabled');

    triggerElement.simulate('click');

    expect(wrapper.find(MenuView)).not.toExist();
  });

  it('applies inputRef if provided', () => {
    const inputRefSpy = jest.fn();

    mountWithTheme(<Autocomplete inputRef={inputRefSpy} options={[]} />);
    expect(inputRefSpy).toHaveBeenCalled();
  });

  describe('Input', () => {
    it('applies focused styling when focused', () => {
      const wrapper = mountWithTheme(<Autocomplete options={[]} />);
      const triggerElement = wrapper.find(FauxInput);

      triggerElement.simulate('click');
      wrapper.find(Input).simulate('focus');

      expect(triggerElement).toHaveProp('focused');
    });

    it('removes focused styling when blured', () => {
      const wrapper = mountWithTheme(<Autocomplete options={[]} />);
      const triggerElement = wrapper.find(FauxInput);

      triggerElement.simulate('click');
      wrapper.find(Input).simulate('blur');

      expect(triggerElement).toHaveProp('focused', false);
    });

    it('updates input text with onChange event', () => {
      const inputValue = 'test';
      const wrapper = mountWithTheme(<Autocomplete options={[]} />);
      const triggerElement = wrapper.find(FauxInput);

      triggerElement.simulate('click');

      const input = wrapper.find(Input);

      input.simulate('change', { target: { value: inputValue } });
      wrapper.update();

      expect(wrapper).toHaveState('inputValue', inputValue);
    });

    it('does not select option if ENTER key is used without input text', () => {
      const onChangeSpy = jest.fn();
      const wrapper = mountWithTheme(
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
      const triggerElement = wrapper.find(FauxInput);

      triggerElement.simulate('click');

      wrapper.find(Input).simulate('keydown', { keyCode: KEY_CODES.ENTER, target: { value: '' } });
      expect(onChangeSpy).not.toHaveBeenCalled();

      wrapper
        .find(Input)
        .simulate('keydown', { keyCode: KEY_CODES.ENTER, target: { value: '   ' } });
      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('Options', () => {
    it('renders options correctly', () => {
      const wrapper = mountWithTheme(
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

      const triggerElement = wrapper.find(FauxInput);

      triggerElement.simulate('click');

      const menuItems = wrapper.find(Item);

      expect(menuItems).toHaveLength(3);
      expect(menuItems.at(0)).toHaveText('Option 1');
      expect(menuItems.at(1)).toHaveText('Option 2');
      expect(menuItems.at(2)).toHaveText('Option 3');
    });

    it('call onChange correctly when option is selected', () => {
      const onChangeSpy = jest.fn();
      const wrapper = mountWithTheme(
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

      const triggerElement = wrapper.find(FauxInput);

      triggerElement.simulate('click');
      wrapper
        .find(Item)
        .at(0)
        .simulate('click');

      expect(onChangeSpy).toHaveBeenCalledWith('option-1');
    });
  });
});
