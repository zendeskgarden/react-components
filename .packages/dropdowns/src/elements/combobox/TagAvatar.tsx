/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Tag } from '@zendeskgarden/react-tags';

const TagAvatarComponent = Tag.Avatar;

TagAvatarComponent.displayName = 'Tag.Avatar';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const TagAvatar = TagAvatarComponent;
