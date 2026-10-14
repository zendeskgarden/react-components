/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import EndIcon from 'svg-icons-legacy/src/16/chevron-down-stroke.svg';
import StartIcon from 'svg-icons-legacy/src/16/leaf-stroke.svg';

import { Button, IButtonProps } from '../../../src/index';

interface IArgs extends IButtonProps {
  hasStartIcon: boolean;
  hasEndIcon: boolean;
  isStartIconRotated: boolean;
  isEndIconRotated: boolean;
}

export const ButtonStory = ({
  hasStartIcon,
  hasEndIcon,
  isStartIconRotated,
  isEndIconRotated,
  ...args
}: IArgs) => (
  <Button {...args}>
    {!!hasStartIcon && (
      <Button.StartIcon isRotated={isStartIconRotated}>
        <StartIcon />
      </Button.StartIcon>
    )}
    {args.children}
    {!!hasEndIcon && (
      <Button.EndIcon isRotated={isEndIconRotated}>
        <EndIcon />
      </Button.EndIcon>
    )}
  </Button>
);
