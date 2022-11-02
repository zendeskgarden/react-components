/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { Button, IButtonProps } from '@zendeskgarden/react-buttons';

import { IGlobalAlertButtonProps, Type } from '../../types';

import { colorStyles as closeColorStyles } from './StyledGlobalAlertClose';

type StyledGlobalAlertButtonProps = IGlobalAlertButtonProps &
  ThemeProps<DefaultTheme> &
  Pick<IButtonProps, 'isPrimary'> & {
    kind: Type;
  };

const COMPONENT_ID = 'notifications.global-alert.button';

function colorStyles(props: StyledGlobalAlertButtonProps) {
  if (props.isBasic) {
    return closeColorStyles(props);
  }

  const color = props.theme.palette.white;
  let backgroundColor = null;
  let hoverBackgroundColor = null;
  let activeBackgroundColor = null;
  let shadowColor = null;

  switch (props.kind) {
    case 'success':
      backgroundColor = getColor(props.theme.colors.successHue, 800, props.theme);
      hoverBackgroundColor = getColor(props.theme.colors.successHue, 900, props.theme);
      activeBackgroundColor = getColor(props.theme.colors.successHue, 1000, props.theme);
      shadowColor = getColor(props.theme.colors.successHue, 200, props.theme, 0.35);
      break;
    case 'warning':
      backgroundColor = getColor(props.theme.colors.warningHue, 800, props.theme);
      hoverBackgroundColor = getColor(props.theme.colors.warningHue, 900, props.theme);
      activeBackgroundColor = getColor(props.theme.colors.warningHue, 1000, props.theme);
      shadowColor = getColor(props.theme.colors.warningHue, 800, props.theme, 0.35);
      break;
    case 'error':
      backgroundColor = getColor(props.theme.colors.dangerHue, 800, props.theme);
      hoverBackgroundColor = getColor(props.theme.colors.dangerHue, 900, props.theme);
      activeBackgroundColor = getColor(props.theme.colors.dangerHue, 1000, props.theme);
      shadowColor = getColor(props.theme.colors.dangerHue, 200, props.theme, 0.35);
      break;
    case 'info':
      break;
  }

  return css`
    background-color: ${backgroundColor};
    color: ${color};

    &:hover {
      background-color: ${hoverBackgroundColor};
    }

    &:active {
      background-color: ${activeBackgroundColor};
    }

    &[data-garden-focus-visible],
    &:focus-visible {
      box-shadow: ${props.theme.shadows.md(shadowColor as string)};
    }
  `;
}

function sizeStyles(props: StyledGlobalAlertButtonProps) {
  return css`
    margin: ${props.theme.space.base / 2}px ${props.theme.space.base * 2}px;
  `;
}

export const StyledGlobalAlertButton = styled(Button).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  focusInset: false,
  isDanger: false,
  isLink: false,
  isNeutral: false,
  isPill: false,
  isStretched: false,
  size: 'small'
})<StyledGlobalAlertButtonProps>`
  ${colorStyles}
  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGlobalAlertButton.propTypes = {
  isBasic: PropTypes.bool
};

StyledGlobalAlertButton.defaultProps = {
  theme: DEFAULT_THEME
};
