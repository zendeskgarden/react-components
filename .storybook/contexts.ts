/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

// @ts-ignore
import { ThemeProvider } from '../packages/theming/src';

export const contexts = [
  {
    icon: 'globe', // a icon displayed in the Storybook toolbar to control contextual props
    title: 'Locale', // an unique name of a contextual environment
    components: [ThemeProvider],
    params: [
      { name: 'LTR locale', props: { rtl: false }, default: true },
      { name: 'RTL locale', props: { rtl: true } }
    ]
  }
];
