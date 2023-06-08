/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { render, configure } from '@testing-library/react';
import { ThemeProvider, DEFAULT_THEME } from '../../packages/theming/src';

configure({ testIdAttribute: 'data-test-id' });

const LtrProvider: React.FunctionComponent = ({ children }) => {
  const bodyRef = useRef(document.body);

  return <ThemeProvider focusVisibleRef={bodyRef}>{children}</ThemeProvider>;
};

LtrProvider.propTypes = {
  children: PropTypes.node
};

const RtlProvider: React.FunctionComponent = ({ children }) => {
  const bodyRef = useRef(document.body);

  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, rtl: true }} focusVisibleRef={bodyRef}>
      {children}
    </ThemeProvider>
  );
};

RtlProvider.propTypes = {
  children: PropTypes.node
};

const customLtrRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: LtrProvider, ...options });
const customRtlRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: RtlProvider, ...options });

export * from '@testing-library/react';
export { customLtrRender as render };
export { customRtlRender as renderRtl };
