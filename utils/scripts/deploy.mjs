#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Octokit } from '@octokit/rest';
import envalid from 'envalid';
import {
  cmdDu,
  githubRepository,
  netlifyBandwidth,
  netlifyDeploy,
  githubToken,
  githubBranch
} from '@zendeskgarden/scripts';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

envalid.cleanEnv(process.env, {
  GITHUB_TOKEN: envalid.str(),
  NETLIFY_SITE_ID: envalid.str(),
  NETLIFY_TOKEN: envalid.str(),
  COMMIT_SHA: envalid.str()
});

(async () => {
  try {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const dir = resolve(currentDir, '..', '..', 'demo');
    const bandwidth = await netlifyBandwidth();
    const usage = await cmdDu(dir);
    let url;

    if (bandwidth.available > usage) {
      const repository = await githubRepository();
      // eslint-disable-next-line no-use-before-define
      const commit = await githubCommit();

      console.log('commit:', commit);
      const message = `https://github.com/${repository.owner}/${repository.repo}/commit/${commit}`;
      const command = async () => {
        const result = await netlifyDeploy({
          dir,
          message
        });

        return result;
      };

      // eslint-disable-next-line no-use-before-define
      url = await githubDeploy({ command, ref: commit });
    } else {
      throw new Error(
        `Insufficient Netlify bandwidth: ${bandwidth.available} bytes available, ${usage} bytes required.`
      );
    }

    /* eslint-disable-next-line no-console */
    console.log(`Deployed to ${url}`);
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(error);

    process.exitCode = 1;
  }
})();

async function githubDeploy(args) {
  console.log('githubDeploy args:', args);
  let retVal;

  try {
    const auth = args.token || (await githubToken(args.spinner));
    const github = new Octokit({ auth });
    const repository = await githubRepository(args.path, args.spinner);
    // eslint-disable-next-line no-use-before-define
    const ref = args.ref || (await githubCommit({ ...args }));
    const environment = args.production ? 'production' : 'staging';

    console.log('process.env.GITHUB_SHA:', process.env.GITHUB_SHA);
    console.log('process.env.COMMIT_SHA:', process.env.COMMIT_SHA);
    console.log('ref:', ref);
    console.log('environment:', environment);
    console.log('repository:', repository);

    /* https://octokit.github.io/rest.js/v17#repos-create-deployment */
    const deployment = await github.repos.createDeployment({
      owner: repository.owner,
      repo: repository.repo,
      ref,
      environment,
      description: args.message,
      auto_merge: false,
      required_contexts: [],
      transient_environment: environment !== 'production'
    });

    console.log('deployment:', deployment);
    let result;
    let error;

    try {
      result = await args.command();
    } catch (err) {
      error = err;
    }

    /* https://octokit.github.io/rest.js/v17#repos-create-deployment-status */

    try {
      const response = await github.repos.createDeploymentStatus({
        owner: repository.owner,
        repo: repository.repo,

        deployment_id: deployment.data.id, // HACK for types broken in oktokit 17.9.1
        state: error ? 'error' : 'success',
        environment_url: typeof result === 'object' ? result.url : result,
        log_url: typeof result === 'object' ? result.logUrl : undefined,
        environment,
        description: args.message
      });

      console.log('response:', JSON.stringify(response, null, 4));

      if (error) {
        throw error;
      }

      retVal = typeof result === 'object' ? result.url : result;
    } catch (e) {
      console.error('github-deploy:', e.message || e);
      throw e;
    }
  } catch (error) {
    console.error('github-deploy:', error.message || error);
    throw error;
  }

  return retVal;
}

async function githubCommit(args = {}) {
  let retVal =
    process.env.CIRCLE_SHA1 || process.env.TRAVIS_PULL_REQUEST_SHA || process.env.TRAVIS_COMMIT;

  if (!retVal) {
    try {
      const auth = args.token || (await githubToken(args.spinner));
      const github = new Octokit({ auth });
      const repository = await githubRepository(args.path, args.spinner);
      const sha = args.branch || (await githubBranch(args.path, args.spinner));

      /* https://octokit.github.io/rest.js/v17#repos-list-commits */
      const commits = await github.repos.listCommits({
        owner: repository.owner,
        repo: repository.repo,
        sha
      });

      if (commits && commits.data) {
        retVal = commits.data[0].sha || undefined;
      }
    } catch (error) {
      if (error.status !== 404) {
        console.error('github-commit:', error.message || error);

        throw error;
      }
    }
  }

  console.log('githubCommit:', retVal);
  return retVal;
}
