import PropTypes from 'prop-types';
import tabbable from 'tabbable';
import {
  ControlledComponent,
  composeEventHandlers,
  KEY_CODES
} from '@zendesk/garden-react-selection';

export default class FocusJailContainer extends ControlledComponent {
  static propTypes = {
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getContainerProps - Props to be spread onto the element you want to jail
     * @param {String} renderProps.getContainerProps.refKey - Modify key used to retrieve the `ref` of the element
     */
    children: PropTypes.func,
    /**
     * Identical to children
     */
    render: PropTypes.func
  };

  componentDidMount() {
    this.focusElement(this.container);
  }

  /** This method is added to the prototype of FocusJailContainer to allow for easier test mocking */
  /* eslint-disable class-methods-use-this */
  focusElement(element) {
    element && element.focus();
  }
  /* eslint-enable class-methods-use-this */

  getContainerProps = ({ onKeyDown, refKey = 'innerRef', ...other } = {}) => {
    return {
      [refKey]: ref => {
        this.container = ref;
      },
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        if (event.keyCode !== KEY_CODES.TAB) {
          return;
        }

        const elements = tabbable(this.container);

        const index = elements.indexOf(event.target);

        if (elements.length === 0) {
          setTimeout(() => {
            this.focusElement(this.container);
          }, 0);

          event.stopPropagation();
          event.preventDefault();
        } else if (event.shiftKey) {
          const newIndex = index <= 0 ? elements.length - 1 : index - 1;

          setTimeout(() => {
            this.focusElement(elements[newIndex]);
          }, 0);

          event.stopPropagation();
          event.preventDefault();
        } else {
          const newIndex = (index + 1) % elements.length;

          setTimeout(() => {
            this.focusElement(elements[newIndex]);
          }, 0);

          event.stopPropagation();
          event.preventDefault();
        }
      }),
      ...other
    };
  };

  render() {
    const { children, render = children } = this.props;

    return render({
      getContainerProps: this.getContainerProps
    });
  }
}
