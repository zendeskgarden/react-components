/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useState,
  useContext,
  HTMLAttributes,
  useMemo,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { usePopper, Modifier } from 'react-popper';
import { useModal } from '@zendeskgarden/container-modal';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import {
  GARDEN_PLACEMENT,
  getRtlPopperPlacement,
  getPopperPlacement
} from '../../utils/gardenPlacements';
import { TooltipModalContext } from '../../utils/useTooltipModalContext';
import {
  StyledTooltipWrapper,
  StyledTooltipModal,
  StyledTooltipModalFooter,
  StyledTooltipModalFooterItem,
  StyledTooltipModalBackdrop
} from '../../styled';
import { Title } from './Title';
import { Body } from './Body';
import { Close } from './Close';

interface IStaticTooltipModalExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Title: typeof Title;
  Body: typeof Body;
  Close: typeof Close;
  Footer: typeof StyledTooltipModalFooter;
  FooterItem: typeof StyledTooltipModalFooterItem;
}

interface ITooltipModalProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The `HTMLElement` to position the `TooltipModal` relative to.
   */
  referenceElement: HTMLElement;
  /**
   * [Popper.js v2 modifiers](https://popper.js.org/docs/v2/modifiers/)
   * to customize positioning logic.
   */
  popperModifiers: Array<Partial<Modifier<any, any>>>;
  /**
   * These placements differ from the default naming of Popper placements to help
   * assist with RTL layouts.
   **/
  placement?: GARDEN_PLACEMENT;
  hasArrow?: boolean;
  zIndex?: number;
  /**
   * Callback when a close action has been completed.
   * Can be triggered from the backdrop and Close icon.
   * @param {Object} event - DOM event that triggered the close action
   */
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  /**
   * HTML attributes to spread onto backdrop element
   */
  backdropProps?: HTMLAttributes<HTMLDivElement>;
  /**
   * Determines whether to apply keyboard focus on the modal on mount
   */
  focusOnMount?: boolean;
  /**
   * Determines whether to return keyboard focus to the element that triggered the modal
   */
  restoreFocus?: boolean;
  /**
   * The root ID to use for descendants. A unique ID is created if none is provided.
   **/
  id?: string;
}

export const TooltipModal = React.forwardRef<HTMLDivElement, ITooltipModalProps>(
  (
    {
      referenceElement,
      popperModifiers,
      placement,
      onClose,
      hasArrow,
      zIndex,
      style,
      backdropProps,
      focusOnMount,
      restoreFocus,
      id,
      ...props
    },
    ref
  ) => {
    const theme = useContext(ThemeContext);
    const modalRef = useCombinedRefs(ref);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
    const {
      getTitleProps,
      getCloseProps,
      getContentProps,
      getBackdropProps,
      getModalProps
    } = useModal({
      id,
      onClose,
      modalRef,
      focusOnMount,
      restoreFocus
    });

    const popperPlacement = useMemo(
      () => (theme.rtl ? getRtlPopperPlacement(placement!) : getPopperPlacement(placement!)),
      [placement, theme.rtl]
    );

    const { styles, attributes, state } = usePopper(referenceElement, popperElement, {
      placement: popperPlacement,
      modifiers: [
        { name: 'offset', options: { offset: [0, theme.space.base * 2] } }, // Default Popper offset
        ...(popperModifiers || [])
      ]
    });

    const value = {
      getTitleProps,
      getContentProps,
      getCloseProps
    };

    const modalProps = getModalProps({
      ref: modalRef,
      placement: state ? state.placement : 'top',
      hasArrow,
      style,
      ...props
    }) as any;

    return (
      <TooltipModalContext.Provider value={value}>
        {referenceElement ? (
          <StyledTooltipModalBackdrop {...(getBackdropProps(backdropProps) as any)}>
            <StyledTooltipWrapper
              ref={setPopperElement}
              style={styles.popper}
              placement={state?.placement}
              zIndex={zIndex}
              {...attributes.popper}
            >
              <StyledTooltipModal {...modalProps} />
            </StyledTooltipWrapper>
          </StyledTooltipModalBackdrop>
        ) : null}
      </TooltipModalContext.Provider>
    );
  }
) as IStaticTooltipModalExport<HTMLDivElement, ITooltipModalProps>;

TooltipModal.Title = Title;
TooltipModal.Body = Body;
TooltipModal.Close = Close;
TooltipModal.Footer = StyledTooltipModalFooter;
TooltipModal.FooterItem = StyledTooltipModalFooterItem;

TooltipModal.defaultProps = {
  placement: 'auto',
  hasArrow: true,
  focusOnMount: true,
  restoreFocus: true
};

TooltipModal.propTypes = {
  referenceElement: PropTypes.any,
  popperModifiers: PropTypes.any,
  placement: PropTypes.any,
  hasArrow: PropTypes.bool,
  zIndex: PropTypes.number,
  onClose: PropTypes.func,
  backdropProps: PropTypes.any,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  id: PropTypes.string
};
