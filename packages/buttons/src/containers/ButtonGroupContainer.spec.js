/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import ButtonGroupContainer from './ButtonGroupContainer';

describe('ButtonGroupContainer', () => {
  let wrapper;
  const buttons = ['button-1', 'button-2', 'button-3'];

  const basicExample = () => (
    <ButtonGroupContainer>
      {({ getGroupProps, getButtonProps, selectedKey, focusedKey }) => (
        <div {...getGroupProps({ 'data-test-id': 'group' })}>
          {buttons.map(button => (
            <div
              {...getButtonProps({
                key: button,
                'data-test-id': 'button',
                'data-selected': button === selectedKey,
                'data-focused': button === focusedKey
              })}
            >
              {button}
            </div>
          ))}
        </div>
      )}
    </ButtonGroupContainer>
  );

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
    wrapper = mount(basicExample());
  });

  const findButtonGroup = enzymeWrapper => enzymeWrapper.find('[data-test-id="group"]');
  const findButtons = enzymeWrapper => enzymeWrapper.find('[data-test-id="button"]');

  describe('getGroupProps', () => {
    it('applies correct accessibility role', () => {
      expect(findButtonGroup(wrapper)).toHaveProp('role', 'group');
    });
  });

  describe('getButtonProps', () => {
    it('throws if key is not provided', () => {
      console.error = jest.fn(); // eslint-disable-line no-console

      expect(() => {
        mount(
          <ButtonGroupContainer>
            {({ getButtonProps }) => <div {...getButtonProps()}>Test button</div>}
          </ButtonGroupContainer>
        );
      }).toThrow(
        '"key" must be defined within getButtonProps regardless of being used within a .map()'
      );
    });

    it('applies the correct accessibility role', () => {
      findButtons(wrapper).forEach(button => {
        expect(button).toHaveProp('role', 'button');
      });
    });

    it('applies the correct accessibility tabIndex', () => {
      findButtons(wrapper).forEach(button => {
        expect(button).toHaveProp('tabIndex', -1);
      });
    });

    it('moves focus to the ButtonGroupView if a button receives focus', () => {
      const focusMock = jest.fn();

      findButtons(wrapper)
        .at(0)
        .simulate('focus', { target: { parentNode: { focus: focusMock } } });

      expect(focusMock).toHaveBeenCalled();
    });
  });
});
