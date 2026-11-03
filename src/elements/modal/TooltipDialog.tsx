/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  autoPlacement,
  autoUpdate,
  flip,
  offset,
  platform,
  shift,
  useFloating
} from '@floating-ui/react-dom';
import { useModal } from '@zendeskgarden/container-modal';
import PropTypes from 'prop-types';
import { HTMLAttributes, RefObject, useState, useEffect, useRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { TooltipDialogProvider } from '../../context/modal/TooltipDialogContext';
import { getFloatingPlacements } from '../../theming/utils/getFloatingPlacements';
import { useDocument } from '../../theming/utils/useDocument';
import { useGardenTheme } from '../../theming/utils/useGardenTheme';
import { useText } from '../../theming/utils/useText';
import { ITooltipDialogProps, MODAL_PLACEMENT } from '../../types/elements';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledTooltipDialog } from '../../views/modal/StyledTooltipDialog';
import { StyledTooltipDialogBackdrop } from '../../views/modal/StyledTooltipDialogBackdrop';
import { StyledTooltipWrapper } from '../../views/modal/StyledTooltipWrapper';
import { COMPONENT_IDS, getInertValue } from '../utils';
import { Title } from './Title';
import { Body } from './TooltipDialogBody';
import { Close } from './TooltipDialogClose';
import { Footer } from './TooltipDialogFooter';
import { FooterItem } from './TooltipDialogFooterItem';

const PLACEMENT_DEFAULT = 'top';

