import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Manager, Popper, Target } from 'react-popper';
import { Portal } from 'react-portal';
import {
  ControlledComponent,
  composeEventHandlers,
  IdManager
} from '@zendesk/garden-react-selection';
import { withTheme, isRtl } from '@zendesk/garden-react-theming';

const PLACEMENT = {
  AUTO: 'auto',
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end'
};

/**
 * This container must provide a wrapper for the provided tooltip
 * due to constraints in our arrow css. We must ensure that the container
 * of the tooltip can retain it's relative positioning. Without this
 * container Popper would apply absolute positioning.
 */
const TooltipWrapper = styled.div`
  &[aria-hidden='true'] {
    display: none;
  }
`;

/**
 * Due to Popper.JS needing a reference to a component we provide a simple wrapper
 * to ensure the correct reference is provided.
 */
const TriggerWrapper = styled.div`
  display: inline-block;
`;

class TooltipContainer extends ControlledComponent {
  static propTypes = {
    /** Appends the tooltip to the body element */
    appendToBody: PropTypes.bool,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getTooltipProps - Props to be spread onto the tooltip element
     * @param {Function} renderProps.isVisible - Whether the Tooltip is currently visible
     * @param {Any} renderProps.placement - The current placement of the Tooltip. Will update based on boundary conflicts.
     * @param {Any} renderProps.outOfBoundaries - Whether the current tooltip has escaped it's boundary.
     * @param {Any} renderProps.scheduleUpdate - Method to force an update within Popper.js
     */
    children: PropTypes.func,
    /** Milliseconds of delay before open/close of tooltip is initiated */
    delayMilliseconds: PropTypes.number,
    /** Whether Popper.js should update based on DOM resize events */
    eventsEnabled: PropTypes.bool,
    /** The root ID to use for descendants. A unique ID is created if none is provided.  */
    id: PropTypes.string,
    /** Controls visibility of tooltip */
    isVisible: PropTypes.bool,
    /** Returns all changed state. Used for controlling usage. */
    onStateChange: PropTypes.func,
    /** All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements) */
    placement: PropTypes.oneOf([
      PLACEMENT.AUTO,
      PLACEMENT.TOP,
      PLACEMENT.TOP_START,
      PLACEMENT.TOP_END,
      PLACEMENT.RIGHT,
      PLACEMENT.RIGHT_START,
      PLACEMENT.RIGHT_END,
      PLACEMENT.BOTTOM,
      PLACEMENT.BOTTOM_START,
      PLACEMENT.BOTTOM_END,
      PLACEMENT.LEFT,
      PLACEMENT.LEFT_START,
      PLACEMENT.LEFT_END
    ]),
    /** Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options) */
    popperModifiers: PropTypes.object,
    /** Identical to children */
    render: PropTypes.func,
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getTriggerProps - Props to be spread onto the trigger element
     * @param {Function} renderProps.isVisible - Whether the Tooltip is currently visible
     */
    trigger: PropTypes.func
  };

  static defaultProps = {
    placement: PLACEMENT.TOP,
    eventsEnabled: true,
    delayMilliseconds: 500
  };

  constructor(...args) {
    super(...args);

    this.state = {
      isVisible: false,
      id: IdManager.generateId()
    };

    this.mouseEntered = true;
  }

  componentWillUnmount() {
    clearTimeout(this.openTooltipTimeout);
    clearTimeout(this.closeTooltipTimeout);
  }

  openTooltip = (delayMilliseconds = this.props.delayMilliseconds) => {
    clearTimeout(this.closeTooltipTimeout);

    this.openTooltipTimeout = setTimeout(() => {
      this.setControlledState({ isVisible: true });
    }, delayMilliseconds);
  };

  closeTooltip = (delayMilliseconds = this.props.delayMilliseconds) => {
    clearTimeout(this.openTooltipTimeout);

    this.closeTooltipTimeout = setTimeout(() => {
      this.setControlledState({ isVisible: false });
    }, delayMilliseconds);
  };

