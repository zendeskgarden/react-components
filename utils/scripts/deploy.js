#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const envalid = require('envalid');
const garden = require('@zendeskgarden/scripts');
const path = require('path');

envalid.cleanEnv(process.env, {
  GITHUB_TOKEN: envalid.str(),
  NETLIFY_SITE_ID: envalid.str(),
  NETLIFY_TOKEN: envalid.str()
});

(async () => {
  try {
    const branch = await garden.githubBranch();
    const dir = path.resolve(__dirname, '..', '..', 'demo');
    let url;

    if (branch === 'main') {
      url = await garden.githubPages({ dir });
    } else {
      const bandwidth = await garden.netlifyBandwidth();
      const usage = await garden.cmdDu(dir);

      if (bandwidth.available > usage) {
        const repository = await garden.githubRepository();
        const commit = await garden.githubCommit();
        const message = `https://github.com/${repository.owner}/${repository.repo}/commit/${commit}`;
        const command = async () => {
          const result = await garden.netlifyDeploy({
            dir,
            message
          });

          return result;
        };

        url = await garden.githubDeploy({ command });
      } else {
        throw new Error(
          `Insufficient Netlify bandwidth: ${bandwidth.available} bytes available, ${usage} bytes required.`
        );
      }
    }

    /* eslint-disable-next-line no-console */
    console.log(`Deployed to ${url}`);
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(error);
    process.exitCode = 1;
  }
})();
