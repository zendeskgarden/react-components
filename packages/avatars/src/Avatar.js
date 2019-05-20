/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import AvatarStyles from '@zendeskgarden/css-avatars';

const COMPONENT_ID = 'avatars.avatar';
const SIZE = {
  EXTRASMALL: 'extrasmall',
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Accepts all `<figure>` props
 */
const Avatar = styled.figure.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(AvatarStyles['c-avatar'], {
    // Types
    [AvatarStyles['c-avatar--system']]: props.system,

    // Sizes
    [AvatarStyles['c-avatar--xs']]: props.size === SIZE.EXTRASMALL,
    [AvatarStyles['c-avatar--sm']]: props.size === SIZE.SMALL,
    [AvatarStyles['c-avatar--lg']]: props.size === SIZE.LARGE,

    // State
    [AvatarStyles['is-disabled']]: props.disabled,
    [AvatarStyles['c-avatar--borderless']]: props.isBorderless
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Avatar.propTypes = {
  /** Applies system styling */
  system: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.EXTRASMALL, SIZE.SMALL, SIZE.LARGE]),
  disabled: PropTypes.bool,
  /** Removes border for improved display on a dark background */
  isBorderless: PropTypes.bool
};

/** @component */
export default Avatar;
