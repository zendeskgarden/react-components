/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import Ellipsis from './Ellipsis';

const Example = props => <Ellipsis {...props}>Hello world</Ellipsis>;

const findElement = wrapper => wrapper.find('div');

describe('Ellipsis', () => {
  it('applies title by default', () => {
    const wrapper = mountWithTheme(<Example />);

    expect(findElement(wrapper)).toHaveProp('title', 'Hello world');
  });

  it('overrides title attribute if provided', () => {
    const wrapper = mountWithTheme(<Example title="Custom title" />);

    expect(findElement(wrapper)).toHaveProp('title', 'Custom title');
  });

  it('applies correct styling with RTL locale', () => {
    const wrapper = mountWithTheme(<Example />, { rtl: true });

    expect(wrapper).toHaveStyleRule('direction', 'rtl');
  });
});
