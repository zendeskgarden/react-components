/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  arrowStyles,
  ArrowPosition
} from '@zendeskgarden/react-theming';
import { IStyledListboxProps, StyledListbox } from '../combobox/StyledListbox';

const COMPONENT_ID = 'dropdowns.menu';

interface IStyledMenuProps extends IStyledListboxProps {
  arrowPosition?: ArrowPosition;
}

/*
 * 1. Override arrow parent positioning to ensure arrow is visible beyond block overflow boundaries.
 */
export const StyledMenu = styled(StyledListbox).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledMenuProps>`
  /* stylelint-disable-next-line declaration-no-important */
  position: static !important; /* [1] */

  ${props =>
    props.arrowPosition &&
    arrowStyles(props.arrowPosition, {
      size: `${props.theme.space.base * 2}px`,
      inset: '2px',
      animationModifier: '[data-garden-animate-arrow="true"]'
    })};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMenu.defaultProps = {
  theme: DEFAULT_THEME
};
