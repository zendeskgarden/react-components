/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IMDProps, LG, MD, SM, XL, XXL, XXXL } from '../../../src/index';

interface IArgs extends IMDProps {
  size?: 'small' | 'medium' | 'large' | 'extra-large' | '2x-large' | '3x-large';
  hasDisplayName?: boolean;
}

export const TypescaleStory = ({ children, size, hasDisplayName, ...args }: IArgs) => {
  let Typescale;

  switch (size) {
    case 'small':
      Typescale = SM;
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

    case 'medium':
    default:
      Typescale = MD;
      break;
  }

  return (
    <Typescale {...args}>
      {!!hasDisplayName && `<${Typescale.displayName}>`}
      {children}
      {!!hasDisplayName && `</${Typescale.displayName}>`}
    </Typescale>
  );
};
