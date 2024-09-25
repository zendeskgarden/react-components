/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import commonConfig from '../../utils/build/rollup.config.js';

export default {
  ...commonConfig[0],
  output: [
    commonConfig[0].output[0],
    {
      ...commonConfig[0].output[1],
      entryFileNames: '[name].mjs'
    }
  ]
};
