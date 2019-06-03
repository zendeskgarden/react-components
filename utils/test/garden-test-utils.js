/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { render, configure } from '@testing-library/react';
import { ThemeProvider } from '../../packages/theming/src';

configure({ testIdAttribute: 'data-test-id' });

const LtrProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

LtrProvider.propTypes = {
  children: PropTypes.node
};

const RtlProvider = ({ children }) => {
  return <ThemeProvider rtl>{children}</ThemeProvider>;
};

RtlProvider.propTypes = {
  children: PropTypes.node
};

const customLtrRender = (ui, options) => render(ui, { wrapper: LtrProvider, ...options });
const customRtlRender = (ui, options) => render(ui, { wrapper: RtlProvider, ...options });

// eslint-disable-next-line no-duplicate-imports
export * from '@testing-library/react';
export { customLtrRender as render };
export { customRtlRender as renderRtl };
export { default as getExports } from './getExports';
