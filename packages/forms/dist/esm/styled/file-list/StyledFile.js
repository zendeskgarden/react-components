/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor, focusStyles, getLineHeight } from '@zendeskgarden/react-theming';
import { StyledFileClose } from './StyledFileClose.js';

const COMPONENT_ID = 'forms.file';
const colorStyles = _ref => {
  let {
    theme,
    $focusInset,
    $validation
  } = _ref;
  let borderVariable;
  let focusBorderVariable;
  let foregroundVariable;
  if ($validation === 'success') {
    borderVariable = 'border.successEmphasis';
    focusBorderVariable = borderVariable;
    foregroundVariable = 'foreground.success';
  } else if ($validation === 'error') {
    borderVariable = 'border.dangerEmphasis';
    focusBorderVariable = borderVariable;
    foregroundVariable = 'foreground.danger';
  } else {
    borderVariable = 'border.default';
    focusBorderVariable = 'border.primaryEmphasis';
    foregroundVariable = 'foreground.default';
  }
  const borderColor = getColor({
    theme,
    variable: borderVariable
  });
  const focusBorderColor = getColor({
    theme,
    variable: focusBorderVariable
  });
  const foregroundColor = getColor({
    theme,
    variable: foregroundVariable
  });
  return css(["border-color:", ";color:", ";", ""], borderColor, foregroundColor, focusStyles({
    theme,
    inset: $focusInset,
    color: {
      variable: focusBorderVariable
    },
    styles: {
      borderColor: focusBorderColor
    }
  }));
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isCompact
  } = _ref2;
  const size = `${theme.space.base * ($isCompact ? 7 : 10)}px`;
  const spacing = `${theme.space.base * ($isCompact ? 2 : 3)}px`;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);
  return `
    box-sizing: border-box;
    border: ${theme.borders.sm};
    border-radius: ${theme.borderRadii.md};
    padding: 0 ${spacing};
    height: ${size};
    line-height: ${lineHeight};
    font-size: ${fontSize};

    & > span {
      width: 100%;
    }

    & > ${StyledFileClose} {
      width: ${size};
      height: ${size};
      margin-${theme.rtl ? 'left' : 'right'}: -${spacing};
    }
  `;
};
const StyledFile = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFile",
  componentId: "sc-195lzp1-0"
})(["display:flex;position:relative;flex-wrap:nowrap;align-items:center;transition:box-shadow 0.1s ease-in-out;", ";", ";& > span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}& > [role='progressbar']{position:absolute;bottom:0;left:0;transition:opacity 0.2s ease-in-out;margin:0;border-top-left-radius:0;border-top-right-radius:0;width:100%;& > div{border-top-", "-radius:0;}}& > [role='progressbar'][aria-valuenow='0'],& > [role='progressbar'][aria-valuenow='100']{opacity:0;}", ";"], sizeStyles, colorStyles, props => props.theme.rtl ? 'right' : 'left', componentStyles);

export { StyledFile };
