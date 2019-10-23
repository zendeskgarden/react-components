/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useModal } from '@zendeskgarden/container-modal';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import { hasType } from '@zendeskgarden/react-utilities';
import isWindow from 'dom-helpers/isWindow';
import ownerDocument from 'dom-helpers/ownerDocument';
import ownerWindow from 'dom-helpers/ownerWindow';
import css from 'dom-helpers/css';
import getScrollbarSize from 'dom-helpers/scrollbarSize';

import ModalView from '../views/ModalView';
import Backdrop from '../views/Backdrop';
import Body from '../views/Body';
import Close from '../views/Close';
import Header from '../views/Header';

const isOverflowing = element => {
  const doc = ownerDocument(element);
  const win = ownerWindow(doc);

  const isBody = element && element.tagName.toLowerCase() === 'body';

  /* istanbul ignore next */
  if (!isWindow(doc) && !isBody) {
    return element.scrollHeight > element.clientHeight;
  }

  const style = win.getComputedStyle(doc.body);
  const marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  const marginRight = parseInt(style.getPropertyValue('margin-right'), 10);

  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
};

/**
 * High-level abstraction for basic Modal implementations. Accepts all `<div>` props.
 */
const Modal = React.forwardRef(
  ({ backdropProps, children, onClose, center, animate, id, ...modalProps }, ref) => {
    const modalRef = useCombinedRefs(ref);

    const {
      getBackdropProps,
      getModalProps,
      getTitleProps,
      getContentProps,
      getCloseProps
    } = useModal({ id, onClose, modalRef });

    useEffect(() => {
      const bodyElement = document.querySelector('body');
      let previousBodyPaddingRight;

      if (isOverflowing(bodyElement)) {
        const scrollbarSize = getScrollbarSize();
        const bodyPaddingRight = parseInt(css(bodyElement, 'paddingRight') || 0, 10);

        previousBodyPaddingRight = bodyElement.style.paddingRight;
        bodyElement.style.paddingRight = `${bodyPaddingRight + scrollbarSize}px`;
      }

      const previousBodyOverflow = bodyElement.style.overflow;

      bodyElement.style.overflow = 'hidden';

      return () => {
        bodyElement.style.overflow = previousBodyOverflow;
        bodyElement.style.paddingRight = previousBodyPaddingRight;
      };
    }, []);

    return createPortal(
      <Backdrop {...getBackdropProps({ center, animate, ...backdropProps })}>
        <ModalView {...getModalProps({ animate, ref: modalRef, ...modalProps })}>
          {Children.map(children, child => {
            if (!isValidElement(child)) {
              return child;
            }

            if (hasType(child, Header)) {
              return cloneElement(child, getTitleProps(child.props));
            }

            if (hasType(child, Body)) {
              return cloneElement(child, getContentProps(child.props));
            }

            if (hasType(child, Close)) {
              return cloneElement(child, getCloseProps(child.props));
            }

            return child;
          })}
        </ModalView>
      </Backdrop>,
      document.body
    );
  }
);

Modal.propTypes = {
  children: PropTypes.any,
  /**
   * Props to spread onto backdrop element
   */
  backdropProps: PropTypes.object,
  /**
   * Enable large modal styling
   */
  large: PropTypes.bool,
  /**
   * Enable modal animation
   */
  animate: PropTypes.bool,
  /**
   * Center modal
   */
  center: PropTypes.bool,
  /**
   * Callback when a close action has been completed.
   * Can be triggered from the backdrop and Close icon.
   * @param {Object} event - DOM event that triggered the close action
   */
  onClose: PropTypes.func,
  /**
   * The root ID to use for descendants. A unique ID is created if none is provided.
   **/
  id: PropTypes.string
};

Modal.defaultProps = {
  animate: true,
  center: true
};

/** @component */
export default Modal;
