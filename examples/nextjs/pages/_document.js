/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { IdManager } from '@zendeskgarden/react-selection';

import BedrockStyles from '@zendeskgarden/css-bedrock/dist/index.css';
import ChromeStyles from '@zendeskgarden/react-chrome/dist/styles.css';
import ButtonStyles from '@zendeskgarden/react-buttons/dist/styles.css';
import MenuStyles from '@zendeskgarden/react-menus/dist/styles.css';

export default class GardenDocument extends Document {
  static getInitialProps({ renderPage }) {
    /** For server rendered environments only */
    IdManager.setIdCounter(0);

    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>My page</title>
          {this.props.styleTags}
          <style>{BedrockStyles}</style>
          <style>{ChromeStyles}</style>
          <style>{ButtonStyles}</style>
          <style>{MenuStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
