/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  ControlledComponent,
  IdManager,
  composeEventHandlers,
  KEY_CODES
} from '@zendeskgarden/react-selection';
import FocusJailContainer from './FocusJailContainer';

export default class ModalContainer extends ControlledComponent {
  static propTypes = {
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getModalProps - Props to be spread onto the modal element
     * @param {Function} renderProps.getTitleProps - Props to be spread onto the modal title element
     * @param {Function} renderProps.getContentProps - Props to be spread onto the modal content element
     * @param {Function} renderProps.getCloseProps - Props to be spread onto the close button/icon
     * @param {Function} renderProps.modalRef - Callback for the ref of the containing modal
     * @param {Function} renderProps.closeModal - Callback to trigger the root `onClock` prop
     */
    children: PropTypes.func,
    /**
     * Identical to children
     */
    render: PropTypes.func,
    /**
     * The root ID to use for descendants. A unique ID is created if none is provided.
     **/
    id: PropTypes.string,
    /**
     * Callback when a close action has been completed.
     * Can be triggered from the backdrop and close elements.
     * @param {Object} event - DOM event that triggered the close action
     */
    onClose: PropTypes.func
  };

  state = {
    id: IdManager.generateId('garden-modal-container')
  };

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn(
        'Deprecation Warning: The `ModalContainer` component has been deprecated. ' +
          'It will be removed in an upcoming major release. Migrate to the ' +
          '`@zendeskgarden/container-modal` package to continue receiving updates.'
      );
      /* eslint-enable */
    }
  }

  getTitleId = () => `${this.getControlledState().id}--title`;

  getContentId = () => `${this.getControlledState().id}--content`;

  closeModal = event => {
    const { onClose } = this.props;

    onClose && onClose(event);
  };

  getBackdropProps = ({ onClick, ...other } = {}) => {
    return {
      onClick: composeEventHandlers(onClick, event => {
        this.closeModal(event);
      }),
      ...other
    };
  };

  getModalProps = ({ role = 'dialog', onClick, onKeyDown, ...other } = {}) => {
    return {
      role,
      tabIndex: -1,
      'aria-modal': true,
      'aria-labelledby': this.getTitleId(),
      'aria-describedby': this.getContentId(),
      onClick: composeEventHandlers(onClick, event => {
        /**
         * Don't want to trigger the backdrop close event
         * if click originates within the Modal
         */
        event.stopPropagation();
      }),
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        if (event.keyCode === KEY_CODES.ESCAPE) {
          this.closeModal(event);
        }
      }),
      ...other
    };
  };

  getTitleProps = ({ id = this.getTitleId(), ...other } = {}) => {
    return {
      id,
      ...other
    };
  };

  getContentProps = ({ id = this.getContentId(), ...other } = {}) => {
    return {
      id,
      ...other
    };
  };

  getCloseProps = ({ onClick, ...other } = {}) => {
    return {
      'aria-label': 'Close modal',
      onClick: composeEventHandlers(onClick, event => {
        this.closeModal(event);
      }),
      ...other
    };
  };

  render() {
    const { children, render = children } = this.props;

    return (
      <FocusJailContainer>
        {({ getContainerProps, containerRef }) =>
          render({
            getBackdropProps: this.getBackdropProps,
            getModalProps: props => getContainerProps(this.getModalProps(props)),
            getTitleProps: this.getTitleProps,
            getContentProps: this.getContentProps,
            getCloseProps: this.getCloseProps,
            modalRef: containerRef,
            closeModal: this.closeModal
          })
        }
      </FocusJailContainer>
    );
  }
}
