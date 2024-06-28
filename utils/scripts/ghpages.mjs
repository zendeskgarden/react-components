/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { clean, publish } from 'gh-pages';
import { githubRepository, githubToken } from '@zendeskgarden/scripts';

/**
 * Execute the `github-pages` command.
 *
 * @param {string} args.dir Folder to publish.
 * @param {boolean} [args.disableJekyll] Disable Jekyll.
 * @param {string} [args.path] Path to a git directory.
 * @param {string} [args.message] Commit message.
 * @param {string} [args.token] GitHub personal access token.
 * @param {Ora} [args.spinner] Terminal spinner.
 *
 * @returns {Promise<string>} The GitHub pages URL.
 */
export const githubPages = async args => {
  let retVal;

  try {
    const token = args.token || (await githubToken(args.spinner));
    const repository = await githubRepository(args.path || args.dir, args.spinner);
    const message = args.message || 'Updates [skip ci]';

    if (token && repository) {
      const { owner, repo } = repository;
      // let name;
      // let email;

      // try {
      //   name = (await execa('git', ['config', 'user.name'])).stdout.toString();
      //   email = (await execa('git', ['config', 'user.email'])).stdout.toString();
      // } catch {
      //   name = 'Zendesk Garden';
      //   email = 'garden@zendesk.com';
      // }

      clean();
      await publish(
        args.dir,
        {
          repo: `https://${token}@github.com/${owner}/${repo}.git`,
          user: {
            name: 'Zendesk Garden',
            email: 'garden@zendesk.com'
          },
          message,
          nojekyll: args.disableJekyll
        },
        error => {
          if (error) {
            // eslint-disable-next-line no-console
            console.error(error);
          } else {
            retVal = `https://${owner}.github.io/${repo}/`;
          }
        }
      );
    } else {
      throw new Error('Invalid git repository');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    throw error;
  }

  return retVal;
};
