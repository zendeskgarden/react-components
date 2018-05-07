#!/usr/bin/env node

/* eslint-disable no-console */

const ghPages = require('gh-pages');

/**
 * This configuration will avoid logging the Github token if there is an error.
 */
ghPages.publish(
  'demo',
  {
    repo: `https://${process.env.GITHUB_TOKEN}@github.com/zendeskgarden/react-components.git`,
    silent: true,
    add: true
  },
  error => {
    if (error) {
      console.log(error);
      throw error;
    }

    console.log('GH-Pages upload complete.');
  }
);
