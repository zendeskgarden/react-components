/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useContext, useRef, useState } from 'react';
import SvgCheckSmFill from '../../node_modules/@zendeskgarden/svg-icons/src/12/check-sm-fill.svg.js';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { useGrid } from '@zendeskgarden/container-grid';
import { useId } from '@zendeskgarden/container-utilities';
import { DEFAULT_THEME, useDocument } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import '../../styled/ColorPicker/StyledColorPicker.js';
import '../../styled/ColorPicker/StyledHueRange.js';
import '../../styled/ColorPicker/StyledAlphaRange.js';
import '../../styled/ColorPicker/StyledPreview.js';
import '../../styled/ColorPicker/StyledColorWell.js';
import '../../styled/ColorPicker/StyledColorWellThumb.js';
import '../../styled/ColorPicker/StyledSliderGroup.js';
import '../../styled/ColorPicker/StyledHexField.js';
import '../../styled/ColorPicker/StyledLabel.js';
import '../../styled/ColorPicker/StyledInput.js';
import '../../styled/ColorPicker/StyledInputGroup.js';
import '../../styled/ColorPicker/StyledRGBAField.js';
import '../../styled/ColorPicker/StyledSliders.js';
import '../../styled/ColorPickerDialog/StyledButton.js';
import '../../styled/ColorPickerDialog/StyledButtonPreview.js';
import '../../styled/ColorPickerDialog/StyledTooltipDialog.js';
import '../../styled/ColorPickerDialog/StyledTooltipBody.js';
import { StyledColorSwatch } from '../../styled/ColorSwatch/StyledColorSwatch.js';
import { StyledColorSwatchInput } from '../../styled/ColorSwatch/StyledColorSwatchInput.js';
import { StyledColorSwatchLabel } from '../../styled/ColorSwatch/StyledColorSwatchLabel.js';
import { StyledIcon } from '../../styled/ColorSwatch/StyledIcon.js';
import { StyledCell } from '../../styled/ColorSwatch/StyledCell.js';

const ColorSwatch = forwardRef((_ref, ref) => {
  let {
    name,
    colors,
    isCheckboxGroup,
    defaultSelectedColIndex,
    defaultSelectedRowIndex,
    selectedColIndex,
    selectedRowIndex,
    onSelect,
    ...props
  } = _ref;
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const environment = useDocument(theme);
  const gridRef = useRef();
  const [rowIndex, setRowIndex] = useState(selectedRowIndex === null ? undefined : selectedRowIndex);
  const [colIndex, setColIndex] = useState(selectedColIndex === null ? undefined : selectedColIndex);
  const isControlled = selectedColIndex !== undefined && selectedRowIndex !== undefined;
  const {
    getGridCellProps
  } = useGrid({
    environment,
    rtl: theme.rtl,
    matrix: colors,
    wrap: true,
    idPrefix: useId(undefined),
    defaultRowIndex: defaultSelectedRowIndex,
    defaultColIndex: defaultSelectedColIndex,
    rowIndex,
    colIndex,
    onChange: (row, col) => {
      setRowIndex(row);
      setColIndex(col);
    }
  });
  return React__default.createElement(StyledColorSwatch, Object.assign({
    role: "grid",
    ref: mergeRefs([gridRef, ref])
  }, props), React__default.createElement("tbody", null, colors.map((row, _rowIndex) => React__default.createElement("tr", {
    key: row[0].value
  }, row.map((color, _colIndex) => {
    const {
      label,
      value
    } = color;
    const {
      role,
      ...gridCellProps
    } = getGridCellProps({
      colIndex: _colIndex,
      rowIndex: _rowIndex
    });
    const checked = isControlled ? selectedRowIndex === _rowIndex && selectedColIndex === _colIndex : undefined;
    const defaultChecked = isControlled ? undefined : defaultSelectedRowIndex === _rowIndex && defaultSelectedColIndex === _colIndex;
    const handleChange = event => {
      if (onSelect) {
        if (event.target.checked) {
          onSelect(_rowIndex, _colIndex);
        } else {
          onSelect(null, null);
        }
      }
      if (isCheckboxGroup && event.target.checked) {
        const inputs = gridRef.current?.querySelectorAll('input');
        inputs?.forEach(input => {
          if (input !== event.target) {
            input.checked = false;
          }
        });
      }
    };
    const handleBlur = event => {
      if (!(isCheckboxGroup || gridRef.current?.contains(event.relatedTarget))) {
        const selectedInput = gridRef.current?.querySelector(`input[name='${event.target.name}']:checked`);
        if (selectedInput !== null) {
          const inputs = gridRef.current?.querySelectorAll('input');
          inputs?.forEach(input => input.setAttribute('tabIndex', input.checked ? '0' : '-1'));
        }
      }
    };
    return React__default.createElement(StyledCell, {
      key: value,
      role: role
    }, React__default.createElement(StyledColorSwatchLabel, {
      $backgroundColor: value
    }, React__default.createElement(Tooltip, {
      content: label,
      zIndex: 1
    }, React__default.createElement(StyledColorSwatchInput, Object.assign({
      "aria-label": label,
      name: name,
      type: isCheckboxGroup ? 'checkbox' : 'radio',
      value: value,
      defaultChecked: defaultChecked,
      checked: checked,
      onBlur: handleBlur,
      onChange: handleChange
    }, gridCellProps))), React__default.createElement(StyledIcon, null, React__default.createElement(SvgCheckSmFill, null))));
  })))));
});
ColorSwatch.displayName = 'ColorSwatch';
ColorSwatch.propTypes = {
  name: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.any).isRequired,
  isCheckboxGroup: PropTypes.bool,
  selectedRowIndex: PropTypes.number,
  selectedColIndex: PropTypes.number,
  defaultSelectedRowIndex: PropTypes.number,
  defaultSelectedColIndex: PropTypes.number,
  onSelect: PropTypes.func
};

export { ColorSwatch };
