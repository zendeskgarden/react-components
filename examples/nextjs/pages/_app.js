/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@zendeskgarden/react-theming';

/** Import Garden styles globally with next-css */
import '@zendeskgarden/css-bedrock/dist/index.css';
import '@zendeskgarden/react-chrome/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-dropdowns/dist/styles.css';

export default class GardenApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
