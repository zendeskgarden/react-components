/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { FocusEventHandler, forwardRef, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import mergeRefs from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { useGrid } from '@zendeskgarden/container-grid';
import { useId } from '@zendeskgarden/container-utilities';
import { StyledCell, StyledColorSwatch } from '../../styled';
import { IColorSwatchProps, ILabeledColor } from '../../types';

/**
 * @extends HTMLAttributes<HTMLTableElement>
 */
export const ColorSwatch = forwardRef<HTMLTableElement, IColorSwatchProps>(
  (
    {
      colors,
      defaultSelectedColIndex,
      defaultSelectedRowIndex,
      selectedColIndex,
      selectedRowIndex,
      onSelect,
      ...props
    },
    ref
  ) => {
    const { rtl } = useContext(ThemeContext);
    const gridRef = useRef<HTMLTableElement>();
    const [rowIndex, setRowIndex] = useState(selectedRowIndex);
    const [colIndex, setColIndex] = useState(selectedColIndex);
    const isControlled = selectedColIndex !== undefined && selectedRowIndex !== undefined;
    const { getGridCellProps } = useGrid({
      rtl,
      matrix: colors,
      wrap: true,
      idPrefix: useId(),
      defaultRowIndex: defaultSelectedRowIndex,
      defaultColIndex: defaultSelectedColIndex,
      rowIndex,
      colIndex,
      onChange: (row, col) => {
        setRowIndex(row);
        setColIndex(col);
      }
    });

    return (
      <StyledColorSwatch role="grid" ref={mergeRefs([gridRef, ref])} {...props}>
        <tbody>
          {colors.map((row: ILabeledColor[], rowIdx: number) => (
            <tr key={row[0].value}>
              {row.map((color: ILabeledColor, colIdx: number) => {
                const { label, value } = color;
                const { role, ...gridCellProps } = getGridCellProps({
                  colIdx,
                  rowIdx
                });
                let checked;
                let handleChange;
                let defaultChecked;

                if (isControlled) {
                  checked = selectedRowIndex === rowIdx && selectedColIndex === colIdx;
                  handleChange = () => onSelect && onSelect(rowIdx, colIdx);
                } else {
                  defaultChecked =
                    defaultSelectedRowIndex === rowIdx && defaultSelectedColIndex === colIdx;
                }

                /**
                 * When the ColorSwatch loses focus, reset the roving tab
                 * index to the selected color. Otherwise, keyboard access to
                 * the native radio group is lost.
                 */
                const handleBlur: FocusEventHandler<HTMLInputElement> = event => {
                  if (!gridRef.current?.contains(event.relatedTarget)) {
                    const selectedInput = document.querySelector(
                      `input[name='${event.target.name}']:checked`
                    );

                    if (selectedInput !== null) {
                      const inputs = document.getElementsByName(
                        event.target.name
                      ) as NodeListOf<HTMLInputElement>;

                      inputs.forEach(input =>
                        input.setAttribute('tabIndex', input.checked ? '0' : '-1')
                      );
                    }
                  }
                };

                return (
                  <StyledCell key={value} role={role}>
                    <label>
                      <Tooltip content={label}>
                        <input
                          name="name"
                          type="radio"
                          value={value}
                          defaultChecked={defaultChecked}
                          checked={checked}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          {...gridCellProps}
                        />
                      </Tooltip>
                    </label>
                    {/* <Tooltip content={label}>
                      <StyledSwatchButton backgroundColor={value} aria-label={label} {...other}>
                        <StyledIcon color={value} selected={checked || defaultChecked}>
                          <CheckIcon />
                        </StyledIcon>
                      </StyledSwatchButton>
                    </Tooltip> */}
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
  selectedRowIndex: PropTypes.number,
  selectedColIndex: PropTypes.number,
  defaultSelectedRowIndex: PropTypes.number,
  defaultSelectedColIndex: PropTypes.number,
  onSelect: PropTypes.func
};
