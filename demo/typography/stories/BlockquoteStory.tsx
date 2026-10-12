/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Blockquote, IBlockquoteProps } from '../../../src/index';
import { TypescaleStory } from './TypescaleStory';

interface IArgs extends IBlockquoteProps {
  children: string[];
}

export const BlockquoteStory = ({ children, ...args }: IArgs) => (
  <>
    {children.map((child, index) => (
      <Blockquote key={index} {...args}>
        <TypescaleStory size={args.size} hasDisplayName tag="span">
          {child}
        </TypescaleStory>
      </Blockquote>
    ))}
  </>
);
