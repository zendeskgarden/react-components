/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../../../styled/stepper/StyledStep.js';
import '../../../styled/stepper/StyledContent.js';
import '../../../styled/stepper/StyledInnerContent.js';
import '../../../styled/stepper/StyledLine.js';
import '../../../styled/stepper/StyledStepper.js';
import '../../../styled/stepper/StyledIcon.js';
import '../../../styled/stepper/StyledLabel.js';
import '../../../styled/stepper/StyledLabelText.js';
import '../../../styled/accordion/StyledAccordion.js';
import '../../../styled/accordion/StyledSection.js';
import '../../../styled/accordion/StyledHeader.js';
import '../../../styled/accordion/StyledButton.js';
import '../../../styled/accordion/StyledPanel.js';
import '../../../styled/accordion/StyledInnerPanel.js';
import '../../../styled/accordion/StyledRotateIcon.js';
import '../../../styled/timeline/StyledTimeline.js';
import '../../../styled/timeline/StyledItem.js';
import '../../../styled/timeline/StyledItemIcon.js';
import '../../../styled/timeline/StyledContent.js';
import { StyledOppositeContent } from '../../../styled/timeline/StyledOppositeContent.js';
import '../../../styled/timeline/StyledSeparator.js';

const OppositeContentComponent = forwardRef((props, ref) => React__default.createElement(StyledOppositeContent, Object.assign({
  ref: ref
}, props)));
OppositeContentComponent.displayName = 'Timeline.OppositeContent';
const OppositeContent = OppositeContentComponent;

export { OppositeContent };
