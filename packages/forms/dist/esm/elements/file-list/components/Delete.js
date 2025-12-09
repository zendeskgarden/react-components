/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import SvgTrashStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/12/trash-stroke.svg.js';
import SvgTrashStroke$1 from '../../../node_modules/@zendeskgarden/svg-icons/src/16/trash-stroke.svg.js';
import useFileContext from '../../../utils/useFileContext.js';
import '../../../styled/common/StyledField.js';
import '../../../styled/common/StyledFieldset.js';
import '../../../styled/common/StyledLegend.js';
import '../../../styled/common/StyledHint.js';
import '../../../styled/common/StyledLabel.js';
import '../../../styled/common/StyledMessage.js';
import '../../../styled/common/StyledMessageIcon.js';
import '../../../styled/text/StyledTextInput.js';
import '../../../styled/text/StyledTextarea.js';
import '../../../styled/text/StyledTextFauxInput.js';
import '../../../styled/text/StyledTextMediaInput.js';
import '../../../styled/text/StyledTextMediaFigure.js';
import '../../../styled/input-group/StyledInputGroup.js';
import '../../../styled/checkbox/StyledCheckLabel.js';
import '../../../styled/checkbox/StyledCheckHint.js';
import '../../../styled/checkbox/StyledCheckInput.js';
import '../../../styled/checkbox/StyledCheckMessage.js';
import '../../../styled/checkbox/StyledCheckSvg.js';
import '../../../styled/checkbox/StyledDashSvg.js';
import '../../../styled/file-upload/StyledFileUpload.js';
import '../../../styled/file-list/StyledFile.js';
import '../../../styled/file-list/StyledFileClose.js';
import { StyledFileDelete } from '../../../styled/file-list/StyledFileDelete.js';
import '../../../styled/file-list/StyledFileIcon.js';
import '../../../styled/file-list/StyledFileList.js';
import '../../../styled/file-list/StyledFileListItem.js';
import '../../../styled/radio/StyledRadioLabel.js';
import '../../../styled/radio/StyledRadioHint.js';
import '../../../styled/radio/StyledRadioInput.js';
import '../../../styled/radio/StyledRadioMessage.js';
import '../../../styled/radio/StyledRadioSvg.js';
import '../../../styled/toggle/StyledToggleLabel.js';
import '../../../styled/toggle/StyledToggleHint.js';
import '../../../styled/toggle/StyledToggleInput.js';
import '../../../styled/toggle/StyledToggleMessage.js';
import '../../../styled/toggle/StyledToggleSvg.js';
import '../../../styled/select/StyledSelect.js';
import '../../../styled/select/StyledSelectWrapper.js';
import '../../../styled/range/StyledRangeInput.js';
import '../../../styled/tiles/StyledTile.js';
import '../../../styled/tiles/StyledTileDescription.js';
import '../../../styled/tiles/StyledTileIcon.js';
import '../../../styled/tiles/StyledTileInput.js';
import '../../../styled/tiles/StyledTileLabel.js';
import { useText } from '@zendeskgarden/react-theming';

const DeleteComponent = React__default.forwardRef((props, ref) => {
  const fileContext = useFileContext();
  const onMouseDown = composeEventHandlers(props.onMouseDown, event => event.preventDefault()
  );
  const ariaLabel = useText(DeleteComponent, props, 'aria-label', 'Delete');
  return React__default.createElement(StyledFileDelete, Object.assign({
    ref: ref,
    "aria-label": ariaLabel
  }, props, {
    type: "button",
    tabIndex: -1,
    onMouseDown: onMouseDown
  }), fileContext && fileContext.isCompact ? React__default.createElement(SvgTrashStroke, null) : React__default.createElement(SvgTrashStroke$1, null));
});
DeleteComponent.displayName = 'File.Delete';
const Delete = DeleteComponent;

export { Delete };
