/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import PreviousIconSvg from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const COMPONENT_ID = 'dropdowns.previous_item_icon';

interface IStyledPreviousIconProps {
  $isDisabled?: boolean;
}

const PreviousIconComponent: React.FC<HTMLAttributes<SVGSVGElement>> = ({ className }) => (
  <PreviousIconSvg
    data-garden-id={COMPONENT_ID}
    data-garden-version={PACKAGE_VERSION}
    className={className}
  />
);

export const StyledPreviousIcon = styled(PreviousIconComponent)<IStyledPreviousIconProps>`
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
  color: ${props =>
    props.$isDisabled
      ? 'inherit'
      : getColor({ theme: props.theme, variable: 'foreground.subtle' })};

  ${componentStyles};
`;
