/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = api => {
  const nodeEnv = process.env.NODE_ENV;
  const isStyleguidist = api.caller(caller => caller.name === 'babel-loader');

  api.cache.using(() => nodeEnv + isStyleguidist);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: '> 0.5%, last 2 versions, Firefox ESR, not dead'
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-transform-object-assign',
      '@babel/plugin-proposal-class-properties',
      !isStyleguidist && [
        'babel-plugin-styled-components',
        {
          pure: true
        }
      ]
    ].filter(Boolean)
  };
};
