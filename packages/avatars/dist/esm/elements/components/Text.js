/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../../styled/StyledAvatar.js';
import '../../styled/StyledStandaloneStatus.js';
import '../../styled/StyledStandaloneStatusCaption.js';
import '../../styled/StyledStandaloneStatusIndicator.js';
import '../../styled/StyledStatusIndicator.js';
import { StyledText } from '../../styled/StyledText.js';

const TextComponent = forwardRef((props, ref) => React__default.createElement(StyledText, Object.assign({
  ref: ref
}, props)));
TextComponent.displayName = 'Avatar.Text';
const Text = TextComponent;

export { Text };
