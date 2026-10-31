/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import { NOTIFICATION_TYPE, Type } from '../../types/elements';
import type { WithTheme } from '../../types/views';
import { validationTypes } from '../../utils/notification/icons';
import { IStyledNotificationBaseProps, StyledBase } from './StyledBase';
import { StyledTitle } from './StyledTitle';

interface IStyledNotificationProps extends IStyledNotificationBaseProps {
  $type?: Type;
}

const colorStyles = (props: WithTheme<IStyledNotificationProps>) => {
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

  const offsetY = `${theme.space.base * 4}px`;
  const blurRadius = `${theme.space.base * 6}px`;
  const boxShadow = theme.shadows.lg(
    offsetY,
    blurRadius,
    getColor({ variable: 'shadow.medium', theme })
  );

  return css`
    box-shadow: ${boxShadow};

    ${StyledTitle} {
      color: ${color};
    }
  `;
};

/**
 * Supports all `<div>` props
 */
export const StyledNotification = styled(StyledBase)<WithTheme<IStyledNotificationProps>>`
  padding: ${props => props.theme.space.base * 4}px ${props => props.theme.space.base * 10}px;

  ${colorStyles}

  ${componentStyles};
`;

StyledNotification.propTypes = {
  $type: PropTypes.oneOf(NOTIFICATION_TYPE)
};
