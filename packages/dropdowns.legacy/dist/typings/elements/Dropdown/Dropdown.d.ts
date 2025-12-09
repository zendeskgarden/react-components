/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { IDropdownProps } from '../../types';
export declare const REMOVE_ITEM_STATE_TYPE = "REMOVE_ITEM";
/**
 * @deprecated use `@zendeskgarden/react-dropdowns` instead
 */
export declare const Dropdown: {
    (props: PropsWithChildren<IDropdownProps>): React.JSX.Element;
    propTypes: {
        isOpen: PropTypes.Requireable<boolean>;
        selectedItem: PropTypes.Requireable<any>;
        selectedItems: PropTypes.Requireable<any[]>;
        highlightedIndex: PropTypes.Requireable<number>;
        inputValue: PropTypes.Requireable<string>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onStateChange: PropTypes.Requireable<(...args: any[]) => any>;
        downshiftProps: PropTypes.Requireable<object>;
    };
};
