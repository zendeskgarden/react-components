/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { useGrid } from '@zendeskgarden/container-grid';
import { useId } from '@zendeskgarden/container-utilities';
import { StyledSwatchButton, StyledCheckIcon, StyledCell, StyledColorSwatch } from '../../styled';

export interface ILabeledColor {
  value: string;
  label: string;
}

export interface IColorSwatchProps {
  /** Enables wrapped keyboard navigation */
  isWrapped?: boolean;
  /** Sets the two-dimension array of labeled HEX and RGB/A string colors */
  colors: ILabeledColor[][];
  /** Sets the focused row index in a controlled color swatch */
  rowIndex?: number;
  /** Sets the focused column index in a controlled color swatch */
  colIndex?: number;
  /** Sets the selected row index in a controlled color swatch */
  selectedRowIndex?: number;
  /** Sets the selected column index in a controlled color swatch */
  selectedColIndex?: number;
  /** Sets the default focused row index in a uncontrolled color swatch */
  defaultRowIndex?: number;
  /** Sets the default focused column index in a uncontrolled color swatch */
  defaultColIndex?: number;
  /** Sets the default selected row index in a uncontrolled color swatch */
  defaultSelectedRowIndex?: number;
  /** Sets the default selected column index in a uncontrolled color swatch */
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
  ({ colors, isWrapped, ...props }, ref) => {
    const { rtl } = useContext(ThemeContext);
    const { getGridCellProps } = useGrid({
      rtl,
      matrix: colors,
      selection: true,
      wrap: isWrapped,
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
                const gridCellProps = getGridCellProps({
                  colIdx,
                  rowIdx,
                  type: 'button'
                });

                return (
                  <StyledCell key={value}>
                    <Tooltip content={label}>
                      <StyledSwatchButton backgroundColor={value} {...gridCellProps}>
                        {gridCellProps['aria-selected'] ? <StyledCheckIcon color={value} /> : null}
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
  isWrapped: PropTypes.bool,
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
