/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withContexts } from '@storybook/addon-contexts/react';
import { zdFontFamilySystem, zdFontFamilyMonospace } from '@zendeskgarden/css-variables';
import { contexts } from './contexts';

/**
 * Global styling
 */
import './globalStyles.css';
import 'github-markdown-css';

/**
 * Global decorators
 */
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withContexts(contexts));

/**
 * Customize Storybook instance
 */
addParameters({
  options: {
    theme: create({
      brandTitle: 'Garden React Components',
      brandUrl: 'https://zendeskgarden.github.io/',
      base: 'light',
      brandImage: './zendesk.svg',
      fontBase: zdFontFamilySystem,
      fontCode: zdFontFamilyMonospace
    })
  }
});

/**
 * Loades all `index.stories.tsx` files
 */
function loadStories() {
  const req = require.context('../packages', true, /index.stories\.tsx$/u);

  req.keys().forEach(filename => req(filename));
}

import './general-stories';

configure(loadStories, module);
