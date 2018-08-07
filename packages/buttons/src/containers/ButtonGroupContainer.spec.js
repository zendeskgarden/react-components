/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import closest from 'dom-helpers/query/closest';

import ButtonGroupContainer from './ButtonGroupContainer';

jest.mock('dom-helpers/query/closest');
closest.mockImplementation(() => ({ focus: jest.fn() }));

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
    wrapper = mountWithTheme(basicExample());
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
        mountWithTheme(
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
      findButtons(wrapper)
        .at(0)
        .simulate('focus');

      expect(closest).toHaveBeenCalled();
    });
  });
});
