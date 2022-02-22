/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { useGrid } from '@zendeskgarden/container-grid';
import { useId } from '@zendeskgarden/container-utilities';
import CheckIcon from '@zendeskgarden/svg-icons/src/12/check-sm-fill.svg';
import { StyledSwatchButton, StyledIcon, StyledCell, StyledColorSwatch } from '../../styled';

export interface ILabeledColor {
  value: string;
  label: string;
}

export interface IColorSwatchProps
  extends Omit<HTMLAttributes<HTMLTableElement>, 'onChange' | 'onSelect'> {
  /** Sets the two-dimension array of labeled HEX and RGB/A string colors */
  colors: ILabeledColor[][];
  /** Sets the focused row index in a controlled color swatch */
  rowIndex?: number;
  /** Sets the focused column index in a controlled color swatch.
   * Can be set to `-1` to clear the row focus.
   */
  colIndex?: number;
  /** Sets the selected row index in a controlled color swatch.
   * Can be set to `-1` to clear the column focus.
   */
  selectedRowIndex?: number;
  /** Sets the selected column index in a controlled color swatch.
   * Can be set to `-1` to clear the row selection.
   */
  selectedColIndex?: number;
  /** Sets the default focused row index in an uncontrolled color swatch.
   * Can be set to `-1` to clear the column selection.
   */
  defaultRowIndex?: number;
  /** Sets the default focused column index in an uncontrolled color swatch */
  defaultColIndex?: number;
  /** Sets the default selected row index in an uncontrolled color swatch */
  defaultSelectedRowIndex?: number;
  /** Sets the default selected column index in an uncontrolled color swatch */
  defaultSelectedColIndex?: number;
  /** Handles color swatch changes */
  onChange?: (rowIndex: number, colIndex: number) => void;
  /** Handles color swatch select event */
  onSelect?: (rowIndex: number, colIndex: number) => void;
}

/**
 * @extends HTMLAttributes<HTMLTableElement>
 */
export const ColorSwatch = forwardRef<HTMLTableElement, IColorSwatchProps>(
  ({ colors, ...props }, ref) => {
    const { rtl } = useContext(ThemeContext);
    const { getGridCellProps } = useGrid({
      rtl,
      matrix: colors,
      selection: true,
      wrap: true,
      idPrefix: useId(),
      ...props
    });

    return (
      <StyledColorSwatch ref={ref}>
        <tbody>
          {colors.map((row: ILabeledColor[], rowIdx: number) => (
            <tr key={row[0].value}>
              {row.map((color: ILabeledColor, colIdx: number) => {
                const { label, value } = color;
                const { 'aria-selected': ariaSelected, ...other } = getGridCellProps({
                  colIdx,
                  rowIdx,
                  type: 'button',
                  role: undefined
                });

                return (
                  <StyledCell key={value} aria-selected={ariaSelected}>
                    <Tooltip content={label}>
                      <StyledSwatchButton
                        backgroundColor={value}
                        aria-pressed={ariaSelected}
                        {...other}
                      >
                        <StyledIcon color={value} selected={ariaSelected}>
                          <CheckIcon />
                        </StyledIcon>
                      </StyledSwatchButton>
                    </Tooltip>
                  </StyledCell>
                );
              })}
            </tr>
          ))}
        </tbody>
      </StyledColorSwatch>
    );
  }
);

ColorSwatch.displayName = 'ColorSwatch';

ColorSwatch.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.any).isRequired,
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
  selectedRowIndex: PropTypes.number,
  selectedColIndex: PropTypes.number,
  defaultRowIndex: PropTypes.number,
  defaultColIndex: PropTypes.number,
  defaultSelectedRowIndex: PropTypes.number,
  defaultSelectedColIndex: PropTypes.number,
  onChange: PropTypes.func,
  onSelect: PropTypes.func
};