  getTooltipId = () => `${this.getControlledState().id}--tooltip`;

  getTriggerProps = ({
    tabIndex = 0,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...other
  } = {}) => {
    return {
      tabIndex,
      'aria-describedby': this.getTooltipId(),
      onMouseEnter: composeEventHandlers(onMouseEnter, () => this.openTooltip()),
      onMouseLeave: composeEventHandlers(onMouseLeave, () => this.closeTooltip()),
      onFocus: composeEventHandlers(onFocus, () => this.openTooltip()),
      // Close menu immediately when blurred
      onBlur: composeEventHandlers(onBlur, () => this.closeTooltip(0)),
      ...other
    };
  };

  getTooltipProps = ({
    id = this.getTooltipId(),
    role = 'tooltip',
    onMouseEnter,
    onMouseLeave,
    ...other
  } = {}) => {
    return {
      id,
      role,
      onMouseEnter: composeEventHandlers(onMouseEnter, () => this.openTooltip()),
      onMouseLeave: composeEventHandlers(onMouseLeave, () => this.closeTooltip()),
      ...other
    };
  };

  retrieveRtlAwarePlacement = () => {
    if (!isRtl(this.props)) {
      return this.props.placement;
    }

    const RTL_PLACEMENT_MAPPINGS = {
      [PLACEMENT.LEFT]: PLACEMENT.RIGHT,
      [PLACEMENT.LEFT_START]: PLACEMENT.RIGHT_START,
      [PLACEMENT.LEFT_END]: PLACEMENT.RIGHT_END,
      [PLACEMENT.RIGHT]: PLACEMENT.LEFT,
      [PLACEMENT.RIGHT_START]: PLACEMENT.LEFT_START,
      [PLACEMENT.RIGHT_END]: PLACEMENT.LEFT_END,
      [PLACEMENT.TOP_START]: PLACEMENT.TOP_END,
      [PLACEMENT.TOP_END]: PLACEMENT.TOP_START,
      [PLACEMENT.BOTTOM_START]: PLACEMENT.BOTTOM_END,
      [PLACEMENT.BOTTOM_END]: PLACEMENT.BOTTOM_START
    };

    const rtlMapping = RTL_PLACEMENT_MAPPINGS[this.props.placement];

    return rtlMapping || this.props.placement;
  };

  render() {
    const {
      children,
      render = children,
      trigger,
      eventsEnabled,
      popperModifiers,
      appendToBody
    } = this.props;
    const { isVisible } = this.getControlledState();

    return (
      <Manager tag={false}>
        <Target>
          {({ targetProps }) => {
            return (
              <TriggerWrapper innerRef={targetProps.ref}>
                {trigger &&
                  trigger({
                    getTriggerProps: props => this.getTriggerProps({ ...props }),
                    isVisible
                  })}
              </TriggerWrapper>
            );
          }}
        </Target>
        <Popper
          placement={this.retrieveRtlAwarePlacement()}
          eventsEnabled={eventsEnabled}
          modifiers={popperModifiers}
        >
          {({ popperProps, scheduleUpdate }) => {
            const popperPlacement = popperProps['data-placement'];
            const outOfBoundaries = popperProps['data-x-out-of-boundaries'];

            const tooltip = (
              <TooltipWrapper
                innerRef={popperProps.ref}
                style={popperProps.style}
                aria-hidden={!isVisible}
              >
                {render({
                  getTooltipProps: props => this.getTooltipProps(props),
                  isVisible,
                  placement: popperPlacement,
                  outOfBoundaries,
                  scheduleUpdate
                })}
              </TooltipWrapper>
            );

            if (appendToBody) {
              return <Portal>{tooltip}</Portal>;
            }

            return tooltip;
          }}
        </Popper>
      </Manager>
    );
  }
}

export default withTheme(TooltipContainer);
