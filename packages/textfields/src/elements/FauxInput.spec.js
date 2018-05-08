/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import FauxInput from './FauxInput';

describe('FauxInput', () => {
  const TEXT_FIELD_ID = 'test';
  let wrapper;

  const basicExample = () => (
    <FauxInput id={TEXT_FIELD_ID}>
      <div tabIndex={0} data-test-id="inner-content">
        focusable content
      </div>
    </FauxInput>
  );

  const findInput = enzymeWrapper =>
    enzymeWrapper
      .find(FauxInput)
      .children()
      .at(0);
  const findInnerContent = enzymeWrapper => enzymeWrapper.find('[data-test-id="inner-content"]');

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
    wrapper = mount(basicExample());
  });

  it('does not apply focused styling by default', () => {
    expect(findInput(wrapper)).toHaveProp('focused', false);
  });

  it('applies focused styling when content is focused', () => {
    findInnerContent(wrapper).simulate('focus');
    expect(findInput(wrapper)).toHaveProp('focused', true);
  });

  it('removes focused styling when content is blured', () => {
    findInnerContent(wrapper).simulate('focus');
    findInnerContent(wrapper).simulate('blur');
    expect(findInput(wrapper)).toHaveProp('focused', false);
  });
});
