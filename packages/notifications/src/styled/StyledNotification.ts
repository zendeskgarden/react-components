/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import { TYPE, Type } from '../types';
import { StyledTitle } from './content/StyledTitle';
import { IStyledBaseProps, StyledBase } from './StyledBase';
import { validationTypes } from '../utils/icons';

const COMPONENT_ID = 'notifications.notification';

interface IStyledNotificationProps extends IStyledBaseProps {
  $type?: Type;
}

const colorStyles = (props: IStyledNotificationProps & ThemeProps<DefaultTheme>) => {
  const { $type, theme } = props;

  let variable;

  switch ($type) {
    case validationTypes.success:
      variable = 'foreground.success';
      break;
    case validationTypes.error:
      variable = 'foreground.danger';
      break;
    case validationTypes.warning:
      variable = 'foreground.warning';
      break;
    case validationTypes.info:
      variable = 'foreground.default';
      break;
  }

  const color = variable ? getColor({ variable, theme }) : 'inherit';

  return css`
    ${StyledTitle} {
      color: ${color};
    }
  `;
};

/**
 * Supports all `<div>` props
 */
export const StyledNotification = styled(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledNotificationProps>`
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNotification.propTypes = {
  $type: PropTypes.oneOf(TYPE)
};
