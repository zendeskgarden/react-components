/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { Children, forwardRef, useMemo } from 'react';
import ArrowLeftIcon12 from 'svg-icons-legacy/src/12/arrow-left-sm-stroke.svg';
import ClockIcon12 from 'svg-icons-legacy/src/12/clock-stroke.svg';
import ArrowLeftIcon16 from 'svg-icons-legacy/src/16/arrow-left-sm-stroke.svg';
import ClockIcon16 from 'svg-icons-legacy/src/16/clock-stroke.svg';

import { useText } from '../../theming/utils/useText';
import { IAvatarProps, AVATAR_SIZE, STATUS } from '../../types/elements';
import { StyledAvatar } from '../../views/avatar/StyledAvatar';
import { StyledStatusIndicator } from '../../views/avatar/StyledStatusIndicator';
import { Span } from '../typography/Span';
import { COMPONENT_IDS } from '../utils';
import { Text } from './Text';

const AvatarComponent = forwardRef<HTMLElement, IAvatarProps>(
  (
    {
      'aria-hidden': ariaHidden,
      backgroundColor,
      badge,
      children,
      foregroundColor,
      isSystem,
      size = 'medium',
      status,
      statusLabel,
      surfaceColor,
      ...other
    },
    ref
  ) => {
    const computedStatus = badge === undefined ? status : 'active';

    let ClockIcon = ClockIcon12;
    let ArrowLeftIcon = ArrowLeftIcon12;

    if (['large', 'medium'].includes(size as string)) {
      ClockIcon = ClockIcon16;
      ArrowLeftIcon = ArrowLeftIcon16;
    }

    const defaultStatusLabel = useMemo(() => {
      let statusMessage = computedStatus;

      if (computedStatus === 'active') {
        const count = typeof badge === 'string' ? parseInt(badge, 10) : (badge as number);

        statusMessage = `active. ${
          count > 0 ? `${count} notification${count > 1 ? 's' : ''}` : 'no notifications'
        }`;
      }

      return ['status'].concat(statusMessage || []).join(': ');
    }, [computedStatus, badge]);

    const shouldValidate = computedStatus !== undefined && ariaHidden !== true;
    const label = useText(
      AvatarComponent,
      { statusLabel },
      'statusLabel',
      defaultStatusLabel,
      shouldValidate
    );

    return (
      <StyledAvatar
        ref={ref}
        $isSystem={isSystem}
        $size={size}
        $status={computedStatus}
        $surfaceColor={surfaceColor}
        $backgroundColor={backgroundColor}
        $foregroundColor={foregroundColor}
        aria-atomic="true"
        aria-hidden={ariaHidden}
        aria-live="polite"
        {...other}
        data-garden-id={COMPONENT_IDS['avatars.avatar']}
        data-garden-version={PACKAGE_VERSION}
      >
        {Children.only(children)}
        {!!computedStatus && (
          <StyledStatusIndicator
            $size={size}
            $type={computedStatus}
            $surfaceColor={surfaceColor}
            as="figcaption"
            data-garden-id={COMPONENT_IDS['avatars.status_indicator']}
            data-garden-version={PACKAGE_VERSION}
          >
            {ariaHidden !== true && <Span hidden>{label}</Span>}
            {computedStatus === 'active' ? (
              <span aria-hidden>{badge}</span>
            ) : (
              <>
                {computedStatus === 'away' ? <ClockIcon data-icon-status={computedStatus} /> : null}
                {computedStatus === 'transfers' ? (
                  <ArrowLeftIcon data-icon-status={computedStatus} />
                ) : null}
              </>
            )}
          </StyledStatusIndicator>
        )}
      </StyledAvatar>
    );
  }
);

AvatarComponent.displayName = 'Avatar';

AvatarComponent.propTypes = {
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  surfaceColor: PropTypes.string,
  isSystem: PropTypes.bool,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(AVATAR_SIZE),
  status: PropTypes.oneOf(STATUS),
  statusLabel: PropTypes.string
};

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Avatar = AvatarComponent as typeof AvatarComponent & {
  Text: typeof Text;
};

Avatar.Text = Text;
