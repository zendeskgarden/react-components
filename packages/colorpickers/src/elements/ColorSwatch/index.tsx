/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  forwardRef,
  useContext,
  useRef,
  useState
} from 'react';
import CheckIcon from '@zendeskgarden/svg-icons/src/12/check-sm-fill.svg';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { ThemeContext } from 'styled-components';
import { useGrid } from '@zendeskgarden/container-grid';
import { useId } from '@zendeskgarden/container-utilities';
import { DEFAULT_THEME, useDocument } from '@zendeskgarden/react-theming';
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
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
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
          {colors.map((row: ILabeledColor[], _rowIndex: number) => (
            <tr key={row[0].value}>
              {row.map((color: ILabeledColor, _colIndex: number) => {
                const { label, value } = color;
                const { role, ...gridCellProps } = getGridCellProps({
                  colIndex: _colIndex,
                  rowIndex: _rowIndex
                });
                const checked = isControlled
                  ? selectedRowIndex === _rowIndex && selectedColIndex === _colIndex
                  : undefined;
                const defaultChecked = isControlled
                  ? undefined
                  : defaultSelectedRowIndex === _rowIndex && defaultSelectedColIndex === _colIndex;

                const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
                  if (onSelect) {
                    if (event.target.checked) {
                      onSelect(_rowIndex, _colIndex);
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

                return (
                  <StyledCell key={value} role={role}>
                    <StyledColorSwatchLabel $backgroundColor={value}>
                      <Tooltip content={label} zIndex={1}>
                        <StyledColorSwatchInput
                          aria-label={label}
                          name={name}
                          type={isCheckboxGroup ? 'checkbox' : 'radio'}
                          value={value}
                          defaultChecked={defaultChecked}
                          checked={checked}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          {...(gridCellProps as InputHTMLAttributes<HTMLInputElement>)}
                        />
                      </Tooltip>
                      <StyledIcon>
                        <CheckIcon />
                      </StyledIcon>
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
