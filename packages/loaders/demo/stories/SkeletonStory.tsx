/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { FunctionComponent } from 'react';
import { Story } from '@storybook/react';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { LG, MD, SM, XL, XXL, XXXL } from '@zendeskgarden/react-typography';
import { ISkeletonProps, Skeleton } from '@zendeskgarden/react-loaders';
import { TYPE_SCALE } from './types';

interface IArgs extends ISkeletonProps {
  typescale?: TYPE_SCALE;
}

export const SkeletonStory: Story<IArgs> = ({ typescale, ...args }) => {
  let Typescale: FunctionComponent | undefined;

  switch (typescale) {
    case 'small':
      Typescale = SM;
      break;

    case 'medium':
      Typescale = MD;
      break;

    case 'large':
      Typescale = LG;
      break;

    case 'extra-large':
      Typescale = XL;
      break;

    case '2x-large':
      Typescale = XXL;
      break;

    case '3x-large':
      Typescale = XXXL;
      break;
  }

  return (
    <div
      style={{
        backgroundColor: args.isLight ? PALETTE.kale[600] : undefined,
        padding: DEFAULT_THEME.space.md
      }}
    >
      {Typescale ? (
        <Typescale>
          <Skeleton {...args} />
        </Typescale>
      ) : (
        <Skeleton {...args} />
      )}
    </div>
  );
};
