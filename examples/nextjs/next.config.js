/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const withCSS = require('@zeit/next-css');

/* Without CSS Modules, with PostCSS */
module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/u,
      use: ['@svgr/webpack']
    });

    return config;
  }
});
