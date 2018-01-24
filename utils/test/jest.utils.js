import { mount, shallow } from 'enzyme';
import React from 'react';
import { ThemeProvider } from '../../packages/theming';

export const shallowWithTheme = (tree, rtl, theme) => {
  const context = mount(<ThemeProvider theme={theme} rtl={rtl} />)
    .childAt(0)
    .instance()
    .getChildContext();

  return shallow(tree, { context });
};

export const mountWithTheme = (tree, rtl, theme) => {
  const context = mount(<ThemeProvider theme={theme} rtl={rtl} />)
    .childAt(0)
    .instance()
    .getChildContext();

  return mount(tree, { context });
};