const TooltipDialogComponent = forwardRef<HTMLDivElement, ITooltipDialogProps>(
  (
    {
      appendToNode,
      referenceElement,
      placement: _placement = 'auto',
      fallbackPlacements: _fallbackPlacements,
      offset: _offset,
      onClose,
      hasArrow = true,
      keepMounted,
      isAnimated,
      zIndex,
      backdropProps,
      focusOnMount = true,
      restoreFocus = true,
      id,
      ...props
    },
    ref
  ) => {
    const theme = useGardenTheme();
    const environment = useDocument(theme);
    const previousReferenceElementRef = useRef<HTMLElement | null | undefined>(undefined);
    const modalRef = useRef<HTMLDivElement>(null);
    const transitionRef = useRef<HTMLDivElement>(null);
    const [floatingElement, setFloatingElement] = useState<HTMLDivElement | null>();
    const [hasTitle, setHasTitle] = useState<boolean>(false);
    const handleClose: ITooltipDialogProps['onClose'] = event => {
      referenceElement && onClose?.(event);
    };
    const { getTitleProps, getCloseProps, getContentProps, getBackdropProps, getModalProps } =
      useModal({
        closeOnBlur: true,
        idPrefix: id,
        onClose: handleClose,
        modalRef: modalRef as RefObject<HTMLElement>,
        focusOnMount,
        /** Handle `restoreFocus` locally to return focus to `referenceElement` */
        restoreFocus: false,
        environment
      });

    const [floatingPlacement, fallbackPlacements] = getFloatingPlacements(
      theme,
      _placement === 'auto' ? PLACEMENT_DEFAULT : _placement!,
      _fallbackPlacements
    );
    const isAutoPlacement = _placement === 'auto';

    const {
      refs,
      placement,
      middlewareData,
      update,
      floatingStyles: { transform }
    } = useFloating({
      platform: {
        ...platform,
        isRTL: () => theme.rtl
      },
      elements: { reference: referenceElement, floating: floatingElement },
      placement: floatingPlacement,
      middleware: [
        offset(_offset === undefined ? theme.space.base * 3 : _offset),
        isAutoPlacement ? autoPlacement() : flip({ fallbackPlacements }),
        shift({ mainAxis: true, crossAxis: true })
      ]
    });
    const placementSide = placement.split('-')[0];
    const arrowShift =
      placementSide === 'top' || placementSide === 'bottom'
        ? -(middlewareData.shift?.x || 0)
        : -(middlewareData.shift?.y || 0);

    useEffect(() => {
      // Only allow positioning updates on visible tooltip modal.
      let cleanup: () => void;

      if (referenceElement && floatingElement && refs.reference.current && refs.floating.current) {
        cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
          elementResize: typeof ResizeObserver === 'function'
        });
      }

      return () => cleanup && cleanup();
    }, [referenceElement, floatingElement, refs.reference, refs.floating, update]);

    useEffect(() => {
      if (!referenceElement && previousReferenceElementRef.current && restoreFocus) {
        previousReferenceElementRef.current.focus();
      }

      previousReferenceElementRef.current = referenceElement;
    }, [referenceElement, restoreFocus]);

    // If <TooltipDialog.Title /> isn't used, remove aria-labelledby
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
        TooltipDialogComponent,
        { [attribute]: labelValue },
        attribute,
        defaultValue!,
        modalRef.current !== null /* prevents `useText` evaluation until fully mounted */
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
        unmountOnExit={!keepMounted}
        timeout={isAnimated ? 200 : 0}
        in={Boolean(referenceElement)}
        classNames={isAnimated ? 'garden-tooltip-modal-transition' : ''}
        nodeRef={transitionRef}
        onEntered={() => {
          if (keepMounted && focusOnMount && modalRef.current) {
            /* When content is kept mounted we must manually focus on re-open */
            modalRef.current.focus();
          }
        }}
      >
        {transitionState => {
          /*
          Hide only at 'exited' so exit animations finish and floating-ui
          sizing/focus logic remain valid during 'exiting'.  Earlier hiding
          would cut animation and risk focus/layout issues.
          */
          const isHidden = keepMounted && transitionState === 'exited'; // [2]

          return (
            <TooltipDialogProvider value={value}>
              <StyledTooltipDialogBackdrop
                {...(getBackdropProps() as HTMLAttributes<HTMLDivElement>)}
                {...backdropProps}
                data-garden-id={COMPONENT_IDS['modals.tooltip_dialog.backdrop']}
                data-garden-version={PACKAGE_VERSION}
                ref={transitionRef}
                aria-hidden={isHidden ? true : undefined}
              >
                <StyledTooltipWrapper
                  ref={setFloatingElement}
                  className={isAnimated ? 'is-animated' : undefined}
                  style={{ transform }}
                  $placement={placement}
                  $zIndex={zIndex}
                  $isAnimated={isAnimated}
                >
                  <StyledTooltipDialog
                    $transitionState={transitionState}
                    $placement={placement}
                    $arrowShift={arrowShift}
                    $hasArrow={hasArrow}
                    $isAnimated={isAnimated}
                    inert={getInertValue(!!isHidden)}
                    {...modalProps}
                    {...ariaProps}
                    {...props}
                    className={
                      isAnimated
                        ? [props.className, 'is-animated'].filter(Boolean).join(' ')
                        : props.className
                    }
                    data-garden-id={COMPONENT_IDS['modals.tooltip_dialog']}
                    data-garden-version={PACKAGE_VERSION}
                    ref={mergeRefs([modalRef, ref])}
                  />
                </StyledTooltipWrapper>
              </StyledTooltipDialogBackdrop>
            </TooltipDialogProvider>
          );
        }}
      </CSSTransition>
    );

    return appendToNode ? createPortal(Node, appendToNode) : Node;
  }
);

TooltipDialogComponent.displayName = 'TooltipDialog';

TooltipDialogComponent.propTypes = {
  appendToNode: PropTypes.any,
  referenceElement: PropTypes.any,
  placement: PropTypes.any,
  fallbackPlacements: PropTypes.arrayOf(
    PropTypes.oneOf(MODAL_PLACEMENT.filter(placement => placement !== 'auto'))
  ),
  isAnimated: PropTypes.bool,
  hasArrow: PropTypes.bool,
  keepMounted: PropTypes.bool,
  zIndex: PropTypes.number,
  onClose: PropTypes.func,
  backdropProps: PropTypes.any,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const TooltipDialog = TooltipDialogComponent as typeof TooltipDialogComponent & {
  Body: typeof Body;
  Close: typeof Close;
  Footer: typeof Footer;
  FooterItem: typeof FooterItem;
  Title: typeof Title;
};

TooltipDialog.Body = Body;
TooltipDialog.Close = Close;
TooltipDialog.Footer = Footer;
TooltipDialog.FooterItem = FooterItem;
TooltipDialog.Title = Title;
