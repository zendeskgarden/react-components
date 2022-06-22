/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useContext, useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import { useModal } from '@zendeskgarden/container-modal';
import mergeRefs from 'react-merge-refs';
import { getRtlPopperPlacement, getPopperPlacement } from '../../utils/gardenPlacements';
import { TooltipModalContext } from '../../utils/useTooltipModalContext';
import { StyledTooltipWrapper, StyledTooltipModal, StyledTooltipModalBackdrop } from '../../styled';
import { ITooltipModalProps } from '../../types';
import { Title } from './Title';
import { Body } from './Body';
import { Close } from './Close';
import { Footer } from './Footer';
import { FooterItem } from './FooterItem';

const TooltipModalComponent = React.forwardRef<HTMLDivElement, ITooltipModalProps>(
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
        nodeRef={transitionRef}
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
);

TooltipModalComponent.displayName = 'TooltipModal';

TooltipModalComponent.defaultProps = {
  placement: 'auto',
  isAnimated: true,
  hasArrow: true,
  focusOnMount: true,
  restoreFocus: true
};

TooltipModalComponent.propTypes = {
  referenceElement: PropTypes.any,
  popperModifiers: PropTypes.any,
  placement: PropTypes.any,
  isAnimated: PropTypes.bool,
  hasArrow: PropTypes.bool,
  zIndex: PropTypes.number,
  onClose: PropTypes.func,
  backdropProps: PropTypes.any,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const TooltipModal = TooltipModalComponent as typeof TooltipModalComponent & {
  Body: typeof Body;
  Close: typeof Close;
  Footer: typeof Footer;
  FooterItem: typeof FooterItem;
  Title: typeof Title;
};

TooltipModal.Body = Body;
TooltipModal.Close = Close;
TooltipModal.Footer = Footer;
TooltipModal.FooterItem = FooterItem;
TooltipModal.Title = Title;
