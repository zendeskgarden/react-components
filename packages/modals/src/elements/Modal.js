/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ControlledComponent, IdManager } from '@zendeskgarden/react-selection';
import { hasType } from '@zendeskgarden/react-utilities';
import isWindow from 'dom-helpers/query/isWindow';
import ownerDocument from 'dom-helpers/ownerDocument';
import ownerWindow from 'dom-helpers/ownerWindow';
import css from 'dom-helpers/style';
import getScrollbarSize from 'dom-helpers/util/scrollbarSize';

import ModalContainer from '../containers/ModalContainer';
import ModalView from '../views/ModalView';
import Backdrop from '../views/Backdrop';
import Body from '../views/Body';
import Close from '../views/Close';
import Header from '../views/Header';

/**
 * High-level abstraction for basic Modal implementations. Accepts all `<div>` props.
 */
export default class Modal extends ControlledComponent {
  static propTypes = {
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

  static defaultProps = {
    animate: true,
    center: true
  };

  state = {
    id: IdManager.generateId('garden-modal')
  };

  componentDidMount() {
    const bodyElement = document.querySelector('body');

    if (this.isOverflowing(bodyElement)) {
      const scrollbarSize = getScrollbarSize();
      const bodyPaddingRight = parseInt(css(bodyElement, 'paddingRight') || 0, 10);

      this.previousBodyPaddingRight = bodyElement.style.paddingRight;
      bodyElement.style.paddingRight = `${bodyPaddingRight + scrollbarSize}px`;
    }

    this.previousBodyOverflow = bodyElement.style.overflow;
    bodyElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    const bodyElement = document.querySelector('body');

    bodyElement.style.overflow = this.previousBodyOverflow;
    bodyElement.style.paddingRight = this.previousBodyPaddingRight;
  }

  isOverflowing = element => {
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

  render() {
    const { backdropProps, children, onClose, center, animate, ...modalProps } = this.props;
    const { id } = this.getControlledState();

    return (
      <ModalContainer onClose={onClose} id={id}>
        {({
          getBackdropProps,
          getModalProps,
          getTitleProps,
          getContentProps,
          getCloseProps,
          modalRef
        }) =>
          createPortal(
            <Backdrop {...getBackdropProps({ center, animate, ...backdropProps })}>
              <ModalView {...getModalProps({ animate, ...modalProps })} ref={modalRef}>
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
          )
        }
      </ModalContainer>
    );
  }
}
