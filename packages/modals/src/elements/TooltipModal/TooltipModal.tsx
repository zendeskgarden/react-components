/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useState,
  useContext,
  useMemo,
  useEffect,
  useRef,
  HTMLAttributes,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { usePopper, Modifier } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import { useModal } from '@zendeskgarden/container-modal';
import mergeRefs from 'react-merge-refs';
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

export interface ITooltipModalProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Positions the modal relative to the provided `HTMLElement`
   */
  referenceElement?: HTMLElement | null;
  /**
   * Modifies [Popper instance](https://popper.js.org/docs/v2/modifiers/) to customize positioning logic
   */
  popperModifiers?: Partial<Modifier<any, any>>[];
  /**
   * Adjusts the placement of the tooltip
   **/
  placement?: GARDEN_PLACEMENT;
  /**
   * Adds an arrow to the tooltop
   */
  hasArrow?: boolean;
  /**
   * Animates the tooltop
   */
  isAnimated?: boolean;
  /**
   * Sets the `z-index` of the tooltip
   */
  zIndex?: number;
  /**
   * Handles close actions. Can be triggered from the backdrop and from the close icon.
   *
   * @param {Object} event The DOM event that triggered the close action
   */
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  /**
   * Passes HTML attributes to the backdrop element
   */
  backdropProps?: any;
  /**
   * Directs keyboard focus to the modal on mount
   */
  focusOnMount?: boolean;
  /**
   * Returns keyboard focus to the element that triggered the modal
   */
  restoreFocus?: boolean;
  /**
   * Sets the root ID. A unique ID is created if none is provided.
   */
  id?: string;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const TooltipModal = React.forwardRef<HTMLDivElement, ITooltipModalProps>(
  (
    {
      referenceElement,
      popperModifiers,
      placement,
      onClose,
      hasArrow,
      isAnimated,
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
    const previousReferenceElementRef = useRef<HTMLElement | null>();
    const modalRef = useRef<HTMLDivElement>(null);
    const transitionRef = useRef<HTMLDivElement>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
    const { getTitleProps, getCloseProps, getContentProps, getBackdropProps, getModalProps } =
      useModal({
        id,
        onClose,
        modalRef,
        focusOnMount,
        /** Handle `restoreFocus` locally to return focus to `referenceElement` */
        restoreFocus: false
      });

    useEffect(() => {
      if (!referenceElement && previousReferenceElementRef.current && restoreFocus) {
        previousReferenceElementRef.current.focus();
      }

      previousReferenceElementRef.current = referenceElement;
    }, [referenceElement, restoreFocus]);

    const popperPlacement = useMemo(
      () => (theme.rtl ? getRtlPopperPlacement(placement!) : getPopperPlacement(placement!)),
      [placement, theme.rtl]
    );

    const { styles, attributes, state } = usePopper(referenceElement, popperElement, {
      placement: popperPlacement,
      modifiers: [
        { name: 'offset', options: { offset: [0, theme.space.base * 3] } }, // Default Popper offset
        ...(popperModifiers || [])
      ]
    });

    const value = {
      getTitleProps,
      getContentProps,
      getCloseProps
    };

    const modalProps = getModalProps({
      ref: mergeRefs([modalRef, ref]),
      placement: state ? state.placement : 'top',
      hasArrow,
      isAnimated,
      style,
      ...props
    }) as any;

    return (
      <CSSTransition
        unmountOnExit
        timeout={isAnimated ? 200 : 0}
        in={Boolean(referenceElement)}
        classNames={isAnimated ? 'garden-tooltip-modal-transition' : ''}
        nodRef={transitionRef}
      >
        {transitionState => {
          return (
            <TooltipModalContext.Provider value={value}>
              <StyledTooltipModalBackdrop
                {...(getBackdropProps({ ref: transitionRef, ...backdropProps }) as any)}
              >
                <StyledTooltipWrapper
                  ref={setPopperElement}
                  style={styles.popper}
                  placement={state ? state.placement : undefined}
                  zIndex={zIndex}
                  isAnimated={isAnimated}
                  {...attributes.popper}
                >
                  <StyledTooltipModal transitionState={transitionState} {...modalProps} />
                </StyledTooltipWrapper>
              </StyledTooltipModalBackdrop>
            </TooltipModalContext.Provider>
          );
        }}
      </CSSTransition>
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
  isAnimated: true,
  hasArrow: true,
  focusOnMount: true,
  restoreFocus: true
};

TooltipModal.propTypes = {
  referenceElement: PropTypes.any,
  popperModifiers: PropTypes.any,
  placement: PropTypes.any,
  isAnimated: PropTypes.bool,
  hasArrow: PropTypes.bool,
  zIndex: PropTypes.number,
  onClose: PropTypes.func,
  backdropProps: PropTypes.any,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  id: PropTypes.string
};

TooltipModal.displayName = 'TooltipModal';
