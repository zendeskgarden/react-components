/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { LG, MD, SM, XL, XXL, XXXL } from '@zendeskgarden/react-typography';
import { FC, PropsWithChildren } from 'react';

import { ISkeletonProps, Skeleton } from '../../../src/index';
import PALETTE from '../../../src/theming/elements/palette';
import DEFAULT_THEME from '../../../src/theming/elements/theme';
import { TYPE_SCALE } from './types';

interface IArgs extends ISkeletonProps {
  backgroundColor?: string;
  count?: number;
  typescale?: TYPE_SCALE;
}

export const SkeletonStory = ({ backgroundColor, count = 1, typescale, ...args }: IArgs) => {
  let Typescale: FC<PropsWithChildren> | undefined;

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
        backgroundColor: backgroundColor || (args.isLight ? PALETTE.kale[800] : undefined),
        padding: DEFAULT_THEME.space.md
      }}
    >
      {[...Array(count)].map((_, index) =>
        Typescale ? (
          <Typescale key={index + Math.random()}>
            <Skeleton {...args} />
          </Typescale>
        ) : (
          <Skeleton key={index + Math.random()} {...args} />
        )
      )}
    </div>
  );
};
