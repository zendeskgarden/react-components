/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallowWithTheme } from 'utils';
import withTheme from './withTheme';

describe('withTheme', () => {
  it('should apply theme prop to component', () => {
    const Example = props => <div {...props} />;
    const ThemedExample = withTheme(Example);
    const wrapper = shallowWithTheme(<ThemedExample />, {
      rtl: true,
      theme: { 'custom-id': 'color: red;' }
    });

    const theme = wrapper.prop('theme');

    expect(theme.rtl).toBe(true);
    expect(theme.styles['custom-id']).toBe('color: red;');
  });
});
