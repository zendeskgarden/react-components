/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ComponentProps } from 'react';
import { styled } from 'styled-components';

import { IGardenTheme } from '../../../src/index';
import { getColor } from '../../../src/theming/utils/getColor';
import { TableStory } from './TableStory';

/*
 * A scroll region that is wider than the table, on a non-default background.
 * The background-colored box shadows that a sticky head and stuck group rows
 * cast 8px past the table edges show on it.
 */
const StyledScrollRegion = styled.section<{ theme: IGardenTheme; $containerBackground: string }>`
  padding: ${p => p.theme.space.md};
  max-height: 20em;
  overflow: auto;
  background-color: ${p => getColor({ theme: p.theme, variable: p.$containerBackground })};
`;

interface IStickyStripStoryProps extends ComponentProps<typeof TableStory> {
  containerBackground: string;
}

export const StickyStripStory = ({ containerBackground, ...args }: IStickyStripStoryProps) => (
  <StyledScrollRegion
    aria-label="Growing conditions scroll area"
    tabIndex={0}
    $containerBackground={containerBackground}
  >
    <TableStory {...args} style={{ width: '75%', marginInline: 'auto' }} />
  </StyledScrollRegion>
);
