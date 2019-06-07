/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ButtonStyles from '@zendeskgarden/css-buttons';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'buttons.icon_button';

import Button from '../Button';

const SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};

const IconButton = styled(Button).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(props.className, ButtonStyles['c-btn--icon'])
}))`
  ${props => retrieveTheme('buttons.icon_button', props)};
`;

IconButton.propTypes = {
  /** Apply danger styling */
  danger: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.LARGE]),
  /** Applies primary button styling */
  primary: PropTypes.bool,
  /** Applies basic button styling */
  basic: PropTypes.bool,
  /** Applies muted button styling */
  muted: PropTypes.bool,
  /** Applies pill styling */
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  /** Callback for reference of the native button element */
  buttonRef: PropTypes.func
};

IconButton.defaultProps = {
  pill: true,
  muted: true,
  basic: true
};

/** @component */
export default IconButton;
