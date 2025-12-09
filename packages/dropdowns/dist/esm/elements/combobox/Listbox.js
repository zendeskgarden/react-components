/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useRef, useState, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useFloating, offset, flip, size, autoUpdate } from '@floating-ui/react-dom';
import '../../views/combobox/StyledCombobox.js';
import '../../views/combobox/StyledContainer.js';
import '../../views/combobox/StyledField.js';
import { StyledFloatingListbox } from '../../views/combobox/StyledFloatingListbox.js';
import '../../views/combobox/StyledHint.js';
import '../../views/combobox/StyledInput.js';
import '../../views/combobox/StyledInputGroup.js';
import '../../views/combobox/StyledInputIcon.js';
import '../../views/combobox/StyledLabel.js';
import { StyledListbox } from '../../views/combobox/StyledListbox.js';
import '../../views/combobox/StyledListboxSeparator.js';
import '../../views/combobox/StyledMessage.js';
import '../../views/combobox/StyledOptGroup.js';
import '../../views/combobox/StyledOption.js';
import '../../views/combobox/StyledOptionContent.js';
import '../../views/combobox/StyledOptionIcon.js';
import '../../views/combobox/StyledOptionMeta.js';
import '../../views/combobox/StyledOptionSelectionIcon.js';
import '../../views/combobox/StyledOptionTypeIcon.js';
import '../../views/combobox/StyledTag.js';
import '../../views/combobox/StyledTagsButton.js';
import '../../views/combobox/StyledTrigger.js';
import '../../views/combobox/StyledValue.js';
import '../../views/menu/StyledMenu.js';
import '../../views/menu/StyledFloatingMenu.js';
import '../../views/menu/StyledItem.js';
import '../../views/menu/StyledItemAnchor.js';
import '../../views/menu/StyledItemContent.js';
import '../../views/menu/StyledItemGroup.js';
import '../../views/menu/StyledItemIcon.js';
import '../../views/menu/StyledItemMeta.js';
import '../../views/menu/StyledItemTypeIcon.js';
import '../../views/menu/StyledSeparator.js';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';

const Listbox = forwardRef((_ref, ref) => {
  let {
    appendToNode,
    children,
    isCompact,
    isExpanded,
    maxHeight,
    minHeight,
    onMouseDown,
    triggerRef,
    zIndex,
    ...props
  } = _ref;
  const floatingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const {
    refs,
    placement,
    update,
    floatingStyles: {
      transform
    }
  } = useFloating({
    elements: {
      reference: triggerRef?.current,
      floating: floatingRef?.current
    },
    placement: 'bottom-start',
    middleware: [offset(theme.space.base), flip(), size({
      apply: _ref2 => {
        let {
          rects,
          availableHeight
        } = _ref2;
        if (rects.reference.width > 0) {
          setWidth(rects.reference.width);
          if (!(minHeight === null || minHeight === 'fit-content') && rects.floating.height > availableHeight) {
            setHeight(availableHeight);
          }
        }
      }
    })]
  });
  const handleMouseDown = event => event.preventDefault();
  useEffect(() => {
    let cleanup;
    if (isExpanded && refs.reference.current && refs.floating.current) {
      cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [isExpanded, refs.reference, refs.floating, update]);
  useEffect(() => {
    let timeout;
    if (isExpanded) {
      setIsVisible(true);
    } else {
      timeout = setTimeout(() => {
        setIsVisible(false);
        setHeight(undefined);
      }, 200 );
    }
    return () => clearTimeout(timeout);
  }, [isExpanded]);
  useEffect(() => {
    if (height) {
      setHeight(undefined);
      update();
    }
  }, [
  children, update]);
  const Node = React__default.createElement(StyledFloatingListbox, {
    "data-garden-animate": isVisible ? 'true' : 'false',
    $isHidden: !isExpanded,
    $position: placement === 'bottom-start' ? 'bottom' : 'top',
    style: {
      transform,
      width
    },
    $zIndex: zIndex,
    ref: floatingRef
  }, React__default.createElement(StyledListbox, Object.assign({
    $isCompact: isCompact,
    $maxHeight: maxHeight,
    $minHeight: minHeight,
    "aria-hidden":
    !isExpanded,
    onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
    style: {
      height
    }
  }, props, {
    ref: ref
  }), !!isVisible && children));
  return appendToNode ? createPortal(Node, appendToNode) : Node;
});
Listbox.displayName = 'Listbox';
Listbox.propTypes = {
  appendToNode: PropTypes.any,
  isCompact: PropTypes.bool,
  isExpanded: PropTypes.bool,
  maxHeight: PropTypes.string,
  triggerRef: PropTypes.any.isRequired,
  zIndex: PropTypes.number
};

export { Listbox };
