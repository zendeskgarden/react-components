/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  ChangeEventHandler,
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  useContext,
  useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { useGrid } from '@zendeskgarden/container-grid';
import { composeEventHandlers, useId } from '@zendeskgarden/container-utilities';
import { useDocument } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import {
  StyledCell,
  StyledColorSwatch,
  StyledColorSwatchInput,
  StyledColorSwatchLabel,
  StyledIcon
} from '../../styled';
import { IColorSwatchProps, ILabeledColor } from '../../types';

/**
 * @extends HTMLAttributes<HTMLTableElement>
 */
export const ColorSwatch = forwardRef<HTMLTableElement, IColorSwatchProps>(
  (
    {
      name,
      colors,
      isCheckboxGroup,
      defaultSelectedColIndex,
      defaultSelectedRowIndex,
      selectedColIndex,
      selectedRowIndex,
      onSelect,
      ...props
    },
    ref
  ) => {
    const theme = useContext(ThemeContext);
    const environment = useDocument(theme);
    const gridRef = useRef<HTMLTableElement>();
    const [rowIndex, setRowIndex] = useState(
      selectedRowIndex === null ? undefined : selectedRowIndex
    );
    const [colIndex, setColIndex] = useState(
      selectedColIndex === null ? undefined : selectedColIndex
    );
    const isControlled = selectedColIndex !== undefined && selectedRowIndex !== undefined;
    const { getGridCellProps } = useGrid({
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

    return (
      <StyledColorSwatch role="grid" ref={mergeRefs([gridRef, ref])} {...props}>
        <tbody>
          {colors.map((row: ILabeledColor[], rowIdx: number) => (
            <tr key={row[0].value}>
              {row.map((color: ILabeledColor, colIdx: number) => {
                const { label, value } = color;
                const { role, onFocus, ...gridCellProps } = getGridCellProps({
                  colIdx,
                  rowIdx
                });
                const checked = isControlled
                  ? selectedRowIndex === rowIdx && selectedColIndex === colIdx
                  : undefined;
                const defaultChecked = isControlled
                  ? undefined
                  : defaultSelectedRowIndex === rowIdx && defaultSelectedColIndex === colIdx;

                const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
                  if (onSelect) {
                    if (event.target.checked) {
                      onSelect(rowIdx, colIdx);
                    } else {
                      onSelect(null, null);
                    }
                  }

                  if (isCheckboxGroup && event.target.checked) {
                    const inputs = gridRef.current?.querySelectorAll<HTMLInputElement>('input');

                    inputs?.forEach(input => {
                      if (input !== event.target) {
                        input.checked = false;
                      }
                    });
                  }
                };

                const handleBlur: FocusEventHandler<HTMLInputElement> = event => {
                  event.target.parentElement?.removeAttribute('data-garden-focus-visible');

                  if (!(isCheckboxGroup || gridRef.current?.contains(event.relatedTarget))) {
                    /*
                     * When the ColorSwatch loses focus, reset the roving tab
                     * index to the selected color. Otherwise, keyboard access
                     * to the native radio group is lost.
                     */
                    const selectedInput = gridRef.current?.querySelector(
                      `input[name='${event.target.name}']:checked`
                    );

                    if (selectedInput !== null) {
                      const inputs = gridRef.current?.querySelectorAll<HTMLInputElement>('input');

                      inputs?.forEach(input =>
                        input.setAttribute('tabIndex', input.checked ? '0' : '-1')
                      );
                    }
                  }
                };

                const handleFocus = composeEventHandlers(onFocus, (event: FocusEvent) =>
                  event.target.parentElement?.setAttribute('data-garden-focus-visible', 'true')
                );

                return (
                  <StyledCell key={value} role={role}>
                    <StyledColorSwatchLabel backgroundColor={value}>
                      <Tooltip content={label}>
                        <StyledColorSwatchInput
                          aria-label={label}
                          name={name}
                          type={isCheckboxGroup ? 'checkbox' : 'radio'}
                          value={value}
                          defaultChecked={defaultChecked}
                          checked={checked}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          {...gridCellProps}
                        />
                      </Tooltip>
                      <StyledIcon />
                    </StyledColorSwatchLabel>
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
  name: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.any).isRequired,
  isCheckboxGroup: PropTypes.bool,
  selectedRowIndex: PropTypes.number,
  selectedColIndex: PropTypes.number,
  defaultSelectedRowIndex: PropTypes.number,
  defaultSelectedColIndex: PropTypes.number,
  onSelect: PropTypes.func
};
