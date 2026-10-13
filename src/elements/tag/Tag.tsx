/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { ITagProps, TAG_SIZE } from '../../types/elements';
import { StyledTag } from '../../views/tag/StyledTag';
import { COMPONENT_IDS } from '../utils';
import { Avatar } from './Avatar';
import { Close } from './Close';

const TagComponent = forwardRef<HTMLDivElement, ITagProps>(
  ({ isPill, isRound, isRegular, size = 'medium', hue, ...other }, ref) => (
    <StyledTag
      $hue={hue}
      $isPill={isPill}
      $isRegular={isRegular}
      $isRound={isRound}
      $size={size}
      ref={ref}
      {...other}
      data-garden-id={COMPONENT_IDS['tags.tag_view']}
      data-garden-version={PACKAGE_VERSION}
    />
  )
);

TagComponent.displayName = 'Tag';

TagComponent.propTypes = {
  size: PropTypes.oneOf(TAG_SIZE),
  hue: PropTypes.string,
  isPill: PropTypes.bool,
  isRound: PropTypes.bool,
  isRegular: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tag = TagComponent as typeof TagComponent & {
  Avatar: typeof Avatar;
  Close: typeof Close;
};

Tag.Avatar = Avatar;
Tag.Close = Close;
