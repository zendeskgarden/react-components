/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { ControlledComponent } from '@zendeskgarden/react-selection';

import TabsContainer from '../containers/TabsContainer';
import TabsView from '../views/TabsView';
import TabList from '../views/TabList';
import Tab from '../views/Tab';

/**
 * High-level abstraction for basic Tabs implementations.
 */
export default class Tabs extends ControlledComponent {
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
      selectedKey: undefined,
      focusedKey: undefined
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
    const { vertical, children, onChange } = this.props;
    const { focusedKey, selectedKey } = this.getControlledState();

    return (
      <TabsContainer
        vertical={vertical}
        selectedKey={selectedKey}
        focusedKey={focusedKey}
        onChange={onChange}
        onStateChange={this.setControlledState}
      >
        {({ getTabListProps, getTabPanelProps, getTabProps }) => (
          <TabsView vertical={vertical}>
            <TabList {...getTabListProps()}>
              {Children.map(children, child => {
                if (!isValidElement(child)) {
                  return child;
                }

                const { label, disabled } = child.props;
                const key = child.key;

                if (disabled) {
                  return <Tab disabled>{label}</Tab>;
                }

                if (typeof this.firstKey === 'undefined') {
                  this.firstKey = key;
                }

                return (
                  <Tab
                    {...getTabProps({
                      key,
                      selected: key === selectedKey,
                      focused: key === focusedKey
                    })}
                  >
                    {label}
                  </Tab>
                );
              })}
            </TabList>
            {Children.map(children, child => {
              if (!isValidElement(child)) {
                return child;
              }

              if (child.props.disabled) {
                return null;
              }

              return cloneElement(
                child,
                getTabPanelProps({
                  key: child.key,
                  ...child.props
                })
              );
            })}
          </TabsView>
        )}
      </TabsContainer>
    );
  }
}
