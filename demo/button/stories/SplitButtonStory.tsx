/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Button, ChevronButton, IButtonProps, SplitButton } from '../../../src/index';

interface IArgs extends IButtonProps {
  isRotated?: boolean;
}

export const SplitButtonStory = ({
  children,
  'aria-label': ariaLabel,
  isRotated,
  ...args
}: IArgs) => (
  <SplitButton>
    <Button {...args}>{children}</Button>
    <ChevronButton aria-label={ariaLabel} isRotated={isRotated} {...args} />
  </SplitButton>
);
