/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import AvatarStyles from '@zendeskgarden/css-avatars';

const AVATARS_COMPONENT_ID = 'avatars.avatar';

const SIZE = {
  EXTRASMALL: 'extrasmall',
  SMALL: 'small',
  LARGE: 'large'
};

const STATUS = {
  AVAILABLE: 'available',
  ACTIVE: 'active',
  AWAY: 'away'
};

/**
 * Accepts all `<figure>` props
 */
export const StyledAvatar = styled.figure.attrs(props => ({
  'data-garden-id': AVATARS_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(AvatarStyles['c-avatar'], {
    // Types
    [AvatarStyles['c-avatar--system']]: props.isSystem,

    // Sizes
    [AvatarStyles['c-avatar--xs']]: props.size === SIZE.EXTRASMALL,
    [AvatarStyles['c-avatar--sm']]: props.size === SIZE.SMALL,
    [AvatarStyles['c-avatar--lg']]: props.size === SIZE.LARGE,

    // Status
    [AvatarStyles['is-available']]: props.status === STATUS.AVAILABLE,
    [AvatarStyles['is-active']]: props.status === STATUS.ACTIVE,
    [AvatarStyles['is-away']]: props.status === STATUS.AWAY,

    [AvatarStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme(AVATARS_COMPONENT_ID, props)};
`;

StyledAvatar.propTypes = {
  /** Applies system styling */
  isSystem: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.EXTRASMALL, SIZE.SMALL, SIZE.LARGE]),
  status: PropTypes.oneOf([STATUS.AVAILABLE, STATUS.ACTIVE, STATUS.AWAY])
};

const BADGE_COMPONENT_ID = 'avatars.badge';

/**
 * Accepts all `<figcaption>` attributes
 */
export const StyledBadge = styled.figcaption.attrs({
  'data-garden-id': BADGE_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: AvatarStyles['c-avatar__badge']
})`
  ${props => retrieveTheme(BADGE_COMPONENT_ID, props)};
`;

const TEXT_COMPONENT_ID = 'avatars.text';

/**
 * Accepts all `<span>` attributes
 */
export const StyledText = styled.span.attrs({
  'data-garden-id': TEXT_COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: AvatarStyles['c-avatar__txt']
})`
  ${props => retrieveTheme(TEXT_COMPONENT_ID, props)};
`;
