/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { mount, shallow } from 'enzyme';
import React from 'react';
import { ThemeProvider } from '../../packages/theming';

/**
 * Shallow render a component with provided RTL and Theme
 * @param {EnzymeWrapper} tree
 * @param {Object} ThemeProperties { rtl: boolean, theme: object }
 */
export const shallowWithTheme = (tree, { rtl, theme, enzymeOptions } = {}) => {
  const context = mount(<ThemeProvider theme={theme} rtl={rtl} />)
    .childAt(0)
    .childAt(0)
    .instance()
    .getChildContext();

  return shallow(tree, { context }, enzymeOptions);
};

/**
 * Mount render a component with provided RTL and Theme
 * @param {EnzymeWrapper} tree
 * @param {Object} ThemeProperties { rtl: boolean, theme: object }
 */
export const mountWithTheme = (tree, { rtl, theme, enzymeOptions } = {}) => {
  const context = mount(<ThemeProvider theme={theme} rtl={rtl} />)
    .childAt(0)
    .childAt(0)
    .instance()
    .getChildContext();

  return mount(tree, { context }, enzymeOptions);
};
