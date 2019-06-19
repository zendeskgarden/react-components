/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Many of these Storybook addons don't have valid TS definitions.
 * Leaving this file as JS helps reduce the necessary mocking.
 */

import '@storybook/addons';
import '@storybook/addon-notes/register-panel';
import '@storybook/addon-knobs/register';
import '@storybook/addon-storysource/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-contexts/register';
