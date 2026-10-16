/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Well, IWellProps } from '../../../src/index';

interface IArgs extends IWellProps {
  title?: string;
  isRegular?: boolean;
  hasParagraph: boolean;
}

export const WellStory = ({ children, title, hasParagraph, isRegular, ...args }: IArgs) => (
  <Well {...args}>
    {!!title && <Well.Title isRegular={isRegular}>{title}</Well.Title>}
    {hasParagraph ? <Well.Paragraph>{children}</Well.Paragraph> : children}
  </Well>
);
