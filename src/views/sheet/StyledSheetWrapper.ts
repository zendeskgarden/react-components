/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { ISheetProps } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledSheetWrapperProps {
  $isOpen?: boolean;
  $isAnimated?: boolean;
  $placement?: ISheetProps['placement'];
  $size?: string;
}

const transformStyles = ({
  theme,
  $isAnimated,
  $isOpen,
  $placement
}: IStyledSheetWrapperProps & IStyledBaseProps) => {
  const transition = $isAnimated ? 'transform 250ms ease-in-out' : undefined;
  let transform;

  if ($isOpen) {
    transform = 'translateX(0)';
  } else if ($placement === 'start') {
    transform = `translateX(${theme.rtl ? 100 : -100}%)`;
  } else {
    transform = `translateX(${theme.rtl ? -100 : 100}%)`;
  }

  return css`
    transform: ${transform};
    transition: ${transition};
  `;
};

export const StyledSheetWrapper = styled.div<IStyledSheetWrapperProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: ${props => props.$size};

  ${transformStyles};

  ${componentStyles};
`;
