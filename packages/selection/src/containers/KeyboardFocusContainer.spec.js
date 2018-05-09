/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import KeyboardFocusContainer from './KeyboardFocusContainer';

jest.useFakeTimers();

describe('KeyboardFocusContainer', () => {
  const basicExample = (
    <KeyboardFocusContainer>
      {({ getFocusProps, keyboardFocused }) => (
        <div {...getFocusProps({ 'data-test-id': 'trigger', 'data-focused': keyboardFocused })}>
          trigger
        </div>
      )}
    </KeyboardFocusContainer>
  );

  const findTrigger = wrapper => wrapper.find('[data-test-id="trigger"]');

  describe('getFocusProps', () => {
    describe('onFocus', () => {
      it('should not apply focused prop if focused by mouse', () => {
        const wrapper = mount(basicExample);

        findTrigger(wrapper).simulate('mousedown');
        jest.runOnlyPendingTimers();
        wrapper.update();
        expect(findTrigger(wrapper)).toHaveProp('data-focused', false);
      });

      it('should apply focused prop if focused by keyboard', () => {
        const wrapper = mount(basicExample);

        findTrigger(wrapper).simulate('focus');
        expect(findTrigger(wrapper)).toHaveProp('data-focused', true);
      });
    });

    describe('onMouseDown', () => {
      it('should not apply focused prop if mouseddown', () => {
        const wrapper = mount(basicExample);

        findTrigger(wrapper).simulate('mousedown');
        jest.runOnlyPendingTimers();
        wrapper.update();
        expect(findTrigger(wrapper)).toHaveProp('data-focused', false);
      });
    });

    describe('onBlur', () => {
      it('should remove focused prop if blurred', () => {
        const wrapper = mount(basicExample);

        findTrigger(wrapper).simulate('focus');
        expect(findTrigger(wrapper)).toHaveProp('data-focused', true);
        findTrigger(wrapper).simulate('blur');
        expect(findTrigger(wrapper)).toHaveProp('data-focused', false);
      });
    });
  });
});
