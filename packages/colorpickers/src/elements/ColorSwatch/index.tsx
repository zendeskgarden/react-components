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
import CheckIcon from '@zendeskgarden/svg-icons/src/12/check-sm-fill.svg';
import { StyledSwatchButton, StyledIcon, StyledCell, StyledColorSwatch } from '../../styled';
import { IColorSwatchProps, ILabeledColor } from '../../types';

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
      idPrefix: useId(undefined),
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
                        aria-label={label}
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
