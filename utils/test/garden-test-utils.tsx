/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import glob from 'glob';
import { render, configure } from '@testing-library/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { ThemeProvider, DEFAULT_THEME } from '../../packages/theming/src';

configure({ testIdAttribute: 'data-test-id' });

const LtrProvider: React.FunctionComponent = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

LtrProvider.propTypes = {
  children: PropTypes.node
};

const RtlProvider: React.FunctionComponent = ({ children }) => {
  return <ThemeProvider theme={{ ...DEFAULT_THEME, rtl: true }}>{children}</ThemeProvider>;
};

RtlProvider.propTypes = {
  children: PropTypes.node
};

const customLtrRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: LtrProvider, ...options });
const customRtlRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: RtlProvider, ...options });

// eslint-disable-next-line no-duplicate-imports
export * from '@testing-library/react';
export { customLtrRender as render };
export { customRtlRender as renderRtl };

/**
 * defaultFileMapper
 * @param {*} files
 */
function defaultFileMapper(files: string[]) {
  return files
    .map(entry =>
      entry
        .replace(/\.js$/u, '')
        .split('/')
        .pop()
    )
    .sort();
}

/**
 * getExports
 * @param {*} options
 */
export function getExports({
  globPath = '**/!(index|*.spec).js',
  cwd,
  options = {},
  fileMapper = defaultFileMapper
}: { globPath?: string; cwd?: string; options?: any; fileMapper?: any } = {}) {
  return new Promise((resolve, reject) => {
    glob(globPath, { ...options, cwd }, (error, files) => {
      if (error) {
        reject(error);
      }

      resolve(fileMapper(files));
    });
  });
}
