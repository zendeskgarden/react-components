/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useRef, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME, getFloatingPlacements, getMenuPosition, getArrowPosition } from '@zendeskgarden/react-theming';
import { useFloating, offset, autoPlacement, flip, size, platform, autoUpdate } from '@floating-ui/react-dom';
import { PLACEMENT } from '../../types/index.js';
import '../../views/combobox/StyledCombobox.js';
import '../../views/combobox/StyledContainer.js';
import '../../views/combobox/StyledField.js';
import '../../views/combobox/StyledFloatingListbox.js';
import '../../views/combobox/StyledHint.js';
import '../../views/combobox/StyledInput.js';
import '../../views/combobox/StyledInputGroup.js';
import '../../views/combobox/StyledInputIcon.js';
import '../../views/combobox/StyledLabel.js';
import '../../views/combobox/StyledListbox.js';
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
import { StyledMenu } from '../../views/menu/StyledMenu.js';
import { StyledFloatingMenu } from '../../views/menu/StyledFloatingMenu.js';
import '../../views/menu/StyledItem.js';
import '../../views/menu/StyledItemAnchor.js';
import '../../views/menu/StyledItemContent.js';
import '../../views/menu/StyledItemGroup.js';
import '../../views/menu/StyledItemIcon.js';
import '../../views/menu/StyledItemMeta.js';
import '../../views/menu/StyledItemTypeIcon.js';
import '../../views/menu/StyledSeparator.js';
import { createPortal } from 'react-dom';

const PLACEMENT_DEFAULT = 'bottom-start';
const MenuList = forwardRef(({
  appendToNode,
  hasArrow,
  isCompact,
  isExpanded,
  fallbackPlacements: _fallbackPlacements,
  maxHeight = '400px',
  minHeight,
  placement: _placement = PLACEMENT_DEFAULT,
  triggerRef,
  zIndex = 1000,
  children,
  ...props
}, ref) => {
  const floatingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(isExpanded);
  const [height, setHeight] = useState();
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const [floatingPlacement, fallbackPlacements] = getFloatingPlacements(theme, _placement === 'auto' ? PLACEMENT_DEFAULT : _placement, _fallbackPlacements);
  const {
    refs,
    placement,
    update,
    floatingStyles: {
      transform
    }
  } = useFloating({
    platform: {
      ...platform,
      isRTL: () => theme.rtl
    },
    elements: {
      reference: triggerRef?.current,
      floating: floatingRef?.current
    },
    placement: floatingPlacement,
    middleware: [offset(theme.space.base * (hasArrow ? 2 : 1)), _placement === 'auto' ? autoPlacement() : flip({
      fallbackPlacements
    }), size({
      apply: ({
        rects,
        availableHeight
      }) => {
        if (!(minHeight === null || minHeight === 'fit-content')) {
          if (rects.floating.height > availableHeight) {
            setHeight(availableHeight);
          }
        }
      }
    })]
  });
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
  const Node = React__default.createElement(StyledFloatingMenu, {
    "data-garden-animate": isVisible,
    $isHidden: !isExpanded || !isVisible ,
    $position: getMenuPosition(placement),
    $zIndex: zIndex,
    style: {
      transform
    },
    ref: floatingRef
  }, React__default.createElement(StyledMenu, Object.assign({
    "data-garden-animate-arrow": isVisible,
    $arrowPosition: hasArrow ? getArrowPosition(theme, placement) : undefined,
    $isCompact: isCompact,
    $minHeight: minHeight,
    $maxHeight: maxHeight,
    style: {
      height
    }
  }, props, {
    ref: ref
  }), !!isVisible && children));
  return appendToNode ? createPortal(Node, appendToNode) : Node;
});
MenuList.displayName = 'MenuList';
MenuList.propTypes = {
  appendToNode: PropTypes.any,
  hasArrow: PropTypes.bool,
  isCompact: PropTypes.bool,
  isExpanded: PropTypes.bool,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  placement: PropTypes.oneOf(PLACEMENT),
  triggerRef: PropTypes.any,
  zIndex: PropTypes.number
};

export { MenuList };
