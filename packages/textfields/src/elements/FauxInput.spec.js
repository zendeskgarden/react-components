/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';

import FauxInput from './FauxInput';

describe('FauxInput', () => {
  const TEXT_FIELD_ID = 'test';
  let wrapper;

  const basicExample = () => (
    <FauxInput id={TEXT_FIELD_ID}>
      <button tabIndex={0} data-test-id="inner-content">
        focusable content
      </button>
    </FauxInput>
  );

  const findInput = enzymeWrapper =>
    enzymeWrapper
      .find(FauxInput)
      .children()
      .at(0);
  const findInnerContent = enzymeWrapper => enzymeWrapper.find('[data-test-id="inner-content"]');

  beforeEach(() => {
    wrapper = mountWithTheme(basicExample());
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
