import React from 'react';
import { mount } from 'enzyme';

import KeyboardFocusContainer from './KeyboardFocusContainer';

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
