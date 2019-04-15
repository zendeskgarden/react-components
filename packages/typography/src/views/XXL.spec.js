/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import XXL from './XXL';

describe('XXL', () => {
  const Example = props => <XXL {...props}>Hello world</XXL>;

  it('does not apply monospace styling if provided', () => {
    const wrapper = mount(<Example monospace />);

    expect(wrapper.childAt(0)).not.toHaveStyleRule(
      'font-family',
      expect.stringContaining('monospace')
    );
  });

  it('applies correct styling with RTL locale', () => {
    const wrapper = mountWithTheme(<Example />, { rtl: true });

    expect(wrapper.childAt(0)).toHaveStyleRule('direction', 'rtl');
  });
});
