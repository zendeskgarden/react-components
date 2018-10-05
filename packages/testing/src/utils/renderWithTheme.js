/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount, render } from 'enzyme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from '@zendeskgarden/react-theming';

/**
 * Render a component with provided RTL and Theme
 * @param {EnzymeWrapper} tree
 * @param {Object} ThemeProperties { rtl: boolean, theme: object, enzymeOptions: object }
 */
const renderWithTheme = (tree, { rtl, theme, enzymeOptions } = {}) => {
  const context = mount(<ThemeProvider theme={theme} rtl={rtl} />)
    .childAt(0)
    .instance()
    .getChildContext();

  return render(tree, {
    ...enzymeOptions,
    context,
    childContextTypes: StyledThemeProvider.childContextTypes
  });
};

export default renderWithTheme;
