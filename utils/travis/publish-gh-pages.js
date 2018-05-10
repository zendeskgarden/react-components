#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const ghPages = require('gh-pages');

ghPages.publish('demo', {
  repo: `https://${process.env.GITHUB_TOKEN}@github.com/zendeskgarden/react-components.git`,
  silent: true,
  add: true
});
