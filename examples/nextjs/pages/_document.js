/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { setIdCounter } from '@zendeskgarden/container-utilities';
import { resetIdCounter } from '@zendeskgarden/react-dropdowns';

export default class GardenDocument extends Document {
  static getInitialProps({ renderPage }) {
    /** For server rendered environments only */
    setIdCounter(0);
    resetIdCounter();

    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
