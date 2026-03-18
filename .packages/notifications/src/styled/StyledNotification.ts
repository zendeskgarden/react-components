/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import PropTypes from 'prop-types';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

import { TYPE, Type } from '../types';
import { validationTypes } from '../utils/icons';
import { StyledTitle } from './content/StyledTitle';
import { IStyledBaseProps, StyledBase } from './StyledBase';

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

  ${componentStyles};
`;

StyledNotification.propTypes = {
  $type: PropTypes.oneOf(TYPE)
};
