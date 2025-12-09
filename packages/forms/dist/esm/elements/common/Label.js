/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import useFieldContext from '../../utils/useFieldContext.js';
import useFieldsetContext from '../../utils/useFieldsetContext.js';
import useInputContext from '../../utils/useInputContext.js';
import '../../styled/common/StyledField.js';
import '../../styled/common/StyledFieldset.js';
import '../../styled/common/StyledLegend.js';
import '../../styled/common/StyledHint.js';
import { StyledLabel } from '../../styled/common/StyledLabel.js';
import '../../styled/common/StyledMessage.js';
import '../../styled/common/StyledMessageIcon.js';
import '../../styled/text/StyledTextInput.js';
import '../../styled/text/StyledTextarea.js';
import '../../styled/text/StyledTextFauxInput.js';
import '../../styled/text/StyledTextMediaInput.js';
import '../../styled/text/StyledTextMediaFigure.js';
import '../../styled/input-group/StyledInputGroup.js';
import { StyledCheckLabel } from '../../styled/checkbox/StyledCheckLabel.js';
import '../../styled/checkbox/StyledCheckHint.js';
import '../../styled/checkbox/StyledCheckInput.js';
import '../../styled/checkbox/StyledCheckMessage.js';
import { StyledCheckSvg } from '../../styled/checkbox/StyledCheckSvg.js';
import { StyledDashSvg } from '../../styled/checkbox/StyledDashSvg.js';
import '../../styled/file-upload/StyledFileUpload.js';
import '../../styled/file-list/StyledFile.js';
import '../../styled/file-list/StyledFileClose.js';
import '../../styled/file-list/StyledFileDelete.js';
import '../../styled/file-list/StyledFileIcon.js';
import '../../styled/file-list/StyledFileList.js';
import '../../styled/file-list/StyledFileListItem.js';
import { StyledRadioLabel } from '../../styled/radio/StyledRadioLabel.js';
import '../../styled/radio/StyledRadioHint.js';
import '../../styled/radio/StyledRadioInput.js';
import '../../styled/radio/StyledRadioMessage.js';
import { StyledRadioSvg } from '../../styled/radio/StyledRadioSvg.js';
import { StyledToggleLabel } from '../../styled/toggle/StyledToggleLabel.js';
import '../../styled/toggle/StyledToggleHint.js';
import '../../styled/toggle/StyledToggleInput.js';
import '../../styled/toggle/StyledToggleMessage.js';
import { StyledToggleSvg } from '../../styled/toggle/StyledToggleSvg.js';
import '../../styled/select/StyledSelect.js';
import '../../styled/select/StyledSelectWrapper.js';
import '../../styled/range/StyledRangeInput.js';
import '../../styled/tiles/StyledTile.js';
import '../../styled/tiles/StyledTileDescription.js';
import '../../styled/tiles/StyledTileIcon.js';
import '../../styled/tiles/StyledTileInput.js';
import '../../styled/tiles/StyledTileLabel.js';

const Label$1 = React__default.forwardRef(({
  children,
  isRegular,
  ...other
}, ref) => {
  const fieldContext = useFieldContext();
  const fieldsetContext = useFieldsetContext();
  const type = useInputContext();
  const $isRegular = fieldsetContext && isRegular === undefined ? true : isRegular;
  let combinedProps = other;
  if (fieldContext) {
    combinedProps = fieldContext.getLabelProps(combinedProps);
    if (type === undefined) {
      const {
        setIsLabelActive,
        setIsLabelHovered
      } = fieldContext;
      combinedProps.onMouseUp = composeEventHandlers(other.onMouseUp, () => {
        setIsLabelActive(false);
      });
      combinedProps.onMouseDown = composeEventHandlers(other.onMouseDown, () => {
        setIsLabelActive(true);
      });
      combinedProps.onMouseEnter = composeEventHandlers(other.onMouseEnter, () => {
        setIsLabelHovered(true);
      });
      combinedProps.onMouseLeave = composeEventHandlers(other.onMouseLeave, () => {
        setIsLabelHovered(false);
      });
    }
  }
  if (type === 'radio') {
    return React__default.createElement(StyledRadioLabel, Object.assign({
      ref: ref
    }, combinedProps, {
      $isRegular: $isRegular
    }), React__default.createElement(StyledRadioSvg, null), children);
  } else if (type === 'checkbox') {
    const onLabelSelect = e => {
      const isFirefox = navigator?.userAgent.toLowerCase().indexOf('firefox') > -1;
      if (fieldContext && isFirefox && e.target instanceof Element) {
        const inputId = e.target.getAttribute('for');
        if (!inputId) return;
        const input = document.getElementById(inputId);
        if (input && input.type === 'checkbox') {
          if (e.shiftKey) {
            input.click();
            input.checked = true;
          }
          input.focus();
        }
      }
    };
    combinedProps.onClick = composeEventHandlers(combinedProps.onClick, onLabelSelect);
    return React__default.createElement(StyledCheckLabel, Object.assign({
      ref: ref
    }, combinedProps, {
      $isRegular: $isRegular
    }), React__default.createElement(StyledCheckSvg, null), React__default.createElement(StyledDashSvg, null), children);
  } else if (type === 'toggle') {
    return React__default.createElement(StyledToggleLabel, Object.assign({
      ref: ref
    }, combinedProps, {
      $isRegular: $isRegular
    }), React__default.createElement(StyledToggleSvg, null), children);
  }
  return React__default.createElement(StyledLabel, Object.assign({
    ref: ref
  }, combinedProps, {
    $isRegular: $isRegular
  }), children);
});
Label$1.displayName = 'Field.Label';
Label$1.propTypes = {
  isRegular: PropTypes.bool
};

export { Label$1 as Label };
