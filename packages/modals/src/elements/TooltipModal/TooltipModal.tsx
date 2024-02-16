/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useState, useContext, useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import { useModal } from '@zendeskgarden/container-modal';
import { mergeRefs } from 'react-merge-refs';
import { getRtlPopperPlacement, getPopperPlacement } from '../../utils/gardenPlacements';
import { TooltipModalContext } from '../../utils/useTooltipModalContext';
import { StyledTooltipWrapper, StyledTooltipModal, StyledTooltipModalBackdrop } from '../../styled';
import { ITooltipModalProps } from '../../types';
import { Title } from './Title';
import { Body } from './Body';
import { Close } from './Close';
import { Footer } from './Footer';
import { FooterItem } from './FooterItem';
import { useText } from '@zendeskgarden/react-theming';
import { createPortal } from 'react-dom';

const TooltipModalComponent = React.forwardRef<HTMLDivElement, ITooltipModalProps>(
  (
    {
      appendToNode,
      referenceElement,
      popperModifiers,
      placement,
      onClose,
      hasArrow,
      isAnimated,
      zIndex,
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
    const [hasTitle, setHasTitle] = useState<boolean>(false);
    const { getTitleProps, getCloseProps, getContentProps, getBackdropProps, getModalProps } =
      useModal({
        idPrefix: id,
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

    // If <TooltipModal.Title /> isn't used, remove aria-labelledby
    const modalProps = getModalProps({
      'aria-describedby': undefined,
      ...(hasTitle ? {} : { 'aria-labelledby': undefined })
    }) as HTMLAttributes<HTMLDivElement>;

    // Derive aria attributes from props
    const attribute = hasTitle ? 'aria-labelledby' : 'aria-label';
    const defaultValue = hasTitle ? modalProps['aria-labelledby'] : 'Modal dialog';
    const labelValue = hasTitle ? modalProps['aria-labelledby'] : props['aria-label'];

    const ariaProps = {
      [attribute]: useText(
        TooltipModalComponent,
        { [attribute]: labelValue },
        attribute,
        defaultValue!
      )
    };

    const value = {
      hasTitle,
      setHasTitle,
      getTitleProps,
      getContentProps,
      getCloseProps
    };

    const Node = (
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
                {...(getBackdropProps() as HTMLAttributes<HTMLDivElement>)}
                {...backdropProps}
                ref={transitionRef}
              >
                <StyledTooltipWrapper
                  ref={setPopperElement}
                  style={styles.popper}
                  placement={state ? state.placement : undefined}
                  zIndex={zIndex}
                  isAnimated={isAnimated}
                  {...attributes.popper}
                >
                  <StyledTooltipModal
                    transitionState={transitionState}
                    placement={state ? state.placement : 'top'}
                    hasArrow={hasArrow}
                    isAnimated={isAnimated}
                    {...modalProps}
                    {...ariaProps}
                    {...props}
                    ref={mergeRefs([modalRef, ref])}
                  />
                </StyledTooltipWrapper>
              </StyledTooltipModalBackdrop>
            </TooltipModalContext.Provider>
          );
        }}
      </CSSTransition>
    );

    return appendToNode ? createPortal(Node, appendToNode) : Node;
  }
);

TooltipModalComponent.displayName = 'TooltipModal';

TooltipModalComponent.defaultProps = {
  placement: 'auto',
  hasArrow: true,
  focusOnMount: true,
  restoreFocus: true
};

TooltipModalComponent.propTypes = {
  appendToNode: PropTypes.any,
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
