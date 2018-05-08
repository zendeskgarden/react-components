/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import AvatarStyles from '@zendeskgarden/css-avatars';

import { version } from '../package.json';
const COMPONENT_ID = 'avatars.avatar';
const SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Accepts all `<figure>` props
 */
const Avatar = styled.figure.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(AvatarStyles['c-avatar'], {
      // Types
      [AvatarStyles['c-avatar--system']]: props.system,

      // Sizes
      [AvatarStyles['c-avatar--small']]: props.size === SIZE.SMALL,
      [AvatarStyles['c-avatar--large']]: props.size === SIZE.LARGE,

      // State
      [AvatarStyles['is-active']]: props.isActive,
      [AvatarStyles['is-in']]: props.isIn,
      [AvatarStyles['is-out']]: props.isOut,
      [AvatarStyles['c-avatar--borderless']]: props.isBorderless
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Avatar.propTypes = {
  /** Applies system styling */
  system: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.LARGE]),
  isActive: PropTypes.bool,
  isIn: PropTypes.bool,
  isOut: PropTypes.bool,
  /** Removes border for improved display on a dark background */
  isBorderless: PropTypes.bool
};

/** @component */
export default Avatar;
