#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import envalid from 'envalid';
import {
  cmdDu,
  githubBranch,
  githubCommit,
  githubDeploy,
  githubPages,
  githubRepository,
  netlifyBandwidth,
  netlifyDeploy
} from '@zendeskgarden/scripts';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

envalid.cleanEnv(process.env, {
  GITHUB_TOKEN: envalid.str(),
  NETLIFY_SITE_ID: envalid.str(),
  NETLIFY_TOKEN: envalid.str()
});

(async () => {
  try {
    let branch;
    try {
      branch = await githubBranch();
      console.log(branch);
    } catch (error) {
      throw new Error(error);
    }

    if (!branch) throw new Error('no branch');

    const currentDir = dirname(fileURLToPath(import.meta.url));
    const dir = resolve(currentDir, '..', '..', 'demo');
    let url;

    // eslint-disable-next-line no-negated-condition
    if (branch !== 'main') {
      url = await githubPages({ dir, disableJekyll: true });
    } else {
      const bandwidth = await netlifyBandwidth();
      const usage = await cmdDu(dir);

      if (bandwidth.available > usage) {
        const repository = await githubRepository();
        const commit = await githubCommit();
        const message = `https://github.com/${repository.owner}/${repository.repo}/commit/${commit}`;
        const command = async () => {
          const result = await netlifyDeploy({
            dir,
            message
          });

          return result;
        };

        url = await githubDeploy({ command });
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
