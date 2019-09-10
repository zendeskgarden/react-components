/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { ControlledComponent } from '@zendeskgarden/react-selection';
import { TabsContainer } from '@zendeskgarden/container-tabs';
import { isRtl, withTheme } from '@zendeskgarden/react-theming';

import TabsView from '../views/TabsView';
import TabList from '../views/TabList';
import Tab from '../views/Tab';

/**
 * High-level abstraction for basic Tabs implementations.
 */
class Tabs extends ControlledComponent {
  static propTypes = {
    children: PropTypes.any,
    /**
     * Toggles vertical selection mode of Tabs
     */
    vertical: PropTypes.bool,
    /**
     * Currently selected tab to display
     */
    selectedKey: PropTypes.any,
    /**
     * @param {Object} newState
     * @param {Any} newState.selectedKey - The newly selected key
     */
    onStateChange: PropTypes.func,
    /**
     * Callback for when a tab has been selected by keyboard or mouse
     * @param {String} selectedKey - The key of the selected tab
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    vertical: false
  };

  constructor(...args) {
    super(...args);

    this.state = {
      selectedKey: undefined
    };

    this.firstKey = undefined;
  }

  componentDidMount() {
    /**
     * In an uncontrolled state we want to always display the first tab
     */
    if (!this.isControlledProp('selectedKey') && typeof this.firstKey !== 'undefined') {
      this.setControlledState({ selectedKey: this.firstKey });
    }
  }

  render() {
    const { vertical, children, onChange, ...otherProps } = this.props;
    const { selectedKey } = this.getControlledState();

    return (
      <TabsContainer
        rtl={isRtl(otherProps)}
        vertical={vertical}
        selectedItem={selectedKey}
        onSelect={item => {
          if (onChange) {
            onChange(item);
          } else {
            this.setControlledState({ selectedKey: item });
          }
        }}
      >
        {({ getTabListProps, getTabPanelProps, getTabProps, focusedItem, selectedItem }) => (
          <TabsView vertical={vertical} {...otherProps}>
            <TabList {...getTabListProps()}>
              {Children.map(children, (child, index) => {
                if (!isValidElement(child)) {
                  return child;
                }

                const { label, disabled, tabProps } = child.props;
                const key = child.key;

                if (disabled) {
                  return <Tab disabled>{label}</Tab>;
                }

                if (typeof this.firstKey === 'undefined') {
                  this.firstKey = key;
                }

                const focusRef = React.createRef();

                return (
                  <Tab
                    {...getTabProps({
                      key,
                      index,
                      item: key,
                      focusRef,
                      ref: focusRef,
                      selected: key === selectedItem,
                      focused: key === focusedItem,
                      ...tabProps
                    })}
                  >
                    {label}
                  </Tab>
                );
              })}
            </TabList>
            {Children.map(children, (child, index) => {
              if (!isValidElement(child)) {
                return child;
              }

              if (child.props.disabled) {
                return null;
              }

              // Don't want to duplicate tabProps in the TabPanel
              const { tabProps, ...other } = child.props;

              return cloneElement(
                child,
                getTabPanelProps({
                  key: child.key,
                  index,
                  item: child.key,
                  'aria-hidden': selectedItem !== child.key,
                  ...other
                })
              );
            })}
          </TabsView>
        )}
      </TabsContainer>
    );
  }
}

export default withTheme(Tabs);
